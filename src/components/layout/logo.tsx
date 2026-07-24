import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  href: string;
  className?: string;
};

/** Official TPOWER brand mark only — no HTML wordmark, no rebuilt text logo. */
export function Logo({ href, className }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex shrink-0 items-center self-center",
        className,
      )}
      aria-label="TPOWER Online Casino"
    >
      <Image
        src="/logo/tpower-logo.png"
        alt="TPOWER Online Casino"
        width={48}
        height={48}
        className="h-10 w-10 object-contain md:h-12 md:w-12"
        priority
      />
    </Link>
  );
}
