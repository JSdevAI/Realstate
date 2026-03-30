'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { properties } from '@/data/properties';

export default function GalleryPage() {
  const [filter, setFilter] = useState('Todos');

  const filteredProperties = filter === 'Todos' 
    ? properties 
    : properties.filter(p => p.category === filter);

  const categories = ['Todos', 'Moradias', 'Apartamentos', 'Terrenos', 'Comercial'];

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs">O NOSSO PORTFÓLIO</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary-container mt-4 leading-tight">
              Descubra o seu próximo <span className="text-secondary">investimento</span>
            </h1>
            <p className="text-on-surface-variant text-xl mt-6 font-medium leading-relaxed">
              Explore a nossa seleção exclusiva de propriedades, desde moradias minimalistas a terrenos com potencial ilimitado.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 bg-surface/80 backdrop-blur-xl border-y border-surface-container-high py-6 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                  filter === cat 
                  ? 'bg-primary-container text-on-primary border-primary-container shadow-lg' 
                  : 'bg-transparent text-primary-container border-primary-container/20 hover:border-primary-container'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProperties.map((prop) => (
              <div key={prop.id} className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-surface-container-high">
                <Link href={`/properties/${prop.id}`}>
                  <div className="relative h-80 overflow-hidden">
                    <Image 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                      src={prop.mainImage} 
                      alt={prop.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={90}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <span className={`inline-block ${prop.statusColor} text-white px-5 py-2 rounded-full text-xs font-black shadow-lg uppercase tracking-widest`}>
                        {prop.status}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
                      <div className="flex-1 min-w-0 mr-0 sm:mr-4">
                        <span className="text-[10px] font-black text-secondary tracking-[0.2em] uppercase">{prop.category}</span>
                        <h3 className="text-2xl font-black text-primary-container mt-1 truncate leading-tight">{prop.title}</h3>
                      </div>
                      <span className="text-xl sm:text-2xl font-black text-primary-container whitespace-nowrap leading-none py-1">{prop.price}</span>
                    </div>
                    <p className="text-on-surface-variant font-medium flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">location_on</span> {prop.location}
                    </p>
                    <div className="flex gap-6 py-6 border-y border-surface-container-high text-on-surface-variant font-bold text-sm">
                      <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container">bed</span> {prop.beds}</span>
                      <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container">bathtub</span> {prop.baths}</span>
                      <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container">square_foot</span> {prop.area}</span>
                    </div>
                    <Link 
                      href={`/properties/${prop.id}`}
                      className="flex items-center justify-center w-full py-5 rounded-full bg-surface-container-high text-primary-container font-black hover:bg-primary-container hover:text-white transition-all duration-300 uppercase tracking-widest text-sm"
                    >
                      Explorar Imóvel
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
