import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { vipComparisonRows, vipTiers } from "@/data/vip";
import { Section } from "@/components/common/section";
import { cn } from "@/lib/utils";

type VipComparisonTableProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function VipComparisonTable({
  locale,
  dictionary,
}: VipComparisonTableProps) {
  const t = dictionary.vip;
  const columns = vipTiers;

  return (
    <Section
      id="comparison"
      eyebrow={t.tableEyebrow}
      title={t.tableTitle}
      description={t.tableSubtitle}
    >
      <div className="overflow-x-auto rounded-[28px] border border-border/80 bg-card/60 shadow-[var(--shadow-soft)] backdrop-blur-sm">
        <table className="min-w-[720px] w-full border-collapse text-left text-sm md:text-[15px]">
          <thead>
            <tr className="border-b border-border/80 bg-white/[0.03]">
              <th className="px-5 py-4 font-semibold text-muted-foreground md:px-6">
                {t.tableFeatureLabel}
              </th>
              {columns.map((tier) => (
                <th
                  key={tier.id}
                  className={cn(
                    "px-5 py-4 font-bold text-foreground md:px-6",
                    tier.highlight && "bg-primary/10 text-primary",
                  )}
                >
                  <span className="block">{tier.name[locale]}</span>
                  {tier.highlight ? (
                    <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.14em] text-primary/80">
                      {t.mostPopular}
                    </span>
                  ) : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vipComparisonRows.map((row, index) => (
              <tr
                key={row.id}
                className={cn(
                  "border-b border-border/60 last:border-b-0",
                  index % 2 === 1 && "bg-white/[0.02]",
                )}
              >
                <th className="px-5 py-4 font-semibold text-foreground md:px-6">
                  {row.label[locale]}
                </th>
                <td className="px-5 py-4 text-muted-foreground md:px-6">
                  {row.silver[locale]}
                </td>
                <td className="bg-primary/[0.04] px-5 py-4 font-medium text-foreground md:px-6">
                  {row.gold[locale]}
                </td>
                <td className="px-5 py-4 text-muted-foreground md:px-6">
                  {row.platinum[locale]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
