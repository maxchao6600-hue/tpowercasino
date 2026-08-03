import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { NewsItem } from "@/types";
import {
  getAdjacentNews,
  getRecommendedNews,
  newsItems,
} from "@/data/news";
import { extractToc, getRelatedNews, readingLabel } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/common/json-ld";
import { Container } from "@/components/common/container";
import { MarkdownArticle } from "@/components/seo/markdown-article";
import { TableOfContents } from "@/components/seo/table-of-contents";
import { PageFaq } from "@/components/seo/page-faq";
import { ShareLinks } from "@/components/seo/share-links";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/news/news-card";
import { NewsNewsletter } from "@/components/news/news-newsletter";
import { ReadingProgress } from "@/components/news/reading-progress";
import {
  asNewsCopy,
  badgeLabel,
  updatedLabel,
} from "@/components/news/news-copy";

type NewsArticlePageContentProps = {
  locale: Locale;
  dictionary: Dictionary;
  item: NewsItem;
};

export function NewsArticlePageContent({
  locale,
  dictionary,
  item,
}: NewsArticlePageContentProps) {
  const t = asNewsCopy(dictionary.news);
  const toc = extractToc(item.content[locale]);
  const related = getRelatedNews(item, newsItems, 3);
  const recommended = getRecommendedNews(4)
    .filter((entry) => entry.slug !== item.slug)
    .filter((entry) => !related.some((r) => r.slug === entry.slug))
    .slice(0, 3);
  const { prev, next } = getAdjacentNews(item.slug);

  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    { name: dictionary.news.metaTitle, href: localePath(locale, "/news") },
    {
      name: item.title[locale],
      href: localePath(locale, `/news/${item.slug}`),
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          articleSchema({
            title: item.seoTitle?.[locale] ?? item.title[locale],
            description: item.seoDescription?.[locale] ?? item.excerpt[locale],
            image: item.image,
            datePublished: item.publishedAt,
            dateModified: item.updatedAt,
            author: item.author,
            url: localePath(locale, `/news/${item.slug}`),
            type: "NewsArticle",
          }),
        ]}
      />
      <ReadingProgress
        label={
          t.progressLabel ??
          (locale === "zh" ? "阅读进度" : "Reading progress")
        }
      />

      <section className="relative isolate min-h-[360px] overflow-hidden sm:min-h-[480px] lg:min-h-[560px]">
        <Image
          src={item.image}
          alt={item.imageAlt[locale]}
          title={item.title[locale]}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,5,5,0.35) 0%, rgba(5,5,5,0.82) 55%, rgba(5,5,5,0.96) 100%), radial-gradient(ellipse 60% 50% at 70% 30%, rgba(229,9,20,0.25), transparent 65%)",
          }}
        />
        <Container className="relative flex min-h-[360px] flex-col justify-end pb-8 pt-24 sm:min-h-[480px] sm:pb-12 sm:pt-28 lg:min-h-[560px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 text-[10px] text-white/55 sm:mb-6 sm:text-xs"
          >
            <ol className="flex flex-wrap items-center gap-1.5">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="line-clamp-1 text-white/80">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-primary">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">{item.category[locale]}</Badge>
            <Badge variant="outline">{badgeLabel(item.badge, locale)}</Badge>
            <span className="text-[10px] text-white/70 sm:text-xs">
              {formatDate(item.publishedAt, locale)}
            </span>
            <span className="text-[10px] text-white/70 sm:text-xs">
              {readingLabel(item.readingMinutes, locale)}
            </span>
          </div>
          <h1 className="mt-3 max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white sm:mt-4 sm:text-4xl md:text-5xl">
            {item.title[locale]}
          </h1>
          <p className="mt-3 max-w-3xl text-xs leading-relaxed text-white/75 sm:mt-4 sm:text-base">
            {item.excerpt[locale]}
          </p>
          <p className="mt-4 text-[11px] text-white/60 sm:text-sm">
            {(t.byAuthor ?? (locale === "zh" ? "作者" : "By")) +
              ` ${item.author} · ${updatedLabel(item.updatedAt, locale)}`}
          </p>
        </Container>
      </section>

      <section className="bg-[#070707] py-8 sm:py-12">
        <Container>
          <div className="df-row-2">
          <div className="df-news-grid grid grid-cols-[minmax(440px,1fr)_280px] items-start gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_300px]">
            <article id="news-article-body" className="min-w-[440px] xl:min-w-0">
              <div className="prose-magazine rounded-[20px] border border-border/60 bg-gradient-to-b from-[#121212] to-[#0c0c0c] p-4 shadow-[var(--shadow-soft)] sm:rounded-[28px] sm:p-8 md:p-10">
                  <MarkdownArticle content={item.content[locale]} locale={locale} />
              </div>

              <div className="mt-8 sm:mt-10">
                <ShareLinks
                  title={item.title[locale]}
                  path={`/news/${item.slug}`}
                  label={
                    t.share ?? (locale === "zh" ? "分享文章" : "Share")
                  }
                />
              </div>

              {item.faqs.length > 0 ? (
                <div className="mt-8 sm:mt-10">
                  <PageFaq
                    locale={locale}
                    title={
                      locale === "zh" ? "相关问答" : "Article FAQ"
                    }
                    items={item.faqs}
                    withSchema={true}
                  />
                </div>
              ) : null}

              <nav
                className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5"
                aria-label={
                  locale === "zh" ? "上一篇下一篇" : "Previous and next"
                }
              >
                {prev ? (
                  <Link
                    href={localePath(locale, `/news/${prev.slug}`)}
                    className="group rounded-[16px] border border-border/70 bg-[#101010] p-3 transition-all hover:border-primary/35 sm:rounded-[20px] sm:p-5"
                  >
                    <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
                      {t.previousArticle ??
                        (locale === "zh" ? "上一篇" : "Previous")}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs font-semibold text-foreground group-hover:text-primary sm:text-sm">
                      {prev.title[locale]}
                    </p>
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link
                    href={localePath(locale, `/news/${next.slug}`)}
                    className="group rounded-[16px] border border-border/70 bg-[#101010] p-3 text-right transition-all hover:border-primary/35 sm:rounded-[20px] sm:p-5"
                  >
                    <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
                      {t.nextArticle ??
                        (locale === "zh" ? "下一篇" : "Next")}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs font-semibold text-foreground group-hover:text-primary sm:text-sm">
                      {next.title[locale]}
                    </p>
                  </Link>
                ) : (
                  <span />
                )}
              </nav>
            </article>

            <aside className="space-y-4 sm:space-y-5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
              <TableOfContents
                items={toc}
                title={
                  t.contents ??
                  (locale === "zh" ? "目录" : "Contents")
                }
              />
              <div className="rounded-[18px] border border-border/70 bg-[#101010] p-4 sm:rounded-[22px] sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
                  {locale === "zh" ? "文章信息" : "Article info"}
                </p>
                <dl className="mt-3 space-y-2 text-[11px] sm:text-sm">
                  <div className="flex justify-between gap-2">
                    <dt className="text-muted-foreground">
                      {locale === "zh" ? "分类" : "Category"}
                    </dt>
                    <dd className="font-semibold text-foreground">
                      {item.category[locale]}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-muted-foreground">
                      {locale === "zh" ? "阅读" : "Read time"}
                    </dt>
                    <dd className="font-semibold text-foreground">
                      {readingLabel(item.readingMinutes, locale)}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-muted-foreground">
                      {locale === "zh" ? "作者" : "Author"}
                    </dt>
                    <dd className="font-semibold text-foreground">
                      {item.author}
                    </dd>
                  </div>
                </dl>
                <Button asChild size="sm" className="mt-4 w-full">
                  <Link href={localePath(locale, "/news")}>
                    {locale === "zh" ? "返回新闻" : "Back to news"}
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
          </div>

          {related.length > 0 ? (
            <section className="mt-12 space-y-4 sm:mt-16 sm:space-y-5">
              <h2 className="text-lg font-bold text-foreground sm:text-2xl">
                {t.relatedArticles ??
                  (locale === "zh" ? "相关文章" : "Related articles")}
              </h2>
              <div className="df-row-3">
              <div className="df-grid-3">
                  {related.map((entry) => (
                    <NewsCard
                      key={entry.id}
                      item={entry}
                      locale={locale}
                      dictionary={dictionary}
                    />
                  ))}
              </div>
              </div>
            </section>
          ) : null}

          {recommended.length > 0 ? (
            <section className="mt-10 space-y-4 sm:mt-14 sm:space-y-5">
              <h2 className="text-lg font-bold text-foreground sm:text-2xl">
                {t.recommended ??
                  (locale === "zh" ? "为你推荐" : "Recommended for you")}
              </h2>
              <div className="df-row-3">
              <div className="df-grid-3">
                  {recommended.map((entry) => (
                    <NewsCard
                      key={entry.id}
                      item={entry}
                      locale={locale}
                      dictionary={dictionary}
                      variant="large"
                    />
                  ))}
              </div>
              </div>
            </section>
          ) : null}

          <div className="mt-10 sm:mt-14">
            <NewsNewsletter locale={locale} dictionary={dictionary} />
          </div>
        </Container>
      </section>
    </>
  );
}
