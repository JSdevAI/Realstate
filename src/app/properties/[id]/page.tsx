import React from 'react';
import { properties } from '@/data/properties';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ContactForm } from '@/components/common/ContactForm';
import { PropertyGallery } from '@/components/properties/PropertyGallery';
import { BackButton } from '@/components/common/BackButton';
import { PanoramaViewer } from '@/components/properties/PanoramaViewer';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-24 lg:pb-0">

      {/* Back Button — fixed so it's always reachable */}
      <div className="fixed top-28 left-4 md:left-12 z-50">
        <BackButton />
      </div>

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] w-full overflow-hidden">
        <img
          src={property.mainImage}
          alt={property.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="container mx-auto px-6 pb-8 md:pb-0">
            <div className="max-w-4xl pt-0 md:pt-24">
              <span className={`${property.statusColor} text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block shadow-lg`}>
                {property.status}
              </span>
              <h1 className="text-3xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] mb-3 drop-shadow-2xl">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-white/90 text-base md:text-xl font-medium drop-shadow-md">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {property.fullLocation}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Preço', value: property.price },
                { label: 'Área', value: property.area },
                { label: 'Quartos', value: property.beds },
                { label: 'WCs', value: property.baths },
              ].map((spec) => (
                <div key={spec.label} className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm">
                  <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-1">{spec.label}</p>
                  <p className="text-lg font-bold text-neutral-900">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Mobile-only: inline contact CTA */}
            <a
              href="#solicitar-informacao"
              className="lg:hidden flex items-center justify-center gap-2 w-full py-4 rounded-full bg-primary-container text-white font-bold text-sm shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Solicitar Informação sobre este Imóvel
            </a>

            {/* Description */}
            <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900 mb-5">Descrição do Imóvel</h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-7">
                {property.description}
              </p>

              <div className="h-px bg-neutral-100 w-full mb-7" />

              <h3 className="text-xl font-bold text-neutral-900 mb-5">Características Principais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-neutral-700">
                    <div className="w-2 h-2 shrink-0 rounded-full bg-primary" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <PropertyGallery images={property.images} title={property.title} />

            {/* 360° Viewer */}
            {property.panorama && (
              <PanoramaViewer panoramaUrl={property.panorama} />
            )}
          </div>

          {/* Sidebar — sticky on desktop, inline on mobile */}
          <div className="lg:col-span-1" id="solicitar-informacao">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="bg-neutral-100 p-1 rounded-full flex items-center gap-4 pr-6">
                <img
                  src="/photo_andré_studio_v2.png"
                  alt="André Araújo"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-neutral-900 leading-none mb-1">André Araújo</h4>
                  <p className="text-xs text-neutral-500 font-medium">Consultor Imobiliário</p>
                </div>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-neutral-100 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
                <h3 className="text-xl font-bold text-neutral-900 mb-5 relative">Solicitar Informação</h3>
                <ContactForm minimal />
              </div>

              <Link
                href="/gallery"
                className="flex items-center justify-center gap-2 text-neutral-400 hover:text-primary transition-colors font-medium py-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar à Galeria
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-100 px-4 py-3 flex gap-3 shadow-2xl">
        <a
          href="tel:+351000000000"
          className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border-2 border-neutral-200 text-neutral-700 font-bold text-sm active:scale-95 transition-transform"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Ligar
        </a>
        <a
          href="#solicitar-informacao"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-primary-container text-white font-bold text-sm active:scale-95 transition-transform"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Solicitar Informação
        </a>
      </div>
    </main>
  );
}
