import type { PortfolioCategory, SpiritType, WineOrigin, WineStyle } from "./design-tokens";

export type PortfolioBrand = {
  name: string;
  image: string;
  category: Exclude<PortfolioCategory, "all">;
  wineStyle?: WineStyle;
  wineOrigin?: WineOrigin;
  spiritType?: SpiritType;
};

export const portfolioBrands: PortfolioBrand[] = [
  { name: "Alpha Omega", image: "/assets/portfolio/alpha-omega.png", category: "wine", wineStyle: "red", wineOrigin: "california" },
  { name: "Schug", image: "/assets/portfolio/schug.png", category: "wine", wineStyle: "red", wineOrigin: "california" },
  { name: "Jack Rudy Cocktail Co.", image: "/assets/portfolio/jack-rudy.png", category: "mixers" },
  { name: "DAOU", image: "/assets/portfolio/daou.png", category: "wine", wineStyle: "red", wineOrigin: "california" },
  { name: "Quinta do Crasto", image: "/assets/portfolio/quinta-do-crasto.png", category: "wine", wineStyle: "red", wineOrigin: "portugal" },
  { name: "Boylan Bottling", image: "/assets/portfolio/boylan-bottling.png", category: "mixers" },
  { name: "Textbook", image: "/assets/portfolio/textbook.png", category: "wine", wineStyle: "white", wineOrigin: "california" },
  { name: "Bodegas Chaves", image: "/assets/portfolio/bodegas-chaves.png", category: "wine", wineStyle: "red", wineOrigin: "spain" },
  { name: "Finca Rodma", image: "/assets/portfolio/finca-rodma.png", category: "wine", wineStyle: "red", wineOrigin: "spain" },
  { name: "AXR Napa Valley", image: "/assets/portfolio/axr-napa-valley.png", category: "wine", wineStyle: "red", wineOrigin: "california" },
  { name: "Michel Rolland", image: "/assets/portfolio/michel-rolland.png", category: "wine", wineStyle: "red", wineOrigin: "france" },
  { name: "The Bitter Truth", image: "/assets/portfolio/the-bitter-truth.png", category: "spirits", spiritType: "liqueurs" },
  { name: "Argiano", image: "/assets/portfolio/argiano.png", category: "wine", wineStyle: "red", wineOrigin: "italy" },
  { name: "Lange Twins", image: "/assets/portfolio/lange-twins.png", category: "wine", wineStyle: "red", wineOrigin: "california" },
  { name: "Gonet", image: "/assets/portfolio/gonet.png", category: "wine", wineStyle: "sparkling", wineOrigin: "france" },
  { name: "Continuum", image: "/assets/portfolio/continuum.png", category: "wine", wineStyle: "red", wineOrigin: "california" },
  { name: "Produttori del Barbaresco", image: "/assets/portfolio/produttori-barbaresco.png", category: "wine", wineStyle: "red", wineOrigin: "italy" },
  { name: "Mossburn", image: "/assets/portfolio/mossburn.png", category: "spirits", spiritType: "whisky" },
  { name: "Tapiz", image: "/assets/portfolio/tapiz.png", category: "wine", wineStyle: "red", wineOrigin: "argentina" },
  { name: "Whip-it!", image: "/assets/portfolio/whip-it.png", category: "spirits", spiritType: "other" },
  { name: "Godeval", image: "/assets/portfolio/godeval.png", category: "wine", wineStyle: "white", wineOrigin: "spain" },
  { name: "Hatozaki", image: "/assets/portfolio/hatozaki.png", category: "spirits", spiritType: "whisky" },
  { name: "135° East", image: "/assets/portfolio/135-east.webp", category: "spirits", spiritType: "gin" },
  { name: "Rod & Hammer's", image: "/assets/portfolio/rod-and-hammers.png", category: "spirits", spiritType: "vodka" },
  { name: "Damilano", image: "/assets/portfolio/damilano.png", category: "wine", wineStyle: "red", wineOrigin: "italy" },
  { name: "Piña Napa Valley", image: "/assets/portfolio/pina-napa-valley.png", category: "wine", wineStyle: "red", wineOrigin: "california" },
  { name: "Bodegas Resalte", image: "/assets/portfolio/bodegas-resalte.png", category: "wine", wineStyle: "red", wineOrigin: "spain" },
];
