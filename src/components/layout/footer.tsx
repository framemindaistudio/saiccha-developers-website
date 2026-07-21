import Link from "next/link";
import Image from "next/image";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { footerColumns } from "@/lib/site-data";
import { NewsletterForm } from "@/components/layout/newsletter-form";

const socialLinks = [
  { label: "Facebook", href: "#", icon: FacebookLogo },
  { label: "Instagram", href: "#", icon: InstagramLogo },
  { label: "LinkedIn", href: "#", icon: LinkedinLogo },
  { label: "YouTube", href: "#", icon: YoutubeLogo },
];

export function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <Container className="grid gap-14 py-20 lg:grid-cols-[1.3fr_2fr] lg:gap-10">
        <div className="flex flex-col gap-6">
          <div className="w-fit rounded-card bg-surface-raised p-3">
            <Image
              src="/images/logo.png"
              alt="Saiccha Developers"
              width={72}
              height={71}
              className="h-14 w-auto"
            />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-on-primary/75">
            Premium, transparent real estate development in Goa — from land to landmark.
          </p>
          <div className="flex flex-col gap-3 text-sm text-on-primary/85">
            <a href="tel:+918073087576" className="flex items-center gap-2 hover:text-on-primary">
              <Phone size={16} />
              +91 80730 87576
            </a>
            <a
              href="mailto:info@saicchadevelopers.com"
              className="flex items-center gap-2 hover:text-on-primary"
            >
              <EnvelopeSimple size={16} />
              info@saicchadevelopers.com
            </a>
            <span className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              Saiccha Developers, Goa
            </span>
          </div>
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-on-primary/25 transition-colors hover:border-on-primary"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-on-primary/60">{col.title}</h3>
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-on-primary/85 transition-colors hover:text-on-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Container>

      <Container className="flex flex-col gap-4 border-t border-on-primary/15 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-on-primary/60">
          &copy; {new Date().getFullYear()} Saiccha Developers. RERA registration numbers listed
          per project on the respective project page.
        </p>
        <div className="flex items-center gap-3">
          <span className="text-xs text-on-primary/60">Stay updated</span>
          <NewsletterForm />
        </div>
      </Container>
    </footer>
  );
}
