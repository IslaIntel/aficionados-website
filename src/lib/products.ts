import type { PortfolioCategory } from "./design-tokens";

export type ProductAvailability = "exclusive" | "limited" | "core";

export type Product = {
  sku: string;
  name: string;
  producer: string;
  region: string;
  country: string;
  category: Exclude<PortfolioCategory, "all" | "beer">;
  varietal: string;
  availability: ProductAvailability;
  image: string;
  vintage?: string;
  organic?: boolean;
};

export const products: Product[] = [
  { sku: "AFI-W-001", name: "Alpha Omega", producer: "Alpha Omega Winery", region: "Napa Valley", country: "USA", category: "wine", varietal: "Bordeaux Blend", availability: "exclusive", image: "/assets/portfolio/alpha-omega.png" },
  { sku: "AFI-W-002", name: "Schug Carneros Estate", producer: "Schug Winery", region: "Carneros", country: "USA", category: "wine", varietal: "Pinot Noir", availability: "core", image: "/assets/portfolio/schug.png" },
  { sku: "AFI-W-003", name: "DAOU Estate", producer: "DAOU Family Estates", region: "Paso Robles", country: "USA", category: "wine", varietal: "Cabernet Sauvignon", availability: "core", image: "/assets/portfolio/daou.png" },
  { sku: "AFI-W-004", name: "Finca Río Negro", producer: "Finca Río Negro", region: "Uco Valley", country: "Argentina", category: "wine", varietal: "Malbec", availability: "limited", image: "/assets/portfolio/finca-rio-negro.png", organic: true },
  { sku: "AFI-W-005", name: "Quinta do Crasto", producer: "Quinta do Crasto", region: "Douro", country: "Portugal", category: "wine", varietal: "Touriga Nacional", availability: "core", image: "/assets/portfolio/quinta-do-crasto.png" },
  { sku: "AFI-W-006", name: "Textbook Wines", producer: "Textbook Wines", region: "Napa Valley", country: "USA", category: "wine", varietal: "Chardonnay", availability: "limited", image: "/assets/portfolio/textbook.png" },
  { sku: "AFI-W-007", name: "Bodegas Chaves", producer: "Bodegas Chaves", region: "Ribera del Duero", country: "Spain", category: "wine", varietal: "Tempranillo", availability: "exclusive", image: "/assets/portfolio/bodegas-chaves.png" },
  { sku: "AFI-W-008", name: "Finca Rodma", producer: "Finca Rodma", region: "Rioja", country: "Spain", category: "wine", varietal: "Garnacha", availability: "limited", image: "/assets/portfolio/finca-rodma.png" },
  { sku: "AFI-W-009", name: "AXR Napa Valley", producer: "AXR Winery", region: "Napa Valley", country: "USA", category: "wine", varietal: "Red Blend", availability: "exclusive", image: "/assets/portfolio/axr-napa-valley.png" },
  { sku: "AFI-W-010", name: "Michel Rolland", producer: "Michel Rolland Collection", region: "Bordeaux", country: "France", category: "wine", varietal: "Merlot Blend", availability: "exclusive", image: "/assets/portfolio/michel-rolland.png" },
  { sku: "AFI-W-011", name: "Argiano", producer: "Argiano", region: "Montalcino", country: "Italy", category: "wine", varietal: "Brunello di Montalcino", availability: "core", image: "/assets/portfolio/argiano.png" },
  { sku: "AFI-W-012", name: "Lange Twins", producer: "LangeTwins Family", region: "Lodi", country: "USA", category: "wine", varietal: "Zinfandel", availability: "core", image: "/assets/portfolio/lange-twins.png" },
  { sku: "AFI-W-013", name: "Gonet", producer: "Champagne Gonet", region: "Champagne", country: "France", category: "wine", varietal: "Chardonnay", availability: "limited", image: "/assets/portfolio/gonet.png" },
  { sku: "AFI-W-014", name: "Continuum Estate", producer: "Continuum Estate", region: "Napa Valley", country: "USA", category: "wine", varietal: "Proprietary Red", availability: "exclusive", image: "/assets/portfolio/continuum.png", vintage: "2019" },
  { sku: "AFI-W-015", name: "Produttori del Barbaresco", producer: "Produttori del Barbaresco", region: "Piedmont", country: "Italy", category: "wine", varietal: "Nebbiolo", availability: "core", image: "/assets/portfolio/produttori-barbaresco.png" },
  { sku: "AFI-W-016", name: "Tapiz", producer: "Bodega Tapiz", region: "Mendoza", country: "Argentina", category: "wine", varietal: "Malbec", availability: "core", image: "/assets/portfolio/tapiz.png", organic: true },
  { sku: "AFI-W-017", name: "Godeval", producer: "Bodegas Godeval", region: "Valdeorras", country: "Spain", category: "wine", varietal: "Godello", availability: "limited", image: "/assets/portfolio/godeval.png" },
  { sku: "AFI-W-018", name: "Damilano", producer: "Damilano", region: "Barolo", country: "Italy", category: "wine", varietal: "Nebbiolo", availability: "core", image: "/assets/portfolio/damilano.png" },
  { sku: "AFI-W-019", name: "Piña Napa Valley", producer: "Piña Vineyard", region: "Napa Valley", country: "USA", category: "wine", varietal: "Cabernet Sauvignon", availability: "limited", image: "/assets/portfolio/pina-napa-valley.png" },
  { sku: "AFI-W-020", name: "Bodegas Resalte", producer: "Bodegas Resalte", region: "Ribera del Duero", country: "Spain", category: "wine", varietal: "Tempranillo", availability: "core", image: "/assets/portfolio/bodegas-resalte.png" },
  { sku: "AFI-S-001", name: "Jack Rudy Cocktail Co.", producer: "Jack Rudy Cocktail Co.", region: "Charleston", country: "USA", category: "spirits", varietal: "Cocktail Mixers", availability: "core", image: "/assets/portfolio/jack-rudy.png" },
  { sku: "AFI-S-002", name: "Boylan Bottling", producer: "Boylan Bottling Co.", region: "New Jersey", country: "USA", category: "spirits", varietal: "Craft Sodas & Tonics", availability: "core", image: "/assets/portfolio/boylan-bottling.png" },
  { sku: "AFI-S-003", name: "Jax Spirits", producer: "Jax Spirits", region: "Louisiana", country: "USA", category: "spirits", varietal: "American Whiskey", availability: "limited", image: "/assets/portfolio/jax.png" },
  { sku: "AFI-S-004", name: "Mossburn Distillers", producer: "Mossburn", region: "Speyside", country: "Scotland", category: "spirits", varietal: "Single Malt Scotch", availability: "exclusive", image: "/assets/portfolio/mossburn.png" },
  { sku: "AFI-S-005", name: "Whip-it!", producer: "Whip-it! Brands", region: "California", country: "USA", category: "spirits", varietal: "RTD Cocktails", availability: "core", image: "/assets/portfolio/whip-it.png" },
  { sku: "AFI-S-006", name: "Hatozaki", producer: "Hatozaki Distillery", region: "Hyogo", country: "Japan", category: "spirits", varietal: "Japanese Whisky", availability: "exclusive", image: "/assets/portfolio/hatozaki.png" },
  { sku: "AFI-S-007", name: "135° East Hyogo Dry Gin", producer: "135° East", region: "Hyogo", country: "Japan", category: "spirits", varietal: "Dry Gin", availability: "limited", image: "/assets/portfolio/135-east.webp" },
  { sku: "AFI-S-008", name: "Gin MG", producer: "Gin MG", region: "Málaga", country: "Spain", category: "spirits", varietal: "London Dry Gin", availability: "core", image: "/assets/portfolio/gin-mg.png" },
  { sku: "AFI-S-009", name: "Rod & Hammer's SLO Stills", producer: "Rod & Hammer's", region: "San Luis Obispo", country: "USA", category: "spirits", varietal: "Craft Vodka", availability: "limited", image: "/assets/portfolio/rod-and-hammers.png" },
  { sku: "AFI-L-001", name: "The Bitter Truth", producer: "The Bitter Truth", region: "Munich", country: "Germany", category: "liqueurs", varietal: "Bitters & Liqueurs", availability: "core", image: "/assets/portfolio/the-bitter-truth.png" },
  { sku: "AFI-L-002", name: "Mozart Chocolate Liqueur", producer: "Mozart Distillerie", region: "Salzburg", country: "Austria", category: "liqueurs", varietal: "Chocolate Liqueur", availability: "core", image: "/assets/portfolio/mozart.png" },
];

export function getProductStats() {
  return {
    total: products.length,
    wine: products.filter((p) => p.category === "wine").length,
    spirits: products.filter((p) => p.category === "spirits").length,
    liqueurs: products.filter((p) => p.category === "liqueurs").length,
    exclusive: products.filter((p) => p.availability === "exclusive").length,
  };
}
