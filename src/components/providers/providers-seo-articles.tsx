import type { Locale } from "@/config/site";
import type { ProvidersSeoBlock } from "@/data/providers-seo";
import { SeoRichText } from "@/components/home/seo-rich-text";

type ProvidersSeoArticlesProps = {
  locale: Locale;
  blocks: ProvidersSeoBlock[];
};

export function ProvidersSeoArticles({
  locale,
  blocks,
}: ProvidersSeoArticlesProps) {
  return (
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
        </article>
      ))}
    </div>
  );
}
