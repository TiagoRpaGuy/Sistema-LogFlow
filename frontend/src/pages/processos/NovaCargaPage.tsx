import React from 'react';
import ComingSoonButton from '../../components/ui/ComingSoonButton';

const NovaCargaPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                        <span>Processos</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-white">Nova Carga</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Registrar Nova Carga</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Cadastre uma nova carga para acompanhamento no sistema.</p>
                </div>
            </div>

            {/* Form Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm transition-colors duration-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Código da Carga */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Código da Carga</label>
                        <input
                            type="text"
                            disabled
                            placeholder="Ex: CG-2024-001"
                            className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed"
                        />
                    </div>

                    {/* Origem */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Origem</label>
                        <input
                            type="text"
                            disabled
                            placeholder="Centro de Distribuição"
                            className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed"
                        />
                    </div>

                    {/* Destino */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Destino</label>
                        <input
                            type="text"
                            disabled
                            placeholder="Filial ou Cliente"
                            className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed"
                        />
                    </div>

                    {/* Tipo de Carga */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tipo de Carga</label>
                        <select
                            disabled
                            className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed"
                        >
                            <option>Selecione o tipo</option>
                        </select>
                    </div>

                    {/* Responsável */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Responsável</label>
                        <input
                            type="text"
                            disabled
                            placeholder="Nome do responsável"
                            className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed"
                        />
                    </div>

                    {/* Data Prevista */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Data Prevista de Entrega</label>
                        <input
                            type="date"
                            disabled
                            className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed"
                        />
                    </div>

                    {/* Observações */}
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Observações</label>
                        <textarea
                            disabled
                            placeholder="Informações adicionais sobre a carga..."
                            rows={3}
                            className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed resize-none"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <ComingSoonButton
                        label="Cancelar"
                        variant="ghost"
                        featureTitle="Cancelar Cadastro"
                        featureDescription="O cadastro de novas cargas será habilitado após a integração com o sistema de gestão."
                    />
                    <ComingSoonButton
                        label="Salvar Carga"
                        icon="save"
                        variant="primary"
                        featureTitle="Salvar Nova Carga"
                        featureDescription="Esta funcionalidade permitirá cadastrar novas cargas diretamente no sistema, com rastreamento automático."
                    />
                </div>
            </div>

            {/* Info Box */}
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400">info</span>
                    <div>
                        <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">Funcionalidade em preparação</p>
                        <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">
                            O cadastro de novas cargas estará disponível após a integração com o ERP e sistemas de rastreamento.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NovaCargaPage;
