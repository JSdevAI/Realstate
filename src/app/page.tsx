import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroScrollMotion } from '@/components/hero/HeroScrollMotion';

const AboutSection = dynamic(() => import('@/components/home/AboutSection').then(mod => mod.AboutSection), { ssr: true });
const FeaturedProperties = dynamic(() => import('@/components/home/FeaturedProperties').then(mod => mod.FeaturedProperties), { ssr: true });
const SellProcess = dynamic(() => import('@/components/home/SellProcess').then(mod => mod.SellProcess), { ssr: true });
const Testimonials = dynamic(() => import('@/components/home/Testimonials').then(mod => mod.Testimonials), { ssr: true });
const ContactSection = dynamic(() => import('@/components/home/ContactSection').then(mod => mod.ContactSection), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <HeroScrollMotion
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
