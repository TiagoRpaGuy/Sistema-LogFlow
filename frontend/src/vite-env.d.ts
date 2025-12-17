/// <reference types="vite/client" />

/**
 * Tipagem das variáveis de ambiente do Vite
 * 
 * Variáveis prefixadas com VITE_ são expostas ao frontend via import.meta.env
 */
interface ImportMetaEnv {
    // Supabase
    readonly VITE_SUPABASE_URL?: string;
    readonly VITE_SUPABASE_ANON_KEY?: string;

    // Gemini (injetada via vite.config.ts define)
    readonly GEMINI_API_KEY?: string;

    // Vite built-in
    readonly MODE: string;
    readonly DEV: boolean;
    readonly PROD: boolean;
    readonly SSR: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
