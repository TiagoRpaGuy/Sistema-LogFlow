export enum ProcessStatus {
  RUNNING = 'Em Execução',
  PAUSED = 'Pausado',
  SUCCESS = 'Sucesso',
  WARNING = 'Atenção',
  CRITICAL = 'Erro Crítico'
}

export enum ProcessType {
  MANUAL = 'Manual',
  AUTOMATED = 'Automatizado',
  HYBRID = 'Híbrido'
}

export enum EventActorType {
  HUMAN = 'Humano',
  ROBOT = 'Robô',
  SYSTEM = 'Sistema'
}

export interface IProcess {
  id: string;
  displayId: string;
  name: string;
  description: string;
  status: ProcessStatus;
  type: ProcessType;
  responsible: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  lastUpdate: string;
  metrics?: {
    avgTime: string;
    successRate: number;
  };
}

export interface IEvent {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  dateLabel: string; // e.g., "Hoje", "Ontem"
  actorType: EventActorType;
  status?: ProcessStatus;
  details?: string;
}

export interface IDashboardMetric {
  label: string;
  value: string | number;
  trend: number; // percentage
  trendLabel: string; // e.g. "vs ontem"
  icon: string;
  colorClass: string;
}