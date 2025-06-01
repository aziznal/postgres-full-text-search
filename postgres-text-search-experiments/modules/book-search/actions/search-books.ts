import { db } from "@/lib/drizzle/client";
import { table_Books } from "@/modules/books/db-schema";
import { Book } from "@/modules/books/types";
import { eq, ilike, sql } from "drizzle-orm";

export async function searchBooks(args: {
  searchQuery: string;
}): Promise<Book[]> {
  // return await db
  //   .select()
  //   .from(table_Books)
  //   .where(
  //     sql`
  //       ${table_Books.title} ILIKE '%${args.searchQuery}%';
  //     `,
  //   );

  const result = await db.execute<Book>(
    sql`
      SELECT
        * 
      FROM 
        ${table_Books}
      WHERE
        ${table_Books.title} ILIKE ${`%${args.searchQuery}%`};
    `,
  );

  return result.rows;
}
