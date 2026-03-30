import Image from 'next/image';

export const AboutSection = () => {
  return (
    <section className="py-24 bg-surface" id="sobre">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-5/12 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-tertiary-fixed-dim rounded-full mix-blend-multiply opacity-20 filter blur-3xl"></div>
            <Image 
              className="rounded-lg shadow-2xl relative z-10 w-full object-cover aspect-[4/5]" 
              src="/photo_andré_studio_v2.png" 
              alt="André Araújo" 
              width={600}
              height={750}
              quality={100}
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-container rounded-full mix-blend-multiply opacity-10 filter blur-3xl"></div>
          </div>
          <div className="w-full lg:w-7/12 space-y-8">
            <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs">O Consultor</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary-container leading-tight">
              A transparência é o alicerce de cada negócio.
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed font-medium">
              Hoje em dia, comprar ou vender casa pode parecer um processo complexo. Na realidade, com a orientação certa, não tem de o ser. A equipa AA, liderada por André Araújo, consultor imobiliário em Vila Nova de Famalicão, ajuda proprietários e compradores a tomar decisões seguras, com informação clara, acompanhamento próximo e processos simples do primeiro contacto até à escritura.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-on-surface">
                <span className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm text-on-secondary-container">check_circle</span>
                </span>
                <span className="font-semibold">Informação clara em cada etapa.</span>
              </li>
              <li className="flex items-center gap-4 text-on-surface">
                <span className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm text-on-secondary-container">check_circle</span>
                </span>
                <span className="font-semibold">Processos simples e organizados.</span>
              </li>
              <li className="flex items-center gap-4 text-on-surface">
                <span className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm text-on-secondary-container">check_circle</span>
                </span>
                <span className="font-semibold">Acompanhamento próximo até à escritura.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
