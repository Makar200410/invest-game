/**
 * Asset Description Translation Script
 * 
 * Translates all asset descriptions (desc_*) from English to 7 other languages:
 * es, fr, de, zh-CN, ja, pt, ru
 * 
 * Usage: node translate_descriptions.mjs [lang]
 * Examples:
 *   node translate_descriptions.mjs es    # Translate to Spanish only
 *   node translate_descriptions.mjs all   # Translate to all 7 languages
 */

import { translate } from 'google-translate-api-x';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const I18N_PATH = path.join(__dirname, '..', 'src', 'i18n.ts');
const OUTPUT_DIR = path.join(__dirname, 'translated_descriptions');

// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const TARGET_LANGUAGES = ['es', 'fr', 'de', 'zh-CN', 'ja', 'pt', 'ru'];

const DELAY_MS = 300;          // Delay between API calls
const RETRY_COUNT = 5;         // Number of retries for failed translations
const BATCH_SIZE = 5;          // Process 5 descriptions at a time

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

// ═══════════════════════════════════════════════════════════════════════════
// PARSING FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function extractDescriptions() {
    log('Reading i18n.ts file...');
    const content = fs.readFileSync(I18N_PATH, 'utf8');
    const descriptions = {};

    // Match description entries like "desc_BTC_USD": "...",
    const descRegex = /"(desc_[^"]+)":\s*"([^"]+)"/g;

    let match;
    let firstEnglishBlockEnd = false;
    let braceCount = 0;

    // We need to extract only from the English section
    // Find the start of the English translation block
    const enStartMatch = content.match(/en:\s*\{\s*translation:\s*\{/);
    if (!enStartMatch) {
        throw new Error('Could not find English translation block');
    }

    const enStartIndex = enStartMatch.index;
    // Find the end of the English block by counting braces
    let inEnglish = false;
    let enEndIndex = content.length;

    for (let i = enStartIndex; i < content.length; i++) {
        const char = content[i];
        if (char === '{') {
            if (!inEnglish) inEnglish = true;
            braceCount++;
        } else if (char === '}') {
            braceCount--;
            if (inEnglish && braceCount === 0) {
                enEndIndex = i;
                break;
            }
        }
    }

    const englishBlock = content.substring(enStartIndex, enEndIndex);

    // Now extract descriptions from English block
    while ((match = descRegex.exec(englishBlock)) !== null) {
        const [, key, value] = match;
        descriptions[key] = value;
    }

    log(`Found ${Object.keys(descriptions).length} descriptions in English block`);
    return descriptions;
}

// ═══════════════════════════════════════════════════════════════════════════
// TRANSLATION WORKFLOW
// ═══════════════════════════════════════════════════════════════════════════

async function translateDescriptions(descriptions, targetLang) {
    const translated = {};
    const keys = Object.keys(descriptions);
    const total = keys.length;

    log(`Translating ${total} descriptions to ${targetLang.toUpperCase()}...`);

    // Process in batches
    for (let i = 0; i < keys.length; i += BATCH_SIZE) {
        const batch = keys.slice(i, i + BATCH_SIZE);

        for (const key of batch) {
            const original = descriptions[key];
            process.stdout.write(`  [${i + batch.indexOf(key) + 1}/${total}] ${key.substring(0, 30)}... `);

            const translatedText = await translateText(original, targetLang);
            translated[key] = translatedText;
            console.log('✓');

            await sleep(DELAY_MS);
        }

        // Longer delay between batches
        if (i + BATCH_SIZE < keys.length) {
            log(`Batch complete. Waiting before next batch...`);
            await sleep(1000);
        }
    }

    return translated;
}

// ═══════════════════════════════════════════════════════════════════════════
// FILE GENERATION
// ═══════════════════════════════════════════════════════════════════════════

function escapeString(str) {
    if (!str) return '';
    return str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '');
}

function generateOutputFile(translations, lang) {
    let output = `// Auto-generated asset descriptions - ${lang.toUpperCase()}\n`;
    output += `// Generated on: ${new Date().toISOString()}\n`;
    output += `// Total descriptions: ${Object.keys(translations).length}\n\n`;
    output += `export const assetDescriptions_${lang.replace('-', '_')} = {\n`;

    for (const [key, value] of Object.entries(translations)) {
        output += `    "${key}": "${escapeString(value)}",\n`;
    }

    output += `};\n`;
    return output;
}

function generateI18nPatch(translations, lang) {
    // Generate the lines that need to be added to i18n.ts for this language
    let patch = '';
    for (const [key, value] of Object.entries(translations)) {
        patch += `                    "${key}": "${escapeString(value)}",\n`;
    }
    return patch;
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN EXECUTION
// ═══════════════════════════════════════════════════════════════════════════

async function translateToLanguage(lang, descriptions) {
    console.log('\n' + '═'.repeat(70));
    console.log(`  TRANSLATING TO ${lang.toUpperCase()}`);
    console.log('═'.repeat(70) + '\n');

    const startTime = Date.now();

    const translated = await translateDescriptions(descriptions, lang);

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Save standalone file
    const outputPath = path.join(OUTPUT_DIR, `descriptions_${lang.replace('-', '_')}.ts`);
    const fileContent = generateOutputFile(translated, lang);
    fs.writeFileSync(outputPath, fileContent, 'utf8');

    // Save patch file (for manual insertion into i18n.ts)
    const patchPath = path.join(OUTPUT_DIR, `patch_${lang.replace('-', '_')}.txt`);
    const patchContent = generateI18nPatch(translated, lang);
    fs.writeFileSync(patchPath, patchContent, 'utf8');

    const elapsed = Math.round((Date.now() - startTime) / 1000 / 60);
    log(`Saved to ${outputPath} (${elapsed} minutes)`, 'success');
    log(`Patch file saved to ${patchPath}`, 'success');

    return translated;
}

async function main() {
    const arg = process.argv[2];

    if (!arg) {
        console.log('╔═══════════════════════════════════════════════════════════════╗');
        console.log('║   Asset Description Translation Script                        ║');
        console.log('╠═══════════════════════════════════════════════════════════════╣');
        console.log('║ Usage:                                                        ║');
        console.log('║   node translate_descriptions.mjs <lang>                      ║');
        console.log('║   node translate_descriptions.mjs all                         ║');
        console.log('║                                                               ║');
        console.log('║ Languages: es, fr, de, zh-CN, ja, pt, ru                      ║');
        console.log('║                                                               ║');
        console.log('║ Output:                                                       ║');
        console.log('║   - Standalone files in scripts/translated_descriptions/     ║');
        console.log('║   - Patch files for manual insertion into i18n.ts            ║');
        console.log('╚═══════════════════════════════════════════════════════════════╝');
        process.exit(1);
    }

    console.log('\n╔═══════════════════════════════════════════════════════════════╗');
    console.log('║   ASSET DESCRIPTION TRANSLATION                              ║');
    console.log('╚═══════════════════════════════════════════════════════════════╝\n');

    // Extract English descriptions
    const descriptions = extractDescriptions();

    if (Object.keys(descriptions).length === 0) {
        log('No descriptions found!', 'error');
        process.exit(1);
    }

    // Determine which languages to translate
    let languagesToProcess;
    if (arg === 'all') {
        languagesToProcess = TARGET_LANGUAGES;
        log(`Will translate to all ${languagesToProcess.length} languages: ${languagesToProcess.join(', ')}`);
    } else if (TARGET_LANGUAGES.includes(arg) || arg === 'zh-CN') {
        languagesToProcess = [arg];
        log(`Will translate to ${arg.toUpperCase()} only`);
    } else {
        log(`Unknown language: ${arg}. Valid options: ${TARGET_LANGUAGES.join(', ')}, all`, 'error');
        process.exit(1);
    }

    // Process each language
    const overallStart = Date.now();
    const allTranslations = {};

    for (const lang of languagesToProcess) {
        allTranslations[lang] = await translateToLanguage(lang, descriptions);
    }

    // Generate combined output
    if (languagesToProcess.length > 1) {
        const combinedPath = path.join(OUTPUT_DIR, 'all_descriptions.json');
        fs.writeFileSync(combinedPath, JSON.stringify(allTranslations, null, 2), 'utf8');
        log(`Combined JSON saved to ${combinedPath}`, 'success');
    }

    const totalMinutes = Math.round((Date.now() - overallStart) / 1000 / 60);
    console.log('\n' + '═'.repeat(70));
    log(`ALL TRANSLATIONS COMPLETE! Total time: ${totalMinutes} minutes`, 'success');
    console.log('═'.repeat(70) + '\n');

    console.log('\n📋 NEXT STEPS:');
    console.log('1. Review the generated patch files in scripts/translated_descriptions/');
    console.log('2. Manually insert each patch into the corresponding language section of i18n.ts');
    console.log('3. Or run: node scripts/apply_description_patches.mjs to auto-apply');
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
