import React, { useState } from 'react';
import { Bitcoin, DollarSign, Box, Activity } from 'lucide-react';

interface AssetIconProps {
    symbol: string;
    type?: string;
    className?: string;
}

export const AssetIcon: React.FC<AssetIconProps> = ({ symbol, type, className = "w-10 h-10" }) => {
    const [error, setError] = useState(false);

    // Helper to get country code from currency
    const getCountryCode = (currency: string) => {
        const map: Record<string, string> = {
            'EUR': 'eu', 'GBP': 'gb', 'USD': 'us', 'JPY': 'jp', 'CNY': 'cn',
            'BRL': 'br', 'RUB': 'ru', 'INR': 'in', 'CAD': 'ca', 'AUD': 'au',
            'CHF': 'ch', 'NZD': 'nz', 'HKD': 'hk', 'SGD': 'sg'
        };
        return map[currency.toUpperCase()] || 'us';
    };

    // 1. Handle Crypto (BTC-USD -> btc)
    if (type === 'crypto' || ['BTC', 'ETH', 'SOL', 'BNB', 'XRP', 'ADA', 'DOGE', 'AVAX', 'DOT', 'MATIC'].includes(symbol.split('-')[0])) {
        const cryptoSymbol = symbol.split('-')[0].toLowerCase();
        const url = `https://assets.coincap.io/assets/icons/${cryptoSymbol}@2x.png`;

        if (error) {
            return (
                <div className={`${className} bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500`}>
                    <Bitcoin size={20} />
                </div>
            );
        }

        return <img src={url} alt={symbol} className={`${className} rounded-full`} onError={() => setError(true)} />;
    }

    // 2. Handle Forex (EURUSD=X -> eur -> eu flag)
    if (type === 'forex' || symbol.includes('=X')) {
        const base = symbol.substring(0, 3);
        const countryCode = getCountryCode(base);
        const url = `https://flagcdn.com/w80/${countryCode}.png`;

        if (error) {
            return (
                <div className={`${className} bg-green-500/10 rounded-full flex items-center justify-center text-green-500`}>
                    <DollarSign size={20} />
                </div>
            );
        }

        return <img src={url} alt={symbol} className={`${className} rounded-full object-cover`} onError={() => setError(true)} />;
    }

    // 3. Handle Commodities/Futures (GC=F, CL=F)
    if (type === 'future' || type === 'commodity' || symbol.includes('=F')) {
        // Custom Icons for Major Commodities
        if (symbol.startsWith('GC') || symbol === 'Gold') {
            return <img src="/assets/icons/gold.png" alt="Gold" className={`${className} rounded-full object-contain bg-white`} onError={() => setError(true)} />;
        }
        if (symbol.startsWith('SI') || symbol === 'Silver') {
            return <img src="/assets/icons/silver.png" alt="Silver" className={`${className} rounded-full object-contain bg-white`} onError={() => setError(true)} />;
        }
        if (symbol.startsWith('CL') || symbol === 'Oil' || symbol === 'Crude Oil') {
            return <img src="/assets/icons/oil.png" alt="Oil" className={`${className} rounded-full object-contain bg-white`} onError={() => setError(true)} />;
        }

        // Try FMP first, but if it fails, fallback to generic
        // FMP often uses 'GCUSD' or similar, but let's try the symbol without =F
        // GC=F -> GC
        const fmpSymbol = symbol.replace('=F', '');
        const url = `https://financialmodelingprep.com/image-stock/${fmpSymbol}.png`;

        if (error) {
            return (
                <div className={`${className} bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-600`}>
                    <Box size={20} />
                </div>
            );
        }

        return <img src={url} alt={symbol} className={`${className} rounded-full object-contain bg-white`} onError={() => setError(true)} />;
    }

    // 4. Handle Indices (^GSPC)
    if (type === 'index' || symbol.startsWith('^')) {
        // Indices are tricky. ^GSPC -> SPX?
        // Let's use a generic Activity icon for indices if FMP fails
        // FMP might have ^GSPC as SPY or similar.

        if (error) {
            return (
                <div className={`${className} bg-purple-500/10 rounded-full flex items-center justify-center text-purple-500`}>
                    <Activity size={20} />
                </div>
            );
        }

        // Try FMP with stripped ^
        const fmpSymbol = symbol.replace('^', '');
        const url = `https://financialmodelingprep.com/image-stock/${fmpSymbol}.png`;
        return <img src={url} alt={symbol} className={`${className} rounded-full object-contain bg-white`} onError={() => setError(true)} />;
    }

    // 5. Handle Stocks (AAPL, 7203.T)
    // FMP handles most US stocks. International might need adjustment.
    const url = `https://financialmodelingprep.com/image-stock/${symbol}.png`;

    if (error) {
        return (
            <div className={`${className} bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 font-bold text-sm`}>
                {symbol.substring(0, 2)}
            </div>
        );
    }

    return <img src={url} alt={symbol} className={`${className} rounded-full object-contain bg-white`} onError={() => setError(true)} />;
};
