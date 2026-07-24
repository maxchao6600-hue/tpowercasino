import type { Locale } from "@/config/site";
import { isValidLocale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { newsItems } from "@/data/news";
import { buildRssFeed } from "@/lib/rss";

type RouteProps = {
  params: Promise<{ locale: string }>;
};

export async function GET(_request: Request, { params }: RouteProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) {
    return new Response("Not found", { status: 404 });
  }
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const items = [...newsItems]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .map((item) => ({
      title: item.title[locale],
      description: item.excerpt[locale],
      url: `/${locale}/news/${item.slug}`,
      publishedAt: item.publishedAt,
      author: item.author,
    }));

  const xml = buildRssFeed({
    locale,
    title: `${dictionary.news.title} | TPOWER`,
    description: dictionary.news.metaDescription,
    path: "/news/rss.xml",
    items,
  });

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
