import { NextResponse } from "next/server";
import type { Locale } from "@/config/site";
import { isValidLocale } from "@/config/i18n";
import {
  GAMES_LOBBY_PAGE_SIZE,
  queryGamesLobby,
} from "@/lib/games-lobby";
import type { GameCategory } from "@/types";

const CATEGORIES: Array<GameCategory | "all"> = [
  "all",
  "slots",
  "live-casino",
  "sports",
  "fishing",
  "lottery",
  "table",
  "crash",
  "poker",
  "arcade",
];

/**
 * Progressive Games lobby batches.
 * Returns slim DTOs only — never full Game records / descriptions.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawLocale = searchParams.get("locale") ?? "en";

  if (!isValidLocale(rawLocale)) {
    return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
  }

  const locale = rawLocale as Locale;
  const rawCategory = searchParams.get("category") ?? "all";
  const category = CATEGORIES.includes(rawCategory as GameCategory | "all")
    ? (rawCategory as GameCategory | "all")
    : "all";
  const providerId = searchParams.get("provider") ?? "all";
  const query = searchParams.get("q") ?? "";
  const offset = Number.parseInt(searchParams.get("offset") ?? "0", 10);
  const limit = Number.parseInt(
    searchParams.get("limit") ?? String(GAMES_LOBBY_PAGE_SIZE),
    10,
  );

  const result = queryGamesLobby({
    locale,
    category,
    providerId,
    query,
    offset: Number.isFinite(offset) ? offset : 0,
    limit: Number.isFinite(limit) ? limit : GAMES_LOBBY_PAGE_SIZE,
  });

  const hasQuery = query.trim().length > 0;
  const cacheControl = hasQuery
    ? "public, max-age=30, s-maxage=60, stale-while-revalidate=300"
    : "public, max-age=60, s-maxage=300, stale-while-revalidate=3600";

  return NextResponse.json(result, {
    headers: {
      "Cache-Control": cacheControl,
    },
  });
}
