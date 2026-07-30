import dynamic from "next/dynamic";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AgeGate } from "@/components/common/age-gate";

const FinalCtaSlot = dynamic(() =>
  import("@/components/home/final-cta-slot").then((m) => m.FinalCtaSlot),
);
const ProvidersMarqueeSlot = dynamic(() =>
  import("@/components/layout/providers-marquee-slot").then(
    (m) => m.ProvidersMarqueeSlot,
  ),
);

type SiteShellProps = {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
  ageConfirmed?: boolean;
};

export function SiteShell({
  locale,
  dictionary,
  children,
  ageConfirmed = false,
}: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <AgeGate
        locale={locale}
        labels={dictionary.common.ageGate}
        initiallyConfirmed={ageConfirmed}
      />
      <Header locale={locale} dictionary={dictionary} />
      {/* Inline height reserves nav space before CSS (fixed header) — prevents CLS */}
      <div style={{ height: 80 }} aria-hidden="true" className="shrink-0" />
      <main className="flex-1">
        {children}
        <FinalCtaSlot locale={locale} dictionary={dictionary} />
        <ProvidersMarqueeSlot locale={locale} dictionary={dictionary} />
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </div>
  );
}
