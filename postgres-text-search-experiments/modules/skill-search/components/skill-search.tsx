import { cn } from "@/lib/utils";
import { SkillSearchContextProvider } from "../context";
import { Searchbar } from "./searchbar";
import { SkillResults } from "./skill-results";

export const SkillSearch: React.FC<{ className?: string }> = (props) => {
  return (
    <div className={cn(props.className)}>
      <SkillSearchContextProvider>
        <Searchbar className="mb-2" />
        <SkillResults />
      </SkillSearchContextProvider>
    </div>
  );
};
