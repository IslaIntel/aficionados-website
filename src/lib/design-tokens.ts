export const designTokens = {
  colors: {
    charcoal: "#231F20",
    bronze: "#A68966",
    bronzeLight: "#C5A073",
    cream: "#F2F2E8",
    burgundy: "#6B443C",
    ivory: "#FAF8F4",
    ink: "#1A1714",
    muted: "#8A7F75",
    white: "#FFFFFF",
  },
  fonts: {
    display: "var(--font-cormorant)",
    body: "var(--font-outfit)",
  },
  motion: {
    ease: [0.22, 1, 0.36, 1] as const,
    duration: 0.7,
  },
} as const;

export type PortfolioCategory =
  | "all"
  | "wine"
  | "spirits"
  | "beer"
  | "glassware"
  | "grocery"
  | "nonfood"
  | "mixers";

export type WineStyle = "sparkling" | "white" | "rose" | "red" | "fortified" | "sake";

export type WineOrigin =
  | "california"
  | "washington"
  | "oregon"
  | "spain"
  | "portugal"
  | "italy"
  | "france"
  | "newZealand"
  | "argentina"
  | "other";

export type SpiritType = "vodka" | "gin" | "tequila" | "whisky" | "liqueurs" | "other";

export const mainCategories = [
  "all",
  "wine",
  "spirits",
  "beer",
  "glassware",
  "grocery",
  "nonfood",
  "mixers",
] as const satisfies readonly PortfolioCategory[];

export const wineStyles = [
  "sparkling",
  "white",
  "rose",
  "red",
  "fortified",
  "sake",
] as const satisfies readonly WineStyle[];

export const wineOrigins = [
  "california",
  "washington",
  "oregon",
  "spain",
  "portugal",
  "italy",
  "france",
  "newZealand",
  "argentina",
  "other",
] as const satisfies readonly WineOrigin[];

export const spiritTypes = [
  "vodka",
  "gin",
  "tequila",
  "whisky",
  "liqueurs",
  "other",
] as const satisfies readonly SpiritType[];
