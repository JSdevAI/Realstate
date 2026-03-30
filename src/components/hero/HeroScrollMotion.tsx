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
  const [heroVisible, setHeroVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [gifReady, setGifReady] = useState(false);

  const MOBILE_GIF = '/hero/hero-mobile.gif';
  const MOBILE_PLACEHOLDER = '/hero/desktop/House_exterior_to_202603291831_001.png';

  // Responsive check — only run on client
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Mobile: show content overlay as soon as placeholder is visible
  useEffect(() => {
    if (isMobile) setHeroVisible(true);
  }, [isMobile]);

  // Mobile: preload GIF fully before injecting into DOM
  // This guarantees it always starts at frame 1 with no mid-cycle flash
  useEffect(() => {
    if (!isMobile) return;
    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (!cancelled) setGifReady(true);
    };
    img.src = MOBILE_GIF;
    return () => {
      cancelled = true;
    };
  }, [isMobile]);

  // Visibility tracking (pause desktop video when off-screen)
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
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">

        {/* ── Desktop: MP4 ping-pong ── */}
        {!isMobile && (
          <video
            ref={videoRef}
            src="/House_exterior_to_202603291831.mp4"
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: heroVisible ? 1 : 0, transition: 'opacity 1s' }}
            onLoadedData={() => setHeroVisible(true)}
          />
        )}

        {/* ── Mobile: static placeholder → GIF once fully preloaded ── */}
        {isMobile && (
          <div className="absolute inset-0 w-full h-full">
            {/* Placeholder (frame 1) — visible instantly, fades out when GIF is ready */}
            <img
              src={MOBILE_PLACEHOLDER}
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: gifReady ? 0 : 1,
                transition: 'opacity 0.5s ease',
                pointerEvents: 'none',
              }}
            />
            {/* GIF only mounted after full download — always starts at frame 1 */}
            {gifReady && (
              <img
                src={MOBILE_GIF}
                alt="Hero animation"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ pointerEvents: 'none' }}
              />
            )}
          </div>
        )}

        {/* Cinematic overlays */}
        <div className="absolute inset-0 z-[15] bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 z-[15] bg-gradient-to-t from-black/40 to-transparent" />

        {/* Text + CTA */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6">
            <div
              className={`max-w-3xl text-center md:text-left pt-24 transition-all duration-1000 transform ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
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
