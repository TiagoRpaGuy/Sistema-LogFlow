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
                        <span className="text-slate-900 dark:text-white">Cadastro Manual</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Cadastro Manual de Carga</h1>
                        <span className="px-2.5 py-1 text-xs font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 rounded-full flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">warning</span>
                            Contingência
                        </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Formulário para cadastro manual em situações excepcionais.</p>
                </div>
            </div>

            {/* Warning Context */}
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-4">
                    <div className="size-12 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-2xl">priority_high</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">Este é um fluxo de exceção</h3>
                        <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
                            O fluxo padrão do LogiFlow é <strong>automático</strong>. As cargas são registradas automaticamente
                            via WhatsApp, e-mail ou integração com o ERP. Utilize este formulário <strong>apenas quando
                                a automação não estiver disponível</strong> ou em situações de contingência operacional.
                        </p>
                        <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400">
                                <span className="material-symbols-outlined text-sm">bolt</span>
                                <span>Fluxo padrão: Automático</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400">
                                <span className="material-symbols-outlined text-sm">edit</span>
                                <span>Este formulário: Manual (exceção)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm transition-colors duration-200">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                    <span className="material-symbols-outlined text-slate-400">edit_note</span>
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Dados da Carga (Entrada Manual)</span>
                </div>
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

                    {/* Motivo da Entrada Manual */}
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            Motivo da Entrada Manual
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <select
                            disabled
                            className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed"
                        >
                            <option>Selecione o motivo</option>
                            <option>Falha na integração</option>
                            <option>Sistema externo indisponível</option>
                            <option>Carga urgente/emergencial</option>
                            <option>Dados incompletos na origem</option>
                            <option>Outro (especificar)</option>
                        </select>
                    </div>

                    {/* Observações */}
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Observações</label>
                        <textarea
                            disabled
                            placeholder="Informações adicionais sobre a carga e justificativa para entrada manual..."
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
                        featureDescription="O cadastro manual de cargas será habilitado após a configuração do ambiente."
                    />
                    <ComingSoonButton
                        label="Registrar Manualmente"
                        icon="edit_note"
                        variant="primary"
                        featureTitle="Registrar Carga Manual"
                        featureDescription="Esta funcionalidade permite o cadastro manual como contingência operacional."
                    />
                </div>
            </div>

            {/* Automation Info */}
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 dark:text-green-400">bolt</span>
                    <div>
                        <p className="text-sm font-semibold text-green-800 dark:text-green-300">Prefira o fluxo automático</p>
                        <p className="text-xs text-green-700 dark:text-green-400 mt-1">
                            Para registrar cargas pelo fluxo padrão, envie os dados via WhatsApp, e-mail ou integração de API.
                            Configure os canais de entrada em <strong>Configurações → Integrações</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NovaCargaPage;
