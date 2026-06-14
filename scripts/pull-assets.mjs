import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const ASSETS = path.join(ROOT, "public", "assets");

const brandAssets = [
  {
    url: "https://aficionadosinc.com/wp-content/uploads/2024/07/logo-aficionados-inc.png",
    file: "logo-aficionados-inc.png",
    alt: "Aficionados Wine & Spirits logo",
  },
  {
    url: "https://aficionadosinc.com/wp-content/uploads/2024/07/logoaficionadospeque.png",
    file: "logo-aficionados-small.png",
    alt: "Aficionados small logo",
  },
];

const editorialAssets = [
  {
    url: "https://aficionadosinc.com/wp-content/uploads/2024/08/mision.webp",
    file: "mission.webp",
    alt: "Mission",
  },
  {
    url: "https://aficionadosinc.com/wp-content/uploads/2024/08/vision.webp",
    file: "vision.webp",
    alt: "Vision",
  },
  {
    url: "https://aficionadosinc.com/wp-content/uploads/2024/08/valores.webp",
    file: "values.webp",
    alt: "Values",
  },
  {
    url: "https://aficionadosinc.com/wp-content/uploads/2024/08/experience-aficionadosinc.webp",
    file: "tasting-room.webp",
    alt: "Aficionados tasting room",
  },
];

const portfolioAssets = [
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/alpha-omega-logo-sized_preview_rev_1.png", file: "alpha-omega.png", name: "Alpha Omega", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/SCHUG_preview_rev_1.png", file: "schug.png", name: "Schug", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/jr-logo_preview_rev_1.png", file: "jack-rudy.png", name: "Jack Rudy Cocktail Co.", category: "spirits" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/DAOU_preview_rev_1.png", file: "daou.png", name: "DAOU", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/Imagen-de-WhatsApp-2024-08-07-a-las-12.24.19_7ad60362_preview_rev_1.png", file: "finca-rio-negro.png", name: "Finca Río Negro", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/Qcrasto_2018_pb_preview_rev_1.png", file: "quinta-do-crasto.png", name: "Quinta do Crasto", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/Boylan-Bottling_preview_rev_1.png", file: "boylan-bottling.png", name: "Boylan Bottling", category: "spirits" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/Imagen-de-WhatsApp-2024-08-04-a-las-14.00.27_835b38d9_preview_rev_1.png", file: "textbook.png", name: "Textbook", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/CHAVES_preview_rev_1.png", file: "bodegas-chaves.png", name: "Bodegas Chaves", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/Logotipo-Rodma_CMYK-1024x499_preview_rev_1.png", file: "finca-rodma.png", name: "Finca Rodma", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/AXR_preview_rev_1.png", file: "axr-napa-valley.png", name: "AXR Napa Valley", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/Imagen-de-WhatsApp-2024-08-04-a-las-14.00.27_68211afe_preview_rev_1.png", file: "michel-rolland.png", name: "Michel Rolland", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/cropped-jax_preview_rev_1.png", file: "jax.png", name: "Jax", category: "spirits" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/The-Bitter-Truth_Logo_Heads_Slogan_preview_rev_1.png", file: "the-bitter-truth.png", name: "The Bitter Truth", category: "liqueurs" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/Imagen-de-WhatsApp-2024-08-04-a-las-13.59.57_8635c274_preview_rev_1.png", file: "brand-placeholder-1.png", name: "Portfolio Brand", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/ARGIANO_preview_rev_1.png", file: "argiano.png", name: "Argiano", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/LANGE-TWINS_preview_rev_1.png", file: "lange-twins.png", name: "Lange Twins", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/GONET-2.png", file: "gonet.png", name: "Gonet", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/CONTINUUM.png", file: "continuum.png", name: "Continuum", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/PRODUTTORI-BARBARESCO_preview_rev_1.png", file: "produttori-barbaresco.png", name: "Produttori del Barbaresco", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/Mossburn-logo_preview_rev_1.png", file: "mossburn.png", name: "Mossburn", category: "spirits" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/BODEGAS-TAPIZ_preview_rev_1.png", file: "tapiz.png", name: "Tapiz", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/whipit-logo_1200x1200_preview_rev_1.png", file: "whip-it.png", name: "Whip-it!", category: "spirits" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/Mozart_-Logo_1_300x300_preview_rev_1.png", file: "mozart.png", name: "Mozart", category: "liqueurs" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/GODEVAL_preview_rev_1.png", file: "godeval.png", name: "Godeval", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/HATOZAKI_preview_rev_1.png", file: "hatozaki.png", name: "Hatozaki", category: "spirits" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/135-EAST.webp", file: "135-east.webp", name: "135° East", category: "spirits" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/Logo-Gin-MG.png", file: "gin-mg.png", name: "Gin MG", category: "spirits" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/SLO-RH_preview_rev_1.png", file: "rod-and-hammers.png", name: "Rod & Hammer's", category: "spirits" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/DAMILANO_preview_rev_1.png", file: "damilano.png", name: "Damilano", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/PINA_preview_rev_1.png", file: "pina-napa-valley.png", name: "Piña Napa Valley", category: "wine" },
  { url: "https://aficionadosinc.com/wp-content/uploads/2024/09/BODEGAS_RESALTE_PENAFIEL_byn-0126_preview_rev_1.png", file: "bodegas-resalte.png", name: "Bodegas Resalte", category: "wine" },
];

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

async function pullCategory(items, category, subdir) {
  const results = [];
  for (const item of items) {
    const dest = path.join(ASSETS, subdir, item.file);
    try {
      const size = await download(item.url, dest);
      results.push({
        ...item,
        category: item.category || category,
        localPath: `/assets/${subdir}/${item.file}`,
        size,
      });
      console.log(`✓ ${item.file}`);
    } catch (err) {
      console.error(`✗ ${item.file}: ${err.message}`);
    }
  }
  return results;
}

async function main() {
  console.log("Pulling Aficionados assets...\n");

  const brand = await pullCategory(brandAssets, "brand", "brand");
  const editorial = await pullCategory(editorialAssets, "editorial", "editorial");
  const portfolio = await pullCategory(portfolioAssets, "portfolio", "portfolio");

  const manifest = {
    pulledAt: new Date().toISOString(),
    source: "https://aficionadosinc.com",
    brand,
    editorial,
    portfolio,
  };

  fs.writeFileSync(
    path.join(ASSETS, "manifest.json"),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`\nDone: ${brand.length} brand, ${editorial.length} editorial, ${portfolio.length} portfolio`);
}

main().catch(console.error);
