'use client';
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function GalleryPage() {
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', 'Moradias', 'Apartamentos', 'Terrenos', 'Comercial'];
  
  const properties = [
    { id: 1, title: 'Moradia T4 Minimalista', cat: 'Moradias', price: '650.000€', loc: 'Famalicão', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCug8VOrKRAhPUhloGqHBmoW4t55XPC_fcBWh88rvW-vYtGi0FusP0tGOfVqKEfBWTgoPcy7zOKTHzlyCXHqADdxtnbacWKkor157isYIcT2ky93z9YIEihb-6Mf30vQG22VKyMiehhbF2gq2aNubhb2i4WttGW-bnLEJqkX_-h6ZPo9SAiu3Y0f-I-SrcAEE0SGgYJ0612rTuErmEIQBArwFyYR2kl71AtSbywQo95BxdNiPSvYiXYh42oFY1Zy8q4bSGxRpvlKwnn' },
    { id: 2, title: 'Apartamento Luxo T3', cat: 'Apartamentos', price: '325.000€', loc: 'Centro', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsmrGCOu4jkmrCUifjQf5g0TNzgm0K0frgPZcmkouVIvDdb5E-BcN4_crWyX6r9LGsVQc1iTNB-0QqN4wliBb4b2YnZCtSIshrVur-5LQtzknnJn_GIM2u-r088J4GM155u4-v6Ow6QZuulM8av_9tetebG4vv_QcLMkmda-jJ9st_4iVd0BNYx51AiGbqm9jooHGmzP1RvFc2tw7pZmnALM-xD8QPj_TAwAoD7Nz7Bdl8sTAd0RZ5G9OaRuDlUUIgzpEhMgOHdEF_' },
    { id: 3, title: 'Casa de Campo Renovada', cat: 'Moradias', price: '420.000€', loc: 'Gavião', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC10reTxqjYCvIqgwtHiAsr94nIBkFZiThJWWcjiysUoYhksaPNmo-bBHXDNQv3bHs8VQJnLZjg5DPKNmOdCCAgVDIy4VllVri6RaovatzJfQGq4Ra3BJ_ofn0lUo0vlaTzs0k5hyuy5RMsi7wPpZ6jjrdc7rAgKdxpr_9y5wf_MIKfHKMxDW1ovYlmJzJey8WYUmnaxjHhTEn-XntAzBQpvtDuhjPFQmtSmv9ImXhGpcTNsRFWFWd3PRgAs0Kfk_mk0WMgG12qDXCL' },
    { id: 4, title: 'Terreno Urbanizável', cat: 'Terrenos', price: '125.000€', loc: 'Antas', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ym9_8l8BqX6yv_2o_pIu_zX4_c7c00S9Y6b5X7LpJ2LqX8c2o_zY4_c7c00S9Y6b5X7LpJ2LqX8c2o_zY4_c7c00S9Y6b5X7LpJ2LqX8c2o_zY4_c7c00S9Y6b5X7LpJ2LqX8c2o_zY4_c7c00S9Y6b5X7LpJ2LqX8c2o_zY4_c7c00S9Y6b5X7LpJ2LqX8c2o_zY4_c7c00S9Y6b5X7LpJ2LqX8c2o_zY4_c7c0' },
    { id: 5, title: 'Escritório Moderno', cat: 'Comercial', price: '185.000€', loc: 'Centro', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ym9_8l8BqX6yv_2o_pIu_zX4_c7c00S9Y6b5X7LpJ2LqX8c2o_zY4_c7c00S9Y6b5X7LpJ2LqX8c2o_zY4_c7c00S9Y6b5X7LpJ2LqX8c2o_zY4_c7c00S9Y6b5X7LpJ2LqX8c2o_zY4_c7c00S9Y6b5X7LpJ2LqX8c2o_zY4_c7c00S9Y6b5X7LpJ2LqX8c2o_zY4_c7c0' },
    { id: 6, title: 'Moradia T3 Luxo', cat: 'Moradias', price: '540.000€', loc: 'Famalicão', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCug8VOrKRAhPUhloGqHBmoW4t55XPC_fcBWh88rvW-vYtGi0FusP0tGOfVqKEfBWTgoPcy7zOKTHzlyCXHqADdxtnbacWKkor157isYIcT2ky93z9YIEihb-6Mf30vQG22VKyMiehhbF2gq2aNubhb2i4WttGW-bnLEJqkX_-h6ZPo9SAiu3Y0f-I-SrcAEE0SGgYJ0612rTuErmEIQBArwFyYR2kl71AtSbywQo95BxdNiPSvYiXYh42oFY1Zy8q4bSGxRpvlKwnn' },
  ];

  const filtered = filter === 'Todos' ? properties : properties.filter(p => p.cat === filter);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-surface">
      <Navbar />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-primary-container mb-6">Nosso Portfólio</h1>
          <p className="text-xl text-on-surface-variant font-medium">Explore as nossas propriedades exclusivas em Vila Nova de Famalicão.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-primary-container text-on-primary shadow-lg scale-105' 
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((prop) => (
            <div key={prop.id} className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/50">
              <div className="relative h-72 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={prop.img} 
                  alt={prop.title} 
                />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-secondary font-bold text-xs uppercase tracking-widest">{prop.cat}</span>
                  <h3 className="text-xl font-extrabold text-primary-container mt-1">{prop.title}</h3>
                  <p className="text-on-surface-variant text-sm flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-base">location_on</span> {prop.loc}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-surface-variant">
                  <span className="text-2xl font-black text-primary-container">{prop.price}</span>
                  <button className="text-primary-container font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver mais <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
