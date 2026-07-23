export type ChatTopic = {
  id: string;
  label: string;
  reply: string;
  href?: string;
  hrefLabel?: string;
  external?: boolean;
};

export type ChatFaq = {
  id: string;
  question: string;
  answer: string;
};

export type ChatbotConfig = {
  name: string;
  greeting: string;
  topicsIntro: string;
  topics: ChatTopic[];
  faqs: ChatFaq[];
  enquireHref: string;
  whatsappHref: string;
};

export const chatbotConfig: ChatbotConfig = {
  name: "Saiccha Assistant",
  greeting: "Hello! I can share details on our projects and services, or connect you with the team.",
  topicsIntro: "What would you like to know about?",
  topics: [
    {
      id: "rudra-valley",
      label: "Rudra Valley",
      reply:
        "Premium farm plots and farmhouses in Amboli Ghat, on the Goa-Maharashtra border. Phase 1 spans 233 acres, with a wider 467-acre Phase 2 vision including a dedicated 48-acre luxury resort. Bookings are open now.",
      href: "/projects/rudra-valley",
      hrefLabel: "See the master plan",
    },
    {
      id: "jagkalyan",
      label: "JagKalyan Tarak Gurukul",
      reply:
        "A holistic education, wellness, and eco-living campus in Dodamarg, North Goa, a joint initiative with JagKalyan Holistic Mission. It now has its own dedicated website.",
      href: "https://www.jagkalyantarakgurukul.com/",
      hrefLabel: "Visit the website",
      external: true,
    },
    {
      id: "services",
      label: "Our Services",
      reply:
        "Land development, plot development, residential and commercial projects, in-house project management, infrastructure development, and property investment advisory, all under one accountable team.",
      href: "/services",
      hrefLabel: "See all services",
    },
    {
      id: "investors",
      label: "Investing With Us",
      reply:
        "Every active project reports real construction progress, not launch-day renders, and is RERA-registered by default. Land development, construction, and project management all run in-house.",
      href: "/investors",
      hrefLabel: "Why invest with Saiccha",
    },
    {
      id: "sustainability",
      label: "Sustainability",
      reply:
        "Every masterplan reserves permanent green belt land before residential clusters are laid out, with solar power, rainwater harvesting, and greywater recycling built in from Phase 1.",
      href: "/sustainability",
      hrefLabel: "See our approach",
    },
  ],
  faqs: [
    {
      id: "rera",
      question: "Is Rudra Valley RERA-registered?",
      answer:
        "RERA registration numbers are published per project as they're issued. Check the RERA Details page for the current status of each active project.",
    },
    {
      id: "site-visit",
      question: "How do I book a site visit?",
      answer:
        "Use the Book a Site Visit button, or send us your details through the enquiry form and the team will follow up directly, not through a call centre.",
    },
    {
      id: "payment",
      question: "What's the payment plan for Rudra Valley?",
      answer:
        "Payments are staged against construction milestones, booking, agreement, foundation, structure, finishing, and handover. Full details are shared during the booking process.",
    },
    {
      id: "location",
      question: "Where is Rudra Valley located?",
      answer: "Amboli Ghat, on the Goa-Maharashtra border, about 50 km from Goa International Airport.",
    },
    {
      id: "contact",
      question: "How do I reach the team directly?",
      answer: "Call or WhatsApp +91 80730 87576, or email info@saicchadevelopers.com.",
    },
  ],
  enquireHref: "https://docs.google.com/forms/d/e/1FAIpQLSc07UjARGUkUiVLXgjmTaCOxJ6-945wz4ToOGLK7N1WnyZZYQ/viewform",
  whatsappHref: "https://wa.me/918073087576",
};
