import type { SoftwareCategory, SoftwareItem } from '../types/index';
import { coreCategory } from './categories/core';
import { editorsCategory } from './categories/editors';
import { terminalsCategory } from './categories/terminals';
import { gitCategory } from './categories/git';
import { runtimesCategory } from './categories/runtimes';
import { databasesCategory } from './categories/databases';
import { containersCategory } from './categories/containers';
import { aiCategory } from './categories/ai';
import { browsersCategory } from './categories/browsers';
import { utilitiesCategory } from './categories/utilities';
import { communicationCategory } from './categories/communication';
import { mediaCategory } from './categories/media';

export const softwareCategories: SoftwareCategory[] = [
  coreCategory,
  editorsCategory,
  terminalsCategory,
  gitCategory,
  runtimesCategory,
  databasesCategory,
  containersCategory,
  aiCategory,
  browsersCategory,
  utilitiesCategory,
  communicationCategory,
  mediaCategory
];

/**
 * Returns a flattened array of all software items across all categories.
 */
export function getAllSoftwareItems(): SoftwareItem[] {
  return softwareCategories.flatMap((category) => category.items);
}
