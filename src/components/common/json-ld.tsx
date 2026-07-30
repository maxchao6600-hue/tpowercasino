export type JsonLdObject = Record<string, unknown>;

type JsonLdProps = {
  data: JsonLdObject | JsonLdObject[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
