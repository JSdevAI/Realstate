import React from 'react';

export const ContactForm = ({ title = "Enviar Mensagem", minimal = false }) => {
  return (
    <form className={`space-y-6 ${minimal ? 'p-0' : ''}`}>
      <div className={`grid grid-cols-1 ${minimal ? 'gap-6' : 'md:grid-cols-2 gap-8'}`}>
        <div className="space-y-3">
          <label className="text-xs font-bold text-primary-container uppercase tracking-wider ml-1">Nome Completo</label>
          <input type="text" placeholder="João Silva" className="w-full px-6 py-4 rounded-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline/50 font-medium" />
        </div>
        <div className="space-y-3">
          <label className="text-xs font-bold text-primary-container uppercase tracking-wider ml-1">Email</label>
          <input type="email" placeholder="joao@email.com" className="w-full px-6 py-4 rounded-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline/50 font-medium" />
        </div>
      </div>
      <div className={`grid grid-cols-1 ${minimal ? 'gap-6' : 'md:grid-cols-2 gap-8'}`}>
        <div className="space-y-3">
          <label className="text-xs font-bold text-primary-container uppercase tracking-wider ml-1">Telefone</label>
          <input type="tel" placeholder="+351 900 000 000" className="w-full px-6 py-4 rounded-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline/50 font-medium" />
        </div>
        {!minimal && (
          <div className="space-y-3">
            <label className="text-xs font-bold text-primary-container uppercase tracking-wider ml-1">Tipo de Imóvel</label>
            <select className="w-full px-6 py-4 rounded-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container outline-none text-on-surface appearance-none font-medium">
              <option>Moradia</option>
              <option>Apartamento</option>
              <option>Terreno</option>
              <option>Outro</option>
            </select>
          </div>
        )}
      </div>
      <div className="space-y-3">
        <label className="text-xs font-bold text-primary-container uppercase tracking-wider ml-1">Mensagem</label>
        <textarea rows={minimal ? 3 : 4} placeholder="Como podemos ajudar?" className="w-full px-8 py-6 rounded-[2rem] bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline/50 font-medium resize-none"></textarea>
      </div>
      <button className="w-full bg-primary-container text-on-primary py-4 rounded-full font-bold text-lg hover:bg-primary transition-all shadow-xl shadow-primary-container/20 uppercase tracking-widest">
        {title}
      </button>
    </form>
  );
};
