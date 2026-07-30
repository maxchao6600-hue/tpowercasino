import { cn } from "@/lib/utils";
import { Container } from "@/components/common/container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionProps) {
  return (
    <section id={id} className={cn("section-y", className)}>
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <div
            className={cn(
              "mb-6 max-w-3xl sm:mb-8 md:mb-12 xl:mb-16",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow ? (
              <p className="mb-3 text-small font-semibold uppercase tracking-[0.18em] text-primary sm:mb-4">
                {eyebrow}
              </p>
            ) : null}
            {title ? <h2 className="h2-display text-foreground">{title}</h2> : null}
            {description ? (
              <p className="mt-3 text-body-lg text-muted-foreground sm:mt-4 md:mt-5">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
