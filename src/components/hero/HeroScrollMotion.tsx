'use client';
import React, { useEffect, useRef, useState } from 'react';

type HeroScrollMotionProps = {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const HeroScrollMotion: React.FC<HeroScrollMotionProps> = ({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Responsive check
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Visibility tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Desktop: video ping-pong loop
  useEffect(() => {
    if (!isVisible || isMobile || !videoRef.current) return;

    const video = videoRef.current;
    let reverseId: number;

    const tick = () => {
      if (video.paused) video.play().catch(() => {});
      if (video.currentTime >= video.duration - 0.2) {
        video.pause();
        const scrub = () => {
          if (video.currentTime <= 0.1) {
            video.currentTime = 0;
            video.play().catch(() => {});
            return;
          }
          video.currentTime -= 0.1;
          reverseId = requestAnimationFrame(scrub);
        };
        reverseId = requestAnimationFrame(scrub);
      }
    };

    const interval = setInterval(tick, 200);
    return () => {
      clearInterval(interval);
      cancelAnimationFrame(reverseId);
    };
  }, [isVisible, isMobile]);

  return (
    <div ref={containerRef} className="relative w-full h-screen">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0c2d48]">

        {/* Desktop: MP4 ping-pong */}
        {!isMobile && (
          <video
            ref={videoRef}
            src="/House_exterior_to_202603291831.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: videoLoaded ? 1 : 0 }}
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
            onError={() => setVideoLoaded(false)}
          />
        )}

        {/* Mobile: frame 5 static image */}
        {isMobile && (
          <img
            src="/hero/desktop/House_exterior_to_202603291831_005.png"
            alt="Hero"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ pointerEvents: 'none' }}
          />
        )}

        {/* Cinematic overlays */}
        <div className="absolute inset-0 z-[15] bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 z-[15] bg-gradient-to-t from-black/40 to-transparent" />

        {/* Text + CTA — always visible, no dependency on video load */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl text-center md:text-left pt-24 animate-[fadeUp_0.8s_ease_0.2s_both]">
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter drop-shadow-xl">
                {headline}
              </h1>
              <p className="text-xl text-white font-medium mb-10 max-w-2xl leading-relaxed drop-shadow-lg">
                {subheadline}
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <a
                  href={primaryCta.href}
                  className="bg-primary-container text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl text-center"
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
