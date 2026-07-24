import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/common/container";
import type { BreadcrumbItem } from "@/types";

type LegalPageProps = {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  sections: Array<{ title: string; body: string }>;
};

export function LegalPage({
  title,
  description,
  breadcrumbs,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageHeader
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        atmosphere="security"
      />
      <section className="section-y">
        <Container className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="h4-display text-foreground">{section.title}</h2>
              <p className="mt-4 text-body text-muted-foreground">
                {section.body}
              </p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
