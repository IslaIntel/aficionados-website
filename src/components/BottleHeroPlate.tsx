import Image from "next/image";
import type { Product } from "@/lib/products";
import { getProductSceneImage } from "@/lib/scenes";

type BottleHeroPlateProps = {
  product: Product;
  height?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showLogoLabel?: boolean;
};

const heights = {
  sm: "h-48",
  md: "h-64",
  lg: "h-80",
  xl: "h-[28rem]",
};

export function BottleHeroPlate({
  product,
  height = "md",
  className = "",
  showLogoLabel = true,
}: BottleHeroPlateProps) {
  const sceneSrc = getProductSceneImage(product);

  return (
    <div
      className={`relative ${heights[height]} overflow-hidden border border-white/10 bg-charcoal ${className}`}
    >
      <Image
        src={sceneSrc}
        alt={`${product.name} — ${product.region}`}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes="(min-width: 1280px) 360px, (min-width: 640px) 50vw, 100vw"
        priority={height === "xl"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(197,160,115,0.16),transparent_58%)]" />

      {showLogoLabel && (
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4">
          <Image
            src={product.image}
            alt={`${product.producer} logo`}
            width={140}
            height={48}
            className="max-h-10 w-auto object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)]"
          />
          <span className="text-[0.62rem] tracking-[0.16em] text-white/70 uppercase">
            {product.region}
          </span>
        </div>
      )}
    </div>
  );
}
