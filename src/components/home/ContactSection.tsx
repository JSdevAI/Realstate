import Image from 'next/image';

export const ContactSection = () => {
  return (
    <section className="py-24 bg-surface" id="contacto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-4/12 space-y-10">
            <div className="space-y-6">
              <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs">VAMOS CONVERSAR?</span>
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary-container/10">
                  <Image 
                    src="/photo_andré_studio.png" 
                    alt="André Araújo" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-primary-container leading-none">André Araújo</h3>
                  <p className="text-on-surface-variant font-bold text-sm mt-2 opacity-70">Consultor Imobiliário</p>
                </div>
              </div>
              <h2 className="font-headline text-4xl font-extrabold text-primary-container leading-tight">Precisa de ajuda com o seu imóvel?</h2>
              <p className="text-on-surface-variant font-medium text-lg leading-relaxed">
                Estou aqui para simplificar o seu processo imobiliário. Conte-me como o posso ajudar.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary-container">Telefone</h4>
                  <p className="text-on-surface-variant">+351 000 000 000</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary-container">Email</h4>
                  <p className="text-on-surface-variant">andre.araujo@exemplo.pt</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary-container">Escritório</h4>
                  <p className="text-on-surface-variant">Famalicão, Braga, Portugal</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-8/12 bg-surface-container-lowest p-10 lg:p-14 rounded-3xl shadow-2xl shadow-primary-container/5 border border-white/50">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-primary-container uppercase tracking-wider ml-1">Nome Completo</label>
                  <input type="text" placeholder="João Silva" className="w-full px-6 py-4 rounded-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline/50 font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-primary-container uppercase tracking-wider ml-1">Email</label>
                  <input type="email" placeholder="joao@email.com" className="w-full px-6 py-4 rounded-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline/50 font-medium" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-primary-container uppercase tracking-wider ml-1">Telefone</label>
                  <input type="tel" placeholder="+351 900 000 000" className="w-full px-6 py-4 rounded-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline/50 font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-primary-container uppercase tracking-wider ml-1">Tipo de Imóvel</label>
                  <select className="w-full px-6 py-4 rounded-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container outline-none text-on-surface appearance-none font-medium">
                    <option>Moradia</option>
                    <option>Apartamento</option>
                    <option>Terreno</option>
                    <option>Outro</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-primary-container uppercase tracking-wider ml-1">Mensagem</label>
                <textarea rows={4} placeholder="Como podemos ajudar?" className="w-full px-8 py-6 rounded-[2rem] bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline/50 font-medium resize-none"></textarea>
              </div>
              <button className="w-full bg-primary-container text-on-primary py-5 rounded-full font-bold text-lg hover:bg-primary transition-all shadow-xl shadow-primary-container/20 uppercase tracking-widest">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
