import React from 'react';

interface PageContextProps {
    icon: string;
    title: string;
    description: string;
    role?: string;
    variant?: 'default' | 'info' | 'warning' | 'automation';
}

const PageContext: React.FC<PageContextProps> = ({
    icon,
    title,
    description,
    role,
    variant = 'default',
}) => {
    const variantStyles = {
        default: {
            bg: 'bg-slate-50 dark:bg-slate-800/50',
            border: 'border-slate-200 dark:border-slate-700',
            iconBg: 'bg-slate-200 dark:bg-slate-700',
            iconColor: 'text-slate-600 dark:text-slate-400',
        },
        info: {
            bg: 'bg-blue-50 dark:bg-blue-900/20',
            border: 'border-blue-100 dark:border-blue-800',
            iconBg: 'bg-blue-100 dark:bg-blue-900/40',
            iconColor: 'text-blue-600 dark:text-blue-400',
        },
        warning: {
            bg: 'bg-amber-50 dark:bg-amber-900/20',
            border: 'border-amber-100 dark:border-amber-800',
            iconBg: 'bg-amber-100 dark:bg-amber-900/40',
            iconColor: 'text-amber-600 dark:text-amber-400',
        },
        automation: {
            bg: 'bg-green-50 dark:bg-green-900/20',
            border: 'border-green-100 dark:border-green-800',
            iconBg: 'bg-green-100 dark:bg-green-900/40',
            iconColor: 'text-green-600 dark:text-green-400',
        },
    };

    const styles = variantStyles[variant];

    return (
        <div className={`p-4 rounded-2xl border ${styles.bg} ${styles.border} transition-colors duration-200`}>
            <div className="flex items-start gap-4">
                <div className={`size-10 rounded-xl ${styles.iconBg} flex items-center justify-center shrink-0`}>
                    <span className={`material-symbols-outlined ${styles.iconColor}`}>{icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-bold text-slate-800 dark:text-white">{title}</h3>
                        {variant === 'automation' && (
                            <span className="px-2 py-0.5 text-[10px] font-bold bg-green-600 text-white rounded-full flex items-center gap-1">
                                <span className="material-symbols-outlined text-[10px]">bolt</span>
                                Automático
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
                    {role && (
                        <div className="flex items-center gap-2 mt-2 text-xs text-slate-500 dark:text-slate-500">
                            <span className="material-symbols-outlined text-sm">person</span>
                            <span><strong>Seu papel:</strong> {role}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PageContext;
