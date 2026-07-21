// Placeholder project detail content — see design/project-plan.md Section 4
// for the real assets (master plans, pricing, RERA numbers, brochures) this
// needs to be replaced with before launch.

// Rudra Valley content below is drawn from the client-supplied masterplan
// walkthrough video (D:\JK\Rudra Valley.mp4, scanned 2026-07-21) — a 3D
// visualization of the masterplan, not photography of a built site. Exact
// figures (plot sizes, pricing, RERA number, construction status) were not
// shown in the video and are flagged inline as pending real client data.
export const rudraValley = {
  name: "Rudra Valley",
  tagline: "A gated, canal-front plotted community built around shared clubhouse, spa, and sports amenities.",
  heroImage: "/images/hero-rudra-valley-aerial.jpg",
  cardImage: "/images/rudra-valley-villas.jpg",
  location: "Goa",
  status: "Bookings Open",
  overview:
    "Rudra Valley is a masterplanned, gated plotted development: a grid of individually numbered plots set along a recreational canal, framed by dense forest on all sides. A single guarded entrance leads onto a palm-lined boulevard, opening into a dedicated amenity zone built around a clubhouse, spa, and sports facilities shared by the whole community.",
  masterPlanVideo: "/videos/rudra-valley-masterplan.mp4",
  masterPlanVideoPoster: "/images/rudra-valley-video-poster.jpg",
  masterPlan: {
    body: "The plan lays out numbered plots in ordered rows on either side of a central spine road, with a landscaped canal winding through the site, connected by a pedestrian bridge. Sports fields, a parking court, and a raised wooden observation tower sit near the entrance; the amenity cluster, clubhouse, spa, and wellness center anchor the community further in. Exact plot counts, sizes, and acreage are being finalized with the client and will replace this description once confirmed.",
  },
  amenities: [
    { icon: "SignIn", title: "Guarded Entrance", body: "A palm-lined boulevard leads to a single monitored gatehouse entry." },
    { icon: "Boat", title: "Recreational Canal", body: "A landscaped waterway through the site, open for kayaking, crossed by a pedestrian bridge." },
    { icon: "Buildings", title: "Clubhouse", body: "A dedicated community building anchoring the shared amenity zone." },
    { icon: "SwimmingPool", title: "Swimming Pool", body: "An outdoor pool with a wood-decked surround, part of the spa precinct." },
    { icon: "FlowerLotus", title: "Spa & Lounge", body: "A spa building with an outdoor lounge and bar area alongside the pool." },
    { icon: "Barbell", title: "Gymnasium", body: "A dedicated fitness building within the amenity cluster." },
    { icon: "Heartbeat", title: "Wellness Center", body: "A standalone wellness building beside the clubhouse." },
    { icon: "TennisBall", title: "Tennis Courts", body: "Two courts, one clay-surface and one hard-court, fully fenced." },
    { icon: "Baby", title: "Children's Playground", body: "A landscaped play area with dedicated equipment near the canal." },
    { icon: "SoccerBall", title: "Sports Fields", body: "Open turf fields for community sport, next to the main parking court." },
    { icon: "ForkKnife", title: "Restaurant", body: "An on-site restaurant near the canal bridge, for residents and guests." },
    { icon: "Binoculars", title: "Observation Tower", body: "A raised wooden tower overlooking the entrance and parking court." },
  ],
  layoutPlan: {
    body: "Individually numbered plots are laid out in ordered rows across the masterplan grid, the majority with direct canal or road frontage. Detailed layout plans and plot-by-plot dimensions are being finalized with the client and will be added here, alongside downloadable floor plans once available.",
  },
  pricing: [],
  constructionProgress: {
    percent: 0,
    phase: "Masterplan finalized. Construction status to be confirmed by the client.",
    updated: "July 2026",
  },
  brochureUrl: "#",
};

export const jagkalyanTarakGurukul = {
  name: "JagKalyan Tarak Gurukul",
  tagline: "An eco-living campus of organic farms, wellness, and gurukul learning.",
  heroImage: "/images/jagkalyan-eco-campus.jpg",
  cardImage: "/images/jagkalyan-eco-campus.jpg",
  location: "Goa",
  status: "Now Registering Interest",
  vision:
    "JagKalyan Tarak Gurukul is planned as a self-sustaining township built around three pillars: gurukul-style learning, organic agriculture, and wellness, with eco-homes woven through working farmland rather than around it.",
  masterPlan: {
    body: "A single integrated campus combining a gurukul learning centre, working organic farms, a wellness and healthcare block, and clustered eco-homes connected by shaded walking paths.",
    stats: [
      { label: "Total campus area", value: "65 acres" },
      { label: "Reserved for organic farming", value: "20 acres" },
      { label: "Eco-home clusters", value: "6" },
      { label: "Planned gurukul capacity", value: "300 students" },
    ],
  },
  ecoLivingConcept:
    "Homes are oriented for cross-ventilation and natural light first, with construction materials chosen for low embodied energy. Shared composting, greywater recycling, and a car-light internal circulation plan run through the whole campus, not as add-ons to individual units.",
  gurukulCampus:
    "A residential learning campus following a gurukul-inspired model: classrooms, a library, hostel blocks, and open-air teaching spaces set apart from the residential clusters but walkable from all of them.",
  wellness:
    "A wellness and healthcare block offering preventive care, yoga and naturopathy programs, and a small-format clinic for residents, positioned centrally within the campus.",
  organicFarms:
    "20 acres of working organic farmland, partly cooperative and partly available for resident participation, supplying the campus kitchen and a resident produce-share program.",
  ecoHomes: [
    { type: "Eco Studio", size: "550 sq. ft.", price: "From ₹42 L" },
    { type: "2 BHK Eco Home", size: "1,050 sq. ft.", price: "From ₹78 L" },
    { type: "3 BHK Eco Villa", size: "1,650 sq. ft.", price: "From ₹1.35 Cr" },
  ],
  investmentOpportunities:
    "Early registrations get first allocation choice across eco-home clusters and access to a phased payment plan tied to campus construction milestones, not a single upfront commitment.",
  faqs: [
    {
      q: "Is JagKalyan Tarak Gurukul RERA-registered?",
      a: "RERA registration is filed at the project-launch stage; the registration number will be published here and on the Sustainability and Investors pages once issued.",
    },
    {
      q: "Can I buy an eco-home without enrolling in the gurukul?",
      a: "Yes. The gurukul, farms, and wellness block are shared campus amenities open to all residents; enrollment in the gurukul itself is optional and separate.",
    },
    {
      q: "How does the organic farm produce-share work?",
      a: "Residents can opt into a seasonal produce-share program from the cooperative farm; details and pricing will be confirmed closer to farm operationalization.",
    },
  ],
};
