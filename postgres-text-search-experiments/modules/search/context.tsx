import { PropsWithChildren, createContext, useContext, useState } from "react";
import { SearchableType, SearchableTypes } from "./types/searchable-type";

type SearchContextType = {
  searchType: SearchableType;
  setSearchType: (value: SearchableType) => void;
};

const SearchContext = createContext<SearchContextType>({} as SearchContextType);

export const useSearchContext = () => useContext(SearchContext);

export const SearchContextProvider = ({ children }: PropsWithChildren) => {
  const [searchType, setSearchType] = useState<SearchableType>(
    SearchableTypes.Book,
  );

  return (
    <SearchContext.Provider
      value={{
        searchType,
        setSearchType,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
