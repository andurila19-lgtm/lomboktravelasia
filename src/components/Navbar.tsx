'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageContext';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Menu, X, Compass, Globe, MessageCircle, Sparkles } from 'lucide-react';

export default function Navbar() {
  const { locale, setLocale, dict } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile menu drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: dict.nav.tours, href: '/tours' },
    { label: dict.nav.destinations, href: '/destinations' },
    { label: dict.nav.travelGuide, href: '/travel-guide' },
    { label: dict.nav.about, href: '/about' },
    { label: dict.nav.contact, href: '/contact' },
  ];

  const waUrl = getWhatsAppUrl({ locale, type: 'general' });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#03140e]/95 backdrop-blur-xl border-b border-[#c5a880]/20 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#03140e]/90 via-[#03140e]/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-[#0d3829] text-[#c5a880] flex items-center justify-center border border-[#c5a880]/30 transition-transform group-hover:scale-105 shadow-md">
              <Compass className="w-5 h-5 text-[#c5a880]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-[#c5a880] transition-colors">
                Lombok Travel Asia
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#c5a880] uppercase font-semibold">
                Curated Expeditions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-9">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-semibold uppercase tracking-wider transition-all hover:text-[#c5a880] relative py-1 ${
                    isActive ? 'text-[#c5a880]' : 'text-zinc-200/90'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c5a880] rounded-full shadow-[0_0_8px_#c5a880]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Language Selector */}
            <div className="flex items-center bg-black/40 backdrop-blur-md rounded-full p-1 border border-[#c5a880]/30">
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all cursor-pointer ${
                  locale === 'en'
                    ? 'bg-[#c5a880] text-[#062319] shadow-sm'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale('id')}
                className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all cursor-pointer ${
                  locale === 'id'
                    ? 'bg-[#c5a880] text-[#062319] shadow-sm'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                ID
              </button>
            </div>

            {/* Concierge WhatsApp CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#c5a880] hover:bg-white text-[#062319] transition-all transform hover:scale-105 shadow-xl border border-[#e5d4bc]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{dict.cta.whatsappUs}</span>
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center md:hidden gap-3">
            <button
              type="button"
              onClick={() => setLocale(locale === 'en' ? 'id' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-black/50 border border-[#c5a880]/40 text-white cursor-pointer active:scale-95 transition-transform"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="uppercase">{locale}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2.5 rounded-xl bg-black/40 border border-[#c5a880]/30 text-white hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#c5a880]" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#03140e] border-b border-[#c5a880]/30 px-6 pt-4 pb-8 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#0d3829] text-[#c5a880] border border-[#c5a880]/30 shadow-md'
                      : 'text-zinc-200 hover:bg-white/5 hover:text-[#c5a880]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Drawer Actions */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            {/* Language Switcher in Drawer */}
            <div className="flex items-center justify-between px-2 text-xs font-bold text-zinc-400">
              <span>{dict.common.language}:</span>
              <div className="flex items-center bg-black/60 rounded-full p-1 border border-[#c5a880]/30">
                <button
                  type="button"
                  onClick={() => setLocale('en')}
                  className={`px-4 py-1 text-xs font-bold rounded-full transition-all ${
                    locale === 'en'
                      ? 'bg-[#c5a880] text-[#062319]'
                      : 'text-zinc-300'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLocale('id')}
                  className={`px-4 py-1 text-xs font-bold rounded-full transition-all ${
                    locale === 'id'
                      ? 'bg-[#c5a880] text-[#062319]'
                      : 'text-zinc-300'
                  }`}
                >
                  Bahasa ID
                </button>
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-sm font-bold bg-[#c5a880] text-[#062319] shadow-xl hover:bg-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{dict.cta.whatsappUs}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
