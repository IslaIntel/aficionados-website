import type { PortfolioCategory } from "./design-tokens";

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
  category: Exclude<PortfolioCategory, "all" | "beer">;
  varietal: string;
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
  liqueurs: "/assets/bottles/placeholder-liqueur.svg",
};

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
  return {
    ...data,
    slug: data.slug ?? slugify(data.name),
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
    sku: "AFI-W-004",
    name: "Finca Río Negro",
    producer: "Finca Río Negro",
    region: "Uco Valley",
    country: "Argentina",
    category: "wine",
    varietal: "Malbec",
    availability: "limited",
    image: "/assets/portfolio/finca-rio-negro.png",
    organic: true,
    description: {
      en: "High-altitude Uco Valley Malbec — organic, expressive, and rooted in Argentina's most dramatic terroir.",
      es: "Malbec orgánico de la Uco Valley a gran altitud — expresivo y enraizado en el terroir más dramático de Argentina.",
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
      en: "Ribera del Duero Tempranillo with depth, mineral drive, and the gravitas of Spain's great plateau wines.",
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
      en: "Old-vine Garnacha from Rioja — generous fruit, fine tannins, and a sense of place in every glass.",
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
      en: "A bold Napa red blend from a visionary estate — power, polish, and exclusivity in equal measure.",
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
    varietal: "Merlot Blend",
    availability: "exclusive",
    image: "/assets/portfolio/michel-rolland.png",
    description: {
      en: "Consulting legend Michel Rolland's signature Merlot blend — opulent, polished, and unmistakably Bordeaux.",
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
    category: "spirits",
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
    category: "spirits",
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
    sku: "AFI-S-003",
    name: "Jax Spirits",
    producer: "Jax Spirits",
    region: "Louisiana",
    country: "USA",
    category: "spirits",
    varietal: "American Whiskey",
    availability: "limited",
    image: "/assets/portfolio/jax.png",
    description: {
      en: "Louisiana American whiskey with Southern character — bold, approachable, and bar-ready.",
      es: "Whiskey americano de Louisiana con carácter sureño — audaz, accesible y listo para el bar.",
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
    sku: "AFI-S-008",
    name: "Gin MG",
    producer: "Gin MG",
    region: "Málaga",
    country: "Spain",
    category: "spirits",
    varietal: "London Dry Gin",
    availability: "core",
    image: "/assets/portfolio/gin-mg.png",
    description: {
      en: "Spanish London Dry Gin from Málaga — classic juniper backbone with Mediterranean botanical lift.",
      es: "London Dry Gin español de Málaga — estructura clásica de enebro con un toque botánico mediterráneo.",
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
    category: "liqueurs",
    varietal: "Bitters & Liqueurs",
    availability: "core",
    image: "/assets/portfolio/the-bitter-truth.png",
    producerUrl: "https://www.the-bitter-truth.com",
    description: {
      en: "Award-winning bitters and liqueurs from Munich — essential tools for the serious cocktail program.",
      es: "Bitters y licores premiados de Múnich — herramientas esenciales para un programa de cócteles serio.",
    },
  }),
  product({
    sku: "AFI-L-002",
    name: "Mozart Chocolate Liqueur",
    slug: "mozart-chocolate-liqueur",
    producer: "Mozart Distillerie",
    region: "Salzburg",
    country: "Austria",
    category: "liqueurs",
    varietal: "Chocolate Liqueur",
    availability: "core",
    image: "/assets/portfolio/mozart.png",
    producerUrl: "https://www.mozart.at",
    description: {
      en: "Salzburg chocolate liqueur — velvety, indulgent, and the finishing touch for dessert cocktails.",
      es: "Licor de chocolate de Salzburgo — aterciopelado, indulgente y el toque final para cócteles de postre.",
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
    liqueurs: products.filter((p) => p.category === "liqueurs").length,
    exclusive: products.filter((p) => p.availability === "exclusive").length,
  };
}

export function getProductDescription(product: Product, locale: "en" | "es"): string {
  return product.description[locale];
}
