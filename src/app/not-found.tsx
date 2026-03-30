'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  const [houseReady, setHouseReady] = React.useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;

    const processFrame = () => {
      if (!video || video.paused || video.ended) {
        animationFrameId = requestAnimationFrame(processFrame);
        return;
      }

      // Signal ready on first frame with data
      if (video.readyState >= 2 && !houseReady) {
        setHouseReady(true);
      }

      // Ensure canvas matches video resolution
      if (video.videoWidth > 0 && (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight)) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }

      if (canvas.width > 0 && canvas.height > 0) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = frame.data;

        // Target background color: #fbf9f6 (RGB: 251, 249, 246)
        const targetR = 251;
        const targetG = 249;
        const targetB = 246;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Detection: Checkerboard squares are usually pure white or light grey
          // Check for neutral color (low saturation)
          const isNeutral = Math.abs(r - g) < 20 && Math.abs(g - b) < 20 && Math.abs(r - b) < 20;
          
          // Check for brightness threshold (checkerboard is usually > 150)
          const isBright = r > 150 && g > 150 && b > 150;

          if (isNeutral && isBright) {
            data[i] = targetR;
            data[i + 1] = targetG;
            data[i + 2] = targetB;
            data[i + 3] = 255;
          }
        }

        ctx.putImageData(frame, 0, 0);
      }
      
      animationFrameId = requestAnimationFrame(processFrame);
    };

    animationFrameId = requestAnimationFrame(processFrame);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#fbf9f6] flex flex-col selection:bg-cyan-600 selection:text-white relative overflow-hidden">
      <style jsx global>{`
        @keyframes blink-404 {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-blink-error {
          animation: blink-404 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-asset {
          animation: float-subtle 6s ease-in-out infinite;
        }
        
        .text-outline-cyan {
          text-shadow: 0 0 40px rgba(8, 145, 178, 0.3);
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 z-[60]">
        <Navbar />
      </header>
      
      <section className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center relative z-20">
        {/* Background Depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-cyan-600/40"></span>
            <span className="text-[11px] font-black text-cyan-700 tracking-[0.5em] uppercase">Foundation Lost</span>
            <span className="w-12 h-[1px] bg-cyan-600/40"></span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-cyan-950 tracking-tighter mb-8 leading-[0.85] text-center">
            Estrutura não <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-500">encontrada.</span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed italic">
            "A arquitetura começa onde a engenharia termina, mas aqui ambos parecem ter falhado."
          </p>

          {/* ASSET AREA: Unified Video + Foreground Text */}
          <div className={`relative w-full max-w-2xl aspect-video mb-12 group animate-float-asset mx-auto transition-opacity duration-700 ${houseReady ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-cyan-400/5 rounded-full blur-[140px] pointer-events-none" />

            {/* Chroma Key Canvas (Visible) */}
            <canvas 
              ref={canvasRef}
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              style={{ zIndex: 1 }}
            />

            {/* 404 Overlay - ABSOLUTELY IN FRONT (z-index: 50) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 50 }}>
              <span className="text-[120px] md:text-[160px] font-black text-cyan-950 animate-blink-error select-none leading-none tracking-tighter drop-shadow-[0_0_50px_rgba(255,255,255,0.9)]">
                404
              </span>
            </div>

            {/* Video Source (Active but Invisible for Canvas) */}
            <video 
              ref={videoRef}
              src="/House_video_404.mp4"
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute opacity-0 pointer-events-none"
            />

            {/* Label Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-xl rounded-full border border-cyan-100 shadow-2xl transition-transform hover:scale-105" style={{ zIndex: 60 }}>
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </div>
              <span className="text-[10px] font-black text-cyan-950 uppercase tracking-[0.2em]">Conexão à Estrutura Interrompida</span>
            </div>
          </div>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 z-50">
            <Link 
              href="/"
              className="group relative inline-flex items-center gap-4 bg-cyan-950 text-white px-12 py-6 rounded-full text-lg font-black transition-all hover:bg-black hover:pr-14 active:scale-95 shadow-xl"
            >
              <span className="material-symbols-outlined text-2xl">grid_view</span>
              Explorar Portfólio
              <span className="material-symbols-outlined absolute right-6 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">arrow_forward</span>
            </Link>
            
            <Link 
              href="/#contacto"
              className="relative py-2 text-cyan-950 font-black text-lg group"
            >
              Falar com Arquiteto
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
