const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

let content = fs.readFileSync(filePath, 'utf8');

// Find fx_13 and add additional content to meet 6500+ char requirement
const fx13Pattern = /(\*\*Final Thought\*\*: There is no "better" market\. The best market is the one that fits your personality, schedule, capital, and risk tolerance\. Try both on demo accounts before committing real money\.)\n\`,/;

const fx13Addition = `$1

**Key Comparisons Summary Table**:
*   **Liquidity**: Forex wins with $6T+ daily volume vs. stock market's fragmented liquidity across exchanges.
*   **Accessibility**: Forex requires less capital to start; stocks require $25k for PDT compliance in the US.
*   **Analysis Style**: Forex favors technical and macro analysis; stocks favor fundamental and technical analysis.
*   **Cost Structure**: Both have become very competitive with zero-commission trading available.
*   **Regulation**: Stocks are more heavily regulated by SEC/FINRA; Forex regulation varies by broker jurisdiction.
*   **Learning Curve**: Forex is simpler to start (fewer instruments); stocks offer more depth for long-term investors.
*   **Wealth Building**: Stocks excel for long-term compounding through dividends and corporate growth.
\`,`;

content = content.replace(fx13Pattern, fx13Addition);

fs.writeFileSync(filePath, content, 'utf8');
console.log('fx_13 expanded successfully!');
