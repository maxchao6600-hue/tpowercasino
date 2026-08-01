import Image from "next/image";
import { Gamepad2, UserPlus } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { BreadcrumbItem, Game } from "@/types";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { Container } from "@/components/common/container";
import { TrustBar } from "@/components/common/trust-bar";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/common/site-link";

type GamesHeroProps = {
  locale: Locale;
  dictionary: Dictionary;
  breadcrumbs: BreadcrumbItem[];
  totalGames: number;
  mosaic: Game[];
};

/** Canonical Games-page hero — global visual benchmark for the site. */
export function GamesHero({
  locale,
  dictionary,
  breadcrumbs,
  totalGames,
  mosaic,
}: GamesHeroProps) {
  const t = dictionary.games;

  return (
    <>
    <section className="relative overflow-hidden bg-[#070707]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-45 md:grid-cols-6 lg:grid-cols-8">
          {mosaic.slice(0, 16).map((game) => (
            <div key={game.id} className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={game.image}
                alt=""
                fill
                className="object-cover"
                sizes="12vw"
                priority
              />
            </div>
          ))}
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,7,7,0.96) 0%, rgba(7,7,7,0.88) 42%, rgba(7,7,7,0.55) 70%, rgba(7,7,7,0.82) 100%), radial-gradient(ellipse 55% 70% at 75% 45%, rgba(229,9,20,0.28), transparent 62%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-28 md:h-36"
          style={{
            background: "linear-gradient(180deg, transparent 0%, #070707 92%)",
          }}
        />
      </div>

      <Container className="relative py-10 md:py-12 lg:py-14">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <Gamepad2 className="h-3.5 w-3.5" aria-hidden="true" />
            {t.heroEyebrow}
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-white/70">
            {dictionary.common.brand}
          </p>

          <h1 className="h1-display mt-3 text-white">
            {t.heroH1}
          </h1>

          <p className="text-lead mt-4 max-w-xl text-white/72">
            {t.heroDescription}
          </p>

          <div className="df-actions mt-8">
            <Button asChild size="lg">
              <SiteLink href={localePath(locale, "/register")}>
                <UserPlus className="h-4 w-4" aria-hidden="true" />
                {dictionary.nav.register}
              </SiteLink>
            </Button>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
              <span className="text-2xl font-bold tabular-nums text-primary">
                {totalGames}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  {t.catalogueCountLabel}
                </p>
                <p className="text-xs text-white/55">{t.catalogueCountHint}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
    <TrustBar />
    </>
  );
}
