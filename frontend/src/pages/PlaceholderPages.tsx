import React from 'react';

const handlePlaceholder = () => {
    alert('Funcionalidade em desenvolvimento.');
};

const PlaceholderPage: React.FC<{ title: string; icon: string; description: string }> = ({ title, icon, description }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{title}</h1>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{description}</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
                <div className="size-20 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">Em Desenvolvimento</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-md">
                        Esta funcionalidade está sendo implementada e estará disponível em breve.
                    </p>
                </div>
                <button
                    onClick={handlePlaceholder}
                    className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:scale-105"
                >
                    Notificar quando disponível
                </button>
            </div>
        </div>
    );
};

export const AutomacoesPage: React.FC = () => (
    <PlaceholderPage
        title="Automações"
        icon="memory"
        description="Gerencie e monitore todas as automações RPA do sistema."
    />
);

export const EquipePage: React.FC = () => (
    <PlaceholderPage
        title="Equipe"
        icon="groups"
        description="Visualize e gerencie os membros da equipe e suas permissões."
    />
);

export const ConfiguracoesPage: React.FC = () => (
    <PlaceholderPage
        title="Configurações"
        icon="settings"
        description="Configure preferências do sistema, integrações e notificações."
    />
);
