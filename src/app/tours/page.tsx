'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageContext';
import TourCard from '@/components/TourCard';
import { tours } from '@/content/tours';
import { Search, Filter, Compass, Sparkles } from 'lucide-react';

function ToursContent() {
  const { locale, dict } = useLanguage();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'All';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const categories = ['All', 'Trekking', 'Beach', 'Island', 'Culture', 'Snorkeling'];
  const difficulties = ['All', 'Easy', 'Moderate', 'Challenging'];

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      // Flexible Category check
      if (selectedCategory !== 'All') {
        const catLower = selectedCategory.toLowerCase();
        const tourCatLower = tour.category.toLowerCase();
        
        let matchCat = false;
        if (catLower === 'snorkeling') {
          const enText = JSON.stringify(tour.en).toLowerCase();
          const idText = JSON.stringify(tour.id).toLowerCase();
          matchCat = tourCatLower.includes('snorkel') || enText.includes('snorkel') || idText.includes('snorkel');
        } else if (catLower === 'beach') {
          matchCat = tourCatLower.includes('beach') || tourCatLower.includes('surf');
        } else if (catLower === 'island') {
          matchCat = tourCatLower.includes('island') || tourCatLower.includes('gili');
        } else {
          matchCat = tourCatLower.includes(catLower);
        }

        if (!matchCat) return false;
      }

      // Difficulty check
      if (
        selectedDifficulty !== 'All' &&
        tour.difficulty.toLowerCase() !== selectedDifficulty.toLowerCase()
      ) {
        return false;
      }

      // Search query check
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = tour.en.title.toLowerCase().includes(q) || tour.id.title.toLowerCase().includes(q);
        const matchSub = tour.en.subtitle.toLowerCase().includes(q) || tour.id.subtitle.toLowerCase().includes(q);
        const matchDesc = tour.en.description.toLowerCase().includes(q) || tour.id.description.toLowerCase().includes(q);
        const matchLocation = tour.location.toLowerCase().includes(q);
        const matchCat = tour.category.toLowerCase().includes(q);
        return matchTitle || matchSub || matchDesc || matchLocation || matchCat;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  return (
    <div className="pt-24 pb-24 bg-[#faf7f2] min-h-screen text-[#1a221f]">
      {/* Editorial Luxury Header Banner */}
      <div className="relative bg-[#062319] text-white py-24 px-4 sm:px-6 lg:px-8 mb-12 overflow-hidden border-b border-[#c5a880]/20">
        {/* Subtle Background Image Mask */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1600&auto=format&fit=crop"
            alt="Lombok Landscape"
            fill
            priority
            className="object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062319] via-[#062319]/80 to-[#03140e]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d3829] text-[#c5a880] text-[11px] font-bold uppercase tracking-[0.2em] border border-[#c5a880]/30 shadow-lg">
            <span>Curated Expeditions</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Explore Our <span className="italic font-normal text-[#c5a880]">Journeys</span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
            {dict.tours.pageSubtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Floating Luxury Filter Bar */}
        <div className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-[#c5a880]/30 shadow-[0_15px_35px_rgba(6,35,25,0.06)] space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#c5a880] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tours, peaks, beaches..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#faf7f2] border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#062319] text-xs font-semibold text-[#1a221f]"
              />
            </div>

            {/* Difficulty Filter Selector */}
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 shrink-0">
                {dict.tours.filterDifficulty}:
              </span>
              <div className="flex items-center gap-1.5">
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold capitalize transition-all cursor-pointer ${
                      selectedDifficulty.toLowerCase() === diff.toLowerCase()
                        ? 'bg-[#062319] text-[#c5a880] shadow-md border border-[#c5a880]/30'
                        : 'bg-[#faf7f2] text-zinc-600 hover:bg-zinc-200 border border-zinc-200/80'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3 border-t border-zinc-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#062319] text-[#c5a880] shadow-md border border-[#c5a880]/40'
                    : 'bg-[#faf7f2] text-zinc-600 hover:bg-zinc-100 border border-zinc-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info Counter */}
        <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 px-1">
          <p>
            Showing <span className="font-bold text-[#062319]">{filteredTours.length}</span> curated experiences
          </p>
        </div>

        {/* Tours Grid */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-zinc-200/80 shadow-sm space-y-4">
            <Compass className="w-12 h-12 text-[#c5a880] mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-[#062319]">
              No experiences match your search
            </h3>
            <p className="text-zinc-500 text-xs max-w-md mx-auto font-light">
              Try adjusting your search query, difficulty, or category filter to discover available journeys.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedDifficulty('All');
              }}
              className="px-6 py-3 rounded-full bg-[#062319] text-[#c5a880] font-bold text-xs hover:bg-[#0d3829] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ToursPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-24 pb-24 bg-[#faf7f2] min-h-screen text-[#1a221f]">
          <div className="relative bg-[#062319] text-white py-24 px-4 sm:px-6 lg:px-8 mb-12 overflow-hidden border-b border-[#c5a880]/20">
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d3829] text-[#c5a880] text-[11px] font-bold uppercase tracking-[0.2em] border border-[#c5a880]/30">
                Curated Expeditions
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                Explore Our <span className="italic font-normal text-[#c5a880]">Journeys</span>
              </h1>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <ToursContent />
    </Suspense>
  );
}
