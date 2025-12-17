import React, { useState } from 'react';
import ComingSoonButton from '../../components/ui/ComingSoonButton';

const MOCK_MENSAGENS = [
    { id: 1, canal: 'whatsapp', remetente: '+55 11 98765-4321', assunto: 'Confirmação de entrega', data: '17/12/2024 09:15', lida: false },
    { id: 2, canal: 'email', remetente: 'cliente@empresa.com', assunto: 'Solicitação de rastreio - Pedido #4521', data: '17/12/2024 08:42', lida: false },
    { id: 3, canal: 'whatsapp', remetente: '+55 21 99876-5432', assunto: 'Reagendamento de coleta', data: '17/12/2024 07:30', lida: true },
    { id: 4, canal: 'api', remetente: 'Sistema ERP', assunto: 'Sincronização pendente - 12 registros', data: '16/12/2024 18:00', lida: true },
    { id: 5, canal: 'email', remetente: 'fornecedor@logistica.com', assunto: 'Nota fiscal disponível', data: '16/12/2024 14:22', lida: true },
    { id: 6, canal: 'whatsapp', remetente: '+55 11 91234-5678', assunto: 'Dúvida sobre prazo de entrega', data: '16/12/2024 10:05', lida: true },
];

const canalIcons: Record<string, { icon: string; color: string; bg: string }> = {
    whatsapp: { icon: 'chat', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/40' },
    email: { icon: 'mail', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/40' },
    api: { icon: 'api', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/40' },
};

const MensagensRecebidasPage: React.FC = () => {
    const [filtroCanal, setFiltroCanal] = useState<string>('todos');

    const mensagensFiltradas = filtroCanal === 'todos'
        ? MOCK_MENSAGENS
        : MOCK_MENSAGENS.filter(m => m.canal === filtroCanal);

    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                        <span>Mensagens</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-white">Recebidas</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Mensagens Recebidas</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Visualize todas as mensagens recebidas de diferentes canais.</p>
                </div>
                <ComingSoonButton
                    label="Responder Mensagem"
                    icon="reply"
                    variant="primary"
                    featureTitle="Responder Mensagens"
                    featureDescription="Responda mensagens diretamente pelo sistema com integração aos canais configurados."
                />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Filtrar por canal:</span>
                    <div className="flex gap-2">
                        {['todos', 'whatsapp', 'email', 'api'].map((canal) => (
                            <button
                                key={canal}
                                onClick={() => setFiltroCanal(canal)}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${filtroCanal === canal
                                        ? 'bg-primary text-white'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                            >
                                {canal === 'todos' ? 'Todos' : canal.charAt(0).toUpperCase() + canal.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                    {mensagensFiltradas.length} mensagem(ns)
                </span>
            </div>

            {/* Messages List */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors duration-200">
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {mensagensFiltradas.map((msg) => {
                        const canalInfo = canalIcons[msg.canal];
                        return (
                            <div
                                key={msg.id}
                                className={`flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer ${!msg.lida ? 'bg-primary/5 dark:bg-primary/10' : ''
                                    }`}
                            >
                                {/* Canal Icon */}
                                <div className={`size-10 rounded-lg ${canalInfo.bg} flex items-center justify-center shrink-0`}>
                                    <span className={`material-symbols-outlined ${canalInfo.color}`}>{canalInfo.icon}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className={`text-sm font-semibold ${!msg.lida ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                                            {msg.remetente}
                                        </span>
                                        {!msg.lida && (
                                            <span className="size-2 rounded-full bg-primary shrink-0"></span>
                                        )}
                                    </div>
                                    <p className={`text-sm truncate ${!msg.lida ? 'text-slate-700 dark:text-slate-200' : 'text-slate-500 dark:text-slate-400'}`}>
                                        {msg.assunto}
                                    </p>
                                </div>

                                {/* Date */}
                                <div className="text-right shrink-0">
                                    <span className="text-xs text-slate-400">{msg.data}</span>
                                </div>

                                {/* Action */}
                                <ComingSoonButton
                                    label=""
                                    icon="arrow_forward"
                                    variant="ghost"
                                    size="sm"
                                    featureTitle="Visualizar Mensagem"
                                    featureDescription="Abra a mensagem completa e responda diretamente pelo sistema."
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Info Box */}
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 dark:text-green-400">info</span>
                    <div>
                        <p className="text-sm font-semibold text-green-800 dark:text-green-300">Canais de Comunicação</p>
                        <p className="text-xs text-green-700 dark:text-green-400 mt-1">
                            Configure a integração com WhatsApp Business, Email e APIs em Configurações → Integrações para receber mensagens em tempo real.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MensagensRecebidasPage;
