"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

function EyeBall({ size }: { size: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [blink, setBlink] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const maxOffset = size * 0.2;
    const trackRadius = 420;

    function handleMove(e: MouseEvent) {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.min(Math.hypot(dx, dy), trackRadius);
      const angle = Math.atan2(dy, dx);
      const ratio = dist / trackRadius;
      x.set(Math.cos(angle) * maxOffset * ratio);
      y.set(Math.sin(angle) * maxOffset * ratio);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [size, x, y, reduce]);

  useEffect(() => {
    if (reduce) return;
    const blinkOnce = () => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    };
    const timer = setInterval(blinkOnce, 3600 + Math.random() * 2400);
    return () => clearInterval(timer);
  }, [reduce]);

  return (
    <motion.div
      ref={containerRef}
      className="relative rounded-full bg-on-primary"
      style={{ width: size, height: size }}
      animate={{ scaleY: blink ? 0.1 : 1 }}
      transition={{ duration: 0.12, ease: "easeInOut" }}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="rounded-full bg-primary"
          style={{ width: size * 0.42, height: size * 0.42, x, y }}
        />
      </div>
    </motion.div>
  );
}

export function EyeTracking({
  eyeSize = 16,
  gap = 8,
  className,
}: {
  eyeSize?: number;
  gap?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center", className)} style={{ gap }}>
      <EyeBall size={eyeSize} />
      <EyeBall size={eyeSize} />
    </div>
  );
}
