import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PRESS = path.join(__dirname, "..", "public", "assets", "press");

const sources = [
  {
    url: "https://www.elnuevodia.com/pf/resources/v2/icons/end-logo.svg?d=170",
    file: "el-nuevo-dia-source.svg",
  },
  {
    url: "https://i0.wp.com/www.foodiespr.com/wp-content/uploads/2026/05/cropped-LogoFoodiePR2020.png?ssl=1",
    file: "foodiespr-source.png",
  },
  {
    url: "https://placerespr.com/wp-content/uploads/2014/08/logo.jpg",
    file: "placeres-source.jpg",
  },
  {
    url: "https://i0.wp.com/pridesocietymagazine.com/wp-content/uploads/2025/05/LogoWEB_ok.png?ssl=1",
    file: "pride-society-source.png",
  },
  {
    url: "https://vibeermag.com/wp-content/uploads/2020/07/LogoOK_2.png",
    file: "vibeer-source.png",
  },
];

async function download(url, dest) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 AficionadosAssetPull/1.0" },
  });
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
}

async function main() {
  fs.mkdirSync(PRESS, { recursive: true });

  console.log("Pulling press logos...\n");

  for (const item of sources) {
    const dest = path.join(PRESS, item.file);
    try {
      await download(item.url, dest);
      console.log(`✓ ${item.file}`);
    } catch (error) {
      console.error(`✗ ${item.file}: ${error.message}`);
    }
  }

  console.log("\nProcessing transparent PNGs...\n");
  const result = spawnSync("node", ["scripts/process-press-logos.mjs"], {
    cwd: path.join(__dirname, ".."),
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

main().catch(console.error);
