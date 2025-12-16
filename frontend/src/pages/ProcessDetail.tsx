import React from 'react';
import Badge from '../components/ui/Badge';
import { ProcessStatus, ProcessType, EventActorType } from '../types';

const ProcessDetail: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Top Header Card */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-3 mb-1">
             <Badge type="status" value={ProcessStatus.RUNNING} />
             <span className="text-slate-500 text-sm font-medium">ID: #PROC-4092</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Rastreamento de Frota SP</h1>
          <p className="text-slate-500 text-base leading-relaxed">
            Processo automatizado para verificação de status de entrega a cada 15 minutos via API SSW e notificação via WhatsApp.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
           <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-semibold text-sm">
              <span className="material-symbols-outlined text-[20px]">pause_circle</span>
              Pausar
           </button>
           <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white hover:bg-primary-dark font-bold text-sm shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-[20px]">edit</span>
              Editar
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Info */}
        <div className="flex flex-col gap-6 lg:col-span-1">
           {/* General Info */}
           <section className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-5 shadow-sm">
              <h3 className="font-bold text-lg flex items-center gap-2 text-slate-900">
                 <span className="material-symbols-outlined text-primary">info</span>
                 Informações Gerais
              </h3>
              
              <div className="space-y-4">
                 <div>
                    <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-2">Responsável</p>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-pointer">
                       <img src="https://picsum.photos/seed/manager/50" className="size-10 rounded-full" alt="Manager" />
                       <div>
                          <p className="text-slate-900 font-bold">Carlos Mendes</p>
                          <p className="text-slate-500 text-xs">Gerente de Operações</p>
                       </div>
                    </div>
                 </div>

                 <div>
                    <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-2">Sistemas</p>
                    <div className="flex flex-wrap gap-2">
                       {['SSW API', 'WhatsApp', 'Buonny'].map(sys => (
                         <span key={sys} className="px-3 py-1.5 rounded-full bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[14px] text-slate-400">api</span> {sys}
                         </span>
                       ))}
                    </div>
                 </div>

                 <div>
                   <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-2">Performance</p>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                         <p className="text-slate-500 text-xs font-medium">Tempo Médio</p>
                         <p className="text-slate-900 font-bold text-lg">12 min</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                         <p className="text-green-700 text-xs font-medium">Sucesso</p>
                         <p className="text-green-800 font-bold text-lg">99.8%</p>
                      </div>
                   </div>
                 </div>
              </div>
           </section>

           {/* Map Widget */}
           <section className="bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden relative group h-48">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200">
                 {/* Placeholder for map */}
                 <span className="material-symbols-outlined text-4xl">map</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm border-t border-slate-200">
                 <p className="font-bold text-sm text-slate-900">Região de Cobertura</p>
                 <p className="text-xs text-slate-500">Grande São Paulo e Interior</p>
              </div>
           </section>
        </div>

        {/* Right Column: Timeline */}
        <div className="lg:col-span-2 flex flex-col bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
           <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-xl text-slate-900">Linha do Tempo</h3>
              <button className="text-primary hover:text-primary-dark text-sm font-bold">Histórico Completo</button>
           </div>

           <div className="relative pl-4 space-y-8">
              {/* Vertical Line */}
              <div className="absolute left-[27px] top-2 bottom-4 w-0.5 bg-slate-200"></div>

              {/* Event 1 */}
              <div className="relative flex gap-6 group">
                 <div className="relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-white border-2 border-primary shadow-[0_0_0_4px_rgba(22,163,74,0.1)] mt-1">
                    <span className="size-2 rounded-full bg-primary"></span>
                 </div>
                 <div className="flex flex-col flex-1 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm group-hover:border-primary/40 group-hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-2">
                       <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">bolt</span>
                          <h4 className="font-bold text-slate-900">Automação Executada</h4>
                       </div>
                       <span className="text-slate-500 text-xs font-mono bg-slate-50 px-2 py-1 rounded">Hoje, 10:15</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">O sistema verificou 45 veículos. 3 notificações de atraso enviadas via WhatsApp.</p>
                    <Badge type="status" value="Sucesso" className="w-fit" />
                 </div>
              </div>

              {/* Event 2 */}
              <div className="relative flex gap-6 group">
                 <div className="relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-white border-2 border-slate-300 mt-1">
                    <span className="material-symbols-outlined text-slate-400 text-[14px]">edit</span>
                 </div>
                 <div className="flex flex-col flex-1 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-2">
                       <div className="flex items-center gap-2">
                          <img src="https://picsum.photos/seed/maria/30" className="size-6 rounded-full" alt="Maria" />
                          <h4 className="font-bold text-slate-900">Alteração de Regra</h4>
                       </div>
                       <span className="text-slate-500 text-xs font-mono bg-slate-50 px-2 py-1 rounded">Ontem, 14:30</span>
                    </div>
                    <p className="text-slate-600 text-sm">Maria Silva alterou o tempo de tolerância de atraso de 10min para 15min.</p>
                 </div>
              </div>

               {/* Event 3 */}
               <div className="relative flex gap-6 group">
                 <div className="relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-white border-2 border-slate-300 mt-1">
                    <span className="material-symbols-outlined text-slate-400 text-[14px]">code</span>
                 </div>
                 <div className="flex flex-col flex-1 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="font-bold text-slate-900">Integração WhatsApp Configurada</h4>
                       <span className="text-slate-500 text-xs font-mono bg-slate-50 px-2 py-1 rounded">01/10/2023</span>
                    </div>
                    <p className="text-slate-600 text-sm">API Key atualizada e templates de mensagem aprovados.</p>
                 </div>
              </div>

              {/* Start */}
              <div className="relative flex gap-6">
                 <div className="relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-100 border-2 border-slate-200 mt-1">
                    <span className="material-symbols-outlined text-slate-400 text-[14px]">flag</span>
                 </div>
                 <div className="flex flex-col flex-1 p-2">
                    <p className="text-slate-400 text-sm font-medium">Processo criado em 20/09/2023</p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessDetail;