import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import { slugifyHeading } from "@/lib/content";
import { SiteLink } from "@/components/common/site-link";

type MarkdownArticleProps = {
  content: string;
  /** Required for `[[/path|label]]` internal links. */
  locale?: Locale;
};

function renderInline(text: string, locale?: Locale) {
  if (!locale) return text;
  const parts = text.split(/(\[\[\/[^\]|]+\|[^\]]+\]\])/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[\[(\/[^\]|]+)\|([^\]]+)\]\]$/);
    if (!match) return <span key={index}>{part}</span>;
    return (
      <SiteLink
        key={index}
        href={localePath(locale, match[1])}
        className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
      >
        {match[2]}
      </SiteLink>
    );
  });
}

/** Renders trusted markdown-like content with heading anchors for TOC. */
export function MarkdownArticle({ content, locale }: MarkdownArticleProps) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div className="prose-tpower">
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("## ")) {
          const text = trimmed.replace(/^##\s+/, "");
          const id = slugifyHeading(text);
          return (
            <h2 key={index} id={id} className="scroll-mt-28">
              {text}
            </h2>
          );
        }
        if (trimmed.startsWith("- ")) {
          const items = trimmed
            .split("\n")
            .map((line) => line.replace(/^-\s+/, ""));
          return (
            <ul key={index}>
              {items.map((item) => (
                <li key={item}>{renderInline(item, locale)}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{renderInline(trimmed, locale)}</p>;
      })}
    </div>
  );
}
