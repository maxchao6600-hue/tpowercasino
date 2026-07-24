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
              "mb-10 max-w-3xl md:mb-12 xl:mb-16",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow ? (
              <p className="mb-4 text-small font-semibold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
              </p>
            ) : null}
            {title ? <h2 className="h2-display text-foreground">{title}</h2> : null}
            {description ? (
              <p className="mt-4 text-body-lg text-muted-foreground md:mt-5">
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
