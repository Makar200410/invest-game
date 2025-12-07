const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "eco_7": {
        title: "Global Economics",
        content: \`
# It's a Small World: Understanding Global Economics

We live in a globally interconnected economy. A factory closure in China affects prices in Walmart. A debt crisis in Greece shakes Wall Street. An election in Brazil moves commodity markets. Understanding global economics is no longer optional—it's essential for any serious investor.

The US dollar is the world's reserve currency. American investors often focus exclusively on domestic news, but global forces shape returns just as powerfully. This lesson explores the international economic landscape and its impact on your portfolio.

## Part 1: Globalization and Trade

**Globalization** is the increasing integration of economies through trade, investment, and financial flows.

*   **Comparative Advantage**: Countries specialize in what they produce most efficiently. The US exports tech and services; China exports manufactured goods; Saudi Arabia exports oil.
*   **Global Supply Chains**: Products are no longer made in one place. An iPhone contains parts from dozens of countries. This creates efficiency but also fragility (COVID supply chain disruptions).
*   **Trade Agreements**: Deals like NAFTA/USMCA, the EU single market, and bilateral agreements reduce tariffs and encourage trade.
*   **World Trade Organization (WTO)**: Sets global trade rules and resolves disputes.
*   **Benefits of Trade**:
    *   Lower prices for consumers (cheap goods from abroad).
    *   Access to larger markets for exporters.
    *   Economic growth from specialization.
*   **Downsides**:
    *   Job losses in sectors facing foreign competition (US manufacturing).
    *   Dependency on foreign producers (chip shortage during COVID).
    *   Vulnerability to geopolitical shocks.

## Part 2: The US Dollar — The World's Reserve Currency

The dollar's unique status affects everything from [commodity](/glossary#commodity) prices to [emerging markets](/glossary#emerging-markets).

*   **Reserve Currency**: Central banks around the world hold dollars as their primary reserve [asset](/glossary#asset). Over 60% of global [foreign exchange](/glossary#forex) reserves are in dollars.
*   **Why It Matters**:
    *   **Global Trade**: Most international trade is invoiced in dollars, even between non-US countries.
    *   **[Commodity](/glossary#commodity) Pricing**: Oil, gold, copper, and most commodities are priced in dollars.
    *   **Borrowing**: Many countries and companies borrow in dollars. A strong dollar makes their debt more expensive to service.
*   **The Petrodollar System**: Oil is globally traded in dollars. Countries need dollars to buy oil, creating constant demand.
*   **Dollar Strength**:
    *   A **strong dollar** benefits US consumers (cheaper imports) but hurts US exporters (their goods are more expensive abroad) and [emerging markets](/glossary#emerging-markets) (harder to repay dollar debt).
    *   A **weak dollar** benefits exporters and [emerging markets](/glossary#emerging-markets) but raises import costs and can fuel [inflation](/glossary#inflation).
*   **Dollar Index (DXY)**: Measures the dollar against a basket of major currencies (euro, yen, pound, etc.). A key indicator for global investors.

## Part 3: Emerging Markets

**Emerging markets (EM)** are developing economies with higher growth potential—but also higher [risk](/glossary#risk).

*   **Major EMs**: China, India, Brazil, Russia, Mexico, Indonesia, South Africa, Turkey, and others.
*   **Characteristics**:
    *   **Higher Growth**: Younger populations, industrialization, rising middle class.
    *   **Higher [Volatility](/glossary#volatility)**: Political instability, currency crises, weaker institutions.
    *   **Commodity Exposure**: Many EMs are commodity exporters (Brazil: soybeans, Russia: oil, Chile: copper).
*   **Risks**:
    *   **Currency Risk**: EM currencies can collapse. The Turkish lira lost over 80% of its value in 5 years.
    *   **Political Risk**: Elections, coups, policy reversals.
    *   **Dollar Debt**: Many EMs borrow in dollars. A strong dollar = debt crisis risk.
    *   **Capital Flight**: Foreign investors flee at the first sign of trouble.
*   **Opportunities**: When EMs are out of favor, valuations can become extremely cheap. EM rallies can produce outsized returns.
*   **China**: The world's second-largest economy. A manufacturing powerhouse. But facing structural challenges (debt, demographics, real estate).

## Part 4: Currency Wars and Trade Wars

Economic competition between nations can escalate into currency manipulation and trade restrictions.

### Currency Wars
*   **Definition**: Countries deliberately weaken their currencies to boost exports.
*   **Mechanism**: Sell your own currency; buy foreign currency (often dollars). Lowers export prices, making your goods more competitive.
*   **Examples**: China managed its currency for decades to maintain export competitiveness. Japan and Switzerland have intervened to weaken their currencies.
*   **Impact on Investors**: Currency moves affect returns on foreign investments. A strong domestic currency reduces the value of foreign [assets](/glossary#asset) when converted back.

### Trade Wars
*   **Definition**: Countries impose tariffs, quotas, and other barriers on imports.
*   **US-China Trade War (2018-present)**: The US imposed tariffs on hundreds of billions of Chinese goods. China retaliated. Disrupted supply chains and raised costs.
*   **Impact**:
    *   Higher prices for consumers.
    *   Uncertainty for businesses.
    *   Supply chain restructuring (companies moving production from China to Vietnam, Mexico).
*   **Investment Implications**: Trade tensions create [volatility](/glossary#volatility). Sectors directly targeted ([manufacturing](/glossary#industrials), agriculture) are most affected.

## Part 5: Global Central Banks

The [Fed](/glossary#fed) isn't the only player. Other major central banks move markets too.

*   **European Central Bank (ECB)**: Manages the euro. Historically more conservative. Negative rates for years.
*   **Bank of Japan (BOJ)**: Fighting [deflation](/glossary#deflation) for decades. Massive QE. Yield curve control.
*   **Bank of England (BOE)**: Influences the pound and UK rates.
*   **People's Bank of China (PBOC)**: Manages the yuan and Chinese monetary policy. Less transparent than Western banks.
*   **Divergent Policies**: When the [Fed](/glossary#fed) tightens while other banks ease, the dollar strengthens. This affects US corporate [earnings](/glossary#earnings) (foreign revenues worth less in dollars) and [emerging markets](/glossary#emerging-markets) (capital flows to the US).
*   **Synchronized Easing vs. Tightening**: Global easing (2020) is extremely bullish. Global tightening (2022) is bearish.

## Part 6: Geopolitical Risk

Politics and conflict create economic shocks that ripple globally.

*   **Russia-Ukraine War (2022)**: Disrupted energy and food supplies. European energy crisis. Commodity price spikes. Sanctions isolated Russia from Western finance.
*   **Middle East Tensions**: Wars or instability in oil-producing regions spike energy prices.
*   **Taiwan-China**: A conflict could disrupt semiconductor supply chains (Taiwan makes most of the world's advanced chips).
*   **Sanctions**: The US can weaponize the dollar. Being cut off from SWIFT (the global payments network) is economic death.
*   **Deglobalization**: After COVID and the Ukraine war, countries are rethinking global supply chains. "Friend-shoring" and reshoring are trends.
*   **Investment Implications**:
    *   Geopolitical risk often comes suddenly.
    *   Energy and defense sectors often benefit.
    *   Safe havens (gold, dollar, Treasuries) rally during crises.
    *   Diversification across geographies is essential.

## Part 7: Investing Globally — Practical Considerations

How to incorporate global economics into your investment strategy.

*   **International [Diversification](/glossary#diversification)**: Don't put all your money in one country. International [stocks](/glossary#stock) provide exposure to different growth drivers and reduce portfolio [risk](/glossary#risk).
*   **Developed vs. Emerging**: Developed markets (Europe, Japan) are lower [risk](/glossary#risk), lower return. Emerging markets offer higher growth but more [volatility](/glossary#volatility).
*   **Currency Hedging**: [ETFs](/glossary#etf) and funds can be hedged or unhedged. Hedged funds remove currency [risk](/glossary#risk); unhedged funds provide currency exposure.
*   **Country-Specific [ETFs](/glossary#etf)**: If you're bullish on India, buy an India [ETF](/glossary#etf). Same for Brazil, China, Europe, etc.
*   **Global Macro Trading**: Some traders focus entirely on global themes—currency moves, rate differentials, commodity flows.
*   **Follow the News**: Global events matter. Read international news. Understand trade flows and geopolitics.
*   **Time Zones**: Some global markets (Asia) trade while the US sleeps. Overnight moves can gap US markets at open.

In a connected world, purely domestic investing is a limitation. Understanding global economics expands your opportunity set and makes you a more complete investor.
\`,
        keyTakeaways: [
            "The US dollar is the world's reserve currency—its strength affects commodity prices and emerging markets.",
            "Emerging markets offer higher growth but come with currency, political, and liquidity risks.",
            "Currency wars (devaluation) and trade wars (tariffs) disrupt global trade and create volatility.",
            "Global central banks (ECB, BOJ, PBOC) influence capital flows and currency markets.",
            "Diversify internationally and monitor geopolitical risks—the world is interconnected."
        ]
    },`;

const startMarker = '"eco_7": {';
const endMarker = '"eco_8": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== eco_7: Global Economics - VALIDATION ===');
console.log('Character Count:', charCount);
console.log('Required Range: 8000-13000');
console.log('Status:', (charCount >= 8000 && charCount <= 13000) ? '✓ PASS' : '✗ FAIL');
console.log('Part Count:', partCount);
console.log('Required Range: 5-9');
console.log('Status:', (partCount >= 5 && partCount <= 9) ? '✓ PASS' : '✗ FAIL');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) {
    console.log('VALIDATION FAILED - NOT APPLYING');
    process.exit(1);
}

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Successfully updated eco_7!');
