'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const { locale, dict } = useLanguage();
  const [isMinimized, setIsMinimized] = useState(false);
  const waUrl = getWhatsAppUrl({ locale, type: 'general' });

  return (
    <div
      className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-40 mb-[env(safe-area-inset-bottom)] transition-all duration-300"
      suppressHydrationWarning
    >
      {isMinimized ? (
        /* Minimized Round Icon Button */
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          aria-label="Expand WhatsApp chat"
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-black shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center justify-center cursor-pointer border-2 border-white hover:scale-110 transition-all duration-300"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75" />
          <MessageCircle className="w-5 h-5 fill-current text-black relative z-10" />
        </button>
      ) : (
        /* Expanded Compact Pill Container */
        <div className="relative flex items-center gap-1">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { location: 'floating_button' })}
            aria-label={dict.cta.whatsappUs}
            className="group relative flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#062319]/95 text-[#c5a880] backdrop-blur-xl border border-[#c5a880]/40 shadow-[0_10px_25px_rgba(6,35,25,0.3)] hover:scale-[1.02] hover:bg-[#062319] transition-all duration-300"
          >
            {/* Glow halo */}
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#c5a880]/30 to-[#25D366]/30 blur-xs opacity-50 group-hover:opacity-100 transition-opacity" />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-md shrink-0">
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-black" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#c5a880]">
                  Lombok Travel Team
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-white group-hover:text-[#c5a880] transition-colors whitespace-nowrap">
                  {dict.cta.chatOnWhatsapp}
                </span>
              </div>
            </div>
          </a>

          {/* Minimize X Button */}
          <button
            type="button"
            onClick={() => setIsMinimized(true)}
            aria-label="Minimize WhatsApp button"
            className="w-6 h-6 rounded-full bg-[#062319]/90 text-zinc-300 hover:text-white border border-[#c5a880]/30 flex items-center justify-center transition-all cursor-pointer hover:scale-110 shrink-0"
            title="Minimize"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
}
