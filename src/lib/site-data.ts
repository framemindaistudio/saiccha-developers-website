// Placeholder marketing content. Every string here is a stand-in for real
// client-supplied copy (see design/project-plan.md, Section 4) and must be
// replaced before launch — nothing in this file should ship as-is.

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavSection = {
  heading?: string;
  links: NavLink[];
};

export type NavGroup = {
  label: string;
  href: string;
  items?: NavLink[];
  sections?: NavSection[];
};

export const primaryNav: NavGroup[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Projects",
    href: "/projects",
    sections: [
      {
        heading: "Ongoing Projects",
        links: [
          { label: "Rudra Valley", href: "/projects/rudra-valley" },
          {
            label: "JagKalyan Tarak Gurukul",
            href: "https://jagkalyan-tarak-gurukul-website.vercel.app/",
            external: true,
          },
        ],
      },
      {
        links: [
          { label: "Completed Projects", href: "/projects/completed" },
          { label: "Future Projects", href: "/projects/future" },
        ],
      },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Investors", href: "/investors" },
  { label: "Sustainability", href: "/sustainability" },
  {
    label: "Resources",
    href: "/media-centre",
    items: [
      { label: "Media Centre", href: "/media-centre" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "Customer Care", href: "/customer-care" },
    ],
  },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Projects",
    links: [
      { label: "Rudra Valley", href: "/projects/rudra-valley" },
      { label: "Completed Projects", href: "/projects/completed" },
      { label: "Future Projects", href: "/projects/future" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Investors", href: "/investors" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Media Centre", href: "/media-centre" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "Customer Care", href: "/customer-care" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "RERA Details", href: "/rera" },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  status: string;
  href: string;
  imageSeed: string;
};

export const ongoingProjects: Project[] = [
  {
    slug: "rudra-valley",
    name: "Rudra Valley",
    tagline: "Premium farm plots and farmhouses in the misty hills of Amboli Ghat, on the Goa border.",
    location: "Amboli Ghat, Maharashtra",
    status: "Bookings Open",
    href: "/projects/rudra-valley",
    imageSeed: "rudra-valley-hero",
  },
];

// JagKalyan Tarak Gurukul now has its own dedicated site (a sister
// initiative co-founded with JagKalyan Holistic Mission), so it gets a
// brief external mention here rather than a full page on this site.
export const sisterProject = {
  name: "JagKalyan Tarak Gurukul",
  tagline: "A holistic education, wellness, and eco-living campus in Dodamarg, North Goa, a joint initiative with JagKalyan Holistic Mission.",
  href: "https://jagkalyan-tarak-gurukul-website.vercel.app/",
};

export const highlights = [
  { value: "14+", label: "Years building in Goa" },
  { value: "12", label: "Lakh+ sq. ft. developed" },
  { value: "3", label: "Active flagship developments" },
  { value: "100%", label: "RERA-registered projects" },
];

export const whyChooseUs = [
  {
    icon: "ShieldCheck",
    title: "Transparent from day one",
    body: "RERA documentation, construction updates, and pricing are published openly, not disclosed on request.",
  },
  {
    icon: "Leaf",
    title: "Built for the long term",
    body: "Every masterplan reserves land for green cover, water harvesting, and shared open space before a single unit is sold.",
  },
  {
    icon: "Handshake",
    title: "A team that stays reachable",
    body: "Direct WhatsApp lines to project teams, not a call centre queue, from booking through handover.",
  },
  {
    icon: "Buildings",
    title: "Land to landmark, in-house",
    body: "Land development, construction, and project management run under one roof, so timelines are ours to keep.",
  },
];

export const testimonials = [
  {
    quote:
      "We tracked our unit's construction month by month before we ever had to ask. That kind of visibility is rare.",
    name: "Prakash Naik",
    role: "FarmOwner, Rudra Valley",
  },
  {
    quote:
      "The site visit team answered harder questions than we expected, and didn't oversell what wasn't ready yet.",
    name: "Meera Kamat",
    role: "Investor, JagKalyan Tarak Gurukul",
  },
  {
    quote:
      "Documentation was ready before we asked for it. Made the loan approval process considerably smoother.",
    name: "Rohan D'Souza",
    role: "FarmOwner, Rudra Valley",
  },
];

export const latestNews = [
  {
    title: "Rudra Valley crosses foundation stage across all clusters",
    date: "June 2026",
    href: "/media-centre",
  },
  {
    title: "JagKalyan Tarak Gurukul masterplan approved, registrations open",
    date: "May 2026",
    href: "/media-centre",
  },
  {
    title: "Saiccha Developers joins Goa green-building working group",
    date: "April 2026",
    href: "/media-centre",
  },
];
