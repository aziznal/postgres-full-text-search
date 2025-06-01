import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";
import { SearchStrategies } from "../search/types/search-strategy";
import { Skill } from "../skills/types";

type SkillSearchContextType = {
  searchInput: string;
  setSearchInput: (value: string) => void;
  skillResults: Skill[];
};

const SkillSearchContext = createContext<SkillSearchContextType>(
  {} as SkillSearchContextType,
);

export const useSkillSearchContext = () => useContext(SkillSearchContext);

export const SkillSearchContextProvider = ({ children }: PropsWithChildren) => {
  const [searchInput, setSearchInput] = useState("");
  const [skillResults, setSkillsResults] = useState<Skill[]>([]);

  useEffect(() => {
    const updateSkillResults = async () => {
      if (searchInput === "") {
        setSkillsResults([]);
        return;
      }

      await fetch(
        `/api/search-skills?q=${searchInput}&searchStrategy=${SearchStrategies.BasicFts}`,
      ).then(async (res) => {
        const response = await res.json();

        // success
        if ("results" in response) {
          setSkillsResults(response.results);
          return;
        }

        // failure
        toast.error(response.message);
      });
    };

    const timeout = setTimeout(updateSkillResults, 150);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  return (
    <SkillSearchContext.Provider
      value={{
        searchInput,
        setSearchInput,
        skillResults,
      }}
    >
      {children}
    </SkillSearchContext.Provider>
  );
};
