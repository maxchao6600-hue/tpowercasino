import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { vipTiers } from "@/data/vip";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { cn } from "@/lib/utils";

type VipTiersProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function VipTiers({ locale, dictionary }: VipTiersProps) {
  const t = dictionary.vip;

  return (
    <Section
      id="tiers"
      eyebrow={t.tiersEyebrow}
      title={t.tiersTitle}
      description={t.tiersSubtitle}
    >
      <div className="df-row-3">
        <div className="df-grid-3">
          {vipTiers.map((tier, index) => (
            <FadeIn key={tier.id} delay={index * 0.06} className="h-full min-w-0">
              <div
                className={cn(
                  "group relative h-full rounded-[18px] p-px transition-all duration-300 sm:rounded-[22px] md:rounded-[26px]",
                  "bg-gradient-to-br from-white/18 via-primary/45 to-white/8",
                  "hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(229,9,20,0.22)]",
                  tier.highlight &&
                    "from-primary/90 via-amber-400/50 to-primary/35 shadow-[0_0_28px_rgba(229,9,20,0.18)]",
                )}
              >
              <div className="relative flex h-full flex-col overflow-hidden rounded-[17px] bg-[#0f0f0f] px-3 pb-4 pt-4 sm:rounded-[21px] sm:px-5 sm:pb-6 sm:pt-6 md:rounded-[25px] md:px-8 md:pb-9 md:pt-8">
                <div
                  className="pointer-events-none absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background: tier.highlight
                      ? "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(229,9,20,0.22), transparent 65%)"
                      : "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(229,9,20,0.1), transparent 60%)",
                  }}
                />

                {tier.highlight ? (
                  <div className="relative mb-3 sm:mb-4 md:mb-5">
                    <span className="inline-flex items-center rounded-full border border-primary/50 bg-primary/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-primary sm:px-3 sm:py-1 sm:text-[11px]">
                      {t.mostPopular}
                    </span>
                  </div>
                ) : (
                  <div className="mb-3 h-5 sm:mb-4 sm:h-6 md:mb-5 md:h-7" aria-hidden="true" />
                )}

                <div className="relative">
                  <h3 className="text-lg font-bold tracking-tight text-white sm:text-2xl md:text-3xl md:text-[2.1rem]">
                    {tier.name[locale]}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-white/65 sm:mt-2 sm:text-sm md:mt-3 md:text-[15px]">
                    {tier.description[locale]}
                  </p>
                </div>

                <dl className="relative mt-3 grid gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-[10px] sm:mt-4 sm:gap-2 sm:rounded-2xl sm:p-3 sm:text-xs md:mt-6 md:gap-3 md:p-4 md:text-sm">
                  <div className="flex justify-between gap-2 sm:gap-3">
                    <dt className="text-white/45">{t.metricMonthly}</dt>
                    <dd className="text-right font-semibold text-white/90">
                      {tier.monthlyRewards[locale]}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2 sm:gap-3">
                    <dt className="text-white/45">{t.metricWithdrawal}</dt>
                    <dd className="text-right font-semibold text-white/90">
                      {tier.withdrawalSpeed[locale]}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2 sm:gap-3">
                    <dt className="text-white/45">{t.metricCashback}</dt>
                    <dd className="text-right font-semibold text-white/90">
                      {tier.cashback[locale]}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2 sm:gap-3">
                    <dt className="text-white/45">{t.metricSupport}</dt>
                    <dd className="text-right font-semibold text-white/90">
                      {tier.supportLevel[locale]}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2 sm:gap-3">
                    <dt className="text-white/45">{t.metricGifts}</dt>
                    <dd className="text-right font-semibold text-white/90">
                      {tier.exclusiveGifts[locale]}
                    </dd>
                  </div>
                </dl>

                <ul className="relative mt-3 space-y-1.5 border-t border-white/10 pt-3 sm:mt-4 sm:space-y-2 sm:pt-4 md:mt-6 md:space-y-3 md:pt-6">
                  {tier.benefits.map((benefit) => (
                    <li
                      key={benefit[locale]}
                      className="flex items-start gap-2 text-[10px] text-white/78 sm:gap-2.5 sm:text-xs md:gap-3 md:text-sm md:text-[15px]"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(229,9,20,0.8)] sm:mt-1.5" />
                      {benefit[locale]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
