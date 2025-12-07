const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

let content = fs.readFileSync(filePath, 'utf8');

// Find fx_6 and add additional content to meet 6500+ char requirement
const fx6Pattern = /(\*   \*\*Politics\*\*: Always keep an eye on elections and geopolitical tensions\. They can override economic data in an instant\.)\n\`,/;

const fx6Addition = `$1

**Additional Considerations**:
*   **Speculation**: Large speculators like hedge funds can move markets based on sentiment shifts. The Commitment of Traders (COT) report reveals their positions.
*   **Technical Levels**: Major technical levels (support/resistance, round numbers) attract attention and can trigger moves regardless of fundamentals.
*   **Market Expectations**: It's not just the data that matters, but how it compares to expectations. A below-forecast number can still be bullish if the market expected even worse.
\`,`;

content = content.replace(fx6Pattern, fx6Addition);

fs.writeFileSync(filePath, content, 'utf8');
console.log('fx_6 expanded successfully!');
