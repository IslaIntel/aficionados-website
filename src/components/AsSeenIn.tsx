"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { pressMentions } from "@/lib/press-mentions";
import { designTokens } from "@/lib/design-tokens";

export function AsSeenIn() {
  const t = useTranslations("hero");
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="mt-14 max-w-4xl border-t border-white/10 pt-8"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.55, ease: designTokens.motion.ease }}
    >
      <p className="mb-6 text-[0.58rem] tracking-[0.32em] text-white/40 uppercase">
        {t("asSeenIn")}
      </p>

      <ul className="flex flex-wrap items-center gap-x-10 gap-y-5">
        {pressMentions.map((mention, index) => (
          <motion.li
            key={mention.name}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6 + index * 0.06,
              ease: designTokens.motion.ease,
            }}
          >
            <a
              href={mention.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block opacity-75 transition hover:opacity-100"
              aria-label={mention.name}
            >
              <Image
                src={mention.logo}
                alt={mention.name}
                width={mention.width}
                height={mention.height}
                className="h-8 w-auto max-w-[180px] object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:h-9"
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
