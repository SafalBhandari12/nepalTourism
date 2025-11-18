export type ScenicSpot = {
  id: string;
  title: string;
  location: string;
  blurb: string;
  image: string;
  tags: string[];
  accent: string;
  gridClass: string;
  heightClass: string;
};

export type SignatureJourney = {
  id: string;
  title: string;
  region: string;
  description: string;
  distance: string;
  duration: string;
  difficulty: "Moderate" | "Hard" | "Leisure";
  season: string;
  image: string;
};

export type CulturalHighlight = {
  id: string;
  title: string;
  description: string;
  detail: string;
};

export type TimelineStop = {
  id: string;
  label: string;
  title: string;
  description: string;
  focus: string;
};

export type ThematicEscape = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  badge: string;
};

export const scenicSpots: ScenicSpot[] = [
  {
    id: "sagarmatha",
    title: "Golden Hour at Everest",
    location: "Kala Patthar • 5,643 m",
    blurb:
      "Watch the first light ignite Everest, Lhotse, and Nuptse in a panorama that feels almost unreal.",
    image: "/mountEverest.jpeg",
    tags: ["Sunrise", "8000ers", "High Pass"],
    accent: "from-amber-500/80 via-rose-500/70 to-transparent",
    gridClass: "md:col-span-7",
    heightClass: "h-[420px]",
  },
  {
    id: "pokhara",
    title: "Gautam Buddha Peace Pagoda",
    location: "Phewa Lake • Pokhara",
    blurb:
      "Peace Pagoda honoring Gautam Buddha, overlooking Phewa Lake and Annapurna.",
    image: "/gautamBuddha.jpg",
    tags: ["Spiritual", "Pilgrimage", "Lakeside"],
    accent: "from-slate-900/40 via-sky-500/40 to-transparent",
    gridClass: "md:col-span-5",
    heightClass: "h-[520px]",
  },
  {
    id: "kathmandu",
    title: "Twilight over Kathmandu Valley",
    location: "Swayambhunath • Kathmandu",
    blurb:
      "Prayer flags, butter lamps, and Himalayan twilight combine for a soulful cityscape.",
    image: "/kathmandu.avif",
    tags: ["Culture", "Heritage", "Sunset"],
    accent: "from-indigo-500/70 via-fuchsia-500/50 to-transparent",
    gridClass: "md:col-span-4",
    heightClass: "h-[360px]",
  },
  {
    id: "chitwan",
    title: "Mist Trails in Chitwan",
    location: "Rapti River • Chitwan",
    blurb:
      "Glide past jungle silhouettes at dawn while rhinos graze along the banks.",
    image: "/chitwan.jpg",
    tags: ["Wildlife", "Safari", "Lowlands"],
    accent: "from-emerald-500/70 via-lime-400/50 to-transparent",
    gridClass: "md:col-span-8",
    heightClass: "h-[400px]",
  },
];

export const signatureJourneys: SignatureJourney[] = [
  {
    id: "ebc",
    title: "Everest Base Camp & Kala Patthar",
    region: "Khumbu Himalaya",
    description:
      "Classic alpine lodges, hanging bridges, and glacier valleys culminating at 5,545 m sunrise views.",
    distance: "130 km",
    duration: "14 days",
    difficulty: "Hard",
    season: "Mar–May • Sep–Nov",
    image: "/baseCamp.jpg",
  },
  {
    id: "annapurna",
    title: "Annapurna Circuit with Tilicho Lake",
    region: "Manang & Mustang",
    description:
      "Traverse rhododendron forests to high desert plateaus, crossing Thorong-La and detouring to turquoise Tilicho.",
    distance: "160 km",
    duration: "16 days",
    difficulty: "Hard",
    season: "Mar–Jun • Oct–Dec",
    image: "/annapurnacircuit.jpg",
  },
  {
    id: "poonhill",
    title: "Ghorepani Poon Hill Slow Trek",
    region: "Lower Annapurna",
    description:
      "Sunrise panoramas, cozy tea houses, and cultural stays ideal for first-time trekkers.",
    distance: "45 km",
    duration: "6 days",
    difficulty: "Moderate",
    season: "Year-round",
    image: "/ghorepani.jpg",
  },
  {
    id: "mustang-jeep",
    title: "Upper Mustang Jeep & Hike",
    region: "Forbidden Kingdom",
    description:
      "Blend comfort drives with ridge hikes to painted caves, sky-high monasteries, and windswept passes.",
    distance: "310 km",
    duration: "10 days",
    difficulty: "Moderate",
    season: "Apr–Nov",
    image: "/upperMustang.jpg",
  },
];

export const culturalHighlights: CulturalHighlight[] = [
  {
    id: "bhaktapur",
    title: "Living Heritage Squares",
    description:
      "Bhaktapur's artisans keep wood-carving and pottery traditions alive amidst pagoda temples.",
    detail:
      "Spend an afternoon molding your own clay handi while a local family shares stories of the Malla kings.",
  },
  {
    id: "festivals",
    title: "Festival Immersions",
    description:
      "From Holi colors to Tihar lights, festivals are intimate invitations into Nepali homes.",
    detail:
      "We arrange guided etiquette walk-throughs so you can participate respectfully and meaningfully.",
  },
  {
    id: "cuisine",
    title: "Nepali Farm-to-Table",
    description:
      "Field-to-fire dining experiences spotlight organic terraces, yak cheese, and Himalayan botanicals.",
    detail:
      "Join a chef in foraging nettles or timmur pepper before a private tasting menu.",
  },
  {
    id: "wellness",
    title: "Mindful Retreats",
    description:
      "Monastic chants, forest bathing, and sound healing atop sacred ridgelines.",
    detail:
      "Custom itineraries weave meditation with gentle hikes so you leave refocused and deeply rested.",
  },
];

export const culturalFilm = {
  src: "https://cdn.coverr.co/videos/coverr-colorful-holi-celebration-2075/1080p.mp4",
  poster:
    "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80",
};

export const immersiveTimeline: TimelineStop[] = [
  {
    id: "dawn",
    label: "05:15",
    title: "Sunrise Gong",
    description: "Light meditation as Annapurna glows in soft pinks.",
    focus: "Mindfulness",
  },
  {
    id: "morning",
    label: "08:00",
    title: "Terrace Breakfast",
    description:
      "Organic millet pancakes, Nepali coffee, sweeping valley views.",
    focus: "Flavors",
  },
  {
    id: "midday",
    label: "11:30",
    title: "Heritage Walk",
    description:
      "Private curator-led stroll through Patan courtyards and ateliers.",
    focus: "Culture",
  },
  {
    id: "afternoon",
    label: "15:00",
    title: "Forest Sound Bath",
    description: "Crystal bowls and singing bells in a cedar grove.",
    focus: "Wellness",
  },
  {
    id: "sunset",
    label: "18:45",
    title: "Skyline Aperitif",
    description: "Sunset mocktails with Mount Machhapuchhre's silhouette.",
    focus: "Scenery",
  },
  {
    id: "night",
    label: "21:30",
    title: "Starlit Campfire",
    description: "Storytelling with local guides beneath Milky Way skies.",
    focus: "Community",
  },
];

export const thematicEscapes: ThematicEscape[] = [
  {
    id: "adventure",
    title: "High-Altitude Adventure",
    description:
      "Glacier flights, heli drop trekking days, and arctic-cool lodges for thrill seekers.",
    highlights: ["Heli access", "Technical guides", "Private sherpa support"],
    image:
      "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=1200&q=80",
    badge: "Adrenaline",
  },
  {
    id: "spiritual",
    title: "Spiritual & Wellness",
    description:
      "Retreats with monks, Ayurvedic therapies, and sunrise yoga facing the Himalaya.",
    highlights: ["Monastery stay", "Sound healing", "Ayurvedic chefs"],
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    badge: "Soulful",
  },
  {
    id: "culture",
    title: "Cultural Immersion",
    description:
      "Live with artisans, learn traditional crafts, and dine with culinary storytellers.",
    highlights: ["Craft ateliers", "Home-hosted feasts", "Festive calendar"],
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    badge: "Heritage",
  },
];
