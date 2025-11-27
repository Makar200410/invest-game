import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { Card } from '../../components/ui/Card';
import { PieChart } from 'lucide-react';

export const Portfolio: React.FC = () => {
    const { portfolio, balance, getPortfolioValue } = useGameStore();
    const totalValue = getPortfolioValue(portfolio) + balance;

    return (
        <div className="pb-24 space-y-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Portfolio
            </h1>

            <Card className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30">
                <div className="text-sm text-gray-400 mb-1">Total Net Worth</div>
                <div className="text-4xl font-bold text-white">${totalValue.toLocaleString()}</div>
                <div className="flex gap-4 mt-4">
                    <div>
                        <div className="text-xs text-gray-500">Cash Balance</div>
                        <div className="text-lg font-bold text-blue-400">${balance.toLocaleString()}</div>
                    </div>
                    <div>
                        <div className="text-xs text-gray-500">Invested</div>
                        <div className="text-lg font-bold text-purple-400">${getPortfolioValue(portfolio).toLocaleString()}</div>
                    </div>
                </div>
            </Card>

            <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <PieChart size={20} className="text-blue-400" />
                    Holdings
                </h2>
                {portfolio.length === 0 ? (
                    <div className="text-center py-12 text-gray-500 bg-gray-900/50 rounded-xl border border-gray-800">
                        No assets in portfolio
                    </div>
                ) : (
                    portfolio.map((item) => (
                        <Card key={item.id} className="p-4 flex justify-between items-center">
                            <div>
                                <div className="font-bold text-lg">{item.id}</div>
                                <div className="text-sm text-gray-400">{item.amount} shares</div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold">${(item.amount * item.avgPrice).toLocaleString()}</div>
                                <div className="text-xs text-gray-500">Avg: ${item.avgPrice.toFixed(2)}</div>
                            </div>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};
