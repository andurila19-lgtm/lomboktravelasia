'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { Sparkles, BookOpen, Clock, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    slug: 'mount-rinjani-trekking-guide',
    title: 'Complete Guide to Trekking Mount Rinjani: Gear, Permits & Altitude Tips',
    excerpt:
      'Everything you need to know before climbing Indonesia’s second-highest volcano. FromSembalun vs Senaru routes to recommended fitness preparations.',
    category: 'Adventure Guide',
    author: 'Lombok Travel Team',
    readTime: '8 min read',
    date: 'August 2026',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCjLepe5ca9UKZhZnWFnDhuEvAipTAi65B1X8jNGcpTfbyASPcgf5Cy_h7Tp3o4bZy35kH3Kak1QOwe_8VRYeilDjSTxDoyLVeUwcwh8jfsoNXBWY7ftMGIJ5tFS3EmYho_r35-iOBrlHzfghtAFVtpLs6B5oCS85llRBo_LxbfWWdzxCIqT-R9E21oV_DTX90_EkKQ1xBdJM-QkgAmvSv4B2juot6GTLiCPCoOGGRvoTY6GbIvjfOi',
  },
  {
    slug: 'gili-islands-comparison-guide',
    title: 'Which Gili Island is Right for You? Trawangan vs Meno vs Air',
    excerpt:
      'Discover the unique character of each Gili island. Whether you seek vibrant nightlife, secluded honeymoon luxury, or bohemian beach chill.',
    category: 'Island Hopping',
    author: 'Lombok Travel Team',
    readTime: '6 min read',
    date: 'August 2026',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKFHVrBwyQgx37IML9QD3U2QvMn8oNVnqEy7zYXLqUg65jViDmb1UoFYYnd9P-fT4yFMd0mNtzUNqQPMVR7IntqDu0Esmyrdl6FnnlmL3GgMzQeha78StZoOAcP6OVuOR2HyC6s-h5dydw6U4jZsP3PjrcqELx_l5EkZhijMzMxS72nAEHbsQmNbL7nW47rO0hCxfA0Lk4H7vFnZOVM_Bx1rV6k6DlPfHx-XZ2RQDzTLrGajsqB0Fz',
  },
  {
    slug: 'south-lombok-surf-beach-guide',
    title: 'South Lombok’s Secret Surf Breaks & Pristine Pink Sand Beaches',
    excerpt:
      'Escape the crowd and explore the wild coastline of Kuta Lombok, Tanjung Aan, and secret hidden coves accessible only by boat or trek.',
    category: 'Beach & Surf',
    author: 'Surfing Expert Guide',
    readTime: '5 min read',
    date: 'July 2026',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAo56Y_53LlYn8fvJE-RY-HDfY1fE4fm_ct7B3wc6iZM3WHuOD3UhCcKJfauSLQikVKvzsJbLfiNJuaIbJjiS-7LSem4MgkciOPgPzUD58lwJDt72CZi-3lffBuQCzNqK0ZvIf4Lz0eglDIV0YugedjGDiuCRp2XJziY-rrPhw9xNfb-l_FP8-Xzz3syOy6vMOmX2U0czg3rdxIYev3zjG8Wb9-NzYbgYZmUf2FRVY3-ROTey6BQyoE',
  },
];

export default function TravelGuidePage() {
  const { dict } = useLanguage();

  return (
    <div className="pt-28 pb-24 bg-[#fcf9f8] min-h-screen text-[#1b1c1c]">
      {/* Header Banner */}
      <div className="bg-[#012d1d] text-white py-16 px-4 sm:px-6 lg:px-8 mb-16 border-b border-[#1b4332]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332] text-[#86af99] text-xs font-semibold uppercase tracking-wider">
            <span>{dict.travelGuide.pageTitle}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Lombok Travel Insights & Advice
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
            {dict.travelGuide.pageSubtitle}
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm flex flex-col hover:shadow-xl transition-shadow group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 space-y-4">
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#3f6653]" />
                    {article.readTime}
                  </span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <h2 className="font-serif text-xl font-bold text-[#012d1d] group-hover:text-[#3f6653] transition-colors line-clamp-2">
                  {article.title}
                </h2>

                <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3 font-light">
                  {article.excerpt}
                </p>

                <div className="pt-4 border-t border-zinc-100 mt-auto flex items-center justify-between">
                  <span className="text-[11px] font-medium text-zinc-500 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#3f6653]" />
                    {article.author}
                  </span>
                  <span className="text-xs font-bold text-[#012d1d] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Story <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
