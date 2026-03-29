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
  const [progress, setProgress] = useState(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const frames = isMobile ? framesMobile : framesDesktop;

  // Smoothing Loop (Lerp) - Only active on mobile to absorb flick scrolls
  useEffect(() => {
    let rafId: number;
    
    const smoothUpdate = () => {
      const target = targetProgressRef.current;
      const current = currentProgressRef.current;
      
      // Snappier on desktop, smooth on mobile
      const lerpFactor = isMobile ? 0.1 : 1.0; 
      const next = current + (target - current) * lerpFactor;
      
      if (Math.abs(next - current) > 0.0001) {
        currentProgressRef.current = next;
        setProgress(next);
      }
      rafId = requestAnimationFrame(smoothUpdate);
    };

    rafId = requestAnimationFrame(smoothUpdate);
    return () => cancelAnimationFrame(rafId);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || frames.length === 0) return;
      
      const { top, height } = containerRef.current!.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDistance = height - windowHeight;
      let rawProgress = -top / totalDistance;
      rawProgress = Math.max(0, Math.min(1, rawProgress));

      targetProgressRef.current = rawProgress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [frames]);

  // Derive animation values
  // Animation finishes at 85%, holding the last frame until the end
  const frameProgress = Math.min(1, progress / 0.85);
  const frameIndex = Math.min(Math.floor(frameProgress * frames.length), frames.length - 1);
  
  // Text fades out during the last 15% (holding phase)
  const overlayOpacity = Math.max(0, 1 - (progress - 0.85) / 0.1); 

  // Advanced Preloading
  useEffect(() => {
    if (frames.length > 0) {
      const preloadWindow = 15;
      for (let i = frameIndex; i < Math.min(frameIndex + preloadWindow, frames.length); i++) {
        const img = new Image();
        img.src = frames[i];
      }
      for (let i = Math.max(0, frameIndex - 5); i < frameIndex; i++) {
        const img = new Image();
        img.src = frames[i];
      }
    }
  }, [frameIndex, frames]);

  // Virtualization window
  const windowSize = isMobile ? 5 : 2; 
  const visibleFrames = frames.map((src, index) => {
    const isVisible = Math.abs(index - frameIndex) <= windowSize;
    if (!isVisible) return null;

    const isActive = index === frameIndex;
    const isNeighbor = Math.abs(index - frameIndex) === 1;

    return (
      <img
        key={src}
        src={src}
        alt={`Hero Frame ${index + 1}`}
        className={`absolute inset-0 w-full h-full object-cover`}
        // @ts-ignore
        fetchPriority={isActive ? 'high' : 'auto'}
        style={{ 
          opacity: (isActive || isNeighbor) ? 1 : 0, 
          zIndex: isActive ? 10 : (isNeighbor ? 5 : 0), 
          transition: isMobile ? 'none' : 'opacity 50ms linear',
          objectPosition: isMobile ? '50% 35%' : 'center center',
          transform: `translateZ(0) ${isMobile ? 'scale(1.05)' : ''}`,
        }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    );
  });

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full bg-black ${isMobile ? 'h-[750vh]' : 'h-[350vh]'}`}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Background Frames - Virtualized */}
        {visibleFrames}
        
        {/* Content Overlay - with dynamic fade-out */}
        <div 
          className="absolute inset-0 z-20 flex items-center"
          style={{ 
            opacity: overlayOpacity,
            visibility: overlayOpacity === 0 ? 'hidden' : 'visible',
            transition: 'opacity 50ms linear'
          }}
        >
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
