const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

// All 8 lessons content
const lessons = {
    ff_5: {
        title: "Central Banks & Monetary Policy",
        content: `
# The Hidden Hand: Central Banks and Monetary Policy

The most powerful financial institutions aren't on Wall Street — they're [central banks](/glossary#central-bank). The [Federal Reserve](/glossary#federal-reserve), European Central Bank, and Bank of Japan control the value of money itself. Their decisions affect your mortgage, your savings, and the price of every [asset](/glossary#asset) you own.

## Part 1: What Central Banks Do

A [central bank](/glossary#central-bank) is the "bank for banks." Commercial banks keep accounts there. When banks need overnight loans, the rate they charge each other is the [Federal Funds Rate](/glossary#fed-funds-rate).
*   **Primary Mission**: Price stability — keeping [inflation](/glossary#inflation) around 2% annually.
*   **Dual Mandate (Fed)**: Price stability AND maximum employment.
*   **Lender of Last Resort**: During crises, they inject emergency [liquidity](/glossary#liquidity) to prevent collapse.

## Part 2: Interest Rates — The Master Lever

When you hear "the Fed raised rates," they mean the [Federal Funds Rate](/glossary#fed-funds-rate). This single number cascades through the entire economy.
*   **Rates UP**: Borrowing expensive → Less spending → Slower growth → Lower [inflation](/glossary#inflation)
*   **Rates DOWN**: Borrowing cheap → More spending → Faster growth → Higher [inflation](/glossary#inflation)

The challenge is timing. Rate changes take 6-18 months to fully impact the economy. Central bankers make decisions based on predictions that are often wrong.

## Part 3: Quantitative Easing (QE)

When rates hit zero, central banks use unconventional tools. [Quantitative Easing](/glossary#quantitative-easing) means creating new money to buy [bonds](/glossary#bond).
*   **How it works**: Fed creates $1B digitally → Buys Treasury [bonds](/glossary#bond) → Sellers get cash → Money supply increases
*   **Effect**: Pushes [bond](/glossary#bond) prices up, [yields](/glossary#yield) down, stimulates economy
*   **2008-2014**: Fed bought $4+ trillion in assets
*   **2020 COVID**: Added another $4+ trillion

[Quantitative Tightening](/glossary#quantitative-tightening) is the reverse — letting [bonds](/glossary#bond) mature without replacement.

## Part 4: How Fed Policy Reaches Your Wallet

The "transmission mechanism" describes how decisions travel through the system:
1.  **Housing & Autos** hit first (rate-sensitive)
2.  **[Stock](/glossary#stock)** prices react within hours
3.  **Dollar** typically strengthens with higher rates
4.  **Jobs** affected months later

Your variable-rate mortgage, credit card, and savings account all move with the Fed.

## Part 5: Inflation Targeting — Why 2%?

Most central banks target 2% [inflation](/glossary#inflation). This isn't arbitrary:
*   **0% (Deflation)**: Dangerous. People delay purchases ("prices might drop more"). Economy stagnates.
*   **2%**: Provides a buffer against [deflation](/glossary#deflation) while maintaining stable prices.
*   **10%+**: Erodes savings, destroys planning, leads to social unrest.

Japan's "lost decades" show the horror of [deflation](/glossary#deflation). Weimar Germany shows the horror of hyperinflation.

## Part 6: Forward Guidance — Words Move Markets

Central banks discovered words matter as much as actions. If the Fed says "rates will stay low," markets adjust immediately.
*   **"Patient"**: Signals delays in rate hikes
*   **"Data-dependent"**: Suggests uncertainty
*   **"Transitory"**: Implies temporary (often wrong)

The "dot plot" showing officials' rate projections moves billions before any actual decision.

## Part 7: Investing Through Fed Cycles

Different cycle phases favor different strategies:
*   **Early Expansion** (Fed cutting): [Stocks](/glossary#stock) rally hard, especially cyclicals. Be aggressive.
*   **Mid-Cycle** (Fed pausing): Quality matters. Extend [bond](/glossary#bond) duration.
*   **Late-Cycle** (Fed hiking): [Volatility](/glossary#volatility) rises. Reduce rate-sensitive holdings.
*   **Recession** (Fed cutting again): Defensive [stocks](/glossary#stock) outperform. Buy the fear.

"Don't fight the Fed" — align your investments with central bank direction.
`,
        keyTakeaways: [
            "Central banks control money supply and interest rates to manage inflation and employment.",
            "The Federal Funds Rate influences all borrowing costs in the economy.",
            "QE creates money to stimulate; QT removes it to cool the economy.",
            "Rate changes take 6-18 months to fully impact the economy.",
            "Don't fight the Fed — align investments with central bank direction."
        ]
    },
    ff_6: {
        title: "Economic Cycles",
        content: `
# The Rhythm of Boom and Bust: Understanding Economic Cycles

The economy moves in waves — expansion, peak, contraction, trough, then expansion again. This has been true throughout history. Understanding cycles prevents panic during [recessions](/glossary#recession) and overconfidence during booms. Those who understand the cycle don't get blindsided.

## Part 1: The Four Phases

Every [business cycle](/glossary#business-cycle) has four distinct phases:
*   **Expansion**: [GDP](/glossary#gdp) rising, unemployment falling, optimism high. Businesses hire, consumers spend.
*   **Peak**: Economy overheating. [Inflation](/glossary#inflation) rising. [Central banks](/glossary#central-bank) start hiking rates.
*   **Contraction**: [GDP](/glossary#gdp) falling, layoffs begin, fear spreads. Two consecutive quarters = [recession](/glossary#recession).
*   **Trough**: Maximum pain. Everyone is pessimistic. But this is when smart money starts buying.

Average cycle length: 5-7 years (highly variable).

## Part 2: Leading, Lagging, and Coincident Indicators

Economists track different indicators to predict and confirm cycles:
*   **Leading** (predict future): Stock market, building permits, consumer confidence, [yield curve](/glossary#yield-curve)
*   **Coincident** (confirm present): Industrial production, retail sales, employment
*   **Lagging** (confirm past): Unemployment rate, corporate profits, CPI

The [yield curve](/glossary#yield-curve) is the most reliable recession predictor. When short-term rates exceed long-term rates (inversion), a [recession](/glossary#recession) typically follows within 6-18 months.

## Part 3: Why Recessions Happen

[Recessions](/glossary#recession) come from various sources:
*   **Fed-Induced**: Rate hikes to fight [inflation](/glossary#inflation) (most common)
*   **Financial Crisis**: Credit bubble bursts (2008)
*   **External Shock**: Oil crisis, pandemic, war
*   **Asset Bubble**: Overvalued [stocks](/glossary#stock)/real estate collapse (2000)

The cause determines the cure. [Monetary policy](/glossary#monetary-policy) fixes demand problems. Fiscal policy helps with supply shocks.

## Part 4: Stagflation — The Worst Scenario

[Stagflation](/glossary#stagflation) is the nightmare: high [inflation](/glossary#inflation) + high unemployment + stagnant growth.
*   **1970s Example**: Oil shock caused prices to surge while economy stagnated
*   **The Problem**: Normal tools don't work. Cutting rates helps unemployment but worsens [inflation](/glossary#inflation). Hiking rates fights [inflation](/glossary#inflation) but kills jobs.
*   **The Solution**: Paul Volcker hiked rates to 20%, caused brutal [recession](/glossary#recession), but broke [inflation](/glossary#inflation).

## Part 5: Sector Rotation Strategy

Different sectors lead at different cycle phases:
*   **Early Expansion**: Financials, consumer discretionary, industrials
*   **Mid-Cycle**: Technology, healthcare
*   **Late-Cycle**: Energy, materials, [commodities](/glossary#commodities)
*   **[Recession](/glossary#recession)**: Utilities, consumer staples, healthcare

Smart money rotates before the crowd realizes the phase has changed.

## Part 6: The Psychology of Cycles

Human emotions drive cycles as much as fundamentals:
*   **Peak**: "This time is different" / Maximum greed
*   **Early Contraction**: Denial, then panic selling
*   **Trough**: "The world is ending" / Maximum fear
*   **Early Expansion**: Skepticism, then gradual optimism

Warren Buffett: "Be fearful when others are greedy, greedy when others are fearful."

## Part 7: Your Personal Cycle Strategy

Practical actions for each phase:
*   **Expansion**: Maximize contributions, stay invested, avoid [leverage](/glossary#leverage)
*   **Peak Warning Signs**: Reduce [risk](/glossary#risk), increase cash position
*   **[Recession](/glossary#recession)**: Keep investing (best prices), rebalance to [stocks](/glossary#stock)
*   **Trough**: Go aggressive — this is when fortunes are made

The biggest mistakes are selling at the bottom and not buying when everyone is terrified.
`,
        keyTakeaways: [
            "Economic cycles have four phases: expansion, peak, contraction, trough.",
            "The inverted yield curve is the most reliable recession predictor.",
            "Stagflation is the worst scenario: high inflation + recession + unemployment.",
            "Different sectors lead at different cycle phases — rotate accordingly.",
            "Be greedy when others are fearful; be fearful when others are greedy."
        ]
    }
};

// Find ff_4 closing and add ff_5-ff_6 after it
const ff4End = content.indexOf('// Module 2: Investment Basics');
if (ff4End === -1) {
    console.error('Could not find Module 2 marker');
    process.exit(1);
}

let insertContent = '';
for (const [id, lesson] of Object.entries(lessons)) {
    insertContent += `    "${id}": {
        title: "${lesson.title}",
        content: \`${lesson.content}
        \`,
        keyTakeaways: [
            "${lesson.keyTakeaways.join('",\n            "')}"
        ]
    },
`;
}

content = content.substring(0, ff4End) + insertContent + content.substring(ff4End);
fs.writeFileSync(filePath, content);
console.log('Added ff_5 and ff_6');
