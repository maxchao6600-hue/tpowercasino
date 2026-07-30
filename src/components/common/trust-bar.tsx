import { headers } from "next/headers";
import {
  Gamepad2,
  Gift,
  Headphones,
  ShieldCheck,
  Smartphone,
  Star,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/config/site";
import { isValidLocale } from "@/config/i18n";
import { cn } from "@/lib/utils";

type TrustItem = {
  icon: LucideIcon;
  label: Record<Locale, string>;
};

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: Zap,
    label: { en: "Fast Withdrawals", zh: "快速提现" },
  },
  {
    icon: Wallet,
    label: { en: "Instant Deposit", zh: "即时存款" },
  },
  {
    icon: Headphones,
    label: { en: "24/7 Live Support", zh: "全天在线客服" },
  },
  {
    icon: Gift,
    label: { en: "Daily Promotions", zh: "每日优惠" },
  },
  {
    icon: ShieldCheck,
    label: { en: "Safe & Secure", zh: "安全可靠" },
  },
  {
    icon: Gamepad2,
    label: { en: "13+ Official Providers", zh: "13+ 官方游戏商" },
  },
  {
    icon: Smartphone,
    label: { en: "Android & iOS Supported", zh: "支持 Android 与 iOS" },
  },
  {
    icon: Star,
    label: { en: "Trusted by Malaysia Players", zh: "马来西亚玩家信赖" },
  },
];

type TrustBarProps = {
  locale?: Locale;
  className?: string;
};

function TrustTrack({
  locale,
  ariaHidden,
}: {
  locale: Locale;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex h-full shrink-0 items-center gap-8 pr-8 md:gap-10 md:pr-10"
      aria-hidden={ariaHidden || undefined}
    >
      {TRUST_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label.en}
            className="flex shrink-0 items-center gap-2.5 whitespace-nowrap"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-primary">
              <Icon className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={2.25} />
            </div>
            <span className="text-[12px] font-semibold tracking-wide text-white/85 md:text-[13px]">
              {item.label[locale]}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Premium site-wide trust marquee — sits directly under every page hero.
 * Server component (no client hydration cost).
 */
export async function TrustBar({ locale: localeProp, className }: TrustBarProps) {
  let locale: Locale = localeProp ?? "en";
  if (!localeProp) {
    const headerList = await headers();
    const raw = headerList.get("x-locale") ?? "en";
    locale = isValidLocale(raw) ? raw : "en";
  }

  return (
    <div
      className={cn(
        "group/trust relative w-full max-w-full overflow-x-clip border-y border-border/70 bg-[#0b0b0b]",
        className,
      )}
      style={{ height: 52 }}
      role="region"
      aria-label={locale === "zh" ? "平台信任指标" : "Platform trust highlights"}
      data-qa-scroll="true"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0b0b0b] to-transparent md:w-12"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0b0b0b] to-transparent md:w-12"
        aria-hidden="true"
      />

      <div className="flex h-full w-max items-center animate-marquee-trust group-hover/trust:[animation-play-state:paused]">
        <TrustTrack locale={locale} />
        <TrustTrack locale={locale} ariaHidden />
      </div>
    </div>
  );
}
