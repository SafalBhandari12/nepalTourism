export interface RegionInfo {
  id: string;
  name: string;
  population: string;
  area: string;
  majorAttractions: string[];
  description: string;
  capital?: string;
}

export const regionData: Record<string, RegionInfo> = {
  NPKA: {
    id: "NPKA",
    name: "Karnali",
    population: "1.6 million",
    area: "42,308 km²",
    capital: "Birendranagar",
    majorAttractions: [
      "Rara Lake (highest lake in Nepal)",
      "Jumla Valley",
      "Talcha Pass",
      "Karnali River",
    ],
    description:
      "Located in the far western region, Karnali is known for its pristine natural beauty, mountainous terrain, and adventure opportunities. The region is home to Rara Lake, one of Nepal's most beautiful mountain lakes.",
  },
  NPMA: {
    id: "NPMA",
    name: "Mahakali",
    population: "0.55 million",
    area: "6,510 km²",
    capital: "Dhadeldhura",
    majorAttractions: [
      "Mahakali River (natural border with India)",
      "Dhulikhel temples",
      "Panauti Bazaar",
      "Dhulikhel Museum",
    ],
    description:
      "Mahakali is the easternmost region of Far Western Nepal, characterized by its geographical proximity to India and rich cultural heritage.",
  },
  NPSE: {
    id: "NPSE",
    name: "Seti",
    population: "0.75 million",
    area: "6,970 km²",
    capital: "Nuwakot",
    majorAttractions: [
      "Seti River Gorge",
      "Nuwakot temples",
      "Jumla trek routes",
      "Mountain scenery",
    ],
    description:
      "The Seti region features dramatic river gorges and mountain landscapes. It's known for its challenging trekking routes and stunning natural beauty.",
  },
  NPDH: {
    id: "NPDH",
    name: "Dhawalagiri",
    population: "1.3 million",
    area: "13,562 km²",
    capital: "Baglung",
    majorAttractions: [
      "Dhawalagiri I (8,167m)",
      "Annapurna Circuit Trek",
      "Kali Gandaki Gorge",
      "Kaligandaki River",
    ],
    description:
      "Named after Dhawalagiri, the 'White Mountain', this region is a trekkers' paradise offering some of Nepal's most challenging and rewarding hiking trails.",
  },
  NPGA: {
    id: "NPGA",
    name: "Gandaki",
    population: "2 million",
    area: "7,889 km²",
    capital: "Pokhara",
    majorAttractions: [
      "Pokhara City",
      "Fewa Lake",
      "Davis Falls",
      "Sarangkot Viewpoint",
      "Annapurna Circuit",
    ],
    description:
      "Home to Pokhara, Nepal's second-largest city, Gandaki is a major tourist hub known for its serene lakes, adventure sports, and proximity to the Annapurna region.",
  },
  NPBA: {
    id: "NPBA",
    name: "Bagmati",
    population: "5.5 million",
    area: "14,718 km²",
    capital: "Kathmandu",
    majorAttractions: [
      "Kathmandu Durbar Square",
      "Boudhanath Stupa",
      "Pashupatinath Temple",
      "Swayambhunath Stupa",
      "Bhaktapur Durbar Square",
    ],
    description:
      "The most populous region, Bagmati includes Kathmandu, Nepal's capital and cultural heart. It's home to UNESCO World Heritage Sites and the country's richest cultural heritage.",
  },
  NPJA: {
    id: "NPJA",
    name: "Janakpur",
    population: "2.8 million",
    area: "10,144 km²",
    capital: "Janakpur",
    majorAttractions: [
      "Janaki Mandir Temple",
      "Ram Navami Festival",
      "Vivaha Mandap",
      "Baba Murari",
      "Mithila Art",
    ],
    description:
      "The religious heartland of Nepal, Janakpur is the birthplace of Goddess Sita and a major pilgrimage site. It's famous for Mithila art and cultural traditions.",
  },
  NPSA: {
    id: "NPSA",
    name: "Sagarmatha",
    population: "0.9 million",
    area: "11,296 km²",
    capital: "Saptari",
    majorAttractions: [
      "Mount Everest Base Camp Trek",
      "Khumbu Region",
      "Sherpa Culture",
      "Namche Bazaar",
      "Tengboche Monastery",
    ],
    description:
      "Named after Mount Everest (Sagarmatha in Nepali), this region is the gateway to the world's highest mountain. It's the hub for Everest trekking and Sherpa culture.",
  },
  NPKO: {
    id: "NPKO",
    name: "Bhojpur",
    population: "0.65 million",
    area: "5,555 km²",
    capital: "Bhojpur",
    majorAttractions: [
      "Arun Valley",
      "Makalu Base Camp",
      "Ancient temples",
      "Mountain trails",
    ],
    description:
      "A remote and relatively unexplored region, Bhojpur offers authentic mountain experiences and opportunities for adventure trekking.",
  },
  NPME: {
    id: "NPME",
    name: "Mechi",
    population: "0.75 million",
    area: "6,344 km²",
    capital: "Ilam",
    majorAttractions: [
      "Antu Danda (sunrise viewpoint)",
      "Kanyam",
      "Tea gardens",
      "Mechi River",
    ],
    description:
      "The easternmost region of Nepal, Mechi is known for its tea gardens, beautiful hillside views, and traditional Nepali culture.",
  },
  NPNA: {
    id: "NPNA",
    name: "Narayani",
    population: "2.5 million",
    area: "9,660 km²",
    capital: "Chitwan",
    majorAttractions: [
      "Chitwan National Park",
      "Safari activities",
      "Wildlife viewing",
      "Narayani River",
      "Tiger Tops",
    ],
    description:
      "Home to Chitwan National Park, Narayani is Nepal's premier wildlife destination. It offers thrilling safari experiences and abundant biodiversity.",
  },
  NPLU: {
    id: "NPLU",
    name: "Lumbini",
    population: "1.8 million",
    area: "5,272 km²",
    capital: "Dhulikhel",
    majorAttractions: [
      "Lumbini Garden (Birthplace of Buddha)",
      "Maya Devi Temple",
      "Ashoka Pillar",
      "Peace Pagoda",
      "Buddhist monasteries",
    ],
    description:
      "One of the world's most sacred sites, Lumbini is the birthplace of Buddha. It's a major pilgrimage destination and UNESCO World Heritage Site with numerous Buddhist monasteries.",
  },
  NPRA: {
    id: "NPRA",
    name: "Rapti",
    population: "1.2 million",
    area: "7,844 km²",
    capital: "Gorkha",
    majorAttractions: [
      "Gorkha Hill",
      "Manakamana Temple",
      "Gorkhali heritage",
      "Hill trekking",
    ],
    description:
      "Historically significant as the birthplace of the Gurkha warriors, Rapti region combines cultural heritage with natural beauty and religious importance.",
  },
  NPBH: {
    id: "NPBH",
    name: "Bheri",
    population: "1.5 million",
    area: "14,968 km²",
    capital: "Nepalgunj",
    majorAttractions: [
      "Bheri River",
      "Nepalgunj City",
      "Bardia National Park",
      "Jungle safari",
      "Bird watching",
    ],
    description:
      "Located in western Nepal, Bheri region features the Bheri River and offers jungle safari experiences. Bardia National Park is a haven for wildlife enthusiasts.",
  },
};
