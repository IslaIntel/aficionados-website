export function SegmentRow<T extends string>({
  label,
  allLabel,
  value,
  options,
  labelFor,
  onChange,
  tone,
}: {
  label: string;
  allLabel: string;
  value: "all" | T;
  options: readonly T[];
  labelFor: (key: T) => string;
  onChange: (next: "all" | T) => void;
  tone: "light" | "dark";
}) {
  const idle =
    tone === "light"
      ? "border-charcoal/15 bg-white/40 text-charcoal/65 hover:border-charcoal/35"
      : "border-white/15 text-white/55 hover:border-white/30";
  const active =
    tone === "light"
      ? "border-charcoal bg-charcoal text-bronze-light"
      : "border-bronze-light bg-bronze/20 text-bronze-light";

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
      <p
        className={`shrink-0 pt-2 text-[0.62rem] tracking-[0.18em] uppercase ${
          tone === "light" ? "text-charcoal/45" : "text-white/40"
        }`}
      >
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onChange("all")}
          className={`border px-3 py-1.5 text-[0.62rem] tracking-[0.16em] uppercase transition ${
            value === "all" ? active : idle
          }`}
        >
          {allLabel}
        </button>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`border px-3 py-1.5 text-[0.62rem] tracking-[0.16em] uppercase transition ${
              value === option ? active : idle
            }`}
          >
            {labelFor(option)}
          </button>
        ))}
      </div>
    </div>
  );
}
