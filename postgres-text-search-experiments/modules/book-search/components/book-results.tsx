import { cn } from "@/lib/utils";
import { useBookSearchContext } from "../context";

export const BookResults: React.FC<{ className?: string }> = (props) => {
  const { bookResults } = useBookSearchContext();

  return (
    <div className={cn("overflow-y-auto h-[50dvh]", props.className)}>
      {bookResults.map((book) => (
        <div
          key={book.id}
          className="px-3 py-2 border rounded hover:bg-slate-900"
        >
          {book.title}
        </div>
      ))}
    </div>
  );
};
