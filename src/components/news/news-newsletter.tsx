"use client";

import { useState } from "react";
import type { Locale } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { asNewsCopy } from "@/components/news/news-copy";

type NewsNewsletterProps = {
  locale: Locale;
  dictionary: { news: unknown; contact?: { form?: { email?: string } } };
};

export function NewsNewsletter({ locale, dictionary }: NewsNewsletterProps) {
  const t = asNewsCopy(dictionary.news);
  const [sent, setSent] = useState(false);

  return (
    <section className="relative overflow-hidden rounded-[22px] border border-primary/25 bg-gradient-to-br from-[#1a0a0c] via-[#120808] to-[#0a0a0a] p-5 shadow-[0_20px_60px_rgba(229,9,20,0.12)] sm:rounded-[28px] sm:p-8 md:p-10">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 85% 20%, rgba(229,9,20,0.28), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(229,9,20,0.12), transparent 60%)",
        }}
      />
      <div className="relative grid grid-cols-[1.1fr_0.9fr] items-center gap-4 sm:gap-8">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
            {locale === "zh" ? "订阅动态" : "Newsletter"}
          </p>
          <h2 className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
            {t.newsletterTitle ??
              (locale === "zh" ? "第一时间掌握平台消息" : "Stay updated")}
          </h2>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">
            {t.newsletterSubtitle ??
              (locale === "zh"
                ? "优惠、VIP、下载与维护通知——直接发到你的邮箱。"
                : "Promotions, VIP notes, download advisories, and maintenance — straight to your inbox.")}
          </p>
        </div>
        <form
          className="flex min-w-0 flex-col gap-2 sm:gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const email = String(data.get("email") ?? "").trim();
            if (!email) return;
            const subject =
              locale === "zh"
                ? "订阅 TPOWER线上博彩 新闻"
                : "Subscribe to TPOWER News";
            const body =
              locale === "zh"
                ? `请为以下邮箱开通新闻订阅：\n${email}`
                : `Please subscribe this address to TPOWER News:\n${email}`;
            window.location.href = `mailto:support@tpower.my?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setSent(true);
          }}
        >
          <Input
            name="email"
            type="email"
            required
            placeholder={
              t.newsletterPlaceholder ??
              dictionary.contact?.form?.email ??
              (locale === "zh" ? "电子邮箱" : "Email address")
            }
            aria-label={
              t.newsletterPlaceholder ??
              (locale === "zh" ? "电子邮箱" : "Email address")
            }
            className="h-10 border-white/10 bg-black/40 text-sm sm:h-11"
          />
          <Button type="submit" className="h-10 sm:h-11">
            {t.newsletterCta ?? (locale === "zh" ? "立即订阅" : "Subscribe")}
          </Button>
          <p className="text-[10px] text-muted-foreground sm:text-xs">
            {sent
              ? locale === "zh"
                ? "已打开邮件草稿，发送即可完成订阅请求。"
                : "Your email draft should open — send it to complete the request."
              : (t.newsletterNote ??
                (locale === "zh"
                  ? "通过官方邮箱提交订阅，无第三方广告列表。"
                  : "Submitted via official email — no third-party ad lists."))}
          </p>
        </form>
      </div>
    </section>
  );
}
