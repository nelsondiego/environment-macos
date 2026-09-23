# Environment macOS (`dn-mac`)

<p align="center">
  <a href="https://www.npmjs.com/package/dn-mac"><img src="https://img.shields.io/npm/v/dn-mac.svg?style=flat-square&color=cb3837" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/dn-mac"><img src="https://img.shields.io/npm/dm/dn-mac.svg?style=flat-square&color=blue" alt="npm downloads"></a>
  <img src="https://img.shields.io/badge/platform-macOS-lightgrey.svg?style=flat-square&logo=apple" alt="macOS platform">
  <img src="https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg?style=flat-square&logo=node.js" alt="Node.js version">
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="License"></a>
  <a href="https://github.com/nelsondiego"><img src="https://img.shields.io/badge/maintainer-@nelsondiego-blue?style=flat-square&logo=github" alt="Maintainer"></a>
</p>

An interactive, modern terminal CLI built for macOS to provision and configure your development environment effortlessly using Homebrew and curated software packages.

---

## ✨ Features

- 🎯 **Interactive Terminal Wizard**: Clean UI powered by `@clack/prompts` with smooth navigation and keyboard controls.
- ⚡️ **Zero Prerequisites Required**: Run instantly on fresh macOS installations with `curl -fsSL git.new/dn-mac | bash` or directly with `npx dn-mac`.
- 🛠 **Automated Toolchain Verification**: Sequentially checks and installs **Xcode Command Line Tools** and **Homebrew** before running software provisioning.
- ⚙️ **Flexible Installation Modes**: Choose between **Default installation** (curated essentials), **Manual** (custom selection per category), or **Install all** (entire catalog).
- 🗂 **Categorized Catalog**: 12 organized categories covering core developer utilities, IDEs, terminals, browsers, databases, AI tools, and more.
- 📦 **Sensible Defaults**: Popular developer essentials (Git, Oh My Zsh, Antigravity-Ide, Ghostty, Chrome, etc.) come pre-selected.
- 🖥 **Live Output Window**: An embedded real-time output terminal underneath the spinner lets you monitor exact stdout/stderr logs.
- 🛡 **Safe Simulation Mode (`--dry-run`)**: Test and preview what would happen without modifying your system.
- 🔄 **Interactive Error Recovery**: If an installation encounters an issue, the CLI pauses, displays the error details, and asks if you'd like to proceed.

---

## ⚡️ Quick Start

### 🍏 On a Fresh / Clean macOS (Single Command)

If you just installed macOS or set up a new Mac (where Node.js, Homebrew, and Xcode Command Line Tools are not yet installed), run this single command:

```bash
/bin/bash -c "$(curl -fsSL git.new/dn-mac)"
```

*(Alternatively, `curl -fsSL git.new/dn-mac | bash` is also fully supported.)*

> This automatically provisions **Xcode Command Line Tools**, **Homebrew**, and **Node.js**, then immediately launches the interactive `dn-mac` wizard.

---

### 💻 On Machines with Node.js Pre-installed

If you already have Node.js and `npx` available:

```bash
npx dn-mac
```

Or install globally:

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
# Clean install on a brand new Mac (recommended)
/bin/bash -c "$(curl -fsSL git.new/dn-mac)"

# Or via pipeline
curl -fsSL git.new/dn-mac | bash

# Run interactive installer via NPX
npx dn-mac

# Test the selection and review commands without installing anything
npx dn-mac --dry-run
```

---

## 💡 How It Works

The CLI guides you through an automated, clean setup process built with `@clack/prompts`:

1. **Prerequisite Check 1: Xcode Command Line Tools**
   Verifies that Apple's developer tools (`xcode-select`) are ready. If missing, it guides you through the official macOS installer dialog before proceeding.
2. **Prerequisite Check 2: Homebrew**
   Detects if Homebrew is installed. If not, it prompts you to install it right away and launches the official Homebrew installer before proceeding.
3. **Step 1: Choose Categories**
   Select which software groups you want to review (all categories are pre-selected for convenience).
3. **Step 2: Choose Packages**
   For each selected category, pick the exact software you want. Essential developer tools (Git, Oh My Zsh, Antigravity-Ide, Ghostty, Chrome, etc.) come pre-checked by default (`default: true`).
4. **Confirmation & Summary**
   Review a summarized list of all selected packages with clear descriptions before installation starts.
5. **Execution with Progress Spinners & Live Output Window**
   Each command runs sequentially with real-time spinners and an inline live output window displaying stdout/stderr logs.
6. **Interactive Error Recovery**
   If an installation error occurs, the CLI pauses, displays the error details, and asks whether you want to proceed with the remaining items or stop.

---

## 📦 Software Categories Included

The catalog is modularized under `src/data/categories/`:

### Core Tools & Package Managers

Essential package managers, version control systems, and shell environments

| Package | Description | Default |
|---|---|:---:|
| **Git** | Distributed version control system | ✅ |
| **Oh My Zsh** | Delightful framework for managing Zsh configuration | ✅ |
| **NVM (Node Version Manager)** | Node.js version manager for managing multiple active Node environments | ✅ |
| **PNPM** | Fast, disk space efficient package manager for Node.js | ✅ |
| **Yarn** | Alternative package manager for Node.js | — |
| **Vercel CLI** | Command line interface for deploying projects to Vercel | — |
| **Composer** | Dependency manager for PHP | — |

### Code Editors & IDEs

Development environments, lightweight editors, and AI-assisted IDEs

| Package | Description | Default |
|---|---|:---:|
| **Antigravity-Ide** | The agentic coding IDE built by Google DeepMind | ✅ |
| **Visual Studio Code** | Lightweight, highly extensible code editor | — |
| **Cursor** | AI-first code editor built on VS Code | — |
| **Windsurf** | IDE featuring advanced agentic AI capabilities | — |
| **Trae AI** | AI-assisted development environment | — |
| **Zed** | High-performance code editor written in Rust | — |
| **JetBrains Fleet** | Lightweight and collaborative IDE by JetBrains | — |
| **Android Studio** | Official IDE for Android application development | — |
| **Codex** | OpenAI Codex CLI tool for terminal-based coding assistance | — |
| **OpenCode Desktop** | Open-source AI coding assistant desktop app | — |
| **Claude Code** | Anthropic agentic coding assistant in the terminal | — |

### Terminals & Emulators

High-performance terminal applications and shell emulators

| Package | Description | Default |
|---|---|:---:|
| **Ghostty** | Fast, feature-rich native terminal emulator with GPU acceleration | ✅ |
| **iTerm2** | Highly customizable terminal emulator for macOS | — |
| **Warp** | Modern IDE-style terminal with built-in AI assistant | — |
| **Hyper** | Extensible terminal emulator built on web technologies | — |

### Git GUI Clients

Graphical user interfaces for managing Git repositories visually

| Package | Description | Default |
|---|---|:---:|
| **Fork** | Fast, friendly, and powerful native Git client | — |
| **GitHub Desktop** | Official GUI client for GitHub repositories | — |

### Languages, Runtimes & Frameworks

Execution environments for PHP, Java, Flutter, and development tools

| Package | Description | Default |
|---|---|:---:|
| **PHP (Latest)** | Popular general-purpose scripting language suited for web development | — |
| **PHP Monitor** | Mac menu bar app for managing active PHP versions | — |
| **Laravel Herd** | Ultra-fast native Laravel and PHP development environment | — |
| **Flutter** | Google UI toolkit for building cross-platform applications | — |
| **CocoaPods** | Dependency manager for Swift and Objective-C Cocoa projects | — |
| **OpenJDK 11** | Open-source implementation of Java Platform SE 11 | — |
| **OpenJDK 17** | Open-source implementation of Java Platform SE 17 (LTS) | — |
| **OpenJDK 21** | Open-source implementation of Java Platform SE 21 (Latest LTS) | — |
| **Go** | Open source programming language to build simple, fast, and reliable software | — |

### Databases & GUI Clients

Local database servers and visual management tools

| Package | Description | Default |
|---|---|:---:|
| **DBngin** | All-in-one local database server manager for MySQL, PostgreSQL & Redis | — |
| **Sequel-Ace** | Native macOS GUI client for MySQL and MariaDB databases | — |
| **DBeaver Community** | Free universal database tool and SQL client | — |

### Containers & Virtualization

Lightweight container platforms, Docker Desktop, and Kubernetes tools

| Package | Description | Default |
|---|---|:---:|
| **OrbStack** | Fast, light, and low-energy alternative to Docker Desktop and Linux VMs | — |
| **Docker Desktop** | Official desktop application for building and sharing containerized applications | — |
| **Minikube** | Local Kubernetes engine focused on making local development easy | — |
| **Davit** | Native macOS GUI for Apple container CLI | — |
| **Container Compose** | Manage Apple Container with Docker Compose files | — |

### Artificial Intelligence & Local LLMs

Tools to run, manage, and test open-source language models locally

| Package | Description | Default |
|---|---|:---:|
| **Ollama** | Get up and running with large language models locally | — |
| **LM Studio** | Desktop application to discover, download, and run local LLMs | — |

### Browsers & Web Testing Tools

Web browsers for development, responsive layout testing, and API debugging

| Package | Description | Default |
|---|---|:---:|
| **Google Chrome** | Popular web browser developed by Google | ✅ |
| **Arc Browser** | Modern browser designed around organized workspaces and productivity | — |
| **Responsively** | Modified browser designed for responsive web development across device screens | — |
| **Insomnia** | Powerful REST and GraphQL API client for testing endpoints | — |
| **Ngrok** | Secure tunnels to expose local development servers to the internet | — |
| **MiniSim** | Mac menu bar app for launching Android emulators and iOS simulators quickly | — |

### System Utilities

Archivers, uninstallers, menu bar calculators, and system utilities

| Package | Description | Default |
|---|---|:---:|
| **AppCleaner** | Thorough uninstaller to remove apps and their leftover files | ✅ |
| **Numi** | Smart calculator app for Mac menu bar with natural language support | ✅ |
| **Google Drive** | Official file synchronization client for Google Drive | ✅ |
| **Keka** | Powerful file archiver and extractor for macOS | — |
| **Battery** | MacBook battery management utility to prolong battery lifespan | — |
| **BalenaEtcher** | Flash OS images to SD cards and USB drives safely | — |
| **Cloudflare WARP** | Fast and private Internet connection utility by Cloudflare | — |
| **Mipony** | Automated download manager | — |
| **Notion** | All-in-one workspace for notes, docs, project management and tasks | — |
| **Obsidian** | Extensible Markdown-based knowledge base and note-taking app | — |
| **Raycast** | Blazingly fast, extendable launcher and productivity spotlight replacement | — |
| **Rectangle** | Move and resize windows on macOS using keyboard shortcuts and snap areas | — |
| **Maccy** | Lightweight and native clipboard manager for macOS menu bar | — |

### Communication & Collaboration

Team chat platforms, instant messaging, email clients, and video calls

| Package | Description | Default |
|---|---|:---:|
| **Discord** | Voice, video, and text communication platform | ✅ |
| **WhatsApp** | Official desktop client for WhatsApp messaging | ✅ |
| **Slack** | Team messaging and collaboration platform | — |
| **Telegram** | Fast and secure cloud-based messaging app | — |
| **Microsoft Teams** | Workspace chat, video meetings, and file storage platform | — |

### Multimedia, Audio & Entertainment

Music and video players, creative suites, DJ applications, and games

| Package | Description | Default |
|---|---|:---:|
| **VLC** | Free open-source cross-platform multimedia player | ✅ |
| **Plex Media Server** | Personal media server to stream movies, TV shows, and music | ✅ |
| **Transmission** | Fast, easy, and free BitTorrent client | ✅ |
| **Spotify** | Digital music and podcast streaming service | — |
| **OBS Studio** | Free software for video recording and live streaming | — |
| **Adobe Creative Cloud** | Collection of creative desktop apps by Adobe | — |
| **Native Access** | License and download manager for Native Instruments products | — |
| **Engine DJ** | Desktop music preparation software for Denon DJ hardware | — |
| **Rekordbox** | Professional DJ software by Pioneer DJ | — |
| **Steam** | Digital distribution platform for PC games | — |
| **Audacity** | Multi-track audio editor and recorder | — |
---

## ⚠️ Important Considerations & Post-Install Steps

### 1. Homebrew Prerequisite
Most CLI and Desktop packages are installed via [Homebrew](https://brew.sh).
- When launching `dn-mac`, the CLI automatically checks if Homebrew is installed. If missing, it will offer to install it on the spot.
- You can also install it manually prior to running:
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
