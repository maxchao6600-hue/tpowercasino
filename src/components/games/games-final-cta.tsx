import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { PremiumCta } from "@/components/common/premium-cta";

type GamesFinalCtaProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function GamesFinalCta({ locale, dictionary }: GamesFinalCtaProps) {
  return (
    <div className="mt-14">
      <PremiumCta
        eyebrow={dictionary.common.brand}
        title={dictionary.games.finalCtaTitle}
        description={dictionary.games.finalCtaDescription}
        imageSrc="/images/cta/tpower-lobby-cta.webp"
        imageAlt={dictionary.games.finalCtaImageAlt}
        actions={[
          {
            href: localePath(locale, "/register"),
            label: dictionary.nav.register,
          },
          {
            href: localePath(locale, "/promotions"),
            label: dictionary.nav.promotions,
            variant: "secondary",
          },
        ]}
      />
    </div>
  );
}
