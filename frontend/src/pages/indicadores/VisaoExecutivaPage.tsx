import React from 'react';
import PageContext from '../../components/ui/PageContext';
import ComingSoonButton from '../../components/ui/ComingSoonButton';

// Executive highlights mock data
const executiveHighlights = [
    {
        type: 'positive',
        title: 'Redução de custos operacionais',
        value: '-12%',
        description: 'Economia de R$ 45.000 este mês com automação de processos',
        icon: 'savings'
    },
    {
        type: 'positive',
        title: 'Aumento da produtividade',
        value: '+23%',
        description: 'Mais processos executados com a mesma equipe',
        icon: 'trending_up'
    },
    {
        type: 'negative',
        title: 'Atrasos em entregas SP',
        value: '8 casos',
        description: 'Região Sudeste apresentou atrasos acima da média',
        icon: 'warning'
    },
    {
        type: 'neutral',
        title: 'SLA geral mantido',
        value: '94.2%',
        description: 'Dentro da meta de 93% estabelecida',
        icon: 'verified'
    },
];

const strategicAlerts = [
    { priority: 'high', message: 'Integração com transportadora XYZ pendente há 5 dias', action: 'Verificar' },
    { priority: 'medium', message: '3 automações apresentaram falhas recorrentes', action: 'Analisar' },
    { priority: 'low', message: 'Nova versão do sistema disponível para atualização', action: 'Agendar' },
];

const impactMetrics = [
    { label: 'Horas economizadas', value: '1.240h', subtext: 'este mês', icon: 'schedule' },
    { label: 'Processos automatizados', value: '847', subtext: 'de 1.240 total', icon: 'smart_toy' },
    { label: 'ROI estimado', value: '340%', subtext: 'sobre investimento', icon: 'payments' },
    { label: 'Erros evitados', value: '156', subtext: 'por automação', icon: 'shield' },
];

const VisaoExecutivaPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                        <span>Indicadores</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-white">Visão Executiva</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Visão Executiva</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Leitura estratégica para tomada de decisão rápida.</p>
                </div>
                <ComingSoonButton
                    label="Gerar Relatório Executivo"
                    icon="summarize"
                    variant="primary"
                    featureTitle="Relatório Executivo"
                    featureDescription="Gere um relatório resumido para apresentação à diretoria."
                />
            </div>

            {/* Context */}
            <PageContext
                icon="account_balance"
                title="Painel Estratégico"
                description="Destaques, alertas e insights resumidos para decisão executiva. Foco em impacto, ganhos, perdas e áreas que demandam atenção."
                role="Tomar decisões estratégicas baseadas em indicadores de alto nível."
                variant="default"
            />

            {/* Executive Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {executiveHighlights.map((item, idx) => (
                    <div
                        key={idx}
                        className={`p-5 rounded-2xl border shadow-sm transition-all hover:shadow-md ${item.type === 'positive'
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                            : item.type === 'negative'
                                ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`size-12 rounded-xl flex items-center justify-center ${item.type === 'positive'
                                ? 'bg-green-100 dark:bg-green-900/40'
                                : item.type === 'negative'
                                    ? 'bg-red-100 dark:bg-red-900/40'
                                    : 'bg-slate-100 dark:bg-slate-800'
                                }`}>
                                <span className={`material-symbols-outlined text-2xl ${item.type === 'positive'
                                    ? 'text-green-600 dark:text-green-400'
                                    : item.type === 'negative'
                                        ? 'text-red-600 dark:text-red-400'
                                        : 'text-slate-600 dark:text-slate-400'
                                    }`}>{item.icon}</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <span className={`text-2xl font-bold ${item.type === 'positive'
                                        ? 'text-green-700 dark:text-green-400'
                                        : item.type === 'negative'
                                            ? 'text-red-700 dark:text-red-400'
                                            : 'text-slate-900 dark:text-white'
                                        }`}>{item.value}</span>
                                </div>
                                <p className={`text-sm font-semibold mt-1 ${item.type === 'positive'
                                    ? 'text-green-800 dark:text-green-300'
                                    : item.type === 'negative'
                                        ? 'text-red-800 dark:text-red-300'
                                        : 'text-slate-800 dark:text-white'
                                    }`}>{item.title}</p>
                                <p className={`text-xs mt-1 ${item.type === 'positive'
                                    ? 'text-green-700 dark:text-green-400'
                                    : item.type === 'negative'
                                        ? 'text-red-700 dark:text-red-400'
                                        : 'text-slate-500 dark:text-slate-400'
                                    }`}>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Impact Metrics */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">bolt</span>
                    Impacto da Automação
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {impactMetrics.map((metric) => (
                        <div key={metric.label} className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-green-400 mb-2">{metric.icon}</span>
                            <p className="text-2xl font-bold">{metric.value}</p>
                            <p className="text-xs text-slate-400">{metric.label}</p>
                            <p className="text-xs text-slate-500 mt-1">{metric.subtext}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Strategic Alerts */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-500">notifications_active</span>
                    Alertas Gerenciais
                </h2>
                <div className="space-y-3">
                    {strategicAlerts.map((alert, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`size-3 rounded-full ${alert.priority === 'high' ? 'bg-red-500' :
                                    alert.priority === 'medium' ? 'bg-amber-500' : 'bg-blue-500'
                                    }`}></div>
                                <span className="text-sm text-slate-700 dark:text-slate-300">{alert.message}</span>
                            </div>
                            <ComingSoonButton
                                label={alert.action}
                                variant="ghost"
                                size="sm"
                                featureTitle={`Ação: ${alert.action}`}
                                featureDescription="Esta ação será habilitada após a configuração do sistema."
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Info */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">info</span>
                    <div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-300">Sobre esta visão</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            A Visão Executiva destaca os pontos mais relevantes para tomada de decisão rápida.
                            Para detalhes técnicos, acesse "Métricas Operacionais".
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaoExecutivaPage;
