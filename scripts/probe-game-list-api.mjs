/**
 * Probe frontend/api/game/list — the endpoint the official SPA actually uses
 * when $enableNewApi is on (not myGamesByDomain).
 */
import fs from "node:fs";
import CryptoJS from "crypto-js";

const API = "https://d5y9.apit.5t1p6.com/";
const ORIGIN = "https://www.tpower3.com";
const DOMAIN = "www.tpower3.com";
const KEYS = {
  md5: "&W7e1vRWRH02jZIB",
  aes: "M53B?gQhkRtSeQZ^",
  iv: "4339794120398193",
};

function encrypt(plain) {
  const key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(KEYS.aes).toString());
  const iv = CryptoJS.enc.Utf8.parse(KEYS.iv);
  return CryptoJS.AES.encrypt(String(plain), key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
}

async function apiPost(endpoint, payload) {
  const plain =
    payload === "" || payload == null
      ? ""
      : typeof payload === "string"
        ? payload
        : JSON.stringify(payload);
  const params = encrypt(plain);
  const key = CryptoJS.MD5(params + KEYS.md5).toString();
  const res = await fetch(new URL(endpoint.replace(/^\//, ""), API), {
    method: "POST",
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "content-type": "application/json",
      "accept-language": "en",
      origin: ORIGIN,
      referer: `${ORIGIN}/`,
    },
    body: JSON.stringify({ params, key }),
  });
  return res.json();
}

const vendors = await apiPost("api/newVendorsByDomain", { domain: DOMAIN });
console.log("vendors code", vendors.code, "len", vendors.data?.length);

const shapes = [
  { domain: DOMAIN, page: 1, per_page: 50 },
  { domain: DOMAIN, page: 1, per_page: 50, vendor_ids: [54] },
  { domain: DOMAIN, page: 1, per_page: 50, vendor_id: 54 },
  { page: 1, per_page: 50, vendor_ids: [54] },
  { page: 1, per_page: 50, vendor_id: 54 },
  { vendor_ids: [54], type_id: 2, page: 1, per_page: 50 },
  { vendor_ids: "54", page: 1, per_page: 50 },
  {},
  { domain: DOMAIN },
];

for (const payload of shapes) {
  const r = await apiPost("frontend/api/game/list", payload);
  const data = r.data;
  const games = Array.isArray(data)
    ? data
    : Array.isArray(data?.games)
      ? data.games
      : null;
  console.log(
    "shape",
    JSON.stringify(payload),
    "code",
    r.code,
    "msg",
    r.message,
    "games",
    games?.length,
    "sampleImage",
    games?.[0]?.image || games?.[0]?.name,
  );
  if (games?.length) {
    fs.writeFileSync(
      "scripts/.tmp-live-scrape/game-list-sample.json",
      JSON.stringify({ payload, code: r.code, count: games.length, sample: games.slice(0, 5), rawKeys: data && !Array.isArray(data) ? Object.keys(data) : null }, null, 2),
    );
  }
}

// Compare old endpoint image for same vendor
const old = await apiPost("api/myGamesByDomain", {
  domain: DOMAIN,
  page: 1,
  per_page: 20,
});
const oldGames = (old.data || []).filter((g) => g.vendor_id === 54).slice(0, 3);
const list = await apiPost("frontend/api/game/list", {
  domain: DOMAIN,
  page: 1,
  per_page: 20,
  vendor_ids: [54],
});
console.log(
  "\nOLD pragmatic sample",
  oldGames.map((g) => ({ name: g.name, image: g.image })),
);
console.log(
  "NEW list sample",
  (Array.isArray(list.data) ? list.data : list.data?.games || [])
    .slice(0, 3)
    .map((g) => ({ name: g.name, image: g.image })),
);
