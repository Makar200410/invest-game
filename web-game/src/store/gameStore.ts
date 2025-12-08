import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PortfolioItem {
    id: string;
    amount: number;
    avgPrice: number;
}

interface LeveragedPosition {
    id: string;
    assetId: string;
    amount: number;
    entryPrice: number;
    leverage: number;
}

interface ShortPosition {
    id: string;
    assetId: string;
    amount: number;
    entryPrice: number;
    leverage: number;
    marginLocked: number;
}

interface Order {
    id: string;
    assetId: string;
    type: 'stop-loss' | 'take-profit';
    triggerPrice: number;
    amount: number;
    createdAt: number;
}

interface User {
    id: string;
    username: string;
    rankTier?: number;
    weeklyStartBalance?: number;
    isInTournament?: boolean;
}

interface Skills {
    stopLossMaster: boolean;
    leverageTrading: boolean;
    shortSelling: boolean;
    multiTimeframe: boolean;
    dayTrader: boolean;
    technicalAnalyst: boolean;
    fundamentalAnalyst: boolean;
    portfolioManager: boolean;
    marketTimer: boolean;
    riskManager: boolean;
    newsAlert: boolean;
    insiderInfo: boolean;
}

type SkillKey = keyof Skills;

interface SkillDefinition {
    name: string;
    description: string;
    cost: number;
}

const SKILL_DEFINITIONS: Record<SkillKey, SkillDefinition> = {
    stopLossMaster: {
        name: 'Stop Loss Master',
        description: 'Set automatic stop-loss and take-profit orders',
        cost: 5
    },
    leverageTrading: {
        name: 'Leverage Trading',
        description: 'Trade with 2x leverage',
        cost: 10
    },
    shortSelling: {
        name: 'Short Selling',
        description: 'Profit from price decreases',
        cost: 8
    },
    multiTimeframe: {
        name: 'Multi-Timeframe Charts',
        description: 'Access 1m, 15m, 1h, 3h chart intervals',
        cost: 6
    },
    dayTrader: {
        name: 'Day Trader',
        description: 'Unlimited trades with no cooldowns',
        cost: 7
    },
    technicalAnalyst: {
        name: 'Technical Analyst',
        description: 'View RSI, MACD, Bollinger Bands, Moving Averages',
        cost: 8
    },
    fundamentalAnalyst: {
        name: 'Fundamental Analyst',
        description: 'Access company financials and earnings data',
        cost: 8
    },
    portfolioManager: {
        name: 'Portfolio Manager',
        description: '5% bonus for diversified portfolios (5+ assets)',
        cost: 5
    },
    marketTimer: {
        name: 'Market Timer',
        description: 'Optimal buy/sell signals based on patterns',
        cost: 8
    },
    riskManager: {
        name: 'Risk Manager',
        description: 'Reduce losses by 20%, position sizing calculator',
        cost: 7
    },
    newsAlert: {
        name: 'News Alert',
        description: 'Real-time financial news for tracked assets',
        cost: 10
    },
    insiderInfo: {
        name: 'Insider Info',
        description: 'Early access to market-moving news',
        cost: 10
    }
};

export interface Notification {
    id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    timestamp: number;
    read: boolean;
}

export interface GameSettings {
    notificationsEnabled: boolean;
}

// 20 Levels with progressive XP requirements
// Total lessons: ~144, XP per lesson: 100, Total XP: ~14400
const LEVEL_THRESHOLDS = [
    0,      // Level 1
    100,    // Level 2 (1 lesson)
    250,    // Level 3
    450,    // Level 4
    700,    // Level 5
    1000,   // Level 6
    1400,   // Level 7
    1900,   // Level 8
    2500,   // Level 9
    3200,   // Level 10
    4000,   // Level 11
    5000,   // Level 12
    6100,   // Level 13
    7300,   // Level 14
    8600,   // Level 15
    10000,  // Level 16
    11500,  // Level 17
    13100,  // Level 18
    14800,  // Level 19
    16600,  // Level 20 (max)
];

export const getLevelFromXP = (xp: number): number => {
    for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
        if (xp >= LEVEL_THRESHOLDS[i]) {
            return i + 1;
        }
    }
    return 1;
};

export const getXPForLevel = (level: number): number => {
    return LEVEL_THRESHOLDS[Math.min(level - 1, LEVEL_THRESHOLDS.length - 1)] || 0;
};

export const getXPForNextLevel = (level: number): number => {
    if (level >= 20) return LEVEL_THRESHOLDS[19];
    return LEVEL_THRESHOLDS[level] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
};

interface GameState {
    balance: number;
    loan: number;
    portfolio: PortfolioItem[];
    leveragedPositions: LeveragedPosition[];
    shortPositions: ShortPosition[];
    orders: Order[];
    skills: Skills;
    lastLogin: string | null;
    skillPoints: number;
    tradesToday: number;
    lastTradeDate: string | null;
    user: User | null;
    tutorialActive: boolean;
    tutorialStep: number;
    hasCompletedTutorial: boolean;
    isPremium: boolean;
    profilePhoto: string | null; // Base64 encoded photo or null

    // Learning/Level system
    experience: number;
    userLevel: number;
    completedLessons: string[];

    setTutorialActive: (active: boolean) => void;
    setTutorialStep: (step: number) => void;
    completeTutorial: () => void;
    startTutorial: () => void;

    buyAsset: (id: string, price: number, amount: number, leverage?: number, shortPositionId?: string) => void;
    sellAsset: (id: string, price: number, amount: number, positionId?: string, isShort?: boolean, leverage?: number) => void;
    closeShortPosition: (positionId: string, currentPrice: number, amount?: number) => void;
    createOrder: (assetId: string, type: 'stop-loss' | 'take-profit', triggerPrice: number, amount: number) => void;
    cancelOrder: (orderId: string) => void;
    checkOrders: (assetId: string, currentPrice: number) => void;
    addPoints: (points: number) => void;
    unlockSkill: (skill: SkillKey) => void;
    canUnlockSkill: (skill: SkillKey) => boolean;
    getSkillCost: (skill: SkillKey) => number;
    getPortfolioValue: (items: any[]) => number;
    getDiversificationBonus: () => number;
    incrementTrades: () => void;
    checkDailyLogin: () => boolean;
    login: (user: User) => void;
    logout: () => void;
    sync: () => Promise<void>;
    unlockAllSkills: () => void;
    unlockPremium: () => void;
    notifications: Notification[];
    settings: GameSettings;
    favorites: string[];
    toggleFavorite: (assetId: string) => void;
    addNotification: (title: string, message: string, type?: 'info' | 'success' | 'warning' | 'error') => void;
    markNotificationAsRead: (id: string) => void;
    clearNotifications: () => void;
    toggleNotifications: () => void;
    setProfilePhoto: (photo: string | null) => void;

    // Learning/Level functions
    addExperience: (xp: number) => void;
    markLessonComplete: (lessonId: string, xpReward?: number) => boolean; // Returns true if level up
    getLevelProgress: () => { currentXP: number; levelXP: number; nextLevelXP: number; progress: number };
}

export const useGameStore = create<GameState>()(
    persist(
        (set, get) => ({
            balance: 10000,
            loan: 0,
            portfolio: [],
            leveragedPositions: [],
            shortPositions: [],
            orders: [],
            favorites: [],
            skills: {
                stopLossMaster: false,
                leverageTrading: false,
                shortSelling: false,
                multiTimeframe: false,
                dayTrader: false,
                technicalAnalyst: false,
                fundamentalAnalyst: false,
                portfolioManager: false,
                marketTimer: false,
                riskManager: false,
                newsAlert: false,
                insiderInfo: false
            },
            tutorialActive: false,
            tutorialStep: 0,
            hasCompletedTutorial: false,
            profilePhoto: null,
            isPremium: false,
            lastLogin: null,
            skillPoints: 0,
            user: null,
            tradesToday: 0,
            lastTradeDate: null,
            notifications: [],
            settings: {
                notificationsEnabled: true
            },

            // Learning/Level system defaults
            experience: 0,
            userLevel: 1,
            completedLessons: [],

            toggleFavorite: (assetId) => {
                const state = get();
                const isFav = state.favorites.includes(assetId);
                set({
                    favorites: isFav
                        ? state.favorites.filter(id => id !== assetId)
                        : [...state.favorites, assetId]
                });
            },

            addNotification: (title, message, type = 'info') => {
                const state = get();
                const newNotification: Notification = {
                    id: Math.random().toString(36).substr(2, 9),
                    title,
                    message,
                    type,
                    timestamp: Date.now(),
                    read: false
                };

                set({ notifications: [newNotification, ...state.notifications] });

                // System Notification
                if (state.settings.notificationsEnabled && 'Notification' in window && Notification.permission === 'granted') {
                    new window.Notification(title, { body: message });
                }
            },

            markNotificationAsRead: (id) => {
                const state = get();
                set({
                    notifications: state.notifications.map(n =>
                        n.id === id ? { ...n, read: true } : n
                    )
                });
            },

            clearNotifications: () => set({ notifications: [] }),

            toggleNotifications: () => {
                const state = get();
                const newEnabled = !state.settings.notificationsEnabled;
                set({
                    settings: {
                        ...state.settings,
                        notificationsEnabled: newEnabled
                    }
                });

                if (newEnabled && 'Notification' in window && Notification.permission !== 'granted') {
                    Notification.requestPermission();
                }
            },

            setTutorialActive: (active) => set({ tutorialActive: active }),
            setTutorialStep: (step) => set({ tutorialStep: step }),
            completeTutorial: () => set({ tutorialActive: false, hasCompletedTutorial: true }),
            startTutorial: () => set({ tutorialActive: true, tutorialStep: 0, hasCompletedTutorial: false }),

            // Experience/Level Functions
            addExperience: (xp) => {
                const state = get();
                const newXP = state.experience + xp;
                const newLevel = getLevelFromXP(newXP);
                set({
                    experience: newXP,
                    userLevel: newLevel
                });
            },

            markLessonComplete: (lessonId, xpReward = 100) => {
                const state = get();

                // Don't give XP if already completed
                if (state.completedLessons.includes(lessonId)) {
                    return false;
                }

                const newCompletedLessons = [...state.completedLessons, lessonId];
                const newXP = state.experience + xpReward;
                const oldLevel = state.userLevel;
                const newLevel = getLevelFromXP(newXP);
                const leveledUp = newLevel > oldLevel;

                set({
                    completedLessons: newCompletedLessons,
                    experience: newXP,
                    userLevel: newLevel
                });

                return leveledUp;
            },

            getLevelProgress: () => {
                const state = get();
                const currentXP = state.experience;
                const level = state.userLevel;
                const levelXP = getXPForLevel(level);
                const nextLevelXP = getXPForNextLevel(level);
                const progress = level >= 20 ? 100 : ((currentXP - levelXP) / (nextLevelXP - levelXP)) * 100;

                return {
                    currentXP,
                    levelXP,
                    nextLevelXP,
                    progress: Math.min(Math.max(progress, 0), 100)
                };
            },

            buyAsset: (id, price, amount, leverage = 1, _shortPositionId) => {
                const state = get();
                const { balance, portfolio, leveragedPositions, shortPositions, skills, loan, tradesToday } = state;

                // Check Day Trader limit
                if (!skills.dayTrader && tradesToday >= 50) {
                    console.warn("Daily trade limit reached");
                    return;
                }

                // 1. Auto-cover Short Positions (FIFO)
                // If we are buying and have short positions for this asset, cover them first.
                const assetShorts = shortPositions.filter(p => p.assetId === id);

                if (assetShorts.length > 0) {
                    let remainingAmountToBuy = amount;
                    let currentBalance = balance;
                    let currentLoan = loan;
                    let updatedShorts = [...shortPositions];

                    // Sort by entry time (FIFO) - assuming order in array is chronological
                    // We iterate through shorts and cover them
                    for (const shortPos of assetShorts) {
                        if (remainingAmountToBuy <= 0) break;

                        const amountToCover = Math.min(remainingAmountToBuy, shortPos.amount);

                        // Calculate PnL: (Entry Price - Current Price) * Amount * Leverage
                        const basePnL = (shortPos.entryPrice - price) * amountToCover;
                        let pnl = basePnL * (shortPos.leverage || 1);

                        // Risk Manager: 20% loss reduction
                        if (skills.riskManager && pnl < 0) {
                            const saved = Math.abs(pnl) * 0.2;
                            pnl += saved;
                            state.addNotification('Risk Manager', `Saved $${saved.toFixed(2)}`, 'success');
                        }

                        // Portfolio Manager: 5% profit bonus (>5 assets)
                        // Note: pnl here is the realized profit/loss
                        if (skills.portfolioManager && portfolio.length > 5 && pnl > 0) {
                            const bonus = pnl * 0.05;
                            pnl += bonus;
                            state.addNotification('Portfolio Manager', `Bonus: +$${bonus.toFixed(2)}`, 'success');
                        }

                        // Calculate Margin to Return (Proportional)
                        // Default to 0 if marginLocked is undefined (legacy positions)
                        const lockedMargin = shortPos.marginLocked || 0;
                        const marginToReturn = (amountToCover / shortPos.amount) * lockedMargin;

                        // Calculate borrowed amount to repay (for leveraged shorts)
                        const positionValue = shortPos.entryPrice * amountToCover;
                        const borrowedPart = (shortPos.leverage || 1) > 1 ? positionValue - marginToReturn : 0;

                        // Update Balance with PnL and Returned Margin
                        currentBalance += pnl + marginToReturn;
                        currentLoan = Math.max(0, currentLoan - borrowedPart);

                        remainingAmountToBuy -= amountToCover;

                        // Update the short position record
                        if (amountToCover >= shortPos.amount - 0.000001) {
                            // Fully covered this position
                            updatedShorts = updatedShorts.filter(p => p.id !== shortPos.id);
                        } else {
                            // Partially covered
                            updatedShorts = updatedShorts.map(p =>
                                p.id === shortPos.id ? {
                                    ...p,
                                    amount: p.amount - amountToCover,
                                    marginLocked: lockedMargin - marginToReturn
                                } : p
                            );
                        }
                    }

                    // Apply changes for the covered part
                    set({
                        balance: currentBalance,
                        loan: currentLoan,
                        shortPositions: updatedShorts
                    });
                    state.incrementTrades();

                    // If we still have amount left to buy (and we cleared all shorts or covered as much as requested),
                    // we proceed to buy the remainder as a long position.
                    if (remainingAmountToBuy > 0.000001) {
                        // Recursively call buyAsset for the remainder
                        get().buyAsset(id, price, remainingAmountToBuy, leverage);
                    }
                    return;
                }

                // 2. Normal Buy (Long Position)
                // Check leverage skill
                if (leverage > 1 && !skills.leverageTrading) return;

                const totalValue = price * amount;
                const cost = totalValue / leverage;

                if (balance >= cost) {
                    if (leverage === 1) {
                        // Normal buy
                        const existing = portfolio.find(p => p.id === id);
                        let newPortfolio;

                        if (existing) {
                            const totalCost = existing.avgPrice * existing.amount + price * amount;
                            const newAmount = existing.amount + amount;
                            newPortfolio = portfolio.map(p =>
                                p.id === id ? { ...p, amount: newAmount, avgPrice: totalCost / newAmount } : p
                            );
                        } else {
                            newPortfolio = [...portfolio, { id, amount, avgPrice: price }];
                        }
                        set({ balance: balance - cost, portfolio: newPortfolio });
                    } else {
                        // Leveraged buy
                        const borrowedAmount = totalValue - cost;

                        // Check if we already have a position with this asset and leverage
                        const existingPos = leveragedPositions.find(p => p.assetId === id && p.leverage === leverage);
                        let newPositions;

                        if (existingPos) {
                            // Merge positions
                            const totalCost = existingPos.entryPrice * existingPos.amount + price * amount;
                            const newAmount = existingPos.amount + amount;
                            const newAvgPrice = totalCost / newAmount;

                            newPositions = leveragedPositions.map(p =>
                                p.id === existingPos.id
                                    ? { ...p, amount: newAmount, entryPrice: newAvgPrice }
                                    : p
                            );
                        } else {
                            // Create new position
                            const newPosition: LeveragedPosition = {
                                id: `lev-${Date.now()}`,
                                assetId: id,
                                amount,
                                entryPrice: price,
                                leverage
                            };
                            newPositions = [...leveragedPositions, newPosition];
                        }

                        set({
                            balance: balance - cost,
                            loan: loan + borrowedAmount,
                            leveragedPositions: newPositions
                        });
                    }
                    state.incrementTrades();
                }
                // Sync after trade
                get().sync();
            },

            sellAsset: (id, price, amount, positionId, isShort = false, leverage = 1) => {
                const state = get();
                const { balance, portfolio, leveragedPositions, shortPositions, skills, loan, tradesToday } = state;

                // Check Day Trader limit
                if (!skills.dayTrader && tradesToday >= 50) {
                    console.warn("Daily trade limit reached");
                    return;
                }

                // Handle opening a short position
                if (isShort) {
                    if (!skills.shortSelling) return;

                    const marginRequired = (price * amount) / leverage;
                    if (balance < marginRequired) {
                        console.warn("Insufficient balance for margin");
                        return;
                    }

                    // Check if we already have a short position with this asset and leverage
                    const existingShort = shortPositions.find(p => p.assetId === id && p.leverage === leverage);
                    let newShortPositions;

                    if (existingShort) {
                        // Merge positions
                        const totalCost = existingShort.entryPrice * existingShort.amount + price * amount;
                        const newAmount = existingShort.amount + amount;
                        const newAvgPrice = totalCost / newAmount;
                        const newMarginLocked = (existingShort.marginLocked || 0) + marginRequired;

                        newShortPositions = shortPositions.map(p =>
                            p.id === existingShort.id
                                ? { ...p, amount: newAmount, entryPrice: newAvgPrice, marginLocked: newMarginLocked }
                                : p
                        );
                    } else {
                        // Create new position
                        const newShort: ShortPosition = {
                            id: `short-${Date.now()}`,
                            assetId: id,
                            amount,
                            entryPrice: price,
                            leverage,
                            marginLocked: marginRequired
                        };
                        newShortPositions = [...shortPositions, newShort];
                    }

                    // Calculate borrowed amount for leveraged shorts
                    // For shorts with leverage > 1, the borrowed exposure is position value - margin
                    const positionValue = price * amount;
                    const borrowedAmount = leverage > 1 ? positionValue - marginRequired : 0;

                    set({
                        balance: balance - marginRequired, // Deduct margin
                        loan: loan + borrowedAmount, // Add borrowed exposure to loan (for leveraged shorts)
                        shortPositions: newShortPositions
                    });
                    state.incrementTrades();
                    get().sync(); // Sync
                    return;
                }

                // Handle leveraged position sale (Specific Position)
                // Handle leveraged position sale (Specific Position)
                if (positionId) {
                    const position = leveragedPositions.find(p => p.id === positionId);
                    if (!position) return;

                    // Calculate proportional values for partial close
                    const sellAmount = Math.min(amount, position.amount);
                    const initialValue = position.entryPrice * sellAmount;
                    const borrowedPart = initialValue * (position.leverage - 1) / position.leverage;

                    const currentValue = price * sellAmount;
                    const initialMargin = initialValue / position.leverage;
                    let equity = currentValue - borrowedPart;
                    let pnl = equity - initialMargin;

                    // Risk Manager: 20% loss reduction
                    if (skills.riskManager && pnl < 0) {
                        const lossReduction = Math.abs(pnl) * 0.2;
                        pnl += lossReduction;
                        equity += lossReduction;
                        state.addNotification('Risk Manager', `Saved $${lossReduction.toFixed(2)}`, 'success');
                    }

                    // Portfolio Manager: 5% profit bonus (>5 assets)
                    if (skills.portfolioManager && portfolio.length > 5 && pnl > 0) {
                        const bonus = pnl * 0.05;
                        pnl += bonus;
                        equity += bonus;
                        state.addNotification('Portfolio Manager', `Bonus: +$${bonus.toFixed(2)}`, 'success');
                    }

                    let newPositions;
                    if (sellAmount >= position.amount - 0.000001) {
                        newPositions = leveragedPositions.filter(p => p.id !== positionId);
                    } else {
                        newPositions = leveragedPositions.map(p =>
                            p.id === positionId ? { ...p, amount: p.amount - sellAmount } : p
                        );
                    }

                    set({
                        balance: balance + equity,
                        loan: Math.max(0, loan - borrowedPart),
                        leveragedPositions: newPositions
                    });
                    state.incrementTrades();
                    get().sync(); // Sync
                    return;
                }

                // Normal sell (Auto-detect source)
                const portfolioItem = portfolio.find(p => p.id === id);

                // 1. Try Portfolio first
                if (portfolioItem && portfolioItem.amount > 0) {
                    const amountToSell = Math.min(amount, portfolioItem.amount);
                    let revenue = price * amountToSell;

                    // Risk Manager: reduce losses by 20%
                    if (skills.riskManager && price < portfolioItem.avgPrice) {
                        const loss = (portfolioItem.avgPrice - price) * amountToSell;
                        const reducedLoss = loss * 0.8;
                        const saved = loss - reducedLoss;
                        revenue = portfolioItem.avgPrice * amountToSell - reducedLoss;
                        state.addNotification('Risk Manager', `Saved $${saved.toFixed(2)}`, 'success');
                    }

                    // Portfolio Manager: +5% profit if > 5 assets
                    if (skills.portfolioManager && portfolio.length > 5 && price > portfolioItem.avgPrice) {
                        const profit = (price - portfolioItem.avgPrice) * amountToSell;
                        const bonus = profit * 0.05;
                        revenue += bonus;
                        state.addNotification('Portfolio Manager', `Bonus: +$${bonus.toFixed(2)}`, 'success');
                    }

                    const newPortfolio = portfolio.map(p =>
                        p.id === id ? { ...p, amount: p.amount - amountToSell } : p
                    ).filter(p => p.amount > 0.000001);

                    set({ balance: balance + revenue, portfolio: newPortfolio });
                    state.incrementTrades();
                    get().sync(); // Sync
                    return;
                }

                // 2. Fallback to Leveraged Positions (FIFO)
                const levPositions = leveragedPositions.filter(p => p.assetId === id);
                if (levPositions.length > 0) {
                    const oldestPosition = levPositions[0];
                    state.sellAsset(id, price, amount, oldestPosition.id);
                    return;
                }
            },

            // Close a short position directly without balance check
            // This is used when the user wants to cover/close their short
            closeShortPosition: (positionId, currentPrice, amount) => {
                const state = get();
                const { balance, loan, shortPositions, skills, tradesToday, portfolio } = state;

                // Check Day Trader limit
                if (!skills.dayTrader && tradesToday >= 50) {
                    console.warn("Daily trade limit reached");
                    return;
                }

                const position = shortPositions.find(p => p.id === positionId);
                if (!position) {
                    console.warn("Short position not found");
                    return;
                }

                const amountToClose = amount !== undefined ? Math.min(amount, position.amount) : position.amount;

                // Calculate PnL: (Entry Price - Current Price) * Amount * Leverage
                const basePnL = (position.entryPrice - currentPrice) * amountToClose;
                let pnl = basePnL * (position.leverage || 1);

                // Risk Manager: 20% loss reduction
                if (skills.riskManager && pnl < 0) {
                    const saved = Math.abs(pnl) * 0.2;
                    pnl += saved;
                    state.addNotification('Risk Manager', `Saved $${saved.toFixed(2)}`, 'success');
                }

                // Portfolio Manager: 5% profit bonus (>5 assets)
                if (skills.portfolioManager && portfolio.length > 5 && pnl > 0) {
                    const bonus = pnl * 0.05;
                    pnl += bonus;
                    state.addNotification('Portfolio Manager', `Bonus: +$${bonus.toFixed(2)}`, 'success');
                }

                // Calculate Margin to Return (Proportional)
                const lockedMargin = position.marginLocked || 0;
                const marginToReturn = (amountToClose / position.amount) * lockedMargin;

                // Calculate borrowed amount to repay (for leveraged shorts)
                const positionValue = position.entryPrice * amountToClose;
                const borrowedPart = (position.leverage || 1) > 1 ? positionValue - marginToReturn : 0;

                // New balance = current balance + returned margin + PnL (could be negative)
                const newBalance = balance + marginToReturn + pnl;

                // Update shortPositions
                let updatedShorts;
                if (amountToClose >= position.amount - 0.000001) {
                    // Fully closed
                    updatedShorts = shortPositions.filter(p => p.id !== positionId);
                } else {
                    // Partially closed
                    updatedShorts = shortPositions.map(p =>
                        p.id === positionId ? {
                            ...p,
                            amount: p.amount - amountToClose,
                            marginLocked: lockedMargin - marginToReturn
                        } : p
                    );
                }

                set({
                    balance: newBalance,
                    loan: Math.max(0, loan - borrowedPart), // Reduce loan for leveraged shorts
                    shortPositions: updatedShorts
                });

                state.incrementTrades();
                get().sync();
            },

            createOrder: (assetId, type, triggerPrice, amount) => {
                const newOrder: Order = {
                    id: `ord-${Date.now()}`,
                    assetId,
                    type,
                    triggerPrice,
                    amount,
                    createdAt: Date.now()
                };
                set(state => ({ orders: [...state.orders, newOrder] }));
            },

            cancelOrder: (orderId) => {
                set(state => ({
                    orders: state.orders.filter(o => o.id !== orderId)
                }));
            },

            checkOrders: (assetId, currentPrice) => {
                const { orders, skills } = get();
                if (!skills.stopLossMaster) return;

                const triggeredOrders = orders.filter(order => {
                    if (order.assetId !== assetId) return false;

                    if (order.type === 'stop-loss' && currentPrice <= order.triggerPrice) {
                        return true;
                    }
                    if (order.type === 'take-profit' && currentPrice >= order.triggerPrice) {
                        return true;
                    }
                    return false;
                });

                // Execute triggered orders
                triggeredOrders.forEach(order => {
                    const state = get();
                    state.sellAsset(order.assetId, currentPrice, order.amount);
                    state.cancelOrder(order.id);

                    // Add Notification
                    if (order.type === 'stop-loss') {
                        state.addNotification('Stop Loss Executed', `Stop-loss for ${order.assetId} executed at $${currentPrice}`, 'warning');
                    } else {
                        state.addNotification('Take Profit Executed', `Take-profit for ${order.assetId} executed at $${currentPrice}`, 'success');
                    }
                });
            },

            addPoints: (points) => set(state => ({ skillPoints: state.skillPoints + points })),

            unlockSkill: (skill) => {
                const { skills, skillPoints } = get();
                const cost = SKILL_DEFINITIONS[skill].cost;

                if (!skills[skill] && skillPoints >= cost) {
                    set(state => ({
                        skills: { ...state.skills, [skill]: true },
                        skillPoints: state.skillPoints - cost
                    }));
                }
            },

            canUnlockSkill: (skill) => {
                const { skills, skillPoints } = get();
                return !skills[skill] && skillPoints >= SKILL_DEFINITIONS[skill].cost;
            },

            getSkillCost: (skill) => SKILL_DEFINITIONS[skill].cost,

            getPortfolioValue: (items) => {
                const { portfolio } = get();
                const rawValue = portfolio.reduce((acc, item) => {
                    const marketItem = items.find((i: any) => i.id === item.id);
                    return acc + (marketItem ? marketItem.price * item.amount : 0);
                }, 0);

                // Apply Diversification Bonus
                const bonus = get().getDiversificationBonus();
                return rawValue * bonus;
            },

            getDiversificationBonus: () => {
                const { portfolio, skills } = get();
                const uniqueAssets = new Set(portfolio.map(p => p.id)).size;
                return skills.portfolioManager && uniqueAssets >= 5 ? 1.05 : 1.0;
            },

            incrementTrades: () => {
                const today = new Date().toDateString();
                const { lastTradeDate, tradesToday } = get();

                if (lastTradeDate === today) {
                    set({ tradesToday: tradesToday + 1 });
                } else {
                    set({ tradesToday: 1, lastTradeDate: today });
                }
            },

            checkDailyLogin: () => {
                const today = new Date().toDateString();
                const { lastLogin } = get();

                if (lastLogin !== today) {
                    set({ lastLogin: today, skillPoints: get().skillPoints + 3 });
                    return true;
                }
                return false;
            },

            login: (user) => {
                // Hydrate state if gameState exists
                if ((user as any).gameState) {
                    const savedState = (user as any).gameState;
                    // Also check for isPremium from both gameState and direct user property
                    const isPremiumFromBackend = (user as any).isPremium || savedState.isPremium || false;
                    set({
                        ...savedState,
                        user: { id: user.id, username: user.username }, // Ensure user obj is fresh
                        isPremium: isPremiumFromBackend, // Ensure isPremium is set from backend
                    });
                } else {
                    set({
                        user,
                        isPremium: (user as any).isPremium || false
                    });
                }
            },
            logout: () => {
                set({
                    user: null,
                    balance: 10000,
                    loan: 0,
                    portfolio: [],
                    leveragedPositions: [],
                    shortPositions: [],
                    orders: [],
                    favorites: [],
                    skills: {
                        stopLossMaster: false,
                        leverageTrading: false,
                        shortSelling: false,
                        multiTimeframe: false,
                        dayTrader: false,
                        technicalAnalyst: false,
                        fundamentalAnalyst: false,
                        portfolioManager: false,
                        marketTimer: false,
                        riskManager: false,
                        newsAlert: false,
                        insiderInfo: false
                    },
                    lastLogin: null,
                    skillPoints: 8,
                    tradesToday: 0,
                    lastTradeDate: null
                });
                localStorage.removeItem('invest-game-storage'); // Force clear persistence
                window.location.reload(); // Force reload to ensure clean state and restart application
            },
            sync: async () => {
                const state = get();
                if (state.user) {
                    try {
                        // Fetch current market prices
                        const { fetchCryptoMarket, syncGameState } = await import('../services/api');
                        const marketItems = await fetchCryptoMarket(true); // prices only for speed

                        // Calculate spot portfolio value
                        const spotValue = state.portfolio.reduce((acc, item) => {
                            const marketItem = marketItems.find((i: any) => i.id === item.id);
                            return acc + (marketItem ? marketItem.price * item.amount : 0);
                        }, 0);

                        // Calculate leveraged positions equity
                        const leveragedEquity = state.leveragedPositions.reduce((acc, pos) => {
                            const marketItem = marketItems.find((i: any) => i.id === pos.assetId);
                            if (!marketItem) return acc;
                            const currentValue = marketItem.price * pos.amount;
                            const borrowed = (pos.entryPrice * pos.amount) * (pos.leverage - 1) / pos.leverage;
                            return acc + (currentValue - borrowed);
                        }, 0);

                        // Calculate short positions equity (margin + PnL)
                        const shortEquity = state.shortPositions.reduce((acc, pos) => {
                            const marketItem = marketItems.find((i: any) => i.id === pos.assetId);
                            if (!marketItem) return acc;
                            const basePnL = (pos.entryPrice - marketItem.price) * pos.amount;
                            const pnl = basePnL * (pos.leverage || 1);
                            return acc + ((pos.marginLocked || 0) + pnl);
                        }, 0);

                        // Total net worth = balance + all position equities
                        const totalNetWorth = state.balance + spotValue + leveragedEquity + shortEquity;

                        // Serialize state (excluding functions and transient data)
                        const gameState = {
                            balance: state.balance,
                            loan: state.loan,
                            portfolio: state.portfolio,
                            leveragedPositions: state.leveragedPositions,
                            shortPositions: state.shortPositions,
                            orders: state.orders,
                            favorites: state.favorites,
                            skills: state.skills,
                            skillPoints: state.skillPoints,
                            tradesToday: state.tradesToday,
                            lastTradeDate: state.lastTradeDate,
                            lastLogin: state.lastLogin,
                            isPremium: state.isPremium,
                            portfolioValue: totalNetWorth // Add calculated total value
                        };

                        await syncGameState(state.user.username, gameState);
                    } catch (error) {
                        console.error("Failed to sync game state", error);
                    }
                }
            },
            unlockAllSkills: () => {
                set({
                    skills: {
                        stopLossMaster: true,
                        leverageTrading: true,
                        shortSelling: true,
                        multiTimeframe: true,
                        dayTrader: true,
                        technicalAnalyst: true,
                        fundamentalAnalyst: true,
                        portfolioManager: true,
                        marketTimer: true,
                        riskManager: true,
                        newsAlert: true,
                        insiderInfo: true
                    }
                });
            },
            unlockPremium: () => {
                set({
                    isPremium: true,
                    skills: {
                        stopLossMaster: true,
                        leverageTrading: true,
                        shortSelling: true,
                        multiTimeframe: true,
                        dayTrader: true,
                        technicalAnalyst: true,
                        fundamentalAnalyst: true,
                        portfolioManager: true,
                        marketTimer: true,
                        riskManager: true,
                        newsAlert: true,
                        insiderInfo: true
                    }
                });
                // Sync to database
                get().sync();
            },
            setProfilePhoto: (photo: string | null) => {
                set({ profilePhoto: photo });
            }
        }),
        {
            name: 'invest-game-storage',
            version: 3,
            migrate: (persistedState: any, version) => {
                if (version < 2) {
                    // Migration to version 2 (adding loan)
                    return {
                        ...persistedState,
                        loan: 0,
                        orders: persistedState.orders || [],
                        shortPositions: persistedState.shortPositions || [],
                        leveragedPositions: persistedState.leveragedPositions || [],
                        favorites: [],
                        skills: {
                            ...persistedState.skills,
                            stopLossMaster: persistedState.skills?.stopLossMaster || false,
                            leverageTrading: persistedState.skills?.leverageTrading || false,
                            shortSelling: persistedState.skills?.shortSelling || false,
                        },
                        tutorialActive: false,
                        tutorialStep: 0,
                        hasCompletedTutorial: false
                    };
                }
                if (version < 3) {
                    // Migration to version 3 (adding favorites)
                    return {
                        ...persistedState,
                        favorites: persistedState.favorites || []
                    };
                }
                return persistedState;
            },
        }
    )
);

export { SKILL_DEFINITIONS };
export type { SkillKey, SkillDefinition, Order };
