import type { SoftwareCategory } from '../../types/index';

export const terminalsCategory: SoftwareCategory = {
  id: 'terminals',
  title: 'Terminals & Emulators',
  description: 'High-performance terminal applications and shell emulators',
  items: [
    {
      name: 'Ghostty',
      description: 'Fast, feature-rich native terminal emulator with GPU acceleration',
      command: 'brew install --cask ghostty',
      default: true
    },
    {
      name: 'iTerm2',
      description: 'Highly customizable terminal emulator for macOS',
      command: 'brew install --cask iterm2',
      default: false
    },
    {
      name: 'Warp',
      description: 'Modern IDE-style terminal with built-in AI assistant',
      command: 'brew install --cask warp',
      default: false
    },
    {
      name: 'Hyper',
      description: 'Extensible terminal emulator built on web technologies',
      command: 'brew install --cask hyper',
      default: false
    }
  ]
};
