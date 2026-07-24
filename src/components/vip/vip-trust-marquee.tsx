"use client";

import type { Locale } from "@/config/site";
import { vipTrustItems } from "@/data/vip-page-content";
import { vipIconMap } from "@/components/vip/vip-icons";
import { cn } from "@/lib/utils";

type VipTrustMarqueeProps = {
  locale: Locale;
  className?: string;
};

function TrustTrack({
  locale,
  ariaHidden,
}: {
  locale: Locale;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex h-full shrink-0 items-center gap-8 pr-8 md:gap-10 md:pr-10"
      aria-hidden={ariaHidden || undefined}
    >
      {vipTrustItems.map((item) => {
        const Icon = vipIconMap[item.icon];
        return (
          <div
            key={item.label.en}
            className="flex shrink-0 items-center gap-2.5 whitespace-nowrap px-1"
          >
            <Icon
              className="h-4 w-4 shrink-0 text-primary"
              aria-hidden="true"
              strokeWidth={2}
            />
            <span className="text-[13px] font-semibold tracking-wide text-white/85 md:text-sm">
              {item.label[locale]}
            </span>
            <span
              className="ml-2 h-1 w-1 rounded-full bg-white/20"
              aria-hidden="true"
            />
          </div>
        );
      })}
    </div>
  );
}

export function VipTrustMarquee({ locale, className }: VipTrustMarqueeProps) {
  return (
    <div
      className={cn(
        "group/trust relative w-full overflow-hidden border-y border-border/70 bg-[#0b0b0b]",
        className,
      )}
      style={{ height: 52 }}
      role="region"
      aria-label={locale === "zh" ? "VIP 信任指标" : "VIP trust highlights"}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0b0b0b] to-transparent md:w-12"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0b0b0b] to-transparent md:w-12"
        aria-hidden="true"
      />
      <div className="flex h-full w-max items-center animate-marquee-trust group-hover/trust:[animation-play-state:paused]">
        <TrustTrack locale={locale} />
        <TrustTrack locale={locale} ariaHidden />
      </div>
    </div>
  );
}
