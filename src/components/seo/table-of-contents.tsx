import type { TocItem } from "@/lib/content";

type TableOfContentsProps = {
  items: TocItem[];
  title: string;
};

export function TableOfContents({ items, title }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label={title}
      className="rounded-[24px] border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
    >
      <p className="text-small font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <ol className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm font-semibold text-foreground transition-colors duration-[250ms] hover:text-primary"
            >
              <span className="mr-2 text-muted-foreground">{index + 1}.</span>
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
