import { z } from "zod";
import { getSearchStrategies } from "./types/search-strategy";

export const searchQuerySchema = z.object({
  q: z.string().min(1).max(512),
  searchStrategy: z.enum(getSearchStrategies()),
});

export type SearchQuerySchema = z.infer<typeof searchQuerySchema>;
