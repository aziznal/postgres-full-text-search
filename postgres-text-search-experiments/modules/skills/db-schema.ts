import { sql } from "drizzle-orm";
import { index, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const table_Skills = pgTable(
  "skills",
  {
    id: uuid().notNull().defaultRandom().primaryKey(),
    title: text().notNull(),
    aliases: text().array().notNull(),
    tags: text().array().notNull(),
  },
  (table) => [
    // prettier-ignore
    index("skills_title_idx").using("gin", sql`to_tsvector('english', ${table.title})`),
    // prettier-ignore
    index("skills_aliases_idx").using("gin", sql`array_to_tsvector(${table.aliases})`),
    // prettier-ignore
    index("skills_tags_idx").using("gin", sql`array_to_tsvector(${table.tags})`),
  ],
);
