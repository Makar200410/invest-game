import axios from 'axios';

import newsRepo from '../data/news_repository.json';

// Default Public Tunnel URL
const DEFAULT_BACKEND_URL = 'https://invest-game-production.up.railway.app';

// Get URL from storage or use default
const getBackendUrl = () => {
    const storedUrl = localStorage.getItem('custom_backend_url');
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

export const checkBackendHealth = async () => {
    try {
        const response = await api.get('/health');
        console.log('Backend Health:', response.data);
        return response.data;
    } catch (error) {
        console.error('Backend Health Check Failed:', error);
        return null;
    }
};

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

// Use backend API
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
    return fetchMarketChartByInterval(symbol, '5m');
};

export const fetchMarketChartByInterval = async (symbol: string, interval: string): Promise<{ price: number; date: string; open?: number; high?: number; low?: number; close?: number; volume?: number }[]> => {
    try {
        const response = await api.get(`/history/${symbol}/${interval}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching chart for ${symbol} (${interval}):`, error);
        return [];
    }
};

export const fetchIndicators = async (symbol: string, interval: string = '1d') => {
    try {
        const response = await api.get(`/indicators/${symbol}`, { params: { interval } });
        return response.data;
    } catch (e) {
        console.error('Error fetching indicators:', e);
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

// Auth & Rating API (Keep Server Side)

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
    // Filter news for "insider" tags or simulate
    await new Promise(resolve => setTimeout(resolve, 500));
    return (newsRepo as any[]).slice(0, 2).map(n => ({
        ...n,
        content: "Insider Tip: Market movement expected.",
        impact: "High",
        reliability: "Unverified"
    }));
};