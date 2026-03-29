'use client';

import React, { useEffect } from 'react';
import { HeroScrollMotion } from '../components/hero/HeroScrollMotion';
import { AboutSection } from '../components/home/AboutSection';
import { FeaturedProperties } from '../components/home/FeaturedProperties';
import { SellProcess } from '../components/home/SellProcess';
import { Testimonials } from '../components/home/Testimonials';
import { ContactSection } from '../components/home/ContactSection';

export default function Home() {
  useEffect(() => {
    // Handle hash scrolling on mount
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Load all 72 frames
  const framesDesktop = Array.from({ length: 72 }, (_, i) => 
    `/hero/desktop/House_exterior_to_202603291831_${String(i + 1).padStart(3, '0')}.png`
  );
  
  const framesMobile = Array.from({ length: 72 }, (_, i) => 
    `/hero/desktop/House_exterior_to_202603291831_${String(i + 1).padStart(3, '0')}.png`
  );

  return (
    <main className="flex-grow">
      <HeroScrollMotion 
        framesDesktop={framesDesktop}
        framesMobile={framesMobile}
        headline="A sua casa. O nosso compromisso."
        subheadline="Consultoria imobiliária de excelência em Vila Nova de Famalicão. Encontramos o espaço perfeito para a sua história."
        primaryCta={{ label: 'Ver Imóveis', href: '#imoveis' }}
        secondaryCta={{ label: 'Vender Casa', href: '#vender' }}
      />
      
      <div id="sobre"><AboutSection /></div>
      <div id="imoveis"><FeaturedProperties /></div>
      <div id="processo"><SellProcess /></div>
      <Testimonials />
      <div id="contacto"><ContactSection /></div>
    </main>
  );
}
