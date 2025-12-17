/**
 * Backend Environment Configuration
 * 
 * Centraliza o acesso às variáveis de ambiente do backend.
 * Usa dotenv para carregar do arquivo .env.local
 */

import dotenv from 'dotenv';

// Carrega variáveis do .env.local
dotenv.config({ path: '.env.local' });

interface BackendEnvConfig {
    // Server
    port: number;
    nodeEnv: string;

    // Supabase
    supabase: {
        url: string | null;
        serviceKey: string | null;
        isConfigured: boolean;
    };

    // Gemini AI
    gemini: {
        apiKey: string | null;
        isConfigured: boolean;
    };
}

/**
 * Obtém uma variável de ambiente de forma segura
 */
function getEnvVar(key: string): string | null {
    const value = process.env[key];
    return value && value.trim() !== '' ? value : null;
}

/**
 * Configuração do ambiente backend
 */
export const env: BackendEnvConfig = {
    port: parseInt(process.env.PORT || '3001', 10),
    nodeEnv: process.env.NODE_ENV || 'development',

    supabase: {
        url: getEnvVar('VITE_SUPABASE_URL'),
        serviceKey: getEnvVar('SUPABASE_SERVICE_KEY'),
        get isConfigured() {
            return Boolean(this.url);
        },
    },

    gemini: {
        apiKey: getEnvVar('GEMINI_API_KEY'),
        get isConfigured() {
            return Boolean(this.apiKey);
        },
    },
};

/**
 * Verifica se uma integração está configurada
 */
export function checkIntegration(name: 'supabase' | 'gemini'): { ok: boolean; error?: string } {
    const config = env[name];

    if (!config.isConfigured) {
        const messages: Record<string, string> = {
            supabase: 'Supabase não configurado. Defina VITE_SUPABASE_URL no arquivo .env.local',
            gemini: 'Gemini API não configurada. Defina GEMINI_API_KEY no arquivo .env.local',
        };
        return { ok: false, error: messages[name] };
    }

    return { ok: true };
}

/**
 * Log de status das integrações na inicialização
 */
export function logIntegrationStatus(): void {
    console.log('\n🔧 LogiFlow Backend - Status das Integrações');
    console.log('─'.repeat(45));
    console.log(`   Supabase: ${env.supabase.isConfigured ? '✅ Configurado' : '⚠️  Não configurado'}`);
    console.log(`   Gemini AI: ${env.gemini.isConfigured ? '✅ Configurado' : '⚠️  Não configurado'}`);
    console.log('─'.repeat(45));
    console.log('');
}
