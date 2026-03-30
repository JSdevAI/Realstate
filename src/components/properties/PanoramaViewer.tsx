'use client';
import React, { useEffect, useRef, useState } from 'react';

interface PanoramaViewerProps {
  panoramaUrl?: string;
}

export const PanoramaViewer: React.FC<PanoramaViewerProps> = ({ panoramaUrl }) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!panoramaUrl || !viewerRef.current) return;

    // Load Pannellum scripts dynamically if not already present
    const loadPannellum = () => {
      if (window.pannellum && viewerRef.current) {
        try {
          const viewer = window.pannellum.viewer(viewerRef.current, {
            type: 'equirectangular',
            panorama: panoramaUrl,
            autoLoad: true,
            autoRotate: -2,
            compass: false,
            showFullscreenCtrl: true,
            showControls: true,
            hfov: 100,
            // vaov: 180 is the default for equirectangular, 
            // removing the 60 degree restriction to make it "effectively 360"
          });
          setIsLoaded(true);
          return viewer;
        } catch (e) {
          console.error('Error initializing Pannellum:', e);
          setError(true);
        }
      }
    };

    let viewerInstance: any;

    if (!window.pannellum) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
      script.async = true;
      script.onload = () => {
        viewerInstance = loadPannellum();
      };
      script.onerror = () => {
        setError(true);
        console.error('Failed to load Pannellum script');
      };
      document.body.appendChild(script);
    } else {
      viewerInstance = loadPannellum();
    }

    return () => {
      if (viewerInstance) {
        try {
          viewerInstance.destroy();
        } catch (e) {
          // ignore destroy errors if already cleaned
        }
      }
      if (viewerRef.current) viewerRef.current.innerHTML = '';
    };
  }, [panoramaUrl]);

  if (!panoramaUrl) return null;

  return (
    <div className="py-24 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">
              Exploração Imersiva
            </span>
            <h2 className="text-4xl font-headline font-bold text-neutral-900 tracking-tight">
              Vista Interativa 360º
            </h2>
            <p className="text-neutral-600 mt-4 leading-relaxed">
              Sinta a atmosfera do imóvel sem sair de casa. Utilize o rato ou o toque para explorar cada ângulo do espaço com total liberdade.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-3 text-neutral-400">
              <span className="text-xs uppercase font-bold tracking-tighter">Arraste para rodar</span>
              <div className="w-12 h-[1px] bg-neutral-300" />
            </div>
          </div>
        </div>

        <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-neutral-200 aspect-video md:aspect-[21/9]">
          <div 
            ref={viewerRef} 
            className="w-full h-full"
          />
          
          {!isLoaded && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-100/80 backdrop-blur-sm z-10 transition-opacity">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
                <span className="text-neutral-500 font-medium">A carregar vista imersiva...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-50 z-10">
              <p className="text-red-500">Erro ao carregar o visualizador 360º. Por favor, tente novamente.</p>
            </div>
          )}
          
          <div className="absolute bottom-6 left-6 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-neutral-100">
              <span className="text-xs text-neutral-900 font-bold uppercase tracking-widest">Controlo Ativo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Global types for Pannellum
declare global {
  interface Window {
    pannellum: any;
  }
}
