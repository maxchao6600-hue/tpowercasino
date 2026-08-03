import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { downloadNewsSlugs } from "@/data/download-page-content";
import { getNewsBySlug } from "@/data/news";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { asDownloadCopy } from "@/components/download/download-copy";

type DownloadNewsProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function DownloadNews({ locale, dictionary }: DownloadNewsProps) {
  const t = asDownloadCopy(dictionary.download);
  const items = downloadNewsSlugs
    .map((slug) => getNewsBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  if (items.length === 0) return null;

  return (
    <Section
      id="news"
      eyebrow={t.newsEyebrow ?? (locale === "zh" ? "最新消息" : "Latest news")}
      title={
        t.newsTitle ??
        (locale === "zh" ? "与下载相关的平台动态" : "Platform updates for mobile")
      }
      description={
        t.newsSubtitle ??
        (locale === "zh"
          ? "性能、VIP、支付与真人桌——安装后也值得跟进。"
          : "Performance, VIP, payments, and live tables — worth following after install.")
      }
    >
      <div className="df-row-4">
      <div className="df-grid-4">
          {items.map((item, index) => (
            <FadeIn key={item.slug} delay={index * 0.03} className="h-full">
              <Link
                href={localePath(locale, `/news/${item.slug}`)}
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-border/80 bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[24px]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt[locale]}
                    title={item.title[locale]}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 40vw, 22vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 45%, rgba(7,7,7,0.75) 100%), radial-gradient(ellipse 60% 50% at 50% 20%, rgba(229,9,20,0.16), transparent 65%)",
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-3.5 sm:p-4 md:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary sm:text-[11px]">
                    {item.category[locale]}
                  </p>
                  <h3 className="mt-1.5 text-sm font-bold text-foreground group-hover:text-primary sm:text-base">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                    {item.excerpt[locale]}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[11px] font-semibold text-primary sm:text-xs">
                    {dictionary.common.readMore}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
      </div>
      </div>
    </Section>
  );
}
