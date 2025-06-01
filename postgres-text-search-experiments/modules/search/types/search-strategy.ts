export const SearchStrategies = {
  ILike: "ilike",
  BasicFts: "basicfts",
} as const;

export type SearchStrategy =
  (typeof SearchStrategies)[keyof typeof SearchStrategies];

export function getSearchStrategies(): readonly [SearchStrategy] {
  return Object.values(SearchStrategies) as [SearchStrategy];
}

export function isSupportedSearchStrategy(
  value: string,
): value is SearchStrategy {
  return getSearchStrategies().includes(value as SearchStrategy);
}
