// Placeholder project detail content — see design/project-plan.md Section 4
// for the real assets (master plans, pricing, RERA numbers, brochures) this
// needs to be replaced with before launch.

// Rudra Valley content below is drawn from two client-supplied videos
// (D:\JK\Rudra Valley.mp4, a silent 3D masterplan visualization, and
// D:\JK\Rudra Vellay 2.mp4, a narrated brand film with spoken facts and
// figures), both scanned 2026-07-21 via scene-by-scene AI video analysis.
// Neither video file is checked into the repo, only the information
// extracted from them. Figures below (acreage, distances, amenity count)
// are as stated in the narration; pricing, exact plot sizes, RERA number,
// and construction status were not given in either video and are flagged
// inline as pending real client confirmation.
export const rudraValley = {
  name: "Rudra Valley",
  tagline: "Premium farm plots and farmhouses in the misty hills of Amboli Ghat, on the Goa border.",
  heroImage: "/images/rv-cinematic-entrance.jpg",
  cardImage: "/images/rv-cinematic-aerial.jpg",
  location: "Amboli Ghat, Maharashtra",
  status: "Bookings Open",
  overview:
    "Rudra Valley is a premium farm-plot and farmhouse development in Amboli Ghat, a misty hill pass on the Goa-Maharashtra border known for its waterfalls, viewpoints, and forest. Phase 1 spans 233 acres; the wider Phase 2 vision extends to 467 acres and includes a dedicated 48-acre luxury resort. The development is laid out as a grid of individually numbered plots along a recreational canal, entered through a single guarded gatehouse and anchored by a shared clubhouse and amenity zone.",
  masterPlan: {
    body: "Phase 1 (233 acres) lays out numbered farm plots in ordered rows along a central spine road and a landscaped recreational canal, crossed by a pedestrian bridge, with sports fields, parking, and a viewing deck near the entrance. Phase 2 (467 acres) expands the vision with a 48-acre luxury resort, additional farmhouses, and a working tea plantation. Exact plot counts, sizes, and phase-by-phase acreage breakdowns are being finalized with the client.",
    stats: [
      { icon: "Mountains", value: "233 acres", label: "Phase 1, launching now" },
      { icon: "TreeEvergreen", value: "467 acres", label: "Total Phase 2 vision" },
      { icon: "Buildings", value: "48 acres", label: "Dedicated luxury resort" },
      { icon: "Sparkle", value: "15", label: "On-site amenities" },
    ],
    phases: [
      { label: "Phase 1", acres: 233 },
      { label: "Phase 2", acres: 467 },
    ],
  },
  nearby: {
    body: "Amboli Ghat sits close to both Goa and several regional airports, with a major highway upgrade planned nearby.",
    connectivity: [
      { icon: "Airplane", label: "Goa International Airport", value: "50 km" },
      { icon: "Path", label: "Upcoming Goa-Nagpur Shaktipath highway", value: "800 m" },
      { icon: "Airplane", label: "Malvan Airport", value: "70 km" },
      { icon: "Airplane", label: "Belgaum Airport", value: "80 km" },
      { icon: "Airplane", label: "Kolhapur Airport", value: "95 km" },
    ],
    attractions: [
      { icon: "Waves", label: "Amboli's waterfalls and the Kavlesad reverse waterfall" },
      { icon: "Waves", label: "Napharde Waterfalls (10 km)" },
      { icon: "Binoculars", label: "Shirgaonkar sunset point" },
      { icon: "Buildings", label: "Hiranyakeshi Temple (3 km)" },
      { icon: "Mountains", label: "Manoharghad Fort (2.5 km)" },
      { icon: "Sailboat", label: "Shiroda and Keri beaches" },
    ],
  },
  amenities: [
    { icon: "SignIn", title: "Guarded Entrance", body: "A single monitored gatehouse entry into the community." },
    { icon: "Boat", title: "Recreational Canal", body: "A landscaped waterway through the site, open for kayaking, crossed by a pedestrian bridge." },
    { icon: "Buildings", title: "Clubhouse", body: "A dedicated community building anchoring the shared amenity zone." },
    { icon: "Barbell", title: "Five-Star Gymnasium", body: "A fully equipped fitness center within the amenity cluster." },
    { icon: "SwimmingPool", title: "Swimming Pool", body: "An outdoor pool with a wood-decked surround, part of the spa precinct." },
    { icon: "FlowerLotus", title: "Spa Center", body: "A spa building with treatment rooms, lounge, and bar area." },
    { icon: "Heartbeat", title: "Health Center", body: "An on-site clinic offering preventive and everyday care for residents." },
    { icon: "Drop", title: "Bathing Deck", body: "An outdoor deck with a hot tub and wood-fired sauna barrel." },
    { icon: "Binoculars", title: "Viewing Deck", body: "A raised deck overlooking the valley and surrounding hills." },
    { icon: "TennisBall", title: "Tennis Lawn", body: "An on-site tennis court for residents." },
    { icon: "Baby", title: "Children's Park", body: "A dedicated playground with play equipment for younger residents." },
    { icon: "Leaf", title: "Spice Garden", body: "A cultivated garden of native spice plants within the community." },
    { icon: "SoccerBall", title: "Sports Fields", body: "Open turf fields for community sport, next to the main parking court." },
    { icon: "ForkKnife", title: "Restaurant", body: "An on-site restaurant for residents and guests." },
    { icon: "Sailboat", title: "River Rafting", body: "White-water rafting on the nearby river, organized for residents." },
  ],
  layoutPlan: {
    body: "Individually numbered farm plots are laid out in ordered rows across the Phase 1 masterplan grid, the majority with direct canal or road frontage; farmhouses and resort-adjacent plots follow in Phase 2. Detailed layout plans and plot-by-plot dimensions are being finalized with the client and will be added here, alongside downloadable floor plans once available.",
  },
  pricing: [],
  constructionProgress: {
    percent: 0,
    phase: "Masterplan finalized. Construction status to be confirmed by the client.",
    updated: "July 2026",
  },
  brochureUrl: "#",
};
