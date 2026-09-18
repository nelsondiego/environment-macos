/**
 * Pauses asynchronous execution for simulated command runs.
 */
export async function simulateCommandExecution(durationInMilliseconds = 350): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, durationInMilliseconds));
}
