import pc from 'picocolors';

/**
 * Prints formatted CLI help instructions to standard output.
 */
export function displayHelpInformation(): void {
  console.log(`
${pc.bold(pc.cyan('dn-mac'))} - Interactive CLI for installing software and configuring macOS environment

${pc.bold('USAGE:')}
  $ npx dn-mac [options]
  $ pnpm start [options]

${pc.bold('OPTIONS:')}
  -d, --dry-run    Run wizard in simulation mode (no actual system changes)
  -h, --help       Display help information
  -v, --version    Display version number

${pc.bold('EXAMPLES:')}
  $ npx dn-mac
  $ npx dn-mac --dry-run
`);
}
