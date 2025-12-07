import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../store/gameStore';
import { Card } from '../../components/ui/Card';
import { PieChart, ArrowLeft } from 'lucide-react';
import { AssetIcon } from '../../components/ui/AssetIcon';

export const Portfolio: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { portfolio, balance, getPortfolioValue } = useGameStore();
    const totalValue = getPortfolioValue(portfolio) + balance;

    return (
        <div className="pb-24 space-y-4">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: 'var(--text-primary)' }}
            >
                <ArrowLeft size={18} />
                {t('back')}
            </button>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {t('portfolio_title')}
            </h1>

            <Card className="p-3 border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                <div className="text-xs mb-1 opacity-60" style={{ color: 'var(--text-primary)' }}>{t('total_net_worth')}</div>
                <div className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>${totalValue.toLocaleString()}</div>
                <div className="flex gap-4 mt-3">
                    <div>
                        <div className="text-[10px] opacity-50" style={{ color: 'var(--text-primary)' }}>{t('cash_balance')}</div>
                        <div className="text-base font-bold text-blue-400">${balance.toLocaleString()}</div>
                    </div>
                    <div>
                        <div className="text-[10px] opacity-50" style={{ color: 'var(--text-primary)' }}>{t('invested')}</div>
                        <div className="text-base font-bold text-purple-400">${getPortfolioValue(portfolio).toLocaleString()}</div>
                    </div>
                </div>
            </Card>

            <div className="space-y-3">
                <h2 id="portfolio-manager" className="text-lg font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <PieChart size={18} className="text-blue-400" />
                    {t('holdings')}
                </h2>
                {portfolio.length === 0 ? (
                    <div className="text-center py-12 rounded-xl border opacity-60" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}>
                        {t('no_assets')}
                    </div>
                ) : (
                    portfolio.map((item) => (
                        <Card key={item.id} className="p-2 flex justify-between items-center" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                            <div className="flex items-center gap-3">
                                <AssetIcon symbol={item.id} />
                                <div>
                                    <div className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>{item.id}</div>
                                    <div className="text-xs opacity-60" style={{ color: 'var(--text-primary)' }}>{item.amount} {t('shares')}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>${(item.amount * item.avgPrice).toLocaleString()}</div>
                                <div className="text-[10px] opacity-50" style={{ color: 'var(--text-primary)' }}>Avg: ${item.avgPrice.toFixed(2)}</div>
                            </div>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};
