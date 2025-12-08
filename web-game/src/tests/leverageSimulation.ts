/**
 * Leverage Trading Simulation Test
 * 
 * This simulation tests various trading scenarios to verify that
 * balance, margin, and PnL calculations are correct.
 */

interface SimulatedState {
    balance: number;
    loan: number;
    portfolio: Array<{ id: string; amount: number; avgPrice: number }>;
    leveragedPositions: Array<{ id: string; assetId: string; amount: number; entryPrice: number; leverage: number }>;
    shortPositions: Array<{ id: string; assetId: string; amount: number; entryPrice: number; leverage: number; marginLocked: number }>;
}

interface TestResult {
    testName: string;
    passed: boolean;
    expected: any;
    actual: any;
    message: string;
}

const results: TestResult[] = [];

function createInitialState(balance: number = 10000): SimulatedState {
    return {
        balance,
        loan: 0,
        portfolio: [],
        leveragedPositions: [],
        shortPositions: []
    };
}

function logTest(name: string, passed: boolean, expected: any, actual: any, message: string) {
    results.push({ testName: name, passed, expected, actual, message });
    console.log(`${passed ? '✅' : '❌'} ${name}`);
    if (!passed) {
        console.log(`   Expected: ${JSON.stringify(expected)}`);
        console.log(`   Actual: ${JSON.stringify(actual)}`);
        console.log(`   ${message}`);
    }
}

// ========================================
// TEST 1: Simple Spot Buy
// ========================================
function testSpotBuy() {
    const state = createInitialState(10000);
    const price = 100;
    const amount = 10;
    const cost = price * amount; // $1000

    // Simulate buy
    state.balance -= cost;
    state.portfolio.push({ id: 'BTC', amount, avgPrice: price });

    logTest(
        "Spot Buy: Balance Deduction",
        state.balance === 9000,
        9000,
        state.balance,
        `After buying 10 units at $100, balance should be $9000`
    );
}

// ========================================
// TEST 2: Leveraged Long Buy (2x)
// ========================================
function testLeveragedBuy2x() {
    const state = createInitialState(10000);
    const price = 100;
    const amount = 10;
    const leverage = 2;
    const totalValue = price * amount; // $1000 position size
    const marginRequired = totalValue / leverage; // $500 margin
    const borrowed = totalValue - marginRequired; // $500 borrowed

    // Simulate leveraged buy
    state.balance -= marginRequired;
    state.loan += borrowed;
    state.leveragedPositions.push({
        id: 'lev-1',
        assetId: 'BTC',
        amount,
        entryPrice: price,
        leverage
    });

    logTest(
        "Leveraged Buy 2x: Balance Deduction",
        state.balance === 9500,
        9500,
        state.balance,
        `With 2x leverage on $1000 position, only $500 margin should be deducted`
    );

    logTest(
        "Leveraged Buy 2x: Loan Amount",
        state.loan === 500,
        500,
        state.loan,
        `$500 should be borrowed`
    );
}

// ========================================
// TEST 3: Leveraged Long Buy (5x)
// ========================================
function testLeveragedBuy5x() {
    const state = createInitialState(10000);
    const price = 100;
    const amount = 10;
    const leverage = 5;
    const totalValue = price * amount; // $1000 position size
    const marginRequired = totalValue / leverage; // $200 margin
    const borrowed = totalValue - marginRequired; // $800 borrowed

    // Simulate leveraged buy
    state.balance -= marginRequired;
    state.loan += borrowed;
    state.leveragedPositions.push({
        id: 'lev-1',
        assetId: 'BTC',
        amount,
        entryPrice: price,
        leverage
    });

    logTest(
        "Leveraged Buy 5x: Balance Deduction",
        state.balance === 9800,
        9800,
        state.balance,
        `With 5x leverage on $1000 position, only $200 margin should be deducted`
    );

    logTest(
        "Leveraged Buy 5x: Loan Amount",
        state.loan === 800,
        800,
        state.loan,
        `$800 should be borrowed`
    );
}

// ========================================
// TEST 4: Short Sell with 1x Leverage
// ========================================
function testShort1x() {
    const state = createInitialState(10000);
    const price = 100;
    const amount = 10;
    const leverage = 1;
    const totalValue = price * amount; // $1000 position size
    const marginRequired = totalValue / leverage; // $1000 margin (full collateral)

    // Simulate short sell
    state.balance -= marginRequired;
    state.shortPositions.push({
        id: 'short-1',
        assetId: 'BTC',
        amount,
        entryPrice: price,
        leverage,
        marginLocked: marginRequired
    });

    logTest(
        "Short 1x: Balance Deduction",
        state.balance === 9000,
        9000,
        state.balance,
        `With 1x leverage short, full $1000 should be locked as margin`
    );

    logTest(
        "Short 1x: Margin Locked",
        state.shortPositions[0].marginLocked === 1000,
        1000,
        state.shortPositions[0].marginLocked,
        `$1000 margin should be locked`
    );
}

// ========================================
// TEST 5: Short Sell with 2x Leverage
// ========================================
function testShort2x() {
    const state = createInitialState(10000);
    const price = 100;
    const amount = 10;
    const leverage = 2;
    const totalValue = price * amount; // $1000 position size
    const marginRequired = totalValue / leverage; // $500 margin

    // Simulate short sell
    state.balance -= marginRequired;
    state.shortPositions.push({
        id: 'short-1',
        assetId: 'BTC',
        amount,
        entryPrice: price,
        leverage,
        marginLocked: marginRequired
    });

    logTest(
        "Short 2x: Balance Deduction",
        state.balance === 9500,
        9500,
        state.balance,
        `With 2x leverage short, only $500 should be locked as margin`
    );

    logTest(
        "Short 2x: Margin Locked",
        state.shortPositions[0].marginLocked === 500,
        500,
        state.shortPositions[0].marginLocked,
        `$500 margin should be locked`
    );
}

// ========================================
// TEST 6: Short Sell with 5x Leverage
// ========================================
function testShort5x() {
    const state = createInitialState(10000);
    const price = 100;
    const amount = 10;
    const leverage = 5;
    const totalValue = price * amount; // $1000 position size
    const marginRequired = totalValue / leverage; // $200 margin

    // Simulate short sell
    state.balance -= marginRequired;
    state.shortPositions.push({
        id: 'short-1',
        assetId: 'BTC',
        amount,
        entryPrice: price,
        leverage,
        marginLocked: marginRequired
    });

    logTest(
        "Short 5x: Balance Deduction",
        state.balance === 9800,
        9800,
        state.balance,
        `With 5x leverage short, only $200 should be locked as margin`
    );

    logTest(
        "Short 5x: Margin Locked",
        state.shortPositions[0].marginLocked === 200,
        200,
        state.shortPositions[0].marginLocked,
        `$200 margin should be locked`
    );
}

// ========================================
// TEST 7: Cover Short with Profit (No Leverage)
// ========================================
function testCoverShortProfit1x() {
    const state: SimulatedState = {
        balance: 9000,
        loan: 0,
        portfolio: [],
        leveragedPositions: [],
        shortPositions: [{
            id: 'short-1',
            assetId: 'BTC',
            amount: 10,
            entryPrice: 100,
            leverage: 1,
            marginLocked: 1000
        }]
    };

    const currentPrice = 80; // Price dropped - profit for short
    const shortPos = state.shortPositions[0];
    const amountToCover = shortPos.amount;

    // Calculate PnL: (entryPrice - currentPrice) * amount * leverage
    const basePnL = (shortPos.entryPrice - currentPrice) * amountToCover;
    const pnl = basePnL * shortPos.leverage; // With 1x: (100-80) * 10 * 1 = $200 profit

    // Return margin + PnL
    state.balance += shortPos.marginLocked + pnl;
    state.shortPositions = [];

    logTest(
        "Cover Short 1x Profit: Final Balance",
        state.balance === 10200,
        10200,
        state.balance,
        `Started with $9000, margin $1000 returned + $200 profit = $10200`
    );
}

// ========================================
// TEST 8: Cover Short with Profit (5x Leverage)
// ========================================
function testCoverShortProfit5x() {
    const state: SimulatedState = {
        balance: 9800,
        loan: 0,
        portfolio: [],
        leveragedPositions: [],
        shortPositions: [{
            id: 'short-1',
            assetId: 'BTC',
            amount: 10,
            entryPrice: 100,
            leverage: 5,
            marginLocked: 200 // $1000 position / 5x = $200 margin
        }]
    };

    const currentPrice = 80; // Price dropped 20% - profit for short
    const shortPos = state.shortPositions[0];
    const amountToCover = shortPos.amount;

    // Calculate PnL: (entryPrice - currentPrice) * amount * leverage
    const basePnL = (shortPos.entryPrice - currentPrice) * amountToCover;
    const pnl = basePnL * shortPos.leverage; // With 5x: (100-80) * 10 * 5 = $1000 profit

    // Return margin + PnL
    state.balance += shortPos.marginLocked + pnl;
    state.shortPositions = [];

    logTest(
        "Cover Short 5x Profit: PnL Calculation",
        pnl === 1000,
        1000,
        pnl,
        `With 5x leverage: (100-80) * 10 * 5 = $1000 profit`
    );

    logTest(
        "Cover Short 5x Profit: Final Balance",
        state.balance === 11000,
        11000,
        state.balance,
        `Started with $9800, margin $200 returned + $1000 profit = $11000`
    );
}

// ========================================
// TEST 9: Cover Short with Loss (5x Leverage)
// ========================================
function testCoverShortLoss5x() {
    const state: SimulatedState = {
        balance: 9800,
        loan: 0,
        portfolio: [],
        leveragedPositions: [],
        shortPositions: [{
            id: 'short-1',
            assetId: 'BTC',
            amount: 10,
            entryPrice: 100,
            leverage: 5,
            marginLocked: 200
        }]
    };

    const currentPrice = 110; // Price went up 10% - loss for short
    const shortPos = state.shortPositions[0];
    const amountToCover = shortPos.amount;

    // Calculate PnL: (entryPrice - currentPrice) * amount * leverage
    const basePnL = (shortPos.entryPrice - currentPrice) * amountToCover;
    const pnl = basePnL * shortPos.leverage; // With 5x: (100-110) * 10 * 5 = -$500 loss

    // Return margin + PnL (PnL is negative)
    state.balance += shortPos.marginLocked + pnl;
    state.shortPositions = [];

    logTest(
        "Cover Short 5x Loss: PnL Calculation",
        pnl === -500,
        -500,
        pnl,
        `With 5x leverage: (100-110) * 10 * 5 = -$500 loss`
    );

    logTest(
        "Cover Short 5x Loss: Final Balance",
        state.balance === 9500,
        9500,
        state.balance,
        `Started with $9800, margin $200 returned + ($500 loss) = $9500`
    );
}

// ========================================
// TEST 10: Close Leveraged Long with Profit
// ========================================
function testCloseLeveragedLongProfit() {
    const state: SimulatedState = {
        balance: 9500, // Started with 10000, paid 500 margin for 2x
        loan: 500,
        portfolio: [],
        leveragedPositions: [{
            id: 'lev-1',
            assetId: 'BTC',
            amount: 10,
            entryPrice: 100,
            leverage: 2
        }],
        shortPositions: []
    };

    const currentPrice = 120; // Price went up 20%
    const pos = state.leveragedPositions[0];
    const sellAmount = pos.amount;

    // Calculate values
    const currentValue = currentPrice * sellAmount; // 120 * 10 = $1200
    const initialValue = pos.entryPrice * sellAmount; // 100 * 10 = $1000
    const borrowedPart = initialValue * (pos.leverage - 1) / pos.leverage; // $500 borrowed

    // Equity = currentValue - borrowedPart
    const equity = currentValue - borrowedPart; // 1200 - 500 = $700

    // Update state
    state.balance += equity;
    state.loan = Math.max(0, state.loan - borrowedPart);
    state.leveragedPositions = [];

    logTest(
        "Close Leveraged Long 2x Profit: Equity Received",
        equity === 700,
        700,
        equity,
        `Current value $1200 - borrowed $500 = $700 equity`
    );

    logTest(
        "Close Leveraged Long 2x Profit: Final Balance",
        state.balance === 10200,
        10200,
        state.balance,
        `Started with $9500, received $700 equity = $10200 (net profit $200 on $500 margin = 40% return)`
    );
}

// ========================================
// RUN ALL TESTS
// ========================================
export function runAllTests() {
    console.log("\n========================================");
    console.log("LEVERAGE TRADING SIMULATION TESTS");
    console.log("========================================\n");

    testSpotBuy();
    testLeveragedBuy2x();
    testLeveragedBuy5x();
    testShort1x();
    testShort2x();
    testShort5x();
    testCoverShortProfit1x();
    testCoverShortProfit5x();
    testCoverShortLoss5x();
    testCloseLeveragedLongProfit();

    console.log("\n========================================");
    const passed = results.filter(r => r.passed).length;
    const failed = results.filter(r => !r.passed).length;
    console.log(`RESULTS: ${passed} passed, ${failed} failed`);
    console.log("========================================\n");

    return { results, passed, failed };
}

// Run tests immediately if this file is imported
runAllTests();
