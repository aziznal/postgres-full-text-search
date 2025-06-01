import { db } from "@/lib/drizzle/client";
import { table_Books } from "./db-schema";

type Book = typeof table_Books.$inferInsert;

const books: Book[] = [
  { title: "Atomic Habits" },
  { title: "Deep Work" },
  { title: "Clean Code" },
  { title: "The Pragmatic Programmer" },
  { title: "Thinking, Fast and Slow" },
  { title: "The Lean Startup" },
  { title: "Zero to One" },
  { title: "The Phoenix Project" },
  { title: "Refactoring" },
  { title: "Design Patterns" },
  { title: "You Don't Know JS" },
  { title: "Eloquent JavaScript" },
  { title: "JavaScript: The Good Parts" },
  { title: "Don't Make Me Think" },
  { title: "Hooked" },
  { title: "The Design of Everyday Things" },
  { title: "Sprint" },
  { title: "The Art of War" },
  { title: "The 7 Habits of Highly Effective People" },
  { title: "Drive" },
  { title: "Start with Why" },
  { title: "Grit" },
  { title: "Mindset" },
  { title: "The Power of Habit" },
  { title: "The Subtle Art of Not Giving a F*ck" },
  { title: "Essentialism" },
  { title: "The Four Hour Workweek" },
  { title: "Rework" },
  { title: "The Hard Thing About Hard Things" },
  { title: "So Good They Can't Ignore You" },
  { title: "Steal Like an Artist" },
  { title: "Show Your Work" },
  { title: "The Alchemist" },
  { title: "Sapiens" },
  { title: "Educated" },
  { title: "Range" },
  { title: "The Innovators" },
  { title: "The Art of Computer Programming" },
  { title: "Algorithms to Live By" },
  { title: "The Mythical Man-Month" },
  { title: "Continuous Delivery" },
  { title: "Site Reliability Engineering" },
  { title: "The DevOps Handbook" },
  { title: "Building Microservices" },
  { title: "Release It!" },
  { title: "The Manager's Path" },
  { title: "Radical Candor" },
  { title: "Measure What Matters" },
  { title: "The Effective Engineer" },
];

export async function generateMockBooks() {
  console.log(`Inserting ${books.length} books into db...`);
  await db.insert(table_Books).values(books);
  console.log(`Successfully inserted ${books.length} books\n`);
}
