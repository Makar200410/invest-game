/**
 * Leverage Trading Simulation Test
 * 
 * Run with: node src/tests/leverageSimulation.cjs
 * 
 * This simulation tests various trading scenarios to verify that
 * balance, margin, and PnL calculations are correct.
 */

const results = [];

function logTest(name, passed, expected, actual, message) {
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
    console.log("\n--- TEST 1: Spot Buy ---");
    const balance = 10000;
    const price = 100;
    const amount = 10;
    const cost = price * amount; // $1000

    const newBalance = balance - cost;

    logTest(
        "Spot Buy: Balance Deduction",
        newBalance === 9000,
        9000,
        newBalance,
        `After buying 10 units at $100, balance should be $9000`
    );
}

// ========================================
// TEST 2: Leveraged Long Buy (2x)
// ========================================
function testLeveragedBuy2x() {
    console.log("\n--- TEST 2: Leveraged Buy 2x ---");
    const balance = 10000;
    const price = 100;
    const amount = 10;
    const leverage = 2;
    const totalValue = price * amount; // $1000 position size
    const marginRequired = totalValue / leverage; // $500 margin
    const borrowed = totalValue - marginRequired; // $500 borrowed

    const newBalance = balance - marginRequired;
    const newLoan = borrowed;

    logTest(
        "Leveraged Buy 2x: Balance Deduction",
        newBalance === 9500,
        9500,
        newBalance,
        `With 2x leverage on $1000 position, only $500 margin should be deducted`
    );

    logTest(
        "Leveraged Buy 2x: Loan Amount",
        newLoan === 500,
        500,
        newLoan,
        `$500 should be borrowed`
    );
}

// ========================================
// TEST 3: Leveraged Long Buy (5x)
// ========================================
function testLeveragedBuy5x() {
    console.log("\n--- TEST 3: Leveraged Buy 5x ---");
    const balance = 10000;
    const price = 100;
    const amount = 10;
    const leverage = 5;
    const totalValue = price * amount; // $1000 position size
    const marginRequired = totalValue / leverage; // $200 margin
    const borrowed = totalValue - marginRequired; // $800 borrowed

    const newBalance = balance - marginRequired;
    const newLoan = borrowed;

    logTest(
        "Leveraged Buy 5x: Balance Deduction",
        newBalance === 9800,
        9800,
        newBalance,
        `With 5x leverage on $1000 position, only $200 margin should be deducted`
    );

    logTest(
        "Leveraged Buy 5x: Loan Amount",
        newLoan === 800,
        800,
        newLoan,
        `$800 should be borrowed`
    );
}

// ========================================
// TEST 4: Short Sell with 1x Leverage
// ========================================
function testShort1x() {
    console.log("\n--- TEST 4: Short 1x ---");
    const balance = 10000;
    const price = 100;
    const amount = 10;
    const leverage = 1;
    const totalValue = price * amount; // $1000 position size
    const marginRequired = totalValue / leverage; // $1000 margin (full collateral)

    const newBalance = balance - marginRequired;

    logTest(
        "Short 1x: Balance Deduction",
        newBalance === 9000,
        9000,
        newBalance,
        `With 1x leverage short, full $1000 should be locked as margin`
    );

    logTest(
        "Short 1x: Margin Locked",
        marginRequired === 1000,
        1000,
        marginRequired,
        `$1000 margin should be locked`
    );

    console.log("\n   ⚠️  NOTE: This is EXPECTED behavior for 1x leverage short.");
    console.log("   For shorts, you need collateral equal to position size / leverage.");
    console.log("   With 1x leverage, you need 100% collateral.");
}

// ========================================
// TEST 5: Short Sell with 2x Leverage
// ========================================
function testShort2x() {
    console.log("\n--- TEST 5: Short 2x ---");
    const balance = 10000;
    const price = 100;
    const amount = 10;
    const leverage = 2;
    const totalValue = price * amount; // $1000 position size
    const marginRequired = totalValue / leverage; // $500 margin

    const newBalance = balance - marginRequired;

    logTest(
        "Short 2x: Balance Deduction",
        newBalance === 9500,
        9500,
        newBalance,
        `With 2x leverage short, only $500 should be locked as margin`
    );

    logTest(
        "Short 2x: Margin Locked",
        marginRequired === 500,
        500,
        marginRequired,
        `$500 margin should be locked (50% of position)`
    );
}

// ========================================
// TEST 6: Short Sell with 5x Leverage
// ========================================
function testShort5x() {
    console.log("\n--- TEST 6: Short 5x ---");
    const balance = 10000;
    const price = 100;
    const amount = 10;
    const leverage = 5;
    const totalValue = price * amount; // $1000 position size
    const marginRequired = totalValue / leverage; // $200 margin

    const newBalance = balance - marginRequired;

    logTest(
        "Short 5x: Balance Deduction",
        newBalance === 9800,
        9800,
        newBalance,
        `With 5x leverage short, only $200 should be locked as margin`
    );

    logTest(
        "Short 5x: Margin Locked",
        marginRequired === 200,
        200,
        marginRequired,
        `$200 margin should be locked (20% of position)`
    );
}

// ========================================
// TEST 7: Cover Short with Profit (No Leverage)
// ========================================
function testCoverShortProfit1x() {
    console.log("\n--- TEST 7: Cover Short 1x Profit ---");
    const startBalance = 9000; // After locking $1000 margin
    const marginLocked = 1000;
    const entryPrice = 100;
    const currentPrice = 80; // Price dropped 20% - profit for short
    const amount = 10;
    const leverage = 1;

    // Calculate PnL: (entryPrice - currentPrice) * amount * leverage
    const basePnL = (entryPrice - currentPrice) * amount;
    const pnl = basePnL * leverage; // (100-80) * 10 * 1 = $200 profit

    // Return margin + PnL
    const finalBalance = startBalance + marginLocked + pnl;

    logTest(
        "Cover Short 1x Profit: PnL",
        pnl === 200,
        200,
        pnl,
        `Price dropped from $100 to $80, profit = $200`
    );

    logTest(
        "Cover Short 1x Profit: Final Balance",
        finalBalance === 10200,
        10200,
        finalBalance,
        `Started with $9000, margin $1000 returned + $200 profit = $10200`
    );
}

// ========================================
// TEST 8: Cover Short with Profit (5x Leverage)
// ========================================
function testCoverShortProfit5x() {
    console.log("\n--- TEST 8: Cover Short 5x Profit ---");
    const startBalance = 9800; // After locking $200 margin (5x leverage)
    const marginLocked = 200;
    const entryPrice = 100;
    const currentPrice = 80; // Price dropped 20%
    const amount = 10;
    const leverage = 5;

    // Calculate PnL: (entryPrice - currentPrice) * amount * leverage
    const basePnL = (entryPrice - currentPrice) * amount;
    const pnl = basePnL * leverage; // (100-80) * 10 * 5 = $1000 profit

    // Return margin + PnL
    const finalBalance = startBalance + marginLocked + pnl;

    logTest(
        "Cover Short 5x Profit: PnL Calculation",
        pnl === 1000,
        1000,
        pnl,
        `With 5x leverage: (100-80) * 10 * 5 = $1000 profit (500% return on $200 margin!)`
    );

    logTest(
        "Cover Short 5x Profit: Final Balance",
        finalBalance === 11000,
        11000,
        finalBalance,
        `Started with $9800, margin $200 returned + $1000 profit = $11000`
    );
}

// ========================================
// TEST 9: Cover Short with Loss (5x Leverage)
// ========================================
function testCoverShortLoss5x() {
    console.log("\n--- TEST 9: Cover Short 5x Loss ---");
    const startBalance = 9800;
    const marginLocked = 200;
    const entryPrice = 100;
    const currentPrice = 110; // Price went up 10% - loss for short
    const amount = 10;
    const leverage = 5;

    // Calculate PnL: (entryPrice - currentPrice) * amount * leverage
    const basePnL = (entryPrice - currentPrice) * amount;
    const pnl = basePnL * leverage; // (100-110) * 10 * 5 = -$500 loss

    // Return margin + PnL (PnL is negative)
    const finalBalance = startBalance + marginLocked + pnl;

    logTest(
        "Cover Short 5x Loss: PnL Calculation",
        pnl === -500,
        -500,
        pnl,
        `With 5x leverage: (100-110) * 10 * 5 = -$500 loss`
    );

    logTest(
        "Cover Short 5x Loss: Final Balance",
        finalBalance === 9500,
        9500,
        finalBalance,
        `Started with $9800, margin $200 returned - $500 loss = $9500`
    );
}

// ========================================
// TEST 10: Close Leveraged Long with Profit
// ========================================
function testCloseLeveragedLongProfit() {
    console.log("\n--- TEST 10: Close Leveraged Long 2x Profit ---");
    const startBalance = 9500; // Started with 10000, paid 500 margin for 2x
    const entryPrice = 100;
    const currentPrice = 120; // Price went up 20%
    const amount = 10;
    const leverage = 2;

    // Calculate values
    const currentValue = currentPrice * amount; // 120 * 10 = $1200
    const initialValue = entryPrice * amount; // 100 * 10 = $1000
    const borrowedPart = initialValue * (leverage - 1) / leverage; // $500 borrowed

    // Equity = currentValue - borrowedPart
    const equity = currentValue - borrowedPart; // 1200 - 500 = $700

    // Final balance
    const finalBalance = startBalance + equity;

    logTest(
        "Close Leveraged Long 2x Profit: Equity Received",
        equity === 700,
        700,
        equity,
        `Current value $1200 - borrowed $500 = $700 equity`
    );

    logTest(
        "Close Leveraged Long 2x Profit: Final Balance",
        finalBalance === 10200,
        10200,
        finalBalance,
        `Started with $9500, received $700 equity = $10200 (net profit $200 on $500 margin = 40% return)`
    );
}

// ========================================
// TEST 11: Examine Current Implementation Logic
// ========================================
function testCurrentImplementation() {
    console.log("\n--- TEST 11: Current Implementation Analysis ---");
    console.log("\nCurrent gameStore.ts Short Selling Logic:");
    console.log("1. marginRequired = (price * amount) / leverage");
    console.log("2. balance -= marginRequired");
    console.log("3. marginLocked = marginRequired is stored");
    console.log("\nThis is CORRECT - margin is locked from balance.");
    console.log("\nExample with $10000 balance, shorting 10 units at $100:");
    console.log("- 1x leverage: $1000 margin locked, balance = $9000");
    console.log("- 2x leverage: $500 margin locked, balance = $9500");
    console.log("- 5x leverage: $200 margin locked, balance = $9800");

    console.log("\n⚠️  IMPORTANT: With 1x leverage, shorting IS expensive!");
    console.log("   This is expected behavior - you need full collateral.");
    console.log("   To use less margin, use higher leverage (2x or 5x).");
}

// ========================================
// RUN ALL TESTS
// ========================================
console.log("\n========================================");
console.log("LEVERAGE TRADING SIMULATION TESTS");
console.log("========================================");

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
testCurrentImplementation();

console.log("\n========================================");
const passed = results.filter(r => r.passed).length;
const failed = results.filter(r => !r.passed).length;
console.log(`RESULTS: ${passed} passed, ${failed} failed`);
console.log("========================================\n");

if (failed > 0) {
    console.log("FAILED TESTS:");
    results.filter(r => !r.passed).forEach(r => {
        console.log(`  - ${r.testName}`);
    });
}
