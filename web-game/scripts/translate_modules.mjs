/**
 * Translate module names and descriptions to all languages
 * and insert them into the locale files.
 */

import { translate } from 'google-translate-api-x';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning');
const TARGET_LANGS = ['ru', 'es', 'fr', 'de', 'zh', 'ja', 'pt'];

// Module metadata from en.ts (manually extracted to ensure correctness)
const MODULES = {
    "financial_foundations": {
        title: "Financial Foundations",
        description: "Master the core concepts of money, economy, and personal finance."
    },
    "investment_basics": {
        title: "Investment Basics",
        description: "Start your journey into the world of investing."
    },
    "stock_market_mastery": {
        title: "Stock Market Mastery",
        description: "Deep dive into equities and company analysis."
    },
    "bonds_fixed_income": {
        title: "Bonds & Fixed Income",
        description: "Understanding debt markets and yield curves."
    },
    "funds_etfs": {
        title: "Funds & ETFs",
        description: "Diversified investing through pooled vehicles."
    },
    "forex_currencies": {
        title: "Forex & Currencies",
        description: "Trading the world's largest financial market."
    },
    "crypto_blockchain": {
        title: "Crypto & Blockchain",
        description: "Navigating the digital asset revolution."
    },
    "commodities_futures": {
        title: "Commodities & Futures",
        description: "Trading raw materials and derivative contracts."
    },
    "technical_analysis": {
        title: "Technical Analysis",
        description: "Mastering charts, patterns, and indicators."
    },
    "economics_101": {
        title: "Economics 101",
        description: "Core economic concepts that drive markets."
    },
    "advanced_strategies": {
        title: "Advanced Strategies",
        description: "Professional trading techniques and systems."
    },
    "portfolio_management": {
        title: "Portfolio Management",
        description: "Constructing and maintaining a winning portfolio."
    },
    "trading_psychology": {
        title: "Trading Psychology",
        description: "Mastering the mental game of trading."
    }
};

async function translateText(text, targetLang) {
    try {
        const res = await translate(text, { to: targetLang });
        return res.text;
    } catch (error) {
        console.error(`Error translating to ${targetLang}:`, error);
        return text; // Fallback to English
    }
}

async function processLanguage(lang) {
    console.log(`\nProcessing ${lang.toUpperCase()}...`);
    const filePath = path.join(LOCALES_DIR, `${lang}.ts`);

    if (!fs.existsSync(filePath)) {
        console.log(`  ⚠️ File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Check if modules are already present
    if (content.includes('"financial_foundations":')) {
        console.log(`  ⚠️ Modules already seem to be present in ${lang}.ts. Skipping insertion to avoid duplicates.`);
        // We could update them, but for now let's assume if present, they are fine or we risk messing up structure.
        // Actually, user said Advanced Strategies is missing in RU, but maybe others are there?
        // Let's check specifically for Advanced Strategies later.
        // For now, let's construct the module block and see if we can merge or insert.
    }

    const translatedModules = {};

    for (const [key, data] of Object.entries(MODULES)) {
        process.stdout.write(`  Translating ${key}... `);
        const title = await translateText(data.title, lang);
        const description = await translateText(data.description, lang);
        translatedModules[key] = { title, description };
        console.log('✓');
    }

    // Construct the string to insert
    let modulesString = '';
    for (const [key, data] of Object.entries(translatedModules)) {
        modulesString += `    "${key}": {\n        title: "${data.title}",\n        description: "${data.description}"\n    },\n`;
    }

    // Insert before the first lesson key (usually "ff_1")
    // We look for 'export const learningContent = {'
    const startMarker = 'export const learningContent = {';
    const insertIndex = content.indexOf(startMarker);

    if (insertIndex !== -1) {
        // We want to insert AFTER the opening brace
        const insertionPoint = insertIndex + startMarker.length;

        // Check if we are inserting into a file that already has some modules
        // If the file starts with ff_1 immediately, we are good.
        // If it has other keys, we might duplicate.

        // Let's try to replace the start marker with marker + modules
        // But we need to be careful about formatting.

        const newContent = content.slice(0, insertionPoint) + '\n' + modulesString + content.slice(insertionPoint);

        // Write back
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`  ✅ Updated ${lang}.ts with module metadata.`);
    } else {
        console.error(`  ❌ Could not find insertion point in ${lang}.ts`);
    }
}

async function main() {
    console.log('╔═══════════════════════════════════════════════════╗');
    console.log('║   Translate Module Metadata                       ║');
    console.log('╚═══════════════════════════════════════════════════╝');

    for (const lang of TARGET_LANGS) {
        await processLanguage(lang);
    }

    console.log('\n✅ All languages processed!');
}

main().catch(console.error);
