const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const pages = [
  "https://tpower.ai/our-games/",
  "https://tpowercasino.com/our-games/",
  "https://tpower99my.com/games-library/",
  "https://tpower.ai/",
  "https://tpower99my.com/",
];

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, accept: "*/*" },
    redirect: "follow",
  });
  return { res, text: await res.text() };
}

function extract(text) {
  const hrefs = [...text.matchAll(/href=["']([^"']+)["']/gi)].map((m) => m[1]);
  const srcs = [...text.matchAll(/(?:src|data-src|data-lazy-src)=["']([^"']+)["']/gi)].map(
    (m) => m[1],
  );
  const wpJson = [...text.matchAll(/https?:\/\/[^"'\\\s]+\/wp-json\/[^"'\\\s]+/gi)].map(
    (m) => m[0],
  );
  const apiish = [
    ...text.matchAll(
      /https?:\/\/[a-z0-9.-]+(?:api|cdn|static|img|game|lobby|member)[a-z0-9./_-]*/gi,
    ),
  ].map((m) => m[0]);
  const uploads = srcs.filter((s) => /wp-content\/uploads/i.test(s));
  const gameLike = srcs.filter((s) =>
    /game|slot|provider|pragmatic|pgsoft|jili|evolution|spade|fish|casino/i.test(
      s,
    ),
  );
  return {
    hrefSample: [...new Set(hrefs)]
      .filter((h) => /game|slot|lobby|provider|login|register|download|app/i.test(h))
      .slice(0, 40),
    wpJson: [...new Set(wpJson)].slice(0, 20),
    apiish: [...new Set(apiish)].slice(0, 40),
    uploadsCount: uploads.length,
    uploadSample: [...new Set(uploads)].slice(0, 30),
    gameLike: [...new Set(gameLike)].slice(0, 40),
  };
}

for (const url of pages) {
  console.log("\n====", url, "====");
  try {
    const { res, text } = await fetchText(url);
    console.log("status", res.status, "final", res.url, "len", text.length);
    console.log(JSON.stringify(extract(text), null, 2));
  } catch (e) {
    console.log("ERR", String(e));
  }
}

// Probe common WP REST endpoints for game custom posts
const restBases = [
  "https://tpower.ai/wp-json/wp/v2/types",
  "https://tpower.ai/wp-json/wp/v2/posts?per_page=5",
  "https://tpower.ai/wp-json/",
  "https://tpowercasino.com/wp-json/",
  "https://tpower99my.com/wp-json/",
  "https://tpower99my.com/wp-json/wp/v2/types",
  "https://tpower.ai/wp-json/wp/v2/pages?search=game&per_page=20",
];

for (const url of restBases) {
  console.log("\n==== REST", url, "====");
  try {
    const { res, text } = await fetchText(url);
    console.log("status", res.status, "len", text.length);
    console.log(text.slice(0, 1200));
  } catch (e) {
    console.log("ERR", String(e));
  }
}
