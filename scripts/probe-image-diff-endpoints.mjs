import fs from "node:fs";
import CryptoJS from "crypto-js";

const API = "https://d5y9.apit.5t1p6.com/";
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
  const params = encrypt(JSON.stringify(payload));
  const key = CryptoJS.MD5(params + KEYS.md5).toString();
  const res = await fetch(new URL(endpoint.replace(/^\//, ""), API), {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept-language": "en",
      origin: "https://www.tpower3.com",
      referer: "https://www.tpower3.com/",
    },
    body: JSON.stringify({ params, key }),
  });
  return res.json();
}

async function fetchAllList(vendorId) {
  const all = [];
  let page = 1;
  for (;;) {
    const r = await apiPost("frontend/api/game/list", {
      domain: DOMAIN,
      page,
      per_page: 200,
      vendor_id: vendorId,
    });
    const games = Array.isArray(r.data) ? r.data : r.data?.games || [];
    all.push(...games);
    if (games.length < 200) break;
    page += 1;
    if (page > 40) break;
  }
  return all;
}

async function fetchAllOld() {
  const all = [];
  let page = 1;
  for (;;) {
    const r = await apiPost("api/myGamesByDomain", {
      domain: DOMAIN,
      page,
      per_page: 500,
    });
    const games = r.data || [];
    all.push(...games);
    const pages = r.pagination?.pages || 1;
    if (page >= pages) break;
    page += 1;
  }
  return all;
}

const vendors = (
  await apiPost("api/newVendorsByDomain", { domain: DOMAIN })
).data;

const focus = [
  "PRAGMATIC-SLOT",
  "PRAGMATIC-LIVE",
  "DREAMGAMING",
  "AE SEXY",
  "JDB-SLOT",
  "JDB-FISHING",
  "JILI",
  "SPADEGAMING",
];

const oldAll = await fetchAllOld();
const oldById = new Map(oldAll.map((g) => [String(g.id), g]));
console.log("old total", oldAll.length);

const report = [];
for (const name of focus) {
  const v = vendors.find((x) => x.name === name);
  if (!v) {
    report.push({ name, error: "vendor-not-found" });
    continue;
  }
  const list = await fetchAllList(v.id);
  let same = 0;
  let different = 0;
  let missingInOld = 0;
  const diffs = [];
  for (const g of list) {
    const o = oldById.get(String(g.id));
    if (!o) {
      missingInOld += 1;
      continue;
    }
    if (String(o.image || "") === String(g.image || "")) same += 1;
    else {
      different += 1;
      if (diffs.length < 5) {
        diffs.push({
          id: g.id,
          name: g.name,
          listImage: g.image,
          oldImage: o.image,
        });
      }
    }
  }
  const row = {
    name,
    vendorId: v.id,
    listCount: list.length,
    sameImage: same,
    differentImage: different,
    missingInOld,
    sampleDiffs: diffs,
    sampleList: list.slice(0, 3).map((g) => ({
      id: g.id,
      name: g.name,
      image: g.image,
    })),
  };
  report.push(row);
  console.log(JSON.stringify(row, null, 2));
}

// Check if PG Soft / Evolution exist under any alias
const names = vendors.map((v) => v.name);
console.log(
  "\nlooking for PG/Evo/Micro/PlaynGo/Habanero/Spribe:",
  names.filter((n) =>
    /pg|evo|micro|play|habanero|spribe|soft|sexy|dream|jdb/i.test(n),
  ),
);

fs.writeFileSync(
  "scripts/.plot-image-diff.json".replace(".plot", ".tmp-live-scrape/endpoint"),
  JSON.stringify(report, null, 2),
);
fs.writeFileSync(
  "scripts/.tmp-live-scrape/endpoint-image-diff.json",
  JSON.stringify(report, null, 2),
);
