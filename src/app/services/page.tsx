import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { Icon } from "@/lib/icon-map";
import { services } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Services | Saiccha Developers",
  description: "Land development, plot development, residential and commercial projects, project management, infrastructure development, and investment advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Land to landmark, under one roof"
        subtitle="Every stage of development, from raw land to handover, managed in-house."
      />

      <Container className="py-16 md:py-24">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <div className="flex flex-col gap-4 border-t border-border pt-6">
                <Icon name={service.icon} size={26} className="text-primary" />
                <h2 className="text-lg font-medium tracking-tight">{service.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
