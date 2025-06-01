import { cn } from "@/lib/utils";
import { useSkillSearchContext } from "../context";

export const SkillResults: React.FC<{ className?: string }> = (props) => {
  const { skillResults } = useSkillSearchContext();

  return (
    <div className={cn("overflow-y-auto h-[50dvh]", props.className)}>
      {skillResults.map((skill) => (
        <div
          key={skill.id}
          className="px-3 py-2 border rounded hover:bg-slate-900"
        >
          {skill.title}
        </div>
      ))}
    </div>
  );
};
