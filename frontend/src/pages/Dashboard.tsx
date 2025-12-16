import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  LineChart, Line, CartesianGrid, Legend,
  PieChart, Pie,
  AreaChart, Area
} from 'recharts';

// Mock Data
const maturityData = [
  { name: 'Automatizados', value: 490, color: '#16a34a' },
  { name: 'Híbridos', value: 300, color: '#3b82f6' },
  { name: 'Manuais', value: 450, color: '#94a3b8' },
];

const monthlyEvolutionData = [
  { month: 'Jan', automatizados: 320, hibridos: 180, manuais: 620 },
  { month: 'Fev', automatizados: 350, hibridos: 200, manuais: 580 },
  { month: 'Mar', automatizados: 380, hibridos: 230, manuais: 550 },
  { month: 'Abr', automatizados: 410, hibridos: 250, manuais: 520 },
  { month: 'Mai', automatizados: 440, hibridos: 270, manuais: 490 },
  { month: 'Jun', automatizados: 490, hibridos: 300, manuais: 450 },
];

const distributionData = [
  { name: 'Logística', value: 350, color: '#16a34a' },
  { name: 'Financeiro', value: 280, color: '#3b82f6' },
  { name: 'Estoque', value: 220, color: '#f59e0b' },
  { name: 'Expedição', value: 180, color: '#8b5cf6' },
  { name: 'Outros', value: 210, color: '#94a3b8' },
];

const automationRateData = [
  { month: 'Jan', taxa: 28 },
  { month: 'Fev', taxa: 31 },
  { month: 'Mar', taxa: 34 },
  { month: 'Abr', taxa: 37 },
  { month: 'Mai', taxa: 38 },
  { month: 'Jun', taxa: 40 },
];

const topProcessesData = [
  { name: 'Separação de Pedidos', volume: 2840 },
  { name: 'Conferência de Carga', volume: 2150 },
  { name: 'Triagem Automática', volume: 1890 },
  { name: 'Atualização ERP', volume: 1540 },
  { name: 'Expedição Regional', volume: 1320 },
];

const handlePlaceholder = () => alert('Funcionalidade em desenvolvimento.');

// Chart Card with Dark Mode and Icon
const ChartCard: React.FC<{
  title: string;
  subtitle?: string;
  icon: string;
  children: React.ReactNode;
  className?: string
}> = ({ title, subtitle, icon, children, className = '' }) => (
  <div className={`bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm transition-colors duration-200 ${className}`}>
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
          <span className="material-symbols-outlined text-primary">{icon}</span>
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h2>
          {subtitle && <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
        </div>
      </div>
    </div>
    {children}
  </div>
);

// Metric Card with Dark Mode
const MetricCard: React.FC<{
  title: string;
  value: string;
  trend: string;
  trendType: 'positive' | 'negative';
  icon: string;
  iconColor: string;
  bgIcon: string;
}> = ({ title, value, trend, trendType, icon, iconColor, bgIcon }) => (
  <div className="flex flex-col gap-3 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-200 cursor-pointer">
    <div className="flex justify-between items-start">
      <div className={`p-2 rounded-lg ${bgIcon} dark:bg-opacity-20`}>
        <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
      </div>
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${trendType === 'positive'
          ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'
          : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400'
        }`}>
        {trend}
      </span>
    </div>
    <div>
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{title}</p>
      <p className="text-slate-900 dark:text-white text-3xl font-bold mt-1 tracking-tight">{value}</p>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Visão Executiva</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">
            Acompanhamento em tempo real da evolução da maturidade logística e governança dos processos.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400 shadow-sm">
          <span className="material-symbols-outlined text-base">calendar_today</span>
          Última atualização: Hoje, 09:41
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Processos" value="1,240" trend="+5% mês" trendType="positive" icon="inventory_2" iconColor="text-green-600" bgIcon="bg-green-50" />
        <MetricCard title="Manuais" value="450" trend="-2% mês" trendType="negative" icon="edit_document" iconColor="text-slate-700 dark:text-slate-400" bgIcon="bg-slate-100" />
        <MetricCard title="Híbridos" value="300" trend="+10% mês" trendType="positive" icon="settings_suggest" iconColor="text-blue-600" bgIcon="bg-blue-50" />

        {/* Highlighted Metric */}
        <div className="flex flex-col gap-3 rounded-2xl p-6 border border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/20 shadow-sm relative overflow-hidden group hover:shadow-lg hover:scale-[1.03] transition-all duration-200 cursor-pointer">
          <div className="absolute right-0 top-0 p-24 bg-green-100 dark:bg-green-800 rounded-full -mr-12 -mt-12 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="flex justify-between items-start relative z-10">
            <div className="p-2 bg-green-600 text-white rounded-lg shadow-lg shadow-green-200 dark:shadow-green-900/50">
              <span className="material-symbols-outlined icon-fill">smart_toy</span>
            </div>
            <span className="bg-white dark:bg-slate-800 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full shadow-sm">+15% mês</span>
          </div>
          <div className="relative z-10">
            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Automatizados</p>
            <p className="text-slate-900 dark:text-white text-3xl font-bold mt-1 tracking-tight">490</p>
          </div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Evolução Mensal" subtitle="Transição de processos por categoria" icon="show_chart">
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyEvolutionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" strokeOpacity={0.3} />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} stroke="#475569" />
                <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} stroke="#475569" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Legend wrapperStyle={{ paddingTop: '10px' }} />
                <Line type="monotone" dataKey="automatizados" name="Automatizados" stroke="#16a34a" strokeWidth={3} dot={{ fill: '#16a34a', r: 4 }} />
                <Line type="monotone" dataKey="hibridos" name="Híbridos" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 4 }} />
                <Line type="monotone" dataKey="manuais" name="Manuais" stroke="#94a3b8" strokeWidth={3} dot={{ fill: '#94a3b8', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Taxa de Automação" subtitle="Percentual de processos automatizados" icon="trending_up">
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={automationRateData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTaxa" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" strokeOpacity={0.3} />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} stroke="#475569" />
                <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} stroke="#475569" unit="%" domain={[0, 50]} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Area type="monotone" dataKey="taxa" stroke="#16a34a" strokeWidth={3} fillOpacity={1} fill="url(#colorTaxa)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800">
            <span className="material-symbols-outlined text-green-600 dark:text-green-400">trending_up</span>
            <span className="text-sm text-green-700 dark:text-green-400 font-medium">Meta: 50% até Dez/2024 • Atual: 40%</span>
          </div>
        </ChartCard>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard title="Distribuição por Área" subtitle="Volume por departamento" icon="pie_chart">
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={distributionData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                  {distributionData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            {distributionData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Top 5 Processos" subtitle="Por volume de execuções" icon="leaderboard">
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={topProcessesData} margin={{ top: 0, right: 30, left: 0, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={130} tick={{ fontSize: 11, fontWeight: 500, fill: '#94a3b8' }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Bar dataKey="volume" fill="#16a34a" barSize={16} radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Maturidade do Processo" subtitle="Classificação atual" icon="assessment">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={maturityData} margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12, fontWeight: 600, fill: '#94a3b8' }} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Bar dataKey="value" barSize={20} radius={[0, 10, 10, 0]}>
                  {maturityData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
            <div className="flex gap-2">
              <span className="material-symbols-outlined text-primary text-lg">tips_and_updates</span>
              <p className="text-xs text-slate-500 dark:text-slate-400">Focar na conversão dos 300 processos híbridos pode aumentar a eficiência em 12%.</p>
            </div>
          </div>
        </ChartCard>
      </div>

      {/* Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm transition-colors duration-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-primary">history</span>
              Atividade Recente
            </h2>
            <button onClick={handlePlaceholder} className="text-sm font-bold text-primary hover:underline">Ver tudo</button>
          </div>
          <div className="space-y-5">
            {[
              { title: 'Processo de Entrega SP atualizado', sub: 'Status alterado de Manual para Híbrido.', time: '10 min atrás', icon: 'sync_alt', bgColor: 'bg-blue-50 dark:bg-blue-900/30', textColor: 'text-blue-600 dark:text-blue-400' },
              { title: 'Nova automação detectada: Triagem RJ', sub: 'Bot de triagem implantado com sucesso.', time: '1 hora atrás', icon: 'smart_toy', bgColor: 'bg-green-50 dark:bg-green-900/30', textColor: 'text-green-600 dark:text-green-400' },
              { title: 'Auditoria completada: Estoque Central', sub: 'Conformidade de 98% alcançada.', time: 'Ontem', icon: 'verified', bgColor: 'bg-orange-50 dark:bg-orange-900/30', textColor: 'text-orange-600 dark:text-orange-400' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`size-10 rounded-full flex items-center justify-center ${item.bgColor} ${item.textColor}`}>
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                  </div>
                  {idx !== 2 && <div className="w-0.5 h-full bg-slate-100 dark:bg-slate-700 my-2"></div>}
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-slate-800 dark:text-white">{item.title}</p>
                    <span className="text-xs font-medium text-slate-400">{item.time}</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 shadow-lg text-white">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined">speed</span>
            Performance Hoje
          </h2>
          <div className="space-y-5">
            <div className="hover:scale-[1.02] transition-transform cursor-pointer p-2 -m-2 rounded-lg hover:bg-white/5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Processos Executados</span>
                <span className="font-bold">847 / 1000</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: '84.7%' }}></div>
              </div>
            </div>
            <div className="hover:scale-[1.02] transition-transform cursor-pointer p-2 -m-2 rounded-lg hover:bg-white/5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Taxa de Sucesso</span>
                <span className="font-bold text-green-400">99.2%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '99.2%' }}></div>
              </div>
            </div>
            <div className="hover:scale-[1.02] transition-transform cursor-pointer p-2 -m-2 rounded-lg hover:bg-white/5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Tempo Médio</span>
                <span className="font-bold">2.4s</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '76%' }}></div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-700 hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-xs">Economia Estimada</p>
                  <p className="text-2xl font-bold text-green-400">R$ 12.4k</p>
                </div>
                <div className="size-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-400">savings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;