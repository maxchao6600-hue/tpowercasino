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

const CACHE_NAME = "tpower-games-lobby-v1";

/**
 * Progressive Games lobby batches.
 * Uses slim lobby index only — never loads full Game descriptions into this path.
 * Responses are cacheable (public catalogue) via Cache API when available.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const cacheKey = new Request(url.toString(), {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  try {
    // Cloudflare Workers Cache API — skip quietly when unavailable (local Node).
    const cache = await caches.open(CACHE_NAME);
    const hit = await cache.match(cacheKey);
    if (hit) return hit;
  } catch {
    /* no-op */
  }

  const rawLocale = url.searchParams.get("locale") ?? "en";
  if (!isValidLocale(rawLocale)) {
    return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
  }

  const locale = rawLocale as Locale;
  const rawCategory = url.searchParams.get("category") ?? "all";
  const category = CATEGORIES.includes(rawCategory as GameCategory | "all")
    ? (rawCategory as GameCategory | "all")
    : "all";
  const providerId = url.searchParams.get("provider") ?? "all";
  const query = url.searchParams.get("q") ?? "";
  const offset = Number.parseInt(url.searchParams.get("offset") ?? "0", 10);
  const limit = Number.parseInt(
    url.searchParams.get("limit") ?? String(GAMES_LOBBY_PAGE_SIZE),
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

  const response = NextResponse.json(result, {
    headers: {
      "Cache-Control": cacheControl,
      "CDN-Cache-Control": cacheControl,
      Vary: "Accept-Encoding",
    },
  });

  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(cacheKey, response.clone());
  } catch {
    /* no-op */
  }

  return response;
}
