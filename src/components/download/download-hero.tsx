import { Apple, Smartphone, UserPlus } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import { atmosphereImageFor } from "@/config/page-atmosphere";
import type { Dictionary } from "@/lib/dictionary";
import type { BreadcrumbItem } from "@/types";
import { AtmosphereHero } from "@/components/common/atmosphere-hero";
import { Button } from "@/components/ui/button";
import { asDownloadCopy } from "@/components/download/download-copy";
import { PhoneMockup } from "@/components/download/phone-mockup";
import { SiteLink } from "@/components/common/site-link";

type DownloadHeroProps = {
  locale: Locale;
  dictionary: Dictionary;
  breadcrumbs: BreadcrumbItem[];
};

export function DownloadHero({
  locale,
  dictionary,
  breadcrumbs,
}: DownloadHeroProps) {
  const t = asDownloadCopy(dictionary.download);
  const brand = dictionary.common.brand;
  const heroAlt =
    t.heroImageAlt ??
    (locale === "zh"
      ? "TPOWER官方APP 真实首页截图"
      : "Official TPOWER App home screen");

  return (
    <AtmosphereHero
      breadcrumbs={breadcrumbs}
      brand={brand}
      title={t.title}
      description={t.subtitle}
      imageSrc={atmosphereImageFor("download")}
      imageAlt={heroAlt}
      overlay="cinematic"
      showTrustBar
      actions={
        <div className="flex flex-row flex-wrap gap-2 sm:gap-3">
          <Button
            asChild
            size="lg"
            className="h-8 px-2.5 text-[10px] sm:h-11 sm:px-6 sm:text-sm"
          >
            <SiteLink href={localePath(locale, "/apk")}>
              <Smartphone
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                aria-hidden="true"
              />
              {t.android}
            </SiteLink>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-8 px-2.5 text-[10px] sm:h-11 sm:px-6 sm:text-sm"
          >
            <SiteLink href="#install">
              <Apple
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                aria-hidden="true"
              />
              {t.ios}
            </SiteLink>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-8 border-white/20 bg-transparent px-2.5 text-[10px] text-white hover:border-white/35 hover:bg-white/10 hover:text-white sm:h-11 sm:px-6 sm:text-sm"
          >
            <SiteLink href={localePath(locale, "/register")}>
              <UserPlus
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                aria-hidden="true"
              />
              {dictionary.nav.register}
            </SiteLink>
          </Button>
        </div>
      }
      aside={<PhoneMockup alt={heroAlt} title={t.title} priority />}
    />
  );
}
