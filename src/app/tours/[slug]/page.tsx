'use client';

import React, { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { tours, getTourContent } from '@/content/tours';
import { useLanguage } from '@/components/LanguageContext';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { formatCurrency } from '@/lib/utils';
import { generateTouristTripSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/structured-data';
import {
  Star,
  Clock,
  MapPin,
  Users,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  MessageCircle,
  Calendar,
  Mountain,
  Utensils,
  Home,
  HelpCircle,
  ArrowLeft,
  Share2,
} from 'lucide-react';

export default function TourDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const tour = tours.find((t) => t.slug === slug);
  if (!tour) {
    notFound();
  }

  const { locale, dict } = useLanguage();
  const content = getTourContent(tour, locale);
  const [selectedImage, setSelectedImage] = useState(tour.images[0]);
  const [openDay, setOpenDay] = useState<number | null>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const waUrl = getWhatsAppUrl({
    locale,
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
    locale
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://lomboktravelasia.com' },
    { name: 'Tours', url: 'https://lomboktravelasia.com/tours' },
    { name: content.title, url: `https://lomboktravelasia.com/tours/${tour.slug}` },
  ]);

  const faqSchema = generateFAQSchema(content.faq);

  return (
    <div className="pt-28 pb-24 bg-[#fcf9f8] min-h-screen text-[#1b1c1c]">
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

      {/* Top Breadcrumb & Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 hover:text-[#012d1d] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{dict.common.back} {dict.nav.tours}</span>
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
            <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <span>{tour.rating}</span>
              <span className="text-zinc-400">({tour.reviewCount} reviews)</span>
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#012d1d]">
            {content.title}
          </h1>
          <p className="text-lg text-zinc-600 max-w-3xl font-light">{content.subtitle}</p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
          {/* Main Image */}
          <div className="lg:col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 shadow-lg">
            <Image
              src={selectedImage || tour.images[0]}
              alt={content.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Thumbnails list */}
          <div className="flex lg:flex-col gap-4">
            {tour.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`relative flex-1 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                  selectedImage === img
                    ? 'border-[#012d1d] scale-[0.98]'
                    : 'border-transparent opacity-80 hover:opacity-100'
                }`}
              >
                <Image src={img} alt={`Preview ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Description */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-200/80 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#012d1d]">
                {dict.tours.theExperience}
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base font-light">
                {content.description}
              </p>
            </div>

            {/* Highlights */}
            {content.highlights && content.highlights.length > 0 && (
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#012d1d]">
                  {dict.tours.highlights}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-white border border-zinc-200/80 shadow-sm flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#1b4332] text-[#86af99] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#012d1d]">{h.title}</h4>
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
                {dict.tours.dailyItinerary}
              </h2>
              <div className="space-y-3">
                {content.itinerary.map((day) => {
                  const isOpen = openDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className="rounded-2xl bg-white border border-zinc-200 overflow-hidden transition-shadow shadow-sm"
                    >
                      <button
                        onClick={() => setOpenDay(isOpen ? null : day.day)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-[#012d1d] text-[#86af99] font-serif font-bold text-base flex items-center justify-center shrink-0">
                            {day.day}
                          </span>
                          <div>
                            <h3 className="font-bold text-base text-[#012d1d]">{day.title}</h3>
                            <span className="text-xs text-zinc-500 font-medium">
                              Duration: {day.duration} {day.elevation && `• Elevation: ${day.elevation}`}
                            </span>
                          </div>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-zinc-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-zinc-400" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 pt-2 border-t border-zinc-100 text-sm text-zinc-600 leading-relaxed">
                          {day.description}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-4">
                <h3 className="font-bold text-emerald-900 text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>{dict.tours.whatsIncluded}</span>
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
                  <span>{dict.tours.notIncluded}</span>
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

            {/* Practical Info: What to Bring & Meeting Point */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#012d1d]">
                {dict.tours.preparationMeetingPoint}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-sm text-[#012d1d] mb-1">
                    {dict.tours.whatToBring}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    {content.whatToBring}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#012d1d] mb-1">
                    {dict.tours.meetingPoint}
                  </h4>
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
                  {dict.tours.faq}
                </h2>
                <div className="space-y-3">
                  {content.faq.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl bg-white border border-zinc-200 overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-[#012d1d] hover:bg-zinc-50"
                        >
                          <span>{item.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-zinc-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-zinc-400" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 border-t border-zinc-100 text-xs text-zinc-600 leading-relaxed">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Pricing & Quick Facts */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-28 bg-[#012d1d] text-white p-8 rounded-3xl shadow-2xl border border-[#1b4332] space-y-6">
              {/* Price Banner */}
              <div className="border-b border-white/10 pb-6">
                <span className="block text-xs uppercase tracking-wider text-[#86af99] font-medium mb-1">
                  {dict.tours.startingFrom}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#86af99]">
                    {formatCurrency(tour.price.amount, tour.price.currency)}
                  </span>
                  <span className="text-xs text-zinc-300">{dict.tours.perPerson}</span>
                </div>
              </div>

              {/* Quick Facts List */}
              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2 text-zinc-400">
                    <Clock className="w-4 h-4 text-[#86af99]" />
                    {dict.tours.duration}
                  </span>
                  <span className="font-bold text-white">{tour.duration}</span>
                </div>

                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2 text-zinc-400">
                    <Users className="w-4 h-4 text-[#86af99]" />
                    {dict.tours.groupSize}
                  </span>
                  <span className="font-bold text-white">{tour.groupSize}</span>
                </div>

                {tour.maxAltitude && (
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="flex items-center gap-2 text-zinc-400">
                      <Mountain className="w-4 h-4 text-[#86af99]" />
                      {dict.tours.maxAltitude}
                    </span>
                    <span className="font-bold text-white">{tour.maxAltitude}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2 text-zinc-400">
                    <Utensils className="w-4 h-4 text-[#86af99]" />
                    {dict.tours.meals}
                  </span>
                  <span className="font-bold text-white">{tour.meals}</span>
                </div>

                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2 text-zinc-400">
                    <Home className="w-4 h-4 text-[#86af99]" />
                    {dict.tours.accommodation}
                  </span>
                  <span className="font-bold text-white">{tour.accommodation}</span>
                </div>

                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2 text-zinc-400">
                    <Calendar className="w-4 h-4 text-[#86af99]" />
                    {dict.tours.availability}
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
                  <span>{dict.cta.bookViaWhatsapp}</span>
                </a>
              </div>

              {/* Help box */}
              <div className="p-4 rounded-2xl bg-[#1b4332]/60 border border-[#86af99]/20 text-center space-y-1">
                <p className="text-xs font-bold text-[#86af99]">{dict.tours.needHelpDeciding}</p>
                <p className="text-[11px] text-zinc-300">{dict.tours.chatWithExpert}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
