import type { Product } from "@/lib/products";

export function AvailabilityBadge({
  availability,
  label,
}: {
  availability: Product["availability"];
  label: string;
}) {
  const styles = {
    exclusive: "border-bronze-light/50 bg-bronze/20 text-bronze-light",
    limited: "border-white/25 bg-white/10 text-white/80",
    core: "border-white/15 bg-transparent text-white/55",
  };

  return (
    <span
      className={`inline-block border px-2 py-1 text-[0.58rem] tracking-[0.16em] uppercase ${styles[availability]}`}
    >
      {label}
    </span>
  );
}
