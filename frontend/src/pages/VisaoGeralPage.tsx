import React from 'react';
import { useNavigate } from 'react-router-dom';

const modules = [
    {
        id: 'entrada',
        title: 'Canais de Entrada',
        icon: 'input',
        color: 'from-blue-500 to-cyan-500',
        description: 'WhatsApp, E-mail, API e integrações externas alimentam o sistema automaticamente.',
        items: ['WhatsApp Business', 'E-mail SMTP', 'APIs REST', 'Webhooks'],
    },
    {
        id: 'automacao',
        title: 'Motor de Automação',
        icon: 'memory',
        color: 'from-purple-500 to-violet-600',
        description: 'Processos RPA e workflows automatizados processam e categorizam dados.',
        items: ['n8n Workflows', 'Scripts RPA', 'Regras de Negócio', 'Validações'],
    },
    {
        id: 'governanca',
        title: 'Governança',
        icon: 'verified_user',
        color: 'from-green-500 to-emerald-600',
        description: 'Painel de controle para observação, análise e tomada de decisão.',
        items: ['Processos', 'Eventos', 'Auditoria', 'Alertas'],
    },
    {
        id: 'saida',
        title: 'Indicadores & Relatórios',
        icon: 'analytics',
        color: 'from-orange-500 to-amber-500',
        description: 'Métricas, KPIs e visões executivas para gestão estratégica.',
        items: ['KPIs', 'Dashboards', 'Relatórios', 'Exportações'],
    },
];

const flowSteps = [
    { icon: 'cloud_download', label: 'Dados chegam automaticamente', color: 'text-blue-500' },
    { icon: 'auto_fix_high', label: 'Automações processam', color: 'text-purple-500' },
    { icon: 'visibility', label: 'Você observa e analisa', color: 'text-green-500' },
    { icon: 'trending_up', label: 'Decisões baseadas em dados', color: 'text-orange-500' },
];

const VisaoGeralPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-800 text-white shadow-xl shadow-green-200 dark:shadow-green-900/50 mb-4">
                    <span className="material-symbols-outlined text-3xl">hub</span>
                </div>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">LogiFlow</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                    Plataforma de Governança, Automação e Observabilidade Logística
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-4 max-w-xl mx-auto">
                    O LogiFlow centraliza informações de múltiplos canais, processa automaticamente e oferece
                    uma visão unificada para tomada de decisão. Você atua como <strong>observador, analista e decisor</strong>.
                </p>
            </div>

            {/* Flow Diagram */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6 text-center">Fluxo do Sistema</h2>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {flowSteps.map((step, idx) => (
                        <React.Fragment key={step.label}>
                            <div className="flex flex-col items-center gap-2 min-w-[140px]">
                                <div className={`size-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center ${step.color}`}>
                                    <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                                </div>
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 text-center">{step.label}</span>
                            </div>
                            {idx < flowSteps.length - 1 && (
                                <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 hidden md:block">arrow_forward</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modules.map((module) => (
                    <div
                        key={module.id}
                        className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm transition-all duration-200 hover:shadow-lg"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className={`size-12 rounded-xl bg-gradient-to-br ${module.color} text-white flex items-center justify-center shadow-lg`}>
                                <span className="material-symbols-outlined text-2xl">{module.icon}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{module.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{module.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {module.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* User Role Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
                <div className="max-w-2xl mx-auto text-center">
                    <span className="material-symbols-outlined text-4xl text-green-400 mb-4">person_check</span>
                    <h2 className="text-2xl font-bold mb-3">Seu Papel no Sistema</h2>
                    <p className="text-slate-300 mb-6">
                        No LogiFlow, você não digita dados — você <strong>governa processos</strong>.
                        Os dados nascem automaticamente via integrações. Seu papel é observar, analisar,
                        tomar decisões e intervir apenas quando necessário.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { icon: 'visibility', label: 'Observar', desc: 'Monitore processos em tempo real' },
                            { icon: 'analytics', label: 'Analisar', desc: 'Identifique padrões e exceções' },
                            { icon: 'gavel', label: 'Decidir', desc: 'Tome decisões informadas' },
                        ].map((role) => (
                            <div key={role.label} className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                                <span className="material-symbols-outlined text-2xl text-green-400 mb-2">{role.icon}</span>
                                <p className="font-bold text-sm">{role.label}</p>
                                <p className="text-xs text-slate-400 mt-1">{role.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Access */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Acesso Rápido</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                        { icon: 'dashboard', label: 'Dashboard', to: '/dashboard', color: 'bg-green-500' },
                        { icon: 'list_alt', label: 'Processos', to: '/processos', color: 'bg-blue-500' },
                        { icon: 'analytics', label: 'Indicadores', to: '/indicadores', color: 'bg-orange-500' },
                        { icon: 'settings', label: 'Configurações', to: '/configuracoes/integracoes', color: 'bg-slate-500' },
                    ].map((item) => (
                        <button
                            key={item.label}
                            onClick={() => navigate(item.to)}
                            className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                        >
                            <div className={`size-10 rounded-lg ${item.color} text-white flex items-center justify-center`}>
                                <span className="material-symbols-outlined">{item.icon}</span>
                            </div>
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                                {item.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VisaoGeralPage;
