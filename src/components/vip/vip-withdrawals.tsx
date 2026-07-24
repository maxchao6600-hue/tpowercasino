import { ArrowDown } from "lucide-react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import {
  vipWithdrawalClosing,
  vipWithdrawalIntro,
  vipWithdrawalSteps,
} from "@/data/vip-page-content";
import { Section } from "@/components/common/section";

type VipWithdrawalsProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function VipWithdrawals({ locale, dictionary }: VipWithdrawalsProps) {
  const t = dictionary.vip;

  return (
    <Section
      id="withdrawals"
      eyebrow={t.withdrawalsEyebrow}
      title={t.withdrawalsTitle}
      description={t.withdrawalsSubtitle}
    >
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {vipWithdrawalIntro[locale]}
      </p>

      <ol className="mt-10 space-y-0">
        {vipWithdrawalSteps.map((step, index) => (
          <li key={step.id} className="relative">
            <div className="flex gap-4 md:gap-6">
              <div className="flex w-12 shrink-0 flex-col items-center md:w-14">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-sm font-bold text-primary md:h-14 md:w-14 md:text-base">
                  {index + 1}
                </span>
                {index < vipWithdrawalSteps.length - 1 ? (
                  <ArrowDown
                    className="my-2 h-5 w-5 text-primary/50"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
              <div className="mb-6 flex-1 rounded-[24px] border border-border/80 bg-gradient-to-br from-[#141414] to-[#0c0c0c] p-5 shadow-[var(--shadow-soft)] md:mb-8 md:p-6">
                <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                  {step.title[locale]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  {step.body[locale]}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {vipWithdrawalClosing[locale]}
      </p>
    </Section>
  );
}
