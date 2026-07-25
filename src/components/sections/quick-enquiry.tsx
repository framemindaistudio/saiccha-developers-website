import { EnvelopeSimple, ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function QuickEnquiry() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal className="flex flex-col gap-8">
            <SectionHeading
              title="Let's talk about your next home"
              subtitle="Reach out for pricing, site visits, or investment details. Our team responds directly, not through a call centre."
            />
            <a
              href="mailto:info@saicchadevelopers.com"
              className="group flex w-fit items-center gap-4 rounded-card border border-border bg-surface-raised p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary">
                <EnvelopeSimple size={28} weight="fill" className="text-primary" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Email
                </span>
                <span className="text-base font-medium text-foreground">
                  info@saicchadevelopers.com
                </span>
              </div>
            </a>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col items-start justify-center gap-5 rounded-card border border-border bg-surface-raised p-10"
          >
            <h3 className="font-display text-2xl tracking-tight">Ready to take the next step?</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Share a few details on our contact page and the project team will get back to you
              within one business day.
            </p>
            <Button href="/contact">
              Contact Us
              <ArrowRight size={16} />
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
