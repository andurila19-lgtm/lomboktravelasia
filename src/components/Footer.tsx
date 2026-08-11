'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { Compass, Mail, MapPin, MessageCircle, Heart } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function Footer() {
  const { locale, dict } = useLanguage();
  const waUrl = getWhatsAppUrl({ locale, type: 'general' });

  return (
    <footer className="bg-[#03140e] text-white pt-10 sm:pt-16 pb-24 sm:pb-10 border-t border-[#c5a880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-6 sm:mb-12">
          {/* Column 1: Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full bg-[#0d3829] text-[#c5a880] flex items-center justify-center border border-[#c5a880]/30">
                <Compass className="w-4 h-4 text-[#c5a880]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-white">
                  Lombok Travel Asia
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#c5a880] uppercase font-semibold">
                  Curated Expeditions
                </span>
              </div>
            </Link>
            <p className="text-xs text-zinc-300 leading-relaxed font-light max-w-sm">
              {dict.footer.description}
            </p>
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0d3829] hover:bg-[#c5a880] text-[#c5a880] hover:text-[#062319] flex items-center justify-center transition-colors border border-[#c5a880]/20"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
              </a>
              <Link
                href="/contact"
                className="w-8 h-8 rounded-full bg-[#0d3829] hover:bg-[#c5a880] text-[#c5a880] hover:text-[#062319] flex items-center justify-center transition-colors border border-[#c5a880]/20"
                aria-label="Send Inquiry"
              >
                <Mail className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c5a880] mb-3">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-xs font-medium text-zinc-300">
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

          {/* Column 3: Contact & Info */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c5a880] mb-3">
              {dict.footer.contactUs}
            </h3>
            <ul className="space-y-2 text-xs text-zinc-300 font-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>Senggigi, Lombok, NTB, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#c5a880] font-medium text-[#c5a880]">
                  WhatsApp Consultation
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                <Link href="/contact" className="hover:text-[#c5a880]">
                  Send Inquiry Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Compact Presentation Trust Drivers */}
        <div className="py-4 my-2 border-y border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[11px] sm:text-xs font-bold text-[#c5a880] uppercase tracking-wider">✓ Local Lombok Team</span>
            <span className="text-[10px] text-zinc-400 font-light">Island routes & guides</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[11px] sm:text-xs font-bold text-[#c5a880] uppercase tracking-wider">✓ Custom Trips</span>
            <span className="text-[10px] text-zinc-400 font-light">Flexible planning</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[11px] sm:text-xs font-bold text-[#c5a880] uppercase tracking-wider">✓ Direct WhatsApp</span>
            <span className="text-[10px] text-zinc-400 font-light">Fast consultation</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[11px] sm:text-xs font-bold text-[#c5a880] uppercase tracking-wider">✓ Tailored Itineraries</span>
            <span className="text-[10px] text-zinc-400 font-light">Designed for you</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 gap-2 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <p>© {new Date().getFullYear()} {dict.footer.copyright}</p>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="text-zinc-500 font-normal">Lombok Travel Asia — Interactive Sales Concept Demo</span>
          </div>
          <p className="flex items-center gap-1">
            <span>Handcrafted in Lombok</span>
            <Heart className="w-3 h-3 text-[#c5a880] fill-current ml-0.5" />
          </p>
        </div>
      </div>
    </footer>
  );
}
