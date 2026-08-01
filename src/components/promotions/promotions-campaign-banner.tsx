import Image from "next/image";
import Link from "next/link";
import { Check, Download, UserPlus } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";

type PromotionsCampaignBannerProps = {
  locale: Locale;
  dictionary: Dictionary;
};

/** Mid-page content banner — not a hero replacement. */
export function PromotionsCampaignBanner({
  locale,
  dictionary,
}: PromotionsCampaignBannerProps) {
  const t = dictionary.promotions;

  return (
    <section
      className="section-y border-t border-border bg-background"
      aria-label={t.campaignTitle}
    >
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-border bg-[#111111] shadow-[var(--shadow-soft)]">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 55% 70% at 85% 45%, rgba(229,9,20,0.18), transparent 58%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(212,175,55,0.08), transparent 55%)",
            }}
          />
          <div className="relative grid grid-cols-2 items-center gap-3 p-4 sm:gap-6 sm:p-7 md:gap-10 md:p-10 lg:gap-12 lg:p-12">
            <Reveal>
              <div className="inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:px-3 sm:py-1 sm:text-xs">
                {t.campaignLabel}
              </div>
              <h2 className="h2-display mt-2 text-white sm:mt-4">
                {t.campaignTitle}
              </h2>
              <p className="text-lead mt-2 max-w-xl text-white/70 sm:mt-3">
                {t.campaignDescription}
              </p>

              <div className="df-actions mt-4 sm:mt-7">
                <Button asChild size="lg" className="whitespace-nowrap">
                  <Link href={localePath(locale, "/register")}>
                    <UserPlus className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {dictionary.nav.register}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="whitespace-nowrap"
                >
                  <Link href={localePath(locale, "/download")}>
                    <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {t.campaignDownload}
                  </Link>
                </Button>
              </div>

              <ul className="mt-7 space-y-3">
                {t.campaignBenefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/85"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-amber-500/12 blur-2xl"
                  aria-hidden="true"
                />
                <div className="brand-safe-media relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_0_40px_rgba(229,9,20,0.16)]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src="/images/promotions/tpower-promo-campaign-banner.webp"
                      alt={t.campaignImageAlt}
                      title={t.campaignTitle}
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
