import React, { useState } from 'react';
import { Shield, TrendingUp, TrendingDown, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../store/gameStore';
import { Card } from '../ui/Card';
import { formatPrice } from '../../utils/format';

interface OrderFormProps {
    assetId: string;
    currentPrice: number;
    ownedAmount: number;
}

export const OrderForm: React.FC<OrderFormProps> = ({ assetId, currentPrice, ownedAmount }) => {
    const { skills, orders, createOrder, cancelOrder } = useGameStore();
    const { t } = useTranslation();
    const [type, setType] = useState<'stop-loss' | 'take-profit'>('stop-loss');
    const [triggerPrice, setTriggerPrice] = useState<string>('');
    const [amount, setAmount] = useState<string>('1');

    if (!skills.stopLossMaster) {
        return (
            <Card className="p-4 mt-6 border-dashed border-2 bg-transparent opacity-60">
                <div className="flex items-center gap-3">
                    <Shield className="text-gray-400" />
                    <div>
                        <h3 className="font-bold">{t('stop_loss_master_locked')}</h3>
                        <p className="text-xs">{t('unlock_stop_loss_desc')}</p>
                    </div>
                </div>
            </Card>
        );
    }

    const assetOrders = orders.filter(o => o.assetId === assetId);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const price = parseFloat(triggerPrice);
        const amt = parseFloat(amount);

        if (isNaN(price) || isNaN(amt) || amt <= 0) return;
        if (amt > ownedAmount) {
            alert(t('not_enough_asset'));
            return;
        }

        createOrder(assetId, type, price, amt);
        setTriggerPrice('');
        setAmount('1');
    };

    return (
        <div className="mt-6 space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <Shield className="text-blue-500" size={20} />
                {t('automatic_orders')}
            </h3>

            {/* Create Order Form */}
            <Card className="p-4" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                <div className="flex gap-2 mb-4">
                    <button
                        onClick={() => setType('stop-loss')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2 ${type === 'stop-loss'
                            ? 'bg-red-500/20 text-red-500 border border-red-500/50'
                            : 'opacity-50 hover:opacity-100'
                            }`}
                        style={{
                            backgroundColor: type === 'stop-loss' ? '' : 'var(--bg-primary)',
                            color: type === 'stop-loss' ? '' : 'var(--text-primary)'
                        }}
                    >
                        <TrendingDown size={16} />
                        {t('stop_loss')}
                    </button>
                    <button
                        onClick={() => setType('take-profit')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2 ${type === 'take-profit'
                            ? 'bg-green-500/20 text-green-500 border border-green-500/50'
                            : 'opacity-50 hover:opacity-100'
                            }`}
                        style={{
                            backgroundColor: type === 'take-profit' ? '' : 'var(--bg-primary)',
                            color: type === 'take-profit' ? '' : 'var(--text-primary)'
                        }}
                    >
                        <TrendingUp size={16} />
                        {t('take_profit')}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="text-xs opacity-70 mb-1 block">{t('trigger_price')}</label>
                        <input
                            type="number"
                            value={triggerPrice}
                            onChange={(e) => setTriggerPrice(e.target.value)}
                            placeholder={type === 'stop-loss' ? `${t('below')} ${currentPrice}` : `${t('above')} ${currentPrice}`}
                            className="w-full p-3 rounded-xl border focus:border-blue-500 outline-none transition-colors"
                            style={{
                                backgroundColor: 'var(--bg-primary)',
                                color: 'var(--text-primary)',
                                borderColor: 'var(--card-border)'
                            }}
                            step="0.01"
                        />
                    </div>
                    <div>
                        <label className="text-xs opacity-70 mb-1 block">{t('amount_to')}</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            max={ownedAmount}
                            className="w-full p-3 rounded-xl border focus:border-blue-500 outline-none transition-colors"
                            style={{
                                backgroundColor: 'var(--bg-primary)',
                                color: 'var(--text-primary)',
                                borderColor: 'var(--card-border)'
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!triggerPrice || !amount || parseFloat(amount) > ownedAmount}
                        className="w-full py-3 rounded-xl font-bold bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-blue-500 transition-colors text-white"
                    >
                        {t('create_order')}
                    </button>
                </form>
            </Card>

            {/* Active Orders List */}
            {assetOrders.length > 0 && (
                <div className="space-y-2">
                    <h4 className="text-sm font-bold opacity-70 uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>{t('active_orders')}</h4>
                    {assetOrders.map(order => (
                        <Card key={order.id} className="p-3 flex justify-between items-center" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-full ${order.type === 'stop-loss' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
                                    {order.type === 'stop-loss' ? <TrendingDown size={16} /> : <TrendingUp size={16} />}
                                </div>
                                <div>
                                    <p className="font-bold text-sm">
                                        {order.type === 'stop-loss' ? t('stop_loss') : t('take_profit')} @ ${formatPrice(order.triggerPrice)}
                                    </p>
                                    <p className="text-xs opacity-60">{t('amount_to')}: {order.amount}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => cancelOrder(order.id)}
                                className="p-2 rounded-full hover:bg-white/10 text-red-400 transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};
