import type { ReactNode } from "react";
import { AtmosphereHero } from "@/components/common/atmosphere-hero";
import {
  atmosphereImageFor,
  type AtmospherePageKey,
} from "@/config/page-atmosphere";
import type { BreadcrumbItem } from "@/types";

type PageHeaderProps = {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  eyebrow?: string;
  brand?: string;
  /** Atmosphere key or explicit image path */
  atmosphere?: AtmospherePageKey | string;
  imageSrc?: string;
  imageAlt?: string;
  /** Extra content under the hero description (badges, CTAs). */
  actions?: ReactNode;
};

/**
 * Site-wide page hero — Games-page atmosphere benchmark.
 * Replaces the old flat text header across the product.
 */
export function PageHeader({
  title,
  description,
  breadcrumbs,
  eyebrow,
  brand,
  atmosphere,
  imageSrc,
  imageAlt,
  actions,
}: PageHeaderProps) {
  const src = imageSrc ?? atmosphereImageFor(atmosphere);

  return (
    <AtmosphereHero
      title={title}
      description={description}
      breadcrumbs={breadcrumbs}
      eyebrow={eyebrow}
      brand={brand}
      imageSrc={src}
      imageAlt={imageAlt ?? title}
      actions={actions}
      compact
    />
  );
}
