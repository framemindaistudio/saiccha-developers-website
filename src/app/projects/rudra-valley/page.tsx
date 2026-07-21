import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProjectHero } from "@/components/project/project-hero";
import { SectionNav } from "@/components/project/section-nav";
import { ProjectSection } from "@/components/project/project-section";
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
  { id: "gallery", label: "Gallery" },
  { id: "amenities", label: "Amenities" },
  { id: "layout-plan", label: "Layout Plan" },
  { id: "pricing", label: "Pricing" },
  { id: "progress", label: "Construction Progress" },
];

const galleryFrames = [
  { src: "/images/rudra-valley-video-poster.jpg", alt: "Rudra Valley, aerial masterplan view" },
  { src: "/images/rudra-valley-frame-entrance.jpg", alt: "Rudra Valley, guarded entrance boulevard" },
  { src: "/images/rudra-valley-frame-clubhouse.jpg", alt: "Rudra Valley, clubhouse and wellness center" },
  { src: "/images/rudra-valley-frame-spa.jpg", alt: "Rudra Valley, spa and swimming pool" },
  { src: "/images/rudra-valley-frame-canal.jpg", alt: "Rudra Valley, recreational canal" },
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
            <div className="relative aspect-video overflow-hidden rounded-image">
              <Image
                src="/images/rudra-valley-video-poster.jpg"
                alt="Rudra Valley masterplan, aerial view"
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
              />
            </div>
          </ProjectSection>

          <ProjectSection id="location" title="Location Map">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {rudraValley.nearby.body} Precise coordinates and driving directions to be
              confirmed by the client.
            </p>
            <MapEmbed query="Amboli Ghat, Maharashtra, India" label={rudraValley.name} />

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium text-muted-foreground">Connectivity</h3>
                <div className="flex flex-col divide-y divide-border">
                  {rudraValley.nearby.connectivity.map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-2.5">
                      <span className="text-sm text-foreground">{item.label}</span>
                      <span className="text-sm font-medium tabular-nums text-primary">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium text-muted-foreground">Nearby Attractions</h3>
                <ul className="flex flex-col gap-2.5">
                  {rudraValley.nearby.attractions.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ProjectSection>

          <ProjectSection id="gallery" title="Gallery">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Stills from the masterplan visualization. Real site and show-unit photography to
              be added as construction progresses.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {galleryFrames.map((frame) => (
                <div key={frame.src} className="relative aspect-[4/3] overflow-hidden rounded-image">
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </ProjectSection>

          <ProjectSection id="amenities" title="Amenities">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A dedicated amenity zone shared across the community, built around the clubhouse
              and canal.
            </p>
            <AmenitiesGrid amenities={rudraValley.amenities} />
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
