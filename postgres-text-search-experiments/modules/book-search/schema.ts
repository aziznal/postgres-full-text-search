import { z } from "zod";

export const searchQuerySchema = z.object({
  q: z.string().min(1).max(512),
});

export type SearchQuerySchema = z.infer<typeof searchQuerySchema>;
