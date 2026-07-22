import { Phone, EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { QuickEnquiryForm } from "@/components/sections/quick-enquiry-form";

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

          <Reveal delay={0.1}>
            <QuickEnquiryForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
