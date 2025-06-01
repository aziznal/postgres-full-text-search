"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookSearch } from "@/modules/book-search/components/book-search";
import { useSearchContext } from "@/modules/search/context";
import {
  getSearchableTypes,
  SearchableTypes,
} from "@/modules/search/types/searchable-type";
import { SkillSearch } from "@/modules/skill-search/components/skill-search";

export default function Home() {
  const { searchType } = useSearchContext();

  return (
    <>
      <div className="w-full p-6 mx-auto max-w-[600px]">
        <h1 className="text-xl font-medium mb-4 flex gap-2 items-center">
          Search for a <SearchableTypeSelector />
        </h1>

        {searchType === SearchableTypes.Book && <BookSearch />}
        {searchType === SearchableTypes.Skill && <SkillSearch />}
      </div>
    </>
  );
}

const SearchableTypeSelector: React.FC = () => {
  const { searchType, setSearchType } = useSearchContext();

  return (
    <Select value={searchType} onValueChange={setSearchType}>
      <SelectTrigger className="!bg-transparent">
        <SelectValue defaultValue={searchType} />
      </SelectTrigger>

      <SelectContent>
        {getSearchableTypes().map((searchableType) => (
          <SelectItem key={searchableType} value={searchableType}>
            {searchableType}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
