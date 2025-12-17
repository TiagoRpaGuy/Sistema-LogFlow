import React from 'react';
import PageContext from '../../components/ui/PageContext';
import ComingSoonButton from '../../components/ui/ComingSoonButton';
import {
    XAxis, YAxis, Tooltip, ResponsiveContainer,
    CartesianGrid, Legend, AreaChart, Area, BarChart, Bar, Cell, Line
} from 'recharts';

// Mock data for analytical indicators
const automationEvolutionData = [
    { month: 'Jul', automatizados: 320, hibridos: 180, manuais: 620 },
    { month: 'Ago', automatizados: 380, hibridos: 200, manuais: 540 },
    { month: 'Set', automatizados: 420, hibridos: 220, manuais: 480 },
    { month: 'Out', automatizados: 480, hibridos: 240, manuais: 400 },
    { month: 'Nov', automatizados: 520, hibridos: 260, manuais: 340 },
    { month: 'Dez', automatizados: 580, hibridos: 280, manuais: 260 },
];

const maturityData = [
    { name: 'Nível 1 - Manual', value: 15, color: '#94a3b8' },
    { name: 'Nível 2 - Parcial', value: 25, color: '#f59e0b' },
    { name: 'Nível 3 - Híbrido', value: 30, color: '#3b82f6' },
    { name: 'Nível 4 - Automatizado', value: 20, color: '#16a34a' },
    { name: 'Nível 5 - Inteligente', value: 10, color: '#8b5cf6' },
];

const globalKpis = [
    { label: 'Taxa de Automação', value: '52%', trend: '+8%', period: 'vs. trimestre anterior', icon: 'smart_toy', positive: true },
    { label: 'Processos Ativos', value: '1,240', trend: '+5%', period: 'vs. mês anterior', icon: 'inventory_2', positive: true },
    { label: 'Volume de Execuções', value: '48.2k', trend: '+12%', period: 'este mês', icon: 'play_circle', positive: true },
    { label: 'Índice de Maturidade', value: '3.2', trend: '+0.4', period: 'escala 1-5', icon: 'trending_up', positive: true },
];

const IndicadoresAnaliticoPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                        <span>Indicadores</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-white">Visão Analítica</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Indicadores Analíticos</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Análise consolidada da saúde dos processos e evolução da automação.</p>
                </div>
                <div className="flex gap-2">
                    <ComingSoonButton
                        label="Exportar"
                        icon="download"
                        variant="outline"
                        featureTitle="Exportar Análise"
                        featureDescription="Exporte os indicadores analíticos em PDF ou Excel."
                    />
                    <ComingSoonButton
                        label="Comparar Períodos"
                        icon="compare_arrows"
                        variant="outline"
                        featureTitle="Comparativo de Períodos"
                        featureDescription="Compare indicadores entre diferentes períodos."
                    />
                </div>
            </div>

            {/* Context */}
            <PageContext
                icon="analytics"
                title="Visão Analítica Consolidada"
                description="Indicadores globais que representam a saúde geral dos processos e automações. Acompanhe tendências, evolução e maturidade do sistema."
                role="Analisar tendências, identificar padrões e acompanhar a evolução da automação."
                variant="info"
            />

            {/* Global KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {globalKpis.map((kpi) => (
                    <div
                        key={kpi.label}
                        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">{kpi.icon}</span>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${kpi.positive
                                ? 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400'
                                : 'bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400'
                                }`}>
                                {kpi.trend}
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{kpi.label}</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{kpi.value}</p>
                        <p className="text-xs text-slate-400 mt-1">{kpi.period}</p>
                    </div>
                ))}
            </div>

            {/* Evolution Chart */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Evolução da Automação</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Transição de processos manuais para automatizados</p>
                    </div>
                </div>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={automationEvolutionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorAuto" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" strokeOpacity={0.3} />
                            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} />
                            <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
                            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                            <Legend />
                            <Area type="monotone" dataKey="automatizados" name="Automatizados" stroke="#16a34a" strokeWidth={2} fill="url(#colorAuto)" />
                            <Line type="monotone" dataKey="hibridos" name="Híbridos" stroke="#3b82f6" strokeWidth={2} />
                            <Line type="monotone" dataKey="manuais" name="Manuais" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Maturity Index */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Índice de Maturidade</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Distribuição de processos por nível de maturidade</p>
                    </div>
                </div>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={maturityData} margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                            <XAxis type="number" tick={{ fontSize: 12, fill: '#94a3b8' }} unit="%" />
                            <YAxis dataKey="name" type="category" width={140} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                            <Bar dataKey="value" barSize={20} radius={[0, 8, 8, 0]}>
                                {maturityData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Info */}
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">info</span>
                    <div>
                        <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">Sobre esta visão</p>
                        <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                            Os indicadores analíticos são atualizados diariamente e representam métricas consolidadas.
                            Para análise operacional detalhada, acesse "Métricas Operacionais".
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndicadoresAnaliticoPage;
