import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface SubMenuItem {
  to: string;
  label: string;
  icon: string;
  badge?: string;
}

interface MenuSection {
  key: string;
  label: string;
  icon: string;
  to?: string;
  subItems?: SubMenuItem[];
  iconColor?: string;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['processos', 'central']);

  const menuSections: MenuSection[] = [
    {
      key: 'visao-geral',
      label: 'Visão Geral',
      icon: 'hub',
      to: '/visao-geral',
    },
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: 'dashboard',
      to: '/dashboard',
    },
    {
      key: 'processos',
      label: 'Processos',
      icon: 'assignment',
      subItems: [
        { to: '/processos', label: 'Lista de Processos', icon: 'list_alt' },
        { to: '/eventos', label: 'Eventos', icon: 'event_note' },
        { to: '/processos/nova-carga', label: 'Cadastro Manual', icon: 'edit_note', badge: 'Exceção' },
      ],
    },
    {
      key: 'automacoes',
      label: 'Automações',
      icon: 'memory',
      subItems: [
        { to: '/automacoes/executar', label: 'Executar Automação', icon: 'play_circle' },
        { to: '/automacoes/historico', label: 'Histórico de Execuções', icon: 'history' },
      ],
    },
    {
      key: 'mensagens',
      label: 'Mensagens',
      icon: 'mail',
      subItems: [
        { to: '/mensagens/recebidas', label: 'Mensagens Recebidas', icon: 'inbox' },
      ],
    },
    {
      key: 'indicadores',
      label: 'Indicadores',
      icon: 'analytics',
      subItems: [
        { to: '/indicadores/analitico', label: 'Visão Analítica', icon: 'monitoring' },
        { to: '/indicadores/executivo', label: 'Visão Executiva', icon: 'account_balance' },
        { to: '/indicadores/operacional', label: 'Métricas Operacionais', icon: 'speed' },
      ],
    },
    {
      key: 'configuracoes',
      label: 'Configurações',
      icon: 'settings',
      subItems: [
        { to: '/configuracoes/integracoes', label: 'Integrações', icon: 'hub' },
        { to: '/configuracoes/usuarios', label: 'Usuários', icon: 'group' },
        { to: '/configuracoes/auditoria', label: 'Auditoria', icon: 'manage_search' },
        { to: '/configuracoes/modo-teste', label: 'Modo Teste', icon: 'science', badge: 'Beta' },
      ],
    },
  ];

  const centralItems: SubMenuItem[] = [
    { to: '/central/dados', label: 'Consultar Dados', icon: 'database' },
    { to: '/central/ajuda', label: 'Ajuda do Sistema', icon: 'help' },
  ];

  const toggleSection = (key: string) => {
    setExpandedSections(prev =>
      prev.includes(key)
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  const isSubItemActive = (subItems: SubMenuItem[]) => {
    return subItems.some(item => location.pathname === item.to || location.pathname.startsWith(item.to + '/'));
  };

  const renderNavLink = (item: SubMenuItem, isNested = false) => (
    <NavLink
      key={item.to}
      to={item.to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group ${isNested ? 'ml-4' : ''
        } ${isActive
          ? 'bg-primary-light dark:bg-primary/20 text-primary-dark dark:text-primary font-semibold'
          : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span className={`material-symbols-outlined text-[20px] ${isActive ? 'icon-fill' : ''}`}>
            {item.icon}
          </span>
          <span className="text-sm flex-1">{item.label}</span>
          {item.badge && (
            <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 rounded-full">
              {item.badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  );

  const renderMenuSection = (section: MenuSection) => {
    const isExpanded = expandedSections.includes(section.key);
    const hasSubItems = section.subItems && section.subItems.length > 0;
    const isActive = section.to
      ? location.pathname === section.to
      : hasSubItems && isSubItemActive(section.subItems!);

    if (!hasSubItems && section.to) {
      return (
        <NavLink
          key={section.key}
          to={section.to}
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
                {section.icon}
              </span>
              <span className="text-sm">{section.label}</span>
            </>
          )}
        </NavLink>
      );
    }

    return (
      <div key={section.key} className="flex flex-col">
        <button
          onClick={() => toggleSection(section.key)}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full text-left ${isActive
            ? 'text-primary-dark dark:text-primary font-semibold'
            : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
            }`}
        >
          <span className={`material-symbols-outlined ${isActive ? 'icon-fill' : ''}`}>
            {section.icon}
          </span>
          <span className="text-sm flex-1">{section.label}</span>
          <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        </button>

        <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-0.5 mt-1">
            {section.subItems?.map(item => renderNavLink(item, true))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <aside className="hidden md:flex flex-col w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full shrink-0 z-30 transition-colors duration-200">
      <div className="flex flex-col h-full justify-between p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
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

          {/* Main Nav */}
          <nav className="flex flex-col gap-1">
            {menuSections.map(renderMenuSection)}
          </nav>

          {/* Central Inteligente Section */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 px-4 mb-2">
              <span className="material-symbols-outlined text-violet-500 text-[18px]">smart_toy</span>
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Central Inteligente</span>
            </div>
            <nav className="flex flex-col gap-1">
              {centralItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group ${isActive
                      ? 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 font-semibold'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={`material-symbols-outlined text-[20px] ${isActive ? 'icon-fill' : ''}`}>{item.icon}</span>
                      <span className="text-sm">{item.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>
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