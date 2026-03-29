import React from 'react';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Maria & João P.',
      text: 'O André foi fundamental na venda da nossa casa. Todo o processo foi simples e transparente, sempre fomos informados de cada passo. Recomendo vivamente!',
      role: 'Vendedores'
    },
    {
      name: 'Frederico S.',
      text: 'Finalmente um consultor que ouve e compreende as nossas necessidades. A negociação foi estratégica e o acompanhamento próximo até à escritura.',
      role: 'Comprador'
    },
    {
      name: 'Ana L.',
      text: 'Profissionalismo e honestidade. Senti-me segura durante todo o processo de compra do meu primeiro apartamento. Equipa de excelência.',
      role: 'Compradora'
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low" id="prova-social">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs">Testemunhos</span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary-container mt-2">O que dizem os nossos clientes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-white/50">
              <div className="flex gap-1 mb-6 text-tertiary-fixed-dim">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="material-symbols-outlined fill-1">star</span>
                ))}
              </div>
              <p className="text-on-surface-variant font-medium text-lg leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center font-bold text-primary-container">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary-container">{review.name}</h4>
                  <p className="text-on-surface-variant text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
