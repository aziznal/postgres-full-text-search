import { db } from "@/lib/drizzle/client";
import { table_Books } from "@/modules/books/db-schema";
import { Book } from "@/modules/books/types";
import { sql } from "drizzle-orm";
import { SearchStrategies, SearchStrategy } from "../types/search-strategy";

export async function searchBooks(args: {
  searchQuery: string;
  searchStrategy: SearchStrategy;
}): Promise<Book[]> {
  switch (args.searchStrategy) {
    case SearchStrategies.ILike:
      return db
        .execute<Book>(
          sql`
            SELECT
              * 
            FROM 
              ${table_Books}
            WHERE
              ${table_Books.title} ILIKE ${`%${args.searchQuery}%`};
          `,
        )
        .then((res) => res.rows);

    case SearchStrategies.BasicFts:
      const searchTsQuery = args.searchQuery
         // .trim().split(" ").join("&");

      const matchQuery = sql`
        (
          setweight(to_tsvector('english', ${table_Books.title}), 'A') ||
          setweight(array_to_tsvector(${table_Books.tags}), 'B')
        ),
        plainto_tsquery('english', ${searchTsQuery})
      `;

      return db
        .execute<Book>(
          sql`
            SELECT
              * 
            FROM 
              ${table_Books}
            WHERE
              (
                setweight(to_tsvector('english', ${table_Books.title}), 'A') ||
                setweight(array_to_tsvector(${table_Books.tags}), 'B')
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
