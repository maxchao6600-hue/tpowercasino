import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  organizationSchema,
  reviewSchemaList,
  softwareApplicationSchema,
  webPageSchema,
} from "@/lib/schema";
import {
  downloadFaqs,
  downloadInstallSteps,
  downloadReviews,
} from "@/data/download-page-content";
import { JsonLd } from "@/components/common/json-ld";
import { DownloadPageContent } from "@/components/download/download-page";
import { atmosphereImageFor } from "@/config/page-atmosphere";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dictionary.download.metaTitle,
    description: dictionary.download.metaDescription,
    path: "/download",
    image: atmosphereImageFor("download"),
    imageAlt: dictionary.download.heroImageAlt,
    keywords: dictionary.download.keywords,
  });
}

export default async function DownloadPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    {
      name: dictionary.download.metaTitle,
      href: localePath(locale, "/download"),
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(locale),
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            locale,
            name: dictionary.download.metaTitle,
            description: dictionary.download.metaDescription,
            path: "/download",
          }),
          softwareApplicationSchema(locale),
          howToSchema({
            name:
              locale === "zh"
                ? "如何安装 TPOWER官方APP"
                : "How to install the TPOWER App",
            description: dictionary.download.installSubtitle,
            steps: downloadInstallSteps.map((step) => ({
              name: step.title[locale],
              text: step.body[locale],
              image: step.image,
            })),
          }),
          faqSchema(
            downloadFaqs.map((item) => ({
              question: item.question[locale],
              answer: item.answer[locale],
            })),
          ),
          ...reviewSchemaList(
            downloadReviews.map((review) => ({
              author: review.name,
              reviewBody: review.quote[locale],
              ratingValue: review.rating,
            })),
          ),
        ]}
      />
      <DownloadPageContent locale={locale} dictionary={dictionary} />
    </>
  );
}
