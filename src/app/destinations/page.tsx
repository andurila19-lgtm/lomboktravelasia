'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageContext';
import DestinationCard from '@/components/DestinationCard';
import { destinations, DestinationCategory } from '@/content/destinations';
import { ArrowRight, MapPin, Filter } from 'lucide-react';

const categories: Array<{ id: 'All' | DestinationCategory; label: string }> = [
  { id: 'All', label: 'All' },
  { id: 'Beach', label: 'Beach' },
  { id: 'Island', label: 'Island' },
  { id: 'Mountain', label: 'Mountain' },
  { id: 'Culture', label: 'Culture' },
  { id: 'Nature', label: 'Nature' },
  { id: 'Adventure', label: 'Adventure' },
];

export default function DestinationsIndexPage() {
  const { locale } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'All' | DestinationCategory>('All');

  // Client-side category filtering
  const filteredDestinations = useMemo(() => {
    if (selectedCategory === 'All') return destinations;
    return destinations.filter((dest) => dest.category === selectedCategory);
  }, [selectedCategory]);

  // Featured destinations subset for large hero spotlight
  const featuredDestinations = useMemo(() => {
    return destinations.filter((d) => d.featured);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f8] text-[#1b1c1c]">
      {/* HERO SECTION */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 rounded-b-[2rem] overflow-hidden bg-[#012d1d]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
            alt="Cinematic Lombok Coastline Landscape"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-3.5">
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#c5a880]">
            Curated Lombok Places
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-2xl">
            Explore Lombok
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-base text-zinc-200 leading-relaxed font-light drop-shadow-md">
            From turquoise islands and white-sand beaches to mountain villages and authentic Sasak culture, discover the places that make Lombok unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto w-full">
            <a
              href="#destinations-grid"
              className="w-full sm:w-auto h-12 sm:h-13 px-7 bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-xs uppercase tracking-widest rounded-full shadow-lg flex items-center justify-center gap-2 transition-colors border border-[#86af99]/30"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/tours"
              className="w-full sm:w-auto h-12 sm:h-13 px-7 bg-white/90 backdrop-blur-md text-[#012d1d] font-semibold text-xs uppercase tracking-widest rounded-full border border-zinc-300 flex items-center justify-center hover:bg-white transition-colors"
            >
              <span>Find a Tour</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS EDITORIAL SPOTLIGHT */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-left max-w-2xl mb-8 sm:mb-12 space-y-1.5">
          <span className="text-[10px] sm:text-xs font-bold text-[#012d1d] uppercase tracking-[0.2em]">
            Editorial Selection
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#012d1d]">
            Featured Destinations
          </h2>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {featuredDestinations.map((dest, idx) => (
            <div
              key={dest.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
            >
              {/* Image Column */}
              <div
                className={`relative h-[280px] sm:h-[380px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-zinc-200/80 w-full ${
                  idx % 2 === 1 ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'
                }`}
              >
                <Image
                  src={dest.heroImage}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#012d1d] font-bold text-[10px] sm:text-xs uppercase tracking-widest shadow-sm">
                    {dest.category}
                  </span>
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`flex flex-col gap-3.5 sm:gap-4 text-left ${
                  idx % 2 === 1 ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'
                }`}
              >
                <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#012d1d]" />
                  <span>{dest.en.tagline}</span>
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012d1d]">
                  {dest.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {dest.en.description}
                </p>

                {/* Highlights */}
                <div className="pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-2">
                    Highlights:
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {dest.highlights.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-lg bg-[#faf7f2] border border-zinc-200 text-[11px] sm:text-xs font-medium text-zinc-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended Travel Style */}
                <div className="text-xs text-zinc-500 font-medium">
                  <span className="font-bold text-zinc-700">Style: </span>
                  <span>{dest.travelTips.travelStyle}</span>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#012d1d] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1b4332] transition-colors shadow-md"
                  >
                    <span>Explore {dest.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATION DISCOVERY FILTER & GRID */}
      <section id="destinations-grid" className="py-12 sm:py-16 bg-[#f6f3f2] border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
            <div className="text-left space-y-1.5">
              <span className="text-[10px] sm:text-xs font-bold text-[#012d1d] uppercase tracking-[0.2em] block">
                Destination Discovery
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#012d1d]">
                All Lombok Destinations
              </h2>
            </div>

            {/* Interactive Category Filter Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-zinc-500 mr-1 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#012d1d] text-[#c5a880] shadow-sm'
                      : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Destination Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {filteredDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="py-16 text-center text-zinc-500 font-light text-sm">
              No destinations found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
