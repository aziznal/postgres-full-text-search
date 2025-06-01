import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useSkillSearchContext } from "../context";

export const Searchbar: React.FC<{ className?: string }> = (props) => {
  const { setSearchInput } = useSkillSearchContext();

  return (
    <Input
      className={cn("w-full", props.className)}
      placeholder="e.g. web"
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
};
