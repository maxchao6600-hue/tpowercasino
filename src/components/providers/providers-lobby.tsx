"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import type { Provider } from "@/types";
import {
  providerFilterIds,
  type ProviderFilterId,
} from "@/data/providers";
import { cn } from "@/lib/utils";
import { ProviderCard } from "@/components/providers/provider-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ProvidersLobbyProps = {
  locale: Locale;
  dictionary: Dictionary;
  providers: Provider[];
  gameCounts: Record<string, number>;
};

function matchesQuery(provider: Provider, locale: Locale, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  const haystack = [
    provider.name,
    provider.id,
    provider.slug,
    provider.description.en,
    provider.description.zh,
    provider.introduction.en,
    provider.introduction.zh,
    ...provider.categories,
    ...provider.gameTypes.map((t) => `${t.en} ${t.zh}`),
    ...provider.features.map((f) => `${f.en} ${f.zh}`),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(q) || provider.description[locale].toLowerCase().includes(q);
}

function categoryMatches(provider: Provider, filter: ProviderFilterId) {
  if (filter === "all") return true;
  if (filter === "live-casino") {
    return provider.categories.some((c) => c === "live-casino" || c === "table");
  }
  return provider.categories.includes(filter);
}

export function ProvidersLobby({
  locale,
  dictionary,
  providers,
  gameCounts,
}: ProvidersLobbyProps) {
  const t = dictionary.providers;
  const [filter, setFilter] = useState<ProviderFilterId>("all");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    return providers.filter(
      (provider) =>
        categoryMatches(provider, filter) &&
        matchesQuery(provider, locale, deferredQuery),
    );
  }, [providers, filter, locale, deferredQuery]);

  const reset = () => {
    setFilter("all");
    setQuery("");
  };

  return (
    <div>
      <div className="sticky top-[var(--site-header-offset,4.5rem)] z-20 -mx-1 mb-8 space-y-4 rounded-[22px] border border-border/80 bg-[#0b0b0b]/95 px-4 py-4 backdrop-blur-md md:px-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {t.filterLabel}
          </p>
          <div className="relative w-full max-w-md">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
              className="h-11 border-border/80 bg-card/60 pl-10 pr-10"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
                aria-label={t.resetFilters}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : null}
          </div>
        </div>

        <div
          className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label={t.filterLabel}
        >
          {providerFilterIds.map((id) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200",
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_8px_24px_-12px_rgba(229,9,20,0.8)]"
                    : "border-border/80 bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {t.filterCategories[id]}
              </button>
            );
          })}
        </div>

        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          {t.resultsLabel}
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((provider) => (
            <ProviderCard
              key={provider.id}
              locale={locale}
              dictionary={dictionary}
              provider={provider}
              gameCount={gameCounts[provider.slug] ?? 0}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-[24px] border border-dashed border-border bg-card/40 px-6 py-16 text-center">
          <p className="text-base text-muted-foreground">{t.emptyState}</p>
          <Button type="button" variant="outline" className="mt-6" onClick={reset}>
            {t.resetFilters}
          </Button>
        </div>
      )}
    </div>
  );
}
