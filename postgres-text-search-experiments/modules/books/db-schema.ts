import { sql } from "drizzle-orm";
import { index, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const table_Books = pgTable(
  "books",
  {
    id: uuid().notNull().defaultRandom().primaryKey(),
    title: text().notNull(),
    tags: text().array().notNull(),
  },
  (table) => [
    // prettier-ignore
    index("books_title_idx").using("gin", sql`to_tsvector('english', ${table.title})`),
    // prettier-ignore
    index("books_tags_idx").using("gin", sql`array_to_tsvector(${table.tags})`),
  ],
);
