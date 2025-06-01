import { table_Skills } from "./db-schema";

export type Skill = typeof table_Skills.$inferSelect;
export type NewSkill = typeof table_Skills.$inferInsert;
