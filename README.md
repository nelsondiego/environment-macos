# Environment macOS (`dn-mac`)

<p align="center">
  <a href="https://www.npmjs.com/package/dn-mac"><img src="https://img.shields.io/npm/v/dn-mac.svg?style=flat-square&color=cb3837" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/dn-mac"><img src="https://img.shields.io/npm/dm/dn-mac.svg?style=flat-square&color=blue" alt="npm downloads"></a>
  <img src="https://img.shields.io/badge/platform-macOS-lightgrey.svg?style=flat-square&logo=apple" alt="macOS platform">
  <img src="https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg?style=flat-square&logo=node.js" alt="Node.js version">
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-CC%20BY--NC--ND%204.0-orange.svg?style=flat-square" alt="License"></a>
  <a href="https://github.com/nelsondiego"><img src="https://img.shields.io/badge/maintainer-@nelsondiego-blue?style=flat-square&logo=github" alt="Maintainer"></a>
</p>

An interactive, modern terminal CLI built for macOS to provision and configure your development environment effortlessly using Homebrew and curated software packages.

---

## ✨ Features

- 🎯 **Interactive Terminal Wizard**: Clean UI powered by `@clack/prompts` with smooth navigation and keyboard controls.
- ⚡️ **Zero Installation Required**: Run instantly from anywhere in your macOS terminal with `npx dn-mac`.
- 🗂 **Categorized Catalog**: 12 organized categories covering core developer utilities, IDEs, terminals, browsers, databases, AI tools, and more.
- 📦 **Sensible Defaults**: Popular developer essentials (Homebrew, Git, Oh My Zsh, Antigravity-Ide, Ghostty, Chrome, etc.) come pre-selected.
- 🖥 **Live Output Window**: An embedded real-time output terminal underneath the spinner lets you monitor exact stdout/stderr logs.
- 🛡 **Safe Simulation Mode (`--dry-run`)**: Test and preview what would happen without modifying your system.
- 🔄 **Interactive Error Recovery**: If an installation encounters an issue, the CLI pauses, displays the error details, and asks if you'd like to proceed.

---

## ⚡️ Quick Start

Run the interactive installer directly using `npx`:

```bash
npx dn-mac
```

Or install it globally if you prefer:

```bash
npm install -g dn-mac
dn-mac
```

---

## 🚀 Usage & Options

```bash
dn-mac [options]
```

### Options

| Flag | Description |
|---|---|
| `-d`, `--dry-run` | Run the wizard in **simulation mode** (validates selections and displays commands without altering your system) |
| `-h`, `--help` | Display CLI help information and usage instructions |
| `-v`, `--version` | Display the current version number |

### Examples

```bash
# Run interactive installer
npx dn-mac

# Test the selection and review commands without installing anything
npx dn-mac --dry-run
```

---

## 💡 How It Works

The CLI guides you through a clean 2-step setup process built with `@clack/prompts`:

1. **Step 1: Choose Categories**
   Select which software groups you want to review (all categories are pre-selected for convenience).
2. **Step 2: Choose Packages**
   For each selected category, pick the exact software you want. Essential developer tools (Homebrew, Git, Oh My Zsh, Antigravity-Ide, Ghostty, Chrome, etc.) come pre-checked by default (`default: true`).
3. **Confirmation & Summary**
   Review a summarized list of all selected packages with clear descriptions before installation starts.
4. **Execution with Progress Spinners & Live Output Window**
   Each command runs sequentially with real-time spinners and an inline live output window displaying stdout/stderr logs.
5. **Interactive Error Recovery**
   If an installation error occurs, the CLI pauses, displays the error details, and asks whether you want to proceed with the remaining items or stop.

---

## 📦 Software Categories Included

The catalog is modularized under `src/data/categories/`:

- **Core Tools & Package Managers** (`core.ts`): Homebrew, Git, Oh My Zsh, NVM, PNPM, Yarn, Vercel CLI, Composer.
- **Code Editors & IDEs** (`editors.ts`): Antigravity-Ide, Visual Studio Code, Cursor, Windsurf, Trae AI, Zed, JetBrains Fleet, Android Studio.
- **Terminals & Emulators** (`terminals.ts`): Ghostty, iTerm2, Warp, Hyper.
- **Git GUI Clients** (`git.ts`): Fork, GitHub Desktop.
- **Languages, Runtimes & Frameworks** (`runtimes.ts`): PHP (Latest), PHP Monitor, Laravel Herd, Flutter, CocoaPods, OpenJDK (11, 17, 21).
- **Databases & GUI Clients** (`databases.ts`): DBngin, Sequel-Ace, DBeaver Community.
- **Containers & Virtualization** (`containers.ts`): OrbStack, Docker Desktop, Minikube.
- **Artificial Intelligence & Local LLMs** (`ai.ts`): Ollama, LM Studio.
- **Browsers & Web Testing Tools** (`browsers.ts`): Google Chrome, Arc, Responsively, Insomnia, Ngrok, MiniSim.
- **System Utilities** (`utilities.ts`): AppCleaner, Numi, Google Drive, Keka, Battery, BalenaEtcher, Cloudflare WARP, Mipony.
- **Communication & Collaboration** (`communication.ts`): Discord, WhatsApp, Slack, Telegram, Microsoft Teams.
- **Multimedia & Entertainment** (`media.ts`): VLC, Plex Media Server, Transmission, Spotify, OBS Studio, Adobe Creative Cloud, Native Access, Engine DJ, Rekordbox, Steam.

---

## ⚠️ Important Considerations & Post-Install Steps

### 1. Homebrew Requirement
Most CLI and Desktop packages are installed via [Homebrew](https://brew.sh).
- If Homebrew is not installed yet on your Mac, make sure **Homebrew** is selected in the "Core Tools" category (it is marked by default).
- You can also install it manually prior to running other tools:
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

### 2. Sudo Permissions
Certain software installations or configurations (e.g. creating symlinks in `/Library/Java/JavaVirtualMachines` or system-level drivers) may prompt you for your macOS administrator password in the terminal.

### 3. NVM (Node Version Manager) Configuration
After installing NVM via Homebrew, ensure the following lines are added to your `~/.zshrc`:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
```

---

## 🛠️ Requirements

- **macOS**: Apple Silicon (M1/M2/M3/M4) or Intel
- **Node.js**: `>= 20.0.0`
- **Internet Connection**: Required to download Homebrew bottles and casks

---

## 🤝 Contributing & Issues

Contributions, issues, and feature requests are welcome!  
Feel free to open an issue or pull request on the GitHub repository:  
👉 [https://github.com/nelsondiego/environment-macos](https://github.com/nelsondiego/environment-macos)

---

## 📄 License

This project is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](./LICENSE).  
Free to use; copying, commercial use, and distribution of derivative works are prohibited.
