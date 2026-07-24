import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { localePath } from "@/config/i18n";
import { JsonLd } from "@/components/common/json-ld";
import { NewsPageContent } from "@/components/news/news-page";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string; category?: string; page?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dictionary.news.metaTitle,
    description: dictionary.news.metaDescription,
    path: "/news",
  });
}

export default async function NewsPage({ params, searchParams }: PageProps) {
  const { locale: raw } = await params;
  const { q = "", category = "all" } = await searchParams;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);

  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    { name: dictionary.news.metaTitle, href: localePath(locale, "/news") },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          collectionPageSchema({
            name: dictionary.news.title,
            description: dictionary.news.subtitle,
            url: localePath(locale, "/news"),
          }),
        ]}
      />
      <NewsPageContent
        locale={locale}
        dictionary={dictionary}
        query={q}
        category={category}
      />
    </>
  );
}
