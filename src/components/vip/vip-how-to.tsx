import { ArrowDown } from "lucide-react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { vipHowToIntro, vipHowToSteps } from "@/data/vip-page-content";
import { Section } from "@/components/common/section";

type VipHowToProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function VipHowTo({ locale, dictionary }: VipHowToProps) {
  const t = dictionary.vip;

  return (
    <Section
      id="how-to"
      eyebrow={t.howToEyebrow}
      title={t.howToTitle}
      description={t.howToSubtitle}
    >
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {vipHowToIntro[locale]}
      </p>

      <div className="mt-10 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:thin]">
        <ol className="grid min-w-[900px] grid-cols-3 gap-3 sm:gap-4 md:min-w-0">
          {vipHowToSteps.map((step, index) => (
            <li
              key={step.id}
              className="relative rounded-[20px] border border-border/80 bg-card/80 p-4 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:rounded-[24px] sm:p-6"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary sm:h-10 sm:w-10 sm:text-sm">
                {index + 1}
              </span>
              <h3 className="mt-3 text-base font-bold tracking-tight text-foreground sm:mt-4 sm:text-xl">
                {step.title[locale]}
              </h3>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                {step.body[locale]}
              </p>
              {index < vipHowToSteps.length - 1 && index % 3 !== 2 ? (
                <ArrowDown
                  className="absolute right-4 top-5 h-3.5 w-3.5 rotate-[-90deg] text-primary/40 sm:right-5 sm:top-6 sm:h-4 sm:w-4"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
