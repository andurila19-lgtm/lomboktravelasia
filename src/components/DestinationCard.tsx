'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { Destination, getDestinationContent } from '@/content/destinations';
import { ArrowRight, MapPin } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
  className?: string;
  aspectRatio?: string;
}

export default function DestinationCard({
  destination,
  className = '',
  aspectRatio = 'aspect-4/3',
}: DestinationCardProps) {
  const { locale } = useLanguage();
  const content = getDestinationContent(destination, locale);

  return (
    <div
      className={`group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-zinc-200/90 shadow-md hover:shadow-xl transition-all duration-300 w-full ${className}`}
    >
      {/* Image Container */}
      <div className={`relative w-full ${aspectRatio} min-h-[220px] sm:min-h-[240px] overflow-hidden bg-zinc-100`}>
        <Image
          src={destination.heroImage}
          alt={content.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#012d1d] font-bold text-[10px] uppercase tracking-widest shadow-sm">
            {destination.category}
          </span>
        </div>

        {/* Tagline on image bottom */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-center gap-1.5 text-white/95 text-xs font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
          <span className="truncate">{content.tagline}</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3 text-left">
        <div>
          <Link href={`/destinations/${destination.slug}`}>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#012d1d] group-hover:text-[#c5a880] transition-colors leading-snug">
              {content.title}
            </h3>
          </Link>
          <p className="text-xs text-zinc-600 font-normal line-clamp-2 mt-1.5 leading-relaxed">
            {content.shortDescription}
          </p>
        </div>

        {/* CTA Link */}
        <div className="pt-2.5 border-t border-zinc-100 flex items-center justify-between">
          <Link
            href={`/destinations/${destination.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#012d1d] hover:text-[#1b4332] uppercase tracking-wider transition-colors"
          >
            <span>Explore Destination</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
