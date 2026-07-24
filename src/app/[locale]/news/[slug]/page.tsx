import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, locales } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { getNewsBySlug, newsItems } from "@/data/news";
import { NewsArticlePageContent } from "@/components/news/news-article-page";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    newsItems.map((item) => ({ locale, slug: item.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return buildMetadata({
    locale,
    title: item.seoTitle?.[locale] ?? item.title[locale],
    description: item.seoDescription?.[locale] ?? item.excerpt[locale],
    path: `/news/${item.slug}`,
    image: item.image,
    imageAlt: item.imageAlt[locale],
    type: "article",
    publishedTime: item.publishedAt,
    modifiedTime: item.updatedAt,
    authors: [item.author],
    keywords: item.keywords,
  });
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  return (
    <NewsArticlePageContent
      locale={locale}
      dictionary={dictionary}
      item={item}
    />
  );
}
