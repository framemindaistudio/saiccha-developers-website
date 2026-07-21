import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { LegalNotice } from "@/components/ui/legal-notice";

export const metadata: Metadata = {
  title: "Terms & Conditions | Saiccha Developers",
};

export default function TermsPage() {
  return (
    <>
      <PageHero crumb="Terms & Conditions" title="Terms & Conditions" />
      <Container className="max-w-2xl py-16 md:py-24">
        <LegalNotice>
          Draft template. To be reviewed by legal counsel before this page goes live, particularly
          the booking and cancellation terms, which should match each project&rsquo;s actual sale
          agreement.
        </LegalNotice>

        <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">
          <section className="flex flex-col gap-2">
            <h2 className="text-base font-medium text-foreground">Use of this website</h2>
            <p>
              Content on this site, including pricing, layouts, and availability, is indicative
              and subject to change. Final terms are governed by the executed sale agreement for
              each unit.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-base font-medium text-foreground">Bookings and payments</h2>
            <p>
              A booking is confirmed only on receipt of the advance payment and signed
              acknowledgment. Payment schedules are shared per project at booking.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-base font-medium text-foreground">Limitation of liability</h2>
            <p>
              Saiccha Developers is not liable for delays caused by events outside its reasonable
              control, including regulatory approvals and force majeure events.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-base font-medium text-foreground">Governing law</h2>
            <p>These terms are governed by the laws of India, with jurisdiction in Goa.</p>
          </section>
        </div>
      </Container>
    </>
  );
}
