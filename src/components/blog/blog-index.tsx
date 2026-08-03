"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { BlogPost } from "@/types";
import {
  blogPopularSearches,
  blogQuickLinks,
  blogRelatedTopics,
} from "@/data/blog-page-content";
import { readingLabel } from "@/lib/content";
import { cn, formatDate } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  difficultyLabel,
  guideCta,
  metaLine,
  statusBadges,
} from "@/components/blog/blog-copy";
import { labelForPath } from "@/lib/internal-links";

type BlogIndexProps = {
  locale: Locale;
  dictionary: Dictionary;
  posts: BlogPost[];
  mostRead: BlogPost[];
  latestUpdated: BlogPost[];
  beginners: BlogPost[];
  initialQuery?: string;
};

const PAGE_SIZE = 6;

function SidebarList({
  title,
  items,
  locale,
}: {
  title: string;
  items: BlogPost[];
  locale: Locale;
}) {
  if (items.length === 0) return null;
  return (
    <div className="rounded-[18px] border border-border/80 bg-gradient-to-b from-[#141414] to-[#0d0d0d] p-4 shadow-[var(--shadow-soft)] sm:rounded-[22px] sm:p-5">
      <p className="text-sm font-bold text-foreground">{title}</p>
      <ul className="mt-3 space-y-3">
        {items.map((post) => (
          <li
            key={post.id}
            className="border-b border-white/5 pb-3 last:border-0 last:pb-0"
          >
            <Link
              href={localePath(locale, `/blog/${post.slug}`)}
              className="group block"
            >
              <p className="line-clamp-2 text-[11px] font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-sm">
                {post.title[locale]}
              </p>
              <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">
                {readingLabel(post.readingMinutes, locale)} ·{" "}
                {formatDate(post.updatedAt, locale)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BlogIndex({
  locale,
  dictionary,
  posts,
  mostRead,
  latestUpdated,
  beginners,
  initialQuery = "",
}: BlogIndexProps) {
  const t = dictionary.blog as Dictionary["blog"] & {
    searchPlaceholder?: string;
    popularSearches?: string;
    officialGuide?: string;
    authorLabel?: string;
    mostRead?: string;
    latestUpdated?: string;
    beginnerGuides?: string;
    quickLinks?: string;
    relatedTopics?: string;
    relatedInside?: string;
  };

  const categories = useMemo(() => {
    const values = Array.from(
      new Set(posts.map((post) => post.category[locale])),
    );
    return [dictionary.common.allCategories, ...values];
  }, [dictionary.common.allCategories, locale, posts]);

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(dictionary.common.allCategories);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setQuery(initialQuery);
    setPage(1);
  }, [initialQuery]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory =
        category === dictionary.common.allCategories ||
        post.category[locale] === category;
      const haystack = [
        post.title[locale],
        post.excerpt[locale],
        post.summary[locale],
        post.tags.join(" "),
        post.author,
        post.category[locale],
        difficultyLabel(post.difficulty, locale),
      ]
        .join(" ")
        .toLowerCase();
      return (
        matchesCategory && (!normalized || haystack.includes(normalized))
      );
    });
  }, [category, dictionary.common.allCategories, locale, posts, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const relatedBySlug = useMemo(() => {
    const map = new Map<string, BlogPost>();
    for (const post of posts) map.set(post.slug, post);
    return map;
  }, [posts]);

  return (
    <div className="df-row-2">
    <div className="df-news-grid grid min-w-[740px] grid-cols-[minmax(440px,1fr)_280px] items-start gap-5 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-8 xl:min-w-0 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="min-w-[440px] space-y-6 xl:min-w-0">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder={
              t.searchPlaceholder ??
              (locale === "zh"
                ? "搜索 TPOWER 攻略..."
                : "Search TPOWER Guides...")
            }
            aria-label={dictionary.common.search}
            className="h-11 border-border/80 bg-[#101010] pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setCategory(item);
                setPage(1);
              }}
              className={cn(
                "rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all sm:px-4 sm:py-2 sm:text-sm",
                category === item
                  ? "border-primary bg-primary text-white shadow-[0_8px_24px_rgba(229,9,20,0.3)]"
                  : "border-border/80 bg-[#121212] text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="df-scroll">
        <div className="grid min-w-[720px] grid-cols-12 gap-3 sm:gap-4 md:gap-5 xl:min-w-0">
          {pageItems.map((post, index) => {
            const related = post.relatedSlugs
              .map((slug) => relatedBySlug.get(slug))
              .filter((item): item is BlogPost => Boolean(item))
              .slice(0, 2);
            const wide = index % 5 === 0;
            return (
              <article
                key={post.id}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-[18px] border border-border/80 bg-gradient-to-br from-[#141414] to-[#0c0c0c] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[24px]",
                  wide ? "col-span-12 md:col-span-8" : "col-span-6 md:col-span-4",
                )}
              >
                <Link
                  href={localePath(locale, `/blog/${post.slug}`)}
                  className="brand-safe-media relative block overflow-hidden"
                >
                  <div
                    className={cn(
                      "relative w-full",
                      wide ? "aspect-[21/9]" : "aspect-[16/10]",
                    )}
                  >
                    <Image
                      src={post.image}
                      alt={post.imageAlt[locale]}
                      title={post.title[locale]}
                      fill
                      className="object-cover"
                      sizes={wide ? "70vw" : "35vw"}
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      aria-hidden="true"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(7,7,7,0.05) 0%, rgba(7,7,7,0.55) 100%), radial-gradient(ellipse 65% 55% at 50% 25%, rgba(229,9,20,0.18), transparent 62%)",
                      }}
                    />
                    <div className="brand-safe-chips absolute left-0 top-0 flex flex-wrap gap-1.5">
                      {statusBadges(post, locale).map((badge) => (
                        <Badge
                          key={badge}
                          variant={badge === "HOT" || badge === "NEW" ? "accent" : "outline"}
                          className="text-[10px]"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col gap-2 p-3.5 sm:gap-2.5 sm:p-5">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <Badge variant="outline" className="text-[10px] sm:text-xs">
                      {post.category[locale]}
                    </Badge>
                    <Badge variant="outline" className="text-[10px] sm:text-xs">
                      {t.officialGuide ??
                        (locale === "zh" ? "官方指南" : "Official Guide")}
                    </Badge>
                    <Badge variant="outline" className="text-[10px] sm:text-xs">
                      {difficultyLabel(post.difficulty, locale)}
                    </Badge>
                  </div>
                  <h3
                    className={cn(
                      "font-bold tracking-tight text-foreground",
                      wide
                        ? "text-base sm:text-xl md:text-2xl"
                        : "text-sm sm:text-base md:text-lg",
                    )}
                  >
                    <Link
                      href={localePath(locale, `/blog/${post.slug}`)}
                      className="transition-colors hover:text-primary"
                    >
                      {post.title[locale]}
                    </Link>
                  </h3>
                  <p className="text-[10px] text-muted-foreground sm:text-xs">
                    {metaLine(post, locale)}
                  </p>
                  <p className="text-[10px] text-muted-foreground sm:text-xs">
                    {(t.authorLabel ??
                      (locale === "zh" ? "作者" : "Author")) +
                      `: ${post.author}`}
                  </p>
                  <p className="line-clamp-2 text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
                    {post.excerpt[locale]}
                  </p>

                  {related.length > 0 ? (
                    <div className="mt-1 rounded-[12px] border border-white/5 bg-black/25 p-2.5 sm:p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        {t.relatedInside ??
                          (locale === "zh" ? "相关攻略" : "Related guides")}
                      </p>
                      <ul className="mt-1.5 space-y-1">
                        {related.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={localePath(locale, `/blog/${item.slug}`)}
                              className="text-[11px] font-semibold text-foreground/90 hover:text-primary sm:text-xs"
                            >
                              → {item.title[locale]}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                        {post.relatedPaths.slice(0, 3).map((path) => (
                          <Link
                            key={path}
                            href={localePath(locale, path)}
                            className="text-[10px] font-semibold text-primary/90 hover:text-primary sm:text-xs"
                          >
                            {labelForPath(path, dictionary)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-auto pt-1">
                    <Button asChild variant="secondary" size="sm">
                      <Link href={localePath(locale, `/blog/${post.slug}`)}>
                        {guideCta(post.slug, locale)}
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        </div>

        <nav
          className="flex items-center justify-between gap-3 rounded-[18px] border border-border/80 bg-[#101010] p-3 sm:rounded-[22px] sm:p-4"
          aria-label={locale === "zh" ? "分页" : "Pagination"}
        >
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={currentPage <= 1}
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            className="gap-1"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            {dictionary.common.previous}
          </Button>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setPage(num)}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors sm:h-9 sm:w-9 sm:text-sm",
                  currentPage === num
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:text-foreground",
                )}
                aria-current={currentPage === num ? "page" : undefined}
              >
                {num}
              </button>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={currentPage >= totalPages}
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            className="gap-1"
          >
            {dictionary.common.next}
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </nav>
      </div>

      <aside className="space-y-4 sm:space-y-5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-1">
        <div className="rounded-[18px] border border-border/80 bg-[#101010] p-4 sm:rounded-[22px] sm:p-5">
          <p className="text-sm font-bold text-foreground">
            {dictionary.blog.sidebarTitle}
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setCategory(item);
                  setPage(1);
                }}
                className={cn(
                  "rounded-xl px-3 py-2 text-left text-sm font-semibold transition-colors",
                  category === item
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <SidebarList
          title={
            t.mostRead ?? (locale === "zh" ? "最多阅读" : "Most Read")
          }
          items={mostRead}
          locale={locale}
        />
        <SidebarList
          title={
            t.latestUpdated ??
            (locale === "zh" ? "最近更新" : "Latest Updated")
          }
          items={latestUpdated}
          locale={locale}
        />
        <SidebarList
          title={
            t.beginnerGuides ??
            (locale === "zh" ? "新手指南" : "Beginner Guides")
          }
          items={beginners}
          locale={locale}
        />

        <div className="rounded-[18px] border border-border/80 bg-[#101010] p-4 sm:rounded-[22px] sm:p-5">
          <p className="text-sm font-bold text-foreground">
            {t.popularSearches ??
              (locale === "zh" ? "热门搜索" : "Popular Searches")}
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {blogPopularSearches.map((item) => (
              <button
                key={item.en}
                type="button"
                onClick={() => {
                  setQuery(item[locale]);
                  setCategory(dictionary.common.allCategories);
                  setPage(1);
                }}
                className="rounded-xl bg-muted px-3 py-2 text-left text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {item[locale]}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[18px] border border-border/80 bg-[#101010] p-4 sm:rounded-[22px] sm:p-5">
          <p className="text-sm font-bold text-foreground">
            {t.quickLinks ?? (locale === "zh" ? "快捷入口" : "Quick Links")}
          </p>
          <ul className="mt-3 space-y-2">
            {blogQuickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={localePath(locale, item.href)}
                  className="text-sm font-semibold text-muted-foreground hover:text-primary"
                >
                  {item.label[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[18px] border border-border/80 bg-[#101010] p-4 sm:rounded-[22px] sm:p-5">
          <p className="text-sm font-bold text-foreground">
            {t.relatedTopics ??
              (locale === "zh" ? "相关主题" : "Related Topics")}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {blogRelatedTopics.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className="rounded-full border border-border/70 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:text-xs"
              >
                {item.label[locale]}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
    </div>
  );
}
