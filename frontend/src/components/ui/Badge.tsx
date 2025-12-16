import React from 'react';
import { ProcessStatus, ProcessType } from '../../types';

interface BadgeProps {
  type: 'status' | 'processType';
  value: ProcessStatus | ProcessType | string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ type, value, className = '' }) => {
  let styles = '';
  let dotColor = '';

  if (type === 'status') {
    switch (value) {
      case ProcessStatus.RUNNING:
        styles = 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800';
        dotColor = 'bg-green-500 animate-pulse';
        break;
      case ProcessStatus.SUCCESS:
      case 'Sucesso':
        styles = 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800';
        dotColor = 'bg-emerald-500';
        break;
      case ProcessStatus.WARNING:
      case 'Atenção':
        styles = 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800';
        dotColor = 'bg-yellow-500';
        break;
      case ProcessStatus.CRITICAL:
      case 'Erro Crítico':
        styles = 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800';
        dotColor = 'bg-red-500';
        break;
      case ProcessStatus.PAUSED:
        styles = 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600';
        dotColor = 'bg-slate-400';
        break;
      default:
        styles = 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600';
    }
  } else {
    // Process Type
    switch (value) {
      case ProcessType.AUTOMATED:
        styles = 'bg-green-100 text-green-800 border-transparent dark:bg-green-900/40 dark:text-green-400';
        break;
      case ProcessType.HYBRID:
        styles = 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800';
        break;
      case ProcessType.MANUAL:
        styles = 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600';
        break;
    }
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border transition-all duration-200 hover:opacity-80 hover:scale-105 cursor-default ${styles} ${className}`}>
      {type === 'status' && (
        <span className={`size-1.5 rounded-full ${dotColor}`} />
      )}
      {value}
    </span>
  );
};

export default Badge;