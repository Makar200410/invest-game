/**
 * Comprehensive Translation Script for 6 Languages
 * 
 * Translates ALL 12 modules (144 lessons) into: es, fr, de, zh, ja, pt
 * - Uses 9 chunks for large/problematic lessons
 * - Uses 3 chunks for normal lessons
 * - Saves each language to a separate file
 * 
 * Usage: node translate_all_languages.mjs [lang]
 * Examples:
 *   node translate_all_languages.mjs es    # Translate to Spanish only
 *   node translate_all_languages.mjs all   # Translate to all 6 languages
 */

import { translate } from 'google-translate-api-x';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EN_PATH = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
const LOCALES_DIR = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning');

// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const TARGET_LANGUAGES = ['es', 'fr', 'de', 'zh-CN', 'ja', 'pt'];

const DELAY_MS = 500;          // Delay between API calls
const RETRY_COUNT = 5;         // Number of retries for failed translations
const CHUNKS_NORMAL = 3;       // Chunks for normal lessons
const CHUNKS_LARGE = 9;        // Chunks for problematic lessons

// Lessons that require 9 chunks (problematic/large lessons)
const LARGE_LESSONS = new Set([
    'ff_1', 'ff_2', 'ff_3',     // Financial Foundations
    'ib_1',                      // Investment Basics
    'fx_2', 'fx_4', 'fx_8',     // Forex
    'cb_2', 'cb_3', 'cb_7', 'cb_8',  // Crypto
    'cf_1'                       // Commodities
]);

// Module metadata
const MODULES = {
    "financial_foundations": { title: "Financial Foundations", description: "Master the core concepts of money, economy, and personal finance." },
    "investment_basics": { title: "Investment Basics", description: "Start your journey into the world of investing." },
    "stock_market_mastery": { title: "Stock Market Mastery", description: "Deep dive into equities and company analysis." },
    "bonds_fixed_income": { title: "Bonds & Fixed Income", description: "Understanding debt markets and yield curves." },
    "funds_etfs": { title: "Funds & ETFs", description: "Diversified investing through pooled vehicles." },
    "forex_currencies": { title: "Forex & Currencies", description: "Trading the world's largest financial market." },
    "crypto_blockchain": { title: "Crypto & Blockchain", description: "Navigating the digital asset revolution." },
    "commodities_futures": { title: "Commodities & Futures", description: "Trading raw materials and derivative contracts." },
    "technical_analysis": { title: "Technical Analysis", description: "Mastering charts, patterns, and indicators." },
    "economics_101": { title: "Economics 101", description: "Core economic concepts that drive markets." },
    "portfolio_management": { title: "Portfolio Management", description: "Constructing and maintaining a winning portfolio." },
    "trading_psychology": { title: "Trading Psychology", description: "Mastering the mental game of trading." }
};

// Expected lesson counts per module
const EXPECTED_LESSONS = {
    'ff': 12, 'ib': 12, 'sm': 13, 'bf': 12, 'fe': 12, 'fx': 13,
    'cb': 13, 'eco': 8, 'ta': 12, 'cf': 12, 'pm': 12, 'tp': 13
};

// ═══════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function log(message, type = 'info') {
    const now = new Date().toLocaleTimeString();
    const prefix = { info: '📘', success: '✅', warning: '⚠️', error: '❌' }[type] || '📘';
    console.log(`[${now}] ${prefix} ${message}`);
}

// ═══════════════════════════════════════════════════════════════════════════
// TRANSLATION FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

async function translateText(text, targetLang, retries = RETRY_COUNT) {
    if (!text || text.trim().length === 0) return text;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const result = await translate(text, { to: targetLang, forceBatch: false });
            return result.text;
        } catch (error) {
            if (attempt < retries) {
                const waitTime = 2000 * attempt;
                log(`Retry ${attempt}/${retries} after ${waitTime}ms...`, 'warning');
                await sleep(waitTime);
            } else {
                log(`Failed after ${retries} attempts: ${error.message}`, 'error');
                return text; // Return original on complete failure
            }
        }
    }
    return text;
}

function splitIntoChunks(text, numChunks) {
    if (!text) return [''];

    const lines = text.split('\n');
    const chunks = [];
    const linesPerChunk = Math.ceil(lines.length / numChunks);

    for (let i = 0; i < numChunks; i++) {
        const start = i * linesPerChunk;
        const end = Math.min(start + linesPerChunk, lines.length);
        if (start < lines.length) {
            chunks.push(lines.slice(start, end).join('\n'));
        }
    }

    return chunks.filter(c => c && c.trim().length > 0);
}

// ═══════════════════════════════════════════════════════════════════════════
// PARSING FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function parseEnglishContent() {
    log('Reading English source file...');
    const content = fs.readFileSync(EN_PATH, 'utf8');
    const lessons = {};

    // Match lesson entries
    const lessonRegex = /"([a-z]{2,4}_\d+)":\s*\{\s*title:\s*"([^"]+)",\s*content:\s*`([\s\S]*?)`(?:,\s*keyTakeaways:\s*\[([\s\S]*?)\])?\s*\}/g;

    let match;
    while ((match = lessonRegex.exec(content)) !== null) {
        const [, id, title, contentText, keyTakeawaysStr] = match;

        let keyTakeaways = [];
        if (keyTakeawaysStr) {
            const takeawayMatches = keyTakeawaysStr.match(/"([^"]+)"/g);
            if (takeawayMatches) {
                keyTakeaways = takeawayMatches.map(t => t.replace(/^"|"$/g, ''));
            }
        }

        lessons[id] = { title, content: contentText.trim(), keyTakeaways };
    }

    // Validate lesson counts
    const counts = {};
    for (const id of Object.keys(lessons)) {
        const prefix = id.split('_')[0];
        counts[prefix] = (counts[prefix] || 0) + 1;
    }

    log(`Found ${Object.keys(lessons).length} lessons:`);
    for (const [prefix, count] of Object.entries(counts)) {
        const expected = EXPECTED_LESSONS[prefix] || '?';
        const status = count === expected ? '✓' : `(expected ${expected})`;
        console.log(`  • ${prefix}: ${count} ${status}`);
    }

    return lessons;
}

// ═══════════════════════════════════════════════════════════════════════════
// TRANSLATION WORKFLOW
// ═══════════════════════════════════════════════════════════════════════════

async function translateLesson(lessonId, lessonData, targetLang) {
    const isLarge = LARGE_LESSONS.has(lessonId);
    const numChunks = isLarge ? CHUNKS_LARGE : CHUNKS_NORMAL;

    // Translate title
    process.stdout.write(`    Title... `);
    const translatedTitle = await translateText(lessonData.title, targetLang);
    console.log('✓');
    await sleep(DELAY_MS);

    // Translate content in chunks
    const chunks = splitIntoChunks(lessonData.content, numChunks);
    const translatedChunks = [];

    for (let i = 0; i < chunks.length; i++) {
        process.stdout.write(`    Content [${i + 1}/${chunks.length}]... `);
        const translated = await translateText(chunks[i], targetLang);
        translatedChunks.push(translated);
        console.log('✓');
        await sleep(DELAY_MS);
    }

    // Translate key takeaways one by one
    const translatedTakeaways = [];
    if (lessonData.keyTakeaways && lessonData.keyTakeaways.length > 0) {
        for (let i = 0; i < lessonData.keyTakeaways.length; i++) {
            process.stdout.write(`    Takeaway [${i + 1}/${lessonData.keyTakeaways.length}]... `);
            const translated = await translateText(lessonData.keyTakeaways[i], targetLang);
            translatedTakeaways.push(translated);
            console.log('✓');
            await sleep(DELAY_MS / 2);
        }
    }

    return {
        title: translatedTitle,
        content: translatedChunks.join('\n'),
        keyTakeaways: translatedTakeaways
    };
}

async function translateModules(targetLang) {
    const translatedModules = {};

    log(`Translating module metadata to ${targetLang.toUpperCase()}...`);

    for (const [moduleId, data] of Object.entries(MODULES)) {
        process.stdout.write(`  ${moduleId}... `);
        const title = await translateText(data.title, targetLang);
        await sleep(DELAY_MS / 2);
        const description = await translateText(data.description, targetLang);
        translatedModules[moduleId] = { title, description };
        console.log('✓');
        await sleep(DELAY_MS);
    }

    return translatedModules;
}

// ═══════════════════════════════════════════════════════════════════════════
// FILE GENERATION
// ═══════════════════════════════════════════════════════════════════════════

function escapeString(str) {
    if (!str) return '';
    return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function generateOutputFile(translatedModules, translatedLessons, lang) {
    let output = `// Auto-generated translation - ${lang.toUpperCase()}\n`;
    output += `// Generated on: ${new Date().toISOString()}\n`;
    output += `// Total lessons: ${Object.keys(translatedLessons).length}\n\n`;
    output += `export const learningContent = {\n`;

    // Module metadata
    for (const [moduleId, data] of Object.entries(translatedModules)) {
        output += `    "${moduleId}": {\n`;
        output += `        title: "${escapeString(data.title)}",\n`;
        output += `        description: "${escapeString(data.description)}"\n`;
        output += `    },\n`;
    }

    output += '\n';

    // Lessons
    for (const [lessonId, data] of Object.entries(translatedLessons)) {
        output += `    "${lessonId}": {\n`;
        output += `        title: "${escapeString(data.title)}",\n`;
        output += `        content: \`\n${data.content}\n\``;

        if (data.keyTakeaways && data.keyTakeaways.length > 0) {
            output += `,\n        keyTakeaways: [\n`;
            for (let i = 0; i < data.keyTakeaways.length; i++) {
                output += `            "${escapeString(data.keyTakeaways[i])}"`;
                if (i < data.keyTakeaways.length - 1) output += ',';
                output += '\n';
            }
            output += `        ]`;
        }

        output += `\n    },\n`;
    }

    output += `};\n`;
    return output;
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN EXECUTION
// ═══════════════════════════════════════════════════════════════════════════

async function translateToLanguage(lang, lessons) {
    console.log('\n' + '═'.repeat(70));
    console.log(`  TRANSLATING TO ${lang.toUpperCase()}`);
    console.log('═'.repeat(70) + '\n');

    const startTime = Date.now();

    // Translate module metadata
    const translatedModules = await translateModules(lang);

    // Translate all lessons
    const translatedLessons = {};
    const lessonIds = Object.keys(lessons);
    const total = lessonIds.length;

    log(`Starting translation of ${total} lessons...`);

    for (let i = 0; i < lessonIds.length; i++) {
        const lessonId = lessonIds[i];
        const lessonData = lessons[lessonId];
        const isLarge = LARGE_LESSONS.has(lessonId);

        console.log(`\n[${i + 1}/${total}] ${lessonId} - ${lessonData.title.substring(0, 40)}... ${isLarge ? '(9 chunks)' : '(3 chunks)'}`);

        translatedLessons[lessonId] = await translateLesson(lessonId, lessonData, lang);
    }

    // Generate and save file
    const outputPath = path.join(LOCALES_DIR, `${lang}.ts`);
    const fileContent = generateOutputFile(translatedModules, translatedLessons, lang);
    fs.writeFileSync(outputPath, fileContent, 'utf8');

    const elapsed = Math.round((Date.now() - startTime) / 1000 / 60);
    log(`Saved to ${outputPath} (${elapsed} minutes)`, 'success');

    return { modules: translatedModules, lessons: translatedLessons };
}

async function main() {
    const arg = process.argv[2];

    if (!arg) {
        console.log('╔═══════════════════════════════════════════════════════════════╗');
        console.log('║   Comprehensive Lesson Translation Script                     ║');
        console.log('╠═══════════════════════════════════════════════════════════════╣');
        console.log('║ Usage:                                                        ║');
        console.log('║   node translate_all_languages.mjs <lang>                     ║');
        console.log('║   node translate_all_languages.mjs all                        ║');
        console.log('║                                                               ║');
        console.log('║ Languages: es, fr, de, zh, ja, pt                             ║');
        console.log('║                                                               ║');
        console.log('║ Large lessons (9 chunks): ff_1, ff_2, ff_3, ib_1, fx_2,       ║');
        console.log('║   fx_4, fx_8, cb_2, cb_3, cb_7, cb_8, cf_1                    ║');
        console.log('║                                                               ║');
        console.log('║ All other lessons: 3 chunks                                   ║');
        console.log('╚═══════════════════════════════════════════════════════════════╝');
        process.exit(1);
    }

    console.log('\n╔═══════════════════════════════════════════════════════════════╗');
    console.log('║   COMPREHENSIVE LESSON TRANSLATION                            ║');
    console.log('╚═══════════════════════════════════════════════════════════════╝\n');

    // Parse English content
    const lessons = parseEnglishContent();

    if (Object.keys(lessons).length === 0) {
        log('No lessons found in English file!', 'error');
        process.exit(1);
    }

    // Determine which languages to translate
    let languagesToProcess;
    if (arg === 'all') {
        languagesToProcess = TARGET_LANGUAGES;
        log(`Will translate to all ${languagesToProcess.length} languages: ${languagesToProcess.join(', ')}`);
    } else if (TARGET_LANGUAGES.includes(arg)) {
        languagesToProcess = [arg];
        log(`Will translate to ${arg.toUpperCase()} only`);
    } else {
        log(`Unknown language: ${arg}. Valid options: ${TARGET_LANGUAGES.join(', ')}, all`, 'error');
        process.exit(1);
    }

    // Process each language
    const overallStart = Date.now();

    for (const lang of languagesToProcess) {
        await translateToLanguage(lang, lessons);
    }

    const totalMinutes = Math.round((Date.now() - overallStart) / 1000 / 60);
    console.log('\n' + '═'.repeat(70));
    log(`ALL TRANSLATIONS COMPLETE! Total time: ${totalMinutes} minutes`, 'success');
    console.log('═'.repeat(70) + '\n');
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
