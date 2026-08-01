import { siteConfig } from "@/config/site";

/** Official TPOWER account destinations (live signup / login). */
export const OFFICIAL_REGISTER_URL = siteConfig.auth.registerUrl;

/**
 * Temporary: official login URL not provided yet — use the same signup URL.
 * Swap this when a dedicated login URL is available.
 */
export const OFFICIAL_LOGIN_URL = siteConfig.auth.loginUrl;

export const OFFICIAL_QR_IMAGE = "/images/qr/official-register-qr.png" as const;

export const AUTH_LINK_REL = "noopener noreferrer" as const;
