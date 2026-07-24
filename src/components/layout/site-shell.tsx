import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FinalCtaSlot } from "@/components/home/final-cta-slot";
import { ProvidersMarqueeSlot } from "@/components/layout/providers-marquee-slot";
import { AgeGate } from "@/components/common/age-gate";

type SiteShellProps = {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
};

export function SiteShell({ locale, dictionary, children }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <AgeGate locale={locale} labels={dictionary.common.ageGate} />
      <Header locale={locale} dictionary={dictionary} />
      <main className="flex-1">
        {children}
        <FinalCtaSlot locale={locale} dictionary={dictionary} />
        <ProvidersMarqueeSlot locale={locale} dictionary={dictionary} />
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </div>
  );
}
