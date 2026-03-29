import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-cyan-950 dark:bg-black w-full pt-16 pb-8 flex flex-col items-center px-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <span className="text-xl font-bold text-white mb-6 block">AA</span>
            <p className="text-slate-300 max-w-xs font-body text-sm leading-relaxed">
              Consultoria imobiliária de excelência em Vila Nova de Famalicão. Transformamos o processo de compra e venda numa experiência transparente e gratificante.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold mb-2">Serviços</h4>
              <Link className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="/#vender">Vender Casa</Link>
              <Link className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="/#imoveis">Comprar Casa</Link>
              <Link className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="#">Investimento</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold mb-2">Empresa</h4>
              <Link className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="/#sobre">Sobre nós</Link>
              <Link className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="/#contacto">Contactos</Link>
              <Link className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="#">Blog</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold mb-2">Redes Sociais</h4>
              <a className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="#">Facebook</a>
              <a className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="#">Instagram</a>
              <a className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between gap-6">
          <p className="text-slate-300 text-sm font-body leading-relaxed">
            © 2024 André Araújo Real Estate. Todos os direitos reservados. NIF: 000000000. Vila Nova de Famalicão, Braga.
          </p>
          <div className="flex gap-6 justify-center">
            <Link className="text-slate-300 hover:text-white text-xs" href="#">Política de Privacidade</Link>
            <Link className="text-slate-300 hover:text-white text-xs" href="#">Cookies</Link>
            <Link className="text-slate-300 hover:text-white text-xs" href="#">Termos e Condições</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
