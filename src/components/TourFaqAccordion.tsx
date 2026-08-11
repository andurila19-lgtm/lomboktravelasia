'use client';

import React, { useState } from 'react';
import { TourFAQ } from '@/content/tours';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TourFaqAccordionProps {
  faq: TourFAQ[];
}

export default function TourFaqAccordion({ faq }: TourFaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!faq || faq.length === 0) return null;

  return (
    <div className="space-y-3">
      {faq.map((item, idx) => {
        const isOpen = openFaq === idx;
        return (
          <div key={idx} className="rounded-xl bg-white border border-zinc-200 overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenFaq(isOpen ? null : idx)}
              className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-[#012d1d] hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              <span>{item.question}</span>
              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-zinc-400 shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
              )}
            </button>
            {isOpen && (
              <div className="px-4 pb-4 pt-1 border-t border-zinc-100 text-xs text-zinc-600 leading-relaxed font-light">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
