/**
 * Glossary Translation Script using LibreTranslate API
 * 
 * Translates all glossary terms from English into 6 target languages.
 * Uses LibreTranslate public instances (free, no auth required).
 * Processes 2 terms per step with proper rate limiting.
 * Saves progress to resume from interruptions.
 * 
 * Usage: node scripts/translate_glossary_libre.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target languages (LibreTranslate uses ISO codes)
const TARGET_LANGUAGES = [
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' },   // LibreTranslate uses 'zh' not 'zh-CN'
    { code: 'ja', name: 'Japanese' },
    { code: 'pt', name: 'Portuguese' }
];

// LibreTranslate public instances (rotate to avoid rate limits)
const LIBRE_INSTANCES = [
    'https://libretranslate.com',
    'https://translate.argosopentech.com',
    'https://translate.terraprint.co'
];

// Terms to translate per batch
const TERMS_PER_BATCH = 2;

// Delay between API calls (ms)
const API_DELAY = 500;

// Delay between batches (ms)
const BATCH_DELAY = 1500;

// Retry configuration
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000;

// Progress file
const PROGRESS_FILE = path.join(__dirname, 'glossary_translation_progress.json');

// Current instance index
let currentInstanceIndex = 0;

/**
 * Get next LibreTranslate instance (round-robin)
 */
function getNextInstance() {
    const instance = LIBRE_INSTANCES[currentInstanceIndex];
    currentInstanceIndex = (currentInstanceIndex + 1) % LIBRE_INSTANCES.length;
    return instance;
}

/**
 * Extract glossary terms from the Glossary.tsx file
 */
function extractGlossaryTerms() {
    const glossaryPath = path.join(__dirname, '../src/features/game/Glossary.tsx');
    const content = fs.readFileSync(glossaryPath, 'utf-8');

    const terms = [];
    const lines = content.split('\n');

    let inArray = false;
    let buffer = '';

    for (const line of lines) {
        if (line.includes('export const glossaryTerms')) {
            inArray = true;
            continue;
        }

        if (!inArray) continue;
        if (line.trim() === '];') break;

        buffer += line;

        if (line.includes('},') || line.trim() === '}') {
            const idMatch = buffer.match(/id:\s*['"]([^'"]+)['"]/);
            const termMatch = buffer.match(/term:\s*['"]([^'"]+)['"]/);
            const defMatch = buffer.match(/definition:\s*['"](.+?)['"]\s*,\s*category/s);
            const catMatch = buffer.match(/category:\s*['"]([^'"]+)['"]/);

            if (idMatch && termMatch && defMatch && catMatch) {
                terms.push({
                    id: idMatch[1],
                    term: termMatch[1],
                    definition: defMatch[1].replace(/\\'/g, "'").replace(/\\"/g, '"'),
                    category: catMatch[1]
                });
            }
            buffer = '';
        }
    }

    console.log(`📚 Extracted ${terms.length} glossary terms`);
    return terms;
}

/**
 * Sleep function
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Translate text using LibreTranslate API
 */
async function translateWithLibre(text, targetLang) {
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        const instance = getNextInstance();

        try {
            const response = await fetch(`${instance}/translate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    q: text,
                    source: 'en',
                    target: targetLang,
                    format: 'text'
                })
            });

            if (response.ok) {
                const data = await response.json();
                return data.translatedText;
            } else if (response.status === 429) {
                console.log(`  ⚠️ Rate limited on ${instance}, trying another...`);
                await sleep(RETRY_DELAY);
            } else {
                throw new Error(`HTTP ${response.status}`);
            }
        } catch (error) {
            if (attempt < MAX_RETRIES) {
                console.log(`  ⚠️ Retry ${attempt}/${MAX_RETRIES} for ${targetLang}...`);
                await sleep(RETRY_DELAY * attempt);
            } else {
                // Fallback to original text
                return text;
            }
        }
    }
    return text;
}

/**
 * Translate a term to all languages
 */
async function translateTermToAllLanguages(term) {
    const translations = {};

    for (const lang of TARGET_LANGUAGES) {
        const translatedTerm = await translateWithLibre(term.term, lang.code);
        await sleep(API_DELAY);

        const translatedDefinition = await translateWithLibre(term.definition, lang.code);
        await sleep(API_DELAY);

        // Use 'zh-CN' as the key for Chinese to match our expected output
        const langKey = lang.code === 'zh' ? 'zh-CN' : lang.code;
        translations[langKey] = {
            id: term.id,
            term: translatedTerm,
            definition: translatedDefinition,
            category: term.category
        };
    }

    return translations;
}

/**
 * Load progress from file
 */
function loadProgress() {
    try {
        if (fs.existsSync(PROGRESS_FILE)) {
            const data = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
            console.log(`📂 Resuming from term ${data.lastCompletedIndex + 1}`);
            return data;
        }
    } catch (error) {
        console.log('⚠️ Starting fresh');
    }
    return { lastCompletedIndex: -1, translations: {} };
}

/**
 * Save progress to file
 */
function saveProgress(lastCompletedIndex, translations) {
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify({
        lastCompletedIndex,
        translations,
        timestamp: new Date().toISOString()
    }, null, 2));
}

/**
 * Generate TypeScript file content
 */
function generateTsContent(terms, lang) {
    const langNames = {
        'es': 'Spanish',
        'fr': 'French',
        'de': 'German',
        'zh-CN': 'Chinese (Simplified)',
        'ja': 'Japanese',
        'pt': 'Portuguese'
    };

    let content = `/**
 * Glossary Terms - ${langNames[lang]}
 * Auto-generated by translate_glossary_libre.mjs
 * Generated: ${new Date().toISOString()}
 */

export const glossaryTerms_${lang.replace('-', '_')} = [\n`;

    terms.forEach((term, index) => {
        const escapedTerm = term.term.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"');
        const escapedDef = term.definition.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"');

        content += `    { id: '${term.id}', term: '${escapedTerm}', definition: '${escapedDef}', category: '${term.category}' }`;
        content += index < terms.length - 1 ? ',\n' : '\n';
    });

    content += '];\n';
    return content;
}

/**
 * Main translation function
 */
async function translateGlossary() {
    console.log('🌍 Glossary Translation Script (LibreTranslate API)');
    console.log('====================================================');
    console.log(`📍 Languages: ${TARGET_LANGUAGES.map(l => l.code).join(', ')}`);
    console.log(`📦 Terms per batch: ${TERMS_PER_BATCH}`);
    console.log('');

    // Extract terms
    let terms;
    try {
        terms = extractGlossaryTerms();
    } catch (error) {
        console.error('❌ Failed to extract terms:', error.message);
        process.exit(1);
    }

    if (terms.length === 0) {
        console.error('❌ No terms found');
        process.exit(1);
    }

    // Load progress
    const progress = loadProgress();
    const startIndex = progress.lastCompletedIndex + 1;

    // Initialize translations
    const allTranslations = progress.translations || {};
    const langKeys = TARGET_LANGUAGES.map(l => l.code === 'zh' ? 'zh-CN' : l.code);
    langKeys.forEach(lang => {
        if (!allTranslations[lang]) {
            allTranslations[lang] = [];
        }
    });

    const totalBatches = Math.ceil((terms.length - startIndex) / TERMS_PER_BATCH);
    console.log(`📊 Total terms: ${terms.length}`);
    console.log(`📊 Starting from: ${startIndex + 1}`);
    console.log(`📊 Remaining batches: ${totalBatches}`);
    console.log('');
    console.log('🚀 Starting translation...');
    console.log('');

    let batchCount = 0;
    for (let i = startIndex; i < terms.length; i += TERMS_PER_BATCH) {
        const batchTerms = terms.slice(i, Math.min(i + TERMS_PER_BATCH, terms.length));
        batchCount++;

        const progressPct = ((i + TERMS_PER_BATCH) / terms.length * 100).toFixed(1);
        console.log(`📦 Batch ${batchCount}/${totalBatches} (${progressPct}%) - Terms ${i + 1}-${Math.min(i + TERMS_PER_BATCH, terms.length)}`);

        for (const term of batchTerms) {
            console.log(`  🔄 "${term.term}"`);

            try {
                const translations = await translateTermToAllLanguages(term);

                langKeys.forEach(lang => {
                    allTranslations[lang].push(translations[lang]);
                });

                console.log(`  ✅ Done`);
            } catch (error) {
                console.error(`  ❌ Error: ${error.message}`);
                langKeys.forEach(lang => {
                    allTranslations[lang].push({
                        id: term.id,
                        term: term.term,
                        definition: term.definition,
                        category: term.category
                    });
                });
            }
        }

        saveProgress(i + batchTerms.length - 1, allTranslations);
        console.log(`  💾 Saved`);

        if (i + TERMS_PER_BATCH < terms.length) {
            await sleep(BATCH_DELAY);
        }
    }

    console.log('');
    console.log('💾 Writing files...');

    const outputDir = path.join(__dirname, '../src/features/game/data/locales/glossary');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const lang of langKeys) {
        const content = generateTsContent(allTranslations[lang], lang);
        const filename = `${lang.replace('-', '_')}.ts`;
        const filePath = path.join(outputDir, filename);

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`  ✅ ${filename} (${allTranslations[lang].length} terms)`);
    }

    if (fs.existsSync(PROGRESS_FILE)) {
        fs.unlinkSync(PROGRESS_FILE);
    }

    console.log('');
    console.log('🎉 Complete!');
}

translateGlossary().catch(error => {
    console.error('❌ Fatal:', error);
    process.exit(1);
});
