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
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            {t.providersEyebrow}
          </p>
          <h2
            id="games-providers-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          >
            {t.providersTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.providersSubtitle}
          </p>
        </div>
        <Button asChild variant="secondary">
          <Link href={localePath(locale, "/providers")}>{t.providersCta}</Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
