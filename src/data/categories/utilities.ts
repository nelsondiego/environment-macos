import type { SoftwareCategory } from '../../types/index';

export const utilitiesCategory: SoftwareCategory = {
  id: 'utilities',
  title: 'System Utilities',
  description: 'Archivers, uninstallers, menu bar calculators, and system utilities',
  items: [
    {
      name: 'AppCleaner',
      description: 'Thorough uninstaller to remove apps and their leftover files',
      command: 'brew install --cask appcleaner',
      default: true
    },
    {
      name: 'Numi',
      description: 'Smart calculator app for Mac menu bar with natural language support',
      command: 'brew install --cask numi',
      default: true
    },
    {
      name: 'Google Drive',
      description: 'Official file synchronization client for Google Drive',
      command: 'brew install --cask google-drive',
      default: true
    },
    {
      name: 'Keka',
      description: 'Powerful file archiver and extractor for macOS',
      command: 'brew install --cask keka',
      default: false
    },
    {
      name: 'Battery',
      description: 'MacBook battery management utility to prolong battery lifespan',
      command: 'brew install --cask battery',
      default: false
    },
    {
      name: 'BalenaEtcher',
      description: 'Flash OS images to SD cards and USB drives safely',
      command: 'brew install --cask balenaetcher',
      default: false
    },
    {
      name: 'Cloudflare WARP',
      description: 'Fast and private Internet connection utility by Cloudflare',
      command: 'brew install --cask cloudflare-warp',
      default: false
    },
    {
      name: 'Mipony',
      description: 'Automated download manager',
      command: 'brew install --cask mipony',
      default: false
    }
  ]
};
