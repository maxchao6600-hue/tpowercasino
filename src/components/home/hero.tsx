import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { AtmosphereHero } from "@/components/common/atmosphere-hero";
import { AtmosphereMedia } from "@/components/common/atmosphere-media";
import { atmosphereImageFor } from "@/config/page-atmosphere";
import { Button } from "@/components/ui/button";

type HeroProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Hero({ locale, dictionary }: HeroProps) {
  const { home, common } = dictionary;
  const imageAlt =
    locale === "zh"
      ? "TPOWER Online Casino 高端体育与娱乐平台氛围视觉"
      : "TPOWER Online Casino premium sports and casino atmosphere";

  return (
    <AtmosphereHero
      eyebrow={home.heroEyebrow}
      brand={home.heroH1}
      title={home.heroTitle}
      description={home.heroSubtitle}
      imageSrc={atmosphereImageFor("home")}
      imageAlt={imageAlt}
      actions={
        <div className="df-actions">
          <Button
            asChild
            size="lg"
            className="h-8 px-2.5 text-[10px] sm:h-10 sm:px-5 sm:text-sm lg:h-11 lg:px-6"
          >
            <Link href={localePath(locale, "/register")}>
              {common.ctaPrimary}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-8 border-white/20 bg-transparent px-2.5 text-[10px] text-white hover:border-white/35 hover:bg-white/10 hover:text-white sm:h-10 sm:px-5 sm:text-sm lg:h-11 lg:px-6"
          >
            <Link href={localePath(locale, "/download")}>
              {common.ctaSecondary}
            </Link>
          </Button>
        </div>
      }
      aside={
        <AtmosphereMedia
          src="/images/cta/tpower-lobby-cta.webp"
          alt={imageAlt}
          title={home.heroTitle}
          priority
          aspectClassName="aspect-[4/3]"
          sizes="(max-width: 768px) 42vw, 40vw"
        />
      }
    />
  );
}
