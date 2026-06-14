import type { PortfolioCategory } from "./design-tokens";

export type PortfolioBrand = {
  name: string;
  image: string;
  category: Exclude<PortfolioCategory, "all">;
};

export const portfolioBrands: PortfolioBrand[] = [
  { name: "Alpha Omega", image: "/assets/portfolio/alpha-omega.png", category: "wine" },
  { name: "Schug", image: "/assets/portfolio/schug.png", category: "wine" },
  { name: "Jack Rudy Cocktail Co.", image: "/assets/portfolio/jack-rudy.png", category: "spirits" },
  { name: "DAOU", image: "/assets/portfolio/daou.png", category: "wine" },
  { name: "Finca Río Negro", image: "/assets/portfolio/finca-rio-negro.png", category: "wine" },
  { name: "Quinta do Crasto", image: "/assets/portfolio/quinta-do-crasto.png", category: "wine" },
  { name: "Boylan Bottling", image: "/assets/portfolio/boylan-bottling.png", category: "spirits" },
  { name: "Textbook", image: "/assets/portfolio/textbook.png", category: "wine" },
  { name: "Bodegas Chaves", image: "/assets/portfolio/bodegas-chaves.png", category: "wine" },
  { name: "Finca Rodma", image: "/assets/portfolio/finca-rodma.png", category: "wine" },
  { name: "AXR Napa Valley", image: "/assets/portfolio/axr-napa-valley.png", category: "wine" },
  { name: "Michel Rolland", image: "/assets/portfolio/michel-rolland.png", category: "wine" },
  { name: "Jax", image: "/assets/portfolio/jax.png", category: "spirits" },
  { name: "The Bitter Truth", image: "/assets/portfolio/the-bitter-truth.png", category: "liqueurs" },
  { name: "Argiano", image: "/assets/portfolio/argiano.png", category: "wine" },
  { name: "Lange Twins", image: "/assets/portfolio/lange-twins.png", category: "wine" },
  { name: "Gonet", image: "/assets/portfolio/gonet.png", category: "wine" },
  { name: "Continuum", image: "/assets/portfolio/continuum.png", category: "wine" },
  { name: "Produttori del Barbaresco", image: "/assets/portfolio/produttori-barbaresco.png", category: "wine" },
  { name: "Mossburn", image: "/assets/portfolio/mossburn.png", category: "spirits" },
  { name: "Tapiz", image: "/assets/portfolio/tapiz.png", category: "wine" },
  { name: "Whip-it!", image: "/assets/portfolio/whip-it.png", category: "spirits" },
  { name: "Mozart", image: "/assets/portfolio/mozart.png", category: "liqueurs" },
  { name: "Godeval", image: "/assets/portfolio/godeval.png", category: "wine" },
  { name: "Hatozaki", image: "/assets/portfolio/hatozaki.png", category: "spirits" },
  { name: "135° East", image: "/assets/portfolio/135-east.webp", category: "spirits" },
  { name: "Gin MG", image: "/assets/portfolio/gin-mg.png", category: "spirits" },
  { name: "Rod & Hammer's", image: "/assets/portfolio/rod-and-hammers.png", category: "spirits" },
  { name: "Damilano", image: "/assets/portfolio/damilano.png", category: "wine" },
  { name: "Piña Napa Valley", image: "/assets/portfolio/pina-napa-valley.png", category: "wine" },
  { name: "Bodegas Resalte", image: "/assets/portfolio/bodegas-resalte.png", category: "wine" },
];
