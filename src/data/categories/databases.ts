import type { SoftwareCategory } from '../../types/index';

export const databasesCategory: SoftwareCategory = {
  id: 'databases',
  title: 'Databases & GUI Clients',
  description: 'Local database servers and visual management tools',
  items: [
    {
      name: 'DBngin',
      description: 'All-in-one local database server manager for MySQL, PostgreSQL & Redis',
      command: 'brew install --cask dbngin',
      default: false
    },
    {
      name: 'Sequel-Ace',
      description: 'Native macOS GUI client for MySQL and MariaDB databases',
      command: 'brew install --cask sequel-ace',
      default: false
    },
    {
      name: 'DBeaver Community',
      description: 'Free universal database tool and SQL client',
      command: 'brew install --cask dbeaver-community',
      default: false
    }
  ]
};
