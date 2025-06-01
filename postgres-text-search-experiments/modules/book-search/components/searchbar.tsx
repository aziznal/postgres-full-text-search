import { Input } from "@/components/ui/input";
import { useBookSearchContext } from "../context";
import { cn } from "@/lib/utils";

export const Searchbar: React.FC<{ className?: string }> = (props) => {
  const { setSearchInput } = useBookSearchContext();

  return (
    <Input
      className={cn("w-full", props.className)}
      placeholder="e.g. javascript"
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
};
