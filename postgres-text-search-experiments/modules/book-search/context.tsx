import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Book } from "../books/types";
import { toast } from "sonner";

type BookSearchContextType = {
  searchInput: string;
  setSearchInput: (value: string) => void;
  bookResults: Book[];
};

const BookSearchContext = createContext<BookSearchContextType>(
  {} as BookSearchContextType,
);

export const useBookSearchContext = () => useContext(BookSearchContext);

export const BookSearchContextProvider = ({ children }: PropsWithChildren) => {
  const [searchInput, setSearchInput] = useState("");
  const [bookResults, setBooksResults] = useState<Book[]>([]);

  useEffect(() => {
    const updateBookResults = async () => {
      if (searchInput === "") {
        setBooksResults([]);
        return;
      }

      await fetch(`/api/search-books?q=${searchInput}`).then(async (res) => {
        const response = await res.json();

        // success
        if ("results" in response) {
          setBooksResults(response.results);
          return;
        }

        // failure
        toast.error(response.message);
      });
    };

    const timeout = setTimeout(updateBookResults, 150);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  return (
    <BookSearchContext.Provider
      value={{
        searchInput,
        setSearchInput,
        bookResults,
      }}
    >
      {children}
    </BookSearchContext.Provider>
  );
};
