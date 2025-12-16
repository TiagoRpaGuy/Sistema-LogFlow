import React, { useState, useMemo } from 'react';
import Badge from '../components/ui/Badge';

const handlePlaceholder = () => alert('Funcionalidade em desenvolvimento.');

// Mock data with proper event IDs
const EVENTS_DATA = [
   { id: 1, eventId: 'EVT-4092', type: 'robot', name: 'Separação de Pedido #4092', desc: 'Item escaneado na zona B com sucesso.', status: 'Sucesso', time: '14:02:15', date: 'Hoje' },
   { id: 2, eventId: 'EVT-4091', type: 'human', name: 'Conferência Manual', desc: 'Correção de etiqueta danificada no lote.', status: 'Atenção', time: '13:58:10', date: 'Hoje' },
   { id: 3, eventId: 'EVT-4090', type: 'robot', name: 'Integração ERP', desc: 'Falha de timeout ao conectar API SAP.', status: 'Erro Crítico', time: '13:55:00', date: 'Hoje' },
   { id: 4, eventId: 'EVT-4089', type: 'robot', name: 'Triagem Automática', desc: 'Pacote direcionado para esteira Sul.', status: 'Sucesso', time: '13:42:22', date: 'Hoje' },
   { id: 5, eventId: 'EVT-4088', type: 'human', name: 'Verificação de Qualidade', desc: 'Inspeção manual concluída com aprovação.', status: 'Sucesso', time: '13:30:45', date: 'Hoje' },
   { id: 6, eventId: 'EVT-4087', type: 'robot', name: 'Atualização de Estoque', desc: 'Sincronização automática com WMS finalizada.', status: 'Sucesso', time: '13:15:00', date: 'Hoje' },
   { id: 7, eventId: 'EVT-4086', type: 'human', name: 'Expedição Manual', desc: 'Liberação de carga para transporte SP.', status: 'Sucesso', time: '12:50:30', date: 'Hoje' },
];

type FilterType = 'all' | 'human' | 'robot';

const EventsLog: React.FC = () => {
   const [activeFilter, setActiveFilter] = useState<FilterType>('all');
   const [searchQuery, setSearchQuery] = useState('');

   const filteredEvents = useMemo(() => {
      return EVENTS_DATA.filter(evt => {
         const matchesType = activeFilter === 'all' || evt.type === activeFilter;
         const matchesSearch = searchQuery === '' ||
            evt.eventId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            evt.name.toLowerCase().includes(searchQuery.toLowerCase());
         return matchesType && matchesSearch;
      });
   }, [activeFilter, searchQuery]);

   const getFilterButtonClass = (filter: FilterType) => {
      const baseClass = "px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-200";
      if (activeFilter === filter) {
         return `${baseClass} bg-primary text-white shadow-md shadow-primary/20`;
      }
      return `${baseClass} bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700`;
   };

   return (
      <div className="flex flex-col gap-6">
         <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Registro de Eventos</h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl">Governança e auditoria detalhada de processos logísticos operacionais e automatizados.</p>
         </div>

         {/* Stats Row with Hover Effects */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-200 cursor-pointer">
               <div className="flex items-center gap-2 mb-2">
                  <div className="size-2 rounded-full bg-primary"></div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Execuções</span>
               </div>
               <p className="text-2xl font-bold text-slate-900 dark:text-white">4,203</p>
               <p className="text-xs text-primary font-bold">+5% vs ontem</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-200 cursor-pointer">
               <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-red-500 text-[18px]">error</span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Erros</span>
               </div>
               <p className="text-2xl font-bold text-slate-900 dark:text-white">15</p>
               <p className="text-xs text-slate-400 font-bold">Taxa de 0.3%</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex justify-between items-center hover:shadow-lg hover:scale-[1.03] transition-all duration-200 cursor-pointer">
               <div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Atividade Robô</span>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">85%</p>
               </div>
               <div className="size-12 rounded-full border-4 border-primary border-t-transparent flex items-center justify-center rotate-45">
                  <span className="material-symbols-outlined text-primary -rotate-45">smart_toy</span>
               </div>
            </div>
         </div>

         {/* Filters */}
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-2 border-b border-slate-200 dark:border-slate-700">
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
               <button className={getFilterButtonClass('all')} onClick={() => setActiveFilter('all')}>Todos</button>
               <button className={getFilterButtonClass('human')} onClick={() => setActiveFilter('human')}>
                  <span className="material-symbols-outlined text-[18px]">person</span> Humanos
               </button>
               <button className={getFilterButtonClass('robot')} onClick={() => setActiveFilter('robot')}>
                  <span className="material-symbols-outlined text-[18px]">smart_toy</span> Robôs
               </button>
            </div>
            <div className="relative w-full sm:w-auto">
               <span className="absolute left-3 top-2.5 text-slate-400 material-symbols-outlined text-[20px]">search</span>
               <input
                  className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-sm bg-white dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                  placeholder="Buscar evento ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
            </div>
         </div>

         {/* Results Count */}
         <div className="text-sm text-slate-500 dark:text-slate-400">
            Exibindo <span className="font-bold text-slate-800 dark:text-white">{filteredEvents.length}</span> de {EVENTS_DATA.length} eventos
         </div>

         {/* List */}
         <div className="flex flex-col gap-3">
            {filteredEvents.length === 0 ? (
               <div className="flex flex-col items-center justify-center py-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <span className="material-symbols-outlined text-4xl text-slate-300 dark:text-slate-600 mb-3">search_off</span>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Nenhum evento encontrado</p>
                  <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">Tente ajustar os filtros ou buscar por outro ID</p>
               </div>
            ) : (
               filteredEvents.map((evt) => (
                  <div key={evt.id} className={`group grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 rounded-xl bg-white dark:bg-slate-900 border-l-4 shadow-sm hover:shadow-md transition-all ${evt.status === 'Sucesso' ? 'border-l-primary' :
                        evt.status === 'Atenção' ? 'border-l-yellow-500' : 'border-l-red-500'
                     } border-y border-r border-slate-200 dark:border-slate-800`}>

                     <div className="md:col-span-1 flex justify-center">
                        <div className={`size-10 rounded-full flex items-center justify-center ${evt.type === 'robot' ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                           }`}>
                           <span className="material-symbols-outlined">{evt.type === 'robot' ? 'smart_toy' : 'person'}</span>
                        </div>
                     </div>

                     <div className="md:col-span-5 flex flex-col">
                        <div className="flex items-center gap-2">
                           <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">{evt.eventId}</span>
                           <h3 className="text-sm font-bold text-slate-900 dark:text-white">{evt.name}</h3>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{evt.desc}</p>
                     </div>

                     <div className="md:col-span-3">
                        <Badge type="status" value={evt.status} />
                     </div>

                     <div className="md:col-span-3 text-right text-sm text-slate-500 dark:text-slate-400 font-mono">
                        {evt.time} <span className="text-slate-300 dark:text-slate-600">|</span> {evt.date}
                     </div>
                  </div>
               )))}
         </div>
      </div>
   );
};

export default EventsLog;