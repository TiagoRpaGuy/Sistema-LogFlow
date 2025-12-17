import { createClient } from '@supabase/supabase-js';
import { env } from './env';

if (!env.supabase.url || !env.supabase.serviceKey) {
    console.error('❌ SEVERE ERROR: Supabase URL or Service Key is missing from environment variables.');
}

/**
 * Supabase Client Instance
 * Configured with Service Key for backend access (Warning: Bypass RLS)
 */
export const supabase = createClient(
    env.supabase.url || '',
    env.supabase.serviceKey || ''
);
