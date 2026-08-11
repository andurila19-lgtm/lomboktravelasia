import type { Locale } from '@/lib/i18n/config';

export type DestinationCategory =
  | 'Beach'
  | 'Island'
  | 'Mountain'
  | 'Culture'
  | 'Nature'
  | 'Adventure';

export interface DestinationFAQ {
  question: string;
  answer: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  category: DestinationCategory;
  heroImage: string;
  featured?: boolean;
  gallery: string[];
  highlights: string[];
  experiences: string[];
  travelTips: {
    bestFor: string;
    travelStyle: string;
    suggestedDuration: string;
    whatToBring: string;
    gettingAround: string;
    thingsToConsider: string;
  };
  faq: DestinationFAQ[];
  relatedDestinationSlugs: string[];
  recommendedTourSlugs: string[];
  seo: {
    title: string;
    description: string;
  };
  en: {
    title: string;
    tagline: string;
    shortDescription: string;
    description: string;
  };
  idLang: {
    title: string;
    tagline: string;
    shortDescription: string;
    description: string;
  };
}

export function getDestinationContent(dest: Destination, locale: Locale) {
  const langData = locale === 'id' ? dest.idLang : dest.en;
  return {
    ...dest,
    title: langData.title,
    tagline: langData.tagline,
    shortDescription: langData.shortDescription,
    description: langData.description,
  };
}

export const destinations: Destination[] = [
  {
    id: 'kuta-lombok',
    slug: 'kuta-lombok',
    name: 'Kuta Lombok',
    category: 'Beach',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Beach', 'Surf', 'Coastal scenery', 'Local culture'],
    experiences: [
      'Sunset views from Merese Hill',
      'Surfing world-class reef breaks',
      'Cafe hopping in Kuta town',
      'Exploring surrounding hidden coves',
    ],
    travelTips: {
      bestFor: 'Surfers, beach lovers, independent travelers',
      travelStyle: 'Coastal relaxed, boutique stays, active exploration',
      suggestedDuration: '2 - 4 Days',
      whatToBring: 'Sunscreen, reef-safe lotion, swimwear, sandals',
      gettingAround: 'Scooter rental or private driver',
      thingsToConsider: 'Sun exposure can be intense during midday hours',
    },
    faq: [
      {
        question: 'How do I get to Kuta Lombok from the airport?',
        answer: 'Kuta Lombok is located approximately 25-30 minutes south of Lombok International Airport (LOP) by taxi or private transfer.',
      },
      {
        question: 'Is Kuta Lombok suitable for non-surfers?',
        answer: 'Yes! While Kuta is famous for surfing, its stunning beaches, hill viewpoints, and vibrant culinary scene make it popular for all travelers.',
      },
    ],
    relatedDestinationSlugs: ['tanjung-aan', 'selong-belanak', 'mawun-beach', 'mandalika'],
    recommendedTourSlugs: ['south-lombok-surf-beach-safari'],
    seo: {
      title: 'Kuta Lombok Travel Guide & Tours | Lombok Travel Asia',
      description: 'Explore Kuta Lombok, discover beaches, experiences and tours, and plan your Lombok journey with Lombok Travel Asia.',
    },
    en: {
      title: 'Kuta Lombok',
      tagline: 'Where turquoise water meets the southern coast of Lombok',
      shortDescription: 'Lombok\'s southern coastal hub famous for dramatic cliffs, world-class surf breaks, and vibrant beach culture.',
      description: 'Kuta Lombok sits at the heart of South Lombok\'s breathtaking coastline. Surrounded by rolling green hills and crystalline bays, it offers a relaxed atmosphere combined with boutique cafes, surf schools, and easy access to pristine beaches.',
    },
    idLang: {
      title: 'Kuta Lombok',
      tagline: 'Pertemuan air biru kejernihan dengan pantai selatan Lombok',
      shortDescription: 'Pusat pesisir selatan Lombok yang terkenal dengan tebing dramatis, spot selancar, dan budaya pantai.',
      description: 'Kuta Lombok berada di pusat garis pantai selatan Lombok yang memukau. Dikelilingi bukit-bukit hijau dan teluk-teluk jernih, Kuta menawarkan suasana santai dipadukan dengan kafe boutique dan akses mudah ke pantai murni.',
    },
  },
  {
    id: 'mandalika',
    slug: 'mandalika',
    name: 'Mandalika',
    category: 'Beach',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Resorts', 'Motorsport', 'Beach', 'Leisure'],
    experiences: [
      'Visiting Mandalika Circuit',
      'Relaxing at Kuta Beach Mandalika',
      'Luxury resort dining',
      'Sunset walks along the promenade',
    ],
    travelTips: {
      bestFor: 'Luxury resort guests, motorsport fans, families',
      travelStyle: 'Premium leisure & coastal resort',
      suggestedDuration: '2 - 3 Days',
      whatToBring: 'Resort wear, sunglasses, camera',
      gettingAround: 'Resort shuttle or private vehicle',
      thingsToConsider: 'Check event schedules during international racing events',
    },
    faq: [
      {
        question: 'What is Mandalika known for?',
        answer: 'Mandalika is a special economic zone featuring luxury beachfront resorts, pristine bays, and the Mandalika International Street Circuit.',
      },
    ],
    relatedDestinationSlugs: ['kuta-lombok', 'tanjung-aan', 'selong-belanak'],
    recommendedTourSlugs: ['south-lombok-surf-beach-safari'],
    seo: {
      title: 'Mandalika Travel Guide & Resort Escapes | Lombok Travel Asia',
      description: 'Discover Mandalika resort area in South Lombok with luxury stays, motorsport circuit, and pristine coastal bays.',
    },
    en: {
      title: 'Mandalika',
      tagline: 'Lombok\'s premier coastal resort & motorsport destination',
      shortDescription: 'A modern coastal resort zone blending luxury hospitality, international motorsport, and pristine beaches.',
      description: 'Mandalika represents Lombok\'s premier resort area, home to international luxury hotels, manicured boardwalks, and the world-renowned Mandalika Circuit.',
    },
    idLang: {
      title: 'Mandalika',
      tagline: 'Destinasi resor pantai & balap internasional Lombok',
      shortDescription: 'Kawasan resor pantai modern yang memadukan keramahan mewah dan pantai-pantai murni.',
      description: 'Mandalika adalah kawasan resor terkemuka Lombok yang menjadi rumah bagi hotel mewah internasional dan Sirkuit Mandalika.',
    },
  },
  {
    id: 'senggigi',
    slug: 'senggigi',
    name: 'Senggigi',
    category: 'Beach',
    heroImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Sunset', 'Coastal resort', 'Dining', 'Gateway to Gilis'],
    experiences: [
      'Watching sunset over Mount Agung',
      'Coastal dining on the beach',
      'Day trip transfers to Gili Islands',
    ],
    travelTips: {
      bestFor: 'Couples, resort travelers, convenient base',
      travelStyle: 'Relaxed resort & dining',
      suggestedDuration: '2 - 3 Days',
      whatToBring: 'Casual evening wear, camera',
      gettingAround: 'Taxi or driver',
      thingsToConsider: 'West-facing coast offers prime sunset views',
    },
    faq: [
      {
        question: 'Is Senggigi a good base for exploring Lombok?',
        answer: 'Yes, Senggigi offers excellent hotels, restaurants, and convenient access to both the Gili Islands and Mataram city.',
      },
    ],
    relatedDestinationSlugs: ['gili-trawangan', 'gili-air', 'mataram'],
    recommendedTourSlugs: ['gili-islands-explorer'],
    seo: {
      title: 'Senggigi Travel Guide & Hotels | Lombok Travel Asia',
      description: 'Plan your stay in Senggigi with golden sunset beaches, beachfront dining, and convenient gateway access.',
    },
    en: {
      title: 'Senggigi',
      tagline: 'Golden sunsets & classic coastal hospitality',
      shortDescription: 'Lombok\'s classic west-coast resort town famous for vibrant sunsets over the Bali Strait.',
      description: 'Senggigi stretches along a series of sweeping bays on Lombok\'s western shore. It is renowned for sunset views looking across to Mount Agung in Bali.',
    },
    idLang: {
      title: 'Senggigi',
      tagline: 'Matahari terbenam emas & keramahan pantai klasik',
      shortDescription: 'Kota resor pantai barat klasik Lombok yang terkenal dengan matahari terbenam memukau.',
      description: 'Senggigi membentang di sepanjang teluk pantai barat Lombok, terkenal dengan pemandangan matahari terbenam berlatar Gunung Agung Bali.',
    },
  },
  {
    id: 'gili-trawangan',
    slug: 'gili-trawangan',
    name: 'Gili Trawangan',
    category: 'Island',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Island', 'Snorkeling', 'Beach', 'Sunset'],
    experiences: [
      'Swimming with sea turtles',
      'Cycling around the car-free island',
      'Sunset swing photo points on the west coast',
      'Scuba diving vibrant coral reefs',
    ],
    travelTips: {
      bestFor: 'Divers, island hoppers, social travelers',
      travelStyle: 'Car-free island life',
      suggestedDuration: '2 - 3 Days',
      whatToBring: 'Mask & snorkel, reef shoes, light clothing',
      gettingAround: 'Bicycle or foot (no motorized vehicles)',
      thingsToConsider: 'Cash ATMs available but carrying some cash is recommended',
    },
    faq: [
      {
        question: 'Are motorized vehicles allowed on Gili Trawangan?',
        answer: 'No. Transport on the Gili Islands is strictly limited to bicycles, electric scooters, and traditional horse carts (cidomo).',
      },
      {
        question: 'Can I see sea turtles at Gili Trawangan?',
        answer: 'Yes, green sea turtles and hawksbill turtles are frequently spotted just off the northeastern coast.',
      },
    ],
    relatedDestinationSlugs: ['gili-air', 'gili-meno', 'senggigi'],
    recommendedTourSlugs: ['gili-islands-explorer'],
    seo: {
      title: 'Gili Trawangan Travel Guide & Tours | Lombok Travel Asia',
      description: 'Explore Gili Trawangan with turtle snorkeling, car-free island cycling, and tropical beach escapes.',
    },
    en: {
      title: 'Gili Trawangan',
      tagline: 'Vibrant car-free island paradise & turtle sanctuary',
      shortDescription: 'The largest of the Gili Islands, famous for crystal waters, turtle snorkeling, and car-free charm.',
      description: 'Gili Trawangan offers a unique tropical escape where motor vehicles are absent and life revolves around white sand beaches and underwater reefs.',
    },
    idLang: {
      title: 'Gili Trawangan',
      tagline: 'Surga pulau bebas kendaraan & suaka penyu',
      shortDescription: 'Pulau terbesar di Kepulauan Gili, terkenal dengan air jernih dan snorkeling penyu.',
      description: 'Gili Trawangan menawarkan pelarian tropis unik tanpa kendaraan bermotor, berpusat di pantai pasir putih dan terumbu karang.',
    },
  },
  {
    id: 'gili-air',
    slug: 'gili-air',
    name: 'Gili Air',
    category: 'Island',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Island', 'Snorkeling', 'Relaxation', 'Culture'],
    experiences: [
      'Snorkeling coral reef drop-offs',
      'Beachfront yoga classes',
      'Exploring local island village paths',
    ],
    travelTips: {
      bestFor: 'Couples, yogis, relaxed travelers',
      travelStyle: 'Peaceful island getaway',
      suggestedDuration: '2 - 3 Days',
      whatToBring: 'Reef shoes, water bottle, swimwear',
      gettingAround: 'Bicycle or walking',
      thingsToConsider: 'Tides affect swimming accessibility on eastern beaches',
    },
    faq: [
      {
        question: 'How does Gili Air compare to Gili Trawangan?',
        answer: 'Gili Air offers a quieter, more relaxed vibe with a strong local community feel compared to Gili Trawangan.',
      },
    ],
    relatedDestinationSlugs: ['gili-trawangan', 'gili-meno', 'senggigi'],
    recommendedTourSlugs: ['gili-islands-explorer'],
    seo: {
      title: 'Gili Air Island Guide & Snorkeling Tours | Lombok Travel Asia',
      description: 'Plan your Gili Air trip with tranquil beaches, yoga, coral reefs, and island hopping.',
    },
    en: {
      title: 'Gili Air',
      tagline: 'The perfect harmony of island life & relaxation',
      shortDescription: 'Closest to the Lombok mainland, combining relaxed beachside living with authentic local village charm.',
      description: 'Gili Air strikes a fine balance between tranquility and convenience. With coral gardens just off the beach, it is ideal for snorkeling.',
    },
    idLang: {
      title: 'Gili Air',
      tagline: 'Harmoni sempurna kehidupan pulau & relaksasi',
      shortDescription: 'Pulau terdekat dengan daratan Lombok yang menggabungkan ketenangan pantai dan desa lokal.',
      description: 'Gili Air menawarkan keseimbangan sempurna antara ketenangan dan kenyamanan dengan taman karang indah tepat di lepas pantai.',
    },
  },
  {
    id: 'gili-meno',
    slug: 'gili-meno',
    name: 'Gili Meno',
    category: 'Island',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Island', 'Underwater Statues', 'Seclusion', 'Nature'],
    experiences: [
      'Visiting Nest underwater statues',
      'Walking along deserted white sand beaches',
      'Observing turtle sanctuary hatchlings',
    ],
    travelTips: {
      bestFor: 'Honeymooners, tranquility seekers',
      travelStyle: 'Secluded island sanctuary',
      suggestedDuration: '1 - 2 Days',
      whatToBring: 'Snorkel gear, book, quiet mindset',
      gettingAround: 'Foot or bicycle',
      thingsToConsider: 'Fewer dining options after sunset',
    },
    faq: [
      {
        question: 'Where are the famous underwater statues located?',
        answer: 'The "Nest" underwater statues sculpted by Jason deCaires Taylor are located off the western shore of Gili Meno.',
      },
    ],
    relatedDestinationSlugs: ['gili-trawangan', 'gili-air'],
    recommendedTourSlugs: ['gili-islands-explorer'],
    seo: {
      title: 'Gili Meno Guide & Underwater Sculptures | Lombok Travel Asia',
      description: 'Discover Gili Meno, the most peaceful Gili island known for underwater statues and quiet white sand beaches.',
    },
    en: {
      title: 'Gili Meno',
      tagline: 'Tranquil island sanctuary & underwater art',
      shortDescription: 'The smallest and quietest of the Gilis, renowned for peaceful beaches and underwater sculptures.',
      description: 'Gili Meno is an oasis of calm nestled between Trawangan and Air. It offers quiet stretches of sand and pristine marine life.',
    },
    idLang: {
      title: 'Gili Meno',
      tagline: 'Suaka pulau tenang & seni bawah air',
      shortDescription: 'Pulau terkecil dan paling tenang di Kepulauan Gili dengan seni patung bawah laut.',
      description: 'Gili Meno adalah oase ketenangan di antara Trawangan dan Air dengan pantai damai dan kehidupan laut murni.',
    },
  },
  {
    id: 'tetebatu',
    slug: 'tetebatu',
    name: 'Tetebatu',
    category: 'Nature',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Nature', 'Village', 'Rice fields', 'Culture'],
    experiences: [
      'Trekking through emerald rice terraces',
      'Spotting black lutung monkeys in Monkey Forest',
      'Visiting local coffee and spice farms',
      'Tasting authentic Sasak home-cooked dishes',
    ],
    travelTips: {
      bestFor: 'Nature lovers, cultural enthusiasts, eco-travelers',
      travelStyle: 'Rural retreat & mountain foothills',
      suggestedDuration: '2 Days',
      whatToBring: 'Light raincoat, walking shoes, camera',
      gettingAround: 'Walking tours with local guide',
      thingsToConsider: 'Cooler mountain climate compared to coastal areas',
    },
    faq: [
      {
        question: 'What makes Tetebatu unique?',
        answer: 'Tetebatu offers pristine rice terraces, cool mountain air, black monkey forests, and authentic rural Sasak culture at the foot of Rinjani.',
      },
    ],
    relatedDestinationSlugs: ['sembalun', 'senaru', 'mount-rinjani'],
    recommendedTourSlugs: ['secret-waterfalls-culture'],
    seo: {
      title: 'Tetebatu Village & Rice Terraces Guide | Lombok Travel Asia',
      description: 'Explore Tetebatu in Central Lombok with lush rice fields, monkey forest, and authentic cultural village walks.',
    },
    en: {
      title: 'Tetebatu',
      tagline: 'Emerald rice terraces & rural mountain serenity',
      shortDescription: 'A serene mountain village nestled at the southern slope of Mount Rinjani with rice fields and forests.',
      description: 'Tetebatu presents the tranquil green side of Lombok. Located at the foot of Mount Rinjani, it features layered rice terraces and cool breezes.',
    },
    idLang: {
      title: 'Tetebatu',
      tagline: 'Terasering sawah zamrud & ketenangan pegunungan',
      shortDescription: 'Desa pegunungan tenang di lereng selatan Gunung Rinjani dengan pemandangan sawah dan hutan.',
      description: 'Tetebatu menampilkan sisi hijau Lombok yang tenang di kaki Gunung Rinjani dengan terasering sawah yang indah.',
    },
  },
  {
    id: 'mount-rinjani',
    slug: 'mount-rinjani',
    name: 'Mount Rinjani',
    category: 'Mountain',
    featured: true,
    heroImage: '/images/rinjani-wallpaper.jpg',
    gallery: [
      '/images/rinjani-wallpaper.jpg',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Mountain', 'Trekking', 'Nature', 'Adventure'],
    experiences: [
      'Summiting the 3,726m volcanic peak',
      'Camping at Crater Rim Sembalun',
      'Soaking in volcanic hot springs',
      'Gazing over Segara Anak crater lake',
    ],
    travelTips: {
      bestFor: 'Trekkers, adventurers, fit outdoor enthusiasts',
      travelStyle: 'High-altitude expedition',
      suggestedDuration: '3 - 4 Days',
      whatToBring: 'Trekking boots, warm windproof jacket, headlamp',
      gettingAround: 'Guided trek with registered porters',
      thingsToConsider: 'Summit temperatures can drop below 0°C',
    },
    faq: [
      {
        question: 'When is the trekking season for Mount Rinjani?',
        answer: 'Mount Rinjani National Park is generally open for trekking from April to December.',
      },
    ],
    relatedDestinationSlugs: ['sembalun', 'senaru', 'tetebatu'],
    recommendedTourSlugs: ['mount-rinjani-summit-trek'],
    seo: {
      title: 'Mount Rinjani Trekking & Crater Lake Guide | Lombok Travel Asia',
      description: 'Plan your expedition to Mount Rinjani (3,726m), Segara Anak crater lake, and volcanic hot springs.',
    },
    en: {
      title: 'Mount Rinjani',
      tagline: 'Indonesia\'s iconic 3,726m summit & crater lake',
      shortDescription: 'Indonesia\'s second-highest volcano offering epic multi-day trekking to a breathtaking summit.',
      description: 'Mount Rinjani dominates Lombok\'s landscape. Rising to 3,726 meters, it is revered as a sacred mountain by locals.',
    },
    idLang: {
      title: 'Gunung Rinjani',
      tagline: 'Puncak ikonik 3.726m & danau kawah Indonesia',
      shortDescription: 'Gunung berapi tertinggi kedua di Indonesia dengan pendakian multi-hari yang spektakuler.',
      description: 'Gunung Rinjani mendominasi lanskap Lombok setinggi 3.726 meter yang disucikan oleh masyarakat lokal.',
    },
  },
  {
    id: 'sembalun',
    slug: 'sembalun',
    name: 'Sembalun',
    category: 'Mountain',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Valley', 'Strawberry farms', 'Trekking starting point', 'Scenery'],
    experiences: [
      'Picking fresh strawberries at high altitude',
      'Sunrise hiking at Pergasingan Hill',
      'Panoramic photos over Sembalun valley grid',
    ],
    travelTips: {
      bestFor: 'Hikers, photographers, mountain lovers',
      travelStyle: 'Highland valley & trekking hub',
      suggestedDuration: '1 - 2 Days',
      whatToBring: 'Warm fleece, trekking shoes',
      gettingAround: 'Car or motorbike',
      thingsToConsider: 'Chilly nights due to high valley elevation',
    },
    faq: [
      {
        question: 'Is Sembalun suitable for day hikes?',
        answer: 'Yes! Pergasingan Hill offers a 2 to 3-hour hike with rewarding sunrise views over the valley grid.',
      },
    ],
    relatedDestinationSlugs: ['mount-rinjani', 'senaru', 'tetebatu'],
    recommendedTourSlugs: ['mount-rinjani-summit-trek'],
    seo: {
      title: 'Sembalun Valley & Pergasingan Hill Guide | Lombok Travel Asia',
      description: 'Discover Sembalun high-altitude valley, strawberry farms, Pergasingan Hill sunrise hikes, and Rinjani gateways.',
    },
    en: {
      title: 'Sembalun',
      tagline: 'High-altitude agricultural valley & trekking gateway',
      shortDescription: 'A picturesque valley surrounded by volcanic peaks, famous for strawberry fields and Pergasingan Hill.',
      description: 'Sembalun sits inside an ancient caldera at the eastern foot of Rinjani, offering crisp mountain air and patchwork fields.',
    },
    idLang: {
      title: 'Sembalun',
      tagline: 'Lembah pertanian tinggi & pintu gerbang mendaki',
      shortDescription: 'Lembah indah berlatar puncak vulkanik yang terkenal dengan kebun stroberi dan Bukit Pergasingan.',
      description: 'Sembalun berada di kawah purba timur Rinjani dengan udara segar dan pemandangan petak sawah yang menawan.',
    },
  },
  {
    id: 'senaru',
    slug: 'senaru',
    name: 'Senaru',
    category: 'Nature',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Waterfalls', 'Rainforest', 'Traditional village', 'Gateways'],
    experiences: [
      'Walking to Sendang Gile & Tiu Kelep waterfalls',
      'Exploring Senaru traditional Sasak village',
      'Enjoying rainforest canopy views',
    ],
    travelTips: {
      bestFor: 'Waterfall chasers, culture seekers',
      travelStyle: 'Rainforest & waterfall exploration',
      suggestedDuration: '1 - 2 Days',
      whatToBring: 'Water shoes, raincoat, insect repellent',
      gettingAround: 'Walking with local guide',
      thingsToConsider: 'River crossings required on trail to Tiu Kelep',
    },
    faq: [
      {
        question: 'Which waterfalls are in Senaru?',
        answer: 'Senaru is famous for Sendang Gile and Tiu Kelep, two of Lombok\'s most impressive rainforest waterfalls.',
      },
    ],
    relatedDestinationSlugs: ['mount-rinjani', 'sembalun', 'tetebatu'],
    recommendedTourSlugs: ['secret-waterfalls-culture'],
    seo: {
      title: 'Senaru Waterfalls & Village Guide | Lombok Travel Asia',
      description: 'Visit Senaru in North Lombok for Sendang Gile and Tiu Kelep waterfalls and traditional Sasak mountain heritage.',
    },
    en: {
      title: 'Senaru',
      tagline: 'Lush rainforest gateway to iconic waterfalls',
      shortDescription: 'North Lombok mountain village famous for Sendang Gile and Tiu Kelep waterfalls.',
      description: 'Senaru is the lush northern gateway to Mount Rinjani National Park, famous for towering rainforest canopy and waterfalls.',
    },
    idLang: {
      title: 'Senaru',
      tagline: 'Gerbang hutan hujan ke air terjun ikonik',
      shortDescription: 'Desa pegunungan Lombok Utara yang terkenal dengan air terjun Sendang Gile dan Tiu Kelep.',
      description: 'Senaru adalah gerbang utara rimbun ke Taman Nasional Rinjani yang kaya akan hutan hujan dan air terjun.',
    },
  },
  {
    id: 'pink-beach',
    slug: 'pink-beach',
    name: 'Pink Beach',
    category: 'Beach',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Pink sand', 'Snorkeling', 'Remote bay', 'Boat trips'],
    experiences: [
      'Admiring natural pink-tinted sand',
      'Snorkeling pristine coral gardens',
      'Boat tour around East Lombok islets',
    ],
    travelTips: {
      bestFor: 'Beach photographers, day trippers',
      travelStyle: 'Remote coastal excursion',
      suggestedDuration: 'Day Trip',
      whatToBring: 'Sun protection, camera, dry bag',
      gettingAround: 'Outrigger boat tour',
      thingsToConsider: 'Pink tint is most vivid in bright morning sunlight',
    },
    faq: [
      {
        question: 'Why is the sand pink at Pink Beach Lombok?',
        answer: 'The pink hue comes from microscopic red organism fragments (foraminifera) blended with natural white sand.',
      },
    ],
    relatedDestinationSlugs: ['sekotong', 'kuta-lombok'],
    recommendedTourSlugs: ['gili-islands-explorer'],
    seo: {
      title: 'Pink Beach Lombok Guide & Boat Tours | Lombok Travel Asia',
      description: 'Experience Pink Beach (Tangsi Beach) in East Lombok with unique rose-tinted sand and coral reefs.',
    },
    en: {
      title: 'Pink Beach',
      tagline: 'Unique rose-tinted sands & crystal waters of East Lombok',
      shortDescription: 'A rare pink-sand bay located on Lombok\'s quiet southeastern peninsula.',
      description: 'Pink Beach (Tangsi) gets its distinctive color from pulverized red coral mixing with white sand.',
    },
    idLang: {
      title: 'Pink Beach',
      tagline: 'Pasir berwarna merah muda unik di Lombok Timur',
      shortDescription: 'Teluk pasir merah muda langka yang terletak di semenanjung tenggara Lombok.',
      description: 'Pink Beach (Tangsi) memiliki warna khas dari karang merah yang hancur bercampur pasir putih.',
    },
  },
  {
    id: 'tanjung-aan',
    slug: 'tanjung-aan',
    name: 'Tanjung Aan',
    category: 'Beach',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Pepper sand', 'Merese Hill', 'Calm swimming bay', 'Sunsets'],
    experiences: [
      'Walking on unique pepper-grain sand',
      'Climbing Merese Hill for panoramic views',
      'Swimming in gentle turquoise water',
    ],
    travelTips: {
      bestFor: 'Swimmers, couples, sunset watchers',
      travelStyle: 'Scenic coastal relaxation',
      suggestedDuration: 'Half Day / Day Trip',
      whatToBring: 'Beach towel, hat, camera',
      gettingAround: 'Scooter or driver from Kuta',
      thingsToConsider: 'Gentle waves make it great for swimming',
    },
    faq: [
      {
        question: 'Where is Merese Hill located?',
        answer: 'Merese Hill is situated right at the edge of Tanjung Aan Beach, offering panoramic sunset views.',
      },
    ],
    relatedDestinationSlugs: ['kuta-lombok', 'mawun-beach', 'selong-belanak'],
    recommendedTourSlugs: ['gili-islands-explorer'],
    seo: {
      title: 'Tanjung Aan Beach & Merese Hill Guide | Lombok Travel Asia',
      description: 'Visit Tanjung Aan Beach and Merese Hill in South Lombok for pepper sand, calm turquoise waters, and views.',
    },
    en: {
      title: 'Tanjung Aan',
      tagline: 'Twin crescent bays & pepper-grained sands',
      shortDescription: 'Famous for unique pepper-like sand grains and stunning panoramic views from Bukit Merese.',
      description: 'Tanjung Aan features two sweeping crescent bays with calm turquoise waters.',
    },
    idLang: {
      title: 'Tanjung Aan',
      tagline: 'Teluk kembar berpasir merica',
      shortDescription: 'Terkenal dengan butiran pasir menyerupai merica dan pemandangan dari Bukit Merese.',
      description: 'Tanjung Aan memiliki dua teluk berbentuk bulan sabit dengan air biru jernih yang tenang.',
    },
  },
  {
    id: 'selong-belanak',
    slug: 'selong-belanak',
    name: 'Selong Belanak',
    category: 'Beach',
    heroImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Beginner surf', 'Flat sand bay', 'Buffalos on beach', 'Sunset'],
    experiences: [
      'Taking beginner surf lessons on soft beach breaks',
      'Watching water buffalo herds walk along the shore',
      'Relaxing at beachfront bamboo warungs',
    ],
    travelTips: {
      bestFor: 'Beginner surfers, families, relaxed beach days',
      travelStyle: 'Friendly beach & surf school',
      suggestedDuration: 'Half Day',
      whatToBring: 'Rashguard, sunscreen, swimwear',
      gettingAround: 'Scooter or car',
      thingsToConsider: 'Sandy bottom makes it forgiving for surf learners',
    },
    faq: [
      {
        question: 'Is Selong Belanak good for beginner surfers?',
        answer: 'Yes! It is widely considered the best beach in Lombok to learn surfing due to soft sandy bottom and gentle beach breaks.',
      },
    ],
    relatedDestinationSlugs: ['mawun-beach', 'kuta-lombok', 'tanjung-aan'],
    recommendedTourSlugs: ['gili-islands-explorer'],
    seo: {
      title: 'Selong Belanak Beach & Surf Guide | Lombok Travel Asia',
      description: 'Learn surfing at Selong Belanak Beach in South Lombok with gentle beach breaks and white sands.',
    },
    en: {
      title: 'Selong Belanak',
      tagline: 'Gentle beach breaks & smooth white sands',
      shortDescription: 'Lombok\'s premier beginner surf destination with a wide curved bay of fine sand.',
      description: 'Selong Belanak is famous for its wide horseshoe bay lined with soft white sand.',
    },
    idLang: {
      title: 'Selong Belanak',
      tagline: 'Ombak santai & pasir putih halus',
      shortDescription: 'Destinasi belajar selancar terbaik di Lombok dengan teluk pasir putih yang luas.',
      description: 'Selong Belanak terkenal dengan teluk pasir putih berbentuk tapal kuda yang ramah bagi peselancar pemula.',
    },
  },
  {
    id: 'mawun-beach',
    slug: 'mawun-beach',
    name: 'Mawun Beach',
    category: 'Beach',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Crescent bay', 'Turquoise water', 'Headland hills', 'Quiet'],
    experiences: [
      'Swimming in deep turquoise bay waters',
      'Relaxing under shade trees',
      'Climbing headland hills for ocean views',
    ],
    travelTips: {
      bestFor: 'Swimmers, nature photographers',
      travelStyle: 'Quiet natural bay',
      suggestedDuration: '2 - 3 Hours',
      whatToBring: 'Towel, shade umbrella, water',
      gettingAround: 'Scooter or car',
      thingsToConsider: 'Waves can get stronger in the middle of the bay',
    },
    faq: [
      {
        question: 'Where is Mawun Beach located?',
        answer: 'Mawun Beach is located tucked between Kuta Lombok and Selong Belanak along the southern coast.',
      },
    ],
    relatedDestinationSlugs: ['selong-belanak', 'kuta-lombok', 'tanjung-aan'],
    recommendedTourSlugs: ['gili-islands-explorer'],
    seo: {
      title: 'Mawun Beach Guide & Southern Cove | Lombok Travel Asia',
      description: 'Discover Mawun Beach, a secluded horseshoe-shaped bay in South Lombok with hills and turquoise sea.',
    },
    en: {
      title: 'Mawun Beach',
      tagline: 'Secluded horseshoe bay flanked by dramatic headlands',
      shortDescription: 'A secluded crescent cove of deep turquoise water framed by green headland hills.',
      description: 'Mawun Beach is one of South Lombok\'s most photogenic coastal coves.',
    },
    idLang: {
      title: 'Pantai Mawun',
      tagline: 'Teluk tersembunyi diapit bukit tebing dramatis',
      shortDescription: 'Teluk bulan sabit tersembunyi dengan air biru kehijauan yang dikelilingi bukit.',
      description: 'Pantai Mawun adalah salah satu teluk pantai paling fotogenik di Lombok Selatan.',
    },
  },
  {
    id: 'sekotong',
    slug: 'sekotong',
    name: 'Sekotong',
    category: 'Adventure',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Secret Gilis', 'Coral reefs', 'Quiet peninsula', 'Diving'],
    experiences: [
      'Island hopping the Secret Gilis (Gili Nanggu, Sudak, Kedis)',
      'Snorkeling untouched coral gardens',
      'Unwinding in remote coastal eco-resorts',
    ],
    travelTips: {
      bestFor: 'Off-the-beaten-path travelers, divers',
      travelStyle: 'Remote archipelago exploration',
      suggestedDuration: '1 - 2 Days',
      whatToBring: 'Reef shoes, dry bag, camera',
      gettingAround: 'Outrigger boat for islands',
      thingsToConsider: 'Calm waters year-round due to sheltered bay geography',
    },
    faq: [
      {
        question: 'What are the Secret Gilis of Sekotong?',
        answer: 'The Secret Gilis include Gili Nanggu, Gili Sudak, and Gili Kedis — tiny uninhabited islets in Southwest Lombok.',
      },
    ],
    relatedDestinationSlugs: ['gili-trawangan', 'pink-beach'],
    recommendedTourSlugs: ['gili-islands-explorer'],
    seo: {
      title: 'Sekotong & Secret Gilis Guide | Lombok Travel Asia',
      description: 'Explore Sekotong Peninsula and the Secret Gilis (Gili Nanggu, Kedis) in Southwest Lombok for snorkeling.',
    },
    en: {
      title: 'Sekotong',
      tagline: 'Untouched island archipelagos & secret marine gardens',
      shortDescription: 'Southwest Lombok\'s quiet peninsula, gateway to the uninhabited Secret Gilis.',
      description: 'Sekotong remains one of Lombok\'s best-kept secrets.',
    },
    idLang: {
      title: 'Sekotong',
      tagline: 'Kepulauan tak terjamah & taman laut rahasia',
      shortDescription: 'Semenanjung tenang di Lombok Barat Daya, gerbang menuju Gili Rahasia.',
      description: 'Sekotong tetap menjadi salah satu rahasia terbaik Lombok dengan gili-gili perawan.',
    },
  },
  {
    id: 'sade-village',
    slug: 'sade-village',
    name: 'Sade Village',
    category: 'Culture',
    heroImage: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Culture', 'Sasak architecture', 'Hand weaving', 'Heritage'],
    experiences: [
      'Learning about traditional Sasak bamboo & thatch architecture',
      'Watching handloom Songket weaving by local women',
      'Guided cultural tour of indigenous village customs',
    ],
    travelTips: {
      bestFor: 'Cultural travelers, history enthusiasts',
      travelStyle: 'Indigenous heritage visit',
      suggestedDuration: '1 - 2 Hours',
      whatToBring: 'Small tip for local village guide, modest attire',
      gettingAround: 'Walking tour with village elder or guide',
      thingsToConsider: 'Respect local customs and ask before photographing villagers',
    },
    faq: [
      {
        question: 'Where is Sade Village located?',
        answer: 'Sade Village is located in Central-South Lombok, right along the main road to Kuta Lombok.',
      },
    ],
    relatedDestinationSlugs: ['sukarara', 'banyumulek', 'tetebatu'],
    recommendedTourSlugs: ['secret-waterfalls-culture'],
    seo: {
      title: 'Sade Village Sasak Cultural Guide | Lombok Travel Asia',
      description: 'Visit Sade Village in Lombok to experience traditional Sasak thatched houses, weaving, and cultural heritage.',
    },
    en: {
      title: 'Sade Village',
      tagline: 'Living museum of indigenous Sasak culture & handloom weaving',
      shortDescription: 'A traditional Sasak hamlet preserving centuries-old architecture and cultural customs.',
      description: 'Sade Village offers a glimpse into Lombok\'s indigenous Sasak heritage.',
    },
    idLang: {
      title: 'Desa Sade',
      tagline: 'Museum hidup budaya Sasak & tenun tangan tradisional',
      shortDescription: 'Dusun tradisional Sasak yang melestarikan arsitektur dan adat kuno.',
      description: 'Desa Sade menawarkan kilasan warisan suku Sasak asli Lombok yang masih terjaga.',
    },
  },
  {
    id: 'sukarara',
    slug: 'sukarara',
    name: 'Sukarara',
    category: 'Culture',
    heroImage: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Songket weaving', 'Textiles', 'Craftsmanship', 'Heritage'],
    experiences: [
      'Trying traditional handloom weaving yourself',
      'Wearing Sasak traditional wedding attire for photos',
      'Purchasing authentic Songket & Ikat textiles directly from artisans',
    ],
    travelTips: {
      bestFor: 'Craft lovers, textile collectors',
      travelStyle: 'Artisan workshop visit',
      suggestedDuration: '1 Hour',
      whatToBring: 'Camera, cash for handmade textiles',
      gettingAround: 'Car or driver',
      thingsToConsider: 'Each Songket piece can take weeks to months to weave by hand',
    },
    faq: [
      {
        question: 'What is Sukarara famous for?',
        answer: 'Sukarara is Lombok\'s premier handloom weaving village, famous for intricate gold-thread Songket fabrics.',
      },
    ],
    relatedDestinationSlugs: ['sade-village', 'banyumulek', 'tetebatu'],
    recommendedTourSlugs: ['secret-waterfalls-culture'],
    seo: {
      title: 'Sukarara Weaving Village Guide | Lombok Travel Asia',
      description: 'Discover Sukarara weaving village in Lombok for authentic Songket handloom textiles and artisan crafts.',
    },
    en: {
      title: 'Sukarara',
      tagline: 'The historic heart of Lombok\'s handloom Songket weaving',
      shortDescription: 'Lombok\'s famous artisan village dedicated to handwoven Songket textiles.',
      description: 'Sukarara is celebrated for its centuries-old tradition of handloom weaving.',
    },
    idLang: {
      title: 'Sukarara',
      tagline: 'Pusat bersejarah kerajinan tenun Songket tangan Lombok',
      shortDescription: 'Desa pengrajin terkenal Lombok yang mendedikasikan diri pada kain Songket tenun tangan.',
      description: 'Sukarara terkenal dengan tradisi menenun Songket yang diwariskan secara turun-temurun.',
    },
  },
  {
    id: 'banyumulek',
    slug: 'banyumulek',
    name: 'Banyumulek',
    category: 'Culture',
    heroImage: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=1200&auto=format&fit=crop',
    ],
    highlights: ['Clay pottery', 'Artisan village', 'Craftsmanship', 'Local art'],
    experiences: [
      'Trying your hand at pottery wheel molding',
      'Observing traditional clay firing techniques',
      'Browsing handcrafted pottery jars, vases, and home decor',
    ],
    travelTips: {
      bestFor: 'Art lovers, families, souvenir hunters',
      travelStyle: 'Pottery workshop & cultural village',
      suggestedDuration: '1 Hour',
      whatToBring: 'Clothes you don\'t mind getting a little clay on',
      gettingAround: 'Car or driver',
      thingsToConsider: 'Pottery items can be carefully packed for flights',
    },
    faq: [
      {
        question: 'What type of pottery is made in Banyumulek?',
        answer: 'Banyumulek produces traditional clay earthenware pottery including water storage jars, decorative vases, and clay cookware.',
      },
    ],
    relatedDestinationSlugs: ['sade-village', 'sukarara', 'tetebatu'],
    recommendedTourSlugs: ['secret-waterfalls-culture'],
    seo: {
      title: 'Banyumulek Pottery Village Guide | Lombok Travel Asia',
      description: 'Explore Banyumulek pottery village in West Lombok for traditional clay craftsmanship and hands-on workshops.',
    },
    en: {
      title: 'Banyumulek',
      tagline: 'Traditional Sasak clay pottery village',
      shortDescription: 'West Lombok\'s artisan village renowned for handcrafted clay pottery and earthenware.',
      description: 'Banyumulek is Lombok\'s pottery hub where local artisans turn native clay into functional art.',
    },
    idLang: {
      title: 'Banyumulek',
      tagline: 'Desa kerajinan gerabah tanah liat tradisional Sasak',
      shortDescription: 'Desa pengrajin Lombok Barat yang terkenal dengan gerabah tanah liat buatan tangan.',
      description: 'Banyumulek adalah pusat gerabah Lombok di mana para pengrajin mengubah tanah liat menjadi karya seni.',
    },
  },
];
