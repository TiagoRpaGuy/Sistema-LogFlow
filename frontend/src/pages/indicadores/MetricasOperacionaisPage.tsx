import React, { useState } from 'react';
import PageContext from '../../components/ui/PageContext';
import ComingSoonButton from '../../components/ui/ComingSoonButton';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    LineChart, Line, CartesianGrid
} from 'recharts';

// Operational metrics mock data
const executionMetrics = [
    { name: 'Sincronização de Status', execucoes: 2840, tempo: '2.1s', sucesso: 99.2, falhas: 23 },
    { name: 'Atualização de Rastreio', execucoes: 1890, tempo: '5.3s', sucesso: 97.8, falhas: 42 },
    { name: 'Conferência de Carga', execucoes: 1540, tempo: '3.8s', sucesso: 98.5, falhas: 23 },
    { name: 'Notificação de Atrasos', execucoes: 920, tempo: '1.2s', sucesso: 99.8, falhas: 2 },
    { name: 'Geração de Relatórios', execucoes: 450, tempo: '12.5s', sucesso: 95.1, falhas: 22 },
];

const hourlyPerformance = [
    { hour: '00h', execucoes: 45, tempo: 2.1 },
    { hour: '04h', execucoes: 32, tempo: 1.8 },
    { hour: '08h', execucoes: 180, tempo: 3.2 },
    { hour: '10h', execucoes: 220, tempo: 3.8 },
    { hour: '12h', execucoes: 150, tempo: 2.9 },
    { hour: '14h', execucoes: 240, tempo: 4.1 },
    { hour: '16h', execucoes: 200, tempo: 3.5 },
    { hour: '18h', execucoes: 120, tempo: 2.4 },
    { hour: '20h', execucoes: 80, tempo: 2.0 },
    { hour: '22h', execucoes: 55, tempo: 1.9 },
];

const slaMetrics = [
    { label: 'SLA Cumprido', value: '94.2%', target: '93%', status: 'ok' },
    { label: 'Tempo Médio', value: '3.4s', target: '< 5s', status: 'ok' },
    { label: 'Taxa de Erro', value: '1.8%', target: '< 3%', status: 'ok' },
    { label: 'Reprocessamentos', value: '45', target: '< 100', status: 'ok' },
];

const recentFailures = [
    { id: 1, processo: 'Atualização de Rastreio', erro: 'Timeout na API externa', data: '17/12 08:42', tentativas: 3 },
    { id: 2, processo: 'Geração de Relatórios', erro: 'Memória insuficiente', data: '17/12 07:15', tentativas: 2 },
    { id: 3, processo: 'Conferência de Carga', erro: 'Dados inválidos', data: '16/12 18:30', tentativas: 1 },
];

const MetricasOperacionaisPage: React.FC = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('hoje');

    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                        <span>Indicadores</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-white">Métricas Operacionais</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Métricas Operacionais</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Performance técnica detalhada dos processos e automações.</p>
                </div>
                <div className="flex gap-2">
                    <div className="flex bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
                        {['hoje', '7 dias', '30 dias'].map((period) => (
                            <button
                                key={period}
                                onClick={() => setSelectedPeriod(period)}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${selectedPeriod === period
                                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                                    : 'text-slate-500 dark:text-slate-400'
                                    }`}
                            >
                                {period.charAt(0).toUpperCase() + period.slice(1)}
                            </button>
                        ))}
                    </div>
                    <ComingSoonButton
                        label="Filtros"
                        icon="filter_list"
                        variant="outline"
                        featureTitle="Filtros Avançados"
                        featureDescription="Filtre por processo, robô, período ou status."
                    />
                </div>
            </div>

            {/* Context */}
            <PageContext
                icon="speed"
                title="Performance Operacional"
                description="Métricas técnicas e granulares de execução. Acompanhe tempo de resposta, taxa de sucesso, falhas e SLAs por processo."
                role="Monitorar performance, identificar gargalos e acompanhar execuções."
                variant="automation"
            />

            {/* SLA Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {slaMetrics.map((metric) => (
                    <div
                        key={metric.label}
                        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{metric.label}</span>
                            <span className="size-2 rounded-full bg-green-500"></span>
                        </div>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">{metric.value}</p>
                        <p className="text-xs text-slate-400 mt-1">Meta: {metric.target}</p>
                    </div>
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Hourly Performance */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Performance por Hora</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Execuções e tempo médio</p>
                        </div>
                    </div>
                    <div className="h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={hourlyPerformance} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" strokeOpacity={0.3} />
                                <XAxis dataKey="hour" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                                <YAxis yAxisId="left" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: '#94a3b8' }} unit="s" />
                                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                                <Line yAxisId="left" type="monotone" dataKey="execucoes" name="Execuções" stroke="#16a34a" strokeWidth={2} dot={{ r: 3 }} />
                                <Line yAxisId="right" type="monotone" dataKey="tempo" name="Tempo (s)" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Process Performance */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Execuções por Processo</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Volume de execuções</p>
                        </div>
                    </div>
                    <div className="h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart layout="vertical" data={executionMetrics} margin={{ top: 0, right: 30, left: 0, bottom: 5 }}>
                                <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                                <YAxis dataKey="name" type="category" width={130} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                                <Bar dataKey="execucoes" fill="#16a34a" barSize={16} radius={[0, 8, 8, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Detailed Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Detalhamento por Processo</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800 text-xs uppercase text-slate-500 dark:text-slate-400 font-bold">
                                <th className="px-6 py-3">Processo</th>
                                <th className="px-6 py-3">Execuções</th>
                                <th className="px-6 py-3">Tempo Médio</th>
                                <th className="px-6 py-3">Taxa Sucesso</th>
                                <th className="px-6 py-3">Falhas</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {executionMetrics.map((proc, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{proc.name}</td>
                                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{proc.execucoes.toLocaleString()}</td>
                                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{proc.tempo}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-sm font-semibold ${proc.sucesso >= 98 ? 'text-green-600' : 'text-amber-600'}`}>
                                            {proc.sucesso}%
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{proc.falhas}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Recent Failures */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-500">error</span>
                    Falhas Recentes
                </h2>
                <div className="space-y-3">
                    {recentFailures.map((failure) => (
                        <div
                            key={failure.id}
                            className="flex items-center justify-between p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800"
                        >
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-red-800 dark:text-red-300">{failure.processo}</p>
                                <p className="text-xs text-red-600 dark:text-red-400 mt-1">{failure.erro}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-red-600 dark:text-red-400">{failure.data}</p>
                                <p className="text-xs text-red-500 dark:text-red-500">{failure.tentativas} tentativas</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MetricasOperacionaisPage;
