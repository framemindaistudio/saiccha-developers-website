"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { Phone, WhatsappLogo, CalendarCheck, ArrowUp } from "@phosphor-icons/react/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

type DockItem = {
  label: string;
  icon: PhosphorIcon;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  brand?: "whatsapp";
};

const linkItems: DockItem[] = [
  { label: "Call", icon: Phone, href: "tel:+918073087576" },
  { label: "WhatsApp", icon: WhatsappLogo, href: "https://wa.me/918073087576", external: true, brand: "whatsapp" },
  { label: "Book a Site Visit", icon: CalendarCheck, href: "/contact" },
];

function DockButton({ item, mouseX }: { item: DockItem; mouseX: MotionValue<number> }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return 0;
    return val - (rect.left + rect.width / 2);
  });

  const widthSync = useTransform(distance, [-140, 0, 140], [44, 60, 44]);
  const width = useSpring(widthSync, { mass: 0.15, stiffness: 220, damping: 18 });

  const Icon = item.icon;
  const isWhatsapp = item.brand === "whatsapp";

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className={`group relative flex cursor-pointer items-center justify-center rounded-full shadow-md shadow-foreground/10 ${
        isWhatsapp ? "bg-whatsapp text-on-whatsapp" : "bg-surface-raised text-primary"
      }`}
    >
      <Icon size={20} weight={isWhatsapp ? "fill" : "regular"} />
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
        {item.label}
      </span>
    </motion.div>
  );

  if (item.onClick) {
    return (
      <button type="button" onClick={item.onClick} aria-label={item.label}>
        {content}
      </button>
    );
  }

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href!} aria-label={item.label}>
      {content}
    </Link>
  );
}

export function FloatingDock() {
  const mouseX = useMotionValue(Infinity);

  const items: DockItem[] = [
    ...linkItems,
    {
      label: "Back to top",
      icon: ArrowUp,
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
  ];

  return (
    <div className="fixed bottom-5 left-5 z-40 hidden md:block">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-3 rounded-full border border-border bg-surface-raised/90 px-4 py-3 shadow-lg shadow-foreground/10 backdrop-blur-md"
      >
        {items.map((item) => (
          <DockButton key={item.label} item={item} mouseX={mouseX} />
        ))}
      </motion.div>
    </div>
  );
}
