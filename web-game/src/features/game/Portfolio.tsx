import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../store/gameStore';
import { Card } from '../../components/ui/Card';
import { PieChart } from 'lucide-react';

export const Portfolio: React.FC = () => {
    const { t } = useTranslation();
    const { portfolio, balance, getPortfolioValue } = useGameStore();
    const totalValue = getPortfolioValue(portfolio) + balance;

    return (
        <div className="pb-24 space-y-6">
            <h1 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {t('portfolio_title')}
            </h1>

            <Card className="p-6 border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                <div className="text-sm mb-1 opacity-60" style={{ color: 'var(--text-primary)' }}>{t('total_net_worth')}</div>
                <div className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>${totalValue.toLocaleString()}</div>
                <div className="flex gap-4 mt-4">
                    <div>
                        <div className="text-xs opacity-50" style={{ color: 'var(--text-primary)' }}>{t('cash_balance')}</div>
                        <div className="text-lg font-bold text-blue-400">${balance.toLocaleString()}</div>
                    </div>
                    <div>
                        <div className="text-xs opacity-50" style={{ color: 'var(--text-primary)' }}>{t('invested')}</div>
                        <div className="text-lg font-bold text-purple-400">${getPortfolioValue(portfolio).toLocaleString()}</div>
                    </div>
                </div>
            </Card>

            <div className="space-y-4">
                <h2 id="portfolio-manager" className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <PieChart size={20} className="text-blue-400" />
                    {t('holdings')}
                </h2>
                {portfolio.length === 0 ? (
                    <div className="text-center py-12 rounded-xl border opacity-60" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}>
                        {t('no_assets')}
                    </div>
                ) : (
                    portfolio.map((item) => (
                        <Card key={item.id} className="p-4 flex justify-between items-center" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                            <div>
                                <div className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{item.id}</div>
                                <div className="text-sm opacity-60" style={{ color: 'var(--text-primary)' }}>{item.amount} {t('shares')}</div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold" style={{ color: 'var(--text-primary)' }}>${(item.amount * item.avgPrice).toLocaleString()}</div>
                                <div className="text-xs opacity-50" style={{ color: 'var(--text-primary)' }}>Avg: ${item.avgPrice.toFixed(2)}</div>
                            </div>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};
