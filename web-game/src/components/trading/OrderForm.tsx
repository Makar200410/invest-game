import React, { useState } from 'react';
import { Shield, TrendingUp, TrendingDown, X } from 'lucide-react';
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
    const [type, setType] = useState<'stop-loss' | 'take-profit'>('stop-loss');
    const [triggerPrice, setTriggerPrice] = useState<string>('');
    const [amount, setAmount] = useState<string>('1');

    if (!skills.stopLossMaster) {
        return (
            <Card className="p-4 mt-6 border-dashed border-2 bg-transparent opacity-60">
                <div className="flex items-center gap-3">
                    <Shield className="text-gray-400" />
                    <div>
                        <h3 className="font-bold">Stop Loss Master Locked</h3>
                        <p className="text-xs">Unlock this skill to set automatic orders.</p>
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
            alert("You don't own enough of this asset!");
            return;
        }

        createOrder(assetId, type, price, amt);
        setTriggerPrice('');
        setAmount('1');
    };

    return (
        <div className="mt-6 space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
                <Shield className="text-blue-500" size={20} />
                Automatic Orders
            </h3>

            {/* Create Order Form */}
            <Card className="p-4" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                <div className="flex gap-2 mb-4">
                    <button
                        onClick={() => setType('stop-loss')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2 ${type === 'stop-loss'
                            ? 'bg-red-500/20 text-red-500 border border-red-500/50'
                            : 'bg-gray-100 hover:bg-gray-200 text-black'
                            }`}
                    >
                        <TrendingDown size={16} />
                        Stop Loss
                    </button>
                    <button
                        onClick={() => setType('take-profit')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2 ${type === 'take-profit'
                            ? 'bg-green-500/20 text-green-500 border border-green-500/50'
                            : 'bg-gray-100 hover:bg-gray-200 text-black'
                            }`}
                    >
                        <TrendingUp size={16} />
                        Take Profit
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="text-xs opacity-70 mb-1 block">Trigger Price ($)</label>
                        <input
                            type="number"
                            value={triggerPrice}
                            onChange={(e) => setTriggerPrice(e.target.value)}
                            placeholder={type === 'stop-loss' ? `Below ${currentPrice}` : `Above ${currentPrice}`}
                            className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none transition-colors text-black"
                            step="0.01"
                        />
                    </div>
                    <div>
                        <label className="text-xs opacity-70 mb-1 block">Amount</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            max={ownedAmount}
                            className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none transition-colors text-black"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!triggerPrice || !amount || parseFloat(amount) > ownedAmount}
                        className="w-full py-3 rounded-xl font-bold bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-blue-500 transition-colors"
                    >
                        Create Order
                    </button>
                </form>
            </Card>

            {/* Active Orders List */}
            {assetOrders.length > 0 && (
                <div className="space-y-2">
                    <h4 className="text-sm font-bold opacity-70 uppercase tracking-wider">Active Orders</h4>
                    {assetOrders.map(order => (
                        <Card key={order.id} className="p-3 flex justify-between items-center" style={{ backgroundColor: 'var(--card-bg)' }}>
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-full ${order.type === 'stop-loss' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
                                    {order.type === 'stop-loss' ? <TrendingDown size={16} /> : <TrendingUp size={16} />}
                                </div>
                                <div>
                                    <p className="font-bold text-sm">
                                        {order.type === 'stop-loss' ? 'Stop Loss' : 'Take Profit'} @ ${formatPrice(order.triggerPrice)}
                                    </p>
                                    <p className="text-xs opacity-60">Amount: {order.amount}</p>
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
