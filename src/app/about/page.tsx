'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { Compass, ShieldCheck, HeartHandshake, Sparkles, MapPin, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function AboutPage() {
  const { locale, dict } = useLanguage();
  const waUrl = getWhatsAppUrl({ locale, type: 'general' });

  return (
    <div className="pt-28 pb-24 bg-[#fcf9f8] min-h-screen text-[#1b1c1c]">
      {/* Header Banner */}
      <div className="bg-[#012d1d] text-white py-16 px-4 sm:px-6 lg:px-8 mb-16 border-b border-[#1b4332]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332] text-[#86af99] text-xs font-semibold uppercase tracking-wider">
            <span>{dict.nav.about}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            {dict.about.pageTitle}
          </h1>
          <p className="max-w-3xl mx-auto text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
            {dict.about.storyText}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Core Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#012d1d]">
              {dict.about.whyChooseUs}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1b4332] text-[#86af99] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#012d1d]">
                {dict.about.localExpertise}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-light">
                {dict.about.localExpertiseDesc}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1b4332] text-[#86af99] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#012d1d]">
                {dict.about.safety}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-light">
                {dict.about.safetyDesc}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1b4332] text-[#86af99] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#012d1d]">
                {dict.about.sustainable}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-light">
                {dict.about.sustainableDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Meet Consultant Section */}
        <div className="bg-[#012d1d] text-white p-8 sm:p-12 rounded-3xl border border-[#1b4332] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-[#86af99]/30">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo56Y_53LlYn8fvJE-RY-HDfY1fE4fm_ct7B3wc6iZM3WHuOD3UhCcKJfauSLQikVKvzsJbLfiNJuaIbJjiS-7LSem4MgkciOPgPzUD58lwJDt72CZi-3lffBuQCzNqK0ZvIf4Lz0eglDIV0YugedjGDiuCRp2XJziY-rrPhw9xNfb-l_FP8-Xzz3syOy6vMOmX2U0czg3rdxIYev3zjG8Wb9-NzYbgYZmUf2FRVY3-ROTey6BQyoE"
              alt="Maya - Lead Travel Consultant"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="px-3 py-1 rounded-full bg-[#1b4332] text-[#86af99] text-xs font-semibold uppercase tracking-wider">
              {dict.about.meetConsultant}
            </span>
            <div>
              <h3 className="font-serif text-3xl font-bold">{dict.about.consultantName}</h3>
              <p className="text-sm text-[#86af99] font-medium">{dict.about.consultantRole}</p>
            </div>
            <blockquote className="text-base sm:text-lg italic text-zinc-200 border-l-2 border-[#86af99] pl-4">
              &quot;{dict.about.consultantQuote}&quot;
            </blockquote>
            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-bold text-xs hover:bg-[#20bd5a] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{dict.cta.inquireOnWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Office & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#012d1d]">
              {dict.about.ourMission}
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed font-light">
              {dict.about.missionText}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#012d1d]">
              {dict.about.visitOffice}
            </h3>
            <div className="space-y-2 text-sm text-zinc-600">
              <p className="font-bold text-[#012d1d]">{dict.about.officeLabel}</p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#3f6653] shrink-0 mt-0.5" />
                <span>{dict.about.officeAddress}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
