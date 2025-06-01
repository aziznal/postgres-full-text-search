"use client";

import { BookSearch } from "@/modules/book-search/components/book-search";

export default function Home() {
  return (
    <div className="w-full p-6 mx-auto max-w-[600px]">
      <h1 className="text-xl font-medium mb-4">Search for a book</h1>

      <BookSearch />
    </div>
  );
}
