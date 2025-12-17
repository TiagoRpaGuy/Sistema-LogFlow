import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import ComingSoonButton from '../components/ui/ComingSoonButton';
import PageContext from '../components/ui/PageContext';
import { ProcessStatus, ProcessType, IProcess } from '../types';
import { processService } from '../services/processService';

const ProcessList: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Todos');
  const [processes, setProcesses] = useState<IProcess[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProcesses();
  }, []);

  const loadProcesses = async () => {
    try {
      setLoading(true);
      const data = await processService.getAll();
      setProcesses(data);
      setError(null);
    } catch (err) {
      console.error('Error loading processes:', err);
      setError('Falha ao carregar processos. Verifique se o backend está rodando.');
    } finally {
      setLoading(false);
    }
  };

  const filteredProcesses = processes.filter(p => {
    if (filter === 'Todos') return true;
    // Map filter strings to enum values if needed, or matched by frontend logic
    // The filter buttons use: 'Automatizado', 'Híbrido', 'Manual'
    // The ProcessType enum values are matching these strings
    return p.type === filter;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
            <span>Governança</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-slate-900 dark:text-white">Processos Operacionais</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Lista de Processos</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Acompanhe o status de todas as cargas em trânsito (Supabase Integrated).</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={loadProcesses}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold transition-all duration-200 text-sm"
            title="Recarregar dados"
          >
            <span className={`material-symbols-outlined text-lg ${loading ? 'animate-spin' : ''}`}>sync</span>
          </button>
          <button
            onClick={() => navigate('/processos/nova-carga')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold transition-all duration-200 text-sm"
            title="Cadastro manual (contingência)"
          >
            <span className="material-symbols-outlined text-lg">edit_note</span>
            Cadastro Manual
            <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 rounded-full">Exceção</span>
          </button>
        </div>
      </div>

      {/* Context Banner */}
      <PageContext
        icon="bolt"
        title="Processos atualizados automaticamente (Supabase)"
        description="As cargas são registradas e atualizadas via WhatsApp, e-mail ou integração com o ERP. Você observa, analisa e intervém quando necessário."
        role="Observar status, identificar exceções e tomar decisões."
        variant="automation"
      />

      {/* Action Bar */}
      <div className="flex flex-wrap gap-2 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
        <ComingSoonButton
          label="Atualizar Status"
          icon="sync"
          variant="outline"
          size="sm"
          featureTitle="Atualizar Status em Lote"
          featureDescription="Atualize o status de múltiplos processos simultaneamente."
        />
        <ComingSoonButton
          label="Registrar Evento"
          icon="event_note"
          variant="outline"
          size="sm"
          featureTitle="Registrar Evento"
          featureDescription="Adicione um novo evento ou ocorrência ao processo selecionado."
        />
        <ComingSoonButton
          label="Pausar Processo"
          icon="pause_circle"
          variant="outline"
          size="sm"
          featureTitle="Pausar Processo"
          featureDescription="Pause temporariamente os processos selecionados."
        />
        <ComingSoonButton
          label="Retomar Processo"
          icon="play_circle"
          variant="outline"
          size="sm"
          featureTitle="Retomar Processo"
          featureDescription="Retome processos que estão pausados."
        />
        <ComingSoonButton
          label="Analisar Processo"
          icon="psychology"
          variant="outline"
          size="sm"
          showBadge
          badgeText="IA"
          featureTitle="Análise Inteligente com IA"
          featureDescription="Use inteligência artificial para analisar o processo, identificar gargalos e sugerir otimizações."
        />
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
        <div className="flex-1 min-w-[300px]">
          <label className="flex w-full items-center h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-within:border-primary px-3 transition-colors">
            <span className="material-symbols-outlined text-slate-400 mr-2">search</span>
            <input
              className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm"
              placeholder="Buscar por nome, ID ou responsável..."
            />
          </label>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto px-1">
          {['Todos', 'Automatizado', 'Híbrido', 'Manual'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex h-10 items-center px-5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${filter === f
                ? 'bg-primary text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
            >
              {f !== 'Todos' && (
                <span className="material-symbols-outlined text-sm mr-2">
                  {f === 'Automatizado' ? 'precision_manufacturing' : f === 'Híbrido' ? 'settings_suggest' : 'back_hand'}
                </span>
              )}
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors duration-200 min-h-[300px]">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-12 text-slate-500">
            <span className="material-symbols-outlined text-4xl animate-spin mb-2">sync</span>
            <p>Carregando dados do Supabase (via MCP)...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center p-12 text-red-500">
            <span className="material-symbols-outlined text-4xl mb-2">error</span>
            <p>{error}</p>
            <button onClick={loadProcesses} className="mt-4 text-primary hover:underline">Tentar novamente</button>
          </div>
        ) : filteredProcesses.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-slate-500">
            <span className="material-symbols-outlined text-4xl mb-2">inbox</span>
            <p>Nenhum processo encontrado.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                  <th className="px-6 py-4">Nome do Processo</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Responsável</th>
                  <th className="px-6 py-4">Última Atualização</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredProcesses.map((proc) => (
                  <tr key={proc.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-slate-900 dark:text-white font-bold text-sm">{proc.name}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">ID: {proc.displayId}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-start gap-1">
                        <Badge type="processType" value={proc.type} />
                        {proc.status === 'Em Execução' && (
                          <span className="text-[10px] text-green-600 dark:text-green-400 font-semibold animate-pulse">● Ativo agora</span>
                        )}

                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {proc.responsible.avatarUrl ? (
                          <img src={proc.responsible.avatarUrl} className="size-8 rounded-full object-cover" alt="" />
                        ) : (
                          <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                            {proc.responsible.name.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-slate-900 dark:text-white">{proc.responsible.name}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{proc.responsible.role}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                        <span className="material-symbols-outlined text-base">calendar_today</span>
                        {proc.lastUpdate}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => navigate(`/processos/${proc.id}`)}
                        className="text-primary hover:text-primary-dark text-sm font-bold hover:underline transition-colors"
                      >
                        Ver Detalhes
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* Pagination - Mocked for now */}
        {!loading && !error && filteredProcesses.length > 0 && (
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
            <span className="text-sm text-slate-500 dark:text-slate-400">Mostrando <span className="font-bold">{filteredProcesses.length}</span> resultados</span>
            <div className="flex gap-1">
              <button className="size-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-400 disabled:opacity-50 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
              <button className="size-8 flex items-center justify-center rounded-full bg-primary text-white text-sm font-bold">1</button>
              <button className="size-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessList;