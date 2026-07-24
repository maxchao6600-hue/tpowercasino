import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { NewsCategoryKey, NewsItem } from "@/types";
import {
  getEditorsPicks,
  getLatestNews,
  getPopularNews,
  getRecommendedNews,
  getTrendingNews,
  newsItems,
} from "@/data/news";
import { newsStatusLine } from "@/data/news-page-content";
import { Container } from "@/components/common/container";
import { RelatedLinks } from "@/components/seo/related-links";
import { NewsBreakingTicker } from "@/components/news/news-breaking-ticker";
import { NewsCategoryFilters } from "@/components/news/news-category-filters";
import { NewsFeaturedHero } from "@/components/news/news-featured-hero";
import { NewsMagazineGrid } from "@/components/news/news-magazine-grid";
import { NewsNewsletter } from "@/components/news/news-newsletter";
import {
  NewsEditorsPicks,
  NewsRecommended,
  NewsTrendingShelf,
} from "@/components/news/news-shelves";
import { NewsSidebar } from "@/components/news/news-sidebar";
import { NewsStats } from "@/components/news/news-stats";
import { NewsTimeline } from "@/components/news/news-timeline";
import { asNewsCopy } from "@/components/news/news-copy";

type NewsPageContentProps = {
  locale: Locale;
  dictionary: Dictionary;
  query?: string;
  category?: string;
};

function sortDesc(items: NewsItem[]) {
  return [...items].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

function takeUnique(
  pool: NewsItem[],
  used: Set<string>,
  limit: number,
): NewsItem[] {
  const picked: NewsItem[] = [];
  for (const item of pool) {
    if (used.has(item.id)) continue;
    picked.push(item);
    used.add(item.id);
    if (picked.length >= limit) break;
  }
  return picked;
}

export function NewsPageContent({
  locale,
  dictionary,
  query = "",
  category = "all",
}: NewsPageContentProps) {
  const t = asNewsCopy(dictionary.news);
  const q = query.trim().toLowerCase();
  const activeCategory =
    category === "all" || !category
      ? "all"
      : (category as NewsCategoryKey | "all");

  const sorted = sortDesc(newsItems);
  const filtered = sorted.filter((item) => {
    const categoryOk =
      activeCategory === "all" || item.categoryKey === activeCategory;
    if (!categoryOk) return false;
    if (!q) return true;
    const haystack = [
      item.title[locale],
      item.excerpt[locale],
      item.category[locale],
      item.author,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });

  const featured =
    filtered.find((item) => item.featured) ?? filtered[0] ?? null;

  const used = new Set<string>();
  if (featured) used.add(featured.id);

  const inFilter = (item: NewsItem) =>
    activeCategory === "all" || item.categoryKey === activeCategory;

  // Latest magazine first for density, then exclusive shelf cards from leftovers.
  const magazineItems = takeUnique(filtered, used, 6);
  const trendingFilled = takeUnique(
    sortDesc(getTrendingNews(8).filter(inFilter)),
    used,
    4,
  );
  const editorsFilled = takeUnique(
    sortDesc(getEditorsPicks(8).filter(inFilter)),
    used,
    4,
  );
  const recommendedFilled = takeUnique(
    sortDesc(getRecommendedNews(6).filter(inFilter)),
    used,
    3,
  );

  return (
    <>
      {featured ? (
        <NewsFeaturedHero
          item={featured}
          locale={locale}
          dictionary={dictionary}
        />
      ) : (
        <section className="border-b border-border/60 bg-[#0a0a0a] py-16">
          <Container>
            <h1 className="text-3xl font-bold text-foreground">
              {dictionary.news.title}
            </h1>
            <p className="mt-3 text-muted-foreground">
              {locale === "zh" ? "未找到匹配新闻。" : "No matching news found."}
            </p>
          </Container>
        </section>
      )}

      <NewsBreakingTicker locale={locale} dictionary={dictionary} />

      <section className="bg-[#070707] py-8 sm:py-10 md:py-12">
        <Container className="space-y-8 sm:space-y-10">
          <NewsCategoryFilters
            locale={locale}
            active={activeCategory === "all" ? "all" : activeCategory}
            query={query}
          />

          <div className="grid grid-cols-[1fr_280px] items-start gap-5 lg:grid-cols-[1fr_300px] lg:gap-8 xl:grid-cols-[1fr_320px]">
            <div className="min-w-0 space-y-10 sm:space-y-12">
              {magazineItems.length > 0 ? (
                <NewsMagazineGrid
                  items={magazineItems}
                  locale={locale}
                  dictionary={dictionary}
                />
              ) : (
                <p className="text-sm text-muted-foreground">
                  {locale === "zh"
                    ? "此分类暂无更多文章。"
                    : "No more articles in this category."}
                </p>
              )}

              <NewsTrendingShelf
                locale={locale}
                dictionary={dictionary}
                items={trendingFilled}
              />

              <NewsEditorsPicks
                locale={locale}
                dictionary={dictionary}
                items={editorsFilled}
              />

              <NewsRecommended
                locale={locale}
                dictionary={dictionary}
                items={recommendedFilled}
              />
            </div>

            <NewsSidebar
              locale={locale}
              dictionary={dictionary}
              latest={getLatestNews(5)}
              trending={getTrendingNews(4)}
              popular={getPopularNews(4)}
              recentUpdates={sortDesc(
                newsItems.filter((item) => item.categoryKey === "update"),
              ).slice(0, 4)}
              query={query}
              statusLine={newsStatusLine[locale]}
            />
          </div>

          <NewsTimeline locale={locale} dictionary={dictionary} />
          <NewsStats locale={locale} dictionary={dictionary} />
          <NewsNewsletter locale={locale} dictionary={dictionary} />

          <RelatedLinks
            locale={locale}
            title={
              t.importantLinks ??
              dictionary.seo.importantPages ??
              (locale === "zh" ? "重要链接" : "Important links")
            }
            items={[
              {
                href: "/download",
                label: dictionary.nav.download,
                description:
                  locale === "zh"
                    ? "官方 APP 与 APK 下载"
                    : "Official app and APK download",
              },
              {
                href: "/register",
                label: dictionary.nav.register,
                description:
                  locale === "zh" ? "快速注册开户" : "Create your account",
              },
              {
                href: "/promotions",
                label: dictionary.nav.promotions,
                description:
                  locale === "zh" ? "欢迎礼与返水" : "Welcome and cashback offers",
              },
              {
                href: "/vip",
                label: dictionary.vip.title,
                description:
                  locale === "zh" ? "VIP 等级与管家" : "VIP tiers and hosts",
              },
              {
                href: "/games",
                label: dictionary.nav.games,
                description:
                  locale === "zh" ? "进入游戏大厅" : "Enter the game lobby",
              },
              {
                href: "/blog",
                label: dictionary.blog.title,
                description:
                  locale === "zh" ? "攻略与教学" : "Guides and tutorials",
              },
              {
                href: "/contact",
                label: dictionary.nav.contact,
                description:
                  locale === "zh" ? "联系官方客服" : "Contact official support",
              },
            ].map((item) => ({
              ...item,
              href: item.href,
            }))}
          />

          <p className="text-center text-[11px] text-muted-foreground sm:text-xs">
            <Link
              href={localePath(locale, "/news/rss.xml")}
              className="font-semibold hover:text-primary"
            >
              RSS
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
