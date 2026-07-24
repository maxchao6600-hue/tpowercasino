import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { providerMarqueeItems } from "@/data/provider-marquee";
import { ProviderLogoMark } from "@/components/games/provider-logo-mark";

type ProvidersMarqueeProps = {
  locale: Locale;
  dictionary: Dictionary;
};

/**
 * Site-wide Official Game Providers marquee (Games-page benchmark).
 * Single row, always-visible colored logos, infinite scroll.
 */
export function ProvidersMarquee({
  locale,
  dictionary,
}: ProvidersMarqueeProps) {
  const t = dictionary.games;
  const loop = [...providerMarqueeItems, ...providerMarqueeItems];

  return (
    <section
      className="relative w-full overflow-hidden border-y border-border/70 bg-[#070707]"
      aria-labelledby="site-providers-marquee-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 120% at 50% 0%, rgba(229,9,20,0.1), transparent 60%)",
        }}
      />

      <div className="relative px-4 py-7 md:px-8 md:py-8">
        <div className="mx-auto mb-4 max-w-3xl text-center md:mb-5">
          <h2
            id="site-providers-marquee-heading"
            className="text-lg font-bold tracking-tight text-foreground md:text-xl"
          >
            {t.marqueeTitle}
          </h2>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
            {t.marqueeSubtitle}
          </p>
        </div>

        <div className="group/row relative h-[96px] overflow-hidden md:h-[104px]">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#070707] to-transparent md:w-10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#070707] to-transparent md:w-10"
            aria-hidden="true"
          />

          <div className="flex h-full w-max items-center gap-8 animate-marquee group-hover/row:[animation-play-state:paused] md:gap-12">
            {loop.map((provider, index) => {
              const content = (
                <ProviderLogoMark
                  name={provider.name}
                  logo={provider.logo}
                  variant="marquee"
                />
              );

              if (provider.href) {
                return (
                  <Link
                    key={`${provider.id}-${index}`}
                    href={localePath(locale, provider.href)}
                    className="group/logo shrink-0"
                    aria-label={provider.name}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div
                  key={`${provider.id}-${index}`}
                  className="group/logo shrink-0"
                  aria-label={provider.name}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
