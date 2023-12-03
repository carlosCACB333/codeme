import { SearchItem } from "@/interfaces";
import { writeStorage } from "@rehooks/local-storage";
import { intersectionBy } from "lodash";
import { matchSorter } from "match-sorter";
const MATCH_KEYS = [
  "hierarchy.lvl1",
  "hierarchy.lvl2",
  "hierarchy.lvl3",
  "content",
];
const MAX_RESULTS = 20;
export const RECENT_SEARCHES_KEY = "recent-searches";

export const filterSearches = (searchData: SearchItem[], query: string) => {
  if (query.length < 2) return [];
  const words = query.split(" ");

  if (words.length === 1) {
    return matchSorter(searchData, query, {
      keys: MATCH_KEYS,
    }).slice(0, MAX_RESULTS);
  }

  const matchesForEachWord = words.map((word) =>
    matchSorter(searchData, word, {
      keys: MATCH_KEYS,
    })
  );

  const matches = intersectionBy(...matchesForEachWord, "objectID").slice(
    0,
    MAX_RESULTS
  );

  return matches;
};

export const addToRecentSearches = (
  searches: SearchItem[] | null = [],
  item: SearchItem
) => {
  searches = searches || [];
  // Avoid adding the same search again
  if (!searches.find((i) => i.objectID === item.objectID)) {
    writeStorage(
      RECENT_SEARCHES_KEY,
      [item, ...searches].slice(0, MAX_RESULTS)
    );
  } else {
    // Move the search to the top
    searches = searches.filter((i) => i.objectID !== item.objectID);
    writeStorage(
      RECENT_SEARCHES_KEY,
      [item, ...searches].slice(0, MAX_RESULTS)
    );
  }
};
