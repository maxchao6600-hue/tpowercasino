import Image from "next/image";
import { cn } from "@/lib/utils";

type AtmosphereMediaProps = {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  /** Outer frame radius — default matches premium cards */
  rounded?: string;
  aspectClassName?: string;
  priority?: boolean;
  sizes?: string;
  /** Soft red ambient glow behind the frame */
  glow?: boolean;
};

/**
 * Games-page image treatment: photo embedded in the page via
 * dark overlay + radial red wash + edge fade — never a hard rectangle.
 */
export function AtmosphereMedia({
  src,
  alt,
  title,
  className,
  rounded = "rounded-[20px]",
  aspectClassName = "aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 42vw",
  glow = true,
}: AtmosphereMediaProps) {
  return (
    <div className={cn("relative w-full", className)}>
      {glow ? (
        <div
          className="pointer-events-none absolute -inset-5 rounded-[28px] bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.32),transparent_68%)] blur-2xl"
          aria-hidden="true"
        />
      ) : null}

      <div className={cn("relative overflow-hidden", rounded, aspectClassName)}>
        <Image
          src={src}
          alt={alt}
          title={title ?? alt}
          fill
          priority={priority}
          className="object-cover"
          sizes={sizes}
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,7,7,0.08) 0%, rgba(7,7,7,0.22) 45%, rgba(7,7,7,0.78) 100%), radial-gradient(ellipse 70% 65% at 50% 35%, rgba(229,9,20,0.18), transparent 62%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,7,7,0.35) 0%, transparent 22%, transparent 78%, rgba(7,7,7,0.35) 100%)",
          }}
        />
      </div>
    </div>
  );
}
