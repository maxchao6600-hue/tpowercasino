import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  collectionPageSchema,
  offerItemListSchema,
  organizationSchema,
} from "@/lib/schema";
import { getPromotionsByCategory, promotions } from "@/data/promotions";
import type { PromotionCategory } from "@/types";
import { JsonLd } from "@/components/common/json-ld";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Button } from "@/components/ui/button";
import { PromotionsHero } from "@/components/promotions/promotions-hero";
import { PromotionFilters } from "@/components/promotions/promotion-filters";
import { PromotionCard } from "@/components/promotions/promotion-card";
import { PromotionsCampaignBanner } from "@/components/promotions/promotions-campaign-banner";
import { PromotionsFinalCta } from "@/components/promotions/promotions-final-cta";
import { PromotionsSeo } from "@/components/promotions/promotions-seo";

const categories: Array<PromotionCategory | "all"> = [
  "all",
  "welcome",
  "reload",
  "cashback",
  "vip",
  "seasonal",
];

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dictionary.promotions.metaTitle,
    description: dictionary.promotions.metaDescription,
    path: "/promotions",
    image: "/images/promotions/tpower-promotions-hero.webp",
  });
}

export default async function PromotionsPage({ params, searchParams }: PageProps) {
  const { locale: raw } = await params;
  const { category: rawCategory } = await searchParams;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const category = categories.includes(rawCategory as PromotionCategory | "all")
    ? (rawCategory as PromotionCategory | "all")
    : "all";
  const filtered = getPromotionsByCategory(category);

  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    {
      name: dictionary.promotions.metaTitle,
      href: localePath(locale, "/promotions"),
    },
  ];

  const offerList = filtered.map((promo) => ({
    name: promo.title[locale],
    description: promo.summary[locale],
    url: `/${locale}/promotions/${promo.slug}`,
    image: promo.image,
    validThrough: promo.expiresAt,
    category: dictionary.promotions.categories[promo.category],
  }));

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(locale),
          breadcrumbSchema(breadcrumbs),
          collectionPageSchema({
            name: dictionary.promotions.heroH1,
            description: dictionary.promotions.metaDescription,
            url: `/${locale}/promotions`,
          }),
          offerItemListSchema(offerList),
        ]}
      />

      <PromotionsHero
        locale={locale}
        dictionary={dictionary}
        breadcrumbs={breadcrumbs}
        activeCount={promotions.length}
      />

      <section className="section-y">
        <Container>
          <PromotionFilters
            locale={locale}
            dictionary={dictionary}
            active={category}
            categories={categories}
          />

          {filtered.length > 0 ? (
            <div className="df-grid-2 mt-10">
              {filtered.map((promo, index) => (
                <FadeIn key={promo.id} delay={index * 0.04}>
                  <PromotionCard
                    locale={locale}
                    dictionary={dictionary}
                    promo={promo}
                  />
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[28px] border border-border bg-card p-10 text-center">
              <p className="text-muted-foreground">
                {dictionary.promotions.emptyState}
              </p>
              <Button asChild className="mt-6" variant="secondary">
                <Link href={localePath(locale, "/promotions")}>
                  {dictionary.promotions.categories.all}
                </Link>
              </Button>
            </div>
          )}
        </Container>
      </section>

      <PromotionsCampaignBanner locale={locale} dictionary={dictionary} />
      <PromotionsSeo locale={locale} dictionary={dictionary} />
      <PromotionsFinalCta locale={locale} dictionary={dictionary} />
    </>
  );
}
