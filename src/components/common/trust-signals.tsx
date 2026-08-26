import {
  Download,
  Headphones,
  HeartHandshake,
  Lock,
  ShieldCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import { Container } from "@/components/common/container";
import { SiteLink } from "@/components/common/site-link";
import { cn } from "@/lib/utils";

type TrustSignal = {
  icon: LucideIcon;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
  href?: string;
};

const SIGNALS: TrustSignal[] = [
  {
    icon: Download,
    title: { en: "Official APK download", zh: "官方 APK 下载" },
    body: {
      en: "Install guidance stays on documented TPOWER download paths — not mirrored chat files.",
      zh: "安装指引只走成文的 TPOWER 下载路径，不依赖聊天里的镜像文件。",
    },
    href: "/download",
  },
  {
    icon: Lock,
    title: { en: "Secure login", zh: "安全登录" },
    body: {
      en: "Use official bookmarks and never share passwords — even with people claiming to be support.",
      zh: "只用官方收藏入口，永不分享密码——即使对方自称客服。",
    },
    href: "/login",
  },
  {
    icon: ShieldCheck,
    title: { en: "Encrypted connection", zh: "加密连接" },
    body: {
      en: "Sessions run over HTTPS with account hygiene guidance on the security hub.",
      zh: "会话走 HTTPS，账户卫生说明见平台安全专页。",
    },
    href: "/security",
  },
  {
    icon: Wallet,
    title: { en: "Malaysia-friendly payments", zh: "大马友好支付" },
    body: {
      en: "Local rails and readable cashier states documented for Malaysia players.",
      zh: "面向马来西亚玩家的本地通道与可读收银台状态。",
    },
    href: "/payment-methods",
  },
  {
    icon: HeartHandshake,
    title: { en: "Responsible Gaming", zh: "负责任博彩" },
    body: {
      en: "Adult-only access and control tools remain first-class, not buried fine print.",
      zh: "仅限成年与控制工具是一等能力，不是藏起来的小字。",
    },
    href: "/responsible-gaming",
  },
  {
    icon: Headphones,
    title: { en: "24/7 support orientation", zh: "全天客服导向" },
    body: {
      en: "WhatsApp, Telegram and desk channels with bilingual help — passwords stay yours.",
      zh: "WhatsApp、Telegram 与台席通道提供双语协助——密码只属于你。",
    },
    href: "/contact",
  },
];

const copy = {
  title: {
    en: "Trust signals that stay checkable",
    zh: "可核对的信任信号",
  },
  subtitle: {
    en: "No fabricated licenses or awards — only operational habits Malaysia players can verify on official pages.",
    zh: "不编造牌照或奖项——只写马来西亚玩家能在官方页面核对的运营习惯。",
  },
};

type TrustSignalsProps = {
  locale: Locale;
  className?: string;
};

export function TrustSignals({ locale, className }: TrustSignalsProps) {
  return (
    <section
      className={cn("section-y", className)}
      aria-labelledby="trust-signals-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="trust-signals-heading"
            className="h2-display text-foreground"
          >
            {copy.title[locale]}
          </h2>
          <p className="mt-4 text-body text-muted-foreground">
            {copy.subtitle[locale]}
          </p>
        </div>

        <div className="mt-10 overflow-x-auto pb-2">
          <div className="grid min-w-[720px] grid-cols-3 gap-3 md:min-w-0 md:gap-5">
            {SIGNALS.map((signal) => {
              const Icon = signal.icon;
              const inner = (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">
                    {signal.title[locale]}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {signal.body[locale]}
                  </p>
                </>
              );

              const classNameCard =
                "block h-full rounded-[20px] border border-border bg-card p-5 shadow-[var(--shadow-soft)]";

              if (!signal.href) {
                return (
                  <article key={signal.title.en} className={classNameCard}>
                    {inner}
                  </article>
                );
              }

              return (
                <SiteLink
                  key={signal.title.en}
                  href={localePath(locale, signal.href)}
                  className={`${classNameCard} transition-colors hover:border-primary/35`}
                >
                  {inner}
                </SiteLink>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
