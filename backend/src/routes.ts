import { Router } from 'express';

const router = Router();

// ---------------------------------------------------------
// HEALTH CHECK
// ---------------------------------------------------------
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// ---------------------------------------------------------
// MODULE: PROCESSES (Mocks to match frontend)
// ---------------------------------------------------------
router.get('/processes', (req, res) => {
  // Simulating DB fetch
  const processes = [
    {
      id: 'PK-2023-001',
      name: 'Separação de Pedidos',
      status: 'Em Execução',
      type: 'Manual'
    },
    {
      id: 'TR-2023-882',
      name: 'Rastreamento de Frota',
      status: 'Sucesso',
      type: 'Automatizado'
    }
  ];
  res.json({ data: processes });
});

router.get('/processes/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Rastreamento de Frota SP',
    description: 'Processo automatizado...',
    status: 'Em Execução',
    timeline: [
      { id: 1, title: 'Automação Executada', status: 'success', time: '10:15' },
      { id: 2, title: 'Alteração de Regra', status: 'info', time: 'Yesterday' }
    ]
  });
});

// ---------------------------------------------------------
// MODULE: EVENTS
// ---------------------------------------------------------
router.get('/events', (req, res) => {
  res.json({
    stats: { executions: 4203, errors: 15 },
    logs: [
      { id: 1, msg: 'Item escaneado', type: 'robot' },
      { id: 2, msg: 'Correção manual', type: 'human' }
    ]
  });
});

export default router;