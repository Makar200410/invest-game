import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Lock, Search, ArrowUpDown } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { fetchCryptoMarket, fetchMarketChartByInterval, type MarketItem } from '../../services/api';
import { formatPrice } from '../../utils/format';
import { AssetIcon } from '../../components/ui/AssetIcon';

type SortOption = 'popular' | 'price_desc' | 'price_asc' | 'change_desc' | 'change_asc' | 'name_asc';

export const MarketPage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { portfolio, leveragedPositions, skills, checkOrders } = useGameStore();
    const [items, setItems] = useState<MarketItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [marketInterval] = useState<string>('1d');
    const [activeTab, setActiveTab] = useState<string>(() => localStorage.getItem('marketActiveTab') || 'popular');
    const [selectedCountry, setSelectedCountry] = useState<string>(() => localStorage.getItem('marketSelectedCountry') || 'all');

    // New States for Search and Sort
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<SortOption>('popular');
    const [showSortMenu, setShowSortMenu] = useState(false);

    const POPULAR_IDS = [
        'BTC-USD', 'ETH-USD', 'SOL-USD',
        'AAPL', 'NVDA', 'TSLA', 'MSFT', 'AMZN', 'GOOGL', 'META',
        'GC=F', 'CL=F',
        'EURUSD=X', 'GBPUSD=X',
        '^GSPC', '^DJI', '^IXIC',
        '^FTSE', '^GDAXI', '^N225'
    ];

    const COUNTRIES = [
        { id: 'all', label: 'country_all' },
        { id: 'us', label: 'country_us' },
        { id: 'uk', label: 'country_uk' },
        { id: 'de', label: 'country_de' },
        { id: 'fr', label: 'country_fr' },
        { id: 'es', label: 'country_es' },
        { id: 'cn', label: 'country_cn' },
        { id: 'jp', label: 'country_jp' },
        { id: 'br', label: 'country_br' },
    ];

    const getCountry = (symbol: string): string => {
        if (symbol.endsWith('.L')) return 'uk';
        if (symbol.endsWith('.DE')) return 'de';
        if (symbol.endsWith('.PA')) return 'fr';
        if (symbol.endsWith('.MC')) return 'es';
        if (symbol.endsWith('.HK') || symbol.endsWith('.SS') || symbol.endsWith('.SZ')) return 'cn';
        if (symbol.endsWith('.T')) return 'jp';
        if (symbol.endsWith('.SA')) return 'br';
        return 'us';
    };

    useEffect(() => {
        localStorage.setItem('marketActiveTab', activeTab);
    }, [activeTab]);

    useEffect(() => {
        localStorage.setItem('marketSelectedCountry', selectedCountry);
    }, [selectedCountry]);

    const [prevPrices, setPrevPrices] = useState<Record<string, number>>({});
    const [priceFlashes, setPriceFlashes] = useState<Record<string, 'up' | 'down' | null>>({});

    const loadFullData = async () => {
        setLoading(true);
        const allAssets = await fetchCryptoMarket(false);

        if (skills.multiTimeframe && marketInterval !== '1d') {
            const assetsWithCharts = await Promise.all(
                allAssets.map(async (asset) => {
                    try {
                        const chartData = await fetchMarketChartByInterval(asset.id, marketInterval);
                        const cleanChartData = chartData.length > 1 ? chartData.slice(0, -1) : chartData;
                        return { ...asset, sparkline: cleanChartData };
                    } catch (e) {
                        return asset;
                    }
                })
            );
            setItems(assetsWithCharts);
        } else {
            setItems(allAssets);
        }

        allAssets.forEach(asset => {
            checkOrders(asset.id, asset.price);
        });

        setLoading(false);
    };

    const updatePricesOnly = async () => {
        const priceUpdates = await fetchCryptoMarket(true);

        setItems(prevItems => {
            const newFlashes: Record<string, 'up' | 'down' | null> = {};
            const newPrevPrices: Record<string, number> = { ...prevPrices };

            const updatedItems = prevItems.map(item => {
                const update = priceUpdates.find(u => u.id === item.id);
                if (update) {
                    if (update.price > item.price) {
                        newFlashes[item.id] = 'up';
                    } else if (update.price < item.price) {
                        newFlashes[item.id] = 'down';
                    }
                    newPrevPrices[item.id] = item.price;

                    let newSparkline = item.sparkline;
                    if (newSparkline && newSparkline.length > 0) {
                        const newPoint = { price: update.price, date: new Date().toISOString() };
                        newSparkline = [...newSparkline, newPoint].slice(-90);
                    }

                    return {
                        ...item,
                        price: update.price,
                        change24h: update.change24h,
                        high24h: update.high24h,
                        low24h: update.low24h,
                        sparkline: newSparkline
                    };
                }
                return item;
            });

            setPriceFlashes(newFlashes);
            setPrevPrices(newPrevPrices);

            setTimeout(() => {
                setPriceFlashes({});
            }, 1000);

            return updatedItems;
        });

        priceUpdates.forEach(asset => {
            checkOrders(asset.id, asset.price);
        });
    };

    useEffect(() => {
        loadFullData();
    }, []);

    useEffect(() => {
        const interval = setInterval(updatePricesOnly, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        loadFullData();
    }, [marketInterval, skills.multiTimeframe]);

    // Filtering and Sorting
    const filteredAndSortedItems = items
        .filter(item => {
            // Search Filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                return item.name.toLowerCase().includes(query) || item.symbol.toLowerCase().includes(query);
            }

            // Category Filter
            if (activeTab === 'popular') return POPULAR_IDS.includes(item.id);
            if (activeTab === 'stock') {
                if (item.type !== 'stock') return false;
                if (selectedCountry === 'all') return true;
                return getCountry(item.symbol) === selectedCountry;
            }
            return item.type === activeTab;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'price_desc': return b.price - a.price;
                case 'price_asc': return a.price - b.price;
                case 'change_desc': return b.change24h - a.change24h;
                case 'change_asc': return a.change24h - b.change24h;
                case 'name_asc': return a.name.localeCompare(b.name);
                default: return 0; // Keep original order (usually market cap or popularity)
            }
        });

    return (
        <div className="space-y-3 pb-24 pt-4">
            {/* Search and Sort Header */}
            <div className="px-4 flex gap-2 items-center">
                <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={16} className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t('search_assets', 'Search assets...')}
                        className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 outline-none text-sm transition-all"
                        style={{ color: 'var(--text-primary)' }}
                    />
                </div>
                <div className="relative">
                    <button
                        onClick={() => setShowSortMenu(!showSortMenu)}
                        className={`p-2 rounded-xl border transition-all ${showSortMenu ? 'bg-blue-500 text-white border-blue-500' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'}`}
                    >
                        <ArrowUpDown size={20} />
                    </button>

                    {showSortMenu && (
                        <>
                            <div className="fixed inset-0 z-10" onClick={() => setShowSortMenu(false)}></div>
                            <div className="absolute right-0 top-full mt-2 w-40 rounded-xl border border-white/10 shadow-xl backdrop-blur-xl bg-black/80 z-20 overflow-hidden">
                                {[
                                    { id: 'popular', label: t('sort_popular', 'Popular') },
                                    { id: 'price_desc', label: t('sort_price_high', 'Price: High to Low') },
                                    { id: 'price_asc', label: t('sort_price_low', 'Price: Low to High') },
                                    { id: 'change_desc', label: t('sort_change_high', 'Change: High to Low') },
                                    { id: 'change_asc', label: t('sort_change_low', 'Change: Low to High') },
                                    { id: 'name_asc', label: t('sort_name', 'Name: A-Z') },
                                ].map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => { setSortBy(option.id as SortOption); setShowSortMenu(false); }}
                                        className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-white/10 transition-colors ${sortBy === option.id ? 'text-blue-500' : 'text-gray-400'}`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Category Tabs (Hidden if searching) */}
            {!searchQuery && (
                <div className="px-4 pb-2">
                    <div className="flex flex-wrap gap-2 justify-start pb-2">
                        {[
                            { id: 'popular', label: t('cat_popular') },
                            { id: 'stock', label: t('cat_stocks') },
                            { id: 'crypto', label: t('cat_crypto') },
                            { id: 'index', label: t('cat_indices') },
                            { id: 'future', label: t('cat_futures') },
                            { id: 'forex', label: t('cat_forex') },
                            { id: 'commodity', label: t('cat_commodities') }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-white/5 text-gray-500 hover:bg-white/10'
                                    }`}
                                style={{
                                    color: activeTab === tab.id ? '#ffffff' : 'var(--text-primary)',
                                    opacity: activeTab === tab.id ? 1 : 0.6
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Country Filter for Stocks (Hidden if searching) */}
            {!searchQuery && activeTab === 'stock' && (
                <div className="px-4 pb-2">
                    <div className="flex flex-wrap gap-2 justify-start pb-2">
                        {COUNTRIES.map((country) => (
                            <button
                                key={country.id}
                                onClick={() => setSelectedCountry(country.id)}
                                className={`px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap transition-all ${selectedCountry === country.id
                                    ? 'bg-blue-500/20 text-blue-500 border border-blue-500/50'
                                    : 'bg-white/5 text-gray-500 hover:bg-white/10 border border-transparent'
                                    }`}
                            >
                                {t(country.label)}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {loading ? (
                <div className="flex justify-center p-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="grid gap-2 grid-cols-1 px-4">
                    {filteredAndSortedItems.map((item, index) => {
                        const portfolioItem = portfolio.find(p => p.id === item.id);
                        const leveragedAmount = leveragedPositions
                            .filter(p => p.assetId === item.id)
                            .reduce((sum, p) => sum + p.amount, 0);
                        const owned = (portfolioItem?.amount || 0) + leveragedAmount;

                        const flash = priceFlashes[item.id];
                        const flashClass = flash === 'up' ? 'bg-emerald-500/40' : flash === 'down' ? 'bg-rose-500/40' : '';

                        return (
                            <div
                                key={item.id}
                                id={index === 0 ? 'tutorial-first-stock-item' : `tutorial-stock-item-${item.id}`}
                                onClick={() => navigate(`/stock/${item.id}`)}
                                className={`group rounded-2xl p-2 shadow-sm border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden ${flashClass}`}
                                style={{ backgroundColor: flash ? undefined : 'var(--card-bg)', borderColor: 'var(--card-border)', transition: 'background-color 0.5s ease' }}
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                        <AssetIcon symbol={item.symbol} type={item.type} />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-base leading-tight truncate" style={{ color: 'var(--text-primary)' }}>{item.name}</h3>
                                            <p className="text-xs font-medium opacity-60" style={{ color: 'var(--text-primary)' }}>{item.symbol}</p>
                                        </div>
                                    </div>

                                    <div className="text-right shrink-0">
                                        <p className="font-black text-base" style={{ color: 'var(--text-primary)' }}>${formatPrice(item.price)}</p>
                                        <p className={`text-xs font-bold ${item.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {item.change24h >= 0 ? '+' : ''}{item.change24h.toFixed(2)}%
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-2 pt-2 border-t" style={{ borderColor: 'var(--card-border)' }}>
                                    {owned > 0 ? (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); navigate(`/trade/${item.id}?type=sell`); }}
                                            className="flex-1 px-3 py-1.5 rounded-lg bg-violet-50 text-violet-600 font-bold text-xs hover:bg-violet-100 transition-all"
                                        >
                                            {t('sell')}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (skills.shortSelling) {
                                                    navigate(`/trade/${item.id}?type=short`);
                                                } else {
                                                    navigate('/skills');
                                                }
                                            }}
                                            className={`flex-1 px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1 ${skills.shortSelling
                                                ? 'bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20'
                                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                }`}
                                        >
                                            {t('short')} {!skills.shortSelling && <Lock size={10} />}
                                        </button>
                                    )}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); navigate(`/trade/${item.id}?type=buy`); }}
                                        className="flex-1 px-3 py-1.5 rounded-lg bg-black text-white font-bold text-xs hover:bg-gray-800 transition-all"
                                    >
                                        {t('buy')}
                                    </button>
                                </div>
                            </div >
                        );
                    })}
                </div >
            )}
        </div >
    );
};
