import type { SoftwareCategory } from '../../types/index';

export const runtimesCategory: SoftwareCategory = {
  id: 'runtimes',
  title: 'Languages, Runtimes & Frameworks',
  description: 'Execution environments for PHP, Java, Flutter, and development tools',
  items: [
    {
      name: 'PHP (Latest)',
      description: 'Popular general-purpose scripting language suited for web development',
      command: 'brew install php',
      default: false
    },
    {
      name: 'PHP Monitor',
      description: 'Mac menu bar app for managing active PHP versions',
      command: 'brew tap nicoverbruggen/homebrew-cask && brew install --cask phpmon',
      default: false
    },
    {
      name: 'Laravel Herd',
      description: 'Ultra-fast native Laravel and PHP development environment',
      command: 'brew install --cask herd',
      default: false
    },
    {
      name: 'Flutter',
      description: 'Google UI toolkit for building cross-platform applications',
      command: 'brew install --cask flutter',
      default: false
    },
    {
      name: 'CocoaPods',
      description: 'Dependency manager for Swift and Objective-C Cocoa projects',
      command: 'brew install cocoapods',
      default: false
    },
    {
      name: 'OpenJDK 11',
      description: 'Open-source implementation of Java Platform SE 11',
      command: 'brew install openjdk@11',
      default: false
    },
    {
      name: 'OpenJDK 17',
      description: 'Open-source implementation of Java Platform SE 17 (LTS)',
      command: 'brew install openjdk@17',
      default: false
    },
    {
      name: 'OpenJDK 21',
      description: 'Open-source implementation of Java Platform SE 21 (Latest LTS)',
      command: 'brew install openjdk@21',
      default: false
    },
    {
      name: 'Go',
      description: 'Open source programming language to build simple, fast, and reliable software',
      command: 'brew install go',
      default: false
    }
  ]
};
