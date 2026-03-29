import React from 'react';

export const ContactSection = () => {
  return (
    <section className="py-24 bg-surface" id="contacto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs font-label">Contacto</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary-container leading-tight mt-2 mb-8">
              Vamos falar sobre o seu próximo passo.
            </h2>
            <p className="text-lg text-on-surface-variant mb-12 font-medium">
              Quer pretenda vender a sua propriedade atual ou encontrar a casa dos seus sonhos, a nossa equipa está pronta para ajudar.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-container text-2xl">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary-container text-xl mb-1">Telefone</h4>
                  <p className="text-on-surface-variant text-lg">+351 912 345 678</p>
                  <p className="text-sm text-outline mt-1">Chamada para rede móvel nacional</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-container text-2xl">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary-container text-xl mb-1">Email</h4>
                  <p className="text-on-surface-variant text-lg">geral@andrearaujo.pt</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-container text-2xl">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary-container text-xl mb-1">Escritório</h4>
                  <p className="text-on-surface-variant text-lg">Rua de Santo António, 142<br/>4760-161 Vila Nova de Famalicão</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-outline-variant/20">
            <h3 className="font-headline text-2xl font-bold text-primary-container mb-8">Envie uma mensagem</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Nome</label>
                  <input type="text" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" placeholder="O seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Telefone</label>
                  <input type="tel" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" placeholder="O seu contacto" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant">Email</label>
                <input type="email" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" placeholder="O seu email" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant">Motivo do Contacto</label>
                <select className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors appearance-none">
                  <option>Quero vender um imóvel</option>
                  <option>Quero comprar um imóvel</option>
                  <option>Outro assunto</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant">Mensagem</label>
                <textarea rows={4} className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>

              <button type="button" className="w-full bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary transition-colors flex items-center justify-center gap-2">
                Enviar Mensagem
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
