import type { SoftwareCategory } from '../../types/index';

export const mediaCategory: SoftwareCategory = {
  id: 'media',
  title: 'Multimedia, Audio & Entertainment',
  description: 'Music and video players, creative suites, DJ applications, and games',
  items: [
    {
      name: 'VLC',
      description: 'Free open-source cross-platform multimedia player',
      command: 'brew install --cask vlc',
      default: true
    },
    {
      name: 'Plex Media Server',
      description: 'Personal media server to stream movies, TV shows, and music',
      command: 'brew install --cask plex-media-server',
      default: true
    },
    {
      name: 'Transmission',
      description: 'Fast, easy, and free BitTorrent client',
      command: 'brew install --cask transmission',
      default: true
    },
    {
      name: 'Spotify',
      description: 'Digital music and podcast streaming service',
      command: 'brew install --cask spotify',
      default: false
    },
    {
      name: 'OBS Studio',
      description: 'Free software for video recording and live streaming',
      command: 'brew install --cask obs',
      default: false
    },
    {
      name: 'Adobe Creative Cloud',
      description: 'Collection of creative desktop apps by Adobe',
      command: 'brew install --cask adobe-creative-cloud',
      default: false
    },
    {
      name: 'Native Access',
      description: 'License and download manager for Native Instruments products',
      command: 'brew install --cask native-access',
      default: false
    },
    {
      name: 'Engine DJ',
      description: 'Desktop music preparation software for Denon DJ hardware',
      command: 'brew install --cask engine-dj',
      default: false
    },
    {
      name: 'Rekordbox',
      description: 'Professional DJ software by Pioneer DJ',
      command: 'brew install --cask rekordbox',
      default: false
    },
    {
      name: 'Steam',
      description: 'Digital distribution platform for PC games',
      command: 'brew install --cask steam',
      default: false
    }
  ]
};
