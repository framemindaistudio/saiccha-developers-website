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

const photos = [
  { src: "/images/rv-cinematic-aerial.jpg", alt: "Rudra Valley, cinematic aerial view" },
  { src: "/images/rv-cinematic-entrance.jpg", alt: "Rudra Valley, guarded entrance boulevard" },
  { src: "/images/rv-cinematic-clubhouse.jpg", alt: "Rudra Valley, clubhouse" },
  { src: "/images/rv-cinematic-spa.jpg", alt: "Rudra Valley, spa and pool" },
  { src: "/images/rv-cinematic-canal.jpg", alt: "Rudra Valley, recreational canal" },
  { src: "/images/rv-cinematic-tennis.jpg", alt: "Rudra Valley, tennis lawn" },
  { src: "/images/rv-cinematic-restaurant.jpg", alt: "Rudra Valley, restaurant" },
];

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

            {cat.key === "photos" ? (
              <ThreeDCarousel images={photos} />
            ) : (
              <div className="flex items-center gap-4 rounded-card border border-dashed border-border-strong p-6 text-sm text-muted-foreground">
                <PlayCircle size={24} className="shrink-0 text-primary" weight="duotone" />
                Video content to be added once footage is supplied by the client.
              </div>
            )}
          </ProjectSection>
        ))}
      </Container>
    </>
  );
}
