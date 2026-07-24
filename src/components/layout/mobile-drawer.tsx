"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/config/site";
import { mainNavigation } from "@/config/navigation";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

type MobileDrawerProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function MobileDrawer({ locale, dictionary }: MobileDrawerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={open ? dictionary.common.close : dictionary.common.menu}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open ? (
        <>
          <button
            type="button"
            aria-label={dictionary.common.close}
            className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm transition-opacity duration-[250ms]"
            onClick={() => setOpen(false)}
          />
          <aside
            className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col border-l border-border bg-card shadow-[var(--shadow-soft)]"
            aria-label={dictionary.common.menu}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <p className="text-sm font-bold text-foreground">
                {dictionary.common.brand}
              </p>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={dictionary.common.close}
                onClick={() => setOpen(false)}
              >
                <X />
              </Button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.key}
                  href={localePath(locale, item.href === "/" ? "" : item.href)}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label[locale]}
                </Link>
              ))}
            </nav>

            <div className="space-y-3 border-t border-border p-4">
              <LanguageSwitcher
                locale={locale}
                label={dictionary.common.language}
              />
              <div className="grid grid-cols-2 gap-2">
                <Button asChild variant="outline">
                  <Link
                    href={localePath(locale, "/login")}
                    onClick={() => setOpen(false)}
                  >
                    {dictionary.nav.login}
                  </Link>
                </Button>
                <Button asChild>
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
    </div>
  );
}
