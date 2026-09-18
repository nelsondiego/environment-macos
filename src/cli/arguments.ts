export interface ParsedArguments {
  isDryRun: boolean;
  isHelpRequested: boolean;
}

/**
 * Extracts supported command line options from argument vector.
 */
export function parseCliArguments(commandArguments: string[]): ParsedArguments {
  const isDryRun = commandArguments.includes('--dry-run') || commandArguments.includes('-d');
  const isHelpRequested = commandArguments.includes('--help') || commandArguments.includes('-h');

  return { isDryRun, isHelpRequested };
}
