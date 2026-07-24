import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { gamesHubLinks, gamesSeoBlocks, gamesSeoFaqs } from "@/data/games-seo";
import { SeoRichText } from "@/components/home/seo-rich-text";
import { PageFaq } from "@/components/seo/page-faq";
import { RelatedLinks } from "@/components/seo/related-links";

type GamesSeoProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function GamesSeo({ locale, dictionary }: GamesSeoProps) {
  const t = dictionary.games;

  return (
    <section
      className="mt-16 border-t border-border/80 pt-14"
      aria-labelledby="games-seo-heading"
    >
      <header className="mb-12 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
          {t.seoEyebrow}
        </p>
        <h2
          id="games-seo-heading"
          className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          {t.seoTitle}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {t.seoSubtitle}
        </p>
      </header>

      <div className="max-w-3xl space-y-14 [font-synthesis:none]">
        {gamesSeoBlocks.map((block) => (
          <article key={block.id} id={block.id}>
            <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
              {block.title[locale]}
            </h3>
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
          </article>
        ))}
      </div>

      <RelatedLinks
        locale={locale}
        title={dictionary.seo.importantPages}
        items={gamesHubLinks.map((item) => ({
          href: item.href,
          label: item.label[locale],
        }))}
      />

      <PageFaq locale={locale} title={t.seoFaqTitle} items={gamesSeoFaqs} />
    </section>
  );
}
