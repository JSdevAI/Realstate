'use client';

import React, { useEffect } from 'react';
import { FiltersBar } from '../../components/gallery/FiltersBar';
import { PropertiesGrid } from '../../components/gallery/PropertiesGrid';
import { GalleryCtaSection } from '../../components/gallery/GalleryCtaSection';

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow pt-32 min-h-screen bg-surface-container-low">
      <div className="container mx-auto px-6 max-w-7xl mb-12 text-center md:text-left">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary-container leading-tight mb-4">
          Galeria de Imóveis
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl">
          Explore a nossa seleção criteriosa de propriedades. Encontre o espaço ideal para o seu estilo de vida.
        </p>
      </div>

      <FiltersBar />
      <PropertiesGrid />
      <GalleryCtaSection />
    </main>
  );
}
