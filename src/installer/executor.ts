import { spawn } from 'node:child_process';
import type { SoftwareItem } from '../types/index';
import { simulateCommandExecution } from '../utils/timer';

export interface ExecutionResult {
  success: boolean;
  errorMessage?: string;
}

export interface ExecutionCallbacks {
  onOutputLine?: (lineText: string) => void;
}

/**
 * Runs the shell command associated with a software package, streaming stdout/stderr line by line.
 */
export async function executeSoftwareInstallation(
  item: SoftwareItem,
  isDryRun: boolean,
  callbacks?: ExecutionCallbacks
): Promise<ExecutionResult> {
  if (isDryRun) {
    if (callbacks?.onOutputLine) {
      callbacks.onOutputLine(`Running command: ${item.command}`);
      await simulateCommandExecution(180);
      callbacks.onOutputLine('Simulating dependency verification...');
      await simulateCommandExecution(180);
      callbacks.onOutputLine('Simulated package download and configuration.');
    } else {
      await simulateCommandExecution(350);
    }
    return { success: true };
  }

  return new Promise<ExecutionResult>((resolve) => {
    // Prepend standard Homebrew paths so newly installed packages/brew are always accessible
    const executionCommand = `PATH="/opt/homebrew/bin:/usr/local/bin:$PATH" ${item.command}`;

    const childProcess = spawn('/bin/sh', ['-c', executionCommand]);

    const errorChunks: string[] = [];

    const handleDataStream = (dataChunk: Buffer | string) => {
      const text = dataChunk.toString();
      const lines = text.split('\n');
      for (const rawLine of lines) {
        const trimmedLine = rawLine.trim();
        if (trimmedLine && callbacks?.onOutputLine) {
          callbacks.onOutputLine(trimmedLine);
        }
      }
    };

    childProcess.stdout.on('data', handleDataStream);

    childProcess.stderr.on('data', (dataChunk: Buffer | string) => {
      const text = dataChunk.toString();
      errorChunks.push(text);
      handleDataStream(dataChunk);
    });

    childProcess.on('error', (spawnError: Error) => {
      resolve({
        success: false,
        errorMessage: spawnError.message
      });
    });

    childProcess.on('close', (exitCode: number | null) => {
      if (exitCode === 0) {
        resolve({ success: true });
        return;
      }

      const combinedError = errorChunks.join('\n').trim();
      resolve({
        success: false,
        errorMessage: combinedError || `Process exited with code ${exitCode}`
      });
    });
  });
}
