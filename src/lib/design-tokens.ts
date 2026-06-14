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

export type PortfolioCategory = "all" | "wine" | "spirits" | "beer" | "liqueurs";
