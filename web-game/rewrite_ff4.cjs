const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Helper function to replace lesson content
function replaceLessonContent(lessonId, newTitle, newContent, newKeyTakeaways) {
    const lessonStart = content.indexOf(`"${lessonId}": {`);
    if (lessonStart === -1) {
        console.error(`Lesson ${lessonId} not found`);
        return false;
    }

    const contentStart = content.indexOf('content: `', lessonStart);
    if (contentStart === -1) return false;

    const keyTakeawaysStart = content.indexOf('keyTakeaways: [', contentStart);
    if (keyTakeawaysStart === -1) return false;

    const keyTakeawaysEnd = content.indexOf(']', keyTakeawaysStart);
    if (keyTakeawaysEnd === -1) return false;

    const newLesson = `"${lessonId}": {
        title: "${newTitle}",
        content: \`
${newContent}
        \`,
        keyTakeaways: [
            "${newKeyTakeaways.join('",\n            "')}"
        ]
    }`;

    const closingBrace = content.indexOf('},', keyTakeawaysEnd);
    if (closingBrace === -1) {
        const closingBraceAlt = content.indexOf('}\n', keyTakeawaysEnd);
        if (closingBraceAlt === -1) return false;
        const before = content.substring(0, lessonStart);
        const after = content.substring(closingBraceAlt + 1);
        content = before + newLesson + after;
        return true;
    }

    const before = content.substring(0, lessonStart);
    const after = content.substring(closingBrace + 2);

    content = before + newLesson + after;
    return true;
}

const ff_4_content = `
# The Magic of Compound Interest

**Compound interest** is the most powerful force in personal finance. Albert Einstein allegedly called it the "eighth wonder of the world." Whether he said it or not, the principle remains true: when you earn **interest on your interest**, wealth grows not in a straight line, but in an accelerating curve that becomes explosive over time.

This lesson will transform your understanding of money. You will learn why **patience** is the investor's greatest virtue, why **starting early** beats starting big, and why **high-interest debt** is a financial emergency. Master this concept and your path to wealth becomes almost inevitable.

---

## Part 1: Simple Interest vs. Compound Interest — The Fundamental Difference

**Simple interest** is linear and easy to calculate. You deposit $1,000 at 10% annual interest, and you earn exactly $100 every year — no more, no less. After 10 years, you have $2,000. The formula is straightforward: **Principal × Rate × Time**. There is no acceleration, no growth curve. Your returns are fixed and predictable.

**Compound interest** operates on a fundamentally different principle. Instead of earning **interest only on your principal**, you earn interest on your **principal plus all previously earned interest**. That same $1,000 at 10% grows to $1,100 after Year 1. In Year 2, you earn 10% on $1,100 (not $1,000), giving you $110 instead of $100. Now you have $1,210.

The magic happens over time. After 10 years of compounding, your $1,000 becomes **$2,594** — not $2,000 like simple interest. After 20 years: **$6,728**. After 30 years: **$17,449**. After 40 years: **$45,259**. The curve starts flat but eventually goes vertical. This is the **hockey stick effect** that creates millionaires from modest savers.

The crucial insight is that compound growth is **back-loaded**. Most of the magic happens in the final years. The difference between Year 30 and Year 40 ($45,259 - $17,449 = $27,810) is far greater than the first 20 years combined. This is why **patience** is so important — those who quit early never experience the exponential phase.

---

## Part 2: The Rule of 72 — Your Mental Calculator for Wealth

The **Rule of 72** is a simple formula that every investor must memorize: divide 72 by your annual interest rate to find the number of years required to **double your money**. At 10% returns, money doubles every **7.2 years**. At 6%, every **12 years**. At 3%, every **24 years**. At 1%, every **72 years**.

This rule reveals the stark difference between various investment choices:

• **Stock market (10% average)**: Doubles every 7.2 years  
• **Bond funds (5%)**: Doubles every 14.4 years  
• **High-yield savings (2%)**: Doubles every 36 years  
• **Regular savings (0.1%)**: Doubles every 720 years  

Starting with $10,000 at age 25 and doubling every 7 years: Age 32 = $20,000. Age 39 = $40,000. Age 46 = $80,000. Age 53 = $160,000. Age 60 = $320,000. Age 67 = **$640,000**. Six doublings turn a modest sum into a fortune.

The Rule of 72 works equally well for **debt**. Credit card interest at 24% doubles your debt every **3 years**. A $5,000 balance ignored for 9 years becomes $40,000. This is why high-interest debt is an absolute emergency — compound interest is working **against you** at terrifying speed. The same mathematical force that builds millionaires also creates bankruptcies.

---

## Part 3: Compounding Frequency — The Hidden Multiplier

Interest can compound at different intervals: **annually**, **quarterly**, **monthly**, **daily**, or even **continuously**. The more frequently interest compounds, the faster your wealth grows. This detail can mean thousands of dollars over a lifetime.

Consider $10,000 invested at 10%:  
• **Annual compounding**: $11,000 after Year 1  
• **Monthly compounding**: $11,047 after Year 1  
• **Daily compounding**: $11,052 after Year 1  

The difference seems minor ($52 extra), but over 30 years it compounds into a significant gap. This is why you should always check the **compounding frequency** when comparing financial products.

Banks advertise rates using two terms: **APR** (Annual Percentage Rate) and **APY** (Annual Percentage Yield). APY includes the effect of compounding and is always higher when compounding is frequent. Credit cards advertise APR but compound daily, making the **true cost** significantly higher than the stated rate. When comparing accounts, always use APY for an **apples-to-apples** comparison.

---

## Part 4: The Three Variables — Principal, Rate, and Time

Your compounding success depends on three factors: **how much you invest** (Principal), **what return you earn** (Rate), and **how long you invest** (Time). Most people obsess over Rate — finding the hot stock or perfect timing. But Rate is the variable you control **least**. The market returns what it returns.

**Principal** is entirely within your control. If you earn $60,000 and save 10%, you invest $6,000 annually. Increase to 20%, and you invest $12,000. This single behavioral change **doubles your ending wealth**. It is mathematically equivalent to doubling your investment returns but far more achievable.

**Time** is the most powerful variable and the one young people squander. A 25-year-old investing $5,000/year for 40 years accumulates vastly more than a 35-year-old investing $10,000/year for 30 years — despite investing less total money. The 10-year head start creates an **insurmountable advantage**. Every year you delay is a year of compounding lost forever.

The hierarchy is clear: **Time > Principal > Rate**. Start early, save aggressively, and don't chase returns. The formula works if you give it enough time.

---

## Part 5: The Tale of Two Investors — Why Starting Early Wins

Consider Alice and Bob. **Alice** starts investing $200/month at age 19 and stops at age 27 (8 years). Total invested: $19,200. She never invests again. **Bob** starts at 27 and invests $200/month until age 65 (38 years). Total invested: $91,200. Both earn 10% annually.

At age 65, **Alice has $1,019,000**. Bob has **$722,000**. Alice invested 79% less but ends up 41% wealthier. Her 8-year head start gave those early dollars an extra 38 years to compound — an advantage that sheer persistence couldn't overcome.

This is not an argument against consistent investing — Bob would have more if he started at 19 too. It's an argument for **urgency**. The best time to start was yesterday. The second best time is **today**. If you are young, you possess a superpower no money can buy: **time**. Every month you delay is a month of compounding you will never recover.

Those who understand this in their twenties become millionaires in their fifties. Those who delay become **regretful** in their sixties.

---

## Part 6: How Compound Interest Destroys You — Debt, Fees, and Inflation

Compound interest is a **neutral force** — it builds wealth when working for you, but destroys it when aimed against you.

**Debt** is compound interest in reverse. A $25,000 car loan at 7% costs $4,600 in interest over 5 years. But the true cost is higher: that $4,600 invested over 30 years could grow to **$35,000+**. Every dollar paid in interest is a dollar that can never compound for you.

**Investment fees** quietly eat your returns. A 1% annual fee sounds trivial, but over 30 years it can consume **25-30% of your wealth**. A portfolio that would reach $1,000,000 shrinks to $700,000 simply from this small fee. Low-cost **index funds** charging 0.03-0.10% should be your default choice.

**Inflation** is compound interest for prices. At 3% inflation, costs double every 24 years. The $50,000 car becomes $100,000, then $200,000. If your money doesn't grow faster than inflation, you're getting **poorer** even as your bank balance stays flat. Cash savings paying 0.5% when inflation is 3% means you lose 2.5% purchasing power annually.

---

## Part 7: Practical Strategies to Maximize Compounding

**Strategy 1: Automate immediately**. Don't wait until you have $1,000 or $10,000. Open a brokerage today and set up automatic transfers on payday. Start with $50 if that's all you have. The **habit** matters more than the amount.

**Strategy 2: Reinvest everything**. Enable **DRIP** (Dividend Reinvestment Plan) so dividends automatically buy more shares. Those small reinvestments become enormous over decades. Compounding only works if gains stay invested.

**Strategy 3: Use tax-advantaged accounts**. A **Roth IRA** compounds completely **tax-free**. A **401(k)** offers tax-deferred growth plus employer matching (free money). Taxable accounts lose 15-30% of gains to taxes annually, drastically reducing effective compounding.

**Strategy 4: Stay invested through volatility**. Markets crash. Panic-selling crystallizes losses and misses the recovery. Those who held through 2008 and 2020 were rewarded handsomely. Time in the market beats timing the market. **Patience** is the investor's ultimate weapon.

The formula is simple: Start now. Invest consistently. Reinvest gains. Choose low fees. Use tax-advantaged accounts. Be patient. The mathematics of compounding will do the rest.
`;

const ff_4_takeaways = [
    "Compound interest = exponential growth; simple interest = linear growth.",
    "Rule of 72: Divide 72 by your rate to find years to double.",
    "Start early — time is more powerful than the amount invested.",
    "High-interest debt is compound interest working against you.",
    "Automate investing, reinvest dividends, use tax-advantaged accounts."
];

if (replaceLessonContent('ff_4', 'Compound Interest Magic', ff_4_content, ff_4_takeaways)) {
    console.log('Updated ff_4');
}

fs.writeFileSync(filePath, content);
console.log('ff_4 rewrite complete.');
console.log('Character count:', ff_4_content.length);
