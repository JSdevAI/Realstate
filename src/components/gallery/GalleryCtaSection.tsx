import React from 'react';
import Link from 'next/link';

export const GalleryCtaSection = () => {
  return (
    <section className="py-24 bg-primary-container relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          Não encontrou o que procurava?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Temos imóveis em carteira privada que não estão listados publicamente. Fale connosco e diga-nos o que procura.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#contacto" className="bg-white text-primary-container px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
            Contactar Equipa
          </Link>
          <a href="https://wa.me/#" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">chat</span>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
