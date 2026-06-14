"use client";

import type { ReactNode } from "react";
import { Hero } from "./Hero";

type HeroOverlapProps = {
  children: ReactNode;
};

export function HeroOverlap({ children }: HeroOverlapProps) {
  return (
    <div className="relative">
      <div className="sticky top-0 z-0 h-svh">
        <Hero />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
