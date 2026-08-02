import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { NewsItem } from "@/types";
import { NEWS_CATEGORY_FILTERS } from "@/data/news-page-content";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { asNewsCopy } from "@/components/news/news-copy";

type NewsSidebarProps = {
  locale: Locale;
  dictionary: Dictionary;
  latest: NewsItem[];
  trending: NewsItem[];
  popular: NewsItem[];
  recentUpdates: NewsItem[];
  query?: string;
  statusLine: string;
  promoImage?: string;
};

function SidebarList({
  title,
  items,
  locale,
}: {
  title: string;
  items: NewsItem[];
  locale: Locale;
}) {
  return (
    <div className="rounded-[18px] border border-border/80 bg-gradient-to-b from-[#141414] to-[#0d0d0d] p-3.5 shadow-[var(--shadow-soft)] sm:rounded-[22px] sm:p-5">
      <h2 className="text-sm font-bold tracking-tight text-foreground sm:text-base">
        {title}
      </h2>
      <ul className="mt-3 space-y-3 sm:mt-4">
        {items.map((item) => (
          <li key={item.id} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
            <Link
              href={localePath(locale, `/news/${item.slug}`)}
              className="group block"
            >
              <p className="line-clamp-2 text-[11px] font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-sm">
                {item.title[locale]}
              </p>
              <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">
                {item.category[locale]} · {formatDate(item.publishedAt, locale)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NewsSidebar({
  locale,
  dictionary,
  latest,
  trending,
  popular,
  recentUpdates,
  query = "",
  statusLine,
  promoImage = "/images/promotions/tpower-weekly-reload.webp",
}: NewsSidebarProps) {
  const t = asNewsCopy(dictionary.news);

  return (
    <aside className="w-[280px] shrink-0 space-y-4 sm:space-y-5 lg:sticky lg:top-24 lg:w-auto lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-1">
      <div className="rounded-[18px] border border-border/80 bg-[#101010] p-3.5 sm:rounded-[22px] sm:p-5">
        <h2 className="text-sm font-bold text-foreground sm:text-base">
          {t.sidebarSearch ?? dictionary.common.search}
        </h2>
        <form
          action={localePath(locale, "/news")}
          method="get"
          className="mt-3 flex flex-col gap-2"
          role="search"
        >
          <Input
            name="q"
            defaultValue={query}
            placeholder={dictionary.common.searchPlaceholder}
            aria-label={dictionary.common.search}
            className="h-9 text-sm"
          />
          <Button type="submit" size="sm">
            {dictionary.common.search}
          </Button>
        </form>
      </div>

      <SidebarList
        title={t.sidebarLatest ?? (locale === "zh" ? "最新新闻" : "Latest news")}
        items={latest}
        locale={locale}
      />
      <SidebarList
        title={
          t.sidebarTrending ?? (locale === "zh" ? "热门趋势" : "Trending")
        }
        items={trending}
        locale={locale}
      />
      <SidebarList
        title={t.sidebarPopular ?? (locale === "zh" ? "最多阅读" : "Popular")}
        items={popular}
        locale={locale}
      />
      <SidebarList
        title={
          t.sidebarUpdates ?? (locale === "zh" ? "最近更新" : "Recent updates")
        }
        items={recentUpdates}
        locale={locale}
      />

      <div className="rounded-[18px] border border-border/80 bg-[#101010] p-3.5 sm:rounded-[22px] sm:p-5">
        <h2 className="text-sm font-bold text-foreground sm:text-base">
          {t.sidebarCategories ??
            (locale === "zh" ? "分类" : "Categories")}
        </h2>
        <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
          {NEWS_CATEGORY_FILTERS.filter((f) => f.key !== "all").map((filter) => (
            <li key={filter.key}>
              <Link
                href={`${localePath(locale, "/news")}?category=${filter.key}`}
                className="inline-flex rounded-full border border-border/70 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:text-xs"
              >
                {filter.label[locale]}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-[18px] border border-primary/25 bg-gradient-to-br from-[#1a0a0c] to-[#0c0c0c] sm:rounded-[22px]">
        <div className="brand-safe-media relative aspect-[16/9]">
          <Image
            src="/images/download/features/fast-install.webp"
            alt={
              locale === "zh"
                ? "下载 TPOWER官方APP"
                : "Download the TPOWER App"
            }
            fill
            className="object-cover"
            sizes="280px"
          />
        </div>
        <div className="space-y-2 p-3.5 sm:p-4">
          <h2 className="text-sm font-bold text-foreground">
            {t.sidebarDownload ??
              (locale === "zh" ? "下载 APP" : "Download App")}
          </h2>
          <Button asChild size="sm" className="w-full">
            <Link href={localePath(locale, "/download")}>
              {dictionary.nav.download}
            </Link>
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[18px] border border-border/80 bg-[#101010] sm:rounded-[22px]">
        <div className="brand-safe-media relative aspect-[16/9]">
          <Image
            src={promoImage}
            alt={
              locale === "zh" ? "最新优惠" : "Latest promotion"
            }
            fill
            className="object-cover"
            sizes="280px"
          />
        </div>
        <div className="space-y-2 p-3.5 sm:p-4">
          <h2 className="text-sm font-bold text-foreground">
            {t.sidebarPromo ??
              (locale === "zh" ? "最新优惠" : "Latest promotion")}
          </h2>
          <Button asChild size="sm" variant="outline" className="w-full">
            <Link href={localePath(locale, "/promotions")}>
              {dictionary.nav.promotions}
            </Link>
          </Button>
        </div>
      </div>

      <div className="rounded-[18px] border border-border/80 bg-[#101010] p-3.5 sm:rounded-[22px] sm:p-5">
        <h2 className="text-sm font-bold text-foreground">
          {t.sidebarVip ?? (locale === "zh" ? "VIP 动态" : "VIP news")}
        </h2>
        <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
          {locale === "zh"
            ? "管家时段、答谢礼与等级权益更新，请关注 VIP 专页。"
            : "Host hours, appreciation gifts, and tier benefits — follow the VIP desk."}
        </p>
        <Button asChild size="sm" variant="outline" className="mt-3 w-full">
          <Link href={localePath(locale, "/vip")}>{dictionary.vip.title}</Link>
        </Button>
      </div>

      <div className="rounded-[18px] border border-emerald-500/20 bg-[#0d1410] p-3.5 sm:rounded-[22px] sm:p-5">
        <h2 className="text-sm font-bold text-foreground">
          {t.sidebarStatus ??
            (locale === "zh" ? "平台状态" : "Platform status")}
        </h2>
        <p className="mt-2 flex items-start gap-2 text-[11px] leading-relaxed text-emerald-300/90 sm:text-sm">
          <span
            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
            aria-hidden="true"
          />
          {statusLine}
        </p>
      </div>

      <p className="text-[10px] text-muted-foreground sm:text-xs">
        <Link
          href={localePath(locale, "/news/rss.xml")}
          className="font-semibold hover:text-primary"
        >
          RSS
        </Link>
      </p>
    </aside>
  );
}
