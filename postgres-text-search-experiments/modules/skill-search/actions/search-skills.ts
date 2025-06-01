import { db } from "@/lib/drizzle/client";
import {
  SearchStrategy,
  SearchStrategies,
} from "@/modules/search/types/search-strategy";
import { table_Skills } from "@/modules/skills/db-schema";
import { Skill } from "@/modules/skills/types";
import { sql } from "drizzle-orm";

export async function searchSkills(args: {
  searchQuery: string;
  searchStrategy: SearchStrategy;
}): Promise<Skill[]> {
  switch (args.searchStrategy) {
    case SearchStrategies.ILike:
      return db
        .execute<Skill>(
          sql`
            SELECT
              * 
            FROM 
              ${table_Skills}
            WHERE
              ${table_Skills.title} ILIKE ${`%${args.searchQuery}%`};
          `,
        )
        .then((res) => res.rows);

    case SearchStrategies.BasicFts:
      const searchTsQuery = args.searchQuery;
      // .trim().split(" ").join("&");

      const matchQuery = sql`
        (
          setweight(to_tsvector('english', ${table_Skills.title}), 'A') ||
          setweight(array_to_tsvector(${table_Skills.tags}), 'B')
        ),
        plainto_tsquery('english', ${searchTsQuery})
      `;

      return db
        .execute<Skill>(
          sql`
            SELECT
              * 
            FROM 
              ${table_Skills}
            WHERE
              (
                setweight(to_tsvector('english', ${table_Skills.title}), 'A') ||
                setweight(array_to_tsvector(${table_Skills.tags}), 'B')
              ) @@ plainto_tsquery('english', ${searchTsQuery})
            ORDER BY
              ts_rank(${matchQuery}) DESC;
          `,
        )
        .then((res) => res.rows);

    default:
      throw new Error(`unimplemented search strategy: ${args.searchStrategy}`);
  }
}
