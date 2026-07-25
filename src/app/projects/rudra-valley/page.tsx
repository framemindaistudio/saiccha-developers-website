import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProjectHero } from "@/components/project/project-hero";
import { SectionNav } from "@/components/project/section-nav";
import { ProjectSection } from "@/components/project/project-section";
import { IconRevealGrid } from "@/components/ui/icon-reveal-grid";
import { PricingTable } from "@/components/project/pricing-table";
import { ProgressTracker } from "@/components/project/progress-tracker";
import { MapEmbed } from "@/components/project/map-embed";
import { StatHighlightGrid } from "@/components/project/stat-highlight-grid";
import { ZoomParallax } from "@/components/motion/zoom-parallax";
import { Icon } from "@/lib/icon-map";
import { rudraValley } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Rudra Valley | Saiccha Developers",
  description: rudraValley.tagline,
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
  { src: "/images/rv-cinematic-canal.jpg", alt: "Rudra Valley, recreational canal at golden hour" },
  { src: "/images/rv-cinematic-entrance.jpg", alt: "Rudra Valley, guarded entrance boulevard" },
  { src: "/images/rv-cinematic-clubhouse.jpg", alt: "Rudra Valley, clubhouse and wellness center" },
  { src: "/images/rv-cinematic-spa.jpg", alt: "Rudra Valley, spa and swimming pool" },
  { src: "/images/rv-cinematic-tennis.jpg", alt: "Rudra Valley, tennis court at dusk" },
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
      />

      <Container className="grid gap-12 pb-16 lg:grid-cols-[200px_1fr] lg:gap-16 lg:pb-24">
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
            <StatHighlightGrid stats={rudraValley.masterPlan.stats} />
            <div className="flex flex-wrap items-center gap-4 rounded-card border border-primary/20 bg-primary/5 p-6">
              <span className="rounded-full bg-primary px-5 py-2 text-sm font-semibold uppercase tracking-wide text-on-primary">
                Phase 1
              </span>
              <span className="font-display text-lg tracking-tight text-foreground">
                233 acres, launching now, bookings open
              </span>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-image">
              <Image
                src="/images/rv-cinematic-aerial.jpg"
                alt="Rudra Valley masterplan, aerial view at golden hour"
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-image border border-border">
              <Image
                src="/images/rudra-valley-layout-3d.jpg"
                alt="3D layout render of the Rudra Valley Phase 1 master plan"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain bg-surface-raised"
              />
            </div>
          </ProjectSection>

          <ProjectSection id="location" title="Location Map">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {rudraValley.nearby.body} Precise coordinates and driving directions to be
              confirmed by the client.
            </p>
            <MapEmbed query="Amboli Ghat, Maharashtra, India" label={rudraValley.name} />

            <div className="grid gap-10 sm:grid-cols-2">
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-medium uppercase tracking-wide text-primary">Connectivity</h3>
                <div className="flex flex-col gap-3">
                  {rudraValley.nearby.connectivity.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-card border border-border bg-surface-raised p-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
                        <Icon name={item.icon} size={24} className="text-accent" />
                      </div>
                      <span className="flex-1 text-base text-foreground">{item.label}</span>
                      <span className="shrink-0 text-base font-medium tabular-nums text-primary">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-medium uppercase tracking-wide text-primary">Nearby Attractions</h3>
                <div className="flex flex-col gap-3">
                  {rudraValley.nearby.attractions.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-card border border-border bg-surface-raised p-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
                        <Icon name={item.icon} size={24} className="text-accent" />
                      </div>
                      <span className="flex-1 text-base leading-relaxed text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ProjectSection>

          <ProjectSection id="gallery" title="Gallery">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Renders from the masterplan visualization. Real site and show-unit photography to
              be added as construction progresses. Scroll through the section below.
            </p>
          </ProjectSection>
          <ZoomParallax images={zoomGalleryImages} />

          <ProjectSection id="amenities" title="Amenities">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A dedicated amenity zone shared across the community, built around the clubhouse
              and canal.
            </p>
            <IconRevealGrid items={rudraValley.amenities} />
          </ProjectSection>

          <ProjectSection id="layout-plan" title="Layout Plan">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {rudraValley.layoutPlan.body}
            </p>
          </ProjectSection>

          <ProjectSection id="pricing" title="Pricing">
            {rudraValley.pricing.length > 0 ? (
              <PricingTable rows={rudraValley.pricing} />
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
          <Button href="/contact" size="lg">
            Book a Site Visit
            <ArrowRight size={18} />
          </Button>
        </Container>
      </section>
    </>
  );
}
