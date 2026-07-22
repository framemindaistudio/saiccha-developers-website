"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { EyeTracking } from "@/components/motion/eye-tracking";

export function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm rounded-card border border-border bg-surface-raised p-6 shadow-xl shadow-foreground/10 sm:right-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-display text-lg tracking-tight text-foreground">
                  Saiccha Assistant
                </span>
                <span className="text-xs text-muted-foreground">Coming soon</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
                className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We&rsquo;re building a knowledge-based assistant that can answer questions about
              Rudra Valley, JagKalyan Tarak Gurukul, pricing, and documents directly from real
              project data. Until then, reach the team directly on WhatsApp.
            </p>
            <a
              href="https://wa.me/918073087576"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-fit cursor-pointer items-center gap-2 rounded-button bg-whatsapp px-4 py-2 text-sm font-medium text-on-whatsapp transition-colors hover:bg-whatsapp-hover"
            >
              <WhatsappLogo size={16} weight="fill" />
              Chat on WhatsApp
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-primary shadow-lg shadow-foreground/25 transition-transform hover:scale-105 active:scale-95 sm:right-6"
      >
        <EyeTracking eyeSize={16} gap={9} />
      </button>
    </>
  );
}
