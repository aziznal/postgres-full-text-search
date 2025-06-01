import { fakeDelay, TYPICAL_DB_DELAY, TYPICAL_SERVER_DELAY } from "@/lib/fake-delay";
import { searchBooks } from "@/modules/book-search/actions/search-books";
import { searchQuerySchema } from "@/modules/book-search/schema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod/v4";

export async function GET(request: NextRequest) {
  await fakeDelay(TYPICAL_SERVER_DELAY);
  await fakeDelay(TYPICAL_DB_DELAY);

  const parsedParams = searchQuerySchema.safeParse(
    Object.fromEntries(request.nextUrl.searchParams.entries()),
  );
  if (parsedParams.error) {
    return NextResponse.json({
      status: "400",
      message: z.prettifyError(parsedParams.error),
    });
  }

  const results = await searchBooks({
    searchQuery: parsedParams.data.q,
  });

  return NextResponse.json({
    results,
  });
}
