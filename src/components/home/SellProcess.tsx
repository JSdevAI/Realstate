import React from 'react';

export const SellProcess = () => {
  return (
    <section className="py-24 bg-surface" id="vender">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs">O seu parceiro</span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary-container mt-2">Como te ajudamos a vender casa</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="w-20 h-20 bg-surface-container-high rounded-full mx-auto flex items-center justify-center mb-8 group-hover:bg-primary-container group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-3xl">analytics</span>
            </div>
            <h3 className="text-2xl font-black mb-4 text-primary-container uppercase tracking-tight">Avaliação Rigorosa</h3>
            <p className="text-on-surface-variant font-medium text-lg">Avaliação do imóvel com base no mercado atual e dados reais de transações.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-surface-container-high rounded-full mx-auto flex items-center justify-center mb-8 group-hover:bg-primary-container group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-3xl">camera_alt</span>
            </div>
            <h3 className="text-2xl font-black mb-4 text-primary-container uppercase tracking-tight">Marketing Profissional</h3>
            <p className="text-on-surface-variant font-medium text-lg">Plano de marketing profissional com fotografia de alta qualidade, vídeo e ampla divulgação.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-surface-container-high rounded-full mx-auto flex items-center justify-center mb-8 group-hover:bg-primary-container group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-3xl">handshake</span>
            </div>
            <h3 className="text-2xl font-black mb-4 text-primary-container uppercase tracking-tight">Fecho Seguro</h3>
            <p className="text-on-surface-variant font-medium text-lg">Acompanhamento de visitas, propostas e negociação estratégica até à assinatura da escritura.</p>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <a 
            href="#contacto" 
            className="bg-[#D9A25F] text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all text-center"
          >
            Quero falar sobre o meu imóvel
          </a>
        </div>
      </div>
    </section>
  );
};
