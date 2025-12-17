/**
 * Environment Configuration
 * 
 * Centraliza o acesso às variáveis de ambiente do frontend.
 * Todas as variáveis são tipadas e possuem fallbacks seguros.
 * 
 * IMPORTANTE: Variáveis VITE_* são expostas ao frontend.
 * Nunca exponha chaves secretas ao frontend.
 */

interface EnvConfig {
    // Supabase
    supabase: {
        url: string | null;
        anonKey: string | null;
        isConfigured: boolean;
    };
    // Gemini AI
    gemini: {
        apiKey: string | null;
        isConfigured: boolean;
    };
    // App
    isDevelopment: boolean;
    isProduction: boolean;
}

/**
 * Obtém uma variável de ambiente de forma segura
 */
function getEnvVar(key: string): string | null {
    // Vite expõe variáveis via import.meta.env
    const value = (import.meta.env as Record<string, string | undefined>)[key];
    return value && value.trim() !== '' ? value : null;
}

/**
 * Configuração do ambiente
 */
export const env: EnvConfig = {
    supabase: {
        url: getEnvVar('VITE_SUPABASE_URL'),
        anonKey: getEnvVar('VITE_SUPABASE_ANON_KEY'),
        get isConfigured() {
            return Boolean(this.url && this.anonKey);
        },
    },
    gemini: {
        // process.env.GEMINI_API_KEY é injetado pelo vite.config.ts via define
        apiKey: typeof process !== 'undefined' && process.env?.GEMINI_API_KEY
            ? process.env.GEMINI_API_KEY
            : null,
        get isConfigured() {
            return Boolean(this.apiKey);
        },
    },
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
};

/**
 * Verifica se uma integração está configurada e retorna mensagem de erro se não estiver
 */
export function checkIntegration(name: 'supabase' | 'gemini'): { ok: boolean; error?: string } {
    const config = env[name];

    if (!config.isConfigured) {
        const messages: Record<string, string> = {
            supabase: 'Supabase não configurado. Defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no arquivo .env.local',
            gemini: 'Gemini API não configurada. Defina GEMINI_API_KEY no arquivo .env.local',
        };
        return { ok: false, error: messages[name] };
    }

    return { ok: true };
}

/**
 * Log de status das integrações (apenas em desenvolvimento)
 */
export function logIntegrationStatus(): void {
    if (!env.isDevelopment) return;

    console.group('🔧 LogiFlow - Status das Integrações');
    console.log(`Supabase: ${env.supabase.isConfigured ? '✅ Configurado' : '⚠️ Não configurado'}`);
    console.log(`Gemini AI: ${env.gemini.isConfigured ? '✅ Configurado' : '⚠️ Não configurado'}`);
    console.groupEnd();
}
