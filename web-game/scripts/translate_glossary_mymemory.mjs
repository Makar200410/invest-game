/**
 * Glossary Translation Script using MyMemory API
 * 
 * Translates all glossary terms from English into 6 target languages simultaneously.
 * Uses MyMemory API (free, no auth required).
 * Processes 2 terms per step with proper rate limiting.
 * 
 * Usage: node scripts/translate_glossary_mymemory.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target languages
const TARGET_LANGUAGES = ['es', 'fr', 'de', 'zh-CN', 'ja', 'pt'];

// Terms to translate per batch
const TERMS_PER_BATCH = 2;

// Delay between batches (ms) - MyMemory has generous limits
const BATCH_DELAY = 2000;

// Delay between individual API calls (ms)
const API_CALL_DELAY = 300;

// Retry configuration
const MAX_RETRIES = 3;
const RETRY_DELAY = 3000;

// Progress file to resume from
const PROGRESS_FILE = path.join(__dirname, 'glossary_translation_progress.json');

/**
 * Extract glossary terms from the Glossary.tsx file
 */
function extractGlossaryTerms() {
    const glossaryPath = path.join(__dirname, '../src/features/game/Glossary.tsx');
    const content = fs.readFileSync(glossaryPath, 'utf-8');

    // More robust extraction using line-by-line parsing
    const terms = [];
    const lines = content.split('\n');

    let inArray = false;
    let currentTerm = {};
    let buffer = '';

    for (const line of lines) {
        if (line.includes('export const glossaryTerms')) {
            inArray = true;
            continue;
        }

        if (!inArray) continue;

        // End of array
        if (line.trim() === '];') break;

        buffer += line;

        // Check if we have a complete term object
        if (line.includes('},') || line.trim() === '}') {
            // Extract term data using regex
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
 * Sleep for specified milliseconds
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Translate text using MyMemory API
 */
async function translateWithMyMemory(text, targetLang) {
    // Map our language codes to MyMemory codes
    const langMap = {
        'es': 'es',
        'fr': 'fr',
        'de': 'de',
        'zh-CN': 'zh-CN',
        'ja': 'ja',
        'pt': 'pt'
    };

    const target = langMap[targetLang] || targetLang;
    const encodedText = encodeURIComponent(text);
    const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=en|${target}`;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.responseStatus === 200 && data.responseData) {
                return data.responseData.translatedText;
            } else if (data.responseStatus === 429) {
                console.log(`  ⚠️ Rate limited, waiting...`);
                await sleep(RETRY_DELAY * attempt);
            } else {
                throw new Error(data.responseDetails || 'Translation failed');
            }
        } catch (error) {
            if (attempt < MAX_RETRIES) {
                console.log(`  ⚠️ Retry ${attempt}/${MAX_RETRIES} for ${targetLang}...`);
                await sleep(RETRY_DELAY * attempt);
            } else {
                console.error(`  ❌ Failed to translate to ${targetLang}: ${error.message}`);
                return text; // Return original on failure
            }
        }
    }
    return text;
}

/**
 * Translate a single term to all languages sequentially
 */
async function translateTermToAllLanguages(term) {
    const translations = {};

    for (const lang of TARGET_LANGUAGES) {
        // Translate term name
        const translatedTerm = await translateWithMyMemory(term.term, lang);
        await sleep(API_CALL_DELAY);

        // Translate definition
        const translatedDefinition = await translateWithMyMemory(term.definition, lang);
        await sleep(API_CALL_DELAY);

        translations[lang] = {
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
            console.log(`📂 Found progress file - resuming from term ${data.lastCompletedIndex + 1}`);
            return data;
        }
    } catch (error) {
        console.log('⚠️ Could not load progress file, starting fresh');
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
 * Generate TypeScript file content for translated glossary
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
 * Auto-generated by translate_glossary_mymemory.mjs
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
    console.log('🌍 Glossary Translation Script (MyMemory API)');
    console.log('==============================================');
    console.log(`📍 Target languages: ${TARGET_LANGUAGES.join(', ')}`);
    console.log(`📦 Terms per batch: ${TERMS_PER_BATCH}`);
    console.log('');

    // Extract terms from Glossary.tsx
    let terms;
    try {
        terms = extractGlossaryTerms();
    } catch (error) {
        console.error('❌ Failed to extract glossary terms:', error.message);
        process.exit(1);
    }

    if (terms.length === 0) {
        console.error('❌ No terms found to translate');
        process.exit(1);
    }

    // Load previous progress
    const progress = loadProgress();
    const startIndex = progress.lastCompletedIndex + 1;

    // Initialize translation storage for each language
    const allTranslations = progress.translations || {};
    TARGET_LANGUAGES.forEach(lang => {
        if (!allTranslations[lang]) {
            allTranslations[lang] = [];
        }
    });

    // Process terms in batches
    const totalBatches = Math.ceil((terms.length - startIndex) / TERMS_PER_BATCH);
    console.log(`📊 Total terms: ${terms.length}`);
    console.log(`📊 Starting from term: ${startIndex + 1}`);
    console.log(`📊 Remaining batches: ${totalBatches}`);
    console.log('');
    console.log('🚀 Starting translation...');
    console.log('');

    let batchCount = 0;
    for (let i = startIndex; i < terms.length; i += TERMS_PER_BATCH) {
        const batchTerms = terms.slice(i, Math.min(i + TERMS_PER_BATCH, terms.length));
        batchCount++;

        const progress = ((i + TERMS_PER_BATCH) / terms.length * 100).toFixed(1);
        console.log(`📦 Batch ${batchCount}/${totalBatches} (${progress}%) - Terms ${i + 1}-${Math.min(i + TERMS_PER_BATCH, terms.length)}`);

        // Translate terms in this batch
        for (const term of batchTerms) {
            console.log(`  🔄 Translating: "${term.term}"`);

            try {
                const translations = await translateTermToAllLanguages(term);

                // Store results
                TARGET_LANGUAGES.forEach(lang => {
                    allTranslations[lang].push(translations[lang]);
                });

                console.log(`  ✅ Done: "${term.term}"`);
            } catch (error) {
                console.error(`  ❌ Error translating "${term.term}": ${error.message}`);
                // Add untranslated term to maintain order
                TARGET_LANGUAGES.forEach(lang => {
                    allTranslations[lang].push({
                        id: term.id,
                        term: term.term,
                        definition: term.definition,
                        category: term.category
                    });
                });
            }
        }

        // Save progress after each batch
        saveProgress(i + batchTerms.length - 1, allTranslations);
        console.log(`  💾 Progress saved`);

        // Delay between batches
        if (i + TERMS_PER_BATCH < terms.length) {
            console.log(`  ⏳ Waiting ${BATCH_DELAY}ms before next batch...`);
            await sleep(BATCH_DELAY);
        }
    }

    console.log('');
    console.log('💾 Saving translation files...');

    // Create output directory if it doesn't exist
    const outputDir = path.join(__dirname, '../src/features/game/data/locales/glossary');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Save each language file
    for (const lang of TARGET_LANGUAGES) {
        const content = generateTsContent(allTranslations[lang], lang);
        const filename = `${lang.replace('-', '_')}.ts`;
        const filePath = path.join(outputDir, filename);

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`  ✅ Saved: ${filename} (${allTranslations[lang].length} terms)`);
    }

    // Clean up progress file on successful completion
    if (fs.existsSync(PROGRESS_FILE)) {
        fs.unlinkSync(PROGRESS_FILE);
        console.log('  🗑️ Cleaned up progress file');
    }

    console.log('');
    console.log('🎉 Translation complete!');
    console.log('');
    console.log('📁 Output files:');
    TARGET_LANGUAGES.forEach(lang => {
        console.log(`   - src/features/game/data/locales/glossary/${lang.replace('-', '_')}.ts`);
    });
}

// Run the script
translateGlossary().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
});
