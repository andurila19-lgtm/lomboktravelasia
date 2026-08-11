import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { destinations, getDestinationContent } from '@/content/destinations';
import { tours } from '@/content/tours';
import DestinationCard from '@/components/DestinationCard';
import TourCard from '@/components/TourCard';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import {
  ChevronRight,
  MapPin,
  Compass,
  MessageCircle,
  ArrowRight,
  HelpCircle,
  Info,
  CheckCircle,
  Sun,
  ShieldAlert,
} from 'lucide-react';

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return {
      title: 'Destination Not Found | Lombok Travel Asia',
    };
  }

  return {
    title: destination.seo.title,
    description: destination.seo.description,
    openGraph: {
      title: destination.seo.title,
      description: destination.seo.description,
      images: [{ url: destination.heroImage }],
      url: `https://lomboktravelasia.com/destinations/${destination.slug}`,
    },
    alternates: {
      canonical: `https://lomboktravelasia.com/destinations/${destination.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export default async function DestinationDetailPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  const content = getDestinationContent(destination, 'en');

  // Related tours matching destination tour slugs
  const matchedTours = tours.filter(
    (t) =>
      destination.recommendedTourSlugs.includes(t.slug) ||
      t.location.toLowerCase().includes(destination.name.toLowerCase())
  );
  const displayTours = matchedTours.length > 0 ? matchedTours : tours.slice(0, 3);

  // Related destinations
  const relatedDestinations = destinations.filter((d) =>
    destination.relatedDestinationSlugs.includes(d.slug)
  );
  const displayRelated =
    relatedDestinations.length > 0
      ? relatedDestinations
      : destinations.filter((d) => d.slug !== destination.slug).slice(0, 3);

  const waUrl = getWhatsAppUrl({ locale: 'en', type: 'general' });

  // Structured Data Schema for TouristDestination
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destination.name,
    description: destination.seo.description,
    image: destination.heroImage,
    touristType: destination.category,
    includesAttraction: destination.highlights.map((h) => ({
      '@type': 'TouristAttraction',
      name: h,
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://lomboktravelasia.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Destinations',
        item: 'https://lomboktravelasia.com/destinations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: destination.name,
        item: `https://lomboktravelasia.com/destinations/${destination.slug}`,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f8] text-[#1b1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* BREADCRUMB NAVIGATION */}
      <div className="bg-[#f6f3f2] border-b border-zinc-200 pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-5 sm:px-16 flex items-center gap-2 text-xs font-semibold text-zinc-600">
          <Link href="/" className="hover:text-[#012d1d] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <Link href="/destinations" className="hover:text-[#012d1d] transition-colors">
            Destinations
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-[#012d1d] font-bold">{destination.name}</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[65vh] sm:min-h-[75vh] flex flex-col justify-end pb-16 pt-16 rounded-b-[2rem] overflow-hidden bg-[#012d1d]">
        <div className="absolute inset-0 z-0">
          <Image
            src={destination.heroImage}
            alt={destination.name}
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-16 text-white space-y-4 text-left">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#1b4332] text-[#86af99] text-[10px] font-bold uppercase tracking-[0.2em]">
            {destination.category}
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            {destination.name}
          </h1>

          <p className="text-base sm:text-xl text-zinc-200 leading-relaxed font-light max-w-2xl">
            {content.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 max-w-md">
            <Link
              href="/tours"
              className="w-full sm:w-auto h-13 px-8 bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-xs uppercase tracking-widest rounded-full shadow-lg flex items-center justify-center gap-2 transition-colors border border-[#86af99]/30"
            >
              <span>Explore Tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-13 px-8 bg-white/90 backdrop-blur-md text-[#012d1d] font-semibold text-xs uppercase tracking-widest rounded-full border border-zinc-300 flex items-center justify-center gap-2 hover:bg-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
              <span>Plan a Trip Here</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION & HIGHLIGHTS */}
      <section className="py-16 max-w-5xl mx-auto px-5 sm:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Main Description */}
          <div className="md:col-span-7 space-y-4 text-left">
            <span className="text-xs font-bold text-[#012d1d] uppercase tracking-[0.2em] block">
              Overview
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#012d1d]">
              About {destination.name}
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              {content.description}
            </p>
          </div>

          {/* Highlights Box */}
          <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-md space-y-4 text-left">
            <h3 className="font-serif text-lg font-bold text-[#012d1d] flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#012d1d]" />
              <span>Destination Highlights</span>
            </h3>
            <div className="space-y-2.5 pt-1">
              {destination.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-xs font-semibold text-zinc-800">
                  <CheckCircle className="w-4 h-4 text-[#012d1d] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THINGS TO EXPERIENCE */}
      <section className="py-16 bg-[#f6f3f2] border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-5 sm:px-16 text-left space-y-8">
          <div>
            <span className="text-xs font-bold text-[#012d1d] uppercase tracking-[0.2em] block mb-1">
              Curated Activities
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#012d1d]">
              Things to Experience in {destination.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {destination.experiences.map((exp, idx) => (
              <div
                key={exp}
                className="bg-white p-5 rounded-xl border border-zinc-200/80 shadow-xs flex items-start gap-4"
              >
                <span className="w-7 h-7 rounded-full bg-[#012d1d] text-[#c5a880] text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-zinc-800 leading-snug">
                  {exp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDED TOURS */}
      <section className="py-16 max-w-7xl mx-auto px-5 sm:px-16 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="text-left space-y-2">
            <span className="text-xs font-bold text-[#012d1d] uppercase tracking-[0.2em] block">
              Guided Journeys
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#012d1d]">
              Recommended Tours for {destination.name}
            </h2>
          </div>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#012d1d] hover:opacity-80 transition-opacity"
          >
            <span>Explore All Tours</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </section>

      {/* IMMERSIVE GALLERY */}
      {destination.gallery.length > 0 && (
        <section className="py-16 bg-[#f6f3f2] border-t border-zinc-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-16 text-left space-y-8">
            <div>
              <span className="text-xs font-bold text-[#012d1d] uppercase tracking-[0.2em] block mb-1">
                Visual Impressions
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#012d1d]">
                Destination Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.gallery.map((imgUrl, i) => (
                <div
                  key={imgUrl}
                  className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-zinc-200/80 group"
                >
                  <Image
                    src={imgUrl}
                    alt={`${destination.name} Gallery Image ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TRAVEL TIPS: BEFORE YOU VISIT */}
      <section className="py-16 max-w-5xl mx-auto px-5 sm:px-16 w-full text-left space-y-8">
        <div>
          <span className="text-xs font-bold text-[#012d1d] uppercase tracking-[0.2em] block mb-1">
            Practical Information
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#012d1d]">
            Before You Visit {destination.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs space-y-2">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
              Best For
            </span>
            <p className="text-xs font-semibold text-zinc-900 leading-relaxed">
              {destination.travelTips.bestFor}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs space-y-2">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
              Travel Style
            </span>
            <p className="text-xs font-semibold text-zinc-900 leading-relaxed">
              {destination.travelTips.travelStyle}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs space-y-2">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
              Suggested Duration
            </span>
            <p className="text-xs font-semibold text-zinc-900 leading-relaxed">
              {destination.travelTips.suggestedDuration}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs space-y-2">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
              What to Bring
            </span>
            <p className="text-xs font-semibold text-zinc-900 leading-relaxed">
              {destination.travelTips.whatToBring}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs space-y-2">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
              Getting Around
            </span>
            <p className="text-xs font-semibold text-zinc-900 leading-relaxed">
              {destination.travelTips.gettingAround}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs space-y-2">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
              Things to Consider
            </span>
            <p className="text-xs font-semibold text-zinc-900 leading-relaxed">
              {destination.travelTips.thingsToConsider}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {destination.faq.length > 0 && (
        <section className="py-16 bg-[#f6f3f2] border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-5 sm:px-16 text-left space-y-8">
            <div>
              <span className="text-xs font-bold text-[#012d1d] uppercase tracking-[0.2em] block mb-1">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#012d1d]">
                Destination FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {destination.faq.map((item) => (
                <div
                  key={item.question}
                  className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-2"
                >
                  <h3 className="font-serif text-base font-bold text-[#012d1d] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#012d1d] shrink-0" />
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal pl-6">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED DESTINATIONS: YOU MAY ALSO LIKE */}
      <section className="py-16 max-w-7xl mx-auto px-5 sm:px-16 w-full border-t border-zinc-200">
        <div className="text-left space-y-2 mb-10">
          <span className="text-xs font-bold text-[#012d1d] uppercase tracking-[0.2em] block">
            More Destinations
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#012d1d]">
            You May Also Like
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayRelated.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* STICKY / BOTTOM WHATSAPP CTA BANNER */}
      <section className="py-16 bg-[#012d1d] text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-16 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            Plan Your Journey to {destination.name}
          </h2>
          <p className="text-zinc-300 max-w-xl mx-auto text-xs sm:text-base font-light">
            Connect with our local Lombok experts on WhatsApp for personalized itineraries, transfers, and custom trip planning.
          </p>
          <div className="pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all shadow-xl"
            >
              <MessageCircle className="w-4 h-4 fill-current text-black" />
              <span>Plan a Trip Here</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
