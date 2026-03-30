import Image from 'next/image';
import { ContactForm } from '../common/ContactForm';

export const ContactSection = () => {
  return (
    <section className="py-24 bg-surface" id="contacto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-4/12 space-y-10">
            <div className="space-y-6">
              <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs">VAMOS CONVERSAR?</span>
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-primary-container/10">
                <Image
                  src="/photo_andré_studio_v2.png"
                  alt="André Araújo"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5">
                  <h3 className="text-xl font-extrabold text-white leading-none">André Araújo</h3>
                  <p className="text-white/70 font-bold text-sm mt-1">Consultor Imobiliário</p>
                </div>
              </div>
              <h2 className="font-headline text-4xl font-extrabold text-primary-container leading-tight">Precisa de ajuda com o seu imóvel?</h2>
              <p className="text-on-surface-variant font-medium text-lg leading-relaxed">
                Estou aqui para simplificar o seu processo imobiliário. Conte-me como o posso ajudar.
              </p>
            </div>
            {/* Contact Items ... */}
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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
