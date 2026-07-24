import type { Metadata } from "next";
import Image from "next/image";
import { ArrowSquareOut, EnvelopeSimple } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProjectHero } from "@/components/project/project-hero";
import { SectionNav } from "@/components/project/section-nav";
import { ProjectSection } from "@/components/project/project-section";
import { AmenitiesGrid } from "@/components/project/amenities-grid";
import { PricingTable } from "@/components/project/pricing-table";
import { ProgressTracker } from "@/components/project/progress-tracker";
import { MapEmbed } from "@/components/project/map-embed";
import { StatHighlightGrid } from "@/components/project/stat-highlight-grid";
import { PhaseBar } from "@/components/project/phase-bar";
import { ZoomParallax } from "@/components/motion/zoom-parallax";
import { jagkalyanTarakGurukul } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "JagKalyan Tarak Gurukul | Saiccha Developers",
  description: jagkalyanTarakGurukul.tagline,
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "master-plan", label: "Master Plan" },
  { id: "location", label: "Location Map" },
  { id: "gallery", label: "Gallery" },
  { id: "amenities", label: "Amenities" },
  { id: "layout-plan", label: "Layout Plan" },
  { id: "pricing", label: "Pricing" },
  { id: "progress", label: "Construction Progress" },
];

const zoomGalleryImages = [
  { src: "/images/jk-amenity-cricket-stadium.jpg", alt: "Eco Living, cricket stadium" },
  { src: "/images/jk-amenity-water-body.jpg", alt: "Eco Living, landscaped water body" },
  { src: "/images/jk-amenity-sports-centre.jpg", alt: "Eco Living, sports centre" },
  { src: "/images/jk-amenity-shopping-centre.jpg", alt: "Eco Living, shopping centre" },
  { src: "/images/jk-amenity-watch-tower.jpg", alt: "Eco Living, perimeter watch tower" },
];

export default function JagKalyanTarakGurukulPage() {
  return (
    <>
      <ProjectHero
        name={jagkalyanTarakGurukul.name}
        tagline={jagkalyanTarakGurukul.tagline}
        location={jagkalyanTarakGurukul.location}
        status={jagkalyanTarakGurukul.status}
        image={jagkalyanTarakGurukul.heroImage}
        brochureUrl={jagkalyanTarakGurukul.brochureUrl}
      />

      <Container className="grid gap-12 pb-16 lg:grid-cols-[200px_1fr] lg:gap-16 lg:pb-24">
        <SectionNav sections={sections} />

        <div className="flex flex-col">
          <ProjectSection id="overview" title="Project Overview">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {jagkalyanTarakGurukul.overview}
            </p>
          </ProjectSection>

          <ProjectSection id="master-plan" title="Master Plan">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {jagkalyanTarakGurukul.masterPlan.body}
            </p>
            <StatHighlightGrid stats={jagkalyanTarakGurukul.masterPlan.stats} />
            <div className="flex flex-col gap-2 rounded-card border border-border bg-surface p-5">
              <span className="text-xs font-medium text-muted-foreground">
                Total vision, by phase
              </span>
              <PhaseBar phases={jagkalyanTarakGurukul.masterPlan.phases} unit="plots" />
            </div>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-image border border-border sm:mx-auto">
              <Image
                src="/images/eco-living-concept-layout.jpg"
                alt="Eco Living concept layout at JagKalyan Tarak Gurukul, Village Khanyale"
                fill
                sizes="(min-width: 640px) 448px, 100vw"
                className="object-contain bg-surface-raised"
              />
            </div>
          </ProjectSection>

          <ProjectSection id="location" title="Location Map">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {jagkalyanTarakGurukul.nearby.body}
            </p>
            <MapEmbed
              query="Khanyale, Dodamarg, Sindhudurg, Maharashtra"
              label={jagkalyanTarakGurukul.name}
            />
          </ProjectSection>

          <ProjectSection id="gallery" title="Gallery">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Renders from the concept layout and visualization. Scroll through the section
              below.
            </p>
          </ProjectSection>
          <ZoomParallax images={zoomGalleryImages} />

          <ProjectSection id="amenities" title="Amenities">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Eight dedicated amenities anchor the scheme, from the cricket stadium and sports
              centre to the decorative entrance gate.
            </p>
            <AmenitiesGrid amenities={jagkalyanTarakGurukul.amenities} />
          </ProjectSection>

          <ProjectSection id="layout-plan" title="Layout Plan">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {jagkalyanTarakGurukul.layoutPlan.body}
            </p>
          </ProjectSection>

          <ProjectSection id="pricing" title="Pricing">
            {jagkalyanTarakGurukul.pricing.length > 0 ? (
              <PricingTable rows={jagkalyanTarakGurukul.pricing} />
            ) : (
              <div className="flex flex-col items-start gap-4 rounded-card border border-dashed border-border-strong p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Plot pricing is confirmed directly with the sales team and will be published
                  here once finalized with the client.
                </p>
                <Button href="/contact" variant="secondary">
                  <EnvelopeSimple size={16} />
                  Enquire About Pricing
                </Button>
              </div>
            )}
          </ProjectSection>

          <ProjectSection id="progress" title="Construction Progress">
            <ProgressTracker
              percent={jagkalyanTarakGurukul.constructionProgress.percent}
              phase={jagkalyanTarakGurukul.constructionProgress.phase}
              updated={jagkalyanTarakGurukul.constructionProgress.updated}
            />
          </ProjectSection>
        </div>
      </Container>

      <section className="bg-primary py-16 text-on-primary md:py-20">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-2xl tracking-tight md:text-3xl">
              Explore the full JagKalyan Tarak Gurukul experience
            </h2>
            <p className="max-w-md text-sm text-on-primary/75">
              Holistic education, wellness, research, and the wider campus story live on the
              dedicated JagKalyan Tarak Gurukul website.
            </p>
          </div>
          <Button
            href={jagkalyanTarakGurukul.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="shrink-0"
          >
            Visit JagKalyan Tarak Gurukul
            <ArrowSquareOut size={18} />
          </Button>
        </Container>
      </section>
    </>
  );
}
