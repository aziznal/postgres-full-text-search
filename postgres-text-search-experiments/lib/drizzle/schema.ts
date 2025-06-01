import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const t_Users = pgTable("users", {
  id: uuid().primaryKey().notNull().defaultRandom(),
  name: text().notNull(),
});
