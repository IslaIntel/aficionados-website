"use client";

import { motion, useReducedMotion } from "framer-motion";

type MotionOverlayProps = {
  variant?: "hero" | "section";
};

export function MotionOverlay({ variant = "section" }: MotionOverlayProps) {
  const reduceMotion = useReducedMotion();
  const count = variant === "hero" ? 18 : 8;

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(197,160,115,0.14),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(166,137,102,0.1),transparent_35%)]" />

      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-bronze-light/20 blur-sm"
          style={{
            width: 4 + (i % 5) * 3,
            height: 4 + (i % 5) * 3,
            left: `${(i * 17) % 100}%`,
            top: `${(i * 23) % 100}%`,
          }}
          animate={{
            y: [0, -30 - (i % 4) * 10, 0],
            x: [0, (i % 2 === 0 ? 12 : -12), 0],
            opacity: [0.15, 0.55, 0.15],
          }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <motion.div
        className="absolute top-1/4 -right-20 h-72 w-72 rounded-full border border-bronze/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full border border-white/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:64px_64px]" />
    </div>
  );
}
