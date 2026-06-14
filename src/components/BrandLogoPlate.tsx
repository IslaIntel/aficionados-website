import Image from "next/image";

type BrandLogoPlateProps = {
  src: string;
  alt: string;
  height?: "sm" | "md" | "lg";
  className?: string;
};

const heights = {
  sm: "h-20",
  md: "h-24",
  lg: "h-32",
};

const imageHeights = {
  sm: "max-h-12",
  md: "max-h-16",
  lg: "max-h-24",
};

export function BrandLogoPlate({
  src,
  alt,
  height = "md",
  className = "",
}: BrandLogoPlateProps) {
  return (
    <div
      className={`relative flex ${heights[height]} items-center justify-center overflow-hidden border border-white/10 bg-[linear-gradient(145deg,#2f2b28_0%,#1a1714_55%,#141210_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-12px_24px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(197,160,115,0.12),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:12px_12px]" />
      <Image
        src={src}
        alt={alt}
        width={220}
        height={120}
        className={`relative z-10 w-auto object-contain ${imageHeights[height]} drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]`}
      />
    </div>
  );
}
