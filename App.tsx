import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './frontend/src/hooks/useTheme';

// Layout Components
import Sidebar from './frontend/src/components/layout/Sidebar';
import Header from './frontend/src/components/layout/Header';

// Pages
import Dashboard from './frontend/src/pages/Dashboard';
import ProcessList from './frontend/src/pages/ProcessList';
import ProcessDetail from './frontend/src/pages/ProcessDetail';
import EventsLog from './frontend/src/pages/EventsLog';
import { AutomacoesPage, EquipePage, ConfiguracoesPage } from './frontend/src/pages/PlaceholderPages';
import ConsultarDadosPage from './frontend/src/pages/central/ConsultarDadosPage';
import AjudaSistemaPage from './frontend/src/pages/central/AjudaSistemaPage';

// New Pages - Processos
import NovaCargaPage from './frontend/src/pages/processos/NovaCargaPage';

// New Pages - Automações
import ExecutarAutomacaoPage from './frontend/src/pages/automacoes/ExecutarAutomacaoPage';
import HistoricoExecucoesPage from './frontend/src/pages/automacoes/HistoricoExecucoesPage';

// New Pages - Mensagens
import MensagensRecebidasPage from './frontend/src/pages/mensagens/MensagensRecebidasPage';

// New Pages - Indicadores
import IndicadoresPage from './frontend/src/pages/IndicadoresPage';

// New Pages - Visão Geral
import VisaoGeralPage from './frontend/src/pages/VisaoGeralPage';

// New Pages - Configurações
import IntegracoesPage from './frontend/src/pages/configuracoes/IntegracoesPage';
import UsuariosPage from './frontend/src/pages/configuracoes/UsuariosPage';
import AuditoriaPage from './frontend/src/pages/configuracoes/AuditoriaPage';
import ModoTestePage from './frontend/src/pages/configuracoes/ModoTestePage';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Processos */}
      <Route path="/processos" element={<ProcessList />} />
      <Route path="/processos/nova-carga" element={<NovaCargaPage />} />
      <Route path="/processos/:id" element={<ProcessDetail />} />
      <Route path="/eventos" element={<EventsLog />} />

      {/* Automações */}
      <Route path="/automacoes" element={<AutomacoesPage />} />
      <Route path="/automacoes/executar" element={<ExecutarAutomacaoPage />} />
      <Route path="/automacoes/historico" element={<HistoricoExecucoesPage />} />

      {/* Mensagens */}
      <Route path="/mensagens/recebidas" element={<MensagensRecebidasPage />} />

      {/* Central Inteligente */}
      <Route path="/central/dados" element={<ConsultarDadosPage />} />
      <Route path="/central/ajuda" element={<AjudaSistemaPage />} />

      {/* Indicadores */}
      <Route path="/indicadores" element={<IndicadoresPage />} />

      {/* Visão Geral */}
      <Route path="/visao-geral" element={<VisaoGeralPage />} />

      {/* Configurações */}
      <Route path="/configuracoes" element={<ConfiguracoesPage />} />
      <Route path="/configuracoes/integracoes" element={<IntegracoesPage />} />
      <Route path="/configuracoes/usuarios" element={<UsuariosPage />} />
      <Route path="/configuracoes/auditoria" element={<AuditoriaPage />} />
      <Route path="/configuracoes/modo-teste" element={<ModoTestePage />} />

      {/* Legacy */}
      <Route path="/equipe" element={<EquipePage />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </HashRouter>
    </ThemeProvider>
  );
}