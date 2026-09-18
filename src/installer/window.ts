import * as readline from 'node:readline';
import pc from 'picocolors';

const SPINNER_FRAMES = ['◒', '◐', '◓', '◑'];
const FIXED_BOX_HEIGHT = 4;
const FIXED_BOX_WIDTH = 68;

export class LiveOutputWindow {
  private recentLogLines: string[] = [];
  private spinnerFrameIndex = 0;
  private animationIntervalTimer: NodeJS.Timeout | null = null;
  private previousRenderedHeight = 0;
  private isEnded = false;

  constructor(private headlineMessage: string) {
    this.startRenderingLoop();
  }

  /**
   * Starts the animation timer redrawing the spinner and window box in-place.
   */
  private startRenderingLoop(): void {
    // Initial draw
    this.renderFrame();

    this.animationIntervalTimer = setInterval(() => {
      this.spinnerFrameIndex = (this.spinnerFrameIndex + 1) % SPINNER_FRAMES.length;
      this.renderFrame();
    }, 90);
  }

  /**
   * Ingests a new output line from child process, keeping only the latest lines.
   */
  public appendLine(incomingLogText: string): void {
    if (!incomingLogText || this.isEnded) {
      return;
    }

    const cleanedText = incomingLogText.replace(/\r/g, '').trim();
    if (!cleanedText) {
      return;
    }

    this.recentLogLines.push(cleanedText);
    if (this.recentLogLines.length > 20) {
      this.recentLogLines.shift();
    }
  }

  /**
   * Redraws the spinner and fixed box exactly in-place using readline cursor controls.
   */
  private renderFrame(): void {
    if (this.isEnded) {
      return;
    }

    // Move cursor up by previous height to overwrite existing frame
    if (this.previousRenderedHeight > 0) {
      readline.moveCursor(process.stdout, 0, -this.previousRenderedHeight);
      readline.cursorTo(process.stdout, 0);
    }

    const spinnerGlyph = pc.magenta(SPINNER_FRAMES[this.spinnerFrameIndex]);
    const borderBar = '─'.repeat(FIXED_BOX_WIDTH);

    // Take the last FIXED_BOX_HEIGHT lines, padding empty lines at top if needed
    const linesToDisplay = this.recentLogLines.slice(-FIXED_BOX_HEIGHT);
    while (linesToDisplay.length < FIXED_BOX_HEIGHT) {
      linesToDisplay.unshift('');
    }

    const terminalRows: string[] = [
      `${spinnerGlyph}  ${this.headlineMessage}`,
      pc.dim(`   ┌${borderBar}┐`),
      ...linesToDisplay.map((textLine) => {
        const truncated = textLine.slice(0, FIXED_BOX_WIDTH - 2);
        const paddedContent = truncated.padEnd(FIXED_BOX_WIDTH - 2);
        return pc.dim('   │ ') + pc.cyan(paddedContent) + pc.dim(' │');
      }),
      pc.dim(`   └${borderBar}┘`)
    ];

    this.previousRenderedHeight = terminalRows.length;
    process.stdout.write(terminalRows.join('\n') + '\n');
  }

  /**
   * Stops the animation and cleans up the box, leaving only the final success/error line.
   */
  public finish(finalResultLine: string): void {
    if (this.isEnded) {
      return;
    }

    this.isEnded = true;

    if (this.animationIntervalTimer) {
      clearInterval(this.animationIntervalTimer);
      this.animationIntervalTimer = null;
    }

    // Clear the entire box area
    if (this.previousRenderedHeight > 0) {
      readline.moveCursor(process.stdout, 0, -this.previousRenderedHeight);
      readline.cursorTo(process.stdout, 0);
      readline.clearScreenDown(process.stdout);
    }

    process.stdout.write(`${finalResultLine}\n`);
  }
}
