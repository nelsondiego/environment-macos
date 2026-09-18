#!/usr/bin/env node

import pc from 'picocolors';
import { parseCliArguments } from './cli/arguments';
import { displayHelpInformation } from './cli/help';
import { runInstaller } from './installer';
import { APPLICATION_VERSION } from './version';

/**
 * CLI application entry point.
 */
async function main(): Promise<void> {
  const { isDryRun, isHelpRequested, isVersionRequested } = parseCliArguments(process.argv.slice(2));

  if (isVersionRequested) {
    console.log(APPLICATION_VERSION);
    return;
  }

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
