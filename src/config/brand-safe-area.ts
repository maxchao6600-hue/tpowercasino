/**
 * Global Brand Safe Area for TPOWER marketing artwork.
 *
 * Reserve ~5% of width and height on every edge as protected padding.
 * No logo, text, badges, or critical visuals may enter this zone.
 */
export const BRAND_SAFE_RATIO = 0.05;

export const BRAND_SAFE_INSET_CSS = "5%";

export type BrandSafeInsets = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

/** Pixel insets for a given artwork size (≈5% per edge). */
export function brandSafeInsets(
  width: number,
  height: number,
  ratio = BRAND_SAFE_RATIO,
): BrandSafeInsets {
  return {
    left: Math.max(1, Math.round(width * ratio)),
    top: Math.max(1, Math.round(height * ratio)),
    right: Math.max(1, Math.round(width * ratio)),
    bottom: Math.max(1, Math.round(height * ratio)),
  };
}

/** Content box inside the safe area. */
export function brandSafeContentBox(width: number, height: number) {
  const inset = brandSafeInsets(width, height);
  return {
    x: inset.left,
    y: inset.top,
    width: Math.max(1, width - inset.left - inset.right),
    height: Math.max(1, height - inset.top - inset.bottom),
  };
}
