import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-cyan-950 dark:bg-black w-full pt-16 pb-8 flex flex-col items-center px-10 font-body text-sm leading-relaxed">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col gap-6">
          <div className="text-xl font-bold text-white font-headline">André Araújo Real Estate</div>
          <p className="text-slate-300 pr-8">Curadoria imobiliária de luxo no Norte de Portugal. Transformando metros quadrados em espaços de arte e vida.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">Legal</h4>
          <a href="#" className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform">Política de Privacidade</a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform">Cookies</a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform">Termos e Condições</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">Social</h4>
          <a href="#" className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform">Facebook</a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform">Instagram</a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform">LinkedIn</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">Escritório</h4>
          <p className="text-slate-300">Rua de Santo António, 142,<br/>4760-161 Vila Nova de Famalicão, Portugal</p>
          <p className="text-white font-medium">+351 912 345 678</p>
        </div>
      </div>
      <div className="max-w-7xl w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="text-slate-300 text-xs">
          © 2024 André Araújo Real Estate. Todos os direitos reservados. NIF: 234567890. Vila Nova de Famalicão, Portugal.
        </div>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-white/50">language</span>
          <span className="material-symbols-outlined text-white/50">verified_user</span>
        </div>
      </div>
    </footer>
  );
};
