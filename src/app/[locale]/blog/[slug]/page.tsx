import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath, locales } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import {
  extractToc,
  getRelatedBlogPosts,
  readingLabel,
} from "@/lib/content";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { labelForPath } from "@/lib/internal-links";
import { formatDate } from "@/lib/utils";
import { JsonLd } from "@/components/common/json-ld";
import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/common/container";
import { MarkdownArticle } from "@/components/seo/markdown-article";
import { TableOfContents } from "@/components/seo/table-of-contents";
import { PageFaq } from "@/components/seo/page-faq";
import { RelatedLinks } from "@/components/seo/related-links";
import { InternalCta } from "@/components/seo/internal-cta";
import { ShareLinks } from "@/components/seo/share-links";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    locale,
    title: post.title[locale],
    description: post.excerpt[locale],
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author],
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const toc = extractToc(post.content[locale]);
  const related = getRelatedBlogPosts(post, blogPosts, 4);
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    { name: dictionary.blog.metaTitle, href: localePath(locale, "/blog") },
    {
      name: post.title[locale],
      href: localePath(locale, `/blog/${post.slug}`),
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          articleSchema({
            title: post.title[locale],
            description: post.excerpt[locale],
            image: post.image,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            author: post.author,
            url: localePath(locale, `/blog/${post.slug}`),
          }),
        ]}
      />
      <PageHeader
        title={post.title[locale]}
        description={post.excerpt[locale]}
        breadcrumbs={breadcrumbs}
        atmosphere="blog"
        brand={dictionary.common.brand}
      />
      <article className="section-y">
        <Container className="max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Badge variant="accent">{post.category[locale]}</Badge>
            {post.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {post.author} · {formatDate(post.publishedAt, locale)} ·{" "}
            {readingLabel(post.readingMinutes, locale)}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {dictionary.seo.lastUpdated}: {formatDate(post.updatedAt, locale)}
          </p>

          <div className="relative my-10 aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-muted">
            <Image
              src={post.image}
              alt={post.imageAlt[locale]}
              title={post.title[locale]}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <section className="mb-10 rounded-[24px] border border-border bg-surface p-6">
            <h2 className="text-small font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {dictionary.seo.summary}
            </h2>
            <p className="mt-3 text-body leading-relaxed text-foreground">
              {post.summary[locale]}
            </p>
          </section>

          <div className="mb-10">
            <TableOfContents
              items={toc}
              title={dictionary.seo.tableOfContents}
            />
          </div>

                  <MarkdownArticle content={post.content[locale]} locale={locale} />

          <div className="mt-10">
            <ShareLinks
              title={post.title[locale]}
              path={localePath(locale, `/blog/${post.slug}`)}
              label={dictionary.seo.share}
            />
          </div>

          <PageFaq
            locale={locale}
            title={dictionary.seo.faqHeading}
            items={post.faqs}
            withSchema={false}
          />

          <RelatedLinks
            locale={locale}
            title={dictionary.seo.relatedArticles}
            items={related.map((item) => ({
              href: `/blog/${item.slug}`,
              label: item.title[locale],
              description: item.excerpt[locale],
            }))}
          />

          <RelatedLinks
            locale={locale}
            title={dictionary.seo.relatedPages}
            items={post.relatedPaths.map((href) => ({
              href,
              label: labelForPath(href, dictionary),
            }))}
          />

          <InternalCta
            locale={locale}
            title={dictionary.seo.articleCtaTitle}
            description={dictionary.seo.articleCtaDescription}
            primaryHref="/register"
            primaryLabel={dictionary.common.ctaRegister}
            secondaryHref="/login"
            secondaryLabel={dictionary.common.ctaLogin}
          />

          <div className="mt-10">
            <Button asChild variant="secondary">
              <Link href={localePath(locale, "/blog")}>
                {dictionary.common.backToBlog}
              </Link>
            </Button>
          </div>
        </Container>
      </article>
    </>
  );
}
