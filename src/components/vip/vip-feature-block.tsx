"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/config/site";
import type { VipTextBlock } from "@/data/vip-page-content";
import { vipFeatureMedia } from "@/data/vip-feature-media";
import { vipIconMap } from "@/components/vip/vip-icons";
import { cn } from "@/lib/utils";

type VipFeatureBlockProps = {
  locale: Locale;
  item: VipTextBlock;
  index: number;
  learnMoreLabel: string;
  showLessLabel: string;
};

/**
 * Desktop-first Image | Text feature row (composition never stacks).
 * Full EEAT body stays in the DOM for crawlability when collapsed.
 */
export function VipFeatureBlock({
  locale,
  item,
  index,
  learnMoreLabel,
  showLessLabel,
}: VipFeatureBlockProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const media = vipFeatureMedia[item.id];
  const Icon = vipIconMap[item.icon];
  const imageLeft = index % 2 === 0;

  if (!media) return null;

  return (
    <article
      className={cn(
        "group grid grid-cols-[0.9fr_1.1fr] items-center gap-3 overflow-hidden rounded-[18px] border border-border/80 bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a0a0c] p-2.5 shadow-[var(--shadow-soft)] transition-all duration-300 ease-out sm:gap-5 sm:rounded-[24px] sm:p-4 md:gap-8 md:rounded-[28px] md:p-5 lg:gap-10 lg:p-6",
        "hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)]",
        !imageLeft && "grid-cols-[1.1fr_0.9fr]",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[14px] border border-white/8 bg-[#0a0a0a] sm:rounded-[18px] md:rounded-[22px]",
          !imageLeft && "order-2",
        )}
      >
        <div className="relative aspect-[5/4] w-full">
          <Image
            src={media.imageSrc}
            alt={media.imageAlt[locale]}
            title={item.title[locale]}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 42vw, 45vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(180deg, rgba(7,7,7,0.12) 0%, rgba(7,7,7,0.2) 50%, rgba(7,7,7,0.72) 100%), radial-gradient(ellipse 65% 60% at 50% 30%, rgba(229,9,20,0.16), transparent 62%)",
            }}
          />
        </div>
      </div>

      <div className={cn("min-w-0 px-0.5 sm:px-1 md:px-2", !imageLeft && "order-1")}>
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15 text-primary sm:h-10 sm:w-10 sm:rounded-2xl md:h-12 md:w-12">
          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" aria-hidden="true" />
        </div>

        <h3 className="mt-2 text-sm font-bold tracking-tight text-foreground sm:mt-3 sm:text-lg md:mt-5 md:text-2xl lg:text-[1.75rem]">
          {item.title[locale]}
        </h3>

        <p className="mt-1.5 line-clamp-3 text-[11px] leading-relaxed text-muted-foreground sm:mt-2 sm:line-clamp-none sm:text-xs md:mt-3 md:text-sm lg:text-[15px]">
          {media.summary[locale]}
        </p>

        <div
          id={panelId}
          className={cn(
            "mt-2 overflow-hidden transition-[max-height,opacity] duration-500 ease-out sm:mt-3 md:mt-4",
            open ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0",
          )}
          aria-hidden={!open}
        >
          <p className="border-t border-white/10 pt-2 text-[11px] leading-relaxed text-muted-foreground sm:pt-3 sm:text-xs md:pt-4 md:text-sm lg:text-[15px]">
            {item.body[locale]}
          </p>
        </div>

        {!open ? <p className="sr-only">{item.body[locale]}</p> : null}

        <button
          type="button"
          className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary transition-colors hover:text-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f] sm:mt-3 sm:gap-2 sm:text-xs md:mt-5 md:text-sm"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? showLessLabel : learnMoreLabel}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-300 sm:h-4 sm:w-4",
              open && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
}
