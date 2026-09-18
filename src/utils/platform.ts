/**
 * Verifies if the host operating system is macOS (darwin).
 */
export function isMacOSPlatform(): boolean {
  return process.platform === 'darwin';
}
