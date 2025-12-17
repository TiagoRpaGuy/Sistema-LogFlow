import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

const handlePlaceholder = () => {
  alert('Funcionalidade em desenvolvimento.');
};

const Header: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();

  // Simple breadcrumb logic based on path
  const getBreadcrumbs = () => {
    const path = location.pathname.split('/')[1];
    const subPath = location.pathname.split('/')[2];

    // Central Inteligente routes
    if (path === 'central') {
      if (subPath === 'dados') return ['Central Inteligente', 'Consultar Dados'];
      if (subPath === 'ajuda') return ['Central Inteligente', 'Ajuda do Sistema'];
      return ['Central Inteligente'];
    }

    switch (path) {
      case 'dashboard': return ['Visão Geral', 'Executivo'];
      case 'processos': return ['Governança', 'Processos Operacionais'];
      case 'eventos': return ['Monitoramento', 'Registro de Eventos'];
      case 'automacoes': return ['Automações', 'Gerenciamento RPA'];
      case 'equipe': return ['Equipe', 'Membros'];
      case 'configuracoes': return ['Sistema', 'Configurações'];
      default: return ['LogiGov', 'Sistema'];
    }
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 px-8 py-4 bg-white dark:bg-slate-900 shrink-0 z-20 sticky top-0 transition-colors duration-200">
      <div className="flex items-center gap-4">
        <button
          className="md:hidden p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          onClick={handlePlaceholder}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb}>
              {index > 0 && <span className="text-slate-300 dark:text-slate-600">/</span>}
              <span className={index === breadcrumbs.length - 1 ? "text-slate-900 dark:text-white font-semibold" : "text-slate-500 dark:text-slate-400"}>
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex w-72 items-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10 transition-all rounded-full px-4 py-2">
          <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
          <input
            className="bg-transparent border-none focus:outline-none text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 text-sm w-full ml-2"
            placeholder="Buscar..."
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            className="relative p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all duration-200 hover:scale-110"
            onClick={toggleTheme}
            title={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            <span className="material-symbols-outlined">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Notifications */}
          <button
            className="relative p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all duration-200 hover:scale-110"
            onClick={handlePlaceholder}
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>

          <div className="flex items-center gap-3 pl-3 border-l border-slate-200 dark:border-slate-700">
            <div className="text-right hidden lg:block">
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">Carlos Mendes</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Gerente de Ops</p>
            </div>
            <img
              src="https://picsum.photos/100/100"
              alt="Profile"
              className="size-9 rounded-full border border-slate-200 dark:border-slate-700 object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;