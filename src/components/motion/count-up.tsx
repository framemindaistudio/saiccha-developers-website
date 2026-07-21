"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  const match = value.match(/^([\d.]+)(.*)$/);
  const numeric = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node || numeric === null) return;

    if (reduce) {
      node.textContent = value;
      return;
    }

    node.textContent = `0${suffix}`;
    const isInt = Number.isInteger(numeric);
    const controls = animate(0, numeric, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        if (node) {
          node.textContent = (isInt ? Math.round(latest) : latest.toFixed(1)) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [inView, numeric, suffix, reduce, value]);

  return (
    <span ref={ref} className={className}>
      {numeric === null ? value : `0${suffix}`}
    </span>
  );
}
