const urls = [
  "https://tpower.ai/",
  "https://tpower.ai/games",
  "https://tpower.ai/en/games",
  "https://tpowercasino.com/",
  "https://tpower88.com/",
  "https://tpower99my.com/",
  "https://tpower99my.com/games-library/",
];

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

async function probe(url) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, accept: "text/html,application/xhtml+xml" },
    redirect: "follow",
  });
  const text = await res.text();
  const scripts = [...text.matchAll(/src=["']([^"']+\.js[^"']*)["']/gi)].map(
    (m) => m[1],
  );
  const apis = [
    ...text.matchAll(/https?:\/\/[^"'\\\s]+(?:api|graphql|game)[^"'\\\s]*/gi),
  ].map((m) => m[0]);
  const imgs = [
    ...text.matchAll(
      /https?:\/\/[^"'\\\s]+\.(?:png|jpg|webp|jpeg)(?:\?[^"'\\\s]*)?/gi,
    ),
  ].map((m) => m[0]);
  const title = (text.match(/<title[^>]*>([^<]+)/i) || [])[1] || "";
  const nextData = text.includes("__NEXT_DATA__");
  const nuxt = text.includes("__NUXT__");
  const webpack = /chunk|webpack|vite|main\./i.test(text);
  return {
    url: res.url,
    status: res.status,
    len: text.length,
    title: title.trim().slice(0, 120),
    nextData,
    nuxt,
    webpack,
    scripts: scripts.slice(0, 25),
    apis: [...new Set(apis)].slice(0, 30),
    imgs: [...new Set(imgs)].slice(0, 20),
    sample: text.slice(0, 500).replace(/\s+/g, " "),
  };
}

for (const url of urls) {
  try {
    const info = await probe(url);
    console.log("\n====", url, "====");
    console.log(JSON.stringify(info, null, 2));
  } catch (error) {
    console.log("\n====", url, "ERROR ====");
    console.log(String(error));
  }
}
