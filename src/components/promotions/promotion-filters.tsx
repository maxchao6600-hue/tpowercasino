import Link from "next/link";
import {
  CalendarDays,
  Coins,
  Crown,
  LayoutGrid,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { PromotionCategory } from "@/types";
import { cn } from "@/lib/utils";

const categoryIcons = {
  all: LayoutGrid,
  welcome: Sparkles,
  reload: RefreshCw,
  cashback: Coins,
  vip: Crown,
  seasonal: CalendarDays,
} as const;

type PromotionFiltersProps = {
  locale: Locale;
  dictionary: Dictionary;
  active: PromotionCategory | "all";
  categories: Array<PromotionCategory | "all">;
};

export function PromotionFilters({
  locale,
  dictionary,
  active,
  categories,
}: PromotionFiltersProps) {
  return (
    <div
      className="flex flex-wrap gap-2.5"
      role="navigation"
      aria-label={dictionary.promotions.filterLabel}
    >
      {categories.map((item) => {
        const Icon = categoryIcons[item];
        const isActive = active === item;
        return (
          <Link
            key={item}
            href={
              item === "all"
                ? localePath(locale, "/promotions")
                : `${localePath(locale, "/promotions")}?category=${item}`
            }
            className={cn(
              "group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300",
              isActive
                ? "border-primary bg-primary text-primary-foreground shadow-[0_0_24px_rgba(229,9,20,0.35)]"
                : "border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface hover:text-foreground hover:shadow-[var(--shadow-soft)]",
            )}
          >
            <Icon
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                isActive ? "scale-110" : "group-hover:scale-110",
              )}
              aria-hidden="true"
            />
            {dictionary.promotions.categories[item]}
          </Link>
        );
      })}
    </div>
  );
}
