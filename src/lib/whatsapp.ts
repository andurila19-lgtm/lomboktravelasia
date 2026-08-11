import type { Locale } from './i18n/config';

const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
const WHATSAPP_NUMBER = rawNumber.replace(/[^0-9]/g, '');

const templates = {
  en: {
    general: 'Hello Lombok Travel Asia, I would like to inquire about your tours.',
    tour: (tourName: string) =>
      `Hello Lombok Travel Asia, I am interested in the ${tourName} tour. Could you share more details?`,
    customTrip: 'Hello Lombok Travel Asia, I would like to plan a custom trip to Lombok.',
  },
  id: {
    general: 'Halo Lombok Travel Asia, saya ingin bertanya tentang tur Anda.',
    tour: (tourName: string) =>
      `Halo Lombok Travel Asia, saya tertarik dengan tur ${tourName}. Bisakah Anda memberikan informasi lebih lanjut?`,
    customTrip: 'Halo Lombok Travel Asia, saya ingin merencanakan perjalanan kustom ke Lombok.',
  },
} as const;

export function getWhatsAppUrl(options?: {
  message?: string;
  tourName?: string;
  locale?: Locale;
  type?: 'general' | 'tour' | 'customTrip';
}): string {
  const locale = options?.locale || 'en';
  let message: string;

  if (options?.message) {
    message = options.message;
  } else if (options?.type === 'tour' && options.tourName) {
    message = templates[locale].tour(options.tourName);
  } else if (options?.type === 'customTrip') {
    message = templates[locale].customTrip;
  } else {
    message = templates[locale].general;
  }

  const encodedMsg = encodeURIComponent(message);
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`
    : `https://api.whatsapp.com/send?text=${encodedMsg}`;
}
