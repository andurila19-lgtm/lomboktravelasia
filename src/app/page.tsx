'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageContext';
import TourCard from '@/components/TourCard';
import { tours } from '@/content/tours';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import {
  Compass,
  Search,
  ShieldCheck,
  UserCheck,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

export default function Home() {
  const { locale, dict } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInterest, setSelectedInterest] = useState('');

  const waCustomUrl = getWhatsAppUrl({ locale, type: 'customTrip' });

  const interests = [
    { key: 'Trekking', label: dict.home.interestRinjani },
    { key: 'Island', label: dict.home.interestGili },
    { key: 'Beach', label: dict.home.interestBeach },
    { key: 'Culture', label: dict.home.interestCulture },
    { key: 'custom', label: dict.home.interestCustom },
  ];

  // Filter top tours for homepage display
  const featuredTours = tours.slice(0, 4);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#fcf9f8] text-[#1b1c1c] pt-0">
      <div className="flex flex-col w-full relative pb-16">
        {/* HERO SECTION (RICH CINEMATIC DARK CONTRAST) */}
        <section className="relative w-full min-h-[560px] sm:min-h-[620px] flex flex-col justify-start pt-28 sm:pt-32 pb-32 sm:pb-36 rounded-b-[2.5rem] overflow-hidden bg-[#03140e]">
          {/* Mount Rinjani High-Definition Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/rinjani-wallpaper.jpg"
              alt="Mount Rinjani Volcano Lombok"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center opacity-60"
            />
            {/* Rich Cinematic Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#03140e]/90 via-[#03140e]/60 to-[#fcf9f8]" />
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
          </div>

          <div className="relative z-10 w-full px-5 sm:px-16 max-w-4xl mx-auto flex flex-col items-center text-center gap-3.5 text-white">
            {/* Overline Badge */}
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#c5a880]">
              {dict.home.overline}
            </span>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mx-auto drop-shadow-lg">
              Discover Lombok <span className="italic font-normal text-[#c5a880]">Beyond</span> the Ordinary
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-zinc-200 max-w-lg font-light leading-relaxed mx-auto drop-shadow-sm">
              {dict.home.heroSubtitle}
            </p>

            {/* Subtle Context Line */}
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#c5a880]/90 pt-1">
              Lombok Tours • Private Trips • Custom Experiences
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2 mb-4 w-full sm:w-auto mx-auto">
              <Link
                href="/tours"
                className="w-full sm:w-auto h-12 sm:h-13 px-8 bg-[#c5a880] hover:bg-white text-[#062319] font-bold text-xs uppercase tracking-widest rounded-full shadow-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                <span>{dict.cta.exploreTours}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={waCustomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 sm:h-13 px-8 bg-black/40 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <span>{dict.cta.planMyTrip}</span>
              </a>
            </div>
          </div>
        </section>

        {/* PLAN YOUR LOMBOK EXPERIENCE DISCOVERY PANEL */}
        <section className="relative z-20 px-5 sm:px-16 -mt-14 sm:-mt-20 w-full max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-zinc-200/90 text-zinc-800 text-left space-y-5">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-[#012d1d] uppercase tracking-[0.2em] block mb-1">
                {dict.home.planTitle}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#012d1d]">
                {dict.home.whatInterested}
              </h2>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (selectedInterest === 'custom') {
                  window.open(waCustomUrl, '_blank');
                } else {
                  const params = new URLSearchParams();
                  if (selectedInterest) params.set('category', selectedInterest);
                  if (searchQuery.trim()) params.set('q', searchQuery.trim());
                  window.location.href = `/tours?${params.toString()}`;
                }
              }}
              className="flex flex-col gap-4"
            >
              {/* Category Interest Chips */}
              <div className="flex flex-wrap items-center gap-2">
                {interests.map((item) => {
                  const isSelected = selectedInterest === item.key;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setSelectedInterest(isSelected ? '' : item.key)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#012d1d] text-[#c5a880] border-[#012d1d] shadow-md scale-[1.02]'
                          : 'bg-[#faf7f2] text-zinc-700 hover:bg-zinc-100 border-zinc-200/90'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Keyword Input Box */}
              <div className="flex flex-col gap-1.5 pt-1">
                <div className="bg-[#faf7f2] p-3.5 rounded-xl border border-zinc-200 hover:border-[#012d1d] focus-within:border-[#012d1d] focus-within:ring-2 focus-within:ring-[#012d1d]/20 transition-all flex items-center gap-3">
                  <Search className="w-5 h-5 text-[#012d1d] shrink-0" />
                  <input
                    id="experience-search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={dict.home.searchKeywordPlaceholder}
                    className="w-full bg-transparent text-sm font-semibold text-zinc-900 focus:outline-none outline-none border-none focus:ring-0 ring-0 shadow-none placeholder:text-zinc-400"
                  />
                </div>
              </div>

              {/* Action Submit Button */}
              <button
                type="submit"
                className="w-full h-13 mt-1 bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 border border-[#86af99]/30 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#c5a880]" />
                <span>{dict.home.exploreExperiences}</span>
              </button>
            </form>
          </div>
        </section>

        {/* WHY CHOOSE US (EXACT STITCH SPECIFICATION) */}
        <section className="px-5 sm:px-16 py-20 max-w-5xl mx-auto w-full">
          <div className="text-left max-w-3xl mb-10 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-[#012d1d] uppercase tracking-[0.2em] block">
              {dict.about.whyChooseUs}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#012d1d]">
              {dict.home.whyUsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-[#eae7e7] flex items-center justify-center text-[#012d1d]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm text-[#012d1d]">
                {dict.home.localExpertise}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#414844] leading-relaxed font-light">
                {dict.home.localExpertiseDesc}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-[#eae7e7] flex items-center justify-center text-[#012d1d]">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm text-[#012d1d]">
                {dict.home.proGuides}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#414844] leading-relaxed font-light">
                {dict.home.proGuidesDesc}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-[#eae7e7] flex items-center justify-center text-[#012d1d]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm text-[#012d1d]">
                {dict.home.flexiblePlans}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#414844] leading-relaxed font-light">
                {dict.home.flexiblePlansDesc}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-[#eae7e7] flex items-center justify-center text-[#012d1d]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm text-[#012d1d]">
                {dict.home.support247}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#414844] leading-relaxed font-light">
                {dict.home.support247Desc}
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED JOURNEYS / POPULAR EXPERIENCES */}
        <section className="py-16 bg-[#f6f3f2]">
          <div className="max-w-7xl mx-auto px-5 sm:px-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-[#012d1d] uppercase tracking-[0.2em] block mb-2">
                  {dict.home.featuredJourney}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#012d1d]">
                  {dict.home.popularExperiences}
                </h2>
              </div>
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#012d1d] hover:opacity-80 transition-opacity"
              >
                <span>{dict.cta.exploreAllTours}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Tour Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          </div>
        </section>

        {/* HIGHLIGHT EXPEDITION BANNER */}
        <section className="relative py-20 bg-[#012d1d] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop"
              alt="Mount Rinjani Crater Lake"
              fill
              sizes="100vw"
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#012d1d] via-[#012d1d]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#1b4332] text-[#86af99] text-[10px] font-bold uppercase tracking-[0.2em]">
                {dict.home.heartOfRinjani}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight text-white">
                Mount Rinjani Summit & Segara Anak Lake Expedition
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                {dict.home.heartOfRinjaniDesc}
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <span className="block text-xl sm:text-2xl font-bold text-[#86af99]">3,726m</span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Peak Elevation</span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-bold text-[#86af99]">3 Days</span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Duration</span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-bold text-[#86af99]">Local</span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Trekking Team</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/tours/mount-rinjani-summit-trek"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1b4332] text-[#86af99] font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#012d1d] transition-all shadow-xl"
                >
                  <span>{dict.cta.viewTour}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOM TRIP PLANNER BANNER */}
        <section className="py-20 bg-[#fcf9f8] text-[#1b1c1c] border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-5 sm:px-16 text-center space-y-6">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#012d1d]">
              {dict.home.designYourJourney}
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base font-light">
              {dict.home.designYourJourneyDesc}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waCustomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#012d1d] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1b4332] transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{dict.cta.tellUsYourPlan}</span>
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#f6f3f2] text-[#012d1d] font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all border border-zinc-300 flex items-center justify-center"
              >
                <span>{dict.cta.sendInquiry}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
