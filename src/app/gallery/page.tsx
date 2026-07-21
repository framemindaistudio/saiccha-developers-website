import type { Metadata } from "next";
import Image from "next/image";
import { PlayCircle } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectSection } from "@/components/project/project-section";
import { galleryCategories } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Gallery | Saiccha Developers",
  description: "Photos, drone videos, project walkthroughs, and customer events from Saiccha Developers.",
};

const photos = [
  { src: "/images/hero-rudra-valley-aerial.jpg", alt: "Rudra Valley, aerial view" },
  { src: "/images/rudra-valley-villas.jpg", alt: "Rudra Valley, villa exteriors" },
  { src: "/images/jagkalyan-eco-campus.jpg", alt: "JagKalyan Tarak Gurukul, eco campus" },
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
              <div className="grid gap-4 sm:grid-cols-3">
                {photos.map((photo) => (
                  <div key={photo.src} className="relative aspect-square overflow-hidden rounded-image">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
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
