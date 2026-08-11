'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tour, getTourContent } from '@/content/tours';
import { useLanguage } from './LanguageContext';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { formatCurrency } from '@/lib/utils';
import { Star, Clock, MapPin, Users, ArrowUpRight, MessageCircle } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const { locale, dict } = useLanguage();
  const content = getTourContent(tour, locale);

  const waUrl = getWhatsAppUrl({
    locale,
    type: 'tour',
    tourName: content.title,
  });

  const getDifficultyBadge = (difficulty: Tour['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-[#0d3829]/90 text-[#86af99] border-[#86af99]/30';
      case 'moderate':
        return 'bg-[#062319]/90 text-[#c5a880] border-[#c5a880]/30';
      case 'challenging':
        return 'bg-[#2a0e0e]/90 text-[#e8a0a0] border-[#e8a0a0]/30';
      default:
        return 'bg-black/80 text-zinc-300 border-white/20';
    }
  };

  const difficultyLabels: Record<Tour['difficulty'], string> = {
    easy: locale === 'id' ? 'Mudah' : 'Easy',
    moderate: locale === 'id' ? 'Sedang' : 'Moderate',
    challenging: locale === 'id' ? 'Menantang' : 'Challenging',
  };

  return (
    <div className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#c5a880]/20 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(6,35,25,0.12)] transition-all duration-500 hover:-translate-y-1 text-[#1a221f]">
      {/* Image Container */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#062319]">
        <Image
          src={tour.images[0] || 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop'}
          alt={content.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Floating Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span
            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md border ${getDifficultyBadge(
              tour.difficulty
            )}`}
          >
            {difficultyLabels[tour.difficulty]}
          </span>

          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-[#c5a880]">
            <span>{locale === 'id' ? 'Pengalaman Lokal' : 'Local Experience'}</span>
          </div>
        </div>

        {/* Location overlay */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-zinc-200 font-medium z-10">
          <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
          <span>{tour.location}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        {/* Title */}
        <Link href={`/tours/${tour.slug}`}>
          <h3 className="font-serif text-xl font-bold text-[#062319] leading-snug group-hover:text-[#c5a880] transition-colors line-clamp-2">
            {content.title}
          </h3>
        </Link>

        {/* Subtitle */}
        <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed font-light">
          {content.subtitle}
        </p>

        {/* Meta Stats Bar */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-zinc-100 text-xs text-zinc-600">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#062319]" />
            <span className="font-medium">{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-[#062319]" />
            <span className="font-medium">{tour.groupSize}</span>
          </div>
        </div>

        {/* Footer Price & CTAs */}
        <div className="pt-4 border-t border-zinc-100 flex items-center justify-between mt-auto">
          <div>
            <span className="block text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
              {dict.tours.startingFrom}
            </span>
            {tour.price.placeholder ? (
              <span className="text-sm font-bold text-[#062319] block mt-0.5">
                {dict.tours.contactForPricing}
              </span>
            ) : (
              <>
                <span className="text-lg font-bold text-[#062319]">
                  {formatCurrency(tour.price.amount, tour.price.currency)}
                </span>
                <span className="text-[11px] text-zinc-400 font-light"> {dict.tours.perPerson}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-full bg-[#062319] text-[#c5a880] hover:bg-[#c5a880] hover:text-[#062319] transition-all shadow-md flex items-center gap-1.5 text-xs font-bold"
              title={locale === 'id' ? 'Tanya di WhatsApp' : 'Ask on WhatsApp'}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">{locale === 'id' ? 'Tanya' : 'Ask'}</span>
            </a>
            <Link
              href={`/tours/${tour.slug}`}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-[#faf7f2] text-[#062319] hover:bg-[#062319] hover:text-[#c5a880] text-xs font-bold transition-all border border-[#c5a880]/30"
            >
              <span>{dict.cta.viewTour}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
