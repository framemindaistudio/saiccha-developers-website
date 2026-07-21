import { Phone, EnvelopeSimple, SignIn } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { memberLinks } from "@/lib/site-data";

export function UtilityBar() {
  return (
    <div className="hidden bg-primary text-on-primary lg:block">
      <Container className="flex h-9 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <a
            href="tel:+918073087576"
            className="flex items-center gap-1.5 text-on-primary/75 transition-colors hover:text-on-primary"
          >
            <Phone size={13} />
            +91 80730 87576
          </a>
          <a
            href="mailto:info@saicchadevelopers.com"
            className="flex items-center gap-1.5 text-on-primary/75 transition-colors hover:text-on-primary"
          >
            <EnvelopeSimple size={13} />
            info@saicchadevelopers.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={memberLinks.signIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-on-primary/75 transition-colors hover:text-on-primary"
          >
            <SignIn size={13} />
            Sign In
          </a>
          <a
            href={memberLinks.signUp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-3 py-1 font-medium text-on-accent transition-colors hover:bg-accent-hover"
          >
            Sign Up
          </a>
        </div>
      </Container>
    </div>
  );
}
