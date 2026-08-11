'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function WhatsAppButton() {
  const { locale, dict } = useLanguage();
  const waUrl = getWhatsAppUrl({ locale, type: 'general' });

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('whatsapp_click', { location: 'floating_button' })}
        aria-label={dict.cta.whatsappUs}
        className="group relative flex items-center gap-3 px-5 py-3 rounded-full bg-[#062319]/95 text-[#c5a880] backdrop-blur-xl border border-[#c5a880]/40 shadow-[0_10px_30px_rgba(6,35,25,0.3)] hover:scale-105 hover:bg-[#062319] transition-all duration-300"
      >
        {/* Glow halo */}
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#c5a880]/40 to-[#25D366]/30 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-md">
            <MessageCircle className="w-4 h-4 fill-current text-black" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#c5a880]">
              Lombok Travel Team
            </span>
            <span className="text-xs font-semibold text-white group-hover:text-[#c5a880] transition-colors">
              Chat on WhatsApp
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
