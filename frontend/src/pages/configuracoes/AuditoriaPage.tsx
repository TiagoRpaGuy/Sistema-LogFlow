import React from 'react';
import ComingSoonButton from '../../components/ui/ComingSoonButton';

const MOCK_AUDITORIA = [
    { id: 1, acao: 'Login realizado', usuario: 'João Silva', ip: '192.168.1.100', data: '17/12/2024 09:30', tipo: 'auth' },
    { id: 2, acao: 'Processo atualizado: PK-2023-001', usuario: 'Maria Oliveira', ip: '192.168.1.101', data: '17/12/2024 09:15', tipo: 'update' },
    { id: 3, acao: 'Automação executada: Sincronização', usuario: 'Sistema', ip: 'localhost', data: '17/12/2024 08:30', tipo: 'automation' },
    { id: 4, acao: 'Novo processo criado: TR-2024-001', usuario: 'Roberto Lima', ip: '192.168.1.102', data: '17/12/2024 08:00', tipo: 'create' },
    { id: 5, acao: 'Configuração alterada: Modo Teste', usuario: 'Ana Costa', ip: '192.168.1.103', data: '16/12/2024 18:45', tipo: 'config' },
    { id: 6, acao: 'Logout realizado', usuario: 'Carlos Mendes', ip: '192.168.1.104', data: '16/12/2024 18:00', tipo: 'auth' },
    { id: 7, acao: 'Relatório exportado', usuario: 'Maria Oliveira', ip: '192.168.1.101', data: '16/12/2024 15:30', tipo: 'export' },
    { id: 8, acao: 'Falha de autenticação', usuario: 'Desconhecido', ip: '203.0.113.50', data: '16/12/2024 14:22', tipo: 'error' },
];

const tipoIcons: Record<string, { icon: string; color: string; bg: string }> = {
    auth: { icon: 'login', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/40' },
    update: { icon: 'edit', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-100 dark:bg-amber-900/40' },
    automation: { icon: 'memory', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/40' },
    create: { icon: 'add_circle', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/40' },
    config: { icon: 'settings', color: 'text-slate-600 dark:text-slate-400', bg: 'bg-slate-100 dark:bg-slate-800' },
    export: { icon: 'download', color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-100 dark:bg-cyan-900/40' },
    error: { icon: 'error', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-100 dark:bg-red-900/40' },
};

const AuditoriaPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                        <span>Configurações</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-white">Auditoria</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Log de Auditoria</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Histórico completo de todas as ações realizadas no sistema.</p>
                </div>
                <div className="flex gap-2">
                    <ComingSoonButton
                        label="Exportar Log"
                        icon="download"
                        variant="outline"
                        featureTitle="Exportar Log de Auditoria"
                        featureDescription="Exporte o log completo para análise de conformidade."
                    />
                    <ComingSoonButton
                        label="Filtros Avançados"
                        icon="filter_list"
                        variant="outline"
                        featureTitle="Filtros de Auditoria"
                        featureDescription="Filtre por usuário, data, tipo de ação ou IP."
                    />
                </div>
            </div>

            {/* Audit Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors duration-200">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                                <th className="px-6 py-4">Ação</th>
                                <th className="px-6 py-4">Usuário</th>
                                <th className="px-6 py-4">IP</th>
                                <th className="px-6 py-4">Data/Hora</th>
                                <th className="px-6 py-4 text-right">Detalhes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {MOCK_AUDITORIA.map((log) => {
                                const tipoInfo = tipoIcons[log.tipo];
                                return (
                                    <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`size-8 rounded-lg ${tipoInfo.bg} flex items-center justify-center shrink-0`}>
                                                    <span className={`material-symbols-outlined text-lg ${tipoInfo.color}`}>{tipoInfo.icon}</span>
                                                </div>
                                                <span className="text-slate-900 dark:text-white text-sm">{log.acao}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-slate-600 dark:text-slate-300 text-sm">{log.usuario}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-slate-500 dark:text-slate-400 text-sm font-mono">{log.ip}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                                <span className="material-symbols-outlined text-base">schedule</span>
                                                {log.data}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <ComingSoonButton
                                                label="Ver"
                                                variant="ghost"
                                                size="sm"
                                                featureTitle="Detalhes do Log"
                                                featureDescription="Visualize informações detalhadas sobre esta ação."
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Info Box */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">info</span>
                    <div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-300">Política de Retenção</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            Os logs de auditoria são retidos por 90 dias. Para períodos maiores, configure backup em Configurações → Integrações.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuditoriaPage;
