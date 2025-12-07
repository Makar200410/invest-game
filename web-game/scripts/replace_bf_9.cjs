const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "bf_9": {
        title: "High-Yield (Junk) Bonds",
        content: \`
# High-Yield Bonds: Risk Meets Reward

[High-yield bonds](/glossary#high-yield-bond), also known as "junk bonds," are corporate [bonds](/glossary#bond) rated below investment grade. They offer significantly higher [yields](/glossary#yield) than safer [bonds](/glossary#bond) but come with substantial default [risk](/glossary#risk). For investors who understand the [risks](/glossary#risk), high-yield [bonds](/glossary#bond) can enhance [portfolio](/glossary#portfolio) returns, but they behave more like [stocks](/glossary#stock) than traditional fixed income.

## Part 1: What Are High-Yield Bonds?

High-yield [bonds](/glossary#bond) are issued by companies with weaker credit profiles.

*   **Definition**: [Bonds](/glossary#bond) rated BB/Ba or below by major [credit rating](/glossary#credit-rating) agencies.
*   **Why "Junk"?**: The term reflects higher default [risk](/glossary#risk). It's a blunt but accurate description.
*   **[Yield](/glossary#yield) [Premium](/glossary#premium)**: Typically 3-6% higher [yields](/glossary#yield) than investment-grade [bonds](/glossary#bond).
*   **Issuers**: Smaller companies, leveraged buyouts, turnaround situations, emerging companies.
*   **Market Size**: ~$1.5 trillion market. Significant but smaller than investment-grade.
*   **Fallen Angels**: Former investment-grade companies downgraded to junk status (Ford, Kraft).

## Part 2: The Appeal of High Yield

Despite the [risks](/glossary#risk), high-yield [bonds](/glossary#bond) attract many investors.

*   **Income**: 7-10%+ [yields](/glossary#yield) when Treasuries pay 3-4%. Significant income enhancement.
*   **Total Return**: Historically competitive with [stocks](/glossary#stock) over long periods, with lower [volatility](/glossary#volatility).
*   **[Diversification](/glossary#diversification)**: Different return drivers than investment-grade [bonds](/glossary#bond) or Treasuries.
*   **Credit Improvement**: Some junk [bonds](/glossary#bond) get upgraded to investment-grade, causing price appreciation.
*   **Contractual Income**: Unlike [dividends](/glossary#dividend), [bond](/glossary#bond) payments are legally required (until default).
*   **Recovery Value**: Even in default, [bond](/glossary#bond) holders receive something (typically 40-50% of face value).

## Part 3: Understanding the Risks

High-yield investing requires clear-eyed assessment of multiple [risks](/glossary#risk).

*   **Default [Risk](/glossary#risk)**: 3-4% annual default rate historically. Spikes to 10%+ in [recessions](/glossary#recession).
*   **[Credit Spread](/glossary#credit-spread) [Risk](/glossary#risk)**: When spreads widen (fear increases), prices fall even without defaults.
*   **[Liquidity](/glossary#liquidity) [Risk](/glossary#risk)**: During stress, buyers disappear. You may not be able to sell at fair prices.
*   **Interest Rate [Risk](/glossary#risk)**: Less sensitive than investment-grade due to higher [coupons](/glossary#coupon), but still present.
*   **Concentration [Risk](/glossary#risk)**: A few industries (energy, telecom, retail) dominate junk issuance.
*   **Economic [Sensitivity](/glossary#economic-sensitivity)**: Companies with weak credit struggle most during [recessions](/glossary#recession).

## Part 4: Default and Recovery Analysis

Understanding what happens when things go wrong.

*   **Historical Default Rate**: Long-term average 3-4% per year. But highly cyclical.
*   **[Recession](/glossary#recession) Defaults**: Can reach 10-15% in severe downturns (2009: 13.4%).
*   **Expansion Defaults**: Can fall below 2% in good times.
*   **Recovery Rates**: Average 40-50% for senior unsecured junk [bonds](/glossary#bond).
*   **Secured Recovery**: Higher for secured junk (first-lien loans recover 70-80%).
*   **Net Loss**: 4% default × 50% loss = 2% annual credit loss on average. High [yields](/glossary#yield) offset this, but barely in bad years.

## Part 5: Credit Ratings in High-Yield

Understanding the junk [bond](/glossary#bond) rating spectrum.

*   **BB/Ba**: Highest junk tier. Close to investment-grade. 1-3% default rate.
*   **B**: Middle tier. More speculative. 3-6% default rate historically.
*   **CCC and Below**: Lowest tier. Very high [risk](/glossary#risk). 10-30%+ default rates.
*   **Split Ratings**: Ba1/BB+ is almost investment-grade. B3/B- is deep junk.
*   **"Rising Stars"**: Junk [bonds](/glossary#bond) upgraded to investment-grade. Significant price gains.
*   **"Fallen Angels"**: Investment-grade [bonds](/glossary#bond) downgraded to junk. Often forced selling creates opportunities.

## Part 6: High-Yield in Different Environments

How junk [bonds](/glossary#bond) perform across economic conditions.

*   **Economic Growth**: Best environment. Companies thrive, defaults fall, spreads narrow.
*   **[Recession](/glossary#recession)**: Worst environment. Defaults spike, spreads blow out, prices crash.
*   **Rising Rates**: Mixed. Higher rates hurt, but often coincide with growth (good for credit).
*   **Falling Rates**: Good news, usually signals [Fed](/glossary#fed) easing due to [recession](/glossary#recession) — credit concern.
*   **2008-2009**: High-yield fell 26%. Spreads hit 20%+. Major crisis.
*   **2020 COVID**: Fell 13% in March, recovered fully by August. V-shaped.

## Part 7: ETFs and Funds for High-Yield Exposure

Professional management and [diversification](/glossary#diversification) are especially important in high-yield.

*   **HYG**: iShares iBoxx High [Yield](/glossary#yield) Corporate [Bond](/glossary#bond) [ETF](/glossary#etf). Largest. ~$15B [assets](/glossary#asset).
*   **JNK**: SPDR Bloomberg High [Yield](/glossary#yield) [Bond](/glossary#bond) [ETF](/glossary#etf). Very popular alternative.
*   **USHY**: iShares Broad USD High [Yield](/glossary#yield) Corporate [Bond](/glossary#bond) [ETF](/glossary#etf). Broader, lower cost.
*   **SHYG**: Short-Term High [Yield](/glossary#yield) [ETF](/glossary#etf). Lower [duration](/glossary#duration), less rate [risk](/glossary#risk).
*   **Active [Funds](/glossary#mutual-fund)**: PIMCO, T. Rowe Price, Vanguard have actively managed high-yield [funds](/glossary#mutual-fund).
*   **Why Active?**: Credit selection matters more in high-yield. Avoiding defaults adds value.

## Part 8: Portfolio Allocation Considerations

How much high-yield belongs in your [portfolio](/glossary#portfolio)?

*   **[Risk](/glossary#risk) Profile**: High-yield behaves 60% like [stocks](/glossary#stock), 40% like [bonds](/glossary#bond). Price accordingly.
*   **Typical Allocation**: 5-15% of fixed income allocation for aggressive investors.
*   **Conservative Approach**: 0%. Stick with investment-grade for safety.
*   **Don't Replace [Stocks](/glossary#stock)**: High-yield offers worse downside protection than Treasuries during crises.
*   **Don't Replace [Investment-Grade](/glossary#investment-grade)**: Different [risk](/glossary#risk) profile. Complement, don't substitute.
*   **[Rebalancing](/glossary#rebalancing)**: High-yield swings with [stocks](/glossary#stock). [Rebalance](/glossary#rebalancing) when it drifts from target.

## Part 9: Practical High-Yield Strategies

Approaches for different investor types.

*   **Simplest**: Own HYG or JNK for 5-10% of [bond](/glossary#bond) allocation. Accept [volatility](/glossary#volatility).
*   **Quality Focus**: BB-rated [bonds](/glossary#bond) only. Lower [yield](/glossary#yield), lower default [risk](/glossary#risk).
*   **Fallen Angels**: Focus on recently downgraded [bonds](/glossary#bond). Often oversold due to forced selling.
*   **Short-Term High-[Yield](/glossary#yield)**: SHYG reduces interest rate [risk](/glossary#risk) while keeping credit [risk](/glossary#risk).
*   **Tactical**: Increase allocation after spreads blow out (recessions). Underweight when spreads are tight.
*   **Skip It Entirely**: For many investors, the complexity and [risk](/glossary#risk) aren't worth the extra [yield](/glossary#yield).
\`,
        keyTakeaways: [
            "High-yield (junk) bonds are rated BB/Ba or below — offering 3-6% extra yield for higher risk.",
            "Default rates average 3-4% annually but spike to 10%+ during recessions.",
            "High-yield behaves more like stocks than traditional bonds during market stress.",
            "Use ETFs (HYG, JNK) for diversification — avoid individual junk bonds."
        ]
    },`;

// Find bf_8's closing and insert bf_9 after it
const marker = '"bf_8":';
const bf8Start = content.indexOf(marker);
if (bf8Start === -1) { console.error('bf_8 not found'); process.exit(1); }

// Find the end of bf_8 object
let braceCount = 0;
let bf8End = -1;
let inBf8 = false;
for (let i = bf8Start; i < content.length; i++) {
    if (content[i] === '{') {
        braceCount++;
        inBf8 = true;
    }
    if (content[i] === '}') {
        braceCount--;
        if (inBf8 && braceCount === 0) {
            bf8End = i + 1;
            break;
        }
    }
}

if (bf8End === -1) { console.error('bf_8 end not found'); process.exit(1); }

// Skip comma and whitespace after bf_8
let insertPos = bf8End;
while (insertPos < content.length && (content[insertPos] === ',' || content[insertPos] === '\n' || content[insertPos] === '\r' || content[insertPos] === ' ')) {
    insertPos++;
}

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== bf_9: High-Yield Bonds - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

// Insert after bf_8
const before = content.substring(0, bf8End) + ',\n';
const after = content.substring(insertPos);
fs.writeFileSync(filePath, before + newLesson + '\n    ' + after, 'utf8');
console.log('✓ Added bf_9!');
