import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BOTTLES = path.join(ROOT, "public", "assets", "bottles");

/**
 * Add official product bottle URLs here as you source them.
 * File names should match product slugs from src/lib/products.ts.
 */
const bottleAssets = [
  // Example:
  // {
  //   slug: "hatozaki",
  //   url: "https://example.com/hatozaki-bottle.png",
  //   file: "hatozaki.png",
  // },
];

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

async function main() {
  fs.mkdirSync(BOTTLES, { recursive: true });

  if (bottleAssets.length === 0) {
    console.log("No bottle assets configured yet.");
    console.log("Edit scripts/pull-bottle-assets.mjs and add official product shot URLs.");
    console.log("Then set bottleImage in src/lib/products.ts to /assets/bottles/{file}");
    return;
  }

  console.log("Pulling bottle product shots...\n");

  for (const item of bottleAssets) {
    const dest = path.join(BOTTLES, item.file);
    try {
      const size = await download(item.url, dest);
      console.log(`✓ ${item.slug} → ${item.file} (${size} bytes)`);
    } catch (err) {
      console.error(`✗ ${item.slug}: ${err.message}`);
    }
  }

  console.log("\nDone. Update bottleImage paths in src/lib/products.ts for pulled files.");
}

main().catch(console.error);
