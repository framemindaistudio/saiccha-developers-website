import type { Metadata } from "next";
import { PlayCircle } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectSection } from "@/components/project/project-section";
import { ThreeDCarousel } from "@/components/motion/three-d-carousel";
import { galleryCategories } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Gallery | Saiccha Developers",
  description: "Photos, drone videos, project walkthroughs, and customer events from Saiccha Developers.",
};

const photos: { src: string; alt: string }[] = [];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        title="Gallery"
        subtitle="Photos, drone footage, walkthroughs, and moments from across our communities."
      />

      <Container className="max-w-4xl">
        {galleryCategories.map((cat) => (
          <ProjectSection key={cat.key} id={cat.key} title={cat.title}>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{cat.body}</p>

            {cat.key === "photos" && photos.length > 0 ? (
              <ThreeDCarousel images={photos} />
            ) : (
              <div className="flex items-center gap-4 rounded-card border border-dashed border-border-strong p-6 text-sm text-muted-foreground">
                <PlayCircle size={24} className="shrink-0 text-primary" weight="duotone" />
                {cat.key === "photos"
                  ? "Photos to be added once new project photography is available."
                  : "Video content to be added once footage is supplied by the client."}
              </div>
            )}
          </ProjectSection>
        ))}
      </Container>
    </>
  );
}
