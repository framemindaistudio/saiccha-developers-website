"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export function ProgressTracker({
  percent,
  phase,
  updated,
}: {
  percent: number;
  phase: string;
  updated: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between">
        <span className="font-display text-3xl tracking-tight tabular-nums">{percent}%</span>
        <span className="text-xs text-muted-foreground">Updated {updated}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: reduce ? `${percent}%` : 0 }}
          animate={inView ? { width: `${percent}%` } : {}}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <span className="text-sm text-muted-foreground">Current phase: {phase}</span>
    </div>
  );
}
