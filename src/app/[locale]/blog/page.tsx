import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import {
  blogPosts,
  getBeginnerGuides,
  getFeaturedBlogPost,
  getLatestUpdatedPosts,
  getMostReadPosts,
} from "@/data/blog";
import { JsonLd } from "@/components/common/json-ld";
import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/common/container";
import { BlogIndex } from "@/components/blog/blog-index";
import {
  BlogFeaturedEditorial,
  BlogHeroStats,
} from "@/components/blog/blog-hero-featured";
import { BlogFeaturedCategories } from "@/components/blog/blog-featured-categories";
import {
  BlogFinalCta,
  BlogKnowledgeHub,
} from "@/components/blog/blog-hub-cta";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dictionary.blog.metaTitle,
    description: dictionary.blog.metaDescription,
    path: "/blog",
  });
}

export default async function BlogPage({ params, searchParams }: PageProps) {
  const { locale: raw } = await params;
  const { q = "" } = await searchParams;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const t = dictionary.blog as typeof dictionary.blog & {
    featuredCategoriesTitle?: string;
    featuredCategoriesSubtitle?: string;
    hubTitle?: string;
    hubSubtitle?: string;
  };

  const featured = getFeaturedBlogPost();
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    { name: dictionary.blog.metaTitle, href: localePath(locale, "/blog") },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          collectionPageSchema({
            name: dictionary.blog.title,
            description: dictionary.blog.subtitle,
            url: localePath(locale, "/blog"),
          }),
        ]}
      />
      <PageHeader
        title={dictionary.blog.title}
        description={dictionary.blog.subtitle}
        breadcrumbs={breadcrumbs}
        atmosphere="blog"
        brand={dictionary.common.brand}
      />
      <BlogHeroStats locale={locale} dictionary={dictionary} />

      <section className="bg-[#070707] py-8 sm:py-10 md:py-12">
        <Container className="space-y-10 sm:space-y-12">
          <BlogFeaturedCategories
            locale={locale}
            title={
              t.featuredCategoriesTitle ??
              (locale === "zh" ? "精选专题" : "Featured Categories")
            }
            subtitle={
              t.featuredCategoriesSubtitle ??
              (locale === "zh"
                ? "用高端导航卡片进入账户、支付、VIP、厂商与负责任主题。"
                : "Premium navigation cards into account, payments, VIP, providers, and responsible play.")
            }
          />

          {featured ? (
            <BlogFeaturedEditorial
              post={featured}
              locale={locale}
              dictionary={dictionary}
            />
          ) : null}

          <div id="guides" className="space-y-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
                  {locale === "zh" ? "杂志目录" : "Magazine shelf"}
                </p>
                <h2 className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-2xl">
                  {dictionary.blog.latest}
                </h2>
              </div>
              <Link
                href={localePath(locale, "/blog/rss.xml")}
                className="text-sm font-semibold text-muted-foreground hover:text-primary"
              >
                RSS
              </Link>
            </div>
            <BlogIndex
              locale={locale}
              dictionary={dictionary}
              posts={blogPosts}
              mostRead={getMostReadPosts(5)}
              latestUpdated={getLatestUpdatedPosts(5)}
              beginners={getBeginnerGuides(5)}
              initialQuery={q}
            />
          </div>

          <BlogKnowledgeHub
            locale={locale}
            title={
              t.hubTitle ??
              (locale === "zh"
                ? "TPOWER 知识枢纽"
                : "TPOWER Knowledge Hub")
            }
            subtitle={
              t.hubSubtitle ??
              (locale === "zh"
                ? "下载、注册、优惠、VIP、厂商与新闻——视觉化官方入口。"
                : "Download, register, promotions, VIP, providers, and news — visual official entry points.")
            }
          />

          <BlogFinalCta locale={locale} dictionary={dictionary} />
        </Container>
      </section>
    </>
  );
}
