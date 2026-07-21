import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ProjectHero } from "@/components/project/project-hero";
import { SectionNav } from "@/components/project/section-nav";
import { ProjectSection } from "@/components/project/project-section";
import { StatRow } from "@/components/project/stat-row";
import { PricingTable } from "@/components/project/pricing-table";
import { FaqAccordion } from "@/components/project/faq-accordion";
import { QuickEnquiryForm } from "@/components/sections/quick-enquiry-form";
import { jagkalyanTarakGurukul as jkg } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "JagKalyan Tarak Gurukul | Saiccha Developers",
  description: jkg.tagline,
};

const sections = [
  { id: "vision", label: "Vision" },
  { id: "master-plan", label: "Master Plan" },
  { id: "eco-living", label: "Eco Living Concept" },
  { id: "gurukul", label: "Gurukul Campus" },
  { id: "wellness", label: "Wellness & Healthcare" },
  { id: "farms", label: "Organic Farms" },
  { id: "eco-homes", label: "Eco Homes" },
  { id: "investment", label: "Investment Opportunities" },
  { id: "faqs", label: "FAQs" },
  { id: "register", label: "Register Interest" },
];

export default function JagKalyanTarakGurukulPage() {
  return (
    <>
      <ProjectHero
        name={jkg.name}
        tagline={jkg.tagline}
        location={jkg.location}
        status={jkg.status}
        image={jkg.heroImage}
        brochureUrl="#"
      />

      <Container className="grid gap-12 py-16 lg:grid-cols-[200px_1fr] lg:gap-16 lg:py-24">
        <SectionNav sections={sections} />

        <div className="flex flex-col">
          <ProjectSection id="vision" title="Vision">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {jkg.vision}
            </p>
          </ProjectSection>

          <ProjectSection id="master-plan" title="Master Plan">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {jkg.masterPlan.body}
            </p>
            <StatRow stats={jkg.masterPlan.stats} />
            <div className="relative aspect-[16/9] overflow-hidden rounded-image">
              <Image
                src={jkg.cardImage}
                alt="JagKalyan Tarak Gurukul eco-living campus"
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
              />
            </div>
          </ProjectSection>

          <ProjectSection id="eco-living" title="Eco Living Concept">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {jkg.ecoLivingConcept}
            </p>
          </ProjectSection>

          <ProjectSection id="gurukul" title="Gurukul Campus">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {jkg.gurukulCampus}
            </p>
          </ProjectSection>

          <ProjectSection id="wellness" title="Wellness & Healthcare">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {jkg.wellness}
            </p>
          </ProjectSection>

          <ProjectSection id="farms" title="Organic Farms">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {jkg.organicFarms}
            </p>
          </ProjectSection>

          <ProjectSection id="eco-homes" title="Eco Homes">
            <PricingTable rows={jkg.ecoHomes} />
          </ProjectSection>

          <ProjectSection id="investment" title="Investment Opportunities">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {jkg.investmentOpportunities}
            </p>
          </ProjectSection>

          <ProjectSection id="faqs" title="FAQs">
            <FaqAccordion items={jkg.faqs} />
          </ProjectSection>

          <ProjectSection id="register" title="Register Interest">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Early registrations get first allocation choice across eco-home clusters.
            </p>
            <div className="max-w-xl">
              <QuickEnquiryForm />
            </div>
          </ProjectSection>
        </div>
      </Container>
    </>
  );
}
