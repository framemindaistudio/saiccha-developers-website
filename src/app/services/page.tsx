import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { IconRevealGrid } from "@/components/ui/icon-reveal-grid";
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
        <IconRevealGrid items={services} />
      </Container>
    </>
  );
}
