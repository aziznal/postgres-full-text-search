export const SearchableTypes = {
  Book: "book",
  Skill: "skill",
} as const;

export type SearchableType =
  (typeof SearchableTypes)[keyof typeof SearchableTypes];

export function getSearchableTypes(): readonly [SearchableType] {
  return Object.values(SearchableTypes) as [SearchableType];
}

export function isSupportedSearchableType(
  value: string,
): value is SearchableType {
  return getSearchableTypes().includes(value as SearchableType);
}
