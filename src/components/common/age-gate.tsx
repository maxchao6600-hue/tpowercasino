"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/config/site";
import { siteConfig } from "@/config/site";
import { localePath } from "@/config/i18n";
import { Button } from "@/components/ui/button";

const COOKIE_NAME = "tpower_age_confirmed";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

type AgeGateProps = {
  locale: Locale;
  labels: {
    title: string;
    body: string;
    confirm: string;
    deny: string;
  };
};

function hasAgeCookie(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie
    .split(";")
    .some((part) => part.trim().startsWith(`${COOKIE_NAME}=1`));
}

export function AgeGate({ locale, labels }: AgeGateProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!hasAgeCookie());
  }, []);

  function confirm() {
    document.cookie = `${COOKIE_NAME}=1; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div className="w-full max-w-md rounded-[24px] border border-border bg-card p-8 shadow-[var(--shadow-lift)]">
        <h2
          id="age-gate-title"
          className="text-2xl font-bold tracking-tight text-foreground"
        >
          {labels.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {labels.body}
        </p>
        <div className="df-actions mt-8">
          <Button type="button" size="lg" className="flex-1" onClick={confirm}>
            {labels.confirm}
          </Button>
          <Button asChild type="button" size="lg" variant="outline" className="flex-1">
            <Link href={localePath(locale, siteConfig.legal.responsibleGamingUrl)}>
              {labels.deny}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
