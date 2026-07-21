import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectSection } from "@/components/project/project-section";
import { BeforeAfterSlider } from "@/components/project/before-after-slider";
import { Testimonials } from "@/components/sections/testimonials";
import { completedCategories, completedTestimonials } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Completed Projects | Saiccha Developers",
  description: "Land development, residential bungalows, and commercial complexes delivered by Saiccha Developers.",
};

export default function CompletedProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Completed Projects"
        title="Delivered, not just designed"
        subtitle="A track record across land development, residential bungalows, and commercial complexes."
      />

      <Container className="max-w-4xl">
        <ProjectSection id="categories" title="What We've Delivered">
          <div className="grid gap-8 sm:grid-cols-3">
            {completedCategories.map((cat) => (
              <div key={cat.key} className="flex flex-col gap-2 border-t border-border pt-4">
                <span className="font-display text-2xl tracking-tight tabular-nums text-primary">
                  {cat.count}
                </span>
                <h3 className="text-base font-medium tracking-tight">{cat.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{cat.body}</p>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection id="before-after" title="Before & After Gallery">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Drag the slider to compare. Placeholder photography shown below, real before/after
            pairs to be added per completed project.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            <BeforeAfterSlider
              beforeSrc="/images/rudra-valley-villas.jpg"
              afterSrc="/images/hero-rudra-valley-aerial.jpg"
              label="Land Development"
            />
            <BeforeAfterSlider
              beforeSrc="/images/jagkalyan-eco-campus.jpg"
              afterSrc="/images/rudra-valley-villas.jpg"
              label="Residential Bungalow"
            />
          </div>
        </ProjectSection>
      </Container>

      <Testimonials
        items={completedTestimonials}
        title="From owners who've already moved in"
        subtitle="Feedback from completed, handed-over projects."
      />
    </>
  );
}
