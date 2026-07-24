"use client";

import { useEffect, useState } from "react";

export function ReadingProgress({ label }: { label: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const article = document.getElementById("news-article-body");
      if (!article) {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
        return;
      }
      const rect = article.getBoundingClientRect();
      const total = article.offsetHeight - window.innerHeight;
      const scrolled = Math.min(
        Math.max(-rect.top, 0),
        Math.max(total, 1),
      );
      setProgress(Math.min(100, (scrolled / Math.max(total, 1)) * 100));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-white/5"
      role="progressbar"
      aria-label={label}
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-[#ff4d57] to-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
