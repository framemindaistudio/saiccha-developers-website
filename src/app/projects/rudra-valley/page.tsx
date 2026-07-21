import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProjectHero } from "@/components/project/project-hero";
import { SectionNav } from "@/components/project/section-nav";
import { ProjectSection } from "@/components/project/project-section";
import { StatRow } from "@/components/project/stat-row";
import { AmenitiesGrid } from "@/components/project/amenities-grid";
import { PricingTable } from "@/components/project/pricing-table";
import { ProgressTracker } from "@/components/project/progress-tracker";
import { MapEmbed } from "@/components/project/map-embed";
import { rudraValley } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Rudra Valley | Saiccha Developers",
  description: rudraValley.tagline,
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "master-plan", label: "Master Plan" },
  { id: "location", label: "Location Map" },
  { id: "amenities", label: "Amenities" },
  { id: "layout-plan", label: "Layout Plan" },
  { id: "pricing", label: "Pricing" },
  { id: "progress", label: "Construction Progress" },
];

export default function RudraValleyPage() {
  return (
    <>
      <ProjectHero
        name={rudraValley.name}
        tagline={rudraValley.tagline}
        location={rudraValley.location}
        status={rudraValley.status}
        image={rudraValley.heroImage}
        brochureUrl={rudraValley.brochureUrl}
      />

      <Container className="grid gap-12 py-16 lg:grid-cols-[200px_1fr] lg:gap-16 lg:py-24">
        <SectionNav sections={sections} />

        <div className="flex flex-col">
          <ProjectSection id="overview" title="Project Overview">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {rudraValley.overview}
            </p>
          </ProjectSection>

          <ProjectSection id="master-plan" title="Master Plan">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {rudraValley.masterPlan.body}
            </p>
            <StatRow stats={rudraValley.masterPlan.stats} />
          </ProjectSection>

          <ProjectSection id="location" title="Location Map">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Located off NH-748, within easy reach of Goa&rsquo;s coastal belt and inland towns.
            </p>
            <MapEmbed query="Goa, India" label={rudraValley.name} />
          </ProjectSection>

          <ProjectSection id="gallery" title="Gallery">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-image">
                <Image
                  src={rudraValley.cardImage}
                  alt="Rudra Valley villas, exterior view"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-image">
                <Image
                  src={rudraValley.heroImage}
                  alt="Rudra Valley, aerial view of the masterplan"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Placeholder photography. Real site and show-unit photography to be added once
              available.
            </p>
          </ProjectSection>

          <ProjectSection id="amenities" title="Amenities">
            <AmenitiesGrid amenities={rudraValley.amenities} />
          </ProjectSection>

          <ProjectSection id="layout-plan" title="Layout Plan">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {rudraValley.layoutPlan.body}
            </p>
            <div className="flex items-center gap-3 rounded-card border border-dashed border-border-strong p-6 text-sm text-muted-foreground">
              Detailed floor plan drawings to be added once supplied by the architect.
            </div>
          </ProjectSection>

          <ProjectSection id="pricing" title="Pricing">
            <PricingTable rows={rudraValley.pricing} />
          </ProjectSection>

          <ProjectSection id="progress" title="Construction Progress">
            <ProgressTracker
              percent={rudraValley.constructionProgress.percent}
              phase={rudraValley.constructionProgress.phase}
              updated={rudraValley.constructionProgress.updated}
            />
          </ProjectSection>
        </div>
      </Container>

      <section className="bg-primary py-16 text-on-primary md:py-20">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-2xl tracking-tight md:text-3xl">
              See Rudra Valley in person
            </h2>
            <p className="max-w-md text-sm text-on-primary/75">
              Book a guided site visit, weekday or weekend slots available.
            </p>
          </div>
          <Button
            href="/contact"
            size="lg"
            className="bg-on-primary text-primary hover:bg-on-primary/90"
          >
            Book a Site Visit
            <ArrowRight size={18} />
          </Button>
        </Container>
      </section>
    </>
  );
}
