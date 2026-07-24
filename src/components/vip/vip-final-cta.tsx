import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Container } from "@/components/common/container";
import { PremiumCta } from "@/components/common/premium-cta";

type VipFinalCtaProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function VipFinalCta({ locale, dictionary }: VipFinalCtaProps) {
  const t = dictionary.vip;

  return (
    <section className="section-y pt-0 md:pt-2" id="join-vip">
      <Container>
        <PremiumCta
          title={t.finalCtaTitle}
          description={t.finalCtaDescription}
          imageSrc="/images/promotions/tpower-vip-rewards.webp"
          imageAlt={t.finalCtaImageAlt}
          actions={[
            {
              href: localePath(locale, "/register"),
              label: dictionary.nav.register,
            },
            {
              href: localePath(locale, "/download"),
              label: t.finalCtaDownload,
              variant: "outline",
            },
          ]}
        />
      </Container>
    </section>
  );
}
