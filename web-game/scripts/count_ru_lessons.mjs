/**
 * Count translated lessons per module in ru.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ruPath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'ru.ts');
const content = fs.readFileSync(ruPath, 'utf8');

const modules = {
    'ff': 'Financial Foundations',
    'ib': 'Investment Basics',
    'sm': 'Stock Market Mastery',
    'bf': 'Bonds & Fixed Income',
    'fe': 'Funds & ETFs',
    'fx': 'Forex & Currencies',
    'cb': 'Crypto & Blockchain',
    'eco': 'Economics 101',
    'ta': 'Technical Analysis',
    'cf': 'Commodities & Futures',
    'as': 'Advanced Strategies',
    'pm': 'Portfolio Management',
    'tp': 'Trading Psychology'
};

console.log('=== Russian Translation Status ===\n');
console.log('Module                      | Prefix | Lessons Found');
console.log('----------------------------|--------|---------------');

for (const [prefix, name] of Object.entries(modules)) {
    const regex = new RegExp(`"${prefix}_\\d+"`, 'g');
    const matches = content.match(regex) || [];
    const uniqueLessons = [...new Set(matches)];
    const status = uniqueLessons.length > 0 ? `✅ ${uniqueLessons.length}` : '❌ 0';
    console.log(`${name.padEnd(27)} | ${prefix.padEnd(6)} | ${status}`);
}
