import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "assets", "bottles");

const products = [
  { slug: "alpha-omega", name: "Alpha Omega", category: "wine", varietal: "Bordeaux Blend" },
  { slug: "schug-carneros-estate", name: "Schug Carneros Estate", category: "wine", varietal: "Pinot Noir" },
  { slug: "daou-estate", name: "DAOU Estate", category: "wine", varietal: "Cabernet Sauvignon" },
  { slug: "finca-rio-negro", name: "Finca Río Negro", category: "wine", varietal: "Malbec" },
  { slug: "quinta-do-crasto", name: "Quinta do Crasto", category: "wine", varietal: "Touriga Nacional" },
  { slug: "textbook-wines", name: "Textbook Wines", category: "wine", varietal: "Chardonnay" },
  { slug: "bodegas-chaves", name: "Bodegas Chaves", category: "wine", varietal: "Tempranillo" },
  { slug: "finca-rodma", name: "Finca Rodma", category: "wine", varietal: "Garnacha" },
  { slug: "axr-napa-valley", name: "AXR Napa Valley", category: "wine", varietal: "Red Blend" },
  { slug: "michel-rolland", name: "Michel Rolland", category: "wine", varietal: "Merlot Blend" },
  { slug: "argiano", name: "Argiano", category: "wine", varietal: "Brunello di Montalcino" },
  { slug: "lange-twins", name: "Lange Twins", category: "wine", varietal: "Zinfandel" },
  { slug: "gonet", name: "Gonet", category: "wine", varietal: "Chardonnay" },
  { slug: "continuum-estate", name: "Continuum Estate", category: "wine", varietal: "Proprietary Red" },
  { slug: "produttori-del-barbaresco", name: "Produttori del Barbaresco", category: "wine", varietal: "Nebbiolo" },
  { slug: "tapiz", name: "Tapiz", category: "wine", varietal: "Malbec" },
  { slug: "godeval", name: "Godeval", category: "wine", varietal: "Godello" },
  { slug: "damilano", name: "Damilano", category: "wine", varietal: "Nebbiolo" },
  { slug: "pina-napa-valley", name: "Piña Napa Valley", category: "wine", varietal: "Cabernet Sauvignon" },
  { slug: "bodegas-resalte", name: "Bodegas Resalte", category: "wine", varietal: "Tempranillo" },
  { slug: "jack-rudy-cocktail-co", name: "Jack Rudy Cocktail Co.", category: "spirits", varietal: "Cocktail Mixers" },
  { slug: "boylan-bottling", name: "Boylan Bottling", category: "spirits", varietal: "Craft Sodas & Tonics" },
  { slug: "jax-spirits", name: "Jax Spirits", category: "spirits", varietal: "American Whiskey" },
  { slug: "mossburn-distillers", name: "Mossburn Distillers", category: "spirits", varietal: "Single Malt Scotch" },
  { slug: "whip-it", name: "Whip-it!", category: "spirits", varietal: "RTD Cocktails" },
  { slug: "hatozaki", name: "Hatozaki", category: "spirits", varietal: "Japanese Whisky" },
  { slug: "135-east-hyogo-dry-gin", name: "135° East Hyogo Dry Gin", category: "spirits", varietal: "Dry Gin" },
  { slug: "gin-mg", name: "Gin MG", category: "spirits", varietal: "London Dry Gin" },
  { slug: "rod-and-hammers-slo-stills", name: "Rod & Hammer's SLO Stills", category: "spirits", varietal: "Craft Vodka" },
  { slug: "the-bitter-truth", name: "The Bitter Truth", category: "liqueurs", varietal: "Bitters & Liqueurs" },
  { slug: "mozart-chocolate-liqueur", name: "Mozart Chocolate Liqueur", category: "liqueurs", varietal: "Chocolate Liqueur" },
];

function hash(str) {
  let h = 0;
  for (const ch of str) h = (h * 33 + ch.charCodeAt(0)) >>> 0;
  return h;
}

function glassColors(product) {
  const v = product.varietal.toLowerCase();
  if (v.includes("chardonnay") || v.includes("godello")) {
    return { top: "#d9c48a", mid: "#c5a45a", bottom: "#8a6b32" };
  }
  if (v.includes("champagne") || product.slug === "gonet") {
    return { top: "#efe6c9", mid: "#d4c392", bottom: "#9a8754" };
  }
  if (v.includes("gin") || v.includes("vodka")) {
    return { top: "#dce8e4", mid: "#9fb8b0", bottom: "#5c736c" };
  }
  if (v.includes("whiskey") || v.includes("whisky") || v.includes("malt")) {
    return { top: "#c48a3a", mid: "#8a4e1c", bottom: "#4a2410" };
  }
  if (v.includes("mixer") || v.includes("soda") || v.includes("rtd")) {
    return { top: "#e8d5b5", mid: "#c4a06a", bottom: "#6b4a28" };
  }
  if (v.includes("chocolate")) {
    return { top: "#6b3a28", mid: "#4a2418", bottom: "#231410" };
  }
  if (v.includes("bitter")) {
    return { top: "#7a3a28", mid: "#5a2418", bottom: "#2a1210" };
  }
  if (product.category === "wine") {
    const hues = [
      { top: "#6b2430", mid: "#4a1820", bottom: "#241014" },
      { top: "#7a2a28", mid: "#521818", bottom: "#2a1010" },
      { top: "#5c2030", mid: "#3a1420", bottom: "#1c0c14" },
      { top: "#6b3040", mid: "#4a1c28", bottom: "#241018" },
    ];
    return hues[hash(product.slug) % hues.length];
  }
  return { top: "#8a6b48", mid: "#5c4630", bottom: "#2a2018" };
}

function bottlePath(product) {
  const v = product.varietal.toLowerCase();
  if (v.includes("gin") || v.includes("vodka")) {
    return "M90 28h20l6 48v20c0 10-6 16-12 22v246c0 12-8 20-18 20H94c-10 0-18-8-18-20V118c-6-6-12-12-12-22V76l6-48z";
  }
  if (v.includes("whiskey") || v.includes("whisky") || v.includes("malt")) {
    return "M78 70h44v12c8 8 12 18 12 28v250c0 10-8 18-16 18H82c-8 0-16-8-16-18V110c0-10 4-20 12-28V70z";
  }
  if (v.includes("mixer") || v.includes("soda") || v.includes("rtd") || product.category === "liqueurs") {
    return "M84 56h32l8 28v16c0 14-8 22-16 28v212c0 10-8 18-18 18H90c-10 0-18-8-18-18V128c-8-6-16-14-16-28V84l8-28z";
  }
  if (product.slug === "gonet") {
    return "M92 22h16l10 70v18c0 16-8 26-16 34v230c0 12-8 22-18 22H96c-10 0-18-10-18-22V144c-8-8-16-18-16-34V92l10-70z";
  }
  return "M88 36h24l8 34v18c0 18-10 28-20 34v224c0 10-8 18-18 18H98c-10 0-18-8-18-18V122c-10-6-20-16-20-34V70l8-34z";
}

function highlightPath(product) {
  const v = product.varietal.toLowerCase();
  if (v.includes("whiskey") || v.includes("whisky") || v.includes("malt")) {
    return "M84 78h16v268c0 6-4 10-8 10H92c-4 0-8-4-8-10V78z";
  }
  return "M92 42h16l6 28v16c0 14-8 22-16 28v228c0 6-5 11-11 11H97c-6 0-11-5-11-11V114c-8-6-16-14-16-28V70l6-28z";
}

function wrapLabel(name) {
  const words = name.replace("Cocktail Co.", "Cocktail").split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > 14 && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function svgFor(product) {
  const id = product.slug.replace(/[^a-z0-9]/g, "");
  const glass = glassColors(product);
  const lines = wrapLabel(product.name);
  const labelY = 210 - (lines.length - 1) * 8;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 420" fill="none" aria-hidden="true">
  <defs>
    <linearGradient id="${id}Glass" x1="100" y1="20" x2="100" y2="400" gradientUnits="userSpaceOnUse">
      <stop stop-color="${glass.top}" stop-opacity="0.96"/>
      <stop offset="0.48" stop-color="${glass.mid}" stop-opacity="0.9"/>
      <stop offset="1" stop-color="${glass.bottom}" stop-opacity="0.94"/>
    </linearGradient>
    <linearGradient id="${id}Highlight" x1="70" y1="70" x2="130" y2="360" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="${id}Label" x1="100" y1="180" x2="100" y2="300" gradientUnits="userSpaceOnUse">
      <stop stop-color="#f6efe4" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#e4d3ba" stop-opacity="0.9"/>
    </linearGradient>
  </defs>
  <ellipse cx="100" cy="396" rx="46" ry="8" fill="#000" fill-opacity="0.38"/>
  <path d="${bottlePath(product)}" fill="url(#${id}Glass)"/>
  <path d="${highlightPath(product)}" fill="url(#${id}Highlight)"/>
  <rect x="70" y="176" width="60" height="108" rx="2" fill="url(#${id}Label)"/>
  <rect x="78" y="184" width="44" height="2" fill="#a68966" fill-opacity="0.7"/>
  ${lines
    .map(
      (line, i) =>
        `<text x="100" y="${labelY + i * 16}" text-anchor="middle" fill="#231F20" font-family="Georgia, serif" font-size="9" font-weight="600">${escapeXml(line)}</text>`
    )
    .join("\n  ")}
  <text x="100" y="268" text-anchor="middle" fill="#8a7f75" font-family="Arial, sans-serif" font-size="6" letter-spacing="1.4">${escapeXml(product.varietal.toUpperCase().slice(0, 18))}</text>
  <rect x="94" y="8" width="12" height="28" rx="2" fill="#2a2420"/>
  <rect x="91" y="4" width="18" height="8" rx="1" fill="#c5a073"/>
</svg>
`;
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

fs.mkdirSync(OUT, { recursive: true });

for (const product of products) {
  const dest = path.join(OUT, `${product.slug}.svg`);
  fs.writeFileSync(dest, svgFor(product));
  console.log(`✓ ${product.slug}.svg`);
}

console.log(`\nWrote ${products.length} bottle plates to ${OUT}`);
