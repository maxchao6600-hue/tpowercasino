import Link from "next/link";
import { Download, Gift, UserPlus } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { BreadcrumbItem } from "@/types";
import { AtmosphereHero } from "@/components/common/atmosphere-hero";
import { AtmosphereMedia } from "@/components/common/atmosphere-media";
import { atmosphereImageFor } from "@/config/page-atmosphere";
import { Button } from "@/components/ui/button";

type PromotionsHeroProps = {
  locale: Locale;
  dictionary: Dictionary;
  breadcrumbs: BreadcrumbItem[];
  activeCount: number;
};

export function PromotionsHero({
  locale,
  dictionary,
  breadcrumbs,
  activeCount,
}: PromotionsHeroProps) {
  const t = dictionary.promotions;

  return (
    <AtmosphereHero
      breadcrumbs={breadcrumbs}
      eyebrow={t.heroEyebrow}
      brand={dictionary.common.brand}
      title={t.heroH1}
      description={`${t.heroHeadline} ${t.heroDescription}`}
      imageSrc={atmosphereImageFor("promotions")}
      imageAlt={t.heroImageAlt}
      actions={
        <div className="space-y-6">
          <div className="df-actions">
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
              className="border-white/20 bg-transparent text-white hover:border-white/35 hover:bg-white/10 hover:text-white"
            >
              <Link href={localePath(locale, "/download")}>
                <Download className="h-4 w-4" aria-hidden="true" />
                {dictionary.nav.download}
              </Link>
            </Button>
          </div>

          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-lg font-bold text-primary">
              <Gift className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                {activeCount} {t.activePromotionsLabel}
              </p>
              <p className="text-xs text-white/55">{t.activePromotionsHint}</p>
            </div>
          </div>
        </div>
      }
      aside={
        <AtmosphereMedia
          src={atmosphereImageFor("promotions")}
          alt={t.heroImageAlt}
          title={t.heroH1}
          priority
          aspectClassName="aspect-[16/10]"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      }
    />
  );
}
