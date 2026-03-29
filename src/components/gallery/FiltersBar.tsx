import React from 'react';

export const FiltersBar = () => {
  return (
    <div className="bg-white border-b border-outline-variant/30 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-6 max-w-7xl py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input 
                type="text" 
                placeholder="Pesquisar localização..." 
                className="w-full md:w-64 pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant/50 rounded-full text-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
              />
            </div>
            
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              <select className="bg-surface-container-low border border-outline-variant/50 rounded-full px-4 py-2.5 text-sm font-medium text-on-surface focus:outline-none appearance-none pr-8 relative cursor-pointer min-w-[120px]">
                <option>Tipo</option>
                <option>Moradia</option>
                <option>Apartamento</option>
                <option>Terreno</option>
              </select>
              
              <select className="bg-surface-container-low border border-outline-variant/50 rounded-full px-4 py-2.5 text-sm font-medium text-on-surface focus:outline-none appearance-none pr-8 cursor-pointer min-w-[120px]">
                <option>Tipologia</option>
                <option>T1</option>
                <option>T2</option>
                <option>T3</option>
                <option>T4+</option>
              </select>

              <select className="bg-surface-container-low border border-outline-variant/50 rounded-full px-4 py-2.5 text-sm font-medium text-on-surface focus:outline-none appearance-none pr-8 cursor-pointer min-w-[120px]">
                <option>Preço</option>
                <option>Até 250k</option>
                <option>250k - 500k</option>
                <option>500k - 1M</option>
                <option>+ 1M</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm font-bold text-on-surface-variant">Ordenar por:</span>
            <select className="bg-transparent border-none text-primary-container font-bold text-sm focus:outline-none cursor-pointer">
              <option>Mais recentes</option>
              <option>Preço: Menor a Maior</option>
              <option>Preço: Maior a Menor</option>
            </select>
          </div>

        </div>
      </div>
    </div>
  );
};
