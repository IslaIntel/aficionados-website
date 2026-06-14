import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PRESS = path.join(__dirname, "..", "public", "assets", "press");

function removeBackground({ data, info }, mode) {
  const pixels = Buffer.from(data);

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];

    if (a === 0) continue;

    const isDark = r < 40 && g < 40 && b < 40;
    const isLight = r > 235 && g > 235 && b > 235;

    if ((mode === "dark" && isDark) || (mode === "light" && isLight)) {
      pixels[i + 3] = 0;
    }
  }

  return pixels;
}

async function processRaster(input, output, mode) {
  const image = sharp(input).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const cleaned = removeBackground({ data, info }, mode);

  await sharp(cleaned, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(output);

  console.log(`✓ ${path.basename(output)}`);
}

async function processSvg(input, output) {
  await sharp(input, { density: 300 })
    .resize({ width: 260 })
    .png()
    .toFile(output);

  console.log(`✓ ${path.basename(output)}`);
}

async function main() {
  fs.mkdirSync(PRESS, { recursive: true });

  await processSvg(
    path.join(PRESS, "el-nuevo-dia-source.svg"),
    path.join(PRESS, "el-nuevo-dia.png")
  );

  await processRaster(
    path.join(PRESS, "foodiespr-source.png"),
    path.join(PRESS, "foodiespr.png"),
    "dark"
  );

  await processRaster(
    path.join(PRESS, "placeres-source.jpg"),
    path.join(PRESS, "placeres.png"),
    "light"
  );

  await processRaster(
    path.join(PRESS, "pride-society-source.png"),
    path.join(PRESS, "pride-society-clean.png"),
    "dark"
  );

  await processRaster(
    path.join(PRESS, "vibeer-source.png"),
    path.join(PRESS, "vibeer-clean.png"),
    "dark"
  );

  fs.renameSync(path.join(PRESS, "pride-society-clean.png"), path.join(PRESS, "pride-society.png"));
  fs.renameSync(path.join(PRESS, "vibeer-clean.png"), path.join(PRESS, "vibeer.png"));

  console.log("\nDone — transparent logos written to public/assets/press/");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
