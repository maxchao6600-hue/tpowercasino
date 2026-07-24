import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { NewsItem } from "@/types";
import { readingLabel } from "@/lib/content";
import { cn, formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  articleMetaLine,
  asNewsCopy,
  badgeLabel,
} from "@/components/news/news-copy";

export type NewsCardVariant =
  | "standard"
  | "large"
  | "medium"
  | "wide"
  | "tall"
  | "horizontal"
  | "compact";

type NewsCardProps = {
  item: NewsItem;
  locale: Locale;
  dictionary: { news: unknown };
  variant?: NewsCardVariant;
  className?: string;
  priority?: boolean;
  showTrending?: boolean;
};

export function NewsCard({
  item,
  locale,
  dictionary,
  variant = "standard",
  className,
  priority = false,
  showTrending = false,
}: NewsCardProps) {
  const t = asNewsCopy(dictionary.news);
  const href = localePath(locale, `/news/${item.slug}`);
  const readLabel =
    t.readMore ?? (locale === "zh" ? "阅读全文" : "Read more");

  const imageAspect =
    variant === "tall"
      ? "aspect-[4/5]"
      : variant === "wide"
        ? "aspect-[21/9]"
        : variant === "large"
          ? "aspect-[16/10]"
          : variant === "horizontal"
            ? "aspect-[16/11]"
            : variant === "compact"
              ? "aspect-[16/10]"
              : "aspect-[16/10]";

  if (variant === "horizontal") {
    return (
      <article
        className={cn(
          "group grid grid-cols-[0.95fr_1.05fr] overflow-hidden rounded-[18px] border border-border/80 bg-gradient-to-br from-[#141414] to-[#0c0c0c] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[4px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[22px]",
          className,
        )}
      >
        <Link href={href} className="brand-safe-media relative min-h-0 overflow-hidden">
          <div className={cn("relative h-full min-h-[120px] w-full sm:min-h-[140px]", imageAspect)}>
            <Image
              src={item.image}
              alt={item.imageAlt[locale]}
              title={item.title[locale]}
              fill
              priority={priority}
              sizes="(max-width: 768px) 45vw, 28vw"
              className="object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, rgba(7,7,7,0.05) 0%, rgba(7,7,7,0.35) 100%), radial-gradient(ellipse 60% 50% at 40% 30%, rgba(229,9,20,0.18), transparent 65%)",
              }}
            />
          </div>
        </Link>
        <div className="flex min-w-0 flex-col justify-center gap-1.5 p-3 sm:gap-2 sm:p-5">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge variant="outline" className="text-[10px] sm:text-xs">
              {item.category[locale]}
            </Badge>
            {showTrending || item.trending ? (
              <Badge variant="accent" className="text-[10px] sm:text-xs">
                {locale === "zh" ? "热门" : "Trending"}
              </Badge>
            ) : null}
          </div>
          <h3 className="line-clamp-2 text-sm font-bold tracking-tight text-foreground sm:text-base md:text-lg">
            <Link href={href} className="transition-colors hover:text-primary">
              {item.title[locale]}
            </Link>
          </h3>
          <p className="line-clamp-1 text-[10px] text-muted-foreground sm:line-clamp-2 sm:text-xs">
            {articleMetaLine(item, locale)}
          </p>
          <p className="line-clamp-2 text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
            {item.excerpt[locale]}
          </p>
          <Link
            href={href}
            className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-primary sm:text-sm"
          >
            {readLabel}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[18px] border border-border/80 bg-gradient-to-br from-[#141414] to-[#0c0c0c] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[24px]",
        className,
      )}
    >
      <Link href={href} className="brand-safe-media relative block overflow-hidden">
        <div className={cn("relative w-full", imageAspect)}>
          <Image
            src={item.image}
            alt={item.imageAlt[locale]}
            title={item.title[locale]}
            fill
            priority={priority}
            sizes={
              variant === "large"
                ? "(max-width: 768px) 70vw, 50vw"
                : "(max-width: 768px) 40vw, 30vw"
            }
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(180deg, rgba(7,7,7,0.05) 0%, rgba(7,7,7,0.55) 100%), radial-gradient(ellipse 65% 55% at 50% 25%, rgba(229,9,20,0.2), transparent 62%)",
            }}
          />
          {(showTrending || item.trending) && (
            <span className="brand-safe-chips absolute left-0 top-0">
              <Badge variant="accent">{locale === "zh" ? "热门" : "Trending"}</Badge>
            </span>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-1.5 p-3 sm:gap-2.5 sm:p-5">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <Badge variant="outline" className="text-[10px] sm:text-xs">
            {item.category[locale]}
          </Badge>
          <span className="text-[10px] text-muted-foreground sm:text-xs">
            {formatDate(item.publishedAt, locale)}
          </span>
          <span className="text-[10px] text-muted-foreground sm:text-xs">
            {readingLabel(item.readingMinutes, locale)}
          </span>
        </div>
        <h3
          className={cn(
            "font-bold tracking-tight text-foreground",
            variant === "large"
              ? "text-base sm:text-xl md:text-2xl"
              : "text-sm sm:text-base md:text-lg",
          )}
        >
          <Link href={href} className="transition-colors hover:text-primary">
            {item.title[locale]}
          </Link>
        </h3>
        <p className="text-[10px] text-muted-foreground sm:text-xs">
          {articleMetaLine(item, locale)}
        </p>
        <p
          className={cn(
            "leading-relaxed text-muted-foreground",
            variant === "large"
              ? "line-clamp-3 text-[11px] sm:text-sm"
              : "line-clamp-2 text-[11px] sm:text-sm",
          )}
        >
          {item.excerpt[locale]}
        </p>
        <div className="mt-auto pt-1">
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary transition-colors hover:text-primary/80 sm:text-sm"
          >
            {readLabel}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        <span className="sr-only">{badgeLabel(item.badge, locale)}</span>
      </div>
    </article>
  );
}
