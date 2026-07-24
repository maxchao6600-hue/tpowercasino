"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Building2,
  CheckCircle2,
  CircleHelp,
  Crown,
  Download,
  Gift,
  Handshake,
  HeartHandshake,
  Lock,
  LogIn,
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Search,
  ShieldCheck,
  UserPlus,
  Wallet,
  Zap,
} from "lucide-react";
import type { Locale } from "@/config/site";
import { siteConfig } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import {
  supportCategories,
  supportFaqs,
  supportGuideCards,
  supportHubCards,
  supportMethodCards,
  supportQuickChips,
  supportSearchCatalog,
  supportStatusItems,
  supportTimeline,
  supportTrustBadges,
  supportTrustCards,
  type SupportCategoryId,
} from "@/data/support-center";
import { FadeIn } from "@/components/common/fade-in";
import { PremiumCta } from "@/components/common/premium-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type SupportCenterProps = {
  locale: Locale;
  dictionary: Dictionary;
  hideFinalCta?: boolean;
};

const iconMap = {
  "log-in": LogIn,
  "user-plus": UserPlus,
  wallet: Wallet,
  banknote: Banknote,
  gift: Gift,
  download: Download,
  crown: Crown,
  handshake: Handshake,
  "messages-square": MessagesSquare,
  "message-circle": MessageCircle,
  mail: Mail,
  "circle-help": CircleHelp,
  "shield-check": ShieldCheck,
  lock: Lock,
  "map-pin": MapPin,
  "heart-handshake": HeartHandshake,
  zap: Zap,
  "building-2": Building2,
} as const;

function SupportIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name as keyof typeof iconMap] ?? CircleHelp;
  return <Icon className={className} aria-hidden="true" />;
}

export function SupportCenter({
  locale,
  dictionary,
  hideFinalCta = false,
}: SupportCenterProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<SupportCategoryId>("other");
  const [openFaq, setOpenFaq] = useState<string | undefined>(undefined);
  const [hint, setHint] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return supportSearchCatalog
      .filter((item) => {
        const hay = [
          item.title.en,
          item.title.zh,
          item.description.en,
          item.description.zh,
          ...item.keywords,
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      })
      .slice(0, 6);
  }, [query]);

  function focusSupport(next: SupportCategoryId, faqId?: string) {
    setCategory(next);
    if (faqId) setOpenFaq(faqId);
    requestAnimationFrame(() => {
      document
        .getElementById(faqId ?? "support-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category") as SupportCategoryId | null;
    if (cat && supportCategories.some((c) => c.id === cat)) {
      setCategory(cat);
    }
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    if (!form.reportValidity() || !consent) {
      event.preventDefault();
      if (!consent) {
        setHint(
          locale === "zh"
            ? "请先勾选同意以官方邮箱发送支持请求。"
            : "Please confirm consent before sending your official support request.",
        );
      }
      return;
    }
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const language = String(data.get("language") ?? "").trim();
    const categoryLabel =
      supportCategories.find((c) => c.id === category)?.label[locale] ??
      category;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Category: ${categoryLabel}`,
      `Preferred language: ${language}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(`[TPOWER Support] ${subject}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setHint(
      locale === "zh"
        ? "应会打开邮件草稿发往官方客服。请发送该邮件。此表单不会提交到服务器。"
        : "Your email draft should open to official support. Send that email — this form does not submit to a server.",
    );
  }

  const relatedGuides = supportHubCards
    .filter((card) => card.id === category && card.guideHref)
    .map((card) => card.guideHref!)
    .concat(
      supportGuideCards
        .filter((g) =>
          category === "login"
            ? g.slug.includes("login")
            : category === "register"
              ? g.slug.includes("register")
              : category === "deposit"
                ? g.slug.includes("deposit")
                : category === "withdrawal"
                  ? g.slug.includes("withdraw")
                  : category === "download"
                    ? g.slug.includes("download")
                    : category === "vip"
                      ? g.slug.includes("vip")
                      : true,
        )
        .map((g) => `/blog/${g.slug}`),
    )
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .slice(0, 3);

  return (
    <div className="space-y-12 sm:space-y-14 md:space-y-16">
      {/* Search */}
      <section className="relative overflow-hidden rounded-[22px] border border-border/80 bg-gradient-to-br from-[#161010] to-[#0c0c0c] p-4 shadow-[var(--shadow-soft)] sm:rounded-[28px] sm:p-6 md:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
          {locale === "zh" ? "支持搜索" : "Support search"}
        </p>
        <h2 className="mt-2 text-lg font-bold text-foreground sm:text-2xl">
          {locale === "zh"
            ? "搜索 TPOWER 帮助主题"
            : "Search TPOWER help topics"}
        </h2>
        <div className="relative mt-4">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              locale === "zh"
                ? "搜索 TPOWER登录、存款、提现、VIP..."
                : "Search TPOWER Login, Deposit, Withdrawal, VIP..."
            }
            className="h-12 border-white/10 bg-black/40 pl-10 text-sm sm:h-14 sm:text-base"
            aria-label={locale === "zh" ? "支持搜索" : "Support search"}
          />
          {suggestions.length > 0 ? (
            <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-[16px] border border-border/80 bg-[#101010] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              {suggestions.map((item) => (
                <Link
                  key={item.id}
                  href={localePath(locale, item.href)}
                  className="flex flex-col gap-0.5 border-b border-white/5 px-4 py-3 last:border-0 hover:bg-white/5"
                  onClick={() => {
                    if (item.category) setCategory(item.category);
                  }}
                >
                  <span className="text-sm font-semibold text-foreground">
                    {item.title[locale]}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {item.description[locale]}
                  </span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {supportQuickChips.map((chip) => (
            <button
              key={chip.query}
              type="button"
              onClick={() => {
                setQuery(chip.label[locale]);
                if (chip.category) focusSupport(chip.category);
              }}
              className="rounded-full border border-border/80 bg-[#121212] px-3 py-1.5 text-[11px] font-semibold text-muted-foreground transition-all hover:-translate-y-[2px] hover:border-primary/40 hover:text-foreground sm:text-sm"
            >
              {chip.label[locale]}
            </button>
          ))}
        </div>
      </section>

      {/* Quick Support Hub */}
      <section>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
          {locale === "zh" ? "快速支持枢纽" : "Quick Support Hub"}
        </p>
        <h2 className="mt-2 text-lg font-bold text-foreground sm:text-2xl">
          {locale === "zh"
            ? "选择你的 TPOWER 问题类型"
            : "Choose your TPOWER issue type"}
        </h2>
        <div className="mt-5 overflow-x-auto pb-1">
          <div className="grid min-w-[920px] grid-cols-4 gap-3 sm:gap-4 md:min-w-0">
            {supportHubCards.map((card, index) => (
              <FadeIn key={card.id} delay={index * 0.03}>
                <button
                  type="button"
                  onClick={() => focusSupport(card.id, card.faqId)}
                  className="group flex h-full flex-col rounded-[18px] border border-border/80 bg-gradient-to-br from-[#141414] to-[#0c0c0c] p-4 text-left shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/40 hover:shadow-[0_16px_48px_rgba(229,9,20,0.16)] sm:rounded-[22px] sm:p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                    <SupportIcon name={card.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-foreground sm:text-base">
                    {card.title[locale]}
                  </h3>
                  <p className="mt-1.5 flex-1 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                    {card.description[locale]}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-primary sm:text-sm">
                    {locale === "zh" ? "继续" : "Continue"}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Status */}
      <section className="rounded-[22px] border border-border/80 bg-[#0d1410] p-5 sm:rounded-[28px] sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400 sm:text-xs">
              {locale === "zh" ? "平台状态" : "Platform status"}
            </p>
            <h2 className="mt-2 text-lg font-bold text-foreground sm:text-2xl">
              {locale === "zh"
                ? "TPOWER 系统运行状态"
                : "TPOWER system status"}
            </h2>
          </div>
          <p className="text-[11px] text-muted-foreground sm:text-sm">
            {locale === "zh" ? "最近更新：今天" : "Last Updated: Today"}
          </p>
        </div>
        <div className="mt-5 overflow-x-auto">
          <div className="grid min-w-[720px] grid-cols-5 gap-3 md:min-w-0">
            {supportStatusItems.map((item) => (
              <div
                key={item.id}
                className="rounded-[16px] border border-emerald-500/20 bg-black/25 p-3 sm:p-4"
              >
                <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                  {item.label[locale]}
                </p>
                <p className="mt-2 text-[11px] font-semibold text-emerald-300/90 sm:text-xs">
                  {item.status[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
          {locale === "zh" ? "联系方式" : "Contact methods"}
        </p>
        <h2 className="mt-2 text-lg font-bold text-foreground sm:text-2xl">
          {locale === "zh"
            ? "官方 TPOWER 客服通道"
            : "Official TPOWER support channels"}
        </h2>
        <div className="mt-5 overflow-x-auto pb-1">
          <div className="grid min-w-[880px] grid-cols-4 gap-3 sm:gap-4 md:min-w-0">
            {supportMethodCards.map((card, index) => {
              const href =
                card.href === "whatsapp"
                  ? siteConfig.social.whatsapp
                  : card.href === "email"
                    ? `mailto:${siteConfig.supportEmail}`
                    : localePath(locale, "/faq");
              const external =
                card.href === "whatsapp" || card.href === "email";
              return (
                <FadeIn key={card.id} delay={index * 0.03}>
                  <article className="flex h-full flex-col rounded-[18px] border border-border/80 bg-gradient-to-br from-[#141414] to-[#0c0c0c] p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[24px] sm:p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <SupportIcon name={card.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-foreground sm:text-lg">
                      {card.title[locale]}
                    </h3>
                    <dl className="mt-3 space-y-1.5 text-[11px] sm:text-xs">
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted-foreground">
                          {locale === "zh" ? "时段" : "Availability"}
                        </dt>
                        <dd className="font-semibold text-foreground">
                          {card.availability[locale]}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted-foreground">
                          {locale === "zh" ? "响应" : "Response"}
                        </dt>
                        <dd className="font-semibold text-foreground">
                          {card.response[locale]}
                        </dd>
                      </div>
                    </dl>
                    <p className="mt-3 flex-1 text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
                      {card.description[locale]}
                    </p>
                    <Button asChild className="mt-4 w-full" size="sm">
                      {external ? (
                        <a
                          href={href}
                          target={card.href === "whatsapp" ? "_blank" : undefined}
                          rel={
                            card.href === "whatsapp"
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {card.cta[locale]}
                        </a>
                      ) : (
                        <Link href={href}>{card.cta[locale]}</Link>
                      )}
                    </Button>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Company */}
      <section
        id="support-form"
        className="grid grid-cols-[0.95fr_1.05fr] items-start gap-4 sm:gap-6 lg:gap-8"
      >
        <aside className="rounded-[22px] border border-border/80 bg-gradient-to-b from-[#141414] to-[#0d0d0d] p-4 shadow-[var(--shadow-soft)] sm:rounded-[28px] sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs">
            {locale === "zh" ? "公司信息" : "Company information"}
          </p>
          <h2 className="mt-2 text-base font-bold text-foreground sm:text-xl">
            {locale === "zh"
              ? "TPOWER 马来西亚支持办公室"
              : "TPOWER Malaysia support office"}
          </h2>
          <ul className="mt-5 space-y-4 text-[11px] sm:text-sm">
            {[
              {
                icon: MapPin,
                label: locale === "zh" ? "马来西亚办公室" : "Malaysia Office",
                value: siteConfig.address[locale],
              },
              {
                icon: MessagesSquare,
                label: locale === "zh" ? "营业时间" : "Business Hours",
                value:
                  locale === "zh"
                    ? "每日 10:00–24:00（MYT）"
                    : "Daily 10:00–24:00 (MYT)",
              },
              {
                icon: Mail,
                label: locale === "zh" ? "支持邮箱" : "Support Email",
                value: siteConfig.supportEmail,
              },
              {
                icon: MessageCircle,
                label: locale === "zh" ? "支持电话" : "Support Phone",
                value: siteConfig.phone,
              },
              {
                icon: CircleHelp,
                label: locale === "zh" ? "语言" : "Languages",
                value: locale === "zh" ? "中文 / English" : "English / 中文",
              },
              {
                icon: Zap,
                label: locale === "zh" ? "响应时间" : "Response Time",
                value:
                  locale === "zh"
                    ? "聊天约 5–15 分钟；邮件数小时内"
                    : "Chat ~5–15 min; email within hours",
              },
              {
                icon: Lock,
                label: locale === "zh" ? "安全提示" : "Security Notice",
                value:
                  locale === "zh"
                    ? "官方客服不会索取密码、OTP 或神秘 APK。"
                    : "Official agents never ask for passwords, OTPs, or mystery APKs.",
              },
            ].map((row) => (
              <li key={row.label} className="flex gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <row.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{row.label}</p>
                  <p className="mt-0.5 text-muted-foreground">{row.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <div className="rounded-[22px] border border-border/80 bg-gradient-to-br from-[#161010] to-[#0c0c0c] p-4 shadow-[var(--shadow-soft)] sm:rounded-[28px] sm:p-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs">
            {locale === "zh" ? "官方支持表单" : "Official support form"}
          </p>
          <h2 className="mt-2 text-base font-bold text-foreground sm:text-xl">
            {locale === "zh"
              ? "联系官方 TPOWER 客服"
              : "Contact official TPOWER support"}
          </h2>
          <p className="mt-2 text-[11px] text-muted-foreground sm:text-sm">
            {locale === "zh"
              ? "填写越清楚，马来西亚团队越快给你可执行的下一步。"
              : "Clear details help the Malaysia team reply with actionable next steps."}
          </p>

          <form onSubmit={onSubmit} className="mt-5 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="name">
                  {locale === "zh" ? "全名" : "Full Name"}
                </Label>
                <Input id="name" name="name" autoComplete="name" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">
                  {locale === "zh" ? "电子邮箱" : "Email"}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="phone">
                  {locale === "zh" ? "手机号码" : "Phone Number"}
                </Label>
                <Input id="phone" name="phone" autoComplete="tel" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="category">
                  {locale === "zh" ? "支持分类" : "Support Category"}
                </Label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value as SupportCategoryId)
                  }
                  className="flex h-10 w-full rounded-2xl border border-input bg-background px-3 text-sm text-foreground"
                >
                  {supportCategories.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label[locale]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="subject">
                  {locale === "zh" ? "主题" : "Subject"}
                </Label>
                <Input id="subject" name="subject" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="language">
                  {locale === "zh" ? "偏好语言" : "Preferred Language"}
                </Label>
                <select
                  id="language"
                  name="language"
                  defaultValue={locale === "zh" ? "Chinese" : "English"}
                  className="flex h-10 w-full rounded-2xl border border-input bg-background px-3 text-sm text-foreground"
                >
                  <option value="English">English</option>
                  <option value="Chinese">中文</option>
                </select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">
                {locale === "zh" ? "详细说明" : "Message"}
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                className="min-h-[120px]"
                placeholder={
                  locale === "zh"
                    ? "请说明发生时间、机型、以及你已尝试的步骤…"
                    : "Include timing, device model, and steps already tried…"
                }
              />
            </div>
            <div className="rounded-[14px] border border-dashed border-white/15 bg-black/20 px-3 py-3 text-[11px] text-muted-foreground sm:text-xs">
              {locale === "zh"
                ? "验证码占位：正式上线前将接入人机验证，降低垃圾请求。"
                : "Captcha placeholder: human verification will be wired before production spam protection."}
            </div>
            <label className="flex items-start gap-2 text-[11px] text-muted-foreground sm:text-xs">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5"
              />
              <span>
                {locale === "zh"
                  ? "我同意通过官方邮箱发送此支持请求，并确认未在表单中填写密码或 OTP。"
                  : "I agree to send this support request via official email and confirm I have not included passwords or OTPs."}
              </span>
            </label>
            <Button type="submit" size="lg" className="w-full">
              {dictionary.common.sendMessage}
            </Button>
            <div className="space-y-1 text-[10px] text-muted-foreground sm:text-xs">
              <p>
                {locale === "zh"
                  ? "预计回复：聊天 5–15 分钟；邮件通常数小时内。"
                  : "Estimated reply: chat 5–15 min; email usually within hours."}
              </p>
              <p>
                {locale === "zh"
                  ? "支持时段：每日 10:00–24:00（MYT）。"
                  : "Support hours: daily 10:00–24:00 (MYT)."}
              </p>
              <p>
                {locale === "zh"
                  ? "安全提示：切勿向主动私信的“客服”提供远程控制或安装包。"
                  : "Security notice: never grant remote control or install packages from cold outreach “agents.”"}
              </p>
            </div>
            {relatedGuides.length > 0 ? (
              <div className="rounded-[14px] border border-primary/20 bg-primary/5 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                  {locale === "zh" ? "推荐攻略" : "Recommended guides"}
                </p>
                <ul className="mt-2 space-y-1">
                  {relatedGuides.map((href) => {
                    const guide = supportGuideCards.find(
                      (g) => `/blog/${g.slug}` === href || g.slug === href.replace("/blog/", ""),
                    );
                    return (
                      <li key={href}>
                        <Link
                          href={localePath(locale, href)}
                          className="text-[11px] font-semibold text-foreground hover:text-primary sm:text-xs"
                        >
                          →{" "}
                          {guide?.title[locale] ??
                            href.replace("/blog/", "").replaceAll("-", " ")}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
            {hint ? (
              <p className="text-sm text-muted-foreground" role="status">
                {hint}
              </p>
            ) : null}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="support-faq">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
              {locale === "zh" ? "常见问题预览" : "FAQ preview"}
            </p>
            <h2 className="mt-2 text-lg font-bold text-foreground sm:text-2xl">
              {locale === "zh"
                ? "TPOWER 支持常见问题"
                : "TPOWER support FAQ"}
            </h2>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href={localePath(locale, "/faq")}>
              {locale === "zh" ? "查看全部 FAQ" : "View All FAQ"}
            </Link>
          </Button>
        </div>
        <div className="mt-5 rounded-[22px] border border-border/80 bg-[#101010] p-2 sm:rounded-[28px] sm:p-4">
          <Accordion
            type="single"
            collapsible
            value={openFaq}
            onValueChange={setOpenFaq}
          >
            {supportFaqs.map((item) => (
              <AccordionItem key={item.id} value={item.id} id={item.id}>
                <AccordionTrigger className="px-3 text-left text-sm sm:px-4 sm:text-base">
                  {item.question[locale]}
                </AccordionTrigger>
                <AccordionContent className="px-3 text-muted-foreground sm:px-4">
                  {item.answer[locale]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Knowledge Center guides */}
      <section>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
          {locale === "zh" ? "知识中心" : "Knowledge Center"}
        </p>
        <h2 className="mt-2 text-lg font-bold text-foreground sm:text-2xl">
          {locale === "zh"
            ? "热门 TPOWER 攻略"
            : "Popular TPOWER Guides"}
        </h2>
        <div className="mt-5 overflow-x-auto pb-1">
          <div className="grid min-w-[920px] grid-cols-3 gap-3 sm:gap-4 md:min-w-0 lg:grid-cols-3">
            {supportGuideCards.map((guide, index) => (
              <FadeIn key={guide.slug} delay={index * 0.03}>
                <Link
                  href={localePath(locale, `/blog/${guide.slug}`)}
                  className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-border/80 bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[22px]"
                >
                  <div className="brand-safe-media relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={guide.image}
                      alt={guide.title[locale]}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      aria-hidden="true"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(7,7,7,0.05), rgba(7,7,7,0.55))",
                      }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary sm:text-base">
                      {guide.title[locale]}
                    </h3>
                    <p className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
                      {guide.description[locale]}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
          {locale === "zh" ? "支持流程" : "Support timeline"}
        </p>
        <h2 className="mt-2 text-lg font-bold text-foreground sm:text-2xl">
          {locale === "zh"
            ? "从提交到解决的四步"
            : "Four steps from request to resolution"}
        </h2>
        <ol className="mt-6 grid grid-cols-4 gap-3 sm:gap-4">
          {supportTimeline.map((step, index) => (
            <li key={step.id} className="relative">
              <div className="rounded-[18px] border border-border/80 bg-gradient-to-br from-[#141414] to-[#0c0c0c] p-3 shadow-[var(--shadow-soft)] sm:rounded-[22px] sm:p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-xs font-bold text-primary">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-sm font-bold text-foreground sm:text-base">
                  {step.title[locale]}
                </h3>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  {step.body[locale]}
                </p>
              </div>
              {index < supportTimeline.length - 1 ? (
                <div
                  className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-primary/40 sm:block lg:w-6"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      {/* Trust */}
      <section>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
          {locale === "zh" ? "信任与安全" : "Trust & safety"}
        </p>
        <h2 className="mt-2 text-lg font-bold text-foreground sm:text-2xl">
          {locale === "zh"
            ? "为什么选择官方 TPOWER 支持"
            : "Why use official TPOWER support"}
        </h2>
        <div className="mt-5 overflow-x-auto pb-1">
          <div className="grid min-w-[900px] grid-cols-3 gap-3 sm:gap-4 md:min-w-0">
            {supportTrustCards.map((card, index) => (
              <FadeIn key={card.id} delay={index * 0.03}>
                <article className="rounded-[18px] border border-border/80 bg-[#101010] p-4 shadow-[var(--shadow-soft)] sm:rounded-[22px] sm:p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <SupportIcon name={card.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-foreground sm:text-base">
                    {card.title[locale]}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
                    {card.body[locale]}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {hideFinalCta ? null : (
      <PremiumCta
        eyebrow={dictionary.common.brand}
        title={
          locale === "zh" ? "还需要帮助吗？" : "Still Need Help?"
        }
        description={
          locale === "zh"
            ? "直接与官方 TPOWER 支持团队沟通——或先完成注册与官方 APP 下载。"
            : "Speak directly with the official TPOWER support team — or continue via Register and Download App."
        }
        imageSrc="/images/cta/tpower-join-cta.webp"
        imageAlt={
          locale === "zh"
            ? "联系官方 TPOWER 客服"
            : "Contact official TPOWER support"
        }
        actions={[
          {
            href: siteConfig.social.whatsapp,
            label: locale === "zh" ? "在线客服" : "Live Chat",
          },
          {
            href: localePath(locale, "/register"),
            label: dictionary.nav.register,
            variant: "outline",
          },
          {
            href: localePath(locale, "/download"),
            label: dictionary.nav.download,
            variant: "secondary",
          },
        ]}
      />
      )}
    </div>
  );
}

export function SupportHeroBadges({ locale }: { locale: Locale }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
      {supportTrustBadges.map((badge) => (
        <Badge
          key={badge.en}
          variant="outline"
          className="gap-1.5 border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] text-foreground sm:text-xs"
        >
          <CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          {badge[locale]}
        </Badge>
      ))}
    </div>
  );
}
