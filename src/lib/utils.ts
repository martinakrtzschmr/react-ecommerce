import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ListItem } from '../../types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// TODO: Make generic types. The function must accept any array of objects.
export function filterObjects(array: ListItem[], filters: searchParamsProps) {
  // Return complete array if there are no filters
  if (Object.keys(filters).filter((key) => filters[key] !== '').length === 0)
    return array;

  // Clear empty filters
  const currentFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v !== '')
  );

  // Filter the array based on the provided filters
  const filteredObjects = array.filter((el) => {
    return Object.keys(currentFilters).every((key) => {
      if (
        typeof currentFilters[key] === 'string' &&
        typeof el[key] === 'string'
      ) {
        return el[key]
          .toLowerCase()
          .includes(currentFilters[key].toLowerCase());
      }

      return currentFilters[key] === el[key];
    });
  });

  return filteredObjects;
}
