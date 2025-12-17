import React, { useState, useRef, useEffect } from 'react';

interface Message {
    id: string;
    content: string;
    sender: 'agent' | 'user';
    timestamp: Date;
}

interface ChatInterfaceProps {
    agentName: string;
    agentIcon: string;
    welcomeMessage: string;
    inputPlaceholder?: string;
    onSendMessage?: (message: string) => Promise<string>;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
    agentName,
    agentIcon,
    welcomeMessage,
    inputPlaceholder = 'Digite sua mensagem...',
    onSendMessage,
}) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            content: welcomeMessage,
            sender: 'agent',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const isEnabled = Boolean(onSendMessage);

    // Auto-scroll para última mensagem
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!onSendMessage || !inputValue.trim() || isLoading) return;

        const userMessage = inputValue.trim();
        setInputValue('');

        // Adicionar mensagem do usuário
        const userMsg: Message = {
            id: Date.now().toString(),
            content: userMessage,
            sender: 'user',
            timestamp: new Date(),
        };
        setMessages(prev => [...prev, userMsg]);
        setIsLoading(true);

        try {
            // Chamar o serviço de IA
            const response = await onSendMessage(userMessage);

            // Adicionar resposta do agente
            const agentMsg: Message = {
                id: (Date.now() + 1).toString(),
                content: response,
                sender: 'agent',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, agentMsg]);
        } catch (error) {
            // Adicionar mensagem de erro
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                content: error instanceof Error ? error.message : 'Ocorreu um erro. Tente novamente.',
                sender: 'agent',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-12rem)] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors duration-200">
            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-200 dark:shadow-violet-900/30">
                    <span className="material-symbols-outlined">{agentIcon}</span>
                </div>
                <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{agentName}</h3>
                    <div className="flex items-center gap-1.5">
                        <span className={`size-2 rounded-full ${isEnabled ? 'bg-green-500' : 'bg-amber-400 animate-pulse'}`}></span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                            {isLoading ? 'Digitando...' : isEnabled ? 'Online' : 'Em breve'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] px-4 py-3 rounded-2xl ${message.sender === 'user'
                                ? 'bg-primary text-white rounded-br-md'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-md'
                                }`}
                        >
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-md">
                            <div className="flex gap-1">
                                <span className="size-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                <span className="size-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                <span className="size-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder={!isEnabled ? 'Funcionalidade em desenvolvimento...' : inputPlaceholder}
                            disabled={!isEnabled || isLoading}
                            className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!isEnabled || !inputValue.trim() || isLoading}
                        className="flex items-center justify-center size-11 rounded-xl bg-primary text-white hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/20 hover:scale-105 disabled:hover:scale-100"
                        title={!isEnabled ? 'Funcionalidade em desenvolvimento' : 'Enviar mensagem'}
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            {isLoading ? 'hourglass_empty' : 'send'}
                        </span>
                    </button>
                </div>
                {!isEnabled && (
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 text-center">
                        🚀 Esta funcionalidade estará disponível em uma próxima versão
                    </p>
                )}
            </form>
        </div>
    );
};

export default ChatInterface;

