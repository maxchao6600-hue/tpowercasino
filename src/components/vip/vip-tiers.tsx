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
      <div className="df-grid-3">
          {vipTiers.map((tier, index) => (
            <FadeIn key={tier.id} delay={index * 0.06} className="h-full min-w-0">
              <div
                className={cn(
                  "group relative h-full rounded-[26px] p-px transition-all duration-300",
                  "bg-gradient-to-br from-white/18 via-primary/45 to-white/8",
                  "hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(229,9,20,0.22)]",
                  tier.highlight &&
                    "from-primary/90 via-amber-400/50 to-primary/35 shadow-[0_0_28px_rgba(229,9,20,0.18)]",
                )}
              >
              <div className="relative flex h-full flex-col overflow-hidden rounded-[25px] bg-[#0f0f0f] px-6 pb-8 pt-7 md:px-8 md:pb-9 md:pt-8">
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
                  <div className="relative mb-5">
                    <span className="inline-flex items-center rounded-full border border-primary/50 bg-primary/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                      {t.mostPopular}
                    </span>
                  </div>
                ) : (
                  <div className="mb-5 h-7" aria-hidden="true" />
                )}

                <div className="relative">
                  <h3 className="text-3xl font-bold tracking-tight text-white md:text-[2.1rem]">
                    {tier.name[locale]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-[15px]">
                    {tier.description[locale]}
                  </p>
                </div>

                <dl className="relative mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-white/45">{t.metricMonthly}</dt>
                    <dd className="text-right font-semibold text-white/90">
                      {tier.monthlyRewards[locale]}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-white/45">{t.metricWithdrawal}</dt>
                    <dd className="text-right font-semibold text-white/90">
                      {tier.withdrawalSpeed[locale]}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-white/45">{t.metricCashback}</dt>
                    <dd className="text-right font-semibold text-white/90">
                      {tier.cashback[locale]}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-white/45">{t.metricSupport}</dt>
                    <dd className="text-right font-semibold text-white/90">
                      {tier.supportLevel[locale]}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-white/45">{t.metricGifts}</dt>
                    <dd className="text-right font-semibold text-white/90">
                      {tier.exclusiveGifts[locale]}
                    </dd>
                  </div>
                </dl>

                <ul className="relative mt-6 space-y-3 border-t border-white/10 pt-6">
                  {tier.benefits.map((benefit) => (
                    <li
                      key={benefit[locale]}
                      className="flex items-start gap-3 text-sm text-white/78 md:text-[15px]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
                      {benefit[locale]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </FadeIn>
          ))}
      </div>
    </Section>
  );
}
