"use client";

import { motion } from "motion/react";

export function StackedCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div className="relative" initial="rest" whileHover="hover" whileTap="hover" animate="rest">
      <motion.div
        aria-hidden
        variants={{
          rest: { opacity: 0, y: 0, rotate: 0 },
          hover: { opacity: 1, y: 14, rotate: -2 },
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -z-10 rounded-card border border-border-strong bg-surface"
      />
      <motion.div
        variants={{ rest: { y: 0 }, hover: { y: -8 } }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex h-full flex-col gap-4 rounded-card border border-border bg-surface-raised p-6 shadow-sm shadow-foreground/5"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
