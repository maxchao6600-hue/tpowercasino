/**
 * Minimal TPOWER API helpers — shared transport only, NOT extraction logic.
 */
import CryptoJS from "crypto-js";

const API = process.env.TPOWER_API_URL || "https://d5y9.apit.5t1p6.com/";
const ORIGIN = process.env.TPOWER_ORIGIN || "https://www.tpower3.com";
const DOMAIN = process.env.TPOWER_DOMAIN || "www.tpower3.com";

const KEYS = {
  md5: "&W7e1vRWRH02jZIB",
  aes: "M53B?gQhkRtSeQZ^",
  iv: "4339794120398193",
};

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function encrypt(plain) {
  const key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(KEYS.aes).toString());
  const iv = CryptoJS.enc.Utf8.parse(KEYS.iv);
  return CryptoJS.AES.encrypt(String(plain), key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
}

export async function apiPost(endpoint, payload, locale = "en") {
  const params = encrypt(
    payload == null || payload === "" ? "" : JSON.stringify(payload),
  );
  const key = CryptoJS.MD5(params + KEYS.md5).toString();
  const res = await fetch(new URL(endpoint.replace(/^\//, ""), API), {
    method: "POST",
    headers: {
      "user-agent": UA,
      "content-type": "application/json",
      "accept-language": locale,
      origin: ORIGIN,
      referer: `${ORIGIN}/`,
    },
    body: JSON.stringify({ params, key }),
  });
  const json = await res.json();
  return json;
}

/** SPA shelf endpoint used by logged-in/guest lobby after vendor click */
export async function fetchVendorShelf(vendorId, perPage = 200) {
  const all = [];
  let page = 1;
  for (;;) {
    const r = await apiPost("frontend/api/game/list", {
      domain: DOMAIN,
      page,
      per_page: perPage,
      vendor_id: vendorId,
    });
    if (![200, 1000].includes(r.code)) {
      throw new Error(`game/list ${vendorId}: ${r.code} ${r.message}`);
    }
    const games = r.data?.games || (Array.isArray(r.data) ? r.data : []);
    all.push(...games);
    const total = r.data?.pagination?.total || all.length;
    if (all.length >= total || games.length < perPage) break;
    page += 1;
    if (page > 60) break;
  }
  return all;
}

export async function fetchVendors() {
  const r = await apiPost("api/newVendorsByDomain", { domain: DOMAIN });
  return r.data || [];
}

export { DOMAIN, ORIGIN, UA };
