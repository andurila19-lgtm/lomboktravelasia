'use client';

import React, { useState } from 'react';
import { TourItineraryDay } from '@/content/tours';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TourItineraryAccordionProps {
  itinerary: TourItineraryDay[];
}

export default function TourItineraryAccordion({ itinerary }: TourItineraryAccordionProps) {
  const [openDay, setOpenDay] = useState<number | null>(1);

  return (
    <div className="space-y-3">
      {itinerary.map((day) => {
        const isOpen = openDay === day.day;
        return (
          <div
            key={day.day}
            className="rounded-2xl bg-white border border-zinc-200 overflow-hidden transition-shadow shadow-xs hover:shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenDay(isOpen ? null : day.day)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#012d1d] text-[#86af99] font-serif font-bold text-base flex items-center justify-center shrink-0">
                  {day.day}
                </span>
                <div>
                  <h3 className="font-bold text-base text-[#012d1d]">{day.title}</h3>
                  <span className="text-xs text-zinc-500 font-medium">
                    Duration: {day.duration} {day.elevation && `• Elevation: ${day.elevation}`}
                  </span>
                </div>
              </div>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-zinc-400 shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0" />
              )}
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-2 border-t border-zinc-100 text-sm text-zinc-600 leading-relaxed font-light">
                {day.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
