import { IProcess } from '../types';

const API_URL = 'http://localhost:3001/api';

export const processService = {
    /**
     * Fetches all processes from the backend API (which connects to Supabase)
     */
    async getAll(): Promise<IProcess[]> {
        try {
            const response = await fetch(`${API_URL}/processes`);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            return json.data;
        } catch (error) {
            console.error('Failed to fetch processes:', error);
            throw error;
        }
    }
};
