import React, { useEffect } from 'react';

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    status?: 'planned' | 'in-development';
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
    isOpen,
    onClose,
    title,
    description,
    status = 'planned',
}) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Content */}
                <div className="flex flex-col items-center text-center gap-4">
                    {/* Icon */}
                    <div className="size-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-200 dark:shadow-orange-900/30">
                        <span className="material-symbols-outlined text-white text-3xl">construction</span>
                    </div>

                    {/* Badge */}
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${status === 'in-development'
                            ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400'
                            : 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400'
                        }`}>
                        {status === 'in-development' ? 'Em desenvolvimento' : 'Planejado'}
                    </span>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        {description}
                    </p>

                    {/* Info box */}
                    <div className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-lg mt-0.5">tips_and_updates</span>
                            <p className="text-xs text-slate-600 dark:text-slate-400 text-left">
                                Esta funcionalidade faz parte do roadmap de evolução do LogiFlow.
                                Em breve você terá acesso completo a este recurso.
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        onClick={onClose}
                        className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                        Entendi
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonModal;
