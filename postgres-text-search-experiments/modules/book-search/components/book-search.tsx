import { cn } from "@/lib/utils";
import { BookSearchContextProvider } from "../context";
import { Searchbar } from "./searchbar";
import { BookResults } from "./book-results";

export const BookSearch: React.FC<{ className?: string }> = (props) => {
  return (
    <div className={cn(props.className)}>
      <BookSearchContextProvider>
        <Searchbar className="mb-2" />
        <BookResults />
      </BookSearchContextProvider>
    </div>
  );
};
