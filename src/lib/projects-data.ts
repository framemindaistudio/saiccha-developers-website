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
    "Rudra Valley is a premium farm-plot and farmhouse development in Amboli Ghat, a misty hill pass on the Goa-Maharashtra border known for its waterfalls, viewpoints, and forest. Phase 1 spans 233 acres, laid out as a grid of individually numbered plots along a recreational canal, entered through a single guarded gatehouse and anchored by a shared clubhouse and amenity zone.",
  masterPlan: {
    body: "Phase 1 spans 233 acres and lays out numbered farm plots in ordered rows along a central spine road and a landscaped recreational canal, crossed by a pedestrian bridge, with sports fields, parking, and a viewing deck near the entrance. Exact plot counts, sizes, and pricing are being finalized with the client.",
    stats: [
      { icon: "Mountains", value: "233 acres", label: "Phase 1, launching now" },
      { icon: "Sparkle", value: "15", label: "On-site amenities" },
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
    { icon: "SignIn", title: "Guarded Entrance", body: "A single monitored gatehouse entry into the community.", image: "/images/rv-cinematic-entrance.jpg" },
    { icon: "Boat", title: "Recreational Canal", body: "A landscaped waterway through the site, open for kayaking, crossed by a pedestrian bridge.", image: "/images/rv-cinematic-canal.jpg" },
    { icon: "Buildings", title: "Clubhouse", body: "A dedicated community building anchoring the shared amenity zone.", image: "/images/rv-cinematic-clubhouse.jpg" },
    { icon: "Barbell", title: "Five-Star Gymnasium", body: "A fully equipped fitness center within the amenity cluster." },
    { icon: "SwimmingPool", title: "Swimming Pool", body: "An outdoor pool with a wood-decked surround, part of the spa precinct.", image: "/images/rv-cinematic-spa.jpg" },
    { icon: "FlowerLotus", title: "Spa Center", body: "A spa building with treatment rooms, lounge, and bar area.", image: "/images/rv-cinematic-spa.jpg" },
    { icon: "Heartbeat", title: "Health Center", body: "An on-site clinic offering preventive and everyday care for residents." },
    { icon: "Drop", title: "Bathing Deck", body: "An outdoor deck with a hot tub and wood-fired sauna barrel." },
    { icon: "Binoculars", title: "Viewing Deck", body: "A raised deck overlooking the valley and surrounding hills." },
    { icon: "TennisBall", title: "Tennis Lawn", body: "An on-site tennis court for residents.", image: "/images/rv-cinematic-tennis.jpg" },
    { icon: "Baby", title: "Children's Park", body: "A dedicated playground with play equipment for younger residents." },
    { icon: "Leaf", title: "Spice Garden", body: "A cultivated garden of native spice plants within the community." },
    { icon: "SoccerBall", title: "Sports Fields", body: "Open turf fields for community sport, next to the main parking court." },
    { icon: "ForkKnife", title: "Restaurant", body: "An on-site restaurant for residents and guests." },
    { icon: "Sailboat", title: "River Rafting", body: "White-water rafting on the nearby river, organized for residents." },
  ],
  layoutPlan: {
    body: "Individually numbered farm plots are laid out in ordered rows across the Phase 1 masterplan grid, the majority with direct canal or road frontage. Detailed layout plans and plot-by-plot dimensions are being finalized with the client and will be added here, alongside downloadable floor plans once available.",
  },
  pricing: [],
  constructionProgress: {
    percent: 0,
    phase: "Masterplan finalized. Construction status to be confirmed by the client.",
    updated: "July 2026",
  },
  brochureUrl: "#",
};

// JagKalyan Tarak Gurukul content below covers the Eco Living plotted scheme
// specifically, the real-estate half of the wider JagKalyan Tarak Gurukul
// initiative (a joint venture with JagKalyan Holistic Mission). Source:
// client-supplied concept layout, "Khanyale property REVISED
// 20.07.2026-Model.pdf", and the same data structured on the dedicated
// JagKalyan Tarak Gurukul website's Eco Living page. The campus itself
// (education, wellness, research) lives entirely on that dedicated site,
// linked at the end of this page.
export const jagkalyanTarakGurukul = {
  name: "JagKalyan Tarak Gurukul",
  tagline: "A gated, plotted Gurukul Eco World scheme beside the Gurukul campus, in Dodamarg, North Goa.",
  heroImage: "/images/jk-grand-entrance.jpg",
  cardImage: "/images/jk-amenity-water-body.jpg",
  location: "Village Khanyale, Dodamarg Taluka, Sindhudurg District, Maharashtra",
  status: "Phase 1 Underway",
  overview:
    "JagKalyan Tarak Gurukul is a joint initiative with JagKalyan Holistic Mission: an integrated campus for holistic education, wellness, and research, paired with Gurukul Eco World, a gated, plotted residential scheme immediately beside it. Gurukul Eco World is laid out across two plot formats along a network of wide internal roads, anchored by a cricket stadium, sports and shopping centres, a landscaped water body, and a monumental entrance gate, all directly adjoining the Gurukul campus itself.",
  masterPlan: {
    body: "Phase 1 releases 1,000 plots now, out of 3,000 planned across the full scheme, laid out along 15.0 m and 12.0 m internal roads in two plot formats. The amenity cluster sits at the southern end of the site, adjoining the Gurukul campus, with the decorative entrance gate and two of the scheme's four watch towers at the northern entrance.",
    stats: [
      { icon: "Ruler", value: "1,000", label: "Phase 1 plots" },
      { icon: "GridFour", value: "3,000", label: "Total planned plots" },
      { icon: "Path", value: "2", label: "Plot formats (500 & 150 sq.m)" },
      { icon: "Sparkle", value: "8", label: "On-site amenities" },
    ],
    phases: [
      { label: "Phase 1", acres: 1000 },
      { label: "Remaining phases", acres: 2000 },
    ],
  },
  nearby: {
    body: "Gurukul Eco World sits in Village Khanyale, Dodamarg Taluka, Sindhudurg District, directly beside the JagKalyan Tarak Gurukul campus.",
  },
  amenities: [
    { icon: "SoccerBall", title: "Cricket Stadium", body: "A dedicated cricket stadium across 5 acres.", image: "/images/jk-amenity-cricket-stadium.jpg" },
    { icon: "Basketball", title: "Sports Centre", body: "A shared sports centre for residents.", image: "/images/jk-amenity-sports-centre.jpg" },
    { icon: "Storefront", title: "Shopping Centre", body: "Everyday retail within the scheme itself.", image: "/images/jk-amenity-shopping-centre.jpg" },
    { icon: "Garage", title: "Amenities & Parking", body: "A dedicated amenities and parking zone across 5.5 acres.", image: "/images/jk-amenity-parking.jpg" },
    { icon: "Waves", title: "Water Body", body: "A landscaped water body at the heart of the scheme.", image: "/images/jk-amenity-water-body.jpg" },
    { icon: "DoorOpen", title: "Decorative Entrance Gate", body: "A monumental gated entrance to the scheme.", image: "/images/jk-grand-entrance.jpg" },
    { icon: "Binoculars", title: "Watch Towers", body: "Four watch towers positioned around the scheme's perimeter for security.", image: "/images/jk-amenity-watch-tower.jpg" },
    { icon: "Buildings", title: "JTG Complex", body: "Directly adjoining the JagKalyan Tarak Gurukul campus itself.", image: "/images/jk-main-building-exterior.jpg" },
  ],
  layoutPlan: {
    body: "Two plot formats run along the scheme's internal road network: a 500 sq.m format along the main roads, and a more compact 150 sq.m format for buyers seeking a smaller footprint. Roads are laid out at 15.0 m and 12.0 m widths. Detailed plot-by-plot dimensions and numbering are being finalized with the client and will be added here.",
  },
  pricing: [],
  constructionProgress: {
    percent: 33,
    phase: "Phase 1 underway.",
    updated: "July 2026",
  },
  brochureUrl: "#",
  websiteUrl: "https://www.jagkalyantarakgurukul.com/",
};
