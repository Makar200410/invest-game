const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "bf_4": {
        title: "Bond Duration",
        content: \`
# Bond Duration: The Sensitivity Meter

[Duration](/glossary#duration) is the most important [risk](/glossary#risk) measure in [bond](/glossary#bond) investing. It tells you how much a [bond](/glossary#bond)'s price will change when interest rates move. Think of it as a sensitivity dial — the higher the [duration](/glossary#duration), the more the price swings. Mastering [duration](/glossary#duration) allows you to control interest rate [risk](/glossary#risk) in your [portfolio](/glossary#portfolio).

## Part 1: What Is Duration?

[Duration](/glossary#duration) measures the weighted average time it takes to receive a [bond](/glossary#bond)'s cash flows.

*   **Technical Definition**: The present value-weighted average time until each cash flow is received.
*   **Practical Meaning**: How sensitive the [bond](/glossary#bond)'s price is to interest rate changes.
*   **Rule of Thumb**: If [duration](/glossary#duration) = 5 years and rates rise 1%, price falls ~5%.
*   **Units**: Expressed in years. A 7-year [duration](/glossary#duration) means 7% price change per 1% rate change.
*   **Not the Same as [Maturity](/glossary#maturity)**: A 10-year [bond](/glossary#bond) might have 8-year [duration](/glossary#duration) due to [coupon](/glossary#coupon) payments along the way.
*   **Zero-[Coupon](/glossary#coupon) Exception**: For zero-[coupon](/glossary#coupon) [bonds](/glossary#bond), [duration](/glossary#duration) equals [maturity](/glossary#maturity) (all cash flows at the end).

## Part 2: Types of Duration

Several [duration](/glossary#duration) measures exist for different purposes. Know the key types.

*   **Macaulay [Duration](/glossary#duration)**: The weighted average time to cash flows. Academic definition. Measured in years.
*   **Modified [Duration](/glossary#duration)**: Macaulay [Duration](/glossary#duration) adjusted for [yield](/glossary#yield). More practical for price sensitivity. What most investors use.
*   **Effective [Duration](/glossary#duration)**: Used for [bonds](/glossary#bond) with embedded [options](/glossary#options) (callable [bonds](/glossary#bond)). Accounts for potential call.
*   **Dollar [Duration](/glossary#duration)**: Measures dollar price change (not percentage) for a rate change.
*   **Key Rate [Duration](/glossary#duration)**: Sensitivity to specific parts of the [yield curve](/glossary#yield-curve).
*   **Default Use**: When someone says "[duration](/glossary#duration)" without specifying, they usually mean Modified [Duration](/glossary#duration).

## Part 3: Factors That Affect Duration

Several [bond](/glossary#bond) characteristics influence [duration](/glossary#duration). Understanding these lets you manage [risk](/glossary#risk).

*   **[Maturity](/glossary#maturity)**: Longer [maturity](/glossary#maturity) = higher [duration](/glossary#duration) = more sensitivity.
*   **[Coupon Rate](/glossary#coupon)**: Higher [coupon](/glossary#coupon) = lower [duration](/glossary#duration). More cash flow earlier reduces sensitivity.
*   **[Yield](/glossary#yield) Level**: Higher [yield](/glossary#yield) = lower [duration](/glossary#duration). Future cash flows are discounted more.
*   **Time**: [Duration](/glossary#duration) decreases as [bond](/glossary#bond) approaches [maturity](/glossary#maturity). Sensitivity naturally falls.
*   **Zero-[Coupon](/glossary#coupon)**: Maximum [duration](/glossary#duration) for any given [maturity](/glossary#maturity). No [coupons](/glossary#coupon) to reduce sensitivity.
*   **Callable [Bonds](/glossary#bond)**: Effective [duration](/glossary#duration) is shorter because issuers call when rates fall.

## Part 4: Duration and Portfolio Management

[Duration](/glossary#duration) is the primary tool for managing interest rate [risk](/glossary#risk) in [bond portfolios](/glossary#portfolio).

*   **[Portfolio](/glossary#portfolio) [Duration](/glossary#duration)**: Weighted average of individual [bond](/glossary#bond) durations. Expresses overall sensitivity.
*   **Benchmarking**: Compare your [portfolio](/glossary#portfolio) [duration](/glossary#duration) to the benchmark (e.g., Bloomberg Aggregate ≈ 6 years).
*   **Shortening [Duration](/glossary#duration)**: Expect rates to rise? Reduce [duration](/glossary#duration). Buy shorter [bonds](/glossary#bond), sell longer ones.
*   **Extending [Duration](/glossary#duration)**: Expect rates to fall? Increase [duration](/glossary#duration). Lock in current rates with longer [bonds](/glossary#bond).
*   **[Duration](/glossary#duration) Matching**: Institutions match [asset](/glossary#asset) [duration](/glossary#duration) to [liability](/glossary#liability) [duration](/glossary#duration) (e.g., pension funds).
*   **Immunization**: Setting [portfolio](/glossary#portfolio) [duration](/glossary#duration) to match your investment horizon protects against rate changes.

## Part 5: Convexity — The Second-Order Effect

[Convexity](/glossary#convexity) measures how [duration](/glossary#duration) changes as rates change. It's a refinement for large rate moves.

*   **What It Measures**: The curvature of the price-[yield](/glossary#yield) relationship. [Duration](/glossary#duration) assumes a straight line; [convexity](/glossary#convexity) corrects this.
*   **Why It Matters**: For large rate changes, [duration](/glossary#duration) alone underestimates price gains and overestimates price losses.
*   **Positive [Convexity](/glossary#convexity)**: Normal [bonds](/glossary#bond) have positive [convexity](/glossary#convexity). This is good. Prices rise more than expected when rates fall.
*   **Negative [Convexity](/glossary#convexity)**: Callable [bonds](/glossary#bond) and mortgage-backed securities can have negative [convexity](/glossary#convexity). Prices rise less when rates fall.
*   **For Retail Investors**: [Duration](/glossary#duration) is sufficient for most decisions. [Convexity](/glossary#convexity) matters more for professionals managing large portfolios.
*   **Combined Formula**: Price Change ≈ -[Duration](/glossary#duration) × Δ[Yield](/glossary#yield) + ½ × [Convexity](/glossary#convexity) × (Δ[Yield](/glossary#yield))²

## Part 6: Duration of Common Bond Funds

Here's the [duration](/glossary#duration) of popular [bond](/glossary#bond) [ETFs](/glossary#etf) to give you practical reference points.

*   **Short-Term [Bonds](/glossary#bond)**: [Duration](/glossary#duration) 1-3 years. Examples: SHY, BSV, SCHO. Low interest rate [risk](/glossary#risk).
*   **Intermediate-Term [Bonds](/glossary#bond)**: [Duration](/glossary#duration) 4-7 years. Examples: BND, AGG, IEF. Moderate [risk](/glossary#risk).
*   **Long-Term [Bonds](/glossary#bond)**: [Duration](/glossary#duration) 10-20+ years. Examples: TLT, VGLT. High interest rate [risk](/glossary#risk).
*   **Ultra-Short**: [Duration](/glossary#duration) < 1 year. Examples: BIL, SGOV. Minimal price movement.
*   **[TIPS](/glossary#tips) Funds**: TIP has [duration](/glossary#duration) ~6 years. Real rate sensitivity, not nominal.
*   **High-[Yield](/glossary#yield) [Bonds](/glossary#bond)**: HYG has [duration](/glossary#duration) ~4 years. Lower than investment-grade due to higher [coupons](/glossary#coupon).

## Part 7: Duration Mistakes to Avoid

Common errors investors make when dealing with [duration](/glossary#duration).

*   **Ignoring [Duration](/glossary#duration)**: Not knowing your [portfolio](/glossary#portfolio)'s [duration](/glossary#duration) means you don't know your interest rate [risk](/glossary#risk).
*   **Reaching for [Yield](/glossary#yield)**: Higher [yield](/glossary#yield) often means longer [duration](/glossary#duration). You're taking more [risk](/glossary#risk) for that [yield](/glossary#yield).
*   **Timing Rates**: Trying to time interest rate moves is as hard as timing [stocks](/glossary#stock). Most fail.
*   **Panic Selling**: Selling after rates rise locks in losses. Hold to [maturity](/glossary#maturity) if you can.
*   **Ignoring [Convexity](/glossary#convexity)**: For very long or callable [bonds](/glossary#bond), [duration](/glossary#duration) alone isn't enough.
*   **Mismatch with Goals**: A 20-year [duration](/glossary#duration) [portfolio](/glossary#portfolio) for a 5-year goal is inappropriate.

## Part 8: Building a Duration-Appropriate Portfolio

Match your [bond portfolio](/glossary#portfolio)'s [duration](/glossary#duration) to your circumstances and outlook.

*   **Near-Term Goals (<3 years)**: Very short [duration](/glossary#duration) (1-2 years). Capital preservation is priority.
*   **Medium Goals (3-7 years)**: Intermediate [duration](/glossary#duration) (3-5 years). Balanced [risk](/glossary#risk) and [yield](/glossary#yield).
*   **Long-Term Goals (7+ years)**: Can tolerate longer [duration](/glossary#duration) (5-8 years). More rate [risk](/glossary#risk) okay.
*   **Rising Rate Environment**: Shorten to [duration](/glossary#duration) 2-4 years. Accept lower [yield](/glossary#yield) for protection.
*   **Falling Rate Environment**: Extend to [duration](/glossary#duration) 7-10+ years. Lock in current rates.
*   **Unsure**: Stay with intermediate [duration](/glossary#duration) (5-6 years). [Total Bond Market](/glossary#bond) funds do this for you.

## Part 9: Duration in Practice — Real Scenarios

Let's apply [duration](/glossary#duration) to realistic investment decisions.

*   **Scenario 1**: You expect the [Fed](/glossary#fed) to raise rates 1%. Your [bond fund](/glossary#mutual-fund) has [duration](/glossary#duration) 6. Expected loss ≈ 6%.
*   **Scenario 2**: You're retiring in 3 years. You shouldn't own long-term [bond](/glossary#bond) funds. Stay short [duration](/glossary#duration).
*   **Scenario 3**: Rates have risen 4% and now seem stable. This is an opportunity to lock in higher rates with longer [duration](/glossary#duration) [bonds](/glossary#bond).
*   **Scenario 4**: You're young with 30-year horizon. Rate fluctuations don't matter much. Any [duration](/glossary#duration) works; just stay invested.
*   **The Takeaway**: [Duration](/glossary#duration) is a tool for control. Know yours. Adjust when circumstances change.
*   **Simple Strategy**: Use Total [Bond Market](/glossary#bond) [ETF](/glossary#etf) (BND) with ~6-year [duration](/glossary#duration) as default. Adjust from there if needed.
\`,
        keyTakeaways: [
            "Duration measures price sensitivity to interest rate changes — higher duration = more volatility.",
            "Rule of thumb: Duration (years) ≈ percentage price change per 1% rate change.",
            "Longer maturity and lower coupon = higher duration = more risk.",
            "Match your bond portfolio's duration to your investment time horizon."
        ]
    },`;

const startMarker = '"bf_4": {';
const endMarker = '"bf_5": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== bf_4: Bond Duration - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated bf_4!');
