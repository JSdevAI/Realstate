import Image from 'next/image';
import Link from 'next/link';
import { properties } from '@/data/properties';

export const FeaturedProperties = () => {
  // Show only first 3 on home page
  const displayProperties = properties.slice(0, 3);

  return (
    <section className="py-24 bg-surface-container-low" id="imoveis">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs">Exclusividade</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary-container mt-2">Imóveis em destaque</h2>
          </div>
          <Link href="/gallery" className="hidden md:flex items-center gap-2 text-primary-container font-bold hover:gap-4 transition-all">
            Ver galeria completa <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayProperties.map((prop) => (
            <div key={prop.id} className="group bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <Link href={`/properties/${prop.id}`}>
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={prop.mainImage} 
                    alt={prop.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                  />
                  <span className={`absolute top-4 left-4 ${prop.statusColor} text-white px-4 py-1.5 rounded-full text-xs font-bold z-10`}>
                    {prop.status}
                  </span>
                </div>
              </Link>
              <div className="p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2 sm:gap-4">
                  <div className="flex-1 min-w-0 mr-0 sm:mr-4">
                    <h3 className="text-xl font-extrabold text-primary-container truncate leading-tight">{prop.title}</h3>
                    <p className="text-on-surface-variant text-sm flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-base">location_on</span> {prop.location}
                    </p>
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-primary-container whitespace-nowrap leading-none py-1">{prop.price}</span>
                </div>
                <div className="flex gap-4 mb-8 text-on-surface-variant text-sm font-medium">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bed</span> {prop.beds}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bathtub</span> {prop.baths}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">square_foot</span> {prop.area}</span>
                </div>
                <Link 
                  href={`/properties/${prop.id}`}
                  className="block w-full py-4 rounded-full border border-primary-container text-primary-container font-bold hover:bg-primary-container hover:text-white transition-all text-center"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 md:hidden">
          <Link href="/gallery" className="flex items-center justify-center gap-2 text-primary-container font-bold bg-white/50 py-4 rounded-full">
            Ver galeria completa <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
