import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { vipExclusivePromotions } from "@/data/vip-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { vipIconMap } from "@/components/vip/vip-icons";

type VipExclusivePromosProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function VipExclusivePromos({
  locale,
  dictionary,
}: VipExclusivePromosProps) {
  const t = dictionary.vip;

  return (
    <Section
      id="exclusive-promotions"
      eyebrow={t.promosEyebrow}
      title={t.promosTitle}
      description={t.promosSubtitle}
    >
      <div className="df-grid-4">
          {vipExclusivePromotions.map((item, index) => {
            const Icon = vipIconMap[item.icon];
            return (
              <FadeIn key={item.id} delay={(index % 4) * 0.04} className="h-full min-w-0">
                <article className="flex h-full flex-col rounded-[20px] border border-border/80 bg-gradient-to-b from-[#151515] to-[#0d0d0d] p-3 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:rounded-[24px] sm:p-5 md:p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary sm:h-11 sm:w-11 sm:rounded-2xl">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold tracking-tight text-foreground sm:mt-4 sm:text-lg">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-1.5 line-clamp-4 text-[11px] leading-relaxed text-muted-foreground sm:mt-2 sm:line-clamp-none sm:text-sm">
                    {item.body[locale]}
                  </p>
                </article>
              </FadeIn>
            );
          })}
      </div>
    </Section>
  );
}
