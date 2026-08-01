import { Download, Layers, UserPlus } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { BreadcrumbItem } from "@/types";
import { AtmosphereHero } from "@/components/common/atmosphere-hero";
import { atmosphereImageFor } from "@/config/page-atmosphere";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/common/site-link";

type ProvidersHeroProps = {
  locale: Locale;
  dictionary: Dictionary;
  breadcrumbs: BreadcrumbItem[];
  providerCount: number;
};

export function ProvidersHero({
  locale,
  dictionary,
  breadcrumbs,
  providerCount,
}: ProvidersHeroProps) {
  const t = dictionary.providers;

  return (
    <AtmosphereHero
      breadcrumbs={breadcrumbs}
      eyebrow={t.heroEyebrow}
      brand={dictionary.common.brand}
      title={t.heroH1}
      description={`${t.heroHeadline} ${t.heroDescription}`}
      imageSrc={atmosphereImageFor("providers")}
      imageAlt={t.heroImageAlt}
      overlay="cinematic"
      className="min-h-[500px] md:min-h-[580px] lg:min-h-[620px]"
      actions={
        <>
          <Button asChild size="lg">
            <SiteLink href={localePath(locale, "/register")}>
              <UserPlus className="h-4 w-4" aria-hidden="true" />
              {dictionary.nav.register}
            </SiteLink>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:border-white/35 hover:bg-white/10 hover:text-white"
          >
            <SiteLink href={localePath(locale, "/download")}>
              <Download className="h-4 w-4" aria-hidden="true" />
              {dictionary.nav.download}
            </SiteLink>
          </Button>
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-lg font-bold text-primary">
              <Layers className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                {providerCount}+ {t.providersCountLabel}
              </p>
              <p className="text-xs text-white/55">{t.providersCountHint}</p>
            </div>
          </div>
        </>
      }
    />
  );
}
