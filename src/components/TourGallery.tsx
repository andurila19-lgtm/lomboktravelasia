'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface TourGalleryProps {
  images: string[];
  title: string;
}

export default function TourGallery({ images, title }: TourGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
      {/* Main Display Image */}
      <div className="lg:col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 shadow-lg">
        <Image
          src={selectedImage || images[0]}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover transition-all duration-300"
        />
      </div>

      {/* Thumbnails list */}
      <div className="flex lg:flex-col gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedImage(img)}
            className={`relative flex-1 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
              selectedImage === img
                ? 'border-[#012d1d] scale-[0.98] shadow-md'
                : 'border-transparent opacity-75 hover:opacity-100'
            }`}
            aria-label={`View photo ${idx + 1}`}
          >
            <Image
              src={img}
              alt={`${title} Preview ${idx + 1}`}
              fill
              sizes="(max-width: 1024px) 25vw, 33vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
