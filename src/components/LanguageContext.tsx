'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Locale } from '@/lib/i18n/config';
import enDict from '@/dictionaries/en.json';
import idDict from '@/dictionaries/id.json';

type Dictionary = typeof enDict;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('lta_locale') as Locale;
      if (savedLocale && (savedLocale === 'en' || savedLocale === 'id')) {
        return savedLocale;
      }
    }
    return 'en';
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('lta_locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  const dict = locale === 'id' ? idDict : enDict;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
