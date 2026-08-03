import { Suspense } from "react";
import Script from "next/script";
import { MetaPixelRouteTracker } from "@/components/analytics/meta-pixel-route-tracker";

/** Official Meta Pixel ID — keep in sync with noscript fallback. */
export const META_PIXEL_ID = "1360401436284672";

/**
 * Global Meta Pixel (once per document).
 * - next/script afterInteractive for the official bootstrap
 * - noscript img fallback for crawlers / JS-disabled
 * - Route tracker fires PageView on App Router navigations without re-init
 */
export function MetaPixel() {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
`}</Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      <Suspense fallback={null}>
        <MetaPixelRouteTracker />
      </Suspense>
    </>
  );
}
