'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '@/components/LanguageContext';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { Sparkles, MessageCircle, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'This field is required'),
  email: z.string().email('Please enter a valid email address'),
  whatsapp: z.string().min(6, 'This field is required'),
  dates: z.string().optional(),
  travelers: z.string(),
  destination: z.string(),
  message: z.string().min(5, 'Please type a message'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { locale, dict } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      travelers: '2',
      destination: 'Mount Rinjani Trekking',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    trackEvent('contact_form_submit', {
      destination: data.destination,
      travelers: data.travelers,
    });

    // Generate contextual WhatsApp message with form details
    const text = `Halo Lombok Travel Asia,\n\nNama: ${data.fullName}\nEmail: ${data.email}\nWhatsApp: ${data.whatsapp}\nTanggal Perjalanan: ${data.dates || 'Flexibel'}\nJumlah Tamu: ${data.travelers}\nDestinasi: ${data.destination}\n\nPesan:\n${data.message}`;

    const waLink = getWhatsAppUrl({ message: text });
    setSubmitted(true);

    // Redirect to WhatsApp after short delay
    setTimeout(() => {
      window.open(waLink, '_blank');
    }, 800);
  };

  const directWaUrl = getWhatsAppUrl({ locale, type: 'general' });

  return (
    <div className="pt-28 pb-24 bg-[#fcf9f8] min-h-screen text-[#1b1c1c]">
      {/* Header Banner */}
      <div className="bg-[#012d1d] text-white py-16 px-4 sm:px-6 lg:px-8 mb-16 border-b border-[#1b4332]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332] text-[#86af99] text-xs font-semibold uppercase tracking-wider">
            <span>{dict.contact.overline}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            {dict.contact.pageTitle}
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
            {dict.contact.pageSubtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#012d1d]">
              {dict.contact.sendInquiry}
            </h2>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-emerald-900 text-lg">
                  {dict.contact.formSuccess}
                </h3>
                <p className="text-xs text-emerald-700">
                  Redirecting to WhatsApp for instant chat...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-600 mb-1">
                    {dict.contact.formName} *
                  </label>
                  <input
                    type="text"
                    {...register('fullName')}
                    className="w-full p-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#012d1d] text-sm"
                    placeholder="e.g. Sarah Jenkins"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-600 mb-1">
                      {dict.contact.formEmail} *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full p-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#012d1d] text-sm"
                      placeholder="sarah@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-600 mb-1">
                      {dict.contact.formWhatsapp} *
                    </label>
                    <input
                      type="text"
                      {...register('whatsapp')}
                      className="w-full p-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#012d1d] text-sm"
                      placeholder="+62 812 XXXX XXXX"
                    />
                    {errors.whatsapp && (
                      <p className="text-xs text-rose-500 mt-1">{errors.whatsapp.message}</p>
                    )}
                  </div>
                </div>

                {/* Travel Dates & Travelers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-600 mb-1">
                      {dict.contact.formDates}
                    </label>
                    <input
                      type="text"
                      {...register('dates')}
                      className="w-full p-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#012d1d] text-sm"
                      placeholder="e.g. Oct 15 - Oct 20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-600 mb-1">
                      {dict.contact.formTravelers}
                    </label>
                    <div className="relative">
                      <select
                        {...register('travelers')}
                        className="w-full p-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#062319] text-xs font-semibold text-zinc-900 bg-white appearance-none cursor-pointer pr-10 shadow-sm"
                      >
                        <option value="1">{dict.contact.travelers1}</option>
                        <option value="2">{dict.contact.travelers2}</option>
                        <option value="3-4">{dict.contact.travelers34}</option>
                        <option value="5+">{dict.contact.travelers5}</option>
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                        ▼
                      </div>
                    </div>
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-600 mb-1">
                    {dict.contact.formDestination}
                  </label>
                  <div className="relative">
                    <select
                      {...register('destination')}
                      className="w-full p-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#062319] text-xs font-semibold text-zinc-900 bg-white appearance-none cursor-pointer pr-10 shadow-sm"
                    >
                      <option value="Mount Rinjani Trekking">{dict.contact.destRinjani}</option>
                      <option value="Gili Islands Escape">{dict.contact.destGili}</option>
                      <option value="South Lombok Beaches">{dict.contact.destSouth}</option>
                      <option value="Cultural Tour">{dict.contact.destCultural}</option>
                      <option value="Custom Itinerary">{dict.contact.destCustom}</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-600 mb-1">
                    {dict.contact.formMessage} *
                  </label>
                  <textarea
                    rows={4}
                    {...register('message')}
                    className="w-full p-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#012d1d] text-sm"
                    placeholder="Tell us about your travel plans or special requests..."
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#012d1d] hover:bg-[#1b4332] text-[#86af99] font-bold text-sm transition-all shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? 'Sending...' : dict.contact.formSubmit}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Instant Contact Options */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#012d1d] text-white p-8 rounded-3xl border border-[#1b4332] shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold">Prefer Instant Messaging?</h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                Chat directly with our local Lombok travel team on WhatsApp for trip advice, availability checks, and custom itineraries.
              </p>

              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-[#25D366] text-black font-bold text-sm hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{dict.cta.chatOnWhatsapp}</span>
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-4 text-xs text-zinc-600">
              <h4 className="font-serif text-lg font-bold text-[#012d1d]">
                {dict.contact.ourOffice}
              </h4>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#3f6653] shrink-0 mt-0.5" />
                <span>Senggigi, Lombok, West Nusa Tenggara, Indonesia</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#3f6653] shrink-0" />
                <a href={directWaUrl} target="_blank" rel="noopener noreferrer" className="text-[#012d1d] font-semibold hover:underline">
                  WhatsApp Direct Inquiry
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
