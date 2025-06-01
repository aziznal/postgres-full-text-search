import { table_Books } from "./db-schema";

export type Book = typeof table_Books.$inferSelect;
export type NewBook = typeof table_Books.$inferInsert;
