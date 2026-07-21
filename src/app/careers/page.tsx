import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react/ssr";

export const metadata: Metadata = {
  title: "Careers | Saiccha Developers",
  description: "Open roles and general applications at Saiccha Developers.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumb="Careers"
        title="Build Goa's next communities with us"
        subtitle="We're growing across land development, construction, and project management."
      />

      <Container className="max-w-2xl py-16 md:py-24">
        <div className="flex flex-col items-start gap-5 rounded-card border border-dashed border-border-strong p-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            No open roles are listed right now, but we review general applications on a rolling
            basis, particularly for construction management and site engineering.
          </p>
          <Button href="mailto:careers@saicchadevelopers.com">
            Send Your Resume
            <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </>
  );
}
