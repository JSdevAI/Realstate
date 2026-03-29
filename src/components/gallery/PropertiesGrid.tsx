import React from 'react';
import { properties } from '../../data/properties';

export const PropertiesGrid = () => {
  return (
    <section className="py-16 bg-surface-container-low min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-8 flex justify-between items-center">
          <p className="text-on-surface-variant font-medium">{properties.length} imóveis encontrados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
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

        {/* Pagination (Mock) */}
        <div className="mt-16 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-primary-container text-white font-bold flex items-center justify-center">1</button>
          <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors font-bold">2</button>
          <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors font-bold">3</button>
          <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
};
