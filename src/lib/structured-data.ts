import type { Locale } from '@/lib/i18n/config';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lomboktravelasia.com';

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateOrganizationSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Lombok Travel Asia',
    description:
      locale === 'id'
        ? 'Agen perjalanan lokal di Lombok yang menawarkan tur petualangan, jelajah pulau, dan pengalaman budaya otentik.'
        : 'Local travel agency in Lombok offering adventure tours, island hopping, and authentic cultural experiences.',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Indonesian'],
    },
    areaServed: {
      '@type': 'Place',
      name: 'Lombok, Indonesia',
    },
    inLanguage: locale,
  };
}

export function generateTouristTripSchema(tour: {
  title: string;
  description: string;
  images: string[];
  duration: string;
  location: string;
}, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title,
    description: tour.description,
    touristType: 'Adventure',
    image: tour.images,
    itinerary: {
      '@type': 'ItemList',
      description: tour.duration,
    },
    contentLocation: {
      '@type': 'Place',
      name: tour.location,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'West Nusa Tenggara',
        addressCountry: 'ID',
      },
    },
    inLanguage: locale,
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  slug: string;
}, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lombok Travel Asia',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/${locale}/travel-guide/${article.slug}`,
    inLanguage: locale,
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lombok Travel Asia',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/en/tours?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateLocalBusinessSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Lombok Travel Asia',
    description:
      locale === 'id'
        ? 'Agen perjalanan lokal Lombok untuk tur petualangan dan jelajah pulau.'
        : 'Local Lombok travel agency for adventure tours and island hopping.',
    url: SITE_URL,
    image: `${SITE_URL}/images/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Senggigi',
      addressRegion: 'West Nusa Tenggara',
      addressCountry: 'ID',
      postalCode: '83355',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -8.4905,
      longitude: 116.0447,
    },
    areaServed: 'Lombok, Indonesia',
    inLanguage: locale,
  };
}
