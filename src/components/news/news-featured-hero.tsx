import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { NewsItem } from "@/types";
import { readingLabel } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  asNewsCopy,
  badgeLabel,
  updatedLabel,
} from "@/components/news/news-copy";

type NewsFeaturedHeroProps = {
  item: NewsItem;
  locale: Locale;
  dictionary: { news: unknown; common: { brand: string } };
};

export function NewsFeaturedHero({
  item,
  locale,
  dictionary,
}: NewsFeaturedHeroProps) {
  const t = asNewsCopy(dictionary.news);
  const href = localePath(locale, `/news/${item.slug}`);

  return (
    <section className="relative isolate min-h-[420px] overflow-hidden sm:min-h-[560px] lg:min-h-[700px]">
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
            "linear-gradient(90deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.72) 42%, rgba(5,5,5,0.35) 70%, rgba(5,5,5,0.55) 100%), radial-gradient(ellipse 70% 60% at 70% 40%, rgba(229,9,20,0.28), transparent 60%), linear-gradient(180deg, rgba(5,5,5,0.25) 0%, rgba(5,5,5,0.85) 100%)",
        }}
      />
      <div className="relative mx-auto flex h-full min-h-[420px] w-full max-w-[1400px] items-end px-4 py-10 sm:min-h-[560px] sm:px-6 sm:py-14 lg:min-h-[700px] lg:px-8 lg:py-16">
        <div className="grid w-full grid-cols-[0.65fr_0.35fr] items-end gap-4 sm:gap-8 lg:gap-12">
          <div className="min-w-0 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">
                {t.featuredBadge ?? (locale === "zh" ? "精选" : "Featured")}
              </Badge>
              <Badge variant="outline">{item.category[locale]}</Badge>
              <span className="text-[10px] text-white/70 sm:text-xs">
                {formatDate(item.publishedAt, locale)}
              </span>
              <span className="text-[10px] text-white/70 sm:text-xs">
                {readingLabel(item.readingMinutes, locale)}
              </span>
            </div>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:mt-4 sm:text-xs">
              {dictionary.common.brand}
            </p>
            <h1 className="mt-2 text-balance text-[clamp(1.5rem,1.25rem+1.1vw,4rem)] font-bold leading-[1.12] tracking-tight text-white">
              {item.title[locale]}
            </h1>
            <p className="text-lead mt-3 max-w-2xl text-white/75 sm:mt-4">
              {item.excerpt[locale]}
            </p>
            <div className="df-actions mt-5 sm:mt-7">
              <Button asChild size="lg" className="h-10 px-5 text-sm sm:h-12 sm:px-7 sm:text-base">
                <Link href={href}>
                  {t.readStory ?? (locale === "zh" ? "阅读全文" : "Read story")}
                </Link>
              </Button>
              <p className="text-[10px] text-white/60 sm:text-xs">
                {(t.byAuthor ?? (locale === "zh" ? "作者" : "By")) +
                  ` ${item.author} · ${updatedLabel(item.updatedAt, locale)}`}
              </p>
            </div>
          </div>
          <div className="min-w-0 rounded-[12px] border border-white/10 bg-black/35 p-2.5 backdrop-blur-md sm:rounded-[20px] sm:p-6">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs">
              {badgeLabel(item.badge, locale)}
            </p>
            <p className="mt-1 text-[11px] font-semibold text-white sm:mt-2 sm:text-base">
              {item.category[locale]}
            </p>
            <dl className="mt-2 space-y-1 text-[9px] text-white/70 sm:mt-4 sm:space-y-2 sm:text-sm">
              <div className="flex justify-between gap-3">
                <dt>{locale === "zh" ? "发布" : "Published"}</dt>
                <dd className="text-white">{formatDate(item.publishedAt, locale)}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>{locale === "zh" ? "阅读" : "Read time"}</dt>
                <dd className="text-white">
                  {readingLabel(item.readingMinutes, locale)}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>{locale === "zh" ? "更新" : "Updated"}</dt>
                <dd className="text-white">{updatedLabel(item.updatedAt, locale)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
