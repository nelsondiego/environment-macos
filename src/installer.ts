import * as clack from '@clack/prompts';
import pc from 'picocolors';
import { softwareCategories } from './data/index';
import { showSummaryOutro, showWelcomeBanner } from './installer/banner';
import { executeSoftwareInstallation } from './installer/executor';
import {
  promptCategorySelection,
  promptContinueAfterInstallationError,
  promptInstallationConfirmation,
  promptSoftwareSelectionForCategories
} from './installer/prompts';
import { LiveOutputWindow } from './installer/window';
import type { InstallerOptions, SoftwareItem } from './types/index';
import { isMacOSPlatform } from './utils/platform';

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

  // Step 1: Select Categories
  const selectedCategoryIds = await promptCategorySelection(softwareCategories);
  if (!selectedCategoryIds) {
    return;
  }

  if (selectedCategoryIds.length === 0) {
    clack.outro(pc.yellow('No categories selected. Process finished.'));
    return;
  }

  // Step 2: Select Software in Target Categories
  const targetCategories = softwareCategories.filter((category) =>
    selectedCategoryIds.includes(category.id)
  );

  const selectedSoftwareItems = await promptSoftwareSelectionForCategories(targetCategories);
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
