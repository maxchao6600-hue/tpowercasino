"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { Game } from "@/types";
import { getProviderById } from "@/data/providers";
import { getGameDetailPath } from "@/lib/game-paths";

type GameCardProps = {
  locale: Locale;
  dictionary: Dictionary;
  game: Game;
  priority?: boolean;
};

/**
 * Thumbnail = artwork + NEW/HOT only.
 * Provider identity and CTA live in the info block below — never on the image.
 */
export function GameCard({
  locale,
  dictionary,
  game,
  priority = false,
}: GameCardProps) {
  const provider = getProviderById(game.providerId);
  const providerLabel = game.providerName || provider?.name || game.providerId;
  const [imageFailed, setImageFailed] = useState(false);
  const detailHref = localePath(locale, getGameDetailPath(game));

  useEffect(() => {
    setImageFailed(false);
  }, [game.id, game.image]);

  if (imageFailed) return null;

  return (
    <article className="group">
      <Link
        href={detailHref}
        className="block"
        aria-label={`${dictionary.games.playNow}: ${game.name[locale]}`}
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border/80 bg-[#111111] shadow-[var(--shadow-soft)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-[0_0_28px_rgba(229,9,20,0.22)]">
          <Image
            src={game.image}
            alt={game.name[locale]}
            title={game.name[locale]}
            fill
            priority={priority}
            loading={priority ? undefined : "lazy"}
            decoding="async"
            className="object-cover transition-[filter] duration-300 group-hover:brightness-110"
            sizes="(max-width: 640px) 46vw, (max-width: 1024px) 22vw, 16vw"
            onError={() => setImageFailed(true)}
          />

          {(game.new || game.featured) && (
            <div className="pointer-events-none absolute left-2 top-2 flex flex-wrap gap-1.5">
              {game.new ? (
                <span className="rounded-md bg-primary px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  {locale === "zh" ? "新" : "New"}
                </span>
              ) : null}
              {game.featured ? (
                <span className="rounded-md bg-amber-500/90 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                  {locale === "zh" ? "热门" : "Hot"}
                </span>
              ) : null}
            </div>
          )}
        </div>
      </Link>

      <div className="mt-2.5 px-0.5">
        <h3 className="line-clamp-2 text-[13px] font-bold leading-snug text-foreground md:text-sm">
          <Link
            href={detailHref}
            className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {game.name[locale]}
          </Link>
        </h3>
        <div className="mt-1.5 flex min-w-0 items-center gap-2">
          {provider?.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={provider.logo}
              alt=""
              width={52}
              height={14}
              className="h-3.5 w-auto max-w-[3.25rem] shrink-0 object-contain opacity-90"
              loading="lazy"
              decoding="async"
            />
          ) : null}
          <p className="truncate text-[11px] text-muted-foreground">
            {providerLabel}
            {" · "}
            {dictionary.games.categories[game.category]}
            {game.rtp ? ` · RTP ${game.rtp}` : ""}
          </p>
        </div>
      </div>
    </article>
  );
}
