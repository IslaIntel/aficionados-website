import type { PortfolioCategory, SpiritType, WineOrigin, WineStyle } from "./design-tokens";

export type ProductAvailability = "exclusive" | "limited" | "core";

export type LocalizedText = {
  en: string;
  es: string;
};

export type Product = {
  slug: string;
  sku: string;
  name: string;
  producer: string;
  region: string;
  country: string;
  category: Exclude<PortfolioCategory, "all">;
  varietal: string;
  wineStyle?: WineStyle;
  wineOrigin?: WineOrigin;
  spiritType?: SpiritType;
  availability: ProductAvailability;
  /** Brand logo used in portfolio and label strip */
  image: string;
  /** Product bottle photography — falls back to category placeholder when absent */
  bottleImage?: string;
  description: LocalizedText;
  producerUrl?: string;
  vintage?: string;
  organic?: boolean;
};

const categoryPlaceholders: Record<Product["category"], string> = {
  wine: "/assets/bottles/placeholder-wine.svg",
  spirits: "/assets/bottles/placeholder-spirits.png",
  beer: "/assets/bottles/placeholder-wine.svg",
  glassware: "/assets/bottles/placeholder-spirits.png",
  grocery: "/assets/bottles/placeholder-wine.svg",
  nonfood: "/assets/bottles/placeholder-spirits.png",
  mixers: "/assets/bottles/placeholder-liqueur.svg",
};

function inferWineStyle(data: { region: string; varietal: string }): WineStyle {
  const region = data.region.toLowerCase();
  const varietal = data.varietal.toLowerCase();
  if (/champagne|cava|prosecco|sparkling/.test(region) || /sparkling|champagne/.test(varietal)) {
    return "sparkling";
  }
  if (/ros[eé]|rosado/.test(varietal)) return "rose";
  if (/port|sherry|madeira|fortified/.test(varietal)) return "fortified";
  if (/sake/.test(varietal)) return "sake";
  if (/chardonnay|godello|sauvignon|riesling|albariño|albarino|verdejo|pinot grigio|pinot gris|viognier|chenin/.test(varietal)) {
    return "white";
  }
  return "red";
}

function inferWineOrigin(data: { region: string; country: string }): WineOrigin {
  const country = data.country.toLowerCase();
  const region = data.region.toLowerCase();
  if (country === "spain") return "spain";
  if (country === "portugal") return "portugal";
  if (country === "italy") return "italy";
  if (country === "france") return "france";
  if (country === "argentina") return "argentina";
  if (country === "new zealand") return "newZealand";
  if (country === "usa" || country === "united states") {
    if (region.includes("washington")) return "washington";
    if (region.includes("oregon")) return "oregon";
    if (/napa|carneros|paso|lodi|sonoma|california/.test(region)) return "california";
  }
  return "other";
}

function inferSpiritType(data: { name: string; varietal: string }): SpiritType {
  const text = `${data.name} ${data.varietal}`.toLowerCase();
  if (text.includes("vodka")) return "vodka";
  if (text.includes("gin")) return "gin";
  if (/tequila|mezcal/.test(text)) return "tequila";
  if (/whisk|scotch|bourbon/.test(text)) return "whisky";
  if (/liqueur|bitter/.test(text)) return "liqueurs";
  return "other";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function product(
  data: Omit<Product, "slug"> & { slug?: string }
): Product {
  const slug = data.slug ?? slugify(data.name);
  return {
    ...data,
    slug,
    bottleImage: data.bottleImage ?? `/assets/bottles/${slug}.svg`,
    wineStyle: data.category === "wine" ? (data.wineStyle ?? inferWineStyle(data)) : undefined,
    wineOrigin: data.category === "wine" ? (data.wineOrigin ?? inferWineOrigin(data)) : undefined,
    spiritType: data.category === "spirits" ? (data.spiritType ?? inferSpiritType(data)) : undefined,
  };
}

export const products: Product[] = [
  product({
    sku: "AFI-W-001",
    name: "Alpha Omega",
    producer: "Alpha Omega Winery",
    region: "Napa Valley",
    country: "USA",
    category: "wine",
    varietal: "Bordeaux Blend",
    availability: "exclusive",
    image: "/assets/portfolio/alpha-omega.png",
    producerUrl: "https://www.aowinery.com",
    description: {
      en: "A Napa Valley benchmark Bordeaux blend crafted with precision and restraint — structured, layered, and built for collectors.",
      es: "Un referente bordelés de Napa Valley, elaborado con precisión y contención — estructurado, complejo y pensado para coleccionistas.",
    },
  }),
  product({
    sku: "AFI-W-002",
    name: "Schug Carneros Estate",
    producer: "Schug Winery",
    region: "Carneros",
    country: "USA",
    category: "wine",
    varietal: "Pinot Noir",
    availability: "core",
    image: "/assets/portfolio/schug.png",
    producerUrl: "https://www.schugwinery.com",
    description: {
      en: "Cool-climate Carneros Pinot Noir with silky texture, bright cherry fruit, and classic Burgundian elegance.",
      es: "Pinot Noir de Carneros en clima fresco, con textura sedosa, cereza vibrante y elegancia borgoñona clásica.",
    },
  }),
  product({
    sku: "AFI-W-003",
    name: "DAOU Estate",
    producer: "DAOU Family Estates",
    region: "Paso Robles",
    country: "USA",
    category: "wine",
    varietal: "Cabernet Sauvignon",
    availability: "core",
    image: "/assets/portfolio/daou.png",
    producerUrl: "https://www.daouvineyards.com",
    description: {
      en: "Paso Robles Cabernet with mountain intensity, dark fruit depth, and polished tannins from Adelaida District fruit.",
      es: "Cabernet de Paso Robles con intensidad de montaña, fruta oscura profunda y taninos pulidos del Adelaida District.",
    },
  }),
  product({
    sku: "AFI-W-005",
    name: "Quinta do Crasto",
    producer: "Quinta do Crasto",
    region: "Douro",
    country: "Portugal",
    category: "wine",
    varietal: "Touriga Nacional",
    availability: "core",
    image: "/assets/portfolio/quinta-do-crasto.png",
    producerUrl: "https://www.quintadocrasto.pt",
    description: {
      en: "Douro excellence from a historic quinta — Touriga Nacional with structure, spice, and Atlantic freshness.",
      es: "Excelencia del Douro desde una quinta histórica — Touriga Nacional con estructura, especias y frescura atlántica.",
    },
  }),
  product({
    sku: "AFI-W-006",
    name: "Textbook Wines",
    producer: "Textbook Wines",
    region: "Napa Valley",
    country: "USA",
    category: "wine",
    varietal: "Chardonnay",
    availability: "limited",
    image: "/assets/portfolio/textbook.png",
    description: {
      en: "Napa Chardonnay that balances richness and precision — textbook California craft with restrained oak.",
      es: "Chardonnay de Napa que equilibra riqueza y precisión — craft californiano con roble contenido.",
    },
  }),
  product({
    sku: "AFI-W-007",
    name: "Bodegas Chaves",
    producer: "Bodegas Chaves",
    region: "Ribera del Duero",
    country: "Spain",
    category: "wine",
    varietal: "Tempranillo",
    availability: "exclusive",
    image: "/assets/portfolio/bodegas-chaves.png",
    description: {
      en: "",
      es: "Tempranillo de Ribera del Duero con profundidad, mineralidad y la gravedad de los grandes vinos de meseta.",
    },
  }),
  product({
    sku: "AFI-W-008",
    name: "Finca Rodma",
    producer: "Finca Rodma",
    region: "Rioja",
    country: "Spain",
    category: "wine",
    varietal: "Garnacha",
    availability: "limited",
    image: "/assets/portfolio/finca-rodma.png",
    description: {
      en: "",
      es: "Garnacha de viñedos viejos en Rioja — fruta generosa, taninos finos y sentido de lugar en cada copa.",
    },
  }),
  product({
    sku: "AFI-W-009",
    name: "AXR Napa Valley",
    producer: "AXR Winery",
    region: "Napa Valley",
    country: "USA",
    category: "wine",
    varietal: "Red Blend",
    availability: "exclusive",
    image: "/assets/portfolio/axr-napa-valley.png",
    producerUrl: "https://www.axrnapa.com",
    description: {
      en: "A bold Napa wine from a visionary estate — power, polish, and exclusivity in equal measure.",
      es: "Un audaz blend tinto de Napa desde una finca visionaria — potencia, elegancia y exclusividad a partes iguales.",
    },
  }),
  product({
    sku: "AFI-W-010",
    name: "Michel Rolland",
    producer: "Michel Rolland Collection",
    region: "Bordeaux",
    country: "France",
    category: "wine",
    varietal: "Cabernet",
    availability: "exclusive",
    image: "/assets/portfolio/michel-rolland.png",
    description: {
      en: "Consulting legend Michel Rolland's signature Cabernet — opulent and polished.",
      es: "El Merlot blend emblemático de Michel Rolland — opulento, pulido e inconfundiblemente bordelés.",
    },
  }),
  product({
    sku: "AFI-W-011",
    name: "Argiano",
    producer: "Argiano",
    region: "Montalcino",
    country: "Italy",
    category: "wine",
    varietal: "Brunello di Montalcino",
    availability: "core",
    image: "/assets/portfolio/argiano.png",
    producerUrl: "https://www.argiano.com",
    description: {
      en: "Brunello di Montalcino from a historic estate — sangiovese with aging potential and Tuscan soul.",
      es: "Brunello di Montalcino de una finca histórica — sangiovese con potencial de guarda y alma toscana.",
    },
  }),
  product({
    sku: "AFI-W-012",
    name: "Lange Twins",
    producer: "LangeTwins Family",
    region: "Lodi",
    country: "USA",
    category: "wine",
    varietal: "Zinfandel",
    availability: "core",
    image: "/assets/portfolio/lange-twins.png",
    producerUrl: "https://www.lwinery.com",
    description: {
      en: "Old-vine Lodi Zinfandel from a sixth-generation family — jammy fruit, spice, and California heritage.",
      es: "Zinfandel de viñedos viejos en Lodi de una familia de sexta generación — fruta intensa, especias y legado californiano.",
    },
  }),
  product({
    sku: "AFI-W-013",
    name: "Gonet",
    producer: "Champagne Gonet",
    region: "Champagne",
    country: "France",
    category: "wine",
    varietal: "Chardonnay",
    availability: "limited",
    image: "/assets/portfolio/gonet.png",
    description: {
      en: "Grower Champagne from the Côte des Blancs — Chardonnay-driven finesse with chalky precision.",
      es: "Champagne de viticultor en la Côte des Blancs — finesse centrada en Chardonnay con precisión calcárea.",
    },
  }),
  product({
    sku: "AFI-W-014",
    name: "Continuum Estate",
    producer: "Continuum Estate",
    region: "Napa Valley",
    country: "USA",
    category: "wine",
    varietal: "Proprietary Red",
    availability: "exclusive",
    image: "/assets/portfolio/continuum.png",
    vintage: "2019",
    producerUrl: "https://www.continuumestate.com",
    description: {
      en: "The Mondavi family's Pritchard Hill icon — a proprietary red of extraordinary depth and longevity.",
      es: "El ícono de Pritchard Hill de la familia Mondavi — un tinto propietario de profundidad y longevidad extraordinarias.",
    },
  }),
  product({
    sku: "AFI-W-015",
    name: "Produttori del Barbaresco",
    producer: "Produttori del Barbaresco",
    region: "Piedmont",
    country: "Italy",
    category: "wine",
    varietal: "Nebbiolo",
    availability: "core",
    image: "/assets/portfolio/produttori-barbaresco.png",
    producerUrl: "https://www.produttori.com",
    description: {
      en: "Cooperative Barbaresco at its finest — Nebbiolo with rose, tar, and the elegance of Piedmont.",
      es: "Barbaresco cooperativo en su máxima expresión — Nebbiolo con rosa, alquitrán y la elegancia de Piamonte.",
    },
  }),
  product({
    sku: "AFI-W-016",
    name: "Tapiz",
    producer: "Bodega Tapiz",
    region: "Mendoza",
    country: "Argentina",
    category: "wine",
    varietal: "Malbec",
    availability: "core",
    image: "/assets/portfolio/tapiz.png",
    organic: true,
    producerUrl: "https://www.tapiz.com",
    description: {
      en: "Organic Mendoza Malbec from high-elevation vineyards — plush fruit with Andean freshness.",
      es: "Malbec orgánico de Mendoza en viñedos de gran altitud — fruta generosa con frescura andina.",
    },
  }),
  product({
    sku: "AFI-W-017",
    name: "Godeval",
    producer: "Bodegas Godeval",
    region: "Valdeorras",
    country: "Spain",
    category: "wine",
    varietal: "Godello",
    availability: "limited",
    image: "/assets/portfolio/godeval.png",
    description: {
      en: "Galician Godello with Atlantic minerality — a white of texture, salinity, and quiet sophistication.",
      es: "Godello gallego con mineralidad atlántica — un blanco de textura, salinidad y sofisticación contenida.",
    },
  }),
  product({
    sku: "AFI-W-018",
    name: "Damilano",
    producer: "Damilano",
    region: "Barolo",
    country: "Italy",
    category: "wine",
    varietal: "Nebbiolo",
    availability: "core",
    image: "/assets/portfolio/damilano.png",
    producerUrl: "https://www.damilano.com",
    description: {
      en: "Barolo from a historic cantina — Nebbiolo with structure, rose petals, and decades of pedigree.",
      es: "Barolo de una cantina histórica — Nebbiolo con estructura, pétalos de rosa y décadas de pedigrí.",
    },
  }),
  product({
    sku: "AFI-W-019",
    name: "Piña Napa Valley",
    producer: "Piña Vineyard",
    region: "Napa Valley",
    country: "USA",
    category: "wine",
    varietal: "Cabernet Sauvignon",
    availability: "limited",
    image: "/assets/portfolio/pina-napa-valley.png",
    description: {
      en: "Single-vineyard Napa Cabernet — concentrated, age-worthy, and crafted for the discerning collector.",
      es: "Cabernet de viñedo único en Napa — concentrado, longevo y elaborado para el coleccionista exigente.",
    },
  }),
  product({
    sku: "AFI-W-020",
    name: "Bodegas Resalte",
    producer: "Bodegas Resalte",
    region: "Ribera del Duero",
    country: "Spain",
    category: "wine",
    varietal: "Tempranillo",
    availability: "core",
    image: "/assets/portfolio/bodegas-resalte.png",
    description: {
      en: "Ribera del Duero Tempranillo with dark fruit, oak integration, and the soul of Castilla y León.",
      es: "Tempranillo de Ribera del Duero con fruta oscura, integración de roble y el alma de Castilla y León.",
    },
  }),
  product({
    sku: "AFI-S-001",
    name: "Jack Rudy Cocktail Co.",
    producer: "Jack Rudy Cocktail Co.",
    region: "Charleston",
    country: "USA",
    category: "mixers",
    varietal: "Cocktail Mixers",
    availability: "core",
    image: "/assets/portfolio/jack-rudy.png",
    producerUrl: "https://www.jackrudycocktailco.com",
    description: {
      en: "Artisan cocktail mixers and bitters from Charleston — crafted for the modern bar and home enthusiast.",
      es: "Mixers y bitters artesanales de Charleston — elaborados para el bar moderno y el entusiasta en casa.",
    },
  }),
  product({
    sku: "AFI-S-002",
    name: "Boylan Bottling",
    producer: "Boylan Bottling Co.",
    region: "New Jersey",
    country: "USA",
    category: "mixers",
    varietal: "Craft Sodas & Tonics",
    availability: "core",
    image: "/assets/portfolio/boylan-bottling.png",
    producerUrl: "https://www.boylanbottling.com",
    description: {
      en: "Heritage craft sodas and tonics — cane sugar, real ingredients, and the gold standard for mixology.",
      es: "Sodas y tónicas artesanales de herencia — azúcar de caña, ingredientes reales y el estándar de oro para mixología.",
    },
  }),
  product({
    sku: "AFI-S-004",
    name: "Mossburn Distillers",
    producer: "Mossburn",
    region: "Speyside",
    country: "Scotland",
    category: "spirits",
    varietal: "Single Malt Scotch",
    availability: "exclusive",
    image: "/assets/portfolio/mossburn.png",
    producerUrl: "https://www.mossburndistillers.com",
    description: {
      en: "Speyside single malt Scotch — honeyed malt, orchard fruit, and the warmth of Scottish craft.",
      es: "Single malt escocés de Speyside — malta acaramelada, fruta de huerto y la calidez del craft escocés.",
    },
  }),
  product({
    sku: "AFI-S-005",
    name: "Whip-it!",
    producer: "Whip-it! Brands",
    region: "California",
    country: "USA",
    category: "spirits",
    varietal: "RTD Cocktails",
    availability: "core",
    image: "/assets/portfolio/whip-it.png",
    description: {
      en: "Ready-to-drink cocktails with California energy — convenient, flavorful, and on-premise friendly.",
      es: "Cócteles listos para servir con energía californiana — convenientes, sabrosos y ideales para on-premise.",
    },
  }),
  product({
    sku: "AFI-S-006",
    name: "Hatozaki",
    producer: "Hatozaki Distillery",
    region: "Hyogo",
    country: "Japan",
    category: "spirits",
    varietal: "Japanese Whisky",
    availability: "exclusive",
    image: "/assets/portfolio/hatozaki.png",
    producerUrl: "https://www.hatozaki.com",
    description: {
      en: "Japanese whisky from the Kaikyo Distillery in Akashi — delicate, refined, and rooted in Hyogo tradition.",
      es: "Whisky japonés de la destilería Kaikyo en Akashi — delicado, refinado y enraizado en la tradición de Hyogo.",
    },
  }),
  product({
    sku: "AFI-S-007",
    name: "135° East Hyogo Dry Gin",
    slug: "135-east-hyogo-dry-gin",
    producer: "135° East",
    region: "Hyogo",
    country: "Japan",
    category: "spirits",
    varietal: "Dry Gin",
    availability: "limited",
    image: "/assets/portfolio/135-east.webp",
    producerUrl: "https://135eastgin.com",
    description: {
      en: "Hyogo dry gin distilled on the Akashi meridian — botanical precision with a distinctly Japanese point of view.",
      es: "Gin seco de Hyogo destilado en el meridiano de Akashi — precisión botánica con una visión distintivamente japonesa.",
    },
  }),
  product({
    sku: "AFI-S-009",
    name: "Rod & Hammer's SLO Stills",
    slug: "rod-and-hammers-slo-stills",
    producer: "Rod & Hammer's",
    region: "San Luis Obispo",
    country: "USA",
    category: "spirits",
    varietal: "Craft Vodka",
    availability: "limited",
    image: "/assets/portfolio/rod-and-hammers.png",
    description: {
      en: "Small-batch craft vodka from San Luis Obispo — clean, local, and built for premium cocktails.",
      es: "Vodka artesanal de lote pequeño en San Luis Obispo — limpio, local y pensado para cócteles premium.",
    },
  }),
  product({
    sku: "AFI-L-001",
    name: "The Bitter Truth",
    producer: "The Bitter Truth",
    region: "Munich",
    country: "Germany",
    category: "spirits",
    varietal: "Bitters & Liqueurs",
    availability: "core",
    image: "/assets/portfolio/the-bitter-truth.png",
    producerUrl: "https://www.the-bitter-truth.com",
    description: {
      en: "Award-winning bitters and liqueurs from Munich — essential tools for the serious cocktail program.",
      es: "Bitters y licores premiados de Múnich — herramientas esenciales para un programa de cócteles serio.",
    },
  }),
];

export function getProductBottleImage(product: Product): string {
  return product.bottleImage ?? categoryPlaceholders[product.category];
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}

export function getProductStats() {
  return {
    total: products.length,
    wine: products.filter((p) => p.category === "wine").length,
    spirits: products.filter((p) => p.category === "spirits").length,
    mixers: products.filter((p) => p.category === "mixers").length,
    exclusive: products.filter((p) => p.availability === "exclusive").length,
  };
}

export function getProductDescription(product: Product, locale: "en" | "es"): string {
  return product.description[locale];
}
