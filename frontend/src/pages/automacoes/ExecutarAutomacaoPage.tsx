import React from 'react';
import ComingSoonButton from '../../components/ui/ComingSoonButton';

const MOCK_AUTOMACOES = [
    { id: 1, name: 'Sincronização de Status', icon: 'sync', description: 'Sincroniza status de entregas com o ERP automaticamente.', status: 'ready' },
    { id: 2, name: 'Notificação de Atrasos', icon: 'notifications_active', description: 'Envia alertas quando entregas estão atrasadas.', status: 'ready' },
    { id: 3, name: 'Atualização de Rastreio', icon: 'location_on', description: 'Coleta dados de rastreamento em tempo real.', status: 'ready' },
    { id: 4, name: 'Geração de Relatórios', icon: 'description', description: 'Gera relatórios diários automaticamente.', status: 'maintenance' },
    { id: 5, name: 'Conferência Automática', icon: 'fact_check', description: 'Valida documentos de entrega via OCR.', status: 'ready' },
];

const ExecutarAutomacaoPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                        <span>Automações</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-white">Executar</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Executar Automação</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Selecione e execute automações RPA disponíveis no sistema.</p>
                </div>
                <div className="flex gap-2">
                    <ComingSoonButton
                        label="Ver Histórico"
                        icon="history"
                        variant="outline"
                        featureTitle="Histórico de Execuções"
                        featureDescription="Visualize o histórico completo de todas as automações executadas."
                    />
                    <ComingSoonButton
                        label="Visualizar Logs"
                        icon="terminal"
                        variant="outline"
                        featureTitle="Logs de Automação"
                        featureDescription="Acompanhe logs detalhados de cada execução de automação."
                    />
                </div>
            </div>

            {/* Automations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {MOCK_AUTOMACOES.map((auto) => (
                    <div
                        key={auto.id}
                        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm transition-all duration-200 hover:shadow-md"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="size-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-2xl">{auto.icon}</span>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${auto.status === 'ready'
                                    ? 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400'
                                    : 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400'
                                }`}>
                                {auto.status === 'ready' ? 'Disponível' : 'Manutenção'}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{auto.name}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{auto.description}</p>
                        <ComingSoonButton
                            label="Executar"
                            icon="play_arrow"
                            variant="primary"
                            size="sm"
                            className="w-full"
                            featureTitle={`Executar: ${auto.name}`}
                            featureDescription="A execução de automações será habilitada após a configuração do ambiente RPA e integração com n8n."
                        />
                    </div>
                ))}
            </div>

            {/* Info Box */}
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">info</span>
                    <div>
                        <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">Ambiente de Automação</p>
                        <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                            As automações serão executadas via integração com n8n. Configure suas credenciais em Configurações → Integrações.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExecutarAutomacaoPage;
