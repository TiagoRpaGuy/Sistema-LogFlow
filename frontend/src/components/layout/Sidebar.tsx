import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navItems = [
    { to: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { to: '/processos', label: 'Processos', icon: 'assignment' },
    { to: '/automacoes', label: 'Automações', icon: 'memory' },
    { to: '/eventos', label: 'Auditoria', icon: 'manage_search' },
    { to: '/equipe', label: 'Equipe', icon: 'groups' },
    { to: '/configuracoes', label: 'Configurações', icon: 'settings' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full shrink-0 z-30 transition-colors duration-200">
      <div className="flex flex-col h-full justify-between p-6">
        <div className="flex flex-col gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-green-600 to-green-800 text-white shadow-lg shadow-green-200 dark:shadow-green-900/50">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-none tracking-tight">LogiFlow</h1>
              <span className="text-slate-500 dark:text-slate-400 text-xs font-medium">Governança</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                    ? 'bg-primary-light dark:bg-primary/20 text-primary-dark dark:text-primary font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`material-symbols-outlined ${isActive ? 'icon-fill' : ''}`}>
                      {item.icon}
                    </span>
                    <span className="text-sm">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Storage Widget */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors duration-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Armazenamento</span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">75%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-2 overflow-hidden">
            <div className="bg-primary h-1.5 rounded-full w-3/4"></div>
          </div>
          <p className="text-xs text-slate-400">7.5 GB de 10 GB usados</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;