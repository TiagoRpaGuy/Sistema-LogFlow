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
      <Route path="/processos" element={<ProcessList />} />
      <Route path="/processos/:id" element={<ProcessDetail />} />
      <Route path="/automacoes" element={<AutomacoesPage />} />
      <Route path="/eventos" element={<EventsLog />} />
      <Route path="/equipe" element={<EquipePage />} />
      <Route path="/configuracoes" element={<ConfiguracoesPage />} />
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