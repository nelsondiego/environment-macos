import type { SoftwareCategory } from '../../types/index';

export const containersCategory: SoftwareCategory = {
  id: 'containers',
  title: 'Containers & Virtualization',
  description: 'Lightweight container platforms, Docker Desktop, and Kubernetes tools',
  items: [
    {
      name: 'OrbStack',
      description: 'Fast, light, and low-energy alternative to Docker Desktop and Linux VMs',
      command: 'brew install orbstack',
      default: false
    },
    {
      name: 'Docker Desktop',
      description: 'Official desktop application for building and sharing containerized applications',
      command: 'brew install --cask docker',
      default: false
    },
    {
      name: 'Minikube',
      description: 'Local Kubernetes engine focused on making local development easy',
      command: 'brew install minikube',
      default: false
    }
  ]
};
