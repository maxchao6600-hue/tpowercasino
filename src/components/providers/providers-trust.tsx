import { ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";

type ProvidersTrustProps = {
  dictionary: Dictionary;
};

export function ProvidersTrust({ dictionary }: ProvidersTrustProps) {
  const t = dictionary.providers;

  return (
    <section
      className="section-y border-t border-border bg-gradient-to-b from-[#0c0c0c] to-[#111]"
      aria-labelledby="providers-trust-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            {t.trustEyebrow}
          </p>
          <h2
            id="providers-trust-heading"
            className="h2-display mt-3 text-foreground"
          >
            {t.trustTitle}
          </h2>
          <p className="text-lead mt-4 text-muted-foreground">
            {t.trustSubtitle}
          </p>
        </div>

        <div className="df-row-3 mt-12">
          <div className="df-grid-3">
            {t.trustPoints.map((point, index) => (
              <FadeIn key={point.title} delay={index * 0.05}>
                <article className="h-full rounded-[22px] border border-border/80 bg-card/70 p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[var(--shadow-lift)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {point.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
