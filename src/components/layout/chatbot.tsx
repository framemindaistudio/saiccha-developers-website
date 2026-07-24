"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, WhatsappLogo, ArrowLeft, ArrowSquareOut } from "@phosphor-icons/react/ssr";
import { EyeTracking } from "@/components/motion/eye-tracking";
import type { ChatbotConfig, ChatTopic, ChatFaq } from "@/lib/chatbot-data";

type View =
  | { kind: "menu" }
  | { kind: "topic"; topic: ChatTopic }
  | { kind: "faq-list" }
  | { kind: "faq-answer"; faq: ChatFaq };

export function Chatbot({ config }: { config: ChatbotConfig }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>({ kind: "menu" });

  function toggle() {
    setOpen((v) => {
      const next = !v;
      if (!next) setView({ kind: "menu" });
      return next;
    });
  }

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-5 z-50 flex max-h-[70vh] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-card border border-border bg-surface-raised shadow-xl shadow-foreground/10 sm:right-6"
          >
            <div className="flex items-center justify-between gap-4 border-b border-border p-5">
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-lg tracking-tight text-foreground">
                  {config.name}
                </span>
                <span className="text-xs text-muted-foreground">Usually replies instantly</span>
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

            <div className="flex-1 overflow-y-auto p-5">
              {view.kind === "menu" ? (
                <div className="flex flex-col gap-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{config.greeting}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {config.topicsIntro}
                  </p>
                  <div className="flex flex-col gap-2">
                    {config.topics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => setView({ kind: "topic", topic })}
                        className="cursor-pointer rounded-lg border border-border px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:border-primary hover:bg-secondary"
                      >
                        {topic.label}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setView({ kind: "faq-list" })}
                      className="cursor-pointer rounded-lg border border-border px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:border-primary hover:bg-secondary"
                    >
                      Frequently asked questions
                    </button>
                  </div>
                </div>
              ) : null}

              {view.kind === "topic" ? (
                <div className="flex flex-col gap-4">
                  <button
                    type="button"
                    onClick={() => setView({ kind: "menu" })}
                    className="flex w-fit cursor-pointer items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft size={14} /> Back to menu
                  </button>
                  <p className="text-sm font-medium text-foreground">{view.topic.label}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{view.topic.reply}</p>
                  {view.topic.href ? (
                    <a
                      href={view.topic.href}
                      target={view.topic.external ? "_blank" : undefined}
                      rel={view.topic.external ? "noopener noreferrer" : undefined}
                      className="flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover"
                    >
                      {view.topic.hrefLabel ?? "Learn more"}
                      <ArrowSquareOut size={14} />
                    </a>
                  ) : null}
                </div>
              ) : null}

              {view.kind === "faq-list" ? (
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => setView({ kind: "menu" })}
                    className="flex w-fit cursor-pointer items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft size={14} /> Back to menu
                  </button>
                  <div className="flex flex-col gap-2">
                    {config.faqs.map((faq) => (
                      <button
                        key={faq.id}
                        type="button"
                        onClick={() => setView({ kind: "faq-answer", faq })}
                        className="cursor-pointer rounded-lg border border-border px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:border-primary hover:bg-secondary"
                      >
                        {faq.question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {view.kind === "faq-answer" ? (
                <div className="flex flex-col gap-4">
                  <button
                    type="button"
                    onClick={() => setView({ kind: "faq-list" })}
                    className="flex w-fit cursor-pointer items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft size={14} /> Back to FAQs
                  </button>
                  <p className="text-sm font-medium text-foreground">{view.faq.question}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{view.faq.answer}</p>
                </div>
              ) : null}
            </div>

            <div className="flex gap-2 border-t border-border p-4">
              <a
                href={config.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-button bg-whatsapp px-3 py-2 text-xs font-medium text-on-whatsapp transition-colors hover:bg-whatsapp-hover"
              >
                <WhatsappLogo size={14} weight="fill" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Close assistant" : "Open assistant"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-primary shadow-lg shadow-foreground/25 transition-transform hover:scale-105 active:scale-95 sm:right-6"
      >
        <EyeTracking eyeSize={16} gap={9} />
      </button>
    </>
  );
}
