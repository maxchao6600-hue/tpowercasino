import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import {
  homepageGuideLinks,
  homepageHubLinks,
  homepageSeoBlocks,
  homepageSeoFaqs,
} from "@/data/homepage-seo";
import { getRecentPosts } from "@/data/blog";
import { getLatestNews } from "@/data/news";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/common/container";
import { PageFaq } from "@/components/seo/page-faq";
import { RelatedLinks } from "@/components/seo/related-links";
import { SeoRichText } from "@/components/home/seo-rich-text";

type HomepageSeoProps = {
  locale: Locale;
  dictionary: Dictionary;
  /** Home LCP path: fewer blocks to shrink HTML (~550KB → much smaller). */
  compact?: boolean;
};

export function HomepageSeo({
  locale,
  dictionary,
  compact = false,
}: HomepageSeoProps) {
  const guides = getRecentPosts(compact ? 0 : 6);
  const news = getLatestNews(compact ? 0 : 4);
  const blocks = compact ? homepageSeoBlocks.slice(0, 3) : homepageSeoBlocks;
  const faqs = compact ? homepageSeoFaqs.slice(0, 3) : homepageSeoFaqs;

  return (
    <section className="section-y border-t border-border bg-card" aria-labelledby="homepage-seo-heading">
      <Container className="max-w-4xl">
        <header className="mb-12">
          <p
            id="homepage-seo-heading"
            className="h2-display text-foreground"
          >
            {dictionary.home.seoTitle}
          </p>
          <p className="mt-4 text-body text-muted-foreground">
            {dictionary.home.seoSubtitle}
          </p>
        </header>

        <div className="space-y-14 [font-synthesis:none]">
          {blocks.map((block) => (
            <article key={block.id} id={block.id}>
              <h2 className="h2-display text-foreground">{block.title[locale]}</h2>
              <div className="mt-5 space-y-4">
                {block.paragraphs.map((paragraph, index) => (
                  <SeoRichText
                    key={`${block.id}-${index}`}
                    locale={locale}
                    text={paragraph[locale]}
                    className="text-body leading-relaxed text-muted-foreground"
                  />
                ))}
              </div>
              {block.relatedLinks && block.relatedLinks.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {block.relatedLinks.map((link) => (
                    <li key={`${block.id}-${link.href}`}>
                      <Link
                        href={localePath(locale, link.href)}
                        className="text-sm font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                      >
                        {link.label[locale]}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <RelatedLinks
          locale={locale}
          title={dictionary.seo.importantPages}
          items={homepageHubLinks.map((item) => ({
            href: item.href,
            label: item.label[locale],
          }))}
        />

        {guides.length > 0 ? (
        <section className="mt-16">
          <h2 className="h2-display text-foreground">
            {dictionary.home.guidesTitle}
          </h2>
          <p className="mt-3 text-body text-muted-foreground">
            {dictionary.home.guidesSubtitle}
          </p>
          <ul className="mt-8 df-grid-2">
            {guides.map((post) => (
              <li key={post.id}>
                <Link
                  href={localePath(locale, `/blog/${post.slug}`)}
                  className="block rounded-[24px] border border-border bg-surface p-6 transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="text-small font-semibold text-primary">
                    {post.category[locale]}
                  </span>
                  <span className="mt-2 block text-base font-bold text-foreground">
                    {post.title[locale]}
                  </span>
                  <span className="mt-2 block text-small text-muted-foreground">
                    {formatDate(post.updatedAt, locale)} · {post.readingMinutes}{" "}
                    {dictionary.seo.minRead}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-3">
            {homepageGuideLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={localePath(locale, link.href)}
                  className="text-sm font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {link.label[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        ) : null}

        {news.length > 0 ? (
        <section className="mt-16">
          <h2 className="h2-display text-foreground">
            {dictionary.home.newsSeoTitle}
          </h2>
          <ul className="mt-8 space-y-4">
            {news.map((item) => (
              <li key={item.id}>
                <Link
                  href={localePath(locale, `/news/${item.slug}`)}
                  className="flex flex-row flex-wrap items-center justify-between gap-1 rounded-[24px] border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-colors hover:border-foreground/15"
                >
                  <span className="font-bold text-foreground">
                    {item.title[locale]}
                  </span>
                  <span className="text-small text-muted-foreground">
                    {formatDate(item.publishedAt, locale)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        ) : null}

        <PageFaq
          locale={locale}
          title={dictionary.home.seoFaqTitle}
          items={faqs}
        />
      </Container>
    </section>
  );
}
