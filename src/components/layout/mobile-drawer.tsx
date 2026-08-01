"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/common/site-link";

type MobileDrawerProps = {
  locale: Locale;
  dictionary: Dictionary;
};

/** Full mobile drawer destinations — every key page, not only primary nav. */
const drawerNavigation: Array<{
  key: string;
  href: string;
  label: Record<Locale, string>;
}> = [
  { key: "home", href: "/", label: { en: "Home", zh: "首页" } },
  { key: "games", href: "/games", label: { en: "Games", zh: "游戏" } },
  {
    key: "providers",
    href: "/providers",
    label: { en: "Providers", zh: "供应商" },
  },
  {
    key: "promotions",
    href: "/promotions",
    label: { en: "Promotions", zh: "优惠" },
  },
  { key: "vip", href: "/vip", label: { en: "VIP", zh: "VIP" } },
  {
    key: "download",
    href: "/download",
    label: { en: "Download", zh: "下载" },
  },
  { key: "news", href: "/news", label: { en: "News", zh: "新闻" } },
  {
    key: "contact",
    href: "/contact",
    label: { en: "Contact", zh: "客服中心" },
  },
  { key: "faq", href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
  { key: "about", href: "/about", label: { en: "About", zh: "关于我们" } },
  {
    key: "affiliate",
    href: "/affiliate",
    label: { en: "Affiliate", zh: "联盟计划" },
  },
  {
    key: "responsible",
    href: "/responsible-gaming",
    label: { en: "Responsible Gaming", zh: "负责任博彩" },
  },
];

/**
 * Full-screen navigation drawer.
 * Portaled to document.body so header backdrop-filter cannot trap `fixed`
 * descendants (that bug collapsed the panel to header height only).
 */
export function MobileDrawer({ locale, dictionary }: MobileDrawerProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const panel =
    open && mounted
      ? createPortal(
          <div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label={dictionary.common.menu}
            className="fixed inset-0 z-[200] flex flex-col bg-[#090909]"
          >
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-border/80 px-5">
              <div className="flex items-center gap-3">
                <Logo href={localePath(locale)} />
                <p className="text-sm font-bold tracking-wide text-foreground">
                  {dictionary.common.brand}
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-2xl"
                aria-label={dictionary.common.close}
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-4 py-5">
              {drawerNavigation.map((item) => (
                <SiteLink
                  key={item.key}
                  href={localePath(locale, item.href === "/" ? "" : item.href)}
                  className="rounded-2xl px-4 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-white/[0.05] hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.label[locale]}
                </SiteLink>
              ))}
            </nav>

            <div className="shrink-0 border-t border-border/80 bg-[#0c0c0c] p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <div className="grid grid-cols-2 gap-3">
                <Button asChild variant="outline" className="h-12 text-sm">
                  <SiteLink
                    href={localePath(locale, "/login")}
                    onClick={() => setOpen(false)}
                  >
                    {dictionary.nav.login}
                  </SiteLink>
                </Button>
                <Button asChild className="h-12 text-sm">
                  <SiteLink
                    href={localePath(locale, "/register")}
                    onClick={() => setOpen(false)}
                  >
                    {dictionary.nav.register}
                  </SiteLink>
                </Button>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-10 w-10 shrink-0 rounded-2xl"
        aria-label={dictionary.common.menu}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>
      {panel}
    </>
  );
}
