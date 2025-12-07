const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newLesson = `    "bf_3": {
        title: "Bond Yields & Prices",
        content: \`
# Bond Yields & Prices: The Seesaw Relationship

The relationship between [bond](/glossary#bond) [yields](/glossary#yield) and prices is the most confusing concept in fixed income investing, yet it's absolutely fundamental. When [interest rates](/glossary#interest-rate) go UP, [bond](/glossary#bond) prices go DOWN. When rates go DOWN, prices go UP. Understanding why this happens will make you a smarter investor and help you navigate interest rate changes.

## Part 1: The Inverse Relationship Explained

[Bond](/glossary#bond) prices and [yields](/glossary#yield) move in opposite directions. This is a mathematical certainty, not a market behavior.

*   **The Core Truth**: When [interest rates](/glossary#interest-rate) rise, existing [bond](/glossary#bond) prices fall. When rates fall, existing [bond](/glossary#bond) prices rise.
*   **Why It Happens**: A [bond](/glossary#bond) pays a fixed [coupon](/glossary#coupon). If new [bonds](/glossary#bond) pay more, your old [bond](/glossary#bond) is less attractive. Its price must fall to compete.
*   **Simple Example**: You own a $1,000 [bond](/glossary#bond) paying 4% ($40/year). New [bonds](/glossary#bond) pay 5% ($50/year). Who would pay $1,000 for your 4% [bond](/glossary#bond) when they could get 5% elsewhere? No one. Your [bond](/glossary#bond)'s price falls until its [yield](/glossary#yield) equals ~5%.
*   **Opposite Scenario**: If new [bonds](/glossary#bond) pay only 3%, your 4% [bond](/glossary#bond) is now more valuable. Its price rises.
*   **The Seesaw**: [Yield](/glossary#yield) up = Price down. [Yield](/glossary#yield) down = Price up. Always opposite.

## Part 2: Calculating the Price Impact

The exact price change depends on the [bond](/glossary#bond)'s characteristics. Here's the general relationship.

*   **Price Change Formula (Approximate)**: % Price Change ≈ -Duration × Change in [Yield](/glossary#yield)
*   **Example**: A [bond](/glossary#bond) with 5-year duration. [Yields](/glossary#yield) rise 1%. Price falls approximately 5%.
*   **Duration**: A measure of interest rate sensitivity. Longer-[maturity](/glossary#maturity) [bonds](/glossary#bond) have higher duration.
*   **[Coupon](/glossary#coupon) Effect**: Lower-[coupon](/glossary#coupon) [bonds](/glossary#bond) have higher durations. A zero-[coupon](/glossary#coupon) [bond](/glossary#bond)'s duration equals its [maturity](/glossary#maturity).
*   **Convexity**: At extreme rate changes, the relationship isn't perfectly linear. Convexity adjusts the estimate.
*   **Practical Point**: You don't need to calculate precisely — just know that longer [bonds](/glossary#bond) move more than shorter [bonds](/glossary#bond).

## Part 3: Why Duration Matters

[Duration](/glossary#duration) measures how sensitive a [bond](/glossary#bond) is to interest rate changes. It's your key [risk](/glossary#risk) metric.

*   **Definition**: [Duration](/glossary#duration) is the weighted average time to receive all cash flows from a [bond](/glossary#bond).
*   **Rule of Thumb**: If [duration](/glossary#duration) = 7 years and rates rise 1%, [bond](/glossary#bond) price falls ~7%.
*   **Short [Duration](/glossary#duration)**: Less sensitive. A 2-year [bond](/glossary#bond) barely reacts to rate changes.
*   **Long [Duration](/glossary#duration)**: Highly sensitive. A 30-year [bond](/glossary#bond) can swing 20%+ with rate changes.
*   **Zero-[Coupon](/glossary#coupon) [Bonds](/glossary#bond)**: Highest [duration](/glossary#duration) for their [maturity](/glossary#maturity). No [coupons](/glossary#coupon) to reduce sensitivity.
*   **Managing Duration**: If you expect rates to rise, shorten [duration](/glossary#duration). If rates will fall, extend [duration](/glossary#duration).

## Part 4: Yield to Maturity (YTM)

[Yield to Maturity](/glossary#ytm) is the annualized return if you hold a [bond](/glossary#bond) until it matures. It's the most complete [yield](/glossary#yield) measure.

*   **Definition**: The internal rate of return that equates the [bond](/glossary#bond)'s price to the present value of all future cash flows.
*   **Includes**: [Coupon](/glossary#coupon) payments AND any price gain or loss at [maturity](/glossary#maturity).
*   **Premium [Bond](/glossary#bond)**: Bought above face value. [YTM](/glossary#ytm) < [Coupon Rate](/glossary#coupon) (price decline offsets some [coupon](/glossary#coupon) income).
*   **[Discount](/glossary#discount) [Bond](/glossary#bond)**: Bought below face value. [YTM](/glossary#ytm) > [Coupon Rate](/glossary#coupon) (price gain adds to [coupon](/glossary#coupon) income).
*   **At Par**: [YTM](/glossary#ytm) = [Coupon Rate](/glossary#coupon). No price adjustment.
*   **Assumptions**: [YTM](/glossary#ytm) assumes you hold to [maturity](/glossary#maturity) AND reinvest [coupons](/glossary#coupon) at the [YTM](/glossary#ytm) rate. If rates change, actual return differs.

## Part 5: The Yield Curve

The [yield curve](/glossary#yield-curve) shows [yields](/glossary#yield) across different [maturities](/glossary#maturity). Its shape predicts economic conditions.

*   **Normal [Yield Curve](/glossary#yield-curve)**: Long-term rates higher than short-term. Economy healthy. Investors demand more for locking up money longer.
*   **[Flat Yield Curve](/glossary#yield-curve)**: Short and long rates similar. Transition period. Uncertainty.
*   **[Inverted Yield Curve](/glossary#yield-curve)**: Short-term rates HIGHER than long-term. [Recession](/glossary#recession) predictor. Very reliable historically.
*   **Why Inversion Matters**: Investors accept lower long-term rates because they expect the [Fed](/glossary#fed) to cut rates as [recession](/glossary#recession) hits.
*   **2023 Inversion**: 2-year Treasury [yielded](/glossary#yield) more than 10-year for over a year. Classic [recession](/glossary#recession) signal.
*   **Check It**: The [yield curve](/glossary#yield-curve) is published daily. Search "Treasury [yield curve](/glossary#yield-curve)" for current shape.

## Part 6: Real Yield vs. Nominal Yield

[Inflation](/glossary#inflation) erodes the purchasing power of [bond](/glossary#bond) payments. [Real yield](/glossary#real-yield) accounts for this.

*   **Nominal [Yield](/glossary#yield)**: The stated [yield](/glossary#yield). What you see quoted. Doesn't account for [inflation](/glossary#inflation).
*   **[Real Yield](/glossary#real-yield)**: Nominal [Yield](/glossary#yield) - [Inflation](/glossary#inflation) Rate. Your actual purchasing power gain.
*   **Example**: [Bond](/glossary#bond) [yields](/glossary#yield) 5%. [Inflation](/glossary#inflation) is 3%. [Real yield](/glossary#real-yield) = 2%.
*   **Negative [Real Yield](/glossary#real-yield)**: If [inflation](/glossary#inflation) exceeds nominal [yield](/glossary#yield), you're losing purchasing power. Common in 2021.
*   **[TIPS](/glossary#tips)**: [Treasury Inflation-Protected Securities](/glossary#tips) adjust for [inflation](/glossary#inflation). Their [yield](/glossary#yield) is the [real yield](/glossary#real-yield) directly.
*   **Importance**: Always consider [real yields](/glossary#real-yield). A 6% [yield](/glossary#yield) with 7% [inflation](/glossary#inflation) is worse than 3% [yield](/glossary#yield) with 1% [inflation](/glossary#inflation).

## Part 7: Current Yield vs. YTM

Don't confuse [current yield](/glossary#current-yield) with [YTM](/glossary#ytm). They measure different things.

*   **[Current Yield](/glossary#current-yield)**: Annual [Coupon](/glossary#coupon) / Current Price. Simple. Only measures income.
*   **Example**: $50 annual [coupon](/glossary#coupon), price $950. [Current yield](/glossary#current-yield) = 50/950 = 5.26%.
*   **[YTM](/glossary#ytm)**: Full return including price change at [maturity](/glossary#maturity). More comprehensive.
*   **When They Differ**: Price ≠ [Par](/glossary#par-value) value. Above [par](/glossary#par-value), [current yield](/glossary#current-yield) > [YTM](/glossary#ytm). Below [par](/glossary#par-value), [current yield](/glossary#current-yield) < [YTM](/glossary#ytm).
*   **Which to Use**: [YTM](/glossary#ytm) for buy-and-hold comparison. [Current yield](/glossary#current-yield) if you only care about income.
*   **Most Quoted**: [YTM](/glossary#ytm) is the standard measure in markets and should be your go-to comparison metric.

## Part 8: Practical Implications for Investors

How should you apply this knowledge to your investing decisions?

*   **Rising Rate Environment**: Shorten [duration](/glossary#duration). Hold shorter-[maturity](/glossary#maturity) [bonds](/glossary#bond) or [bond](/glossary#bond) funds with low [duration](/glossary#duration).
*   **Falling Rate Environment**: Extend [duration](/glossary#duration). Longer [bonds](/glossary#bond) gain more when rates fall.
*   **Hold to [Maturity](/glossary#maturity)**: If you hold until [maturity](/glossary#maturity), price fluctuations don't affect your return. You get [YTM](/glossary#ytm).
*   **[Bond](/glossary#bond) [Fund](/glossary#mutual-fund) Reality**: [Bond](/glossary#bond) funds don't have [maturity](/glossary#maturity) dates. They continuously buy and sell. Price changes affect you.
*   **Don't Panic Sell**: [Bond](/glossary#bond) prices recover as [bonds](/glossary#bond) approach [maturity](/glossary#maturity). Selling after a rate spike locks in losses.
*   **[Laddering](/glossary#bond-ladder)**: Holding [bonds](/glossary#bond) maturing in different years smooths rate exposure.

## Part 9: The 2022 Bond Crash — A Case Study

2022 was the worst year for [bonds](/glossary#bond) in decades. It illustrated everything in this lesson.

*   **What Happened**: The [Fed](/glossary#fed) raised rates from near 0% to over 4% in 12 months.
*   **Impact**: The Total [Bond](/glossary#bond) Market (BND) fell ~13%. Long-term Treasuries (TLT) fell ~30%.
*   **Why So Bad**: [Duration](/glossary#duration) killed. Years of near-zero rates meant [bonds](/glossary#bond) had nowhere to go but down when rates rose.
*   **No Safety**: [Bonds](/glossary#bond) failed to provide their usual [diversification](/glossary#diversification) benefit. [Stocks](/glossary#stock) and [bonds](/glossary#bond) fell together.
*   **Lesson**: [Bonds](/glossary#bond) aren't [risk](/glossary#risk)-free. Interest rate [risk](/glossary#risk) is real and can hurt badly.
*   **Recovery**: Higher rates now mean higher future [yields](/glossary#yield). Today's [bonds](/glossary#bond) offer better income than a decade ago.
\`,
        keyTakeaways: [
            "When interest rates rise, bond prices fall — and vice versa.",
            "Duration measures sensitivity: longer duration = bigger price swings from rate changes.",
            "Yield to Maturity (YTM) is the most comprehensive return measure for bonds.",
            "An inverted yield curve (short rates > long rates) historically predicts recession."
        ]
    },`;

const startMarker = '"bf_3": {';
const endMarker = '"bf_4": {';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) { console.error('Markers not found'); process.exit(1); }

const charCount = newLesson.length;
const partCount = (newLesson.match(/## Part \d+/g) || []).length;
console.log('=== bf_3: Bond Yields & Prices - VALIDATION ===');
console.log('Chars:', charCount, (charCount >= 8000 && charCount <= 13000) ? '✓' : '✗');
console.log('Parts:', partCount, (partCount >= 5 && partCount <= 9) ? '✓' : '✗');

if (charCount < 8000 || charCount > 13000 || partCount < 5 || partCount > 9) { process.exit(1); }

fs.writeFileSync(filePath, content.substring(0, startIdx) + newLesson + '\n    ' + content.substring(endIdx), 'utf8');
console.log('✓ Updated bf_3!');
