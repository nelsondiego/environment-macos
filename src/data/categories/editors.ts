import type { SoftwareCategory } from '../../types/index';

export const editorsCategory: SoftwareCategory = {
  id: 'editors',
  title: 'Code Editors & IDEs',
  description: 'Development environments, lightweight editors, and AI-assisted IDEs',
  items: [
    {
      name: 'Antigravity-Ide',
      description: 'The agentic coding IDE built by Google DeepMind',
      command: 'brew install --cask antigravity-ide',
      default: true
    },
    {
      name: 'Visual Studio Code',
      description: 'Lightweight, highly extensible code editor',
      command: 'brew install --cask visual-studio-code',
      default: false
    },
    {
      name: 'Cursor',
      description: 'AI-first code editor built on VS Code',
      command: 'brew install --cask cursor',
      default: false
    },
    {
      name: 'Windsurf',
      description: 'IDE featuring advanced agentic AI capabilities',
      command: 'brew install --cask windsurf',
      default: false
    },
    {
      name: 'Trae AI',
      description: 'AI-assisted development environment',
      command: 'brew install --cask trae',
      default: false
    },
    {
      name: 'Zed',
      description: 'High-performance code editor written in Rust',
      command: 'brew install --cask zed',
      default: false
    },
    {
      name: 'JetBrains Fleet',
      description: 'Lightweight and collaborative IDE by JetBrains',
      command: 'brew install --cask fleet',
      default: false
    },
    {
      name: 'Android Studio',
      description: 'Official IDE for Android application development',
      command: 'brew install --cask android-studio',
      default: false
    }
  ]
};
