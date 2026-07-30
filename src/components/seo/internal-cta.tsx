import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import { Button } from "@/components/ui/button";

type InternalCtaProps = {
  locale: Locale;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function InternalCta({
  locale,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: InternalCtaProps) {
  return (
    <aside className="mt-16 rounded-[24px] border border-border bg-[#111111] px-8 py-10 text-white shadow-[var(--shadow-soft)] md:px-10">
      <h2 className="h3-display text-white">{title}</h2>
      <p className="mt-4 max-w-2xl text-body text-white/75">{description}</p>
      <div className="df-actions mt-8">
        <Button asChild size="lg">
          <Link href={localePath(locale, primaryHref)}>{primaryLabel}</Link>
        </Button>
        {secondaryHref && secondaryLabel ? (
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-card/10 hover:text-white"
          >
            <Link href={localePath(locale, secondaryHref)}>{secondaryLabel}</Link>
          </Button>
        ) : null}
      </div>
    </aside>
  );
}
