import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import { MIN_FULL_PROVIDER_LIBRARY } from "@/config/provider-library";
import type { Dictionary } from "@/lib/dictionary";
import type { Provider } from "@/types";
import { ProviderLogoMark } from "@/components/games/provider-logo-mark";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProviderCardProps = {
  locale: Locale;
  dictionary: Dictionary;
  provider: Provider;
  gameCount: number;
};

export function ProviderCard({
  locale,
  dictionary,
  provider,
  gameCount,
}: ProviderCardProps) {
  const t = dictionary.providers;
  const detailHref = localePath(locale, `/providers/${provider.slug}`);
  const gamesHref = localePath(locale, `/providers/${provider.slug}/games`);
  const registerHref = localePath(locale, "/register");
  const hasFullPlayableLibrary = gameCount >= MIN_FULL_PROVIDER_LIBRARY;
  const primaryHref = hasFullPlayableLibrary ? gamesHref : registerHref;
  const primaryLabel = hasFullPlayableLibrary
    ? t.gamesLibrary.viewAllGames
    : locale === "zh"
      ? "立即体验"
      : "Play Now";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 ease-out hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[var(--shadow-lift)]">
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-[60px] w-[120px] shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-muted/30 px-3 transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
            <ProviderLogoMark
              name={provider.name}
              logo={provider.logo}
              variant="card"
              className="h-full w-full [&_img]:h-10 [&_img]:max-h-10 [&_img]:max-w-[100px]"
            />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary">
            <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
            {t.officialBadge}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">
          <Link
            href={detailHref}
            className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {provider.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {gameCount > 0 ? (
            <>
              <span className="font-semibold tabular-nums text-foreground">
                {gameCount}
              </span>{" "}
              {t.gamesLibrary.gamesCountLabel}
            </>
          ) : (
            <span className="font-semibold text-foreground">
              {t.gamesLibrary.gamesAvailableAfterLogin}
            </span>
          )}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {provider.categories.map((category) => (
            <Badge key={category} variant="outline">
              {dictionary.games.categories[category]}
            </Badge>
          ))}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {provider.description[locale]}
        </p>

        <div className="mt-5 border-t border-border/70 pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {t.popularTypesLabel}
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {provider.gameTypes.map((type) => (
              <li key={type.en}>
                <Badge variant="accent">{type[locale]}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="df-actions mt-6 w-full min-w-0">
          <Button
            asChild
            size="lg"
            className="h-12 min-h-12 min-w-0 flex-1 whitespace-normal px-4 text-sm leading-snug sm:min-w-[9.5rem]"
          >
            <Link
              href={primaryHref}
              className="inline-flex w-full items-center justify-center gap-2 text-center"
            >
              <span className="min-w-0">{primaryLabel}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 min-h-12 min-w-0 flex-1 whitespace-normal px-4 text-sm leading-snug sm:min-w-[9.5rem]"
          >
            <Link
              href={detailHref}
              className="inline-flex w-full items-center justify-center text-center"
            >
              <span className="min-w-0">{t.exploreGames}</span>
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
