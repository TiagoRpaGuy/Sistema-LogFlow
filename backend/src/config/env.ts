/**
 * Backend Environment Configuration
 * 
 * Centraliza o acesso às variáveis de ambiente do backend.
 * Usa dotenv para carregar do arquivo .env.local
 */

import dotenv from 'dotenv';
import path from 'path';

// Carrega variáveis do .env.local com caminho absoluto para garantir leitura correta
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

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
        url: getEnvVar('VITE_SUPABASE_URL') || getEnvVar('SUPABASE_URL'),
        // Tenta usar chaves com nomes variados para garantir compatibilidade
        serviceKey: getEnvVar('SUPABASE_SERVICE_KEY') || getEnvVar('SUPABASE_SERVICE_ROLE_KEY') || getEnvVar('VITE_SUPABASE_ANON_KEY'),
        get isConfigured() {
            return Boolean(this.url && this.serviceKey);
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
            supabase: 'Supabase não configurado. Defina VITE_SUPABASE_URL e SUPABASE_SERVICE_KEY (ou VITE_SUPABASE_ANON_KEY) no arquivo .env.local',
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
    console.log(`   Supabase: ${env.supabase.isConfigured ? '✅ Configurado' : '⚠️  Não configurado (Verifique .env.local)'}`);
    console.log(`   Gemini AI: ${env.gemini.isConfigured ? '✅ Configurado' : '⚠️  Não configurado'}`);
    console.log('─'.repeat(45));
    console.log('');
}
