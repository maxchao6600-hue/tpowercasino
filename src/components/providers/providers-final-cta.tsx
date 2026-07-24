import { Check } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Container } from "@/components/common/container";
import { PremiumCta } from "@/components/common/premium-cta";

type ProvidersFinalCtaProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ProvidersFinalCta({
  locale,
  dictionary,
}: ProvidersFinalCtaProps) {
  const t = dictionary.providers;

  return (
    <section className="section-y">
      <Container>
        <PremiumCta
          eyebrow={t.finalCtaEyebrow}
          title={t.finalCtaTitle}
          description={t.finalCtaDescription}
          imageSrc="/images/cta/tpower-lobby-cta.webp"
          imageAlt={t.finalCtaImageAlt}
          beforeActions={
            <ul className="mt-6 space-y-3">
              {t.finalCtaHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/85"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          }
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
