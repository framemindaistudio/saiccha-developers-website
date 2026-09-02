import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { IconRevealGrid } from "@/components/ui/icon-reveal-grid";
import { sustainabilityPillars } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Sustainability | Saiccha Developers",
  description: "Green development, solar energy, rainwater harvesting, water conservation, tree plantation, and ESG commitment.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        crumb="Sustainability"
        title="Green space that's reserved, not leftover"
        subtitle="Sustainability decisions made at the masterplan stage, not bolted on after launch."
      />

      <Reveal>
        <div className="relative mx-auto mt-14 aspect-[21/9] w-full max-w-[1400px] overflow-hidden rounded-image px-6 md:px-10">
          <div className="relative h-full w-full overflow-hidden rounded-image">
            <Image
              src="/images/about-residence-exterior.jpg"
              alt="A Saiccha Developers residence with landscaped surroundings"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>

      <Container className="py-16 md:py-24">
        <IconRevealGrid items={sustainabilityPillars} />
      </Container>
    </>
  );
}
