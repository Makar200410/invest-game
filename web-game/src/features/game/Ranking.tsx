import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Trophy, User } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { Card } from '../../components/ui/Card';
import { fetchLeaderboard } from '../../services/api';

interface LeaderboardUser {
    username: string;
    portfolioValue: number;
}

export const Ranking: React.FC = () => {
    const { t } = useTranslation();
    const { user } = useGameStore();
    const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadLeaderboard = async () => {
            try {
                setLoading(true);
                const data = await fetchLeaderboard();
                console.log('Leaderboard data:', data);
                setLeaderboard(data);
            } catch (err) {
                console.error('Failed to load leaderboard:', err);
                setError('Failed to load ranking.');
            } finally {
                setLoading(false);
            }
        };
        loadLeaderboard();
    }, []);

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <Trophy className="text-yellow-500" />
                {t('rank')}
            </h2>

            <div className="space-y-3">
                {loading ? (
                    <div className="text-center py-8">Loading ranking...</div>
                ) : error ? (
                    <div className="text-center py-8 text-red-500">{error}</div>
                ) : leaderboard.length === 0 ? (
                    <div className="text-center opacity-50 py-8">No players yet. Be the first!</div>
                ) : (
                    leaderboard.map((player, index) => {
                        const isCurrentUser = user && player.username === user.username;

                        return (
                            <Card
                                key={index}
                                className={`flex justify-between items-center p-4 backdrop-blur-md transition-colors ${index === 0 ? 'border-yellow-500/50' :
                                    index === 1 ? 'border-gray-400/50' :
                                        index === 2 ? 'border-amber-600/50' :
                                            isCurrentUser ? 'border-blue-500' : 'border-transparent'
                                    }`}
                                style={{
                                    backgroundColor: isCurrentUser ? 'rgba(59, 130, 246, 0.1)' : 'var(--card-bg)',
                                    borderColor: isCurrentUser ? 'var(--accent-color)' : undefined,
                                    color: 'var(--text-primary)'
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`
                                        w-10 h-10 rounded-full flex items-center justify-center font-black text-lg
                                        ${index === 0 ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/50' :
                                            index === 1 ? 'bg-gray-400 text-white shadow-lg shadow-gray-400/50' :
                                                index === 2 ? 'bg-amber-700 text-white shadow-lg shadow-amber-700/50' :
                                                    'bg-gray-200 dark:bg-gray-700 text-gray-500'}
                                    `}>
                                        {index + 1}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'var(--bg-primary)' }}>
                                            <User size={20} style={{ color: isCurrentUser ? 'var(--accent-color)' : 'var(--text-primary)', opacity: isCurrentUser ? 1 : 0.5 }} />
                                        </div>
                                        <div>
                                            <span className="font-bold block leading-tight" style={{ color: isCurrentUser ? 'var(--accent-color)' : 'var(--text-primary)' }}>{player.username}</span>
                                            {isCurrentUser && <span className="text-[10px] uppercase font-bold opacity-70" style={{ color: 'var(--accent-color)' }}>You</span>}
                                        </div>
                                    </div>
                                </div>
                                <span className="font-mono font-bold text-lg" style={{ color: '#22c55e' }}>
                                    ${player.portfolioValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                </span>
                            </Card>
                        );
                    })
                )}
            </div>
        </div>
    );
};
