/**
 * Stop-safe cache wipe for Next.js / webpack on Windows (incl. OneDrive paths).
 * Prefer: npm run dev:clean
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const targets = [".next", "node_modules/.cache", ".turbo"];

function rmRetry(abs, rel, attempts = 5) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      if (!fs.existsSync(abs)) {
        console.log("skip", rel);
        return;
      }
      fs.rmSync(abs, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
      console.log("removed", rel);
      return;
    } catch (err) {
      if (i === attempts - 1) throw err;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 400);
    }
  }
}

for (const rel of targets) {
  rmRetry(path.join(root, rel), rel);
}
