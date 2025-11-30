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

    setTutorialActive: (active: boolean) => void;
    setTutorialStep: (step: number) => void;
    completeTutorial: () => void;
    startTutorial: () => void;

    buyAsset: (id: string, price: number, amount: number, leverage?: number, shortPositionId?: string) => void;
    sellAsset: (id: string, price: number, amount: number, positionId?: string, isShort?: boolean, leverage?: number) => void;
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
            lastLogin: null,
            skillPoints: 0,
            user: null,
            tradesToday: 0,
            lastTradeDate: null,

            setTutorialActive: (active) => set({ tutorialActive: active }),
            setTutorialStep: (step) => set({ tutorialStep: step }),
            completeTutorial: () => set({ tutorialActive: false, hasCompletedTutorial: true }),
            startTutorial: () => set({ tutorialActive: true, tutorialStep: 0, hasCompletedTutorial: false }),

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
                    let updatedShorts = [...shortPositions];

                    // Sort by entry time (FIFO) - assuming order in array is chronological
                    // We iterate through shorts and cover them
                    for (const shortPos of assetShorts) {
                        if (remainingAmountToBuy <= 0) break;

                        const amountToCover = Math.min(remainingAmountToBuy, shortPos.amount);

                        // Calculate PnL: (Entry Price - Current Price) * Amount
                        const pnl = (shortPos.entryPrice - price) * amountToCover;

                        // Calculate Margin to Return (Proportional)
                        // Default to 0 if marginLocked is undefined (legacy positions)
                        const lockedMargin = shortPos.marginLocked || 0;
                        const marginToReturn = (amountToCover / shortPos.amount) * lockedMargin;

                        // Update Balance with PnL and Returned Margin
                        currentBalance += pnl + marginToReturn;

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

                        const newPosition: LeveragedPosition = {
                            id: `lev-${Date.now()}`,
                            assetId: id,
                            amount,
                            entryPrice: price,
                            leverage
                        };
                        set({
                            balance: balance - cost,
                            loan: loan + borrowedAmount,
                            leveragedPositions: [...leveragedPositions, newPosition]
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

                    const newShort: ShortPosition = {
                        id: `short-${Date.now()}`,
                        assetId: id,
                        amount,
                        entryPrice: price,
                        leverage,
                        marginLocked: marginRequired
                    };

                    set({
                        balance: balance - marginRequired, // Deduct margin
                        shortPositions: [...shortPositions, newShort]
                    });
                    state.incrementTrades();
                    get().sync(); // Sync
                    return;
                }

                // Handle leveraged position sale (Specific Position)
                if (positionId) {
                    const position = leveragedPositions.find(p => p.id === positionId);
                    if (!position) return;

                    // Calculate proportional values for partial close
                    const sellAmount = Math.min(amount, position.amount);
                    const initialValue = position.entryPrice * sellAmount;
                    const borrowedPart = initialValue * (position.leverage - 1) / position.leverage;

                    const currentValue = price * sellAmount;
                    const equity = currentValue - borrowedPart;

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
                        revenue = portfolioItem.avgPrice * amountToSell - reducedLoss;
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
                    set({
                        ...savedState,
                        user: { id: user.id, username: user.username }, // Ensure user obj is fresh
                    });
                } else {
                    set({ user });
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
                        // Serialize state (excluding functions and transient data)
                        const gameState = {
                            balance: state.balance,
                            loan: state.loan,
                            portfolio: state.portfolio,
                            leveragedPositions: state.leveragedPositions,
                            shortPositions: state.shortPositions,
                            orders: state.orders,
                            skills: state.skills,
                            skillPoints: state.skillPoints,
                            tradesToday: state.tradesToday,
                            lastTradeDate: state.lastTradeDate,
                            lastLogin: state.lastLogin
                        };
                        const { syncGameState } = await import('../services/api'); // Dynamic import to avoid circular dep if any
                        await syncGameState(state.user.username, gameState);
                    } catch (error) {
                        console.error("Failed to sync game state", error);
                    }
                }
            }
        }),
        {
            name: 'invest-game-storage',
            version: 2,
            migrate: (persistedState: any, version) => {
                if (version < 2) {
                    // Migration to version 2 (adding loan)
                    return {
                        ...persistedState,
                        loan: 0,
                        orders: persistedState.orders || [],
                        shortPositions: persistedState.shortPositions || [],
                        leveragedPositions: persistedState.leveragedPositions || [],
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
                return persistedState;
            },
        }
    )
);

export { SKILL_DEFINITIONS };
export type { SkillKey, SkillDefinition, Order };
