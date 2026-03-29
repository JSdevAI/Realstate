'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Sobre', href: isHome ? '#sobre' : '/#sobre' },
    { name: 'Imóveis', href: isHome ? '#imoveis' : '/#imoveis' },
    { name: 'Vender casa', href: isHome ? '#vender' : '/#vender' },
    { name: 'Contacto', href: isHome ? '#contacto' : '/#contacto' },
    { name: 'Galeria', href: '/gallery' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-full mt-6 mx-auto max-w-7xl w-[95%] border border-white/20 shadow-[0px_20px_40px_rgba(12,45,72,0.06)] font-headline tracking-tight font-semibold">
      <Link href="/" className="text-2xl font-black text-cyan-950 dark:text-white tracking-tighter">
        AA
      </Link>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isGallery = link.href === '/gallery';
          const isActive = (isGallery && pathname === '/gallery') || (!isGallery && isHome && pathname === '/');
          
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                isActive && isGallery
                  ? 'text-cyan-900 dark:text-cyan-400 font-bold border-b-2 border-cyan-900 dark:border-cyan-400 pb-1'
                  : 'text-slate-600 dark:text-slate-400 hover:text-cyan-800 transition-colors'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="https://wa.me/#" 
          className="hidden md:flex bg-primary-container text-on-primary px-6 py-2.5 rounded-full hover:scale-105 transition-transform duration-300 items-center gap-2"
        >
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
        <div 
          ref={menuRef}
          className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl flex flex-col gap-4 border border-white/20 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-primary-container"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/#" 
            className="bg-primary-container text-on-primary px-6 py-3 rounded-full font-bold text-center mt-4"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};
