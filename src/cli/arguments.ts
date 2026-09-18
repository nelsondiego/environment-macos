export interface ParsedArguments {
  isDryRun: boolean;
  isHelpRequested: boolean;
  isVersionRequested: boolean;
}

/**
 * Extracts supported command line options from argument vector.
 */
export function parseCliArguments(commandArguments: string[]): ParsedArguments {
  const isDryRun = commandArguments.includes('--dry-run') || commandArguments.includes('-d');
  const isHelpRequested = commandArguments.includes('--help') || commandArguments.includes('-h');
  const isVersionRequested = commandArguments.includes('--version') || commandArguments.includes('-v');

  return { isDryRun, isHelpRequested, isVersionRequested };
}
