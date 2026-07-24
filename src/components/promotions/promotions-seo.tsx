import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import {
  promotionsHubLinks,
  promotionsSeoBlocks,
  promotionsSeoFaqs,
} from "@/data/promotions-seo";
import { Container } from "@/components/common/container";
import { PageFaq } from "@/components/seo/page-faq";
import { RelatedLinks } from "@/components/seo/related-links";
import { PromotionsSeoArticles } from "@/components/promotions/promotions-seo-articles";
import { PromotionsPlaySmarterBanner } from "@/components/promotions/promotions-play-smarter-banner";

type PromotionsSeoProps = {
  locale: Locale;
  dictionary: Dictionary;
};

/**
 * SEO pillar with a mid-article visual break:
 * Part 1 → Banner #2 → Part 2 → Related links → FAQ
 */
export function PromotionsSeo({ locale, dictionary }: PromotionsSeoProps) {
  const midpoint = Math.ceil(promotionsSeoBlocks.length / 2);
  const firstHalf = promotionsSeoBlocks.slice(0, midpoint);
  const secondHalf = promotionsSeoBlocks.slice(midpoint);

  return (
    <>
      <section
        className="section-y border-t border-border bg-card"
        aria-labelledby="promotions-seo-heading"
      >
        <Container className="max-w-4xl">
          <header className="mb-12">
            <p
              id="promotions-seo-heading"
              className="h2-display text-foreground"
            >
              {dictionary.promotions.seoTitle}
            </p>
            <p className="mt-4 text-body text-muted-foreground">
              {dictionary.promotions.seoSubtitle}
            </p>
          </header>
          <PromotionsSeoArticles locale={locale} blocks={firstHalf} />
        </Container>
      </section>

      <PromotionsPlaySmarterBanner locale={locale} dictionary={dictionary} />

      <section className="section-y border-t border-border bg-card">
        <Container className="max-w-4xl">
          <PromotionsSeoArticles locale={locale} blocks={secondHalf} />

          <RelatedLinks
            locale={locale}
            title={dictionary.seo.importantPages}
            items={promotionsHubLinks.map((item) => ({
              href: item.href,
              label: item.label[locale],
            }))}
          />

          <PageFaq
            locale={locale}
            title={dictionary.promotions.seoFaqTitle}
            items={promotionsSeoFaqs}
          />
        </Container>
      </section>
    </>
  );
}
