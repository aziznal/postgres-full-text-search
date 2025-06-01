CREATE TABLE "books" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"tags" text[] NOT NULL
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"aliases" text[] NOT NULL,
	"tags" text[] NOT NULL
);
--> statement-breakpoint
CREATE INDEX "books_title_idx" ON "books" USING gin (to_tsvector('english', "title"));--> statement-breakpoint
CREATE INDEX "books_tags_idx" ON "books" USING gin (array_to_tsvector("tags"));--> statement-breakpoint
CREATE INDEX "skills_title_idx" ON "skills" USING gin (to_tsvector('english', "title"));--> statement-breakpoint
CREATE INDEX "skills_aliases_idx" ON "skills" USING gin (array_to_tsvector("aliases"));--> statement-breakpoint
CREATE INDEX "skills_tags_idx" ON "skills" USING gin (array_to_tsvector("tags"));