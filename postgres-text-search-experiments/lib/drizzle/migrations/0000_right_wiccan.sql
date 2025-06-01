CREATE TABLE "books" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"tags" text[] NOT NULL
);
--> statement-breakpoint
CREATE INDEX "title_idx" ON "books" USING gin (to_tsvector('english', "title"));--> statement-breakpoint
CREATE INDEX "tags_idx" ON "books" USING gin (array_to_tsvector("tags"));