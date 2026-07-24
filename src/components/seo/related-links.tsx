import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import { ArrowUpRight } from "lucide-react";

export type RelatedLinkItem = {
  href: string;
  label: string;
  description?: string;
};

type RelatedLinksProps = {
  locale: Locale;
  title: string;
  items: RelatedLinkItem[];
};

export function RelatedLinks({ locale, title, items }: RelatedLinksProps) {
  if (items.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="h2-display text-foreground">{title}</h2>
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
        {items.map((item) => {
          const href = item.href.startsWith("http")
            ? item.href
            : localePath(locale, item.href);
          return (
            <li key={item.href} className="min-w-0">
              <Link
                href={href}
                className="group flex items-start justify-between gap-2 rounded-[16px] border border-border bg-card p-3 shadow-[var(--shadow-soft)] transition-all duration-[250ms] ease-out hover:-translate-y-[6px] hover:shadow-[var(--shadow-lift)] sm:gap-4 sm:rounded-[24px] sm:p-6"
              >
                <span className="min-w-0">
                  <span className="block text-xs font-bold text-foreground group-hover:text-primary sm:text-base">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="mt-1 block text-[10px] text-muted-foreground sm:mt-2 sm:text-small">
                      {item.description}
                    </span>
                  ) : null}
                </span>
                <ArrowUpRight
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground sm:mt-1 sm:h-4 sm:w-4"
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
