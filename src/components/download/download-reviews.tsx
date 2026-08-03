"use client";

import { Star } from "lucide-react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { downloadReviews } from "@/data/download-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { asDownloadCopy } from "@/components/download/download-copy";

type DownloadReviewsProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function DownloadReviews({ locale, dictionary }: DownloadReviewsProps) {
  const t = asDownloadCopy(dictionary.download);

  return (
    <Section
      id="reviews"
      eyebrow={t.reviewsEyebrow ?? (locale === "zh" ? "玩家评价" : "Reviews")}
      title={
        t.reviewsTitle ??
        (locale === "zh" ? "马来西亚玩家怎么说" : "What Malaysia players say")
      }
      description={
        t.reviewsSubtitle ??
        (locale === "zh"
          ? "来自常见 Android 与 iPhone 机型的安装体验反馈。"
          : "Install experiences from common Android and iPhone devices.")
      }
    >
      <div className="df-row-3">
      <div className="df-grid-3">
          {downloadReviews.map((review, index) => (
            <FadeIn key={review.id} delay={index * 0.03} className="h-full">
              <article className="group flex h-full flex-col rounded-[20px] border border-border/80 bg-gradient-to-br from-[#161616] via-[#0f0f0f] to-[#1a0a0c] p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[0_16px_48px_rgba(229,9,20,0.14)] sm:rounded-[24px] sm:p-5 md:p-6">
                <div className="flex gap-0.5" aria-label={`${review.rating} / 5`}>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={
                        starIndex < review.rating
                          ? "h-3.5 w-3.5 fill-primary text-primary sm:h-4 sm:w-4"
                          : "h-3.5 w-3.5 text-white/20 sm:h-4 sm:w-4"
                      }
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-[11px] leading-relaxed text-white/80 sm:mt-4 sm:text-xs md:text-sm">
                  “{review.quote[locale]}”
                </blockquote>
                <footer className="mt-4 border-t border-white/10 pt-3">
                  <cite className="not-italic">
                    <span className="block text-sm font-bold text-white">
                      {review.name}
                    </span>
                    <span className="mt-0.5 block text-[11px] text-white/55 sm:text-xs">
                      {review.device[locale]}
                    </span>
                  </cite>
                </footer>
              </article>
            </FadeIn>
          ))}
      </div>
      </div>
    </Section>
  );
}
