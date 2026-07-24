import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  animateOnView?: boolean;
};

/** Stable wrapper kept for API compatibility without runtime animation cost. */
export function FadeIn({ children, className }: FadeInProps) {
  return <div className={cn(className)}>{children}</div>;
}
