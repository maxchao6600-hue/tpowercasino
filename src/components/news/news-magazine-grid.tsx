import type { Locale } from "@/config/site";
import type { NewsItem } from "@/types";
import { FadeIn } from "@/components/common/fade-in";
import { NewsCard } from "@/components/news/news-card";
import { asNewsCopy } from "@/components/news/news-copy";

type NewsMagazineGridProps = {
  items: NewsItem[];
  locale: Locale;
  dictionary: { news: unknown };
};

/** Asymmetrical magazine mosaic — desktop composition scaled on mobile. */
export function NewsMagazineGrid({
  items,
  locale,
  dictionary,
}: NewsMagazineGridProps) {
  const t = asNewsCopy(dictionary.news);
  const [a, b, c, d, e, f, ...rest] = items;

  return (
    <section className="space-y-4 sm:space-y-5">
      <div className="flex min-w-0 items-end justify-between gap-3">
        <h2 className="whitespace-nowrap break-keep text-lg font-bold tracking-tight text-foreground sm:text-2xl">
          {t.latestArticles ??
            (locale === "zh" ? "最新文章" : "Latest articles")}
        </h2>
      </div>

      <div className="df-scroll">
        <div className="grid min-w-[720px] grid-cols-12 gap-3 sm:gap-4 md:gap-5 xl:min-w-0">
        {a ? (
          <FadeIn className="col-span-7">
            <NewsCard
              item={a}
              locale={locale}
              dictionary={dictionary}
              variant="large"
              priority
            />
          </FadeIn>
        ) : null}
        {b ? (
          <FadeIn className="col-span-5" delay={0.04}>
            <NewsCard
              item={b}
              locale={locale}
              dictionary={dictionary}
              variant="tall"
            />
          </FadeIn>
        ) : null}
        {c ? (
          <FadeIn className="col-span-4" delay={0.06}>
            <NewsCard
              item={c}
              locale={locale}
              dictionary={dictionary}
              variant="medium"
            />
          </FadeIn>
        ) : null}
        {d ? (
          <FadeIn className="col-span-8" delay={0.08}>
            <NewsCard
              item={d}
              locale={locale}
              dictionary={dictionary}
              variant="wide"
            />
          </FadeIn>
        ) : null}
        {e ? (
          <FadeIn className="col-span-6" delay={0.1}>
            <NewsCard
              item={e}
              locale={locale}
              dictionary={dictionary}
              variant="medium"
            />
          </FadeIn>
        ) : null}
        {f ? (
          <FadeIn className="col-span-6" delay={0.12}>
            <NewsCard
              item={f}
              locale={locale}
              dictionary={dictionary}
              variant="medium"
            />
          </FadeIn>
        ) : null}
        {rest.map((item, index) => (
          <FadeIn
            key={item.id}
            className={index % 3 === 0 ? "col-span-8" : "col-span-4"}
            delay={0.04 * (index + 4)}
          >
            <NewsCard
              item={item}
              locale={locale}
              dictionary={dictionary}
              variant={index % 3 === 0 ? "wide" : "standard"}
            />
          </FadeIn>
        ))}
        </div>
      </div>
    </section>
  );
}
