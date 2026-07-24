"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export function PhaseBar({
  phases,
  unit = "acres",
}: {
  phases: { label: string; acres: number }[];
  unit?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const total = phases.reduce((sum, p) => sum + p.acres, 0);
  const tones = ["bg-primary", "bg-accent"];

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-secondary">
        {phases.map((phase, i) => {
          const pct = (phase.acres / total) * 100;
          return (
            <motion.div
              key={phase.label}
              className={tones[i % tones.length]}
              initial={{ width: reduce ? `${pct}%` : 0 }}
              animate={inView ? { width: `${pct}%` } : {}}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {phases.map((phase, i) => (
          <div key={phase.label} className="flex items-center gap-2 text-sm">
            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${tones[i % tones.length]}`} />
            <span className="text-foreground">{phase.label}</span>
            <span className="tabular-nums text-muted-foreground">
              {phase.acres.toLocaleString("en-IN")} {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
