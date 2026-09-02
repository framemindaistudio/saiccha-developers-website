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
};

export const chatbotConfig: ChatbotConfig = {
  name: "Saiccha Assistant",
  greeting: "Hello! I can share details on our projects and services, or connect you with the team.",
  topicsIntro: "What would you like to know about?",
  topics: [
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
      question: "Are your projects RERA-registered?",
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
      id: "contact",
      question: "How do I reach the team directly?",
      answer: "Email info@saicchadevelopers.com and the team will follow up directly.",
    },
  ],
};
