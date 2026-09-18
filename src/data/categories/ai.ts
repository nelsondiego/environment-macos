import type { SoftwareCategory } from '../../types/index';

export const aiCategory: SoftwareCategory = {
  id: 'ai',
  title: 'Artificial Intelligence & Local LLMs',
  description: 'Tools to run, manage, and test open-source language models locally',
  items: [
    {
      name: 'Ollama',
      description: 'Get up and running with large language models locally',
      command: 'brew install ollama',
      default: false
    },
    {
      name: 'LM Studio',
      description: 'Desktop application to discover, download, and run local LLMs',
      command: 'brew install --cask lm-studio',
      default: false
    }
  ]
};
