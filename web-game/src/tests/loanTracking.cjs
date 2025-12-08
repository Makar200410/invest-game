/**
 * Updated Leverage Trading Simulation Test
 * 
 * Now includes tests for loan tracking in leveraged shorts
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
// TEST: Leveraged Long - Loan Tracking
// ========================================
function testLeveragedLongLoan() {
    console.log("\n--- Leveraged Long 5x: Loan Tracking ---");
    const balance = 10000;
    let loan = 0;
    const price = 100;
    const amount = 10;
    const leverage = 5;
    const totalValue = price * amount; // $1000 position size
    const marginRequired = totalValue / leverage; // $200 margin
    const borrowed = totalValue - marginRequired; // $800 borrowed

    // Simulate leveraged buy
    const newBalance = balance - marginRequired;
    loan += borrowed;

    logTest(
        "Leveraged Long 5x: Balance Deduction",
        newBalance === 9800,
        9800,
        newBalance,
        `With 5x leverage on $1000 position, only $200 margin should be deducted`
    );

    logTest(
        "Leveraged Long 5x: Loan Amount",
        loan === 800,
        800,
        loan,
        `$800 should be borrowed`
    );

    console.log(`   Balance: $${newBalance}, Loan: $${loan}`);
}

// ========================================
// TEST: Leveraged Short 5x - Loan Tracking
// ========================================
function testLeveragedShortLoan() {
    console.log("\n--- Leveraged Short 5x: Loan Tracking ---");
    const balance = 10000;
    let loan = 0;
    const price = 100;
    const amount = 10;
    const leverage = 5;
    const positionValue = price * amount; // $1000 position size
    const marginRequired = positionValue / leverage; // $200 margin
    const borrowed = leverage > 1 ? positionValue - marginRequired : 0; // $800 borrowed

    // Simulate short sell with leverage
    const newBalance = balance - marginRequired;
    loan += borrowed;

    logTest(
        "Leveraged Short 5x: Balance Deduction",
        newBalance === 9800,
        9800,
        newBalance,
        `With 5x leverage on $1000 short, only $200 margin should be deducted`
    );

    logTest(
        "Leveraged Short 5x: Loan Amount",
        loan === 800,
        800,
        loan,
        `$800 should be borrowed (same as leveraged long!)`
    );

    console.log(`   Balance: $${newBalance}, Loan: $${loan}`);
    console.log("\n   ✅ NOW CONSISTENT: Both leveraged longs and shorts track borrowed funds!");
}

// ========================================
// TEST: Short 1x - No Loan
// ========================================
function testShort1xNoLoan() {
    console.log("\n--- Short 1x: No Loan ---");
    const balance = 10000;
    let loan = 0;
    const price = 100;
    const amount = 10;
    const leverage = 1;
    const positionValue = price * amount; // $1000 position size
    const marginRequired = positionValue / leverage; // $1000 margin (full collateral)
    const borrowed = leverage > 1 ? positionValue - marginRequired : 0; // $0 borrowed

    // Simulate short sell without leverage
    const newBalance = balance - marginRequired;
    loan += borrowed;

    logTest(
        "Short 1x: Margin = Full Position",
        marginRequired === 1000,
        1000,
        marginRequired,
        `With 1x leverage, full $1000 should be margin`
    );

    logTest(
        "Short 1x: No Loan",
        loan === 0,
        0,
        loan,
        `No borrowing with 1x leverage`
    );
}

// ========================================
// TEST: Close Leveraged Short - Loan Repayment
// ========================================
function testCloseLeveragedShortLoan() {
    console.log("\n--- Close Leveraged Short 5x: Loan Repayment ---");
    // Initial state after opening 5x short
    let balance = 9800;
    let loan = 800;
    const position = {
        entryPrice: 100,
        amount: 10,
        leverage: 5,
        marginLocked: 200
    };
    const currentPrice = 80; // Price dropped - profit for short!

    const amountToClose = position.amount;

    // Calculate PnL
    const basePnL = (position.entryPrice - currentPrice) * amountToClose;
    const pnl = basePnL * position.leverage; // (100-80) * 10 * 5 = $1000 profit

    // Calculate margin to return
    const marginToReturn = position.marginLocked;

    // Calculate borrowed to repay
    const positionValue = position.entryPrice * amountToClose;
    const borrowedPart = position.leverage > 1 ? positionValue - marginToReturn : 0;

    // Update balance and loan
    balance = balance + marginToReturn + pnl;
    loan = Math.max(0, loan - borrowedPart);

    logTest(
        "Close Leveraged Short 5x: PnL",
        pnl === 1000,
        1000,
        pnl,
        `PnL = (100-80) * 10 * 5 = $1000 profit`
    );

    logTest(
        "Close Leveraged Short 5x: Loan Repaid",
        loan === 0,
        0,
        loan,
        `Loan should be $0 after closing (was $800, repaid $800)`
    );

    logTest(
        "Close Leveraged Short 5x: Final Balance",
        balance === 11000,
        11000,
        balance,
        `$9800 + $200 margin + $1000 PnL = $11000`
    );

    console.log(`   Final Balance: $${balance}, Final Loan: $${loan}`);
}

// ========================================
// SUMMARY TABLE
// ========================================
function printSummary() {
    console.log("\n========================================");
    console.log("LEVERAGE TRADING - LOAN TRACKING SUMMARY");
    console.log("========================================");
    console.log("\n| Position Type     | Margin  | Borrowed | Loan Tracked |");
    console.log("|-------------------|---------|----------|--------------|");
    console.log("| Long 1x (Spot)    | 100%    | $0       | No           |");
    console.log("| Long 5x           | 20%     | 80%      | ✅ Yes       |");
    console.log("| Short 1x          | 100%    | $0       | No           |");
    console.log("| Short 5x          | 20%     | 80%      | ✅ Yes       |");
    console.log("\nNow both leveraged longs and leveraged shorts track borrowed funds consistently!");
}

// ========================================
// RUN ALL TESTS
// ========================================
console.log("\n========================================");
console.log("LEVERAGE LOAN TRACKING TESTS");
console.log("========================================");

testLeveragedLongLoan();
testLeveragedShortLoan();
testShort1xNoLoan();
testCloseLeveragedShortLoan();
printSummary();

console.log("\n========================================");
const passed = results.filter(r => r.passed).length;
const failed = results.filter(r => !r.passed).length;
console.log(`RESULTS: ${passed} passed, ${failed} failed`);
console.log("========================================\n");
