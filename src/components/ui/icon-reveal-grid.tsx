"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { X } from "@phosphor-icons/react/ssr";
import { Icon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

type RevealItem = {
  icon: string;
  title: string;
  body: string;
  image?: string;
};

export function IconRevealGrid({
  items,
  columns = 3,
}: {
  items: RevealItem[];
  columns?: 2 | 3;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const duration = reduce ? 0.15 : 0.5;

  const active = items.find((item) => item.title === activeTitle) ?? null;

  function open(title: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveTitle(title);
    setMounted(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }

  function close() {
    setVisible(false);
    closeTimer.current = setTimeout(() => {
      setMounted(false);
      setActiveTitle(null);
    }, duration * 1000);
  }

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "grid gap-5",
          columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
        )}
      >
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => open(item.title)}
            className="group relative flex cursor-pointer flex-col items-start gap-4 overflow-hidden rounded-card border border-border bg-surface-raised p-7 text-left transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            aria-haspopup="dialog"
          >
            {item.image ? (
              <Image
                src={item.image}
                alt=""
                fill
                aria-hidden="true"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-30 transition-opacity duration-200 group-hover:opacity-40"
              />
            ) : null}
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform duration-200 group-hover:scale-105">
              <Icon name={item.icon} size={32} />
            </div>
            <h3 className="relative z-10 font-display text-xl tracking-tight">{item.title}</h3>
          </button>
        ))}
      </div>

      {mounted && active
        ? createPortal(
            <motion.div
              style={{ transformPerspective: 1400 }}
              animate={
                reduce
                  ? { opacity: visible ? 1 : 0 }
                  : { opacity: visible ? 1 : 0, rotateX: visible ? 0 : -14 }
              }
              transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm sm:p-8"
              onClick={close}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={active.title}
                onClick={(e) => e.stopPropagation()}
                className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-image border border-border bg-surface-raised shadow-2xl shadow-foreground/30"
              >
                {active.image ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground">
                    <motion.div
                      className="absolute inset-0"
                      animate={reduce ? undefined : { scale: visible ? 1 : 1.1 }}
                      transition={{ duration: 5, ease: "linear" }}
                    >
                      <Image
                        src={active.image}
                        alt={active.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 42rem, 100vw"
                        priority
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent" />
                    <button
                      type="button"
                      onClick={close}
                      aria-label="Close"
                      className="absolute top-4 right-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md transition-colors hover:bg-background"
                    >
                      <X size={18} />
                    </button>
                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6">
                      <h3 className="font-display text-2xl tracking-tight text-white">
                        {active.title}
                      </h3>
                      <p className="max-w-md text-sm leading-relaxed text-white/85">{active.body}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative flex flex-col items-center justify-center gap-4 bg-primary px-8 py-14">
                      <button
                        type="button"
                        onClick={close}
                        aria-label="Close"
                        className="absolute top-4 right-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md transition-colors hover:bg-background"
                      >
                        <X size={18} />
                      </button>
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-on-primary/10">
                        <Icon name={active.icon} size={56} className="text-on-primary" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 p-6">
                      <h3 className="font-display text-2xl tracking-tight">{active.title}</h3>
                      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                        {active.body}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>,
            document.body
          )
        : null}
    </>
  );
}
