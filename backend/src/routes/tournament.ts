import express from 'express';
import { getUser, updateUser, getUsers } from '../services/storage.js';

const router = express.Router();

// Level Definitions
const LEVELS = [
    { tier: 1, name: "Bronze I", promote: -0.5, demote: null }, // > -50%
    { tier: 2, name: "Bronze II", promote: -0.2, demote: -0.5 }, // > -20%, < -50%
    { tier: 3, name: "Bronze III", promote: 0, demote: -0.3 }, // >= 0%, < -30%
    { tier: 4, name: "Silver I", promote: 0.05, demote: -0.2 }, // >= 5%, < -20%
    { tier: 5, name: "Silver II", promote: 0.08, demote: -0.15 }, // >= 8%, < -15%
    { tier: 6, name: "Silver III", promote: 0.12, demote: -0.12 }, // >= 12%, < -12%
    { tier: 7, name: "Gold I", promote: 0.16, demote: -0.10 }, // >= 16%, < -10%
    { tier: 8, name: "Gold II", promote: 0.19, demote: -0.08 }, // >= 19%, < -8%
    { tier: 9, name: "Gold III", promote: 0.23, demote: -0.05 }, // >= 23%, < -5%
    { tier: 10, name: "Platinum I", promote: 0.25, demote: -0.04 }, // >= 25%, < -4%
    { tier: 11, name: "Platinum II", promote: 0.30, demote: -0.03 }, // >= 30%, < -3%
    { tier: 12, name: "Platinum III", promote: 0.35, demote: -0.02 }, // >= 35%, < -2%
    { tier: 13, name: "Diamond I", promote: 0.40, demote: -0.015 }, // >= 40%, < -1.5%
    { tier: 14, name: "Diamond II", promote: 0.50, demote: -0.01 }, // >= 50%, < -1%
    { tier: 15, name: "Grandmaster", promote: 100, demote: -0.005 } // Max, < -0.5%
];

// Register for Tournament
router.post('/register', async (req, res) => {
    const { username } = req.body;
    if (!username) return res.status(400).json({ error: 'Username required' });

    try {
        const user = await getUser(username);
        if (!user) return res.status(404).json({ error: 'User not found' });

        if (user.isInTournament) {
            return res.status(400).json({ error: 'Already registered for tournament' });
        }

        // Snapshot current balance as start balance
        await updateUser(username, {
            isInTournament: true,
            weeklyStartBalance: user.portfolioValue
        });

        res.json({ success: true, message: 'Registered for tournament', level: user.rankTier || 1 });
    } catch (error) {
        console.error('Error registering for tournament:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get Tournament Status
router.get('/status/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const user = await getUser(username);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const currentLevel = LEVELS.find(l => l.tier === (user.rankTier || 1)) || LEVELS[0];
        const nextLevel = LEVELS.find(l => l.tier === (user.rankTier || 1) + 1);

        // Calculate progress
        const startBalance = user.weeklyStartBalance || user.portfolioValue;
        const currentBalance = user.portfolioValue;
        const profit = currentBalance - startBalance;
        const profitPercent = startBalance > 0 ? profit / startBalance : 0;

        res.json({
            isInTournament: user.isInTournament || false,
            rankTier: user.rankTier || 1,
            levelName: currentLevel.name,
            startBalance,
            currentBalance,
            profit,
            profitPercent,
            requirements: {
                promote: currentLevel.promote,
                demote: currentLevel.demote
            },
            nextLevelName: nextLevel ? nextLevel.name : 'Max Level'
        });
    } catch (error) {
        console.error('Error fetching tournament status:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get Leaderboard
router.get('/leaderboard', async (req, res) => {
    try {
        const users = await getUsers();

        // Filter only tournament players? Or all? User said "balance rating where all players are displayed"
        // But also "first 10 players are highlighted".
        // Let's return all, sorted by balance.

        const leaderboard = users
            .sort((a, b) => b.portfolioValue - a.portfolioValue)
            .map(u => ({
                username: u.username,
                portfolioValue: u.portfolioValue,
                rankTier: u.rankTier || 1,
                isInTournament: u.isInTournament || false,
                isPremium: u.isPremium || false
            }))
            .slice(0, 100); // Top 100

        res.json(leaderboard);
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Admin/Cron: Process Weekly Results
// This should be protected or run via cron internally, but exposing for testing
router.post('/process-week', async (req, res) => {
    const { secret } = req.body;
    if (secret !== process.env.ADMIN_SECRET && secret !== 'dev_secret') {
        return res.status(403).json({ error: 'Unauthorized' });
    }

    try {
        const users = await getUsers();
        const tournamentUsers = users.filter(u => u.isInTournament);
        const results = [];

        for (const user of tournamentUsers) {
            const startBalance = user.weeklyStartBalance || user.portfolioValue;
            const currentBalance = user.portfolioValue;
            const profitPercent = startBalance > 0 ? (currentBalance - startBalance) / startBalance : 0;

            const currentTier = user.rankTier || 1;
            const levelConfig = LEVELS.find(l => l.tier === currentTier) || LEVELS[0];

            let newTier = currentTier;
            let action = 'maintain';

            // Promotion Logic
            if (profitPercent >= levelConfig.promote) {
                if (currentTier < 15) {
                    newTier++;
                    action = 'promote';
                }
            }
            // Demotion Logic
            else if (levelConfig.demote !== null && profitPercent < levelConfig.demote) {
                if (currentTier > 1) {
                    newTier--;
                    action = 'demote';
                }
            }

            if (newTier !== currentTier) {
                await updateUser(user.username, {
                    rankTier: newTier,
                    weeklyStartBalance: currentBalance // Reset for next week
                });
            } else {
                // Even if level stays same, reset start balance for new week?
                // Yes, "tournament goes on for a week".
                await updateUser(user.username, {
                    weeklyStartBalance: currentBalance
                });
            }

            results.push({
                username: user.username,
                oldTier: currentTier,
                newTier,
                profitPercent,
                action
            });
        }

        res.json({ success: true, processed: results.length, results });
    } catch (error) {
        console.error('Error processing weekly results:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
