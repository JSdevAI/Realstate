import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroScrollMotion } from '@/components/hero/HeroScrollMotion';
import { AboutSection } from '@/components/home/AboutSection';
import { FeaturedProperties } from '@/components/home/FeaturedProperties';
import { SellProcess } from '@/components/home/SellProcess';
import { Testimonials } from '@/components/home/Testimonials';
import { ContactSection } from '@/components/home/ContactSection';

export default function Home() {
  const framesDesktop = Array.from({ length: 72 }, (_, i) => `/hero/desktop/House_exterior_to_202603291831_${(i + 1).toString().padStart(3, '0')}.png`);
  const framesMobile = framesDesktop; // Default to desktop if mobile folder missing

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <HeroScrollMotion 
        framesDesktop={framesDesktop}
        framesMobile={framesMobile}
        headline="A Transparência é o Alicerce de cada Negócio"
        subheadline="Consultoria imobiliária dedicada em Vila Nova de Famalicão. Ajudamos proprietários e compradores a tomar decisões seguras e informadas."
        primaryCta={{ label: "Ver Imóveis", href: "#imoveis" }}
        secondaryCta={{ label: "Vender o meu Imóvel", href: "#vender" }}
      />

      <AboutSection />
      
      <FeaturedProperties />
      
      <SellProcess />
      
      <Testimonials />
      
      <ContactSection />
      
      <Footer />
    </main>
  );
}
