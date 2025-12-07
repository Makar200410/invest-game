const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "eco_6": {
        title: "Fiscal vs. Monetary Policy",
        content: \`
# Who Pulls the Strings? Understanding Fiscal and Monetary Policy

Two major forces shape the economic environment: **fiscal policy** (controlled by the government) and **monetary policy** (controlled by the central bank). These policies influence [interest rates](/glossary#interest-rate), [inflation](/glossary#inflation), employment, and ultimately the returns on your investments. Understanding the interplay between them is essential for navigating financial markets.

When crisis strikes—like the 2008 financial meltdown or the 2020 pandemic—both forces often work together in unprecedented ways. The COVID response saw the [Fed](/glossary#fed) cut rates to zero while Congress passed trillions in stimulus. Understanding these tools helps you anticipate their market impact.

## Part 1: What Is Monetary Policy?

**Monetary policy** refers to actions by a nation's central bank to influence the money supply and [interest rates](/glossary#interest-rate) to achieve economic objectives.

*   **Who Controls It**: The [Federal Reserve](/glossary#fed) in the United States. Other countries have their own central banks (ECB, Bank of Japan, Bank of England).
*   **Primary Tools**:
    *   **Fed Funds Rate**: The overnight lending rate between banks. The [Fed's](/glossary#fed) main policy lever.
    *   **Open Market Operations**: Buying/selling government [bonds](/glossary#bond) to inject or withdraw money from the economy.
    *   **Quantitative Easing (QE)**: Large-scale asset purchases to lower long-term rates and stimulate the economy.
    *   **Reserve Requirements**: The percentage of deposits banks must hold (less commonly used today).
*   **Objectives**: Stable prices (2% [inflation](/glossary#inflation) target) and maximum employment—the dual mandate.
*   **Speed**: Monetary policy can be adjusted quickly. The [Fed](/glossary#fed) can change rates at any FOMC meeting (8 per year) or even between meetings in emergencies.
*   **Independence**: The [Fed](/glossary#fed) is designed to be politically independent—free from short-term political pressure. However, Fed chairs are appointed by the President.

## Part 2: Types of Monetary Policy

Monetary policy is described as either "tight" (restrictive) or "loose" (accommodative) depending on the economic context.

### Tight (Hawkish) Monetary Policy
*   **Actions**: Raise [interest rates](/glossary#interest-rate). Reduce bond purchases. Quantitative tightening.
*   **Goal**: Slow down an overheating economy. Fight [inflation](/glossary#inflation).
*   **Effects**:
    *   Borrowing becomes more expensive.
    *   Consumer and business spending slows.
    *   [Inflation](/glossary#inflation) pressure decreases.
    *   Currency tends to strengthen (higher rates attract capital).
*   **Market Impact**: Generally bearish for [stocks](/glossary#stock) and [bonds](/glossary#bond). Mixed for the dollar (strengthens, but may hurt exporters).

### Loose (Dovish) Monetary Policy
*   **Actions**: Lower [interest rates](/glossary#interest-rate). Increase bond purchases (QE). Inject [liquidity](/glossary#liquidity).
*   **Goal**: Stimulate a sluggish economy. Combat unemployment. Prevent [deflation](/glossary#deflation).
*   **Effects**:
    *   Borrowing becomes cheaper.
    *   Encourages spending and investment.
    *   Potential to fuel [asset](/glossary#asset) prices (and [inflation](/glossary#inflation) if overdone).
    *   Currency may weaken.
*   **Market Impact**: Generally bullish for [stocks](/glossary#stock). [Bonds](/glossary#bond) rally initially but may suffer if [inflation](/glossary#inflation) rises.

## Part 3: What Is Fiscal Policy?

**Fiscal policy** refers to the government's decisions about spending and taxation to influence the economy.

*   **Who Controls It**: The executive and legislative branches of government. In the US: Congress and the President.
*   **Two Levers**:
    *   **Government Spending**: Building roads, paying government employees, funding social programs, defense spending, stimulus checks.
    *   **Taxation**: Income taxes, corporate taxes, payroll taxes, tariffs.
*   **Budget Deficit vs. Surplus**:
    *   **Deficit**: Government spends more than it collects in taxes. Typically stimulative.
    *   **Surplus**: Government collects more than it spends. Typically contractionary (rare in modern US history).
*   **National Debt**: Accumulated deficits over time. US national debt exceeds $35 trillion (2024).
*   **Speed**: Fiscal policy is slow. Legislation requires congressional approval, negotiations, and compromise—a process that can take months or years.
*   **Political Influence**: Unlike monetary policy, fiscal policy is inherently political. Tax cuts and spending programs are driven by partisan priorities.

## Part 4: Types of Fiscal Policy

Like monetary policy, fiscal policy can be expansionary or contractionary.

### Expansionary Fiscal Policy
*   **Actions**: Increase government spending. Cut taxes. Run larger budget deficits.
*   **Goal**: Boost aggregate demand. Combat recession. Create jobs.
*   **Examples**:
    *   2009 American Recovery and Reinvestment Act (~$800 billion stimulus).
    *   2020 CARES Act ($2.2 trillion). 2021 American Rescue Plan ($1.9 trillion).
    *   2017 Tax Cuts and Jobs Act (corporate tax cut from 35% to 21%).
*   **Effects**: More money in consumers' and businesses' pockets. Increased demand for goods and services. Potential inflationary pressure if economy is already strong.
*   **Market Impact**: Generally bullish for [stocks](/glossary#stock) and economic growth. Can increase [bond](/glossary#bond) supply (more debt issuance), potentially raising [yields](/glossary#yield).

### Contractionary Fiscal Policy
*   **Actions**: Cut government spending. Raise taxes. Reduce budget deficits.
*   **Goal**: Cool an overheating economy. Reduce debt. Fight [inflation](/glossary#inflation).
*   **Examples**: Austerity programs in Greece, UK, and other European countries post-2008.
*   **Effects**: Less demand. Slower growth. Can lead to recession if applied too harshly.
*   **Market Impact**: Short-term pain for [stocks](/glossary#stock). Can reduce [bond](/glossary#bond) supply (less issuance), potentially lowering [yields](/glossary#yield).

## Part 5: Monetary vs. Fiscal — Key Differences

Understanding the distinctions helps you predict policy responses to economic challenges.

| Feature | Monetary Policy | Fiscal Policy |
|---------|-----------------|---------------|
| **Authority** | Central Bank ([Fed](/glossary#fed)) | Government (Congress, President) |
| **Main Tools** | [Interest rates](/glossary#interest-rate), bond purchases | Spending, taxation |
| **Speed** | Fast (can change at any meeting) | Slow (requires legislation) |
| **Independence** | Designed to be politically independent | Inherently political |
| **Precision** | Blunt instrument (affects whole economy) | Can target specific sectors/groups |
| **Debt Impact** | Indirect (lower rates reduce interest costs) | Direct (deficits add to debt) |
| **Inflation Response** | Primary tool against [inflation](/glossary#inflation) | Can also help but politically harder |

*   **Complementary or Conflicting**: Ideally, monetary and fiscal policy work together. But they can conflict. During COVID recovery, loose monetary policy met massive fiscal stimulus—contributing to the 2021-2022 [inflation](/glossary#inflation) surge. The [Fed](/glossary#fed) then had to tighten aggressively even as fiscal spending continued.

## Part 6: Policy Responses to Economic Crises

Major crises demonstrate how both policies are deployed in coordination.

### 2008 Financial Crisis
*   **Monetary Response**: [Fed](/glossary#fed) cut rates to near-zero. Launched three rounds of QE. Provided emergency lending to banks.
*   **Fiscal Response**: TARP ($700 billion to bail out banks). 2009 stimulus (~$800 billion). Mortgage relief programs.
*   **Outcome**: Slow recovery, but depression averted. Massive expansion of [Fed](/glossary#fed) balance sheet and government debt.

### 2020 COVID-19 Pandemic
*   **Monetary Response**: [Fed](/glossary#fed) cut rates to zero within weeks. Unlimited QE announced. Lending facilities for corporations, municipal bonds, even junk bonds.
*   **Fiscal Response**: CARES Act ($2.2 trillion), PPP loans, enhanced unemployment, stimulus checks. Followed by additional packages totaling ~$5 trillion.
*   **Outcome**: Sharp recession but rapid recovery. Asset prices soared. [Inflation](/glossary#inflation) spike in 2021-2022 partially attributed to excess stimulus.

### Lessons for Investors
*   **Expect Massive Policy Response in Crises**: Governments and central banks will deploy all available tools. This often limits market downside.
*   **Asset Price Inflation**: Loose policy can inflate [asset](/glossary#asset) prices (stocks, housing) even if the real economy is struggling.
*   **[Inflation](/glossary#inflation) Risk**: Too much stimulus, too long, risks [inflation](/glossary#inflation). The 2021-2022 experience is a reminder.

## Part 7: Investment Implications of Policy Choices

How should investors position based on the policy environment?

*   **Loose Monetary + Loose Fiscal**: Maximum stimulus. Risk-on environment. [Stocks](/glossary#stock), [credit](/glossary#credit), and real [assets](/glossary#asset) tend to outperform. Example: 2020-2021.
*   **Tight Monetary + Loose Fiscal**: Conflicting signals. The [Fed](/glossary#fed) fights the government's stimulus. [Volatility](/glossary#volatility) increases. Example: 2022—[Fed](/glossary#fed) hiking while deficits remained large.
*   **Loose Monetary + Tight Fiscal (Austerity)**: Monetary policy trying to offset fiscal drag. [Bonds](/glossary#bond) may do well; [stocks](/glossary#stock) struggle. Example: Europe post-2011.
*   **Tight Monetary + Tight Fiscal**: Maximum restraint. Economy slows significantly. Recession risk high. Cash and [bonds](/glossary#bond) outperform.

### Practical Takeaways:
*   **Track Policy Direction**: Is policy becoming more accommodative or restrictive? That's more important than current levels.
*   **Don't Fight the [Fed](/glossary#fed)**: Especially true for rate policy. [Fed](/glossary#fed) easing is bullish; [Fed](/glossary#fed) tightening is a headwind.
*   **Watch Deficit Spending**: Large fiscal packages tend to boost economic growth and corporate [earnings](/glossary#earnings)—initially bullish.
*   **Monitor [Inflation](/glossary#inflation)**: Excessive stimulus creates [inflation](/glossary#inflation) risk, which eventually forces tightening.
*   **Global Coordination**: In a globalized world, watch policy in Europe, China, and Japan too. Divergent policies affect currencies and capital flows.

Understanding fiscal and monetary policy turns economic news into actionable investment insight. When you hear about [Fed](/glossary#fed) meetings or stimulus packages, you'll know exactly what it means for your portfolio.
\`,
        keyTakeaways: [
            "Monetary policy is controlled by the Fed (rates, QE); fiscal policy is controlled by government (spending, taxes).",
            "Monetary policy is fast and independent; fiscal policy is slow and political.",
            "Loose policy supports stocks and growth; tight policy is a headwind.",
            "In crises, expect massive coordinated response—this limits downside but can create inflation later.",
            "Track policy direction: easing is bullish, tightening is bearish. Don't fight the Fed."
        ]
    },`;

const startMarker = '"eco_6": {';
const endMarker = '"eco_7": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== eco_6: Fiscal vs. Monetary Policy - VALIDATION ===');
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
console.log('✓ Successfully updated eco_6!');
