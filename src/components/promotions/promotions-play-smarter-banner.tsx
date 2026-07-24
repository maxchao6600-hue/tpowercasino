import Image from "next/image";
import Link from "next/link";
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
          <div className="relative grid items-center gap-8 p-7 md:gap-10 md:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
            <Reveal>
              <h2
                id="play-smarter-heading"
                className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-[2.15rem] lg:leading-[1.15]"
              >
                {t.playSmarterTitle}
              </h2>
              <p className="mt-3 max-w-xl text-body leading-relaxed text-white/70">
                {t.playSmarterDescription}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {t.playSmarterHighlights.map((item, index) => {
                  const Icon = highlightIcons[index] ?? Check;
                  return (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 hover:bg-primary/10"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <p className="text-sm font-semibold text-white">{item}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={localePath(locale, "/register")}>
                    <UserPlus className="h-4 w-4" aria-hidden="true" />
                    {dictionary.nav.register}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href={localePath(locale, "/download")}>
                    <Download className="h-4 w-4" aria-hidden="true" />
                    {t.playSmarterDownload}
                  </Link>
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
