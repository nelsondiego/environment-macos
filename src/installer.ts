import * as clack from '@clack/prompts';
import pc from 'picocolors';
import { softwareCategories } from './data/index';
import { showSummaryOutro, showWelcomeBanner } from './installer/banner';
import { executeSoftwareInstallation } from './installer/executor';
import {
  promptCategorySelection,
  promptContinueAfterInstallationError,
  promptInstallationConfirmation,
  promptInstallationMode,
  promptSoftwareSelectionForCategories
} from './installer/prompts';
import { LiveOutputWindow } from './installer/window';
import type { InstallationMode, InstallerOptions, SoftwareCategory, SoftwareItem } from './types/index';
import { isHomebrewInstalled, runHomebrewInstallation } from './utils/homebrew';
import { isMacOSPlatform } from './utils/platform';

/**
 * Resolves packages to install based on the selected installation mode using flat control flow.
 */
async function resolveSoftwareItemsByMode(
  mode: InstallationMode,
  categories: SoftwareCategory[]
): Promise<SoftwareItem[] | null> {
  if (mode === 'default') {
    return categories.flatMap((category) =>
      category.items.filter((item) => item.default)
    );
  }

  if (mode === 'all') {
    return categories.flatMap((category) => category.items);
  }

  // Manual mode: select categories first, then select individual packages
  const selectedCategoryIds = await promptCategorySelection(categories);
  if (!selectedCategoryIds) {
    return null;
  }

  if (selectedCategoryIds.length === 0) {
    clack.outro(pc.yellow('No categories selected. Process finished.'));
    return null;
  }

  const targetCategories = categories.filter((category) =>
    selectedCategoryIds.includes(category.id)
  );

  return promptSoftwareSelectionForCategories(targetCategories);
}

/**
 * Main orchestration function for the macOS software installer.
 */
export async function runInstaller(options: InstallerOptions): Promise<void> {
  const { isDryRun } = options;

  if (!isMacOSPlatform() && !isDryRun) {
    clack.intro(pc.red('dn-mac - Compatibility Error'));
    clack.outro(pc.yellow('This tool is designed specifically for macOS (darwin).'));
    return;
  }

  showWelcomeBanner(isDryRun);

  // Prerequisite Check: Homebrew
  const brewCheckSpinner = clack.spinner();
  brewCheckSpinner.start('Checking Homebrew installation...');

  const hasHomebrew = await isHomebrewInstalled();

  if (!hasHomebrew) {
    brewCheckSpinner.stop(pc.yellow('Homebrew is not installed on this system.'));

    const shouldInstallHomebrew = await clack.confirm({
      message: 'Homebrew is required to install macOS packages. Would you like to install Homebrew now?',
      initialValue: true
    });

    if (!shouldInstallHomebrew) {
      clack.outro(pc.yellow('Homebrew is required to continue. Setup aborted.'));
      return;
    }

    const homebrewInstalledSuccessfully = await runHomebrewInstallation(isDryRun);
    if (!homebrewInstalledSuccessfully) {
      clack.outro(pc.red('Failed to install Homebrew. Setup aborted.'));
      return;
    }

    clack.log.success(pc.green('Homebrew installed successfully. Proceeding to setup...'));
  } else {
    brewCheckSpinner.stop(pc.green('Homebrew is installed and ready.'));
  }

  // Step 1: Select Installation Mode
  const chosenInstallationMode = await promptInstallationMode();
  if (!chosenInstallationMode) {
    return;
  }

  // Step 2: Resolve Software Items based on Chosen Mode
  const selectedSoftwareItems = await resolveSoftwareItemsByMode(
    chosenInstallationMode,
    softwareCategories
  );

  if (!selectedSoftwareItems) {
    return;
  }

  if (selectedSoftwareItems.length === 0) {
    clack.outro(pc.yellow('No software packages selected for installation. Process finished.'));
    return;
  }

  // Step 3: Confirm before executing
  const isConfirmedByUser = await promptInstallationConfirmation(selectedSoftwareItems);
  if (!isConfirmedByUser) {
    clack.outro(pc.yellow('Installation cancelled by user.'));
    return;
  }

  // Step 4: Execution Loop
  clack.note('Starting sequential provisioning process...', 'Installation');

  const successfullyInstalled: string[] = [];
  const failedInstallations: { name: string; error: string }[] = [];

  for (let index = 0; index < selectedSoftwareItems.length; index++) {
    const item: SoftwareItem = selectedSoftwareItems[index];
    const progressTag = `[${index + 1}/${selectedSoftwareItems.length}]`;
    const baseInstallMessage = `${progressTag} Installing ${pc.bold(item.name)}...`;
    const liveWindow = new LiveOutputWindow(baseInstallMessage);

    const executionResult = await executeSoftwareInstallation(item, isDryRun, {
      onOutputLine: (lineText) => liveWindow.appendLine(lineText)
    });

    if (executionResult.success) {
      const labelPrefix = isDryRun ? '[SIMULATED] ' : '';
      liveWindow.finish(`${pc.green('◇')}  ${progressTag} ✓ ${labelPrefix}${item.name} processed successfully.`);
      successfullyInstalled.push(item.name);
      continue;
    }

    const errorMessage = executionResult.errorMessage || 'Unknown error during execution.';
    liveWindow.finish(`${pc.red('◇')}  ${progressTag} ✗ Failed to install ${item.name}.`);
    failedInstallations.push({ name: item.name, error: errorMessage });
    clack.note(pc.red(errorMessage), `Error installing ${item.name}`);

    const shouldContinueAfterError = await promptContinueAfterInstallationError(item.name);
    if (!shouldContinueAfterError) {
      clack.outro(
        pc.yellow(
          `Installation interrupted following error in ${item.name}. Completed ${successfullyInstalled.length} of ${selectedSoftwareItems.length} packages.`
        )
      );
      return;
    }
  }

  showSummaryOutro(successfullyInstalled.length, failedInstallations, isDryRun);
}
