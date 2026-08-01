import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/types";
import { SiteLink } from "@/components/common/site-link";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.href}-${item.name}`} className="inline-flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
              ) : null}
              {isLast ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {item.name}
                </span>
              ) : (
                <SiteLink
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.name}
                </SiteLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
