"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type ProviderLogoMarkProps = {
  name: string;
  logo: string | null;
  className?: string;
  /** marquee = colored brand mark on dark; card = natural color on light surfaces */
  variant?: "marquee" | "card";
};

/**
 * Provider mark for marquees / shelves.
 * - Uses native <img> (required for SVG; avoids Next image optimizer 404s)
 * - Marquee: official colored logos always visible; hover only scales + soft red glow
 * - Falls back to premium typography if the file is missing or fails to load
 */
export function ProviderLogoMark({
  name,
  logo,
  className,
  variant = "marquee",
}: ProviderLogoMarkProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(logo) && !failed;

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        variant === "card" && "h-full w-full",
        className,
      )}
    >
      {showImage ? (
        // Native img: SVGs must not go through next/image; also avoids /_next/image 404s on CF.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo!}
          alt={name}
          title={name}
          width={160}
          height={48}
          loading={variant === "marquee" ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={variant === "marquee" ? "high" : "low"}
          onError={() => setFailed(true)}
          className={cn(
            "w-auto object-contain transition-transform duration-300 ease-out",
            variant === "marquee" &&
              "h-[28px] drop-shadow-none group-hover/logo:scale-[1.08] group-hover/logo:drop-shadow-[0_0_14px_rgba(229,9,20,0.55)] md:h-[38px]",
            variant === "card" &&
              "h-8 max-w-[120px] group-hover:brightness-110",
          )}
        />
      ) : (
        <span
          className={cn(
            "whitespace-nowrap text-center font-semibold uppercase tracking-[0.16em] transition-transform duration-300 ease-out",
            variant === "marquee" &&
              "text-[0.65rem] text-white/90 md:text-[0.7rem] group-hover/logo:scale-[1.08] group-hover/logo:drop-shadow-[0_0_14px_rgba(229,9,20,0.55)]",
            variant === "card" &&
              "text-[0.65rem] text-foreground/70 group-hover:text-foreground",
          )}
          title={name}
        >
          {name}
        </span>
      )}
    </span>
  );
}
