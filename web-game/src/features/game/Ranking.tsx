import React, { useEffect, useState } from 'react';

import { Trophy, TrendingUp, TrendingDown, Target, AlertTriangle, Shield } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { Card } from '../../components/ui/Card';
import { fetchLeaderboard, registerForTournament, fetchTournamentStatus } from '../../services/api';

interface LeaderboardUser {
    username: string;
    portfolioValue: number;
    rankTier: number;
    isInTournament: boolean;
}

interface TournamentStatus {
    isInTournament: boolean;
    rankTier: number;
    levelName: string;
    startBalance: number;
    currentBalance: number;
    profit: number;
    profitPercent: number;
    requirements: {
        promote: number;
        demote: number | null;
    };
    nextLevelName: string;
}

const LEVEL_COLORS = [
    'text-orange-400', // Bronze
    'text-gray-300',   // Silver
    'text-yellow-400', // Gold
    'text-cyan-400',   // Platinum
    'text-purple-400', // Diamond
    'text-red-500'     // Grandmaster
];

const getLevelColor = (tier: number) => {
    if (tier <= 3) return LEVEL_COLORS[0];
    if (tier <= 6) return LEVEL_COLORS[1];
    if (tier <= 9) return LEVEL_COLORS[2];
    if (tier <= 12) return LEVEL_COLORS[3];
    if (tier <= 14) return LEVEL_COLORS[4];
    return LEVEL_COLORS[5];
};

export const Ranking: React.FC = () => {
    const { user } = useGameStore();
    const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
    const [tournamentStatus, setTournamentStatus] = useState<TournamentStatus | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [registering, setRegistering] = useState(false);

    const loadData = async () => {
        try {
            setLoading(true);
            const [lbData, statusData] = await Promise.all([
                fetchLeaderboard(),
                user ? fetchTournamentStatus(user.username) : Promise.resolve(null)
            ]);
            setLeaderboard(lbData);
            setTournamentStatus(statusData);
        } catch (err) {
            console.error('Failed to load ranking data:', err);
            setError('Failed to load ranking.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, [user]);

    const handleRegister = async () => {
        if (!user) return;
        try {
            setRegistering(true);
            await registerForTournament(user.username);
            await loadData(); // Reload to show status
        } catch (err) {
            console.error('Registration failed:', err);
            alert('Failed to register for tournament');
        } finally {
            setRegistering(false);
        }
    };

    return (
        <div className="space-y-6 pb-20">
            {/* Tournament Section */}
            <Card className="p-4 border-yellow-500/30 bg-gradient-to-br from-yellow-900/10 to-transparent">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold flex items-center gap-2 text-yellow-500">
                        <Trophy size={24} />
                        Weekly Tournament
                    </h2>
                    {tournamentStatus?.isInTournament && (
                        <span className={`text-sm font-bold px-3 py-1 rounded-full bg-black/30 ${getLevelColor(tournamentStatus.rankTier)}`}>
                            {tournamentStatus.levelName}
                        </span>
                    )}
                </div>

                {!tournamentStatus?.isInTournament ? (
                    <div className="text-center py-4">
                        <p className="mb-4 opacity-80">Join the weekly tournament to climb the ranks and prove your skills!</p>
                        <button
                            onClick={handleRegister}
                            disabled={registering}
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 disabled:opacity-50"
                        >
                            {registering ? 'Joining...' : 'Join Tournament'}
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-black/20 p-3 rounded-lg">
                                <span className="text-xs opacity-60 block">Current Profit</span>
                                <div className={`text-lg font-bold flex items-center gap-1 ${tournamentStatus.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {tournamentStatus.profit >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                                    {(tournamentStatus.profitPercent * 100).toFixed(2)}%
                                </div>
                            </div>
                            <div className="bg-black/20 p-3 rounded-lg">
                                <span className="text-xs opacity-60 block">Next Level</span>
                                <div className="text-lg font-bold text-blue-400">
                                    {tournamentStatus.nextLevelName}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="flex items-center gap-1 text-green-400">
                                    <Target size={14} />
                                    Promote: &ge; {(tournamentStatus.requirements.promote * 100).toFixed(1)}%
                                </span>
                                {tournamentStatus.requirements.demote !== null && (
                                    <span className="flex items-center gap-1 text-red-400">
                                        <AlertTriangle size={14} />
                                        Demote: &lt; {(tournamentStatus.requirements.demote * 100).toFixed(1)}%
                                    </span>
                                )}
                            </div>

                            {/* Progress Bar (Visual approximation) */}
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden relative">
                                <div
                                    className={`absolute h-full transition-all duration-500 ${tournamentStatus.profit >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
                                    style={{
                                        width: `${Math.min(Math.abs(tournamentStatus.profitPercent) * 100 * 2, 100)}%`, // Scale for visibility
                                        left: tournamentStatus.profit >= 0 ? '50%' : undefined,
                                        right: tournamentStatus.profit < 0 ? '50%' : undefined
                                    }}
                                />
                                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/50" />
                            </div>
                        </div>
                    </div>
                )}
            </Card>

            {/* Leaderboard Section */}
            <div className="space-y-3">
                <h3 className="text-lg font-bold opacity-80">Global Ranking</h3>
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
                                className={`flex justify-between items-center p-3 backdrop-blur-md transition-colors ${index === 0 ? 'border-yellow-500/50 bg-yellow-500/5' :
                                    index === 1 ? 'border-gray-400/50 bg-gray-400/5' :
                                        index === 2 ? 'border-amber-600/50 bg-amber-600/5' :
                                            isCurrentUser ? 'border-blue-500 bg-blue-500/10' : 'border-transparent'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`
                                        w-8 h-8 rounded-full flex items-center justify-center font-black text-sm
                                        ${index === 0 ? 'bg-yellow-500 text-black' :
                                            index === 1 ? 'bg-gray-400 text-black' :
                                                index === 2 ? 'bg-amber-700 text-white' :
                                                    'bg-gray-700 text-gray-400'}
                                    `}>
                                        {index + 1}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className={`font-bold ${isCurrentUser ? 'text-blue-400' : 'text-gray-200'}`}>
                                                {player.username}
                                            </span>
                                            {player.isInTournament && (
                                                <Shield size={14} className={getLevelColor(player.rankTier)} />
                                            )}
                                        </div>
                                        {isCurrentUser && <span className="text-[10px] uppercase font-bold text-blue-400">You</span>}
                                    </div>
                                </div>
                                <span className="font-mono font-bold text-green-400">
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
