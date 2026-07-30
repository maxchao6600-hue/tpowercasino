import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { blogKnowledgeHub } from "@/data/blog-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { PremiumCta } from "@/components/common/premium-cta";
import { Container } from "@/components/common/container";

type BlogKnowledgeHubProps = {
  locale: Locale;
  title: string;
  subtitle: string;
};

export function BlogKnowledgeHub({
  locale,
  title,
  subtitle,
}: BlogKnowledgeHubProps) {
  return (
    <section className="space-y-5 sm:space-y-6">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
          {locale === "zh" ? "知识枢纽" : "Knowledge Hub"}
        </p>
        <h2 className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          {subtitle}
        </p>
      </div>
      <div className="df-grid-4">
          {blogKnowledgeHub.map((item, index) => (
            <FadeIn key={item.href} delay={index * 0.03} className="h-full">
              <Link
                href={localePath(locale, item.href)}
                className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-border/80 bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[22px]"
              >
                <div className="brand-safe-media relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title[locale]}
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(7,7,7,0.05) 0%, rgba(7,7,7,0.6) 100%), radial-gradient(ellipse 60% 50% at 50% 20%, rgba(229,9,20,0.2), transparent 65%)",
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-3 sm:p-4">
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary sm:text-base">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-muted-foreground sm:text-xs">
                    {item.description[locale]}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
      </div>
    </section>
  );
}

type BlogFinalCtaProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function BlogFinalCta({ locale, dictionary }: BlogFinalCtaProps) {
  return (
    <section className="pt-2">
      <PremiumCta
        eyebrow={dictionary.common.brand}
        title={
          locale === "zh"
            ? "准备好进入 TPOWER官方平台？"
            : "Ready for the official TPOWER platform?"
        }
        description={
          locale === "zh"
            ? "先读完知识中心攻略，再走官方下载与注册。限额工具随时可用，让娱乐保持有节制。"
            : "Finish the Knowledge Center guide, then use official Download and Register paths. Keep Responsible Gaming tools active so leisure stays intentional."
        }
        imageSrc="/images/cta/tpower-join-cta.webp"
        imageAlt={
          locale === "zh"
            ? "TPOWER官方平台下载与注册引导"
            : "TPOWER official download and registration visual"
        }
        actions={[
          {
            href: localePath(locale, "/download"),
            label: dictionary.nav.download,
          },
          {
            href: localePath(locale, "/register"),
            label: dictionary.nav.register,
            variant: "outline",
          },
          {
            href: localePath(locale, "/responsible-gaming"),
            label:
              locale === "zh" ? "负责任博彩" : "Responsible Gaming",
            variant: "secondary",
          },
        ]}
      />
      <Container className="mt-4">
        <div className="df-grid-4 mt-4">
            {[
              {
                en: "Official Download only",
                zh: "只走官方下载",
              },
              {
                en: "Bilingual support",
                zh: "中英双语支持",
              },
              {
                en: "Clear payment guides",
                zh: "支付攻略清楚",
              },
              {
                en: "Responsible tools ready",
                zh: "负责任工具就绪",
              },
            ].map((item) => (
              <div
                key={item.en}
                className="flex h-full items-center justify-center rounded-[14px] border border-primary/20 bg-[#120808] px-3 py-3 text-center text-[10px] font-semibold text-muted-foreground sm:rounded-[16px] sm:text-xs"
              >
                {item[locale]}
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
}
