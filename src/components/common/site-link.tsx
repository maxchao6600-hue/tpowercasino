import Link from "next/link";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { AUTH_LINK_REL } from "@/config/auth";
import { isHttpUrl, resolveAuthHref } from "@/lib/auth-href";

type SiteLinkProps = ComponentPropsWithoutRef<typeof Link>;

function omitUndefined<T extends Record<string, unknown>>(value: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(value).filter(([, v]) => typeof v !== "undefined"),
  ) as Partial<T>;
}

/**
 * Drop-in Link that rewrites `/login` + `/register` to the official
 * TPOWER auth URL and opens those destinations in a new tab.
 */
export const SiteLink = forwardRef<HTMLAnchorElement, SiteLinkProps>(
  function SiteLink({ href, className, children, ...rest }, ref) {
    const hrefString =
      typeof href === "string"
        ? href
        : href && typeof href === "object" && "pathname" in href
          ? String((href as { pathname?: string }).pathname ?? "")
          : String(href);

    const resolved = resolveAuthHref(hrefString);
    const cleanRest = omitUndefined(rest as Record<string, unknown>);

    if (isHttpUrl(resolved)) {
      const {
        replace: _r,
        scroll: _s,
        prefetch: _p,
        locale: _l,
        ...anchorRest
      } = cleanRest;

      return (
        <a
          ref={ref}
          href={resolved}
          target="_blank"
          rel={AUTH_LINK_REL}
          className={className}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link ref={ref} href={resolved} className={className} {...cleanRest}>
        {children}
      </Link>
    );
  },
);
