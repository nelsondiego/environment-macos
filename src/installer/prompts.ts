import * as clack from '@clack/prompts';
import pc from 'picocolors';
import type { SoftwareCategory, SoftwareItem } from '../types/index';
import { handlePromptCancellation } from '../utils/prompt';

/**
 * Prompts user to pick software categories to review.
 */
export async function promptCategorySelection(
  categories: SoftwareCategory[]
): Promise<string[] | null> {
  const categoryOptions = categories.map((category: SoftwareCategory) => ({
    value: category.id,
    label: category.title,
    hint: `${category.items.length} packages - ${category.description}`
  }));

  const selectedCategoryIds = await clack.multiselect({
    message: 'Select the software categories you want to review/configure:',
    options: categoryOptions,
    initialValues: categories.map((category) => category.id),
    required: false
  });

  if (handlePromptCancellation(selectedCategoryIds)) {
    return null;
  }

  return selectedCategoryIds as string[];
}

/**
 * Prompts user to select packages within the chosen categories.
 */
export async function promptSoftwareSelectionForCategories(
  targetCategories: SoftwareCategory[]
): Promise<SoftwareItem[] | null> {
  const selectedSoftwareItems: SoftwareItem[] = [];
  const totalCategoriesCount = targetCategories.length;

  for (let categoryIndex = 0; categoryIndex < totalCategoriesCount; categoryIndex++) {
    const category = targetCategories[categoryIndex];
    const categoryProgressTag = `Category ${categoryIndex + 1}/${totalCategoriesCount}`;

    const itemOptions = category.items.map((item: SoftwareItem) => {
      const descriptionTag = item.description ? ` - ${pc.dim(item.description)}` : '';
      return {
        value: item,
        label: `${item.name}${descriptionTag}`
      };
    });

    const defaultValues = category.items.filter((item) => item.default);

    const categorySelection = await clack.multiselect({
      message: `${categoryProgressTag} - ${pc.cyan(category.title)}:`,
      options: itemOptions,
      initialValues: defaultValues,
      required: false
    });

    if (handlePromptCancellation(categorySelection)) {
      return null;
    }

    const itemsFromCategory = categorySelection as SoftwareItem[];
    selectedSoftwareItems.push(...itemsFromCategory);
  }

  return selectedSoftwareItems;
}

/**
 * Prompts user to confirm the selected package installation list.
 */
export async function promptInstallationConfirmation(
  selectedItems: SoftwareItem[]
): Promise<boolean> {
  const summaryNotice = selectedItems
    .map((item) => ` • ${pc.green(item.name)}${item.description ? pc.dim(` - ${item.description}`) : ''}`)
    .join('\n');

  clack.note(summaryNotice, `Package Installation Summary (${selectedItems.length})`);

  const shouldProceed = await clack.confirm({
    message: `Do you want to proceed with installing the selected ${selectedItems.length} packages?`,
    initialValue: true
  });

  if (handlePromptCancellation(shouldProceed)) {
    return false;
  }

  return Boolean(shouldProceed);
}

/**
 * Prompts user on package failure whether to continue with remaining packages.
 */
export async function promptContinueAfterInstallationError(
  softwareName: string
): Promise<boolean> {
  const shouldContinue = await clack.confirm({
    message: `An error occurred while installing ${softwareName}. Do you want to continue with the remaining packages?`,
    initialValue: true
  });

  if (handlePromptCancellation(shouldContinue)) {
    return false;
  }

  return Boolean(shouldContinue);
}
