import type { Metadata } from "next";
import { Phone, EnvelopeSimple, WhatsappLogo, MapPin } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { MapEmbed } from "@/components/project/map-embed";
import { QuickEnquiryForm } from "@/components/sections/quick-enquiry-form";

export const metadata: Metadata = {
  title: "Contact Us | Saiccha Developers",
  description: "Office locations, phone, email, WhatsApp, and enquiry form for Saiccha Developers.",
};

const offices = [
  { name: "Saiccha Developers, Head Office", address: "Goa, India" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact Us"
        title="Talk to the team directly"
        subtitle="No call centre queue. Enquiries go straight to the project team."
      />

      <Container className="py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-sm">
              <a
                href="https://wa.me/918073087576"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <WhatsappLogo size={20} className="text-primary" />
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

            <div className="flex flex-col gap-4">
              <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Office Locations
              </h2>
              {offices.map((office) => (
                <div key={office.name} className="flex items-start gap-3 text-sm">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{office.name}</p>
                    <p className="text-muted-foreground">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>

            <MapEmbed query="Goa, India" label="Saiccha Developers" />
          </Reveal>

          <Reveal delay={0.1}>
            <QuickEnquiryForm />
          </Reveal>
        </div>
      </Container>
    </>
  );
}
