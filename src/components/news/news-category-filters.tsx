import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { NewsCategoryKey } from "@/types";
import { NEWS_CATEGORY_FILTERS } from "@/data/news-page-content";
import { cn } from "@/lib/utils";

type NewsCategoryFiltersProps = {
  locale: Locale;
  active: "all" | NewsCategoryKey;
  query?: string;
};

export function NewsCategoryFilters({
  locale,
  active,
  query = "",
}: NewsCategoryFiltersProps) {
  return (
    <div
      className="flex flex-wrap gap-2 md:gap-2.5"
      role="navigation"
      aria-label={locale === "zh" ? "新闻分类" : "News categories"}
    >
        {NEWS_CATEGORY_FILTERS.map((filter) => {
          const params = new URLSearchParams();
          if (filter.key !== "all") params.set("category", filter.key);
          if (query) params.set("q", query);
          const href = `${localePath(locale, "/news")}${
            params.toString() ? `?${params.toString()}` : ""
          }`;
          const isActive = active === filter.key;
          return (
            <Link
              key={filter.key}
              href={href}
              className={cn(
                "rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all duration-250 sm:px-4 sm:py-2 sm:text-sm",
                isActive
                  ? "border-primary bg-primary text-white shadow-[0_8px_24px_rgba(229,9,20,0.35)]"
                  : "border-border/80 bg-[#121212] text-muted-foreground hover:-translate-y-[2px] hover:border-primary/40 hover:text-foreground hover:shadow-[0_8px_24px_rgba(229,9,20,0.12)]",
              )}
            >
              {filter.label[locale]}
            </Link>
          );
        })}
    </div>
  );
}
