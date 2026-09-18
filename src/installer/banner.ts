import * as clack from '@clack/prompts';
import pc from 'picocolors';

/**
 * Displays initial welcome and mode banner.
 */
export function showWelcomeBanner(isDryRun: boolean): void {
  const bannerHeadline = isDryRun
    ? `${pc.bold('dn-mac')} - macOS Environment Setup ${pc.cyan('[SIMULATION MODE --dry-run]')}`
    : `${pc.bold('dn-mac')} - macOS Software Installer`;

  clack.intro(pc.bgCyan(pc.black(` ${bannerHeadline} `)));

  if (!isDryRun) {
    return;
  }

  clack.note(
    'You are running dn-mac in dry-run simulation mode (--dry-run).\nNo commands will make actual changes to your system.',
    'Simulation Notice'
  );
}

/**
 * Displays completion summary and failure alerts.
 */
export function showSummaryOutro(
  successCount: number,
  failedItems: { name: string; error: string }[],
  isDryRun: boolean
): void {
  const failureCount = failedItems.length;

  if (failureCount > 0) {
    const failedNames = failedItems.map((item) => item.name).join(', ');
    clack.note(`Completed: ${successCount}\nFailed: ${failureCount} (${failedNames})`, 'Final Summary');
  }

  const summaryMessage = isDryRun
    ? pc.green(`✓ Simulation completed: ${successCount} packages validated successfully.`)
    : pc.green(`✓ Process finished: ${successCount} packages installed successfully.`);

  clack.outro(summaryMessage);
}
