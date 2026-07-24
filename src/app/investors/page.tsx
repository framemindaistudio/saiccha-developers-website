import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { ProjectSection } from "@/components/project/project-section";
import { StatRow } from "@/components/project/stat-row";
import { IconRevealGrid } from "@/components/ui/icon-reveal-grid";
import { whyInvest, roiPotential, legalDocuments } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Investors | Saiccha Developers",
  description: "Why invest with Saiccha Developers, ROI potential, legal documentation, and partnership opportunities.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        crumb="Investors"
        title="Invest where the numbers are published, not promised"
        subtitle="Construction progress, legal documentation, and ROI data, open before you commit."
      />

      <Container className="max-w-4xl">
        <ProjectSection id="why-invest" title="Why Invest">
          <IconRevealGrid items={whyInvest} />
        </ProjectSection>

        <ProjectSection id="roi" title="ROI Potential">
          <StatRow stats={roiPotential} />
        </ProjectSection>

        <ProjectSection id="legal" title="Legal Documentation">
          <IconRevealGrid items={legalDocuments} columns={3} />
        </ProjectSection>

        <ProjectSection id="partner" title="Partner With Us">
          <div className="flex flex-col items-start gap-5 rounded-card border border-border bg-surface p-8">
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
              Looking to co-invest in land, or bring a parcel to us for joint development? Our
              investor relations team reviews proposals directly, no intermediary layer.
            </p>
            <Button href="mailto:info@saicchadevelopers.com">
              Start a Conversation
              <ArrowRight size={16} />
            </Button>
          </div>
        </ProjectSection>
      </Container>
    </>
  );
}
