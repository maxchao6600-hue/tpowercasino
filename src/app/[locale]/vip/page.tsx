import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema,
} from "@/lib/schema";
import { vipFaqs } from "@/data/vip";
import { vipRelatedGuides } from "@/data/vip-page-content";
import { JsonLd } from "@/components/common/json-ld";
import { AtmosphereHero } from "@/components/common/atmosphere-hero";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { PageFaq } from "@/components/seo/page-faq";
import { RelatedLinks } from "@/components/seo/related-links";
import { atmosphereImageFor } from "@/config/page-atmosphere";
import { VipTrustMarquee } from "@/components/vip/vip-trust-marquee";
import { VipWhyJoin } from "@/components/vip/vip-why-join";
import { VipCompleteBenefits } from "@/components/vip/vip-complete-benefits";
import { VipTiers } from "@/components/vip/vip-tiers";
import { VipComparisonTable } from "@/components/vip/vip-comparison-table";
import { VipWithdrawals } from "@/components/vip/vip-withdrawals";
import { VipManager } from "@/components/vip/vip-manager";
import { VipExclusivePromos } from "@/components/vip/vip-exclusive-promos";
import { VipTestimonials } from "@/components/vip/vip-testimonials";
import { VipHowTo } from "@/components/vip/vip-how-to";
import { VipFinalCta } from "@/components/vip/vip-final-cta";
import { SiteLink } from "@/components/common/site-link";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dictionary.vip.metaTitle,
    description: dictionary.vip.metaDescription,
    path: "/vip",
    image: atmosphereImageFor("vip"),
    imageAlt: dictionary.vip.heroImageAlt,
    keywords: dictionary.vip.keywords,
  });
}

export default async function VipPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const t = dictionary.vip;
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    { name: t.metaTitle, href: localePath(locale, "/vip") },
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(locale),
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            locale,
            name: t.metaTitle,
            description: t.metaDescription,
            path: "/vip",
          }),
        ]}
      />

      <AtmosphereHero
        title={t.title}
        description={t.subtitle}
        breadcrumbs={breadcrumbs}
        brand={dictionary.common.brand}
        imageSrc={atmosphereImageFor("vip")}
        imageAlt={t.heroImageAlt}
        overlay="cinematic"
        showTrustBar={false}
        actions={
          <div className="flex flex-row flex-wrap gap-2 sm:gap-3">
            <Button asChild size="lg" className="h-9 px-3 text-xs sm:h-11 sm:px-6 sm:text-sm">
              <SiteLink href={localePath(locale, "/register")}>
                {t.heroCtaPrimary}
              </SiteLink>
            </Button>
            <Button asChild size="lg" variant="secondary" className="h-9 px-3 text-xs sm:h-11 sm:px-6 sm:text-sm">
              <SiteLink href="#tiers">{t.heroCtaSecondary}</SiteLink>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-9 border-white/20 bg-transparent px-3 text-xs text-white hover:border-white/35 hover:bg-white/10 hover:text-white sm:h-11 sm:px-6 sm:text-sm"
            >
              <SiteLink href="#complete-benefits">{t.heroCtaTertiary}</SiteLink>
            </Button>
          </div>
        }
      />

      <VipTrustMarquee locale={locale} />
      <VipWhyJoin locale={locale} dictionary={dictionary} />
      <VipCompleteBenefits locale={locale} dictionary={dictionary} />
      <VipTiers locale={locale} dictionary={dictionary} />
      <VipComparisonTable locale={locale} dictionary={dictionary} />
      <VipWithdrawals locale={locale} dictionary={dictionary} />
      <VipManager locale={locale} dictionary={dictionary} />
      <VipExclusivePromos locale={locale} dictionary={dictionary} />
      <VipTestimonials locale={locale} dictionary={dictionary} />
      <VipHowTo locale={locale} dictionary={dictionary} />

      <section className="section-y pt-0 md:pt-0">
        <Container>
          <div className="[&>section]:mt-0">
            <PageFaq locale={locale} title={t.faqTitle} items={vipFaqs} />
          </div>
          <RelatedLinks
            locale={locale}
            title={t.relatedTitle}
            items={vipRelatedGuides.map((guide) => ({
              href: guide.href,
              label: guide.title[locale],
              description: guide.description[locale],
            }))}
          />
        </Container>
      </section>

      <VipFinalCta locale={locale} dictionary={dictionary} />
    </>
  );
}
