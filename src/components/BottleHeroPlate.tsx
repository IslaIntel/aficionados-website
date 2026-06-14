import Image from "next/image";
import type { Product } from "@/lib/products";
import { getProductBottleImage } from "@/lib/products";

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

const imageHeights = {
  sm: "max-h-40",
  md: "max-h-52",
  lg: "max-h-64",
  xl: "max-h-[22rem]",
};

export function BottleHeroPlate({
  product,
  height = "md",
  className = "",
  showLogoLabel = true,
}: BottleHeroPlateProps) {
  const bottleSrc = getProductBottleImage(product);
  const isSvg = bottleSrc.endsWith(".svg");

  return (
    <div
      className={`relative flex ${heights[height]} flex-col items-center justify-end overflow-hidden border border-white/10 bg-[linear-gradient(180deg,#2a2622_0%,#171412_42%,#0f0e0c_100%)] px-6 pb-4 pt-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-24px_48px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(197,160,115,0.16),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-[radial-gradient(ellipse_at_50%_100%,rgba(197,160,115,0.08),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:14px_14px]" />

      <Image
        src={bottleSrc}
        alt={`${product.name} bottle`}
        width={isSvg ? 200 : 320}
        height={isSvg ? 420 : 640}
        className={`relative z-10 w-auto object-contain object-bottom drop-shadow-[0_18px_36px_rgba(0,0,0,0.55)] ${imageHeights[height]}`}
        priority={height === "xl"}
      />

      {showLogoLabel && (
        <div className="relative z-10 mt-4 flex h-10 w-full items-center justify-center border-t border-white/10 pt-3">
          <Image
            src={product.image}
            alt={`${product.producer} logo`}
            width={120}
            height={40}
            className="max-h-8 w-auto object-contain opacity-70"
          />
        </div>
      )}
    </div>
  );
}
