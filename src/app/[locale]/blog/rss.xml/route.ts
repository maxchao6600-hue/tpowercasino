import type { Locale } from "@/config/site";
import { isValidLocale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { blogPosts } from "@/data/blog";
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
  const items = [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .map((post) => ({
      title: post.title[locale],
      description: post.excerpt[locale],
      url: `/${locale}/blog/${post.slug}`,
      publishedAt: post.publishedAt,
      author: post.author,
    }));

  const xml = buildRssFeed({
    locale,
    title: `${dictionary.blog.title} | TPOWER`,
    description: dictionary.blog.metaDescription,
    path: "/blog/rss.xml",
    items,
  });

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
