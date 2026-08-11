import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { tours, getTourContent } from '@/content/tours';
import TourCard from '@/components/TourCard';
import TourGallery from '@/components/TourGallery';
import TourItineraryAccordion from '@/components/TourItineraryAccordion';
import TourFaqAccordion from '@/components/TourFaqAccordion';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { formatCurrency } from '@/lib/utils';
import { generateTouristTripSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/structured-data';
import {
  Clock,
  Users,
  CheckCircle2,
  XCircle,
  MessageCircle,
  Calendar,
  Mountain,
  Utensils,
  Home,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

interface TourPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return {
      title: 'Tour Not Found | Lombok Travel Asia',
    };
  }

  const content = getTourContent(tour, 'en');

  return {
    title: `${content.title} | Lombok Travel Asia`,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      images: [{ url: tour.images[0] }],
      url: `https://lomboktravelasia.com/tours/${tour.slug}`,
    },
    alternates: {
      canonical: `https://lomboktravelasia.com/tours/${tour.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default async function TourDetailPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  const content = getTourContent(tour, 'en');
  const relatedTours = tours.filter((t) => t.slug !== slug).slice(0, 3);
  const waUrl = getWhatsAppUrl({
    locale: 'en',
    type: 'tour',
    tourName: content.title,
  });

  const tripSchema = generateTouristTripSchema(
    {
      title: content.title,
      description: content.description,
      images: tour.images,
      duration: tour.duration,
      location: tour.location,
    },
    'en'
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://lomboktravelasia.com' },
    { name: 'Tours', url: 'https://lomboktravelasia.com/tours' },
    { name: content.title, url: `https://lomboktravelasia.com/tours/${tour.slug}` },
  ]);

  const faqSchema = generateFAQSchema(content.faq);

  return (
    <div className="pt-28 pb-32 bg-[#fcf9f8] min-h-screen text-[#1b1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Breadcrumb & Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 hover:text-[#012d1d] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Tours</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title Section */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#1b4332] text-[#86af99]">
              {tour.category}
            </span>
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-zinc-200 text-zinc-700">
              {tour.difficulty}
            </span>
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#faf7f2] border border-[#c5a880]/40 text-[#012d1d]">
              Local Experience
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#012d1d]">
            {content.title}
          </h1>
          <p className="text-lg text-zinc-600 max-w-3xl font-light">{content.subtitle}</p>
        </div>

        {/* Gallery Component */}
        <TourGallery images={tour.images} title={content.title} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Description */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-200/80 shadow-xs space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#012d1d]">
                The Experience
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base font-light">
                {content.description}
              </p>
            </div>

            {/* Highlights */}
            {content.highlights && content.highlights.length > 0 && (
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#012d1d]">
                  Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-white border border-zinc-200/80 shadow-xs flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#1b4332] text-[#86af99] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-[#012d1d]">{h.title}</h3>
                        <p className="text-xs text-zinc-500 mt-1">{h.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary Accordion */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#012d1d]">
                Daily Itinerary
              </h2>
              <TourItineraryAccordion itinerary={content.itinerary} />
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-4">
                <h3 className="font-bold text-emerald-900 text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>What&apos;s Included</span>
                </h3>
                <ul className="space-y-2 text-xs text-emerald-950 font-medium">
                  {content.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-4">
                <h3 className="font-bold text-rose-900 text-base flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span>Not Included</span>
                </h3>
                <ul className="space-y-2 text-xs text-rose-950 font-medium">
                  {content.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Practical Info */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#012d1d]">
                Preparation & Meeting Point
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-sm text-[#012d1d] mb-1">
                    What to Bring
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    {content.whatToBring}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#012d1d] mb-1">
                    Meeting Point
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    {content.meetingPoint}
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            {content.faq && content.faq.length > 0 && (
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#012d1d]">
                  Frequently Asked Questions
                </h2>
                <TourFaqAccordion faq={content.faq} />
              </div>
            )}
          </div>

          {/* Right Column: Sticky Pricing & Quick Facts */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-28 bg-[#012d1d] text-white p-8 rounded-3xl shadow-2xl border border-[#1b4332] space-y-6">
              {/* Header Headline */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#86af99] block mb-1">
                  Trip Planning
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Interested in this experience?
                </h3>
              </div>

              {/* Price Banner */}
              <div className="border-y border-white/10 py-5">
                <span className="block text-xs uppercase tracking-wider text-[#86af99] font-medium mb-1">
                  Pricing
                </span>
                {tour.price.placeholder ? (
                  <span className="text-xl font-bold text-[#86af99] block">
                    Contact for pricing
                  </span>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#86af99]">
                      {formatCurrency(tour.price.amount, tour.price.currency)}
                    </span>
                    <span className="text-xs text-zinc-300"> /person</span>
                  </div>
                )}
              </div>

              {/* Quick Facts List */}
              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2 text-zinc-400">
                    <Clock className="w-4 h-4 text-[#86af99]" />
                    Duration
                  </span>
                  <span className="font-bold text-white">{tour.duration}</span>
                </div>

                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2 text-zinc-400">
                    <Users className="w-4 h-4 text-[#86af99]" />
                    Group Size
                  </span>
                  <span className="font-bold text-white">{tour.groupSize}</span>
                </div>

                {tour.maxAltitude && (
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="flex items-center gap-2 text-zinc-400">
                      <Mountain className="w-4 h-4 text-[#86af99]" />
                      Max Altitude
                    </span>
                    <span className="font-bold text-white">{tour.maxAltitude}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2 text-zinc-400">
                    <Utensils className="w-4 h-4 text-[#86af99]" />
                    Meals
                  </span>
                  <span className="font-bold text-white">{tour.meals}</span>
                </div>

                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2 text-zinc-400">
                    <Home className="w-4 h-4 text-[#86af99]" />
                    Accommodation
                  </span>
                  <span className="font-bold text-white">{tour.accommodation}</span>
                </div>

                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2 text-zinc-400">
                    <Calendar className="w-4 h-4 text-[#86af99]" />
                    Availability
                  </span>
                  <span className="font-bold text-white">{tour.availability}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 space-y-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full bg-[#25D366] text-black font-bold text-sm hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>

              {/* Help box */}
              <div className="p-4 rounded-2xl bg-[#1b4332]/60 border border-[#86af99]/20 text-center space-y-1">
                <p className="text-xs font-bold text-[#86af99]">Need help deciding?</p>
                <p className="text-[11px] text-zinc-300">Chat with our local travel team.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED TOURS SECTION */}
        {relatedTours.length > 0 && (
          <section className="mt-20 border-t border-zinc-200/80 pt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-[#012d1d] uppercase tracking-[0.2em] block mb-1">
                  Explore More
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#012d1d]">
                  Related Tours
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
              {relatedTours.map((relTour) => (
                <TourCard key={relTour.slug} tour={relTour} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* STICKY BOTTOM MOBILE BOOKING BAR */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#012d1d]/95 backdrop-blur-xl border-t border-[#86af99]/30 p-3.5 flex items-center justify-between shadow-2xl">
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold text-[#86af99]">Pricing</span>
          <span className="text-sm font-bold text-white">
            {tour.price.placeholder
              ? 'Contact for pricing'
              : formatCurrency(tour.price.amount, tour.price.currency)}
          </span>
        </div>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-full bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
        >
          <MessageCircle className="w-4 h-4 fill-current text-black" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}
