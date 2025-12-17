/**
 * Gemini AI Service - MODO SIMULADO
 * 
 * Serviço simulado para chat na Central Inteligente.
 * Usa respostas pré-definidas baseadas em palavras-chave.
 * 
 * NOTA: A integração real com Gemini está desativada temporariamente.
 * Para ativar, defina USE_REAL_AI = true e configure GEMINI_API_KEY.
 */

// Flag para alternar entre modo simulado e real
const USE_REAL_AI = false;

// Simula delay de resposta para experiência mais natural
const SIMULATED_DELAY_MS = 800;

// Base de conhecimento simulada para o assistente de ajuda
const KNOWLEDGE_BASE: Array<{ keywords: string[]; response: string }> = [
    {
        keywords: ['olá', 'oi', 'hey', 'bom dia', 'boa tarde', 'boa noite'],
        response: 'Olá! Sou o assistente do LogiFlow. Como posso ajudar você hoje? Posso explicar sobre o Dashboard, Processos, Automações ou qualquer outra funcionalidade do sistema.',
    },
    {
        keywords: ['dashboard', 'painel', 'visão geral', 'kpi', 'indicadores'],
        response: 'O **Dashboard** é a tela inicial do LogiFlow. Nele você encontra:\n\n• **KPIs principais**: processos ativos, taxa de sucesso, alertas pendentes\n• **Gráficos de performance**: evolução diária/semanal\n• **Status em tempo real**: processos em execução\n• **Atalhos rápidos**: para as áreas mais usadas\n\nClique em qualquer card para ver mais detalhes!',
    },
    {
        keywords: ['processo', 'processos', 'operacional', 'operacionais'],
        response: 'A seção **Processos** permite gerenciar todos os processos operacionais:\n\n• **Lista de processos**: visualize todos com filtros por status\n• **Detalhes**: clique em um processo para ver timeline e histórico\n• **Status**: Pendente, Em Execução, Sucesso, Erro\n• **Tipos**: Manual ou Automatizado\n\nUse a barra de busca para encontrar processos específicos.',
    },
    {
        keywords: ['automação', 'automações', 'rpa', 'robô', 'bot'],
        response: 'A seção **Automações** (em desenvolvimento) permitirá:\n\n• Visualizar robôs RPA ativos\n• Monitorar execuções em tempo real\n• Configurar agendamentos\n• Analisar logs de execução\n\nEsta funcionalidade estará disponível em breve!',
    },
    {
        keywords: ['auditoria', 'log', 'evento', 'eventos', 'histórico'],
        response: 'A **Auditoria** registra todas as ações do sistema:\n\n• **Eventos**: cada ação é registrada com timestamp\n• **Filtros**: por tipo, data, usuário\n• **Detalhes**: quem fez o quê e quando\n• **Exportação**: baixe relatórios em CSV\n\nÓtimo para compliance e troubleshooting!',
    },
    {
        keywords: ['equipe', 'usuário', 'usuários', 'membro', 'permissão'],
        response: 'A seção **Equipe** (em desenvolvimento) permitirá:\n\n• Gerenciar membros da equipe\n• Definir permissões e papéis\n• Visualizar atividades por usuário\n\nEsta funcionalidade estará disponível em breve!',
    },
    {
        keywords: ['configuração', 'configurações', 'preferência', 'tema', 'dark'],
        response: 'Em **Configurações** você pode:\n\n• **Tema**: alternar entre modo claro e escuro (use o ícone 🌙 no header)\n• **Notificações**: configurar alertas\n• **Integrações**: gerenciar conexões externas\n\nO tema escuro é ótimo para reduzir fadiga visual!',
    },
    {
        keywords: ['central', 'inteligente', 'ia', 'assistente', 'ajuda'],
        response: 'A **Central Inteligente** oferece dois assistentes:\n\n• **Consultar Dados**: faça perguntas sobre dados do sistema em linguagem natural\n• **Ajuda do Sistema**: sou eu! Tiro dúvidas sobre como usar o LogiFlow\n\nAtualmente estou em modo de demonstração, mas em breve terei IA real integrada!',
    },
    {
        keywords: ['navegar', 'navegação', 'menu', 'sidebar', 'lateral'],
        response: 'Para navegar no LogiFlow:\n\n• Use o **menu lateral** à esquerda para acessar todas as seções\n• O **breadcrumb** no topo mostra onde você está\n• Use a **busca** no header para encontrar itens rapidamente\n• Clique no **logo** para voltar ao Dashboard',
    },
    {
        keywords: ['status', 'pendente', 'execução', 'sucesso', 'erro'],
        response: 'Os status de processo no LogiFlow são:\n\n• 🟡 **Pendente**: aguardando início\n• 🔵 **Em Execução**: processando agora\n• 🟢 **Sucesso**: concluído sem erros\n• 🔴 **Erro**: falhou, requer atenção\n\nClique em um processo para ver detalhes do status.',
    },
];

// Resposta padrão quando não há match
const DEFAULT_RESPONSE = 'Entendi sua pergunta! No momento estou em modo de demonstração com respostas limitadas.\n\nPosso ajudar com informações sobre:\n• Dashboard e KPIs\n• Processos operacionais\n• Automações RPA\n• Auditoria e logs\n• Navegação no sistema\n\nPergunte sobre qualquer um desses tópicos!';

/**
 * Encontra a melhor resposta baseada em palavras-chave
 */
function findBestResponse(message: string): string {
    const lowerMessage = message.toLowerCase();

    for (const entry of KNOWLEDGE_BASE) {
        if (entry.keywords.some(keyword => lowerMessage.includes(keyword))) {
            return entry.response;
        }
    }

    return DEFAULT_RESPONSE;
}

/**
 * Simula delay de processamento
 */
function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Envia mensagem e retorna resposta (simulada ou real)
 */
export async function sendHelpMessage(userMessage: string): Promise<string> {
    // Modo simulado - respostas baseadas em regras
    if (!USE_REAL_AI) {
        await delay(SIMULATED_DELAY_MS);
        return findBestResponse(userMessage);
    }

    // TODO: Modo real com Gemini API (desativado por limitação de quota)
    // Para ativar: mude USE_REAL_AI para true e descomente o código abaixo
    throw new Error('Modo IA real desativado. Use o modo simulado.');
}

/**
 * Verifica se o chat está disponível
 */
export function isGeminiAvailable(): boolean {
    // Sempre disponível em modo simulado
    return true;
}

