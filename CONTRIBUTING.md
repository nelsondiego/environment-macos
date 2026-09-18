# Contributing to `dn-mac`

Thank you for your interest in improving `dn-mac`! Contributions from the community are welcome.

## How to Contribute

### Reporting Bugs and Suggesting Features
- Please check existing issues before opening a new one.
- Use our issue templates for [Bug Reports](https://github.com/nelsondiego/environment-macos/issues/new?template=bug_report.md) or [Feature Requests](https://github.com/nelsondiego/environment-macos/issues/new?template=feature_request.md).
- Describe the bug with clear steps to reproduce and macOS environment details.

### Adding or Updating Software Packages
To add new packages or update commands in the catalog:
1. Locate the relevant category file under `src/data/categories/` (e.g. `editors.ts`, `terminals.ts`).
2. Add the `SoftwareItem` object conforming to the interface:
   ```typescript
   {
     name: 'AppName',
     description: 'Short descriptive purpose',
     command: 'brew install appname', // or brew install --cask appname
     default: false
   }
   ```
3. Keep control flow flat without nested `if` statements.

### Development Workflow
1. Clone the repository:
   ```bash
   git clone https://github.com/nelsondiego/environment-macos.git
   cd environment-macos
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run tests / dry-run simulation mode:
   ```bash
   pnpm dry-run
   ```
4. Build the distribution bundle:
   ```bash
   pnpm build
   ```
5. Verify TypeScript types:
   ```bash
   npx tsc --noEmit
   ```

### Pull Request Guidelines
- Create a feature branch (`git checkout -b feature/my-feature`).
- Ensure all code comments, variable names, and technical identifiers are in English.
- User-facing terminal messages and prompts should maintain consistency with the existing CLI style.
- Make sure `pnpm build` and `npx tsc --noEmit` pass with zero errors.
- Commit your changes with clear semantic commit messages (e.g. `feat: ...`, `fix: ...`, `docs: ...`).
- Submit your pull request to the `main` branch.
