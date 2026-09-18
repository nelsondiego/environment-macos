#!/usr/bin/env node

import pc from 'picocolors';
import { parseCliArguments } from './cli/arguments';
import { displayHelpInformation } from './cli/help';
import { runInstaller } from './installer';

/**
 * CLI application entry point.
 */
async function main(): Promise<void> {
  const { isDryRun, isHelpRequested } = parseCliArguments(process.argv.slice(2));

  if (isHelpRequested) {
    displayHelpInformation();
    return;
  }

  try {
    await runInstaller({ isDryRun });
  } catch (caughtExecutionError: unknown) {
    const errorDetails =
      caughtExecutionError instanceof Error
        ? caughtExecutionError.message
        : String(caughtExecutionError);

    console.error(pc.red(`Unhandled error in dn-mac: ${errorDetails}`));
    process.exit(1);
  }
}

main();
