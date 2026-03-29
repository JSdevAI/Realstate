import React from 'react';

export const SellProcess = () => {
  return (
    <section className="py-24 bg-surface" id="vender">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs font-label">O Processo</span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary-container leading-tight mt-2">
            Vender casa não tem de ser complicado.
          </h2>
          <p className="text-lg text-on-surface-variant mt-6 font-medium">
            Um método claro, passo a passo, para garantir o melhor negócio, no menor tempo possível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-outline-variant to-transparent opacity-50"></div>

          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-full bg-surface-container-lowest border border-outline-variant shadow-sm flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:border-primary-container transition-all duration-500">
              <span className="material-symbols-outlined text-4xl text-primary-container">real_estate_agent</span>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-tertiary-fixed-dim text-on-tertiary-container font-bold flex items-center justify-center text-sm">1</div>
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary-container mb-4">Avaliação & Estratégia</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Análise de mercado rigorosa para definir o preço certo e a melhor estratégia de posicionamento do seu imóvel.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-full bg-surface-container-lowest border border-outline-variant shadow-sm flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:border-primary-container transition-all duration-500">
              <span className="material-symbols-outlined text-4xl text-primary-container">campaign</span>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-tertiary-fixed-dim text-on-tertiary-container font-bold flex items-center justify-center text-sm">2</div>
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary-container mb-4">Marketing & Visitas</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Fotografia profissional, vídeo e promoção direcionada para atrair os compradores certos. Gestão total das visitas.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-full bg-surface-container-lowest border border-outline-variant shadow-sm flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:border-primary-container transition-all duration-500">
              <span className="material-symbols-outlined text-4xl text-primary-container">handshake</span>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-tertiary-fixed-dim text-on-tertiary-container font-bold flex items-center justify-center text-sm">3</div>
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary-container mb-4">Negociação & Fecho</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Defesa dos seus interesses na negociação e acompanhamento burocrático completo até ao dia da escritura.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <a href="#contacto" className="inline-flex items-center gap-2 bg-primary-container text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
            Quero vender a minha casa
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};
