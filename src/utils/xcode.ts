import * as clack from '@clack/prompts';
import pc from 'picocolors';
import { spawnProcess } from './process';
import { simulateCommandExecution } from './timer';

/**
 * Checks whether Xcode Command Line Tools are installed.
 */
export async function isXcodeCommandLineToolsInstalled(): Promise<boolean> {
  return new Promise<boolean>(async (resolve) => {
    try {
      const processInstance = await spawnProcess('xcode-select', ['-p'], {
        stdio: 'ignore'
      });

      processInstance.on('error', () => {
        resolve(false);
      });

      processInstance.on('close', (exitCode) => {
        resolve(exitCode === 0);
      });
    } catch {
      resolve(false);
    }
  });
}

/**
 * Runs the interactive installation for Xcode Command Line Tools.
 */
export async function runXcodeCommandLineToolsInstallation(isDryRun: boolean): Promise<boolean> {
  if (isDryRun) {
    clack.note(
      '[SIMULATION] Would execute:\nxcode-select --install',
      'Xcode Command Line Tools'
    );
    await simulateCommandExecution(600);
    return true;
  }

  clack.note(
    'A software update dialog has been opened by macOS.\nPlease click "Install" and accept the license terms to continue.',
    'Xcode Command Line Tools'
  );

  return new Promise<boolean>(async (resolve) => {
    try {
      const installProcess = await spawnProcess('xcode-select', ['--install'], {
        stdio: 'ignore'
      });

      installProcess.on('error', () => {
        // If it fails to spawn xcode-select
        resolve(false);
      });

      installProcess.on('close', async () => {
        // After triggering the dialog, wait for installation completion
        const waitSpinner = clack.spinner();
        waitSpinner.start('Waiting for Command Line Tools installation to finish...');

        const pollIntervalMs = 4000;
        const maxWaitMs = 1000 * 60 * 30; // 30 mins timeout
        let elapsedMs = 0;

        const intervalId = setInterval(async () => {
          elapsedMs += pollIntervalMs;
          const isInstalled = await isXcodeCommandLineToolsInstalled();

          if (isInstalled) {
            clearInterval(intervalId);
            waitSpinner.stop(pc.green('Xcode Command Line Tools installed successfully.'));
            resolve(true);
            return;
          }

          if (elapsedMs >= maxWaitMs) {
            clearInterval(intervalId);
            waitSpinner.stop(pc.red('Timed out waiting for Xcode Command Line Tools installation.'));
            resolve(false);
          }
        }, pollIntervalMs);
      });
    } catch {
      resolve(false);
    }
  });
}
