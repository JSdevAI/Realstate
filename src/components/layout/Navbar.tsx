'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-full mt-6 mx-auto max-w-7xl w-[95%] border border-white/20 shadow-[0px_20px_40px_rgba(12,45,72,0.06)] font-headline tracking-tight font-semibold">
      <Link href="/" className="text-2xl font-black text-cyan-950 dark:text-white tracking-tighter">AA</Link>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {isHome ? (
          <>
            <a href="#sobre" className="text-slate-600 dark:text-slate-400 hover:text-cyan-800 transition-colors">Sobre</a>
            <a href="#imoveis" className="text-slate-600 dark:text-slate-400 hover:text-cyan-800 transition-colors">Imóveis</a>
            <a href="#vender" className="text-slate-600 dark:text-slate-400 hover:text-cyan-800 transition-colors">Vender casa</a>
            <a href="#contacto" className="text-slate-600 dark:text-slate-400 hover:text-cyan-800 transition-colors">Contacto</a>
          </>
        ) : (
          <>
            <Link href="/#sobre" className="text-slate-600 dark:text-slate-400 hover:text-cyan-800 transition-colors">Sobre</Link>
            <Link href="/#imoveis" className="text-slate-600 dark:text-slate-400 hover:text-cyan-800 transition-colors">Imóveis</Link>
            <Link href="/#vender" className="text-slate-600 dark:text-slate-400 hover:text-cyan-800 transition-colors">Vender casa</Link>
            <Link href="/#contacto" className="text-slate-600 dark:text-slate-400 hover:text-cyan-800 transition-colors">Contacto</Link>
          </>
        )}
        <Link href="/gallery" className={`${!isHome ? 'text-cyan-900 dark:text-cyan-400 font-bold border-b-2 border-cyan-900 dark:border-cyan-400 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-cyan-800 transition-colors'}`}>Galeria</Link>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://wa.me/#" className="hidden md:flex bg-primary-container text-on-primary px-6 py-2.5 rounded-full hover:scale-105 transition-transform duration-300 items-center gap-2">
          <span className="material-symbols-outlined text-sm">chat</span>
          Falar no WhatsApp
        </a>
        
        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-primary-container p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl flex flex-col gap-4 border border-white/20 md:hidden">
           {isHome ? (
            <>
              <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-primary-container">Sobre</a>
              <a href="#imoveis" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-primary-container">Imóveis</a>
              <a href="#vender" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-primary-container">Vender casa</a>
              <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-primary-container">Contacto</a>
            </>
          ) : (
            <>
              <Link href="/#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-primary-container">Sobre</Link>
              <Link href="/#imoveis" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-primary-container">Imóveis</Link>
              <Link href="/#vender" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-primary-container">Vender casa</Link>
              <Link href="/#contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-primary-container">Contacto</Link>
            </>
          )}
          <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-primary-container">Galeria</Link>
          <a href="https://wa.me/#" className="bg-primary-container text-on-primary px-6 py-3 rounded-full font-bold text-center mt-4">
            Falar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};
