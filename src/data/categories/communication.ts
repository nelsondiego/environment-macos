import type { SoftwareCategory } from '../../types/index';

export const communicationCategory: SoftwareCategory = {
  id: 'communication',
  title: 'Communication & Collaboration',
  description: 'Team chat platforms, instant messaging, email clients, and video calls',
  items: [
    {
      name: 'Discord',
      description: 'Voice, video, and text communication platform',
      command: 'brew install --cask discord',
      default: true
    },
    {
      name: 'WhatsApp',
      description: 'Official desktop client for WhatsApp messaging',
      command: 'brew install --cask whatsapp',
      default: true
    },
    {
      name: 'Slack',
      description: 'Team messaging and collaboration platform',
      command: 'brew install --cask slack',
      default: false
    },
    {
      name: 'Telegram',
      description: 'Fast and secure cloud-based messaging app',
      command: 'brew install --cask telegram',
      default: false
    },
    {
      name: 'Microsoft Teams',
      description: 'Workspace chat, video meetings, and file storage platform',
      command: 'brew install --cask microsoft-teams',
      default: false
    }
  ]
};
