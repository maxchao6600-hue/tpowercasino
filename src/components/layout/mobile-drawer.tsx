"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/config/site";
import { mainNavigation } from "@/config/navigation";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Button } from "@/components/ui/button";

type MobileDrawerProps = {
  locale: Locale;
  dictionary: Dictionary;
};

/** Hamburger + full-page navigation drawer (mobile / tablet). */
export function MobileDrawer({ locale, dictionary }: MobileDrawerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-10 w-10 shrink-0 rounded-2xl"
        aria-label={open ? dictionary.common.close : dictionary.common.menu}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open ? (
        <>
          <button
            type="button"
            aria-label={dictionary.common.close}
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm transition-opacity duration-[250ms]"
            onClick={() => setOpen(false)}
          />
          <aside
            id="mobile-nav-drawer"
            className="fixed inset-y-0 left-0 z-50 flex w-[min(100%,22rem)] flex-col border-r border-border bg-card shadow-[var(--shadow-lift)]"
            aria-label={dictionary.common.menu}
          >
            <div className="flex h-20 items-center justify-between border-b border-border px-5">
              <p className="text-sm font-bold tracking-wide text-foreground">
                {dictionary.common.brand}
              </p>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-2xl"
                aria-label={dictionary.common.close}
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.key}
                  href={localePath(locale, item.href === "/" ? "" : item.href)}
                  className="rounded-2xl px-4 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-white/[0.04] hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.label[locale]}
                </Link>
              ))}
            </nav>

            <div className="border-t border-border p-4">
              <div className="grid grid-cols-2 gap-3">
                <Button asChild variant="outline" className="h-11">
                  <Link
                    href={localePath(locale, "/login")}
                    onClick={() => setOpen(false)}
                  >
                    {dictionary.nav.login}
                  </Link>
                </Button>
                <Button asChild className="h-11">
                  <Link
                    href={localePath(locale, "/register")}
                    onClick={() => setOpen(false)}
                  >
                    {dictionary.nav.register}
                  </Link>
                </Button>
              </div>
            </div>
          </aside>
        </>
      ) : null}
    </>
  );
}
