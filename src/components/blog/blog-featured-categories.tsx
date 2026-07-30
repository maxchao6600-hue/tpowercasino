import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import { blogFeaturedCategories } from "@/data/blog-page-content";
import { FadeIn } from "@/components/common/fade-in";

type BlogFeaturedCategoriesProps = {
  locale: Locale;
  title: string;
  subtitle: string;
};

export function BlogFeaturedCategories({
  locale,
  title,
  subtitle,
}: BlogFeaturedCategoriesProps) {
  return (
    <section className="space-y-4 sm:space-y-5">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
          {locale === "zh" ? "专题导航" : "Browse by topic"}
        </p>
        <h2 className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          {subtitle}
        </p>
      </div>
      <div className="df-grid-3">
          {blogFeaturedCategories.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.03} className="h-full">
              <Link
                href={`${localePath(locale, "/blog")}?q=${encodeURIComponent(item.query)}#guides`}
                className="group grid h-full grid-cols-[0.9fr_1.1fr] overflow-hidden rounded-[18px] border border-border/80 bg-gradient-to-br from-[#141414] to-[#0c0c0c] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[4px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[22px]"
              >
                <div className="brand-safe-media relative min-h-[100px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title[locale]}
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(7,7,7,0.05), rgba(7,7,7,0.55))",
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center p-3 sm:p-4">
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary sm:text-base">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-muted-foreground sm:text-xs">
                    {item.description[locale]}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
      </div>
    </section>
  );
}
