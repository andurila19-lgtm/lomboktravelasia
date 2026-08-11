'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { Compass, Mail, MapPin, Phone, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function Footer() {
  const { locale, dict } = useLanguage();
  const waUrl = getWhatsAppUrl({ locale, type: 'general' });

  return (
    <footer className="bg-[#03140e] text-white pt-20 pb-10 border-t border-[#c5a880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#0d3829] text-[#c5a880] flex items-center justify-center border border-[#c5a880]/30">
                <Compass className="w-5 h-5 text-[#c5a880]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  Lombok Travel Asia
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#c5a880] uppercase font-semibold">
                  Curated Expeditions
                </span>
              </div>
            </Link>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              {dict.footer.description}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0d3829] hover:bg-[#c5a880] text-[#c5a880] hover:text-[#062319] flex items-center justify-center transition-colors border border-[#c5a880]/20"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="mailto:info@lomboktravelasia.com"
                className="w-9 h-9 rounded-full bg-[#0d3829] hover:bg-[#c5a880] text-[#c5a880] hover:text-[#062319] flex items-center justify-center transition-colors border border-[#c5a880]/20"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c5a880] mb-5">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-3 text-xs font-medium text-zinc-300">
              <li>
                <Link href="/tours" className="hover:text-[#c5a880] transition-colors">
                  {dict.nav.tours}
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-[#c5a880] transition-colors">
                  {dict.nav.destinations}
                </Link>
              </li>
              <li>
                <Link href="/travel-guide" className="hover:text-[#c5a880] transition-colors">
                  {dict.nav.travelGuide}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#c5a880] transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c5a880] transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Journeys */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c5a880] mb-5">
              {dict.home.popularExperiences}
            </h3>
            <ul className="space-y-3 text-xs font-medium text-zinc-300">
              <li>
                <Link href="/tours/mount-rinjani-summit-trek" className="hover:text-[#c5a880] transition-colors">
                  Mount Rinjani Summit Trek
                </Link>
              </li>
              <li>
                <Link href="/tours/gili-islands-explorer" className="hover:text-[#c5a880] transition-colors">
                  Gili Islands Explorer
                </Link>
              </li>
              <li>
                <Link href="/tours/secret-waterfalls-culture" className="hover:text-[#c5a880] transition-colors">
                  Secret Waterfalls & Culture
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c5a880] mb-5">
              {dict.footer.contactUs}
            </h3>
            <ul className="space-y-3.5 text-xs text-zinc-300 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>Senggigi, Lombok, West Nusa Tenggara, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#c5a880] font-medium text-[#c5a880]">
                  WhatsApp Consultation
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                <Link href="/contact" className="hover:text-[#c5a880]">
                  Send Inquiry Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Safe Presentation Trust Drivers */}
        <div className="py-8 my-4 border-y border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-bold text-[#c5a880] uppercase tracking-wider">✓ Local Lombok Team</span>
            <span className="text-[11px] text-zinc-400 font-light">Island routes & guides</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-bold text-[#c5a880] uppercase tracking-wider">✓ Private & Custom Trips</span>
            <span className="text-[11px] text-zinc-400 font-light">Flexible travel planning</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-bold text-[#c5a880] uppercase tracking-wider">✓ Direct WhatsApp Inquiry</span>
            <span className="text-[11px] text-zinc-400 font-light">Fast trip consultation</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-bold text-[#c5a880] uppercase tracking-wider">✓ Tailored Itineraries</span>
            <span className="text-[11px] text-zinc-400 font-light">Designed around your plans</span>
          </div>
        </div>

        {/* Bottom Bar & Brand Safety Demo Notice */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p>© {new Date().getFullYear()} {dict.footer.copyright}</p>
            <span className="hidden md:inline text-zinc-600">•</span>
            <span className="text-[11px] text-zinc-500 font-normal">Lombok Travel Asia — Interactive Sales Concept Demo</span>
          </div>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart className="w-3.5 h-3.5 text-[#c5a880] fill-current" /> in Lombok
          </p>
        </div>
      </div>
    </footer>
  );
}
