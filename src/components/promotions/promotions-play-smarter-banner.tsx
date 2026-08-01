import Image from "next/image";
import {
  Check,
  CreditCard,
  Crown,
  Download,
  Smartphone,
  UserPlus,
  Zap,
} from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";
import { SiteLink } from "@/components/common/site-link";

type PromotionsPlaySmarterBannerProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const highlightIcons = [Zap, CreditCard, Smartphone, Crown] as const;

/** Mid-page content banner between SEO parts — not a hero replacement. */
export function PromotionsPlaySmarterBanner({
  locale,
  dictionary,
}: PromotionsPlaySmarterBannerProps) {
  const t = dictionary.promotions;

  return (
    <section
      className="section-y bg-background"
      aria-labelledby="play-smarter-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-border bg-[#111111] shadow-[var(--shadow-soft)]">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 80% 35%, rgba(229,9,20,0.2), transparent 58%), radial-gradient(ellipse 45% 50% at 15% 70%, rgba(212,175,55,0.1), transparent 55%)",
            }}
          />
          <div className="relative grid grid-cols-2 items-center gap-3 p-4 sm:gap-6 sm:p-7 md:gap-10 md:p-10 lg:gap-12 lg:p-12">
            <Reveal>
              <h2
                id="play-smarter-heading"
                className="h2-display text-white"
              >
                {t.playSmarterTitle}
              </h2>
              <p className="text-lead mt-2 max-w-xl text-white/70 sm:mt-3">
                {t.playSmarterDescription}
              </p>

              <div className="df-scroll mt-4 flex gap-2 sm:mt-7 sm:grid sm:grid-cols-2 sm:gap-3 sm:overflow-visible">
                {t.playSmarterHighlights.map((item, index) => {
                  const Icon = highlightIcons[index] ?? Check;
                  return (
                    <div
                      key={item}
                      className="min-w-[160px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 hover:bg-primary/10 sm:min-w-0 sm:shrink sm:px-4 sm:py-4"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary sm:h-9 sm:w-9">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <p className="text-xs font-semibold leading-snug text-white sm:text-sm">
                          {item}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="df-actions mt-4 sm:mt-7">
                <Button asChild size="lg" className="whitespace-nowrap">
                  <SiteLink href={localePath(locale, "/register")}>
                    <UserPlus className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {dictionary.nav.register}
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="whitespace-nowrap border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <SiteLink href={localePath(locale, "/download")}>
                    <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {t.playSmarterDownload}
                  </SiteLink>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/22 via-transparent to-amber-400/12 blur-2xl"
                  aria-hidden="true"
                />
                <div className="brand-safe-media relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_0_40px_rgba(229,9,20,0.16)]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src="/images/promotions/tpower-promo-play-smarter-banner.webp"
                      alt={t.playSmarterImageAlt}
                      title={t.playSmarterTitle}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 46vw"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
