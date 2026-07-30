import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AtmosphereMedia } from "@/components/common/atmosphere-media";

export type PremiumCtaAction = {
  href: string;
  label: string;
  variant?: "default" | "secondary" | "outline";
};

type PremiumCtaProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions: PremiumCtaAction[];
  imageSrc: string;
  imageAlt: string;
  className?: string;
  /** Optional node rendered above the button row */
  beforeActions?: ReactNode;
};

/**
 * Premium two-column conversion band (Games CTA standard):
 * ~58% copy + CTAs | ~42% blended artwork — never an empty right column.
 */
export function PremiumCta({
  eyebrow,
  title,
  description,
  actions,
  imageSrc,
  imageAlt,
  className,
  beforeActions,
}: PremiumCtaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-[#141414] via-[#0d0d0d] to-[#1a0a0c] shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 12% 40%, rgba(229,9,20,0.22), transparent 58%), radial-gradient(ellipse 40% 55% at 88% 55%, rgba(212,175,55,0.08), transparent 55%)",
        }}
      />

      <div className="relative grid min-h-[220px] grid-cols-[1.38fr_1fr] items-center gap-4 p-4 sm:min-h-[280px] sm:gap-8 sm:p-7 md:min-h-[360px] md:gap-10 md:p-10 lg:gap-12 lg:p-12">
        <div className="flex min-w-0 flex-col justify-center">
          {eyebrow ? (
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary sm:text-xs">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={cn(
              "h2-display text-white",
              eyebrow ? "mt-2 sm:mt-3" : "",
            )}
          >
            {title}
          </h2>
          <p className="text-lead mt-2 max-w-xl text-white/72 sm:mt-3">
            {description}
          </p>
          {beforeActions}
          <div className="df-actions mt-4 sm:mt-7">
            {actions.map((action) => (
              <Button
                key={`${action.href}-${action.label}`}
                asChild
                size="lg"
                variant={action.variant ?? "default"}
                className={cn(
                  "h-9 px-3 text-xs sm:h-11 sm:px-6 sm:text-sm",
                  action.variant === "outline"
                    ? "border-white/20 bg-transparent text-white hover:border-white/35 hover:bg-white/10 hover:text-white"
                    : undefined,
                )}
              >
                <Link href={action.href}>{action.label}</Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-md lg:max-w-none">
          <AtmosphereMedia
            src={imageSrc}
            alt={imageAlt}
            title={title}
            aspectClassName="aspect-[4/3]"
            sizes="(max-width: 768px) 42vw, 42vw"
          />
        </div>
      </div>
    </div>
  );
}
