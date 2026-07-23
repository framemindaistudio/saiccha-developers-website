import { Phone, EnvelopeSimple, WhatsappLogo, ArrowRight } from "@phosphor-icons/react/ssr";
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
            <div className="flex flex-col gap-4 text-sm">
              <a
                href="https://wa.me/918073087576"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <WhatsappLogo size={20} weight="fill" className="text-whatsapp" />
                +91 80730 87576 (WhatsApp)
              </a>
              <a
                href="tel:+918073087576"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <Phone size={20} className="text-primary" />
                +91 80730 87576
              </a>
              <a
                href="mailto:info@saicchadevelopers.com"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <EnvelopeSimple size={20} className="text-primary" />
                info@saicchadevelopers.com
              </a>
            </div>
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
              Book a Site Visit
              <ArrowRight size={16} />
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
