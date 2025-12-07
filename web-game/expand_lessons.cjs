const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Helper function to append content to a lesson
function appendToLesson(lessonId, newText) {
    const lessonStart = content.indexOf(`"${lessonId}": {`);
    if (lessonStart === -1) return false;

    const contentStart = content.indexOf('content: `', lessonStart);
    if (contentStart === -1) return false;

    // Find the end of the content string (the backtick before keyTakeaways or end of object)
    // We look for the backtick that closes the content string.
    // Since content is inside backticks, we search for the next backtick.
    // However, the content itself might contain backticks (code blocks).
    // But in this file structure, the content ends with `,` followed by `keyTakeaways` or `},`.

    // A robust way is to look for `keyTakeaways: [` which usually follows.
    const keyTakeawaysStart = content.indexOf('keyTakeaways: [', contentStart);

    let contentEnd;
    if (keyTakeawaysStart !== -1) {
        // Search backwards from keyTakeaways for the closing backtick
        contentEnd = content.lastIndexOf('`,', keyTakeawaysStart);
    } else {
        // Fallback: search for `},` which ends the object if keyTakeaways is missing (unlikely)
        // Or just search for the next backtick if we assume no backticks in content end
        // Let's assume the standard format: content: `...`,
        contentEnd = content.indexOf('`,', contentStart + 10);
        // This is risky if there are code blocks.
        // Let's use the keyTakeaways anchor as it is reliable in this file.
    }

    if (contentEnd === -1 || (keyTakeawaysStart !== -1 && contentEnd > keyTakeawaysStart)) {
        console.error(`Could not find end of content for ${lessonId}`);
        return false;
    }

    // Insert the new text before the closing backtick
    const before = content.substring(0, contentEnd);
    const after = content.substring(contentEnd);

    content = before + '\n' + newText + after;
    return true;
}

// Content to append
const ff11_append_2 = `
## Part 16: The "Cash Drag" Debate
Some investors argue that holding cash is stupid because it earns less than stocks.
*   **The Math**: Over 100 years, stocks return 10%, cash returns 3%.
*   **The Reality**: You can't eat stocks. If you lose your job in a recession (when stocks are down 50%), you will be forced to sell at the bottom.
*   **The Verdict**: The "loss" of return on your cash is the "premium" you pay for the insurance of not selling your stocks at the wrong time.

## Part 17: Advanced Strategy: The Roth IRA Ladder
You can use your Roth IRA as a backup Emergency Fund.
*   **Rules**: You can withdraw *contributions* anytime tax-free.
*   **Risk**: If you withdraw, you can't put it back. You lose that tax-free space forever.
*   **Advice**: Only do this if you are truly desperate. Keep your cash separate.
`;

const ff12_append_2 = `
## Part 16: The "Buy, Borrow, Die" Strategy Deep Dive
How do billionaires pay little tax?
1.  **Buy**: They buy assets (Companies, Real Estate) that appreciate. They pay no tax on the growth (unrealized gains).
2.  **Borrow**: They borrow money against those assets to live on. Debt is not taxable income.
3.  **Die**: They pass the assets to heirs with a "stepped-up basis," wiping out the tax liability.
*   **Can you do it?**: Yes, on a smaller scale. You can borrow against your home (HELOC) or your stock portfolio (Margin Loan) to avoid selling and triggering taxes. *Warning*: Leverage adds risk.

## Part 17: Final Thoughts on Taxes
Don't let the tax tail wag the investment dog.
*   **Bad**: Buying a losing investment just to get a tax deduction. (You lost $1 to save $0.30).
*   **Good**: Making a great investment and structuring it to pay $0 tax.
`;

// Execute updates
if (appendToLesson('ff_11', ff11_append_2)) console.log('Updated ff_11 part 2');
if (appendToLesson('ff_12', ff12_append_2)) console.log('Updated ff_12 part 2');

fs.writeFileSync(filePath, content);
console.log('Final updates complete.');
