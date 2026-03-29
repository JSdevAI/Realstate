import React from 'react';
import { testimonials } from '../../data/testimonials';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-primary-container relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-container font-bold tracking-widest uppercase text-xs font-label">Testemunhos</span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white leading-tight mt-2">
            A confiança dos nossos clientes.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-tertiary-fixed-dim" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  ))}
                </div>
                <p className="text-xl text-white font-medium leading-relaxed mb-8">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/20" />
                <div>
                  <h4 className="text-white font-bold font-headline">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
