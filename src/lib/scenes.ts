import type { Product } from "./products";

const wineScenes = [
  "/assets/care-package/care-package-01-napa-heights.png",
  "/assets/care-package/v2/ad-04-golden-hour-toast.png",
  "/assets/care-package/care-package-02-old-world-stone.png",
  "/assets/care-package/v2/ad-05-curator-javier.png",
  "/assets/care-package/care-package-05-curator-cover.png",
  "/assets/care-package/variants/asset1-a.png",
  "/assets/care-package/variants/asset4-a.png",
] as const;

const spiritsScenes = [
  "/assets/care-package/v2/ad-03-bar-placement.png",
  "/assets/care-package/care-package-03-craft-in-light.png",
  "/assets/care-package/v2/ad-01-tasting-room-counter.png",
  "/assets/care-package/variants/asset2-a.jpeg",
  "/assets/care-package/variants/asset3-a.png",
] as const;

const liqueurScenes = [
  "/assets/care-package/v2/ad-02-portfolio-launch.png",
  "/assets/care-package/care-package-03-craft-in-light.png",
  "/assets/care-package/variants/asset5-a.png",
  "/assets/editorial/tasting-room.webp",
] as const;

export const portfolioSlides = [
  {
    src: "/assets/care-package/v2/ad-04-golden-hour-toast.png",
    key: "toast",
  },
  {
    src: "/assets/care-package/care-package-01-napa-heights.png",
    key: "napa",
  },
  {
    src: "/assets/care-package/v2/ad-01-tasting-room-counter.png",
    key: "counter",
  },
  {
    src: "/assets/care-package/care-package-04-shared-moments-pr.png",
    key: "moments",
  },
  {
    src: "/assets/care-package/v2/ad-05-curator-javier.png",
    key: "curator",
  },
  {
    src: "/assets/care-package/care-package-02-old-world-stone.png",
    key: "stone",
  },
] as const;

function hashIndex(value: string, length: number) {
  let hash = 0;
  for (const char of value) {
    hash = (hash * 33 + char.charCodeAt(0)) >>> 0;
  }
  return hash % length;
}

export function getProductSceneImage(product: Product): string {
  if (product.bottleImage && !product.bottleImage.endsWith(".svg")) {
    return product.bottleImage;
  }

  const pool =
    product.category === "spirits"
      ? spiritsScenes
      : product.category === "liqueurs"
        ? liqueurScenes
        : wineScenes;

  return pool[hashIndex(product.slug, pool.length)];
}
