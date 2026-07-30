import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import { defaultLocale, isValidLocale, localePath } from "@/config/i18n";
import type { Locale } from "@/config/site";
import { getDictionary } from "@/lib/dictionary";

export default async function RootNotFound() {
  const headerList = await headers();
  const raw = headerList.get("x-locale") ?? defaultLocale;
  const locale: Locale = isValidLocale(raw) ? raw : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-atmosphere px-6 py-16 text-center">
      <div className="relative mb-8 aspect-[16/10] w-full max-w-lg">
        <Image
          src="/images/404.webp"
          alt=""
          fill
          className="object-contain"
          sizes="512px"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        {dictionary.common.notFoundTitle}
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        {dictionary.common.notFoundBody}
      </p>
      <div className="df-actions mt-8">
        <Button asChild size="lg">
          <Link href={localePath(locale)}>{dictionary.common.notFoundHome}</Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href={localePath(locale, "/blog")}>
            {dictionary.common.notFoundBlog}
          </Link>
        </Button>
      </div>
    </div>
  );
}
