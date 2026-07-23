import type { Metadata } from "next";
import { FileText, ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { ProjectSection } from "@/components/project/project-section";
import { StatRow } from "@/components/project/stat-row";
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
          <div className="grid gap-8 sm:grid-cols-3">
            {whyInvest.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 border-t border-border pt-4">
                <h3 className="text-base font-medium tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection id="roi" title="ROI Potential">
          <StatRow stats={roiPotential} />
        </ProjectSection>

        <ProjectSection id="legal" title="Legal Documentation">
          <div className="flex flex-col gap-5">
            {legalDocuments.map((doc) => (
              <div key={doc.title} className="flex items-start gap-4">
                <FileText size={22} className="mt-0.5 shrink-0 text-primary" weight="duotone" />
                <div>
                  <p className="text-sm font-medium text-foreground">{doc.title}</p>
                  <p className="text-sm text-muted-foreground">{doc.body}</p>
                </div>
              </div>
            ))}
          </div>
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
