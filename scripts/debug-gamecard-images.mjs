/**
 * DevTools-style check: for each GameCard, report img src, complete, natural size, and 404s.
 */
import { chromium } from "playwright";
import fs from "node:fs";

const PORT = process.env.PORT || "3001";
const PAGES = [
  `http://localhost:${PORT}/en/providers/pg-soft/games`,
  `http://localhost:${PORT}/en/providers/spribe/games`,
  `http://localhost:${PORT}/en/providers/dream-gaming/games`,
  `http://localhost:${PORT}/en/providers/microgaming/games`,
  `http://localhost:${PORT}/en/providers/playn-go/games`,
  `http://localhost:${PORT}/en/providers/habanero/games`,
  `http://localhost:${PORT}/en/providers/sbo/games`,
];

const browser = await chromium.launch({
  headless: true,
  executablePath:
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});

const out = [];

for (const url of PAGES) {
  const page = await browser.newPage();
  const failed = [];
  page.on("response", (res) => {
    if (res.status() >= 400 && /\/(_next\/image|images\/games)/.test(res.url())) {
      failed.push({ status: res.status(), url: res.url() });
    }
  });

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  } catch (error) {
    out.push({ url, error: error.message });
    await page.close();
    continue;
  }

  const age = page.getByRole("button", { name: /21 or older/i });
  if (await age.count()) await age.first().click().catch(() => {});
  await page.waitForTimeout(800);

  const cards = await page.locator("article.group").evaluateAll((articles) =>
    articles.slice(0, 10).map((article) => {
      const title = article.querySelector("h3")?.textContent?.trim() || "";
      const imgs = [...article.querySelectorAll("img")].map((img) => ({
        src: img.currentSrc || img.getAttribute("src") || "",
        alt: img.alt || "",
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        className: String(img.className || "").slice(0, 80),
      }));
      const thumbChildren = [
        ...(article.querySelector("a > div.relative")?.children || []),
      ].map((el) => el.tagName + "." + String(el.className || "").slice(0, 40));
      return { title, imgs, thumbChildren, childCount: thumbChildren.length };
    }),
  );

  out.push({
    url,
    cardCount: await page.locator("article.group").count(),
    sample: cards,
    failedRequests: failed.slice(0, 20),
  });
  await page.close();
}

fs.writeFileSync(
  "scripts/_gamecard-image-debug.json",
  JSON.stringify(out, null, 2),
);
console.log(JSON.stringify(out.map((r) => ({
  url: r.url,
  cards: r.cardCount,
  fails: r.failedRequests?.length || 0,
  error: r.error,
  titles: r.sample?.slice(0, 4).map((c) => ({
    title: c.title,
    img: c.imgs[0]?.src?.includes("url=")
      ? decodeURIComponent(c.imgs[0].src.split("url=")[1].split("&")[0])
      : c.imgs[0]?.src,
    nw: c.imgs[0]?.naturalWidth,
    children: c.thumbChildren,
  })),
})), null, 2));

await browser.close();
