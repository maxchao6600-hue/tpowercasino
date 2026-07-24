import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { providers } from "@/data/providers";
import { ProviderLogoMark } from "@/components/games/provider-logo-mark";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";

type ProviderSliderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ProviderSlider({ locale, dictionary }: ProviderSliderProps) {
  const loop = [...providers, ...providers];

  return (
    <Section
      className="bg-surface"
      title={dictionary.home.providersTitle}
      description={dictionary.home.providersSubtitle}
    >
      <div className="group relative overflow-hidden rounded-[24px] border border-border bg-card py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent" />
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {loop.map((provider, index) => (
            <Link
              key={`${provider.id}-${index}`}
              href={localePath(locale, `/providers/${provider.slug}`)}
              className="flex h-20 w-44 shrink-0 items-center justify-center rounded-[24px] border border-border bg-surface px-5 shadow-[var(--shadow-soft)] transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-primary/35 hover:shadow-[var(--shadow-card)]"
              aria-label={provider.name}
            >
              <ProviderLogoMark
                name={provider.name}
                logo={provider.logo}
                variant="card"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <Button asChild variant="outline">
          <Link href={localePath(locale, "/providers")}>
            {locale === "zh" ? "查看全部供应商" : "View all providers"}
          </Link>
        </Button>
      </div>
    </Section>
  );
}
