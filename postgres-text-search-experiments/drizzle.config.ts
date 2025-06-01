import { defineConfig } from "drizzle-kit";
import { env } from "./lib/env";

export default defineConfig({
  out: "./lib/drizzle/migrations",
  schema: "./lib/drizzle/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
