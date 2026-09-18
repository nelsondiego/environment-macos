export interface SoftwareItem {
  name: string;
  description: string | null;
  command: string;
  default: boolean;
}

export interface SoftwareCategory {
  id: string;
  title: string;
  description: string;
  items: SoftwareItem[];
}

export interface InstallerOptions {
  isDryRun: boolean;
}
