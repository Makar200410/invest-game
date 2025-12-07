/**
 * Cleanup duplicate module definitions in ru.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ruPath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'ru.ts');

let content = fs.readFileSync(ruPath, 'utf8');

// The block we want to remove (the one with English title)
const badBlockStart = `    "financial_foundations": {
        title: "Financial Foundations",`;

const badBlockEnd = `    "trading_psychology": {
        title: "Торговая психология",
        description: "Освоение умственной игры трейдинга."
    },`;

const startIndex = content.indexOf(badBlockStart);
if (startIndex !== -1) {
    const endIndex = content.indexOf(badBlockEnd, startIndex);
    if (endIndex !== -1) {
        // Find the end of the badBlockEnd
        const blockEndLength = badBlockEnd.length;
        const fullEndIndex = endIndex + blockEndLength;

        // Remove from startIndex to fullEndIndex
        // Also remove the trailing comma/newline if present
        // Check what's after
        const after = content.substring(fullEndIndex, fullEndIndex + 10);
        console.log('Content after removal point:', after);

        const newContent = content.substring(0, startIndex) + content.substring(fullEndIndex);
        fs.writeFileSync(ruPath, newContent, 'utf8');
        console.log('✅ Removed duplicate block from ru.ts');
    } else {
        console.log('❌ Could not find end of duplicate block');
    }
} else {
    console.log('❌ Could not find start of duplicate block');
}
