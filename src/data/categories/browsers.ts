import type { SoftwareCategory } from '../../types/index';

export const browsersCategory: SoftwareCategory = {
  id: 'browsers',
  title: 'Browsers & Web Testing Tools',
  description: 'Web browsers for development, responsive layout testing, and API debugging',
  items: [
    {
      name: 'Google Chrome',
      description: 'Popular web browser developed by Google',
      command: 'brew install --cask google-chrome',
      default: true
    },
    {
      name: 'Arc Browser',
      description: 'Modern browser designed around organized workspaces and productivity',
      command: 'brew install --cask arc',
      default: false
    },
    {
      name: 'Responsively',
      description: 'Modified browser designed for responsive web development across device screens',
      command: 'brew install --cask responsively',
      default: false
    },
    {
      name: 'Insomnia',
      description: 'Powerful REST and GraphQL API client for testing endpoints',
      command: 'brew install --cask insomnia',
      default: false
    },
    {
      name: 'Ngrok',
      description: 'Secure tunnels to expose local development servers to the internet',
      command: 'brew install --cask ngrok',
      default: false
    },
    {
      name: 'MiniSim',
      description: 'Mac menu bar app for launching Android emulators and iOS simulators quickly',
      command: 'brew install --cask minisim',
      default: false
    }
  ]
};
