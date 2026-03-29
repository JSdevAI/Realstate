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
    let requestRef: number;
    
    const handleScroll = () => {
      if (!containerRef.current || frames.length === 0) return;
      
      const updateFrame = () => {
        const { top, height } = containerRef.current!.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollableDistance = height - windowHeight;
        let progress = -top / scrollableDistance;
        progress = Math.max(0, Math.min(1, progress));

        const currentFrame = Math.min(
          Math.floor(progress * frames.length),
          frames.length - 1
        );
        
        setFrameIndex(currentFrame);
      };

      // Performance optimization: use RAF for smooth updates on high-freq scroll events
      cancelAnimationFrame(requestRef);
      requestRef = requestAnimationFrame(updateFrame);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestRef);
    };
  }, [frames]);

  // Advanced Preloading: Load frames around the current index
  useEffect(() => {
    if (frames.length > 0) {
      // Preload next 10 frames from current point
      const preloadWindow = 10;
      for (let i = frameIndex; i < Math.min(frameIndex + preloadWindow, frames.length); i++) {
        const img = new Image();
        img.src = frames[i];
      }
      // Also preload a few previous just in case of fast scroll up
      for (let i = Math.max(0, frameIndex - 3); i < frameIndex; i++) {
        const img = new Image();
        img.src = frames[i];
      }
    }
  }, [frameIndex, frames]);

  // Virtualization window: how many frames to keep in DOM
  const windowSize = isMobile ? 4 : 2; // Increased buffer for mobile to prevent flashing
  const visibleFrames = frames.map((src, index) => {
    const isVisible = Math.abs(index - frameIndex) <= windowSize;
    if (!isVisible) return null;

    const isActive = index === frameIndex;
    const isNeighbor = Math.abs(index - frameIndex) === 1; // Immediate neighbors for backstop

    return (
      <img
        key={src}
        src={src}
        alt={`Hero Frame ${index + 1}`}
        className={`absolute inset-0 w-full h-full object-cover`}
        // @ts-ignore - fetchPriority is supported in modern browsers but not yet in all TS types
        fetchPriority={isActive ? 'high' : 'auto'}
        style={{ 
          opacity: (isActive || isNeighbor) ? 1 : 0, // Keep neighbor at 1 for solid backstop
          zIndex: isActive ? 10 : (isNeighbor ? 5 : 0), // Layering Sandwich
          transition: 'opacity 50ms linear', // Faster but smoother
          objectPosition: isMobile ? '50% 35%' : 'center center',
          transform: `translateZ(0) ${isMobile ? 'scale(1.05)' : ''}`, // HW Acceleration
        }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    );
  });

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Background Frames - Virtualized */}
        {visibleFrames}
        
        {/* Removed beige overlay that was causing brown flashes */}

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
