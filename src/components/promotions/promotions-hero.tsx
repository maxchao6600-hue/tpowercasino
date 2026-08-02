import { Download, Gift, UserPlus } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { BreadcrumbItem } from "@/types";
import { AtmosphereHero } from "@/components/common/atmosphere-hero";
import { AtmosphereMedia } from "@/components/common/atmosphere-media";
import { atmosphereImageFor } from "@/config/page-atmosphere";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/common/site-link";

type PromotionsHeroProps = {
  locale: Locale;
  dictionary: Dictionary;
  breadcrumbs: BreadcrumbItem[];
  activeCount: number;
};

/**
 * Desktop-first promotions hero:
 * Left copy + CTAs | Right promotional artwork (~42% width).
 * Mobile only scales — never stacks artwork below buttons.
 */
export function PromotionsHero({
  locale,
  dictionary,
  breadcrumbs,
  activeCount,
}: PromotionsHeroProps) {
  const t = dictionary.promotions;
  const heroArt = atmosphereImageFor("promotions");

  return (
    <AtmosphereHero
      breadcrumbs={breadcrumbs}
      eyebrow={t.heroEyebrow}
      brand={dictionary.common.brand}
      title={t.heroH1}
      description={`${t.heroHeadline} ${t.heroDescription}`}
      imageSrc={heroArt}
      imageAlt={t.heroImageAlt}
      overlay="cinematic"
      className="min-h-[440px] sm:min-h-[520px] lg:min-h-[580px]"
      actions={
        <div className="flex w-full min-w-0 flex-col gap-3 sm:gap-4 md:gap-5">
          <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3">
            <Button
              asChild
              size="lg"
              className="h-8 whitespace-nowrap px-2.5 text-[10px] sm:h-11 sm:px-6 sm:text-sm"
            >
              <SiteLink href={localePath(locale, "/register")}>
                <UserPlus
                  className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                  aria-hidden="true"
                />
                {dictionary.nav.register}
              </SiteLink>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-8 whitespace-nowrap border-white/20 bg-transparent px-2.5 text-[10px] text-white hover:border-white/35 hover:bg-white/10 hover:text-white sm:h-11 sm:px-6 sm:text-sm"
            >
              <SiteLink href={localePath(locale, "/download")}>
                <Download
                  className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                  aria-hidden="true"
                />
                {dictionary.nav.download}
              </SiteLink>
            </Button>
          </div>

          <div className="inline-flex max-w-full items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 backdrop-blur sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary sm:h-11 sm:w-11 sm:rounded-xl">
              <Gift className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-white sm:text-sm">
                {activeCount} {t.activePromotionsLabel}
              </p>
              <p className="truncate text-[10px] text-white/55 sm:text-xs">
                {t.activePromotionsHint}
              </p>
            </div>
          </div>
        </div>
      }
      aside={
        <AtmosphereMedia
          src={heroArt}
          alt={t.heroImageAlt}
          title={t.heroH1}
          priority
          glow={false}
          rounded="rounded-[14px] sm:rounded-[20px] md:rounded-[24px]"
          aspectClassName="aspect-[4/5] sm:aspect-[4/5] md:aspect-[3/4]"
          sizes="(max-width: 768px) 42vw, 40vw"
          className="w-full min-w-0"
        />
      }
    />
  );
}
