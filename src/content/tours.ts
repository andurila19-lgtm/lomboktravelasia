import type { Locale } from '@/lib/i18n/config';

export interface TourFAQ {
  question: string;
  answer: string;
}

export interface TourItineraryDay {
  day: number;
  title: string;
  description: string;
  duration: string;
  elevation?: string;
}

export interface Tour {
  slug: string;
  category: string;
  duration: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  rating?: number;
  reviewCount?: number;
  price: { amount: number; currency: string; placeholder: boolean };
  location: string;
  maxAltitude?: string;
  groupSize: string;
  meals: string;
  accommodation: string;
  availability: string;
  images: string[];
  en: {
    title: string;
    subtitle: string;
    description: string;
    highlights: { icon: string; title: string; description: string }[];
    itinerary: TourItineraryDay[];
    inclusions: string[];
    exclusions: string[];
    whatToBring: string;
    meetingPoint: string;
    faq: TourFAQ[];
  };
  id: {
    title: string;
    subtitle: string;
    description: string;
    highlights: { icon: string; title: string; description: string }[];
    itinerary: TourItineraryDay[];
    inclusions: string[];
    exclusions: string[];
    whatToBring: string;
    meetingPoint: string;
    faq: TourFAQ[];
  };
}

export function getTourContent(tour: Tour, locale: Locale) {
  return { ...tour, ...tour[locale] };
}

export const tours: Tour[] = [
  {
    slug: 'mount-rinjani-summit-trek',
    category: 'Trekking',
    duration: '3 Days, 2 Nights',
    difficulty: 'challenging',
    price: { amount: 0, currency: 'IDR', placeholder: true },
    location: 'Senaru & Sembalun, Lombok',
    maxAltitude: '3,726m',
    groupSize: '2-10 Pax',
    meals: 'Included',
    accommodation: 'Camping',
    availability: 'Apr - Dec',
    images: [
      '/images/rinjani-wallpaper.jpg',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    ],
    en: {
      title: '3-Day Mount Rinjani Summit Trek',
      subtitle: 'Conquer Indonesia\'s second highest volcano',
      description: 'Trek to the summit of Mount Rinjani, Indonesia\'s second-highest volcano (3,726m). Witness sunrise over the island from the peak and camp beside crater lake Segara Anak.',
      highlights: [
        { icon: 'sunny', title: 'Summit Sunrise', description: 'Watch the dawn break over the island from the 3,726m peak.' },
        { icon: 'water', title: 'Segara Anak Lake', description: 'Camp beside the stunning turquoise crater lake.' },
        { icon: 'hot_tub', title: 'Natural Hot Springs', description: 'Soak tired muscles in the therapeutic volcanic hot springs.' },
      ],
      itinerary: [
        { day: 1, title: 'Sembalun to Crater Rim', description: 'Trek through grassland to Sembalun Crater Rim (2,639m).', duration: '7-8 hours' },
        { day: 2, title: 'Summit & Hot Springs', description: 'Early morning summit push (3,726m) for sunrise, then descend to Segara Anak Lake.', duration: '9-10 hours' },
        { day: 3, title: 'Lake to Senaru Village', description: 'Climb to Senaru Rim and descend through rainforest to Senaru village.', duration: '6-7 hours' },
      ],
      inclusions: ['Professional guide', 'Local porters', 'Camping gear', '3 meals a day', 'National Park entry'],
      exclusions: ['Flights', 'Insurance', 'Personal tips'],
      whatToBring: 'Sturdy trekking boots, warm fleece jacket, headlamp, sun protection.',
      meetingPoint: 'Senaru or Sembalun Trekking Center',
      faq: [
        { question: 'How difficult is the trek?', answer: 'It is rated challenging. Good physical fitness is required.' },
      ],
    },
    id: {
      title: 'Trekking Puncak Gunung Rinjani 3 Hari',
      subtitle: 'Taklukkan gunung berapi tertinggi kedua Indonesia',
      description: 'Mulailah perjalanan ke puncak Gunung Rinjani (3.726m). Saksikan matahari terbit memukau dan berkemah di tepi danau kawah Segara Anak.',
      highlights: [
        { icon: 'sunny', title: 'Matahari Terbit Puncak', description: 'Saksikan fajar dari puncak 3.726m.' },
        { icon: 'water', title: 'Danau Segara Anak', description: 'Berkemah di danau kawah biru kehijauan.' },
      ],
      itinerary: [
        { day: 1, title: 'Sembalun ke Bibir Kawah', description: 'Trekking ke Bibir Kawah Sembalun (2.639m).', duration: '7-8 jam' },
        { day: 2, title: 'Puncak & Air Panas', description: 'Mendaki puncak 3.726m saat fajar, lalu ke danau Segara Anak.', duration: '9-10 jam' },
        { day: 3, title: 'Danau ke Senaru', description: 'Turun melewati hutan hujan ke desa Senaru.', duration: '6-7 jam' },
      ],
      inclusions: ['Pemandu profesional', 'Porter lokal', 'Peralatan kemah', 'Makan 3x sehari', 'Tiket TNGR'],
      exclusions: ['Penerbangan', 'Asuransi', 'Tips pribadi'],
      whatToBring: 'Sepatu trekking, jaket hangat, senter kepala.',
      meetingPoint: 'Pos Senaru atau Sembalun',
      faq: [
        { question: 'Seberapa sulit trekking Rinjani?', answer: 'Dikategorikan menantang. Dibutuhkan kebugaran fisik yang baik.' },
      ],
    },
  },
  {
    slug: 'gili-islands-explorer',
    category: 'Island Hopping',
    duration: 'Full Day',
    difficulty: 'easy',
    price: { amount: 0, currency: 'IDR', placeholder: true },
    location: 'Gili Trawangan, Air & Meno',
    groupSize: '2-12 Pax',
    meals: 'Lunch Included',
    accommodation: 'N/A',
    availability: 'Year-round',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    ],
    en: {
      title: 'Gili Islands Explorer',
      subtitle: 'Snorkel with turtles on pristine island beaches',
      description: 'Explore Gili Trawangan, Gili Meno, and Gili Air on a full-day island hopping trip. Swim alongside sea turtles and relax on white sand beaches.',
      highlights: [
        { icon: 'scuba_diving', title: 'Turtle Snorkeling', description: 'Swim alongside green sea turtles in crystal-clear waters.' },
        { icon: 'sailing', title: 'Island Hopping', description: 'Visit Gili Trawangan, Meno, and Air by private boat.' },
      ],
      itinerary: [
        { day: 1, title: 'Full Day Gili Trip', description: 'Pickup, boat transfers between Gilis, turtle snorkeling, beach lunch, and coral garden exploration.', duration: '8 hours' },
      ],
      inclusions: ['Hotel transfers', 'Private boat', 'Snorkel gear', 'Lunch', 'Guide'],
      exclusions: ['Personal expenses', 'Tips'],
      whatToBring: 'Swimwear, sunscreen, towel, camera.',
      meetingPoint: 'Bangsal Harbor or Hotel Pickup',
      faq: [
        { question: 'Can I see sea turtles?', answer: 'Yes! Turtle sightings at Gili Trawangan and Meno are very common.' },
      ],
    },
    id: {
      title: 'Jelajah Kepulauan Gili',
      subtitle: 'Snorkeling bersama penyu di pantai pulau yang murni',
      description: 'Temukan keajaiban Gili Trawangan, Gili Meno, dan Gili Air dalam paket island hopping seharian ini.',
      highlights: [
        { icon: 'scuba_diving', title: 'Snorkeling Penyu', description: 'Berenang bersama penyu hijau di air jernih.' },
      ],
      itinerary: [
        { day: 1, title: 'Seharian Kepulauan Gili', description: 'Jemput hotel, perahu jelajah 3 gili, snorkeling penyu, dan makan siang.', duration: '8 jam' },
      ],
      inclusions: ['Jemput hotel', 'Perahu', 'Alat snorkel', 'Makan siang', 'Pemandu'],
      exclusions: ['Pengeluaran pribadi', 'Tips'],
      whatToBring: 'Baju renang, tabir surya, handuk.',
      meetingPoint: 'Pelabuhan Bangsal atau Jemput Hotel',
      faq: [
        { question: 'Apakah bisa melihat penyu?', answer: 'Ya! Penyu sangat sering dijumpai di perairan Gili Trawangan & Meno.' },
      ],
    },
  },
  {
    slug: 'secret-waterfalls-culture',
    category: 'Culture & Nature',
    duration: 'Full Day',
    difficulty: 'moderate',
    price: { amount: 0, currency: 'IDR', placeholder: true },
    location: 'Senaru & Tetebatu, Lombok',
    groupSize: '2-8 Pax',
    meals: 'Lunch Included',
    accommodation: 'N/A',
    availability: 'Year-round',
    images: [
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    ],
    en: {
      title: 'Secret Waterfalls & Culture',
      subtitle: 'Hidden gems of North Lombok\'s jungle and heritage',
      description: 'Venture into the untouched heart of North Lombok to discover Tiu Kelep and Sendang Gile waterfalls, rice fields, and traditional mountain villages.',
      highlights: [
        { icon: 'waterfall', title: 'Tiu Kelep Waterfall', description: 'A 42m majestic waterfall hidden in rainforest jungle.' },
      ],
      itinerary: [
        { day: 1, title: 'North Lombok Discovery', description: 'Visit Tiu Kelep waterfall, Sasak village tour, and local lunch.', duration: '8 hours' },
      ],
      inclusions: ['Hotel pickup', 'Site entry fees', 'Local guide', 'Lunch'],
      exclusions: ['Personal tips'],
      whatToBring: 'Walking shoes, swimwear, camera.',
      meetingPoint: 'Hotel pickup',
      faq: [
        { question: 'Can I swim at the waterfalls?', answer: 'Yes! Swimming is encouraged at Sendang Gile and Tiu Kelep.' },
      ],
    },
    id: {
      title: 'Air Terjun Tersembunyi & Budaya',
      subtitle: 'Permata tersembunyi hutan dan warisan Lombok Utara',
      description: 'Jelajahi air terjun Tiu Kelep, Sendang Gile, dan desa Sasak tradisional di Lombok Utara.',
      highlights: [
        { icon: 'waterfall', title: 'Air Terjun Tiu Kelep', description: 'Air terjun megah 42 meter di tengah hutan.' },
      ],
      itinerary: [
        { day: 1, title: 'Jelajah Lombok Utara', description: 'Kunjungan air terjun, tur desa Sasak, dan makan siang.', duration: '8 jam' },
      ],
      inclusions: ['Jemput hotel', 'Tiket lokasi', 'Pemandu', 'Makan siang'],
      exclusions: ['Tips'],
      whatToBring: 'Sepatu nyaman, baju renang.',
      meetingPoint: 'Jemput hotel',
      faq: [
        { question: 'Bisa berenang di air terjun?', answer: 'Ya! Berenang sangat dianjurkan.' },
      ],
    },
  },
  {
    slug: 'south-lombok-surf-beach-safari',
    category: 'Beach & Surf',
    duration: 'Full Day',
    difficulty: 'easy',
    price: { amount: 0, currency: 'IDR', placeholder: true },
    location: 'Kuta, Tanjung Aan, Selong Belanak & Mandalika',
    groupSize: '2-8 Pax',
    meals: 'Lunch Included',
    accommodation: 'N/A',
    availability: 'Year-round',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1200&auto=format&fit=crop',
    ],
    en: {
      title: 'South Lombok Surf & Beach Safari',
      subtitle: 'Explore Tanjung Aan, Kuta, Selong Belanak & Mandalika',
      description: 'Experience South Lombok\'s finest coastlines! From the pepper sands of Tanjung Aan and Merese Hill to the surfing haven of Selong Belanak.',
      highlights: [
        { icon: 'beach', title: 'Tanjung Aan & Merese Hill', description: 'Panoramas over twin crescent turquoise bays.' },
        { icon: 'surfing', title: 'Selong Belanak', description: 'Smooth white sand beach break ideal for surfing.' },
      ],
      itinerary: [
        { day: 1, title: 'South Coast Tour', description: 'Visit Kuta Lombok, Mandalika, Tanjung Aan, Merese Hill sunset, and Selong Belanak.', duration: '9 hours' },
      ],
      inclusions: ['Private vehicle transfer', 'Local guide', 'Lunch', 'Entry fees'],
      exclusions: ['Personal expenses'],
      whatToBring: 'Sunscreen, swimwear, sunglasses.',
      meetingPoint: 'Hotel pickup',
      faq: [
        { question: 'Is this tour beginner friendly?', answer: 'Yes, it is a relaxed coastal discovery tour.' },
      ],
    },
    id: {
      title: 'Safari Pantai & Selancar Lombok Selatan',
      subtitle: 'Jelajahi Tanjung Aan, Kuta, Selong Belanak & Mandalika',
      description: 'Nikmati garis pantai terbaik Lombok Selatan dari pasir merica Tanjung Aan hingga ombak Selong Belanak.',
      highlights: [
        { icon: 'beach', title: 'Tanjung Aan & Bukit Merese', description: 'Panorama teluk biru dari atas bukit.' },
      ],
      itinerary: [
        { day: 1, title: 'Tur Pantai Selatan', description: 'Kunjungan Kuta, Mandalika, Tanjung Aan, Bukit Merese, dan Selong Belanak.', duration: '9 jam' },
      ],
      inclusions: ['Mobil pribadi', 'Pemandu', 'Makan siang', 'Tiket lokasi'],
      exclusions: ['Pengeluaran pribadi'],
      whatToBring: 'Tabir surya, baju renang.',
      meetingPoint: 'Jemput hotel',
      faq: [
        { question: 'Apakah tur ini ramah pemula?', answer: 'Ya, tur ini santai dan cocok untuk semua umur.' },
      ],
    },
  },
  {
    slug: 'pink-beach-secret-gilis',
    category: 'Island & Beach',
    duration: 'Full Day',
    difficulty: 'easy',
    price: { amount: 0, currency: 'IDR', placeholder: true },
    location: 'Pink Beach & Sekotong, Lombok',
    groupSize: '2-10 Pax',
    meals: 'Lunch Included',
    accommodation: 'N/A',
    availability: 'Year-round',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    ],
    en: {
      title: 'Pink Beach & Secret Gilis Snorkeling',
      subtitle: 'Rose-tinted sands & pristine Secret Gilis reefs',
      description: 'Cruise to the iconic Pink Beach (Tangsi) in East Lombok and snorkel the peaceful Secret Gilis of Sekotong (Gili Petelu, Gili Kedis).',
      highlights: [
        { icon: 'beach', title: 'Pink Beach Tangsi', description: 'Unique natural rose-tinted sands.' },
        { icon: 'scuba_diving', title: 'Secret Gilis', description: 'Uninhabited islets with untouched coral gardens.' },
      ],
      itinerary: [
        { day: 1, title: 'East Lombok Cruise', description: 'Boat trip to Pink Beach, snorkeling at Gili Petelu and Gili Kedis, fresh seafood lunch.', duration: '9 hours' },
      ],
      inclusions: ['Private boat charter', 'Snorkeling gear', 'Lunch', 'Guide'],
      exclusions: ['Personal tips'],
      whatToBring: 'Swimwear, sun protection, camera.',
      meetingPoint: 'Hotel pickup',
      faq: [
        { question: 'Why is the beach pink?', answer: 'From tiny red coral fragments blended with white sand.' },
      ],
    },
    id: {
      title: 'Snorkeling Pink Beach & Secret Gilis',
      subtitle: 'Pasir merah muda & terumbu karang Gili Rahasia',
      description: 'Jelajahi Pink Beach (Tangsi) di Lombok Timur dan snorkeling di pulau-pulau Gili Rahasia Sekotong.',
      highlights: [
        { icon: 'beach', title: 'Pink Beach Tangsi', description: 'Pasir berwarna kemerahan yang unik.' },
      ],
      itinerary: [
        { day: 1, title: 'Pelayaran Lombok Timur', description: 'Perahu ke Pink Beach, snorkeling Gili Petelu & Gili Kedis, makan siang.', duration: '9 jam' },
      ],
      inclusions: ['Perahu pribadi', 'Alat snorkel', 'Makan siang', 'Pemandu'],
      exclusions: ['Tips'],
      whatToBring: 'Baju renang, tabir surya.',
      meetingPoint: 'Jemput hotel',
      faq: [
        { question: 'Mengapa pasirnya berwarna merah muda?', answer: 'Berasal dari serpihan karang merah yang bercampur dengan pasir putih.' },
      ],
    },
  },
  {
    slug: 'sasak-cultural-heritage-tour',
    category: 'Culture',
    duration: 'Half Day / Full Day',
    difficulty: 'easy',
    price: { amount: 0, currency: 'IDR', placeholder: true },
    location: 'Sade, Sukarara & Banyumulek',
    groupSize: '2-10 Pax',
    meals: 'Lunch Included',
    accommodation: 'N/A',
    availability: 'Year-round',
    images: [
      'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=1200&auto=format&fit=crop',
    ],
    en: {
      title: 'Sasak Cultural & Heritage Tour',
      subtitle: 'Traditional Sade village, Songket weaving & clay pottery',
      description: 'Immense yourself in indigenous Sasak culture. Visit traditional Sade Village, witness handloom Songket weaving in Sukarara, and craft clay pottery in Banyumulek.',
      highlights: [
        { icon: 'village', title: 'Sade Village', description: 'Indigenous thatched-roof Sasak hamlet.' },
        { icon: 'weaving', title: 'Sukarara Handloom Weaving', description: 'Centuries-old Songket textile traditions.' },
        { icon: 'pottery', title: 'Banyumulek Clay Pottery', description: 'Hands-on clay molding with local artisans.' },
      ],
      itinerary: [
        { day: 1, title: 'Sasak Cultural Journey', description: 'Visit Banyumulek pottery village, Sukarara weaving center, Sade traditional village, and local Sasak lunch.', duration: '6 hours' },
      ],
      inclusions: ['Hotel pickup', 'Local village guides', 'Lunch', 'Entry fees'],
      exclusions: ['Personal souvenirs'],
      whatToBring: 'Modest comfortable clothing, camera.',
      meetingPoint: 'Hotel pickup',
      faq: [
        { question: 'Is photography allowed in Sade Village?', answer: 'Yes, villagers welcome photos. Asking before photographing individuals is polite.' },
      ],
    },
    id: {
      title: 'Tur Budaya & Warisan Sasak',
      subtitle: 'Desa tradisional Sade, tenun Songket & gerabah tanah liat',
      description: 'Rasakan kebudayaan suku Sasak asli dengan mengunjungi Desa Sade, pusat tenun Sukarara, dan gerabah Banyumulek.',
      highlights: [
        { icon: 'village', title: 'Desa Sade', description: 'Dusun Sasak dengan atap ilalang tradisional.' },
        { icon: 'weaving', title: 'Tenun Sukarara', description: 'Tradisi kain Songket tenun tangan.' },
      ],
      itinerary: [
        { day: 1, title: 'Perjalanan Budaya Sasak', description: 'Kunjungan ke gerabah Banyumulek, tenun Sukarara, Desa Sade, dan makan siang.', duration: '6 jam' },
      ],
      inclusions: ['Jemput hotel', 'Pemandu lokal', 'Makan siang', 'Tiket lokasi'],
      exclusions: ['Suvenir'],
      whatToBring: 'Pakaian sopan, kamera.',
      meetingPoint: 'Jemput hotel',
      faq: [
        { question: 'Apakah boleh berfoto di Desa Sade?', answer: 'Boleh, warga menyambut ramah wisatawan.' },
      ],
    },
  },
];
