import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { LegalNotice } from "@/components/ui/legal-notice";

export const metadata: Metadata = {
  title: "Privacy Policy | Saiccha Developers",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero crumb="Privacy Policy" title="Privacy Policy" />
      <Container className="max-w-2xl py-16 md:py-24">
        <LegalNotice>
          Draft template. To be reviewed by legal counsel and aligned with India&rsquo;s Digital
          Personal Data Protection Act, 2023 before this page goes live.
        </LegalNotice>

        <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">
          <section className="flex flex-col gap-2">
            <h2 className="text-base font-medium text-foreground">Information we collect</h2>
            <p>
              When you submit an enquiry, register interest, or book a site visit, we collect your
              name, phone number, email address, and any message you provide.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-base font-medium text-foreground">How we use it</h2>
            <p>
              We use this information to respond to enquiries, schedule site visits, and share
              project updates you&rsquo;ve asked for. We do not sell your personal data.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-base font-medium text-foreground">Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data at any
              time by contacting us at info@saicchadevelopers.com.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-base font-medium text-foreground">Contact</h2>
            <p>Questions about this policy can be sent to info@saicchadevelopers.com.</p>
          </section>
        </div>
      </Container>
    </>
  );
}
