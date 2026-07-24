import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";

type SeoRichTextProps = {
  locale: Locale;
  text: string;
  className?: string;
};

/** Renders paragraph text with `[[/path|label]]` internal links. */
export function SeoRichText({ locale, text, className }: SeoRichTextProps) {
  const parts = text.split(/(\[\[\/[^\]|]+\|[^\]]+\]\])/g);

  return (
    <p className={className}>
      {parts.map((part, index) => {
        const match = part.match(/^\[\[(\/[^\]|]+)\|([^\]]+)\]\]$/);
        if (!match) return <span key={index}>{part}</span>;
        return (
          <Link
            key={index}
            href={localePath(locale, match[1])}
            className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            {match[2]}
          </Link>
        );
      })}
    </p>
  );
}
