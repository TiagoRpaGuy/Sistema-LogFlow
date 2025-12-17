import React, { useState } from 'react';
import ComingSoonModal from './ComingSoonModal';

interface ComingSoonButtonProps {
    label: string;
    icon?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    featureTitle?: string;
    featureDescription?: string;
    showBadge?: boolean;
    badgeText?: string;
    className?: string;
}

const ComingSoonButton: React.FC<ComingSoonButtonProps> = ({
    label,
    icon,
    variant = 'secondary',
    size = 'md',
    featureTitle,
    featureDescription,
    showBadge = false,
    badgeText = 'Em breve',
    className = '',
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-xs gap-1.5',
        md: 'px-4 py-2.5 text-sm gap-2',
        lg: 'px-6 py-3 text-base gap-2.5',
    };

    const variantClasses = {
        primary: 'bg-primary/50 text-white/70 cursor-not-allowed',
        secondary: 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed',
        outline: 'border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 bg-transparent cursor-not-allowed',
        ghost: 'text-slate-400 dark:text-slate-500 bg-transparent cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800',
    };

    const handleClick = () => {
        if (featureTitle) {
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <button
                onClick={handleClick}
                className={`
                    relative flex items-center justify-center rounded-xl font-semibold
                    transition-all duration-200 group
                    ${sizeClasses[size]}
                    ${variantClasses[variant]}
                    ${className}
                `}
                title={!featureTitle ? 'Funcionalidade em breve' : undefined}
            >
                {icon && (
                    <span className={`material-symbols-outlined ${size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg'}`}>
                        {icon}
                    </span>
                )}
                <span>{label}</span>
                {showBadge && (
                    <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 rounded-full">
                        {badgeText}
                    </span>
                )}
            </button>

            {featureTitle && (
                <ComingSoonModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title={featureTitle}
                    description={featureDescription || 'Esta funcionalidade está sendo desenvolvida e estará disponível em breve.'}
                />
            )}
        </>
    );
};

export default ComingSoonButton;
