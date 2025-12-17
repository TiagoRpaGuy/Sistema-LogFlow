import React, { useState } from 'react';
import ComingSoonButton from '../../components/ui/ComingSoonButton';

const ModoTestePage: React.FC = () => {
    const [modoTeste, setModoTeste] = useState(false);

    const handleToggle = () => {
        alert('Funcionalidade em desenvolvimento. O Modo Teste será habilitado em uma versão futura.');
    };

    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                    <span>Configurações</span>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-slate-900 dark:text-white">Modo Teste</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-200 dark:shadow-orange-900/30">
                        <span className="material-symbols-outlined">science</span>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Modo Teste</h1>
                        <span className="px-2 py-0.5 text-xs font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 rounded-full">Beta</span>
                    </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Ative o modo de teste para simular operações sem afetar dados reais.</p>
            </div>

            {/* Toggle Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm transition-colors duration-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className={`size-14 rounded-2xl flex items-center justify-center transition-colors ${modoTeste
                                ? 'bg-amber-100 dark:bg-amber-900/30'
                                : 'bg-slate-100 dark:bg-slate-800'
                            }`}>
                            <span className={`material-symbols-outlined text-3xl ${modoTeste
                                    ? 'text-amber-600 dark:text-amber-400'
                                    : 'text-slate-400'
                                }`}>
                                {modoTeste ? 'bug_report' : 'verified_user'}
                            </span>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                {modoTeste ? 'Modo Teste Ativo' : 'Modo Produção'}
                            </h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                {modoTeste
                                    ? 'Todas as operações são simuladas e não afetam dados reais.'
                                    : 'Sistema operando normalmente com dados de produção.'
                                }
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleToggle}
                        className={`relative w-16 h-8 rounded-full transition-colors duration-300 cursor-not-allowed opacity-60 ${modoTeste ? 'bg-amber-500' : 'bg-slate-300 dark:bg-slate-600'
                            }`}
                        title="Funcionalidade em desenvolvimento"
                    >
                        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${modoTeste ? 'translate-x-9' : 'translate-x-1'
                            }`}></div>
                    </button>
                </div>
            </div>

            {/* Warning Box */}
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400">warning</span>
                    <div>
                        <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">Atenção</p>
                        <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">
                            O Modo Teste desabilita todas as integrações externas e usa dados simulados.
                            Nenhuma automação será executada em ambiente real.
                        </p>
                    </div>
                </div>
            </div>

            {/* Simulated Features */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Recursos Simulados no Modo Teste</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { icon: 'local_shipping', label: 'Rastreamento de Entregas', desc: 'Dados de posição simulados' },
                        { icon: 'notifications', label: 'Notificações', desc: 'Alertas sem envio real' },
                        { icon: 'memory', label: 'Automações RPA', desc: 'Execuções em sandbox' },
                        { icon: 'sync', label: 'Integrações', desc: 'APIs em modo mock' },
                    ].map((item) => (
                        <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                            <div className="size-10 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">{item.icon}</span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.label}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                <ComingSoonButton
                    label="Resetar Dados de Teste"
                    icon="refresh"
                    variant="outline"
                    featureTitle="Resetar Dados"
                    featureDescription="Limpe todos os dados gerados durante o modo de teste."
                />
                <ComingSoonButton
                    label="Gerar Dados de Amostra"
                    icon="auto_fix_high"
                    variant="outline"
                    featureTitle="Dados de Amostra"
                    featureDescription="Popule o sistema com dados fictícios para testes."
                />
            </div>
        </div>
    );
};

export default ModoTestePage;
