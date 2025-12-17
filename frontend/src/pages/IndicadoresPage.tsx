import React, { useState } from 'react';
import ComingSoonButton from '../components/ui/ComingSoonButton';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
    LineChart, Line, CartesianGrid, Legend,
    PieChart, Pie, AreaChart, Area
} from 'recharts';

const TABS = ['Ver Indicadores', 'Visão Executiva', 'Métricas Operacionais'];

const kpisData = [
    { name: 'Entregas no Prazo', value: '94.2%', trend: '+2.1%', icon: 'local_shipping', color: 'green' },
    { name: 'Taxa de Sucesso', value: '99.1%', trend: '+0.5%', icon: 'verified', color: 'blue' },
    { name: 'Tempo Médio Entrega', value: '2.4 dias', trend: '-0.3 dias', icon: 'schedule', color: 'purple' },
    { name: 'Custo por Entrega', value: 'R$ 42,50', trend: '-5%', icon: 'payments', color: 'orange' },
];

const deliveryTrendData = [
    { month: 'Jul', entregas: 1200, meta: 1100 },
    { month: 'Ago', entregas: 1350, meta: 1200 },
    { month: 'Set', entregas: 1280, meta: 1300 },
    { month: 'Out', entregas: 1450, meta: 1350 },
    { month: 'Nov', entregas: 1520, meta: 1400 },
    { month: 'Dez', entregas: 1680, meta: 1500 },
];

const regionData = [
    { name: 'Sudeste', value: 45, color: '#16a34a' },
    { name: 'Sul', value: 25, color: '#3b82f6' },
    { name: 'Nordeste', value: 18, color: '#f59e0b' },
    { name: 'Centro-Oeste', value: 8, color: '#8b5cf6' },
    { name: 'Norte', value: 4, color: '#94a3b8' },
];

const IndicadoresPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Indicadores</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Acompanhamento de KPIs e métricas de performance logística.</p>
                </div>
                <div className="flex gap-2">
                    <ComingSoonButton
                        label="Exportar Relatório"
                        icon="download"
                        variant="outline"
                        featureTitle="Exportar Relatório"
                        featureDescription="Exporte relatórios em PDF ou Excel para análise externa."
                    />
                    <ComingSoonButton
                        label="Configurar Alertas"
                        icon="notifications"
                        variant="outline"
                        featureTitle="Alertas de KPIs"
                        featureDescription="Configure alertas automáticos quando um indicador sair da meta."
                    />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                {TABS.map((tab, idx) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(idx)}
                        className={`flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === idx
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {kpisData.map((kpi) => (
                    <div
                        key={kpi.name}
                        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm transition-all hover:shadow-md"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className={`size-10 rounded-lg bg-${kpi.color}-100 dark:bg-${kpi.color}-900/30 flex items-center justify-center`}>
                                <span className={`material-symbols-outlined text-${kpi.color}-600 dark:text-${kpi.color}-400`}>{kpi.icon}</span>
                            </div>
                            <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded-full">
                                {kpi.trend}
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{kpi.name}</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{kpi.value}</p>
                    </div>
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Delivery Trend */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Tendência de Entregas</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Últimos 6 meses vs Meta</p>
                        </div>
                    </div>
                    <div className="h-[280px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={deliveryTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorEntregas" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" strokeOpacity={0.3} />
                                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} />
                                <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
                                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                                <Legend />
                                <Area type="monotone" dataKey="entregas" name="Entregas" stroke="#16a34a" strokeWidth={3} fillOpacity={1} fill="url(#colorEntregas)" />
                                <Line type="monotone" dataKey="meta" name="Meta" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Region Distribution */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Distribuição por Região</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">% de entregas por região</p>
                        </div>
                    </div>
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={regionData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                                    {regionData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                </Pie>
                                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center mt-4">
                        {regionData.map((item) => (
                            <div key={item.name} className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">{item.name} ({item.value}%)</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Info Box */}
            <div className="p-4 rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-violet-600 dark:text-violet-400">insights</span>
                    <div>
                        <p className="text-sm font-semibold text-violet-800 dark:text-violet-300">Central de Análise</p>
                        <p className="text-xs text-violet-700 dark:text-violet-400 mt-1">
                            Os indicadores são atualizados a cada 15 minutos. Configure metas personalizadas em Configurações → Indicadores.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndicadoresPage;
