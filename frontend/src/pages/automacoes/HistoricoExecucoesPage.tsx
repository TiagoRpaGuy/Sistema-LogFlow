import React from 'react';
import ComingSoonButton from '../../components/ui/ComingSoonButton';

const MOCK_HISTORICO = [
    { id: 1, automacao: 'Sincronização de Status', data: '17/12/2024 08:30', duracao: '2m 15s', status: 'success', registros: 142 },
    { id: 2, automacao: 'Notificação de Atrasos', data: '17/12/2024 07:00', duracao: '45s', status: 'success', registros: 8 },
    { id: 3, automacao: 'Atualização de Rastreio', data: '16/12/2024 18:00', duracao: '5m 32s', status: 'error', registros: 0 },
    { id: 4, automacao: 'Geração de Relatórios', data: '16/12/2024 12:00', duracao: '1m 20s', status: 'success', registros: 1 },
    { id: 5, automacao: 'Conferência Automática', data: '16/12/2024 10:15', duracao: '3m 45s', status: 'success', registros: 56 },
    { id: 6, automacao: 'Sincronização de Status', data: '16/12/2024 08:30', duracao: '2m 08s', status: 'success', registros: 138 },
];

const HistoricoExecucoesPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                        <span>Automações</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-white">Histórico</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Histórico de Execuções</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Acompanhe o histórico de todas as automações executadas.</p>
                </div>
                <div className="flex gap-2">
                    <ComingSoonButton
                        label="Exportar"
                        icon="download"
                        variant="outline"
                        featureTitle="Exportar Histórico"
                        featureDescription="Exporte o histórico de execuções para análise externa."
                    />
                    <ComingSoonButton
                        label="Filtrar"
                        icon="filter_list"
                        variant="outline"
                        featureTitle="Filtros Avançados"
                        featureDescription="Filtre o histórico por data, automação ou status."
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors duration-200">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                                <th className="px-6 py-4">Automação</th>
                                <th className="px-6 py-4">Data/Hora</th>
                                <th className="px-6 py-4">Duração</th>
                                <th className="px-6 py-4">Registros</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {MOCK_HISTORICO.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className="text-slate-900 dark:text-white font-semibold text-sm">{item.automacao}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                            <span className="material-symbols-outlined text-base">schedule</span>
                                            {item.data}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-slate-600 dark:text-slate-300 text-sm">{item.duracao}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">{item.registros}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${item.status === 'success'
                                                ? 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400'
                                                : 'bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400'
                                            }`}>
                                            <span className="material-symbols-outlined text-sm">
                                                {item.status === 'success' ? 'check_circle' : 'error'}
                                            </span>
                                            {item.status === 'success' ? 'Sucesso' : 'Erro'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <ComingSoonButton
                                            label="Ver Log"
                                            variant="ghost"
                                            size="sm"
                                            featureTitle="Log de Execução"
                                            featureDescription="Visualize os logs detalhados desta execução."
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HistoricoExecucoesPage;
