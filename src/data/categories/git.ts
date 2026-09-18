import type { SoftwareCategory } from '../../types/index';

export const gitCategory: SoftwareCategory = {
  id: 'git',
  title: 'Git GUI Clients',
  description: 'Graphical user interfaces for managing Git repositories visually',
  items: [
    {
      name: 'Fork',
      description: 'Fast, friendly, and powerful native Git client',
      command: 'brew install --cask fork',
      default: false
    },
    {
      name: 'GitHub Desktop',
      description: 'Official GUI client for GitHub repositories',
      command: 'brew install --cask github',
      default: false
    }
  ]
};
