"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { Game, GameCategory } from "@/types";
import { GameCard } from "@/components/games/game-card";
import { cn } from "@/lib/utils";

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

type ProviderOption = {
  id: string;
  name: string;
};

type GamesLobbyProps = {
  locale: Locale;
  dictionary: Dictionary;
  games: Game[];
  providers: ProviderOption[];
  initialCategory?: GameCategory | "all";
  categoryCounts: Record<string, number>;
};

export function GamesLobby({
  locale,
  dictionary,
  games,
  providers,
  initialCategory = "all",
  categoryCounts,
}: GamesLobbyProps) {
  const [category, setCategory] = useState<GameCategory | "all">(initialCategory);
  const [providerId, setProviderId] = useState("all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(120);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filtered = useMemo(() => {
    return games.filter((game) => {
      if (category !== "all" && game.category !== category) return false;
      if (providerId !== "all" && game.providerId !== providerId) return false;
      if (!deferredQuery) return true;
      const haystack = `${game.name.en} ${game.name.zh} ${game.providerId} ${game.providerName ?? ""}`.toLowerCase();
      return haystack.includes(deferredQuery);
    });
  }, [games, category, providerId, deferredQuery]);

  const visible = filtered.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(120);
  }, [category, providerId, deferredQuery]);

  const t = dictionary.games;

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-4 border-y border-border/80 bg-[#0a0a0a]/95 px-4 py-3 backdrop-blur-md md:-mx-6 md:px-6 lg:top-[4.5rem]">
        <div className="flex flex-col gap-3">
          <div
            className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="navigation"
            aria-label={t.filterLabel}
          >
            {CATEGORIES.map((item) => {
              const count = categoryCounts[item] ?? 0;
              const href =
                item === "all"
                  ? localePath(locale, "/games")
                  : `${localePath(locale, "/games")}?category=${item}`;

              return (
                <Link
                  key={item}
                  href={href}
                  onClick={() => setCategory(item)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors md:text-sm",
                    category === item
                      ? "border-primary bg-primary text-white"
                      : "border-border/80 bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  )}
                >
                  {t.categories[item]}
                  <span
                    className={cn(
                      "rounded-md px-1.5 py-0.5 text-[10px] font-semibold tabular-nums",
                      category === item
                        ? "bg-black/25 text-white"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {count}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <label className="relative min-w-0 flex-1">
              <span className="sr-only">{t.searchPlaceholder}</span>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t.searchPlaceholder}
                className="h-10 w-full rounded-xl border border-border bg-card/80 pl-10 pr-10 text-sm text-foreground outline-none ring-primary/40 placeholder:text-muted-foreground focus:ring-2"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground"
                  aria-label={dictionary.common.close}
                >
                  <X className="h-4 w-4" />
                </button>
              ) : null}
            </label>

            <label className="sm:w-56">
              <span className="sr-only">{t.providerFilterLabel}</span>
              <select
                value={providerId}
                onChange={(event) => setProviderId(event.target.value)}
                className="h-10 w-full rounded-xl border border-border bg-card/80 px-3 text-sm font-semibold text-foreground outline-none ring-primary/40 focus:ring-2"
              >
                <option value="all">{t.allProviders}</option>
                {providers.map((provider) => (
                  <option key={provider.id} value={provider.id}>
                    {provider.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
          {t.catalogueTitle}
        </h2>
        <p className="text-xs font-semibold tabular-nums text-muted-foreground md:text-sm">
          {filtered.length} {t.resultsLabel}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-border bg-card px-6 py-14 text-center">
          <p className="text-sm text-muted-foreground">{t.emptyState}</p>
          <button
            type="button"
            className="mt-4 text-sm font-bold text-primary hover:underline"
            onClick={() => {
              setCategory("all");
              setProviderId("all");
              setQuery("");
              setVisibleCount(120);
            }}
          >
            {t.resetFilters}
          </button>
        </div>
      ) : (
        <>
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:gap-3">
            {visible.map((game, index) => (
              <GameCard
                key={game.id}
                locale={locale}
                dictionary={dictionary}
                game={game}
                priority={index < 12}
              />
            ))}
          </div>
          {visibleCount < filtered.length ? (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + 120)}
                className="rounded-full border border-border bg-card px-6 py-2.5 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {locale === "zh"
                  ? `加载更多（${visible.length}/${filtered.length}）`
                  : `Load more (${visible.length}/${filtered.length})`}
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
