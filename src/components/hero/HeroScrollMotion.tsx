'use client';
import React, { useEffect, useRef, useState } from 'react';

type HeroScrollMotionProps = {
  framesDesktop: string[];
  framesMobile: string[];
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const HeroScrollMotion: React.FC<HeroScrollMotionProps> = ({
  framesDesktop,
  framesMobile,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const frames = isMobile ? framesMobile : framesDesktop;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || frames.length === 0) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress (0 to 1) while the container is scrolling up
      const scrollableDistance = height - windowHeight;
      let progress = -top / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      const currentFrame = Math.min(
        Math.floor(progress * frames.length),
        frames.length - 1
      );
      
      setFrameIndex(currentFrame);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [frames]);

  // Preload first few frames to ensure smooth initial scroll
  useEffect(() => {
    if (frames.length > 0) {
      frames.slice(0, 10).forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [frames]);

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Background Frames */}
        {frames.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Hero Frame ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-0 ${
              index === frameIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
            // Hide broken images if they fail to load
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ))}
        
        {/* Subtle beige overlay */}
        <div className="absolute inset-0 bg-[#F5F5DC]/10 z-10"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl text-center md:text-left pt-24">
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter drop-shadow-lg">
                {headline}
              </h1>
              <p className="text-xl text-white font-medium mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                {subheadline}
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href={primaryCta.href} 
                  className="bg-primary-container text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl text-center"
                >
                  {primaryCta.label}
                </a>
                <a 
                  href={secondaryCta.href} 
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
                >
                  {secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
