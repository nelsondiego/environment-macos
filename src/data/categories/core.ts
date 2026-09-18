import type { SoftwareCategory } from '../../types/index';

export const coreCategory: SoftwareCategory = {
  id: 'core',
  title: 'Core Tools & Package Managers',
  description: 'Essential package managers, version control systems, and shell environments',
  items: [
    {
      name: 'Homebrew',
      description: 'The missing package manager for macOS',
      command: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
      default: true
    },
    {
      name: 'Git',
      description: 'Distributed version control system',
      command: 'brew install git',
      default: true
    },
    {
      name: 'Oh My Zsh',
      description: 'Delightful framework for managing Zsh configuration',
      command: 'sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"',
      default: true
    },
    {
      name: 'NVM (Node Version Manager)',
      description: 'Node.js version manager for managing multiple active Node environments',
      command: 'brew install nvm',
      default: true
    },
    {
      name: 'PNPM',
      description: 'Fast, disk space efficient package manager for Node.js',
      command: 'brew install pnpm',
      default: true
    },
    {
      name: 'Yarn',
      description: 'Alternative package manager for Node.js',
      command: 'brew install yarn',
      default: false
    },
    {
      name: 'Vercel CLI',
      description: 'Command line interface for deploying projects to Vercel',
      command: 'npm i -g vercel',
      default: false
    },
    {
      name: 'Composer',
      description: 'Dependency manager for PHP',
      command: 'brew install composer',
      default: false
    }
  ]
};
