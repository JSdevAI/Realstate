'use client';
import React, { useState } from 'react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-headline font-bold text-neutral-900 mb-4 tracking-tight">
            Galeria Imobiliária
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div 
              key={src}
              className={`relative overflow-hidden group cursor-pointer aspect-video md:aspect-square ${
                index === 0 ? 'md:col-span-2 md:aspect-video' : ''
              }`}
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`${title} - Vista ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-medium border border-white/40 px-6 py-2 rounded-full backdrop-blur-sm">
                  Ampliar Vista
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white text-4xl hover:text-primary transition-colors cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-full object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};
