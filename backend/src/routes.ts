import { Router } from 'express';
import { supabase } from './config/supabaseClient';

const router = Router();

// ---------------------------------------------------------
// HEALTH CHECK
// ---------------------------------------------------------
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// ---------------------------------------------------------
// MODULE: PROCESSES
router.get('/processes', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('processes')
      .select(`
                id,
                title,
                description,
                status,
                process_type,
                updated_at,
                created_by (
                    name,
                    role
                )
            `)
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Supabase Error:', error);
      // Return empty array on error to prevent frontend crash, or 500
      return res.status(500).json({ error: error.message });
    }

    // Helper maps
    const statusMap: Record<string, string> = {
      'running': 'Em Execução',
      'paused': 'Pausado',
      'success': 'Sucesso',
      'warning': 'Atenção',
      'error': 'Erro Crítico'
    };

    const typeMap: Record<string, string> = {
      'manual': 'Manual',
      'automated': 'Automatizado',
      'hybrid': 'Híbrido'
    };

    // Map to frontend format
    const processes = data.map((p: any) => ({
      id: p.id,
      displayId: (p.id.split('-')[0] || 'PROC').toUpperCase(), // Simple display ID from UUID
      name: p.title,
      description: p.description || '',
      status: statusMap[p.status] || p.status,
      type: typeMap[p.process_type] || p.process_type,
      responsible: {
        name: p.created_by?.name || 'Sistema',
        role: p.created_by?.role || 'System',
        avatarUrl: '' // No avatar in DB yet
      },
      lastUpdate: new Date(p.updated_at).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
    }));

    res.json({ data: processes });
  } catch (err: any) {
    console.error('Server Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/processes/:id', async (req, res) => {
  const { id } = req.params;

  // For specific process details, we can also fetch from Supabase
  // But for now, let's just use the list endpoint or implement simple fetch
  try {
    const { data, error } = await supabase
      .from('processes')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return res.status(404).json({ error: 'Process not found' });
    }

    // Mock timeline for now as we don't have events table fully integrated in this view yet
    res.json({
      id: data.id,
      name: data.title,
      description: data.description,
      status: data.status, // Raw status for now
      timeline: [
        { id: 1, title: 'Processo Iniciado', status: 'success', time: new Date(data.created_at).toLocaleTimeString('pt-BR') }
      ]
    });

  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
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

// ---------------------------------------------------------
// MODULE: CENTRAL INTELIGENTE (Stubs for future AI integration)
// Prepared for n8n workflows or external AI agents
// ---------------------------------------------------------
router.post('/central/query', (req, res) => {
  // Future: Forward to AI agent for natural language data queries
  res.status(501).json({
    error: 'Not implemented',
    message: 'AI agent integration pending. This endpoint will process natural language queries.',
    timestamp: new Date()
  });
});

router.post('/central/help', (req, res) => {
  // Future: Forward to AI agent for system help/documentation
  res.status(501).json({
    error: 'Not implemented',
    message: 'AI agent integration pending. This endpoint will provide system guidance.',
    timestamp: new Date()
  });
});

export default router;