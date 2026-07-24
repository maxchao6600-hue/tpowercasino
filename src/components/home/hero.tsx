import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { AtmosphereHero } from "@/components/common/atmosphere-hero";
import { atmosphereImageFor } from "@/config/page-atmosphere";
import { Button } from "@/components/ui/button";

type HeroProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Hero({ locale, dictionary }: HeroProps) {
  const { home, common } = dictionary;

  return (
    <AtmosphereHero
      eyebrow={home.heroEyebrow}
      brand={home.heroH1}
      title={home.heroTitle}
      description={home.heroSubtitle}
      imageSrc={atmosphereImageFor("home")}
      imageAlt={
        locale === "zh"
          ? "TPOWER Online Casino 高端体育与娱乐平台氛围视觉"
          : "TPOWER Online Casino premium sports and casino atmosphere"
      }
      actions={
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link href={localePath(locale, "/register")}>
              {common.ctaPrimary}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:border-white/35 hover:bg-white/10 hover:text-white"
          >
            <Link href={localePath(locale, "/download")}>
              {common.ctaSecondary}
            </Link>
          </Button>
        </div>
      }
    />
  );
}
