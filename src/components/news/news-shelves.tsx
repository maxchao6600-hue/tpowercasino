import type { Locale } from "@/config/site";
import type { NewsItem } from "@/types";
import { FadeIn } from "@/components/common/fade-in";
import { NewsCard } from "@/components/news/news-card";
import { asNewsCopy } from "@/components/news/news-copy";

type NewsShelfProps = {
  locale: Locale;
  dictionary: { news: unknown };
  items: NewsItem[];
};

export function NewsTrendingShelf({
  locale,
  dictionary,
  items,
}: NewsShelfProps) {
  const t = asNewsCopy(dictionary.news);
  if (items.length === 0) return null;

  return (
    <section className="space-y-4 sm:space-y-5">
      <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-2xl">
        {t.trendingArticles ??
          (locale === "zh" ? "热门文章" : "Trending articles")}
      </h2>
      <div className="df-grid-4">
          {items.slice(0, 4).map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.04} className="h-full">
              <NewsCard
                item={item}
                locale={locale}
                dictionary={dictionary}
                showTrending
              />
            </FadeIn>
          ))}
      </div>
    </section>
  );
}

export function NewsEditorsPicks({
  locale,
  dictionary,
  items,
}: NewsShelfProps) {
  const t = asNewsCopy(dictionary.news);
  if (items.length === 0) return null;

  return (
    <section className="space-y-4 sm:space-y-5">
      <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-2xl">
        {t.editorsPicks ??
          (locale === "zh" ? "编辑精选" : "Editor's picks")}
      </h2>
      <div className="df-grid-2">
          {items.slice(0, 4).map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.04} className="h-full">
              <NewsCard
                item={item}
                locale={locale}
                dictionary={dictionary}
                variant="horizontal"
              />
            </FadeIn>
          ))}
      </div>
    </section>
  );
}

export function NewsRecommended({
  locale,
  dictionary,
  items,
}: NewsShelfProps) {
  const t = asNewsCopy(dictionary.news);
  if (items.length === 0) return null;

  return (
    <section className="space-y-4 sm:space-y-5">
      <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-2xl">
        {t.recommended ??
          (locale === "zh" ? "为你推荐" : "Recommended for you")}
      </h2>
      <div className="df-grid-3">
          {items.slice(0, 3).map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.04} className="h-full">
              <NewsCard
                item={item}
                locale={locale}
                dictionary={dictionary}
                variant="large"
              />
            </FadeIn>
          ))}
      </div>
    </section>
  );
}
