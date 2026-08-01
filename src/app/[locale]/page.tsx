import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { localePath } from "@/config/i18n";
import { JsonLd } from "@/components/common/json-ld";
import { Hero } from "@/components/home/hero";
import { Statistics } from "@/components/home/statistics";
import { PromotionGrid } from "@/components/home/promotion-grid";
import { GameCategories } from "@/components/home/game-categories";
import { ProviderSlider } from "@/components/home/provider-slider";
import { FeatureGrid } from "@/components/home/feature-grid";
import { DownloadApp } from "@/components/home/download-app";
import { VipBenefits } from "@/components/home/vip-benefits";
import { LatestNews } from "@/components/home/latest-news";
import { HomepageSeo } from "@/components/home/homepage-seo";

const FaqSection = dynamic(() =>
  import("@/components/home/faq-section").then((m) => m.FaqSection),
);

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dictionary.home.metaTitle,
    description: dictionary.home.metaDescription,
    path: "/",
    image: "/images/hero.webp",
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);

  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(locale),
          websiteSchema(locale),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <Hero locale={locale} dictionary={dictionary} />
      <Statistics dictionary={dictionary} />
      <PromotionGrid locale={locale} dictionary={dictionary} />
      <GameCategories locale={locale} dictionary={dictionary} />
      <ProviderSlider locale={locale} dictionary={dictionary} />
      <FeatureGrid dictionary={dictionary} />
      <DownloadApp locale={locale} dictionary={dictionary} />
      <VipBenefits locale={locale} dictionary={dictionary} />
      <LatestNews locale={locale} dictionary={dictionary} />
      <FaqSection locale={locale} dictionary={dictionary} withSchema={false} />
      <HomepageSeo locale={locale} dictionary={dictionary} compact />
    </>
  );
}
