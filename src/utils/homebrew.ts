import { exec, spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { promisify } from 'node:util';
import * as clack from '@clack/prompts';
import pc from 'picocolors';
import { simulateCommandExecution } from './timer';

const execAsync = promisify(exec);

const HOMEBREW_INSTALL_COMMAND =
  '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"';

/**
 * Checks if Homebrew is installed in PATH or at standard macOS paths.
 */
export async function isHomebrewInstalled(): Promise<boolean> {
  const commonBinaryPaths = [
    '/opt/homebrew/bin/brew', // Apple Silicon
    '/usr/local/bin/brew' // Intel
  ];

  for (const binaryPath of commonBinaryPaths) {
    if (existsSync(binaryPath)) {
      return true;
    }
  }

  try {
    const { stdout } = await execAsync('which brew');
    return stdout.trim().length > 0;
  } catch {
    return false;
  }
}

/**
 * Ensures Homebrew bin directory is available in process.env.PATH during current session.
 */
export function ensureHomebrewInPath(): void {
  const commonPaths = ['/opt/homebrew/bin', '/usr/local/bin'];
  const currentPath = process.env.PATH || '';

  const pathsToAdd = commonPaths.filter(
    (binDir) => existsSync(binDir) && !currentPath.includes(binDir)
  );

  if (pathsToAdd.length > 0) {
    process.env.PATH = `${pathsToAdd.join(':')}:${currentPath}`;
  }
}

/**
 * Runs the official Homebrew interactive installation.
 */
export async function runHomebrewInstallation(isDryRun: boolean): Promise<boolean> {
  if (isDryRun) {
    clack.note(
      `[SIMULATION] Would execute:\n${HOMEBREW_INSTALL_COMMAND}`,
      'Homebrew Installation'
    );
    await simulateCommandExecution(600);
    return true;
  }

  clack.note(
    'Launching the official Homebrew installer.\nYou may be prompted for your macOS administrator password or to press RETURN.',
    'Homebrew Setup'
  );

  return new Promise<boolean>((resolve) => {
    const installProcess = spawn(HOMEBREW_INSTALL_COMMAND, {
      shell: true,
      stdio: 'inherit',
      env: process.env
    });

    installProcess.on('error', (spawnError) => {
      clack.note(pc.red(spawnError.message), 'Homebrew Installation Error');
      resolve(false);
    });

    installProcess.on('close', (exitCode) => {
      if (exitCode === 0) {
        ensureHomebrewInPath();
        resolve(true);
        return;
      }

      resolve(false);
    });
  });
}
