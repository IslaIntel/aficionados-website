export type PressMention = {
  name: string;
  logo: string;
  url: string;
  /** Short note for internal reference — not rendered on site */
  context: string;
  width: number;
  height: number;
};

/**
 * Verified third-party coverage naming Aficionados Wine & Spirits.
 * Logos sourced from official publication sites — June 2026.
 */
export const pressMentions: PressMention[] = [
  {
    name: "El Nuevo Día",
    logo: "/assets/press/el-nuevo-dia.png",
    url: "https://www.elnuevodia.com/gastronomia/restaurantes/notas/tres-senderos-el-nuevo-vino-de-los-chefs-xavier-pacheco-rene-marichal-y-raul-correa/",
    context: "Tres Senderos wine launch — distribution partner",
    width: 260,
    height: 114,
  },
  {
    name: "Placeres",
    logo: "/assets/press/placeres.png",
    url: "https://www.placerespr.com/muy-activa-do-rias-baixas-en-puerto-rico/",
    context: "DO Rías Baixas campaign — Bodegas Chaves importer",
    width: 330,
    height: 110,
  },
  {
    name: "FoodiesPR",
    logo: "/assets/press/foodiespr.png",
    url: "https://www.foodiespr.com/2025/07/tres-senderos-edicion-limitada/",
    context: "Tres Senderos limited edition distribution",
    width: 494,
    height: 163,
  },
  {
    name: "Pride Society Magazine",
    logo: "/assets/press/pride-society.png",
    url: "https://pridesocietymagazine.com/en-expansion-el-mapa-del-vino-en-puerto-rico/",
    context: "Puerto Rico wine market expansion — distributor feature",
    width: 495,
    height: 182,
  },
  {
    name: "ViBeer",
    logo: "/assets/press/vibeer.png",
    url: "https://vibeermag.com/prmd-celebra-una-noche-de-distincion-y-logros-con-una-cata-en-aficionados-pr/",
    context: "PRMD Wine Tasting 2024 hosted at Aficionados PR",
    width: 400,
    height: 95,
  },
];
