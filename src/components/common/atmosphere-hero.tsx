import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { Container } from "@/components/common/container";
import { TrustBar } from "@/components/common/trust-bar";
import type { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/utils";

type AtmosphereHeroProps = {
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  eyebrow?: string;
  brand?: string;
  imageSrc: string;
  imageAlt: string;
  actions?: ReactNode;
  aside?: ReactNode;
  className?: string;
  /** Tighter padding for denser pages */
  compact?: boolean;
  /**
   * Overlay strength over the full-bleed atmosphere image.
   * `cinematic` deepens the red-to-black veil for copy-first luxury heroes.
   */
  overlay?: "default" | "cinematic";
  /** Hide the global trust marquee (rare). Default: show. */
  showTrustBar?: boolean;
};

const OVERLAY_STYLES = {
  default:
    "linear-gradient(90deg, rgba(7,7,7,0.96) 0%, rgba(7,7,7,0.88) 40%, rgba(7,7,7,0.55) 68%, rgba(7,7,7,0.86) 100%), radial-gradient(ellipse 55% 70% at 78% 42%, rgba(229,9,20,0.30), transparent 62%)",
  cinematic:
    "linear-gradient(105deg, rgba(5,5,5,0.97) 0%, rgba(8,5,6,0.93) 34%, rgba(18,6,8,0.78) 58%, rgba(7,7,7,0.88) 100%), radial-gradient(ellipse 65% 75% at 72% 38%, rgba(229,9,20,0.42), transparent 60%), linear-gradient(180deg, rgba(7,7,7,0.28) 0%, transparent 42%, rgba(7,7,7,0.55) 100%)",
} as const;

/**
 * Global Games-benchmark hero: full-bleed atmosphere image,
 * dark overlay, red radial, smooth fade into the page.
 */
export function AtmosphereHero({
  title,
  description,
  breadcrumbs,
  eyebrow,
  brand,
  imageSrc,
  imageAlt,
  actions,
  aside,
  className,
  compact = false,
  overlay = "default",
  showTrustBar = true,
}: AtmosphereHeroProps) {
  return (
    <>
    <section
      className={cn(
        "relative overflow-hidden bg-[#070707]",
        showTrustBar ? "" : "border-b border-border/70",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: OVERLAY_STYLES[overlay],
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-28 md:h-36"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #070707 92%)",
          }}
        />
      </div>

      <Container
        className={cn(
          "relative flex h-full min-h-[inherit] flex-col justify-center",
          compact ? "py-10 md:py-12" : "py-12 md:py-16 lg:py-20",
        )}
      >
        {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}

        <div
          className={cn(
            "grid items-center gap-4 sm:gap-8 md:gap-10",
            aside ? "grid-cols-[1.15fr_0.85fr] sm:gap-10 lg:gap-12" : "",
            breadcrumbs?.length ? "mt-8" : "",
          )}
        >
          <div className={cn("min-w-0 max-w-2xl", !aside && "lg:max-w-3xl")}>
            {eyebrow ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary sm:text-xs">
                {eyebrow}
              </div>
            ) : null}

            {brand ? (
              <p
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 sm:text-sm",
                  eyebrow ? "mt-3 sm:mt-5" : "",
                )}
              >
                {brand}
              </p>
            ) : null}

            <h1
              className={cn(
                "text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.08]",
                brand || eyebrow ? "mt-2 sm:mt-3" : "",
              )}
            >
              {title}
            </h1>

            <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/72 sm:mt-4 sm:text-base md:text-lg">
              {description}
            </p>

            {actions ? <div className="mt-4 sm:mt-8">{actions}</div> : null}
          </div>

          {aside ? <div className="relative min-w-0">{aside}</div> : null}
        </div>
      </Container>

      {/* Decorative fade veil so the next section never butts a hard edge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />
    </section>
    {showTrustBar ? <TrustBar /> : null}
    </>
  );
}
