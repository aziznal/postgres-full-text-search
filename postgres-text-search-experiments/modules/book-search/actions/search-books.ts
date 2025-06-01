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
    default:
      throw new Error(`unimplemented search strategy: ${args.searchStrategy}`);
  }
}
