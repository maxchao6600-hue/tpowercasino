import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { BlogPost } from "@/types";
import { blogHubStats } from "@/data/blog-page-content";
import { readingLabel } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  difficultyLabel,
  guideCta,
} from "@/components/blog/blog-copy";

type BlogHeroStatsProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function BlogHeroStats({ locale, dictionary }: BlogHeroStatsProps) {
  return (
    <section className="-mt-2 border-b border-primary/15 bg-gradient-to-b from-[#120808] to-[#070707]">
      <div className="df-scroll mx-auto max-w-[1400px] px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
        <div className="grid min-w-[720px] grid-cols-4 gap-2 sm:gap-4 xl:min-w-0">
          {blogHubStats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-[14px] border border-white/8 bg-black/35 px-2 py-3 text-center sm:rounded-[18px] sm:px-4 sm:py-5"
            >
              <p className="text-sm font-bold tracking-tight text-primary sm:text-xl md:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs md:text-sm">
                {stat.label[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="sr-only">{dictionary.blog.subtitle}</p>
    </section>
  );
}

type BlogFeaturedEditorialProps = {
  post: BlogPost;
  locale: Locale;
  dictionary: Dictionary;
};

export function BlogFeaturedEditorial({
  post,
  locale,
  dictionary,
}: BlogFeaturedEditorialProps) {
  const t = dictionary.blog as Dictionary["blog"] & {
    officialGuide?: string;
    editorsPick?: string;
    featured?: string;
  };

  return (
    <section>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        {dictionary.blog.featured}
      </p>
      <div className="df-scroll">
      <article className="grid min-w-[720px] grid-cols-[1.15fr_0.85fr] overflow-hidden rounded-[22px] border border-border/80 bg-gradient-to-br from-[#161010] via-[#0f0c0c] to-[#0a0a0a] shadow-[0_20px_60px_rgba(229,9,20,0.1)] sm:rounded-[28px] xl:min-w-0">
        <div className="brand-safe-media relative min-h-[180px] overflow-hidden sm:min-h-[260px] md:min-h-[340px]">
          <Image
            src={post.image}
            alt={post.imageAlt[locale]}
            title={post.title[locale]}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 55vw, 55vw"
          />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(90deg, rgba(7,7,7,0.1) 0%, rgba(7,7,7,0.55) 100%), radial-gradient(ellipse 60% 50% at 40% 30%, rgba(229,9,20,0.22), transparent 65%)",
            }}
          />
        </div>
        <div className="flex min-w-[280px] flex-col justify-center gap-2 p-3 sm:gap-4 sm:p-8 lg:p-10">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <Badge variant="accent">
              {t.officialGuide ??
                (locale === "zh" ? "官方指南" : "Official Guide")}
            </Badge>
            <Badge variant="outline">
              {t.editorsPick ??
                (locale === "zh" ? "编辑精选" : "Editor's Pick")}
            </Badge>
            {post.featured ? (
              <Badge variant="outline">
                {locale === "zh" ? "精选" : "Featured"}
              </Badge>
            ) : null}
            {post.trending ? (
              <Badge variant="outline">
                {locale === "zh" ? "热门" : "Trending"}
              </Badge>
            ) : null}
            <Badge variant="outline">
              {locale === "zh" ? "已更新" : "Updated"}
            </Badge>
            <Badge variant="outline">
              {readingLabel(post.readingMinutes, locale)}
            </Badge>
            <Badge variant="outline">{post.category[locale]}</Badge>
            <Badge variant="outline">
              {difficultyLabel(post.difficulty, locale)}
            </Badge>
          </div>
          <h2 className="h2-display text-foreground">
            {post.title[locale]}
          </h2>
          <p className="text-[11px] text-muted-foreground sm:text-sm">
            {(locale === "zh" ? "作者" : "Author") + `: ${post.author}`} ·{" "}
            {(locale === "zh" ? "更新于" : "Updated")}{" "}
            {formatDate(post.updatedAt, locale)}
          </p>
          <p className="text-lead text-muted-foreground">
            {post.excerpt[locale]}
          </p>
          <div className="df-actions mt-1">
            <Button asChild>
              <Link href={localePath(locale, `/blog/${post.slug}`)}>
                {guideCta(post.slug, locale)}
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={localePath(locale, "/download")}>
                {dictionary.nav.download}
              </Link>
            </Button>
          </div>
        </div>
      </article>
      </div>
    </section>
  );
}
