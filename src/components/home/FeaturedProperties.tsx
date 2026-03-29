import React from 'react';
import Link from 'next/link';

export const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: 'Moradia T4 Minimalista',
      location: 'Famalicão, Braga',
      price: '650.000€',
      beds: '4 Quads',
      baths: '3 WCs',
      area: '320m²',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCug8VOrKRAhPUhloGqHBmoW4t55XPC_fcBWh88rvW-vYtGi0FusP0tGOfVqKEfBWTgoPcy7zOKTHzlyCXHqADdxtnbacWKkor157isYIcT2ky93z9YIEihb-6Mf30vQG22VKyMiehhbF2gq2aNubhb2i4WttGW-bnLEJqkX_-h6ZPo9SAiu3Y0f-I-SrcAEE0SGgYJ0612rTuErmEIQBArwFyYR2kl71AtSbywQo95BxdNiPSvYiXYh42oFY1Zy8q4bSGxRpvlKwnn',
      status: 'Disponível',
      statusColor: 'bg-[#6FA49F]'
    },
    {
      id: 2,
      title: 'Apartamento Luxo T3',
      location: 'Centro, Famalicão',
      price: '325.000€',
      beds: '3 Quads',
      baths: '2 WCs',
      area: '160m²',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsmrGCOu4jkmrCUifjQf5g0TNzgm0K0frgPZcmkouVIvDdb5E-BcN4_crWyX6r9LGsVQc1iTNB-0QqN4wliBb4b2YnZCtSIshrVur-5LQtzknnJn_GIM2u-r088J4GM155u4-v6Ow6QZuulM8av_9tetebG4vv_QcLMkmda-jJ9st_4iVd0BNYx51AiGbqm9jooHGmzP1RvFc2tw7pZmnALM-xD8QPj_TAwAoD7Nz7Bdl8sTAd0RZ5G9OaRuDlUUIgzpEhMgOHdEF_',
      status: 'Reservado',
      statusColor: 'bg-[#D9A25F]'
    },
    {
      id: 3,
      title: 'Casa de Campo Renovada',
      location: 'Gavião, Famalicão',
      price: '420.000€',
      beds: '5 Quads',
      baths: '4 WCs',
      area: '450m²',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC10reTxqjYCvIqgwtHiAsr94nIBkFZiThJWWcjiysUoYhksaPNmo-bBHXDNQv3bHs8VQJnLZjg5DPKNmOdCCAgVDIy4VllVri6RaovatzJfQGq4Ra3BJ_ofn0lUo0vlaTzs0k5hyuy5RMsi7wPpZ6jjrdc7rAgKdxpr_9y5wf_MIKfHKMxDW1ovYlmJzJey8WYUmnaxjHhTEn-XntAzBQpvtDuhjPFQmtSmv9ImXhGpcTNsRFWFWd3PRgAs0Kfk_mk0WMgG12qDXCL',
      status: 'Vendido',
      statusColor: 'bg-[#0C2D48]/70'
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low" id="imoveis">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs">Exclusividade</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary-container mt-2">Imóveis em destaque</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((prop) => (
            <div key={prop.id} className="group bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={prop.image} 
                  alt={prop.title} 
                />
                <span className={`absolute top-4 left-4 ${prop.statusColor} text-white px-4 py-1.5 rounded-full text-xs font-bold`}>
                  {prop.status}
                </span>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-primary-container">{prop.title}</h3>
                    <p className="text-on-surface-variant text-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">location_on</span> {prop.location}
                    </p>
                  </div>
                  <span className="text-2xl font-black text-primary-container">{prop.price}</span>
                </div>
                <div className="flex gap-4 mb-8 text-on-surface-variant text-sm font-medium">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bed</span> {prop.beds}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bathtub</span> {prop.baths}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">square_foot</span> {prop.area}</span>
                </div>
                <button className="w-full py-4 rounded-full border border-primary-container text-primary-container font-bold hover:bg-primary-container hover:text-white transition-all">
                  Ver detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <Link 
            href="/gallery" 
            className="bg-primary text-on-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-primary-container transition-all flex items-center gap-3 shadow-lg"
          >
            Ver todos os imóveis
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
