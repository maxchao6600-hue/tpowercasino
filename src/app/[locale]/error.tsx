"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { isValidLocale, localePath } from "@/config/i18n";
import type { Locale } from "@/config/site";
import { getDictionary } from "@/lib/dictionary";
import { Button } from "@/components/ui/button";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function LocaleError({ reset }: ErrorProps) {
  const params = useParams();
  const raw = typeof params?.locale === "string" ? params.locale : "en";
  const locale: Locale = isValidLocale(raw) ? raw : "en";
  const dictionary = getDictionary(locale);

  return (
    <div className="container-page section-y flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="h2-display text-foreground">
        {dictionary.common.errorTitle}
      </h1>
      <p className="mt-4 max-w-md text-body text-muted-foreground">
        {dictionary.common.errorBody}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button type="button" size="lg" onClick={reset}>
          {dictionary.common.errorRetry}
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href={localePath(locale)}>{dictionary.common.notFoundHome}</Link>
        </Button>
      </div>
    </div>
  );
}
