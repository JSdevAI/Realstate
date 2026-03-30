'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="group flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/50 rounded-full text-neutral-600 hover:text-primary hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
    >
      <div className="bg-neutral-50 p-1 rounded-full group-hover:bg-primary/10 transition-colors">
        <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
      </div>
      <span className="text-sm font-bold tracking-tight uppercase">Voltar</span>
    </button>
  );
};
