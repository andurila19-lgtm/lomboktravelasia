import type { Locale } from '@/lib/i18n/config';

export interface TravelGuide {
  slug: string;
  category: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  en: { title: string; excerpt: string };
  id: { title: string; excerpt: string };
}

export function getGuideContent(guide: TravelGuide, locale: Locale) {
  return { ...guide, ...guide[locale] };
}

export const travelGuides: TravelGuide[] = [
  {
    slug: 'best-time-to-visit-lombok',
    category: 'Planning',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnelFqLEai8bFvKCKI0MuMdHdoi4rYf5NcOp5jTap6Wm5tB8ytmOi4szcZNTM1lw-8XzVxjq3cj0e6JxOEiE3gcsuOMwBi527zRqhlAPNOXkHlaYgFTDBNIoagW4gHZXHmJNibqfFrT7ncjwajw1HlycCeK3QKjtYHvtliPfpdTSgmaeKn-HFTvVGnLoevezK5W9ggXlcXSVLektsu0704t88Qcuzh2P2s30QUUUP5rNKCk1kHZcno',
    author: 'Lombok Travel Asia',
    publishedAt: '2024-06-15',
    updatedAt: '2024-11-01',
    readTime: 8,
    en: {
      title: 'Best Time to Visit Lombok: A Complete Seasonal Guide',
      excerpt: 'Discover the ideal months to visit Lombok based on weather, crowds, and activities. From the dry trekking season to the quiet shoulder months, plan your perfect trip.',
    },
    id: {
      title: 'Waktu Terbaik Mengunjungi Lombok: Panduan Musim Lengkap',
      excerpt: 'Temukan bulan-bulan ideal untuk mengunjungi Lombok berdasarkan cuaca, keramaian, dan aktivitas. Dari musim trekking kering hingga bulan-bulan sepi, rencanakan perjalanan sempurna Anda.',
    },
  },
  {
    slug: 'mount-rinjani-trekking-guide',
    category: 'Trekking',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjLepe5ca9UKZhZnWFnDhuEvAipTAi65B1X8jNGcpTfbyASPcgf5Cy_h7Tp3o4bZy35kH3Kak1QOwe_8VRYeilDjSTxDoyLVeUwcwh8jfsoNXBWY7ftMGIJ5tFS3EmYho_r35-iOBrlHzfghtAFVtpLs6B5oCS85llRBo_LxbfWWdzxCIqT-R9E21oV_DTX90_EkKQ1xBdJM-QkgAmvSv4B2juot6GTLiCPCoOGGRvoTY6GbIvjfOi',
    author: 'Lombok Travel Asia',
    publishedAt: '2024-05-20',
    updatedAt: '2024-10-15',
    readTime: 12,
    en: {
      title: 'Mount Rinjani Trekking Guide: Everything You Need to Know',
      excerpt: 'A comprehensive guide to trekking Mount Rinjani — routes, difficulty levels, packing lists, costs, safety tips, and what to expect on Indonesia\'s second-highest volcano.',
    },
    id: {
      title: 'Panduan Trekking Gunung Rinjani: Semua yang Perlu Anda Ketahui',
      excerpt: 'Panduan lengkap trekking Gunung Rinjani — rute, tingkat kesulitan, daftar perlengkapan, biaya, tips keselamatan, dan apa yang diharapkan di gunung berapi tertinggi kedua Indonesia.',
    },
  },
  {
    slug: 'gili-islands-complete-guide',
    category: 'Islands',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM9Icj71wugSdynj9pKuiwXtBM8JLFe3GhaM2Lq5OVf60HaWz62NUvHCCj_vUlAMQNTR32Iwzy7zVg8-cQ-jKwOdD-z7FpKncNfTT1Ydxm0NOI5gaNCH9fmWe7TVmHGlsmHzIon_G9Fn3zVFer_a5LMYi3vHGJVoSZ3hGsQMjbCXXjc7iv7h4W0jke2OlkKg9y7-yzxNgeb_FGHQWwDJq5jXFXBwn7T4ZGpBcW1idVfGFGuCeLPT_2',
    author: 'Lombok Travel Asia',
    publishedAt: '2024-07-10',
    updatedAt: '2024-12-01',
    readTime: 10,
    en: {
      title: 'Gili Islands Guide: Trawangan vs Air vs Meno — Which Is Right for You?',
      excerpt: 'Compare the three Gili Islands to find your perfect match. From party vibes to honeymoon seclusion, transport options, snorkeling spots, and budget tips.',
    },
    id: {
      title: 'Panduan Kepulauan Gili: Trawangan vs Air vs Meno — Mana yang Cocok untuk Anda?',
      excerpt: 'Bandingkan tiga Kepulauan Gili untuk menemukan yang paling cocok. Dari suasana pesta hingga ketenangan bulan madu, pilihan transportasi, spot snorkeling, dan tips budget.',
    },
  },
];
