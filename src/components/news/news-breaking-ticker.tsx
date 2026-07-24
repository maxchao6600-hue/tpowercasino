import type { Locale } from "@/config/site";
import { newsBreakingTicker } from "@/data/news-page-content";
import { asNewsCopy } from "@/components/news/news-copy";

type NewsBreakingTickerProps = {
  locale: Locale;
  dictionary: { news: unknown };
};

export function NewsBreakingTicker({
  locale,
  dictionary,
}: NewsBreakingTickerProps) {
  const t = asNewsCopy(dictionary.news);
  const items = [...newsBreakingTicker, ...newsBreakingTicker];

  return (
    <div className="border-y border-primary/20 bg-[#0c0506]">
      <div className="mx-auto flex max-w-[1400px] items-stretch">
        <div className="flex shrink-0 items-center bg-primary px-3 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:px-5 sm:text-xs">
          {t.breakingLabel ?? (locale === "zh" ? "最新快讯" : "Breaking")}
        </div>
        <div className="group relative min-w-0 flex-1 overflow-hidden">
          <div className="flex w-max items-center gap-8 py-2.5 animate-marquee-trust group-hover:[animation-play-state:paused] sm:gap-12">
            {items.map((item, index) => (
              <span
                key={`${item.en}-${index}`}
                className="inline-flex items-center gap-3 whitespace-nowrap text-[11px] text-white/80 sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                {item[locale]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
