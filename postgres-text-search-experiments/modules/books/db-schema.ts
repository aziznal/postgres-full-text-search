import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const table_Books = pgTable("books", {
  id: uuid().notNull().defaultRandom().primaryKey(),
  title: text().notNull(),
});
