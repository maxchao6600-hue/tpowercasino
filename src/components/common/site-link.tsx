import Link from "next/link";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
} from "react";
import { AUTH_LINK_REL } from "@/config/auth";
import { isHttpUrl, resolveAuthHref } from "@/lib/auth-href";

type SiteLinkProps = ComponentPropsWithoutRef<typeof Link>;

/**
 * Drop-in Link that rewrites `/login` + `/register` to the official
 * TPOWER auth URL and opens those destinations in a new tab.
 */
export const SiteLink = forwardRef<HTMLAnchorElement, SiteLinkProps>(
  function SiteLink(
    { href, className, children, onClick, id, style, title, ...rest },
    ref,
  ) {
    const hrefString =
      typeof href === "string"
        ? href
        : href && typeof href === "object" && "pathname" in href
          ? String((href as { pathname?: string }).pathname ?? "")
          : String(href);

    const resolved = resolveAuthHref(hrefString);

    if (isHttpUrl(resolved)) {
      return (
        <a
          ref={ref}
          href={resolved}
          target="_blank"
          rel={AUTH_LINK_REL}
          className={className}
          onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
          id={id}
          style={style}
          title={title}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        ref={ref}
        href={resolved}
        className={className}
        onClick={onClick}
        id={id}
        style={style}
        title={title}
        {...rest}
      >
        {children}
      </Link>
    );
  },
);
