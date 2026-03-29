import React from 'react';
import Link from 'next/link';
import { properties } from '../../data/properties';

export const FeaturedProperties = () => {
  const featured = properties.filter(p => p.featured).slice(0, 3);

  return (
    <section className="py-24 bg-surface-container-low" id="imoveis">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs font-label">Portefólio</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary-container leading-tight mt-2">
              Imóveis em Destaque
            </h2>
          </div>
          <Link href="/gallery" className="flex items-center gap-2 text-primary font-bold hover:text-cyan-700 transition-colors group">
            Ver todos os imóveis
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property) => (
            <div key={property.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 border border-outline-variant/30">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={property.imageUrl} 
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-sm backdrop-blur-md
                    ${property.status === 'Disponível' ? 'bg-status-available/90' : 
                      property.status === 'Reservado' ? 'bg-status-reserved/90' : 
                      'bg-primary-container/90'}`}>
                    {property.status}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-primary-container mb-2 group-hover:text-cyan-800 transition-colors">{property.title}</h3>
                    <p className="text-on-surface-variant flex items-center gap-1.5 text-sm font-medium">
                      <span className="material-symbols-outlined text-base">location_on</span>
                      {property.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mt-6 pt-6 border-t border-outline-variant/30 text-on-surface-variant text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">bed</span>
                    {property.beds}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">shower</span>
                    {property.baths}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">straighten</span>
                    {property.area} m²
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-2xl font-black text-primary font-headline tracking-tight">{property.price}</span>
                  <button className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
