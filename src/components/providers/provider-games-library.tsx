"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import type { Game } from "@/types";
import { GameCard } from "@/components/games/game-card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type ProviderGameFilter =
  | "all"
  | "slots"
  | "live-casino"
  | "fishing"
  | "crash"
  | "arcade"
  | "jackpot"
  | "new"
  | "popular";

export type ProviderGameSort = "newest" | "popular" | "nameAsc" | "rtp";

const FILTERS: ProviderGameFilter[] = [
  "all",
  "slots",
  "live-casino",
  "fishing",
  "crash",
  "arcade",
  "jackpot",
  "new",
  "popular",
];

const PAGE_SIZE = 48;

type ProviderGamesLibraryProps = {
  locale: Locale;
  dictionary: Dictionary;
  games: Game[];
  providerName: string;
};

function parseRtp(value?: string): number {
  if (!value) return -1;
  const match = value.match(/(\d+(\.\d+)?)/);
  return match ? Number(match[1]) : -1;
}

function matchesFilter(game: Game, filter: ProviderGameFilter): boolean {
  switch (filter) {
    case "all":
      return true;
    case "jackpot":
      return Boolean(game.jackpot);
    case "new":
      return Boolean(game.new);
    case "popular":
      return Boolean(game.featured);
    default:
      return game.category === filter;
  }
}

function matchesQuery(game: Game, locale: Locale, query: string): boolean {
  if (!query) return true;
  const categoryEn = game.category.replace("-", " ");
  const haystack = [
    game.name.en,
    game.name.zh,
    game.description.en,
    game.description.zh,
    game.providerName ?? "",
    game.providerId,
    game.category,
    categoryEn,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query) || game.name[locale].toLowerCase().includes(query);
}

function sortGames(list: Game[], sort: ProviderGameSort, locale: Locale): Game[] {
  const copy = [...list];
  switch (sort) {
    case "newest":
      return copy.sort((a, b) => Number(b.new) - Number(a.new) || Number(b.featured) - Number(a.featured));
    case "popular":
      return copy.sort((a, b) => Number(b.featured) - Number(a.featured) || Number(b.new) - Number(a.new));
    case "rtp":
      return copy.sort((a, b) => parseRtp(b.rtp) - parseRtp(a.rtp));
    case "nameAsc":
    default:
      return copy.sort((a, b) =>
        a.name[locale].localeCompare(b.name[locale], locale === "zh" ? "zh" : "en"),
      );
  }
}

function filterAndSort(
  list: Game[],
  filter: ProviderGameFilter,
  sort: ProviderGameSort,
  locale: Locale,
  query: string,
): Game[] {
  return sortGames(
    list.filter(
      (game) => matchesFilter(game, filter) && matchesQuery(game, locale, query),
    ),
    sort,
    locale,
  );
}

function GameGrid({
  games,
  locale,
  dictionary,
  visibleCount,
}: {
  games: Game[];
  locale: Locale;
  dictionary: Dictionary;
  visibleCount: number;
}) {
  const visible = games.slice(0, visibleCount);
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:gap-3">
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
  );
}

export function ProviderGamesLibrary({
  locale,
  dictionary,
  games,
  providerName,
}: ProviderGamesLibraryProps) {
  const t = dictionary.providers.gamesLibrary;
  const [filter, setFilter] = useState<ProviderGameFilter>("all");
  const [sort, setSort] = useState<ProviderGameSort>("popular");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filtered = useMemo(
    () => filterAndSort(games, filter, sort, locale, deferredQuery),
    [games, filter, sort, locale, deferredQuery],
  );

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filter, sort, deferredQuery]);

  const reset = () => {
    setFilter("all");
    setSort("popular");
    setQuery("");
    setVisibleCount(PAGE_SIZE);
  };

  const visible = filtered.slice(0, visibleCount);

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-4 space-y-3 border-y border-border/80 bg-[#0a0a0a]/95 px-4 py-4 backdrop-blur-md md:-mx-6 md:px-6 lg:top-[4.5rem]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {t.filterLabel}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="relative min-w-0 flex-1 sm:w-72 lg:w-80">
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

            <label className="sm:w-44">
              <span className="sr-only">{t.sortLabel}</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as ProviderGameSort)}
                className="h-10 w-full rounded-xl border border-border bg-card/80 px-3 text-sm font-semibold text-foreground outline-none ring-primary/40 focus:ring-2"
              >
                <option value="popular">{t.sort.popular}</option>
                <option value="newest">{t.sort.newest}</option>
                <option value="nameAsc">{t.sort.nameAsc}</option>
                <option value="rtp">{t.sort.rtp}</option>
              </select>
            </label>
          </div>
        </div>

        <div
          className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label={t.filterLabel}
        >
          {FILTERS.map((id) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(id)}
                className={cn(
                  "shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all md:text-sm",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/80 bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {t.filters[id]}
              </button>
            );
          })}
        </div>

        <p className="text-sm text-muted-foreground">
          <span className="font-semibold tabular-nums text-foreground">
            {filtered.length}
          </span>{" "}
          {t.resultsLabel}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-border bg-card/40 px-6 py-16 text-center">
          <p className="text-sm text-muted-foreground">
            {t.emptyState.replace("{provider}", providerName)}
          </p>
          <Button type="button" variant="outline" className="mt-6" onClick={reset}>
            {t.resetFilters}
          </Button>
        </div>
      ) : (
        <>
          <div className="mt-6">
            <GameGrid
              games={filtered}
              locale={locale}
              dictionary={dictionary}
              visibleCount={visibleCount}
            />
          </div>

          {visible.length < filtered.length ? (
            <div className="mt-10 flex justify-center">
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              >
                {t.loadMore}
              </Button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
