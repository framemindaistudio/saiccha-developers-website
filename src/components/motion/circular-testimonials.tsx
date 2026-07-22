"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/ssr";
import { initials } from "@/lib/utils";

type Testimonial = { quote: string; name: string; role: string };

export function CircularTestimonials({
  testimonials,
  autoplay = true,
  interval = 5000,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    [testimonials.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
    [testimonials.length]
  );

  useEffect(() => {
    if (!autoplay || testimonials.length < 2) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoplay, interval, next, testimonials.length]);

  const active = testimonials[index];
  const behind = testimonials[(index - 1 + testimonials.length) % testimonials.length];
  const ahead = testimonials[(index + 1) % testimonials.length];

  return (
    <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
      <div className="relative flex h-40 w-44 shrink-0 items-center justify-center">
        {testimonials.length > 1 ? (
          <>
            <div className="absolute left-0 top-1 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-xs font-medium text-primary/45">
              {initials(behind.name)}
            </div>
            <div className="absolute right-0 bottom-1 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-xs font-medium text-primary/35">
              {initials(ahead.name)}
            </div>
          </>
        ) : null}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-4 border-surface bg-accent text-2xl font-medium text-on-accent shadow-lg shadow-foreground/10"
          >
            {initials(active.name)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-1 flex-col gap-5 text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active.quote}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl leading-snug tracking-tight text-foreground md:text-2xl"
          >
            &ldquo;{active.quote}&rdquo;
          </motion.blockquote>
        </AnimatePresence>
        <div>
          <p className="text-sm font-medium text-foreground">{active.name}</p>
          <p className="text-xs text-muted-foreground">{active.role}</p>
        </div>
        {testimonials.length > 1 ? (
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
