import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { getCategorySeo } from "@/data/category-seo";
import { CategoryGamesPage } from "@/components/games/category-games-page";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const seo = getCategorySeo("/lottery");
  return buildMetadata({
    locale,
    title: seo?.metaTitle[locale] ?? dictionary.categoryPages.lottery.metaTitle,
    description:
      seo?.metaDescription[locale] ??
      dictionary.categoryPages.lottery.metaDescription,
    path: "/lottery",
  });
}

export default async function LotteryPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return (
    <CategoryGamesPage
      locale={locale}
      dictionary={dictionary}
      category="lottery"
      title={dictionary.categoryPages.lottery.title}
      description={dictionary.categoryPages.lottery.subtitle}
      path="/lottery"
    />
  );
}
