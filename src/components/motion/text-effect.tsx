"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

type Preset = "fade" | "slide" | "blur";

const presetVariants: Record<Preset, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(6px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

const containerTags = {
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

export function TextEffect({
  children,
  per = "word",
  preset = "slide",
  as: Tag = "span",
  className,
  delay = 0,
  staggerDelay = 0.035,
}: {
  children: string;
  per?: "char" | "word";
  preset?: Preset;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) {
  const reduce = useReducedMotion();
  const variant = presetVariants[preset];
  const segments = per === "char" ? children.split("") : children.split(" ");

  if (reduce) {
    const Static = Tag;
    return <Static className={className}>{children}</Static>;
  }

  const Container = containerTags[Tag];

  return (
    <Container
      className={cn("inline", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
    >
      {segments.map((segment, i) => (
        <motion.span key={i} variants={variant} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="inline-block">
          {segment === " " ? " " : segment}
          {per === "word" && i < segments.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Container>
  );
}
