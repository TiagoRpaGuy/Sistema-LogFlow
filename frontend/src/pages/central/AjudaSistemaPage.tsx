import React, { useCallback } from 'react';
import ChatInterface from '../../components/chat/ChatInterface';
import { sendHelpMessage, isGeminiAvailable } from '../../services/geminiService';

const AjudaSistemaPage: React.FC = () => {
    const handleSendMessage = useCallback(async (message: string): Promise<string> => {
        return await sendHelpMessage(message);
    }, []);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-200 dark:shadow-violet-900/30">
                        <span className="material-symbols-outlined">help</span>
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Ajuda do Sistema</h1>
                        <p className="text-slate-500 dark:text-slate-400">Central Inteligente</p>
                    </div>
                </div>
            </div>

            <ChatInterface
                agentName="Assistente de Ajuda"
                agentIcon="support_agent"
                welcomeMessage="Olá! Sou o assistente de ajuda do LogiFlow. Posso orientar você sobre como utilizar cada funcionalidade do sistema. Pergunte-me, por exemplo: 'Como navegar pelo dashboard?' ou 'O que posso fazer na seção de Processos?'."
                inputPlaceholder="Faça uma pergunta sobre o sistema..."
                onSendMessage={isGeminiAvailable() ? handleSendMessage : undefined}
            />
        </div>
    );
};

export default AjudaSistemaPage;

