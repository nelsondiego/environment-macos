import * as clack from '@clack/prompts';

/**
 * Handles early termination when user aborts a prompt via Ctrl+C.
 */
export function handlePromptCancellation(promptValue: unknown): boolean {
  if (!clack.isCancel(promptValue)) {
    return false;
  }

  clack.cancel('Operation cancelled by user.');
  return true;
}
