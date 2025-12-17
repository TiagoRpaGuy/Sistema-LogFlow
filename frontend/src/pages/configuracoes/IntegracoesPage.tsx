import React from 'react';
import ComingSoonButton from '../../components/ui/ComingSoonButton';

const INTEGRACOES = [
    {
        id: 'n8n',
        name: 'n8n',
        description: 'Automação de workflows e integração com sistemas externos.',
        icon: 'webhook',
        status: 'disconnected',
        color: 'orange'
    },
    {
        id: 'supabase',
        name: 'Supabase',
        description: 'Banco de dados em tempo real e autenticação.',
        icon: 'database',
        status: 'disconnected',
        color: 'green'
    },
    {
        id: 'whatsapp',
        name: 'WhatsApp Business',
        description: 'Comunicação direta com clientes via WhatsApp.',
        icon: 'chat',
        status: 'disconnected',
        color: 'emerald'
    },
    {
        id: 'email',
        name: 'Email SMTP',
        description: 'Envio de emails transacionais e notificações.',
        icon: 'mail',
        status: 'disconnected',
        color: 'blue'
    },
    {
        id: 'erp',
        name: 'Sistema ERP',
        description: 'Integração com SAP, TOTVS ou outro ERP.',
        icon: 'business',
        status: 'disconnected',
        color: 'purple'
    },
    {
        id: 'tracking',
        name: 'API de Rastreamento',
        description: 'Conexão com transportadoras para tracking.',
        icon: 'location_on',
        status: 'disconnected',
        color: 'red'
    },
];

const IntegracoesPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                        <span>Configurações</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-white">Integrações</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Integrações</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Conecte o LogiFlow com sistemas externos para automação completa.</p>
                </div>
                <ComingSoonButton
                    label="Adicionar Integração"
                    icon="add"
                    variant="primary"
                    featureTitle="Adicionar Integração"
                    featureDescription="Configure novas integrações com APIs e serviços externos."
                />
            </div>

            {/* Integrations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {INTEGRACOES.map((integ) => (
                    <div
                        key={integ.id}
                        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm transition-all duration-200 hover:shadow-md"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className={`size-12 rounded-xl bg-${integ.color}-100 dark:bg-${integ.color}-900/30 flex items-center justify-center`}>
                                <span className={`material-symbols-outlined text-${integ.color}-600 dark:text-${integ.color}-400 text-2xl`}>{integ.icon}</span>
                            </div>
                            <span className="px-2 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                                Não conectado
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{integ.name}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{integ.description}</p>
                        <ComingSoonButton
                            label="Conectar"
                            icon="link"
                            variant="outline"
                            size="sm"
                            className="w-full"
                            featureTitle={`Conectar: ${integ.name}`}
                            featureDescription="Configure as credenciais e parâmetros de conexão para habilitar esta integração."
                        />
                    </div>
                ))}
            </div>

            {/* Info Box */}
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">security</span>
                    <div>
                        <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">Segurança das Integrações</p>
                        <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                            Todas as credenciais são armazenadas de forma criptografada. As conexões utilizam protocolos seguros (HTTPS/TLS).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntegracoesPage;
