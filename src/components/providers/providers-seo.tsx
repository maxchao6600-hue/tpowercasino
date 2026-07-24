import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import {
  providersHubLinks,
  providersSeoBlocks,
  providersSeoFaqs,
} from "@/data/providers-seo";
import { Container } from "@/components/common/container";
import { PageFaq } from "@/components/seo/page-faq";
import { RelatedLinks } from "@/components/seo/related-links";
import { ProvidersSeoArticles } from "@/components/providers/providers-seo-articles";

type ProvidersSeoProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ProvidersSeo({ locale, dictionary }: ProvidersSeoProps) {
  return (
    <section
      className="section-y border-t border-border bg-card"
      aria-labelledby="providers-seo-heading"
    >
      <Container className="max-w-4xl">
        <header className="mb-12">
          <h2
            id="providers-seo-heading"
            className="h2-display text-foreground"
          >
            {dictionary.providers.seoTitle}
          </h2>
          <p className="mt-4 text-body text-muted-foreground">
            {dictionary.providers.seoSubtitle}
          </p>
        </header>

        <ProvidersSeoArticles locale={locale} blocks={providersSeoBlocks} />

        <RelatedLinks
          locale={locale}
          title={dictionary.seo.importantPages}
          items={providersHubLinks.map((item) => ({
            href: item.href,
            label: item.label[locale],
          }))}
        />

        <PageFaq
          locale={locale}
          title={dictionary.providers.seoFaqTitle}
          items={providersSeoFaqs}
        />
      </Container>
    </section>
  );
}
