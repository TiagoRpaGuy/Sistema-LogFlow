import React from 'react';
import ChatInterface from '../../components/chat/ChatInterface';

const ConsultarDadosPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-200 dark:shadow-violet-900/30">
                        <span className="material-symbols-outlined">database</span>
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Consultar Dados</h1>
                        <p className="text-slate-500 dark:text-slate-400">Central Inteligente</p>
                    </div>
                </div>
            </div>

            <ChatInterface
                agentName="Assistente de Dados"
                agentIcon="smart_toy"
                welcomeMessage="Olá! Sou o assistente de consulta de dados do LogiFlow. Em breve você poderá consultar processos, métricas e relatórios usando linguagem natural. Por exemplo: 'Quais processos estão pendentes?' ou 'Mostre o resumo de hoje'."
                inputPlaceholder="Faça uma pergunta sobre os dados..."
            />
        </div>
    );
};

export default ConsultarDadosPage;
