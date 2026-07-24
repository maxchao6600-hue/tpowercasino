import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { downloadSeoArticle } from "@/data/download-page-content";
import { Container } from "@/components/common/container";
import { SeoRichText } from "@/components/home/seo-rich-text";
import { asDownloadCopy } from "@/components/download/download-copy";

type DownloadSeoArticleProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function DownloadSeoArticle({
  locale,
  dictionary,
}: DownloadSeoArticleProps) {
  const t = asDownloadCopy(dictionary.download);

  return (
    <section
      className="section-y border-t border-border bg-card"
      aria-labelledby="download-seo-heading"
      id="guide"
    >
      <Container className="max-w-4xl">
        <header className="mb-12 md:mb-16">
          <p className="mb-4 text-small font-semibold uppercase tracking-[0.18em] text-primary">
            {t.seoEyebrow ?? (locale === "zh" ? "完整指南" : "Complete guide")}
          </p>
          <h2
            id="download-seo-heading"
            className="h2-display text-foreground"
          >
            {downloadSeoArticle.title[locale]}
          </h2>
        </header>

        <div className="space-y-14 md:space-y-16 [font-synthesis:none]">
          {downloadSeoArticle.sections.map((section) => (
            <article key={section.heading.en}>
              <h2 className="h2-display text-foreground">
                {section.heading[locale]}
              </h2>
              <div className="mt-5 space-y-4 md:mt-6 md:space-y-5">
                {section.paragraphs.map((paragraph, index) => (
                  <SeoRichText
                    key={`${section.heading.en}-${index}`}
                    locale={locale}
                    text={paragraph[locale]}
                    className="text-body leading-relaxed text-muted-foreground"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
