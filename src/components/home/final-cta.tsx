import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { PremiumCta } from "@/components/common/premium-cta";

type FinalCtaProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function FinalCta({ locale, dictionary }: FinalCtaProps) {
  return (
    <section className="section-y pt-0">
      <Container>
        <FadeIn animateOnView={false}>
          <PremiumCta
            title={dictionary.home.ctaTitle}
            description={dictionary.home.ctaSubtitle}
            imageSrc="/images/cta/tpower-join-cta.webp"
            imageAlt={dictionary.home.ctaImageAlt}
            actions={[
              {
                href: localePath(locale, "/register"),
                label: dictionary.common.ctaRegister,
              },
              {
                href: localePath(locale, "/download"),
                label: dictionary.common.ctaSecondary,
                variant: "outline",
              },
            ]}
          />
        </FadeIn>
      </Container>
    </section>
  );
}
