import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { getFeaturedProviders } from "@/data/providers";
import { ProviderLogoMark } from "@/components/games/provider-logo-mark";
import { Button } from "@/components/ui/button";

type GamesFeaturedProvidersProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function GamesFeaturedProviders({
  locale,
  dictionary,
}: GamesFeaturedProvidersProps) {
  const items = getFeaturedProviders().slice(0, 8);
  const t = dictionary.games;

  return (
    <section className="mt-16 border-t border-border/80 pt-14" aria-labelledby="games-providers-heading">
      <div className="mb-8 grid grid-cols-[1fr_auto] items-end gap-3">
        <div className="max-w-2xl min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            {t.providersEyebrow}
          </p>
          <h2
            id="games-providers-heading"
            className="h2-display mt-3 text-foreground"
          >
            {t.providersTitle}
          </h2>
          <p className="text-lead mt-3 text-muted-foreground">
            {t.providersSubtitle}
          </p>
        </div>
        <Button asChild variant="secondary" className="shrink-0">
          <Link href={localePath(locale, "/providers")}>{t.providersCta}</Link>
        </Button>
      </div>

      <div className="df-grid-4">
        {items.map((provider) => (
          <Link
            key={provider.id}
            href={localePath(locale, `/providers/${provider.slug}`)}
            className="group/logo group rounded-2xl border border-border/80 bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_28px_rgba(229,9,20,0.12)]"
          >
            <div className="flex h-14 items-center justify-center rounded-xl border border-border/60 bg-[#0f0f0f] px-4">
              <ProviderLogoMark
                name={provider.name}
                logo={provider.logo}
                variant="marquee"
              />
            </div>
            <h3 className="mt-4 text-base font-bold text-foreground">
              {provider.name}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {provider.description[locale]}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
