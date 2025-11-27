import axios from 'axios';

// Default Public Tunnel URL
const DEFAULT_BACKEND_URL = 'https://perfect-fulfillment-production-3a58.up.railway.app';

// Get URL from storage or use default
const getBackendUrl = () => {
    const storedUrl = localStorage.getItem('custom_backend_url');
    // Ensure we don't double-append /api if it's already there or not needed, 
    // but the backend routes are /api/..., so base URL should probably NOT have /api 
    // if the endpoints in the functions include /api.
    // Looking at the code below: api.get('/market') -> if base is .../api, result is .../api/market.
    // My previous DEFAULT was .../api.
    // The Railway URL is root.
    // So DEFAULT should probably be .../api if the code expects it.
    // Let's check the code below.
    // fetchCryptoMarket calls api.get('/market').
    // If server has app.use('/api/news', ...), and app.get('/api/market', ...).
    // Then we need the request to go to /api/market.
    // If baseURL is .../api, then axios.get('/market') -> .../api/market. Correct.
    // If baseURL is root, then axios.get('/market') -> .../market. WRONG.
    // So DEFAULT_BACKEND_URL should end with /api.

    return storedUrl ? (storedUrl.endsWith('/api') ? storedUrl : `${storedUrl}/api`) : `${DEFAULT_BACKEND_URL}/api`;
};

const api = axios.create({
    baseURL: getBackendUrl(),
    headers: {
        'Bypass-Tunnel-Reminder': 'true'
    }
});

// Interceptor to update baseURL dynamically if it changes in storage
api.interceptors.request.use((config) => {
    config.baseURL = getBackendUrl();
    return config;
});

export interface MarketItem {
    id: string;
    symbol: string;
    name: string;
    price: number;
    change24h: number;
    type: 'crypto' | 'stock';
    sparkline?: { price: number; date: string }[];
    description?: string;
    high24h?: number;
    low24h?: number;
}

export const fetchCryptoMarket = async (): Promise<MarketItem[]> => {
    try {
        const response = await api.get('/market');
        return response.data;
    } catch (error) {
        console.error('Error fetching market data:', error);
        return [];
    }
};

export const fetchMarketChart = async (symbol: string): Promise<{ price: number; date: string; open?: number; high?: number; low?: number; close?: number; volume?: number }[]> => {
    try {
        const response = await api.get(`/history/${symbol}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching market chart:', error);
        return [];
    }
};

export const fetchMarketChartByInterval = async (symbol: string, interval: string): Promise<{ price: number; date: string; open?: number; high?: number; low?: number; close?: number; volume?: number }[]> => {
    try {
        const response = await api.get(`/history/${symbol}/${interval}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching market chart with interval:', error);
        return [];
    }
};

export const fetchIndicators = async (symbol: string, interval: string = '1d') => {
    try {
        const response = await api.get(`/indicators/${symbol}`, {
            params: { interval }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching indicators:', error);
        return [];
    }
};

export const fetchFundamentals = async (symbol: string) => {
    try {
        const response = await api.get(`/fundamentals/${symbol}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching fundamentals:', error);
        return null;
    }
};

// Auth & Rating API

export const registerUser = async (username: string, password: string, email?: string) => {
    const response = await api.post('/register', { username, password, email });
    return response.data;
};

export const loginUser = async (username: string, password: string) => {
    const response = await api.post('/login', { username, password });
    return response.data;
};

export const syncGameState = async (username: string, gameState: any) => {
    const response = await api.post('/sync', { username, gameState });
    return response.data;
};

export const recoverPassword = async (username: string, email: string, newPassword: string) => {
    const response = await api.post('/recover', { username, email, newPassword });
    return response.data;
};

export const updateScore = async (username: string, portfolioValue: number) => {
    const response = await api.post('/update-score', { username, portfolioValue });
    return response.data;
};

export const fetchLeaderboard = async () => {
    const response = await api.get('/leaderboard');
    return response.data;
};

export const fetchNews = async () => {
    try {
        const response = await api.get('/news');
        return response.data;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};

export const fetchInsiderTips = async () => {
    try {
        const response = await api.get('/news/insider');
        return response.data;
    } catch (error) {
        console.error('Error fetching insider tips:', error);
        return [];
    }
};