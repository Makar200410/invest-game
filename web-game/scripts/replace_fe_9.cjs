const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "fe_9": {
        title: "Commodity ETFs",
        content: \`
# Commodity ETFs: Owning the Physical World

[Commodity ETFs](/glossary#etf) provide exposure to physical goods like gold, oil, corn, and copper without requiring you to store barrels of crude in your garage. They are powerful tools for [diversification](/glossary#diversification) and [inflation](/glossary#inflation) hedging, but they come with unique structures and risks — specifically the "contango" trap — that every investor must understand. This lesson breaks down the complex world of hard assets and how to trade them safely.

## Part 1: Why Invest in Commodities?

Commodities are a distinct asset class that behaves differently than stocks and bonds.

*   **Diversification**: Commodities often have low or negative correlation with stocks. When stocks crash (like in the 1970s or 2022), commodities often soar. They zig when the market zags, smoothing out portfolio volatility.
*   **Inflation Hedge**: Real assets tend to rise when the value of paper money falls. Gold and energy are classic inflation hedges. If the cost of living goes up, your portfolio goes up with it.
*   **Supply Shocks**: Geopolitical events (wars, droughts, strikes) can cause massive spikes in commodity prices, offering profit opportunities independent of the general economy.
*   **The Problem**: Historically, buying commodities required a futures account or physical storage (warehouses, vaults). ETFs democratized this access, allowing anyone with a brokerage account to buy gold or oil with a click.

## Part 2: Physical vs. Futures ETFs

Not all commodity ETFs are created equal. The structure matters immensely for your returns.

*   **Physically Backed ETFs**: The fund actually owns the metal in a vault.
    *   *Examples*: GLD (Gold), SLV (Silver), PPLT (Platinum), PALL (Palladium).
    *   *Mechanism*: When you buy a share, the trust buys real gold bars (allocated). The price tracks the spot price almost perfectly minus fees.
    *   *Tax*: Often taxed as "collectibles" (28% max rate) rather than capital gains in the US. This is a tax disadvantage compared to stocks.
*   **Futures-Based ETFs**: The fund buys futures contracts because you can't easily store the asset (oil, gas, wheat, livestock).
    *   *Examples*: USO (Oil), UNG (Natural Gas), CORN (Corn).
    *   *Mechanism*: The fund buys a contract to take delivery next month, then sells it before expiration and buys the next month's contract ("rolling").
    *   *Risk*: This "rolling" process can destroy value due to Contango.

## Part 3: The Contango Trap

The silent killer of futures-based commodity ETFs. If you don't understand this, don't buy USO.

*   **Definition**: Contango is when the future price is higher than the current spot price. This is normal because storing oil costs money (storage fees, insurance).
*   **The Roll**:
    *   Spot Oil: $50.
    *   Next Month Futures: $51.
    *   The fund sells the expiring contract at $50 and buys the new one at $51.
    *   It buys *fewer* contracts for the same money. It is "selling low and buying high" every month.
*   **The Bleed**: If oil stays flat at $50 forever, the fund loses money every month because of this roll cost.
*   **Impact**: Over a year, a fund like USO can lose 20-30% even if oil prices are flat. In 2020, USO lost massive value despite oil eventually recovering.
*   **Backwardation**: The opposite state (futures lower than spot). This benefits the fund (positive roll yield), but is less common in oversupplied markets.

## Part 4: Gold and Precious Metals

The most popular commodity ETFs. They are monetary assets.

*   **Gold (GLD, IAU)**: The ultimate store of value.
    *   *Role*: Portfolio insurance. Crisis hedge. Currency alternative.
    *   *Performance*: Zero yield. Price depends entirely on fear, real interest rates, and the dollar.
    *   *Storage*: GLD stores gold in London vaults. You can see the bar list online.
*   **Silver (SLV)**: "Gold's volatile little brother."
    *   *Role*: Industrial metal (electronics, solar panels) + monetary metal.
    *   *Volatility*: Moves much faster than gold. If gold is up 1%, silver might be up 3%.
*   **Miners (GDX, GDXJ)**: ETFs that buy mining companies, not the metal.
    *   *Leverage*: Miners are a leveraged bet on the metal. If gold up 10%, miners might be up 20% (or down 20%).
    *   *Risks*: Operational risk (mine collapse), political risk (nationalization), rising energy costs (diesel for trucks).

## Part 5: Energy ETFs

Betting on the lifeblood of the economy.

*   **Oil (USO)**: Tracks WTI Crude Oil futures.
    *   *Warning*: Terrible for long-term holding due to contango. Use for short-term trades only (days/weeks).
*   **Energy Stocks (XLE)**: Better way to play oil long-term.
    *   *Why*: Exxon and Chevron pay dividends and can make money even if oil is flat. They don't suffer from contango. They own the wells.
*   **Natural Gas (UNG)**: The "Widowmaker." Extremely volatile and suffers from massive contango decay. Avoid unless you are a pro. Weather patterns drive 90% of the price.
*   **Clean Energy (ICLN)**: The alternative. Solar, wind, hydrogen. High growth, high volatility, not correlated with oil prices. Driven by government policy and tech adoption.

## Part 6: Agricultural ETFs

Investing in food.

*   **Tickers**: CORN (Corn), SOYB (Soybeans), WEAT (Wheat), DBA (Agriculture Basket).
*   **Drivers**: Weather (El Niño), climate change, population growth, geopolitics (e.g., Ukraine war disrupted wheat).
*   **Structure**: Almost always futures-based. Subject to roll costs.
*   **Ethical Debate**: Does speculating on food prices hurt the poor? (Most research says ETFs add liquidity, but it's a debate).
*   **Use Case**: Hedging against rising food costs (inflation). If your grocery bill goes up, your portfolio goes up.
*   **Seasonality**: Ag prices are highly seasonal (planting vs. harvest).

## Part 7: K-1 Tax Forms

A bureaucratic nightmare for commodity investors.

*   **The Issue**: Many commodity ETFs are structured as "Limited Partnerships" to hold futures contracts.
*   **The Form**: They issue a Schedule K-1 tax form instead of a 1099.
*   **The Headache**: K-1s often arrive late (March/April), delaying your tax filing. They are complex to enter into tax software.
*   **The Solution**: Look for "No K-1" commodity ETFs (often structured as Cayman Island trusts).
    *   *Example*: PDBC (Invesco Optimum Yield Diversified Commodity Strategy No K-1 ETF). Always check the prospectus before buying.
    *   *Taxation*: No K-1 funds issue a 1099, making life much easier.

## Part 8: Allocation Strategy

How much should you own?

*   **The Case for 0%**: Many investors (like Warren Buffett) avoid commodities because they produce no cash flow (no dividends, no interest). They are purely speculative assets. "Gold just sits there and looks at you."
*   **The Case for 5-10%**: Ray Dalio and other macro investors argue for commodities to weather "all seasons," specifically high inflation environments where stocks and bonds both fail.
*   **Implementation**:
    *   *Gold*: 5% via GLD or IAU.
    *   *Broad Basket*: 3-5% via PDBC or DBC.
*   **Rebalancing**: Commodities are volatile. You must rebalance to sell spikes and buy dips. This is where the real value comes from — buying low and selling high.

## Part 9: Summary and Rules

Final thoughts on the hard assets.

*   **Know the Structure**: Is it physical (good) or futures (dangerous)?
*   **Watch for K-1s**: Check the prospectus if you hate paperwork.
*   **Don't Buy and Hold Futures ETFs**: USO and UNG are wealth destroyers over 5+ years. They are trading vehicles.
*   **Gold is Unique**: It's the only commodity that is truly a monetary asset. It deserves a separate category from corn or oil.
*   **Stocks as Proxies**: Often, buying XLE (Energy stocks) or PICK (Mining stocks) is a better, cash-flowing way to play the theme than buying the metal itself. You get dividends while you wait.
\`,
        keyTakeaways: [
            "Commodity ETFs offer exposure to gold, oil, and agriculture.",
            "Physical ETFs (GLD) track well; Futures ETFs (USO) suffer from 'contango' decay.",
            "Commodities are good inflation hedges but produce no cash flow.",
            "Watch out for complex K-1 tax forms with some commodity funds."
        ]
    },`;

// Insert after fe_8
// Since fe_8 is currently the last one before fx_1, I need to find where to insert.
// I'll look for "fe_8" and its closing brace, then insert.

const marker = '"fe_8":';
const startIdx = content.indexOf(marker);
if (startIdx === -1) { console.error('fe_8 not found'); process.exit(1); }

let braceCount = 0;
let endIdx = -1;
let inObj = false;
for (let i = startIdx; i < content.length; i++) {
    if (content[i] === '{') { braceCount++; inObj = true; }
    if (content[i] === '}') {
        braceCount--;
        if (inObj && braceCount === 0) { endIdx = i + 1; break; }
    }
}

if (endIdx === -1) { console.error('fe_8 end not found'); process.exit(1); }

// Find insert position (after comma if exists)
let insertPos = endIdx;
while (insertPos < content.length && (content[insertPos] === ',' || content[insertPos] === '\n' || content[insertPos] === '\r' || content[insertPos] === ' ')) {
    insertPos++;
}

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== fe_9: Commodity ETFs - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

const before = content.substring(0, endIdx) + ',\n';
const after = content.substring(insertPos);
fs.writeFileSync(filePath, before + newLesson + '\n    ' + after, 'utf8');
console.log('✓ Added fe_9!');
