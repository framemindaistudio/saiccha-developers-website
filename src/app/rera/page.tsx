import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { LegalNotice } from "@/components/ui/legal-notice";

export const metadata: Metadata = {
  title: "RERA Details | Saiccha Developers",
};

export default function ReraPage() {
  return (
    <>
      <PageHero
        crumb="RERA Details"
        title="RERA Details"
        subtitle="Registration numbers and status for each active project."
      />

      <Container className="max-w-2xl py-16 md:py-24">
        <LegalNotice>
          RERA registration numbers are pending from the client and will be published here and on
          each project page once issued, per Goa RERA requirements.
        </LegalNotice>

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          No projects are currently in the booking process. RERA details will be published here
          once a new project takes bookings.
        </p>
      </Container>
    </>
  );
}
