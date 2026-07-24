import { Phone, EnvelopeSimple, WhatsappLogo, ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    href: "https://wa.me/918073087576",
    external: true,
    icon: WhatsappLogo,
    iconClassName: "text-whatsapp",
    label: "+91 80730 87576",
    sublabel: "WhatsApp",
  },
  {
    href: "tel:+918073087576",
    external: false,
    icon: Phone,
    iconClassName: "text-primary",
    label: "+91 80730 87576",
    sublabel: "Call",
  },
  {
    href: "mailto:info@saicchadevelopers.com",
    external: false,
    icon: EnvelopeSimple,
    iconClassName: "text-primary",
    label: "info@saicchadevelopers.com",
    sublabel: "Email",
  },
];

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
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-3">
              {contactMethods.map((method) => (
                <a
                  key={method.sublabel}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-card border border-border bg-surface-raised p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary">
                    <method.icon size={28} weight="fill" className={method.iconClassName} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {method.sublabel}
                    </span>
                    <span className="text-base font-medium text-foreground">{method.label}</span>
                  </div>
                </a>
              ))}
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
              Contact Us
              <ArrowRight size={16} />
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
