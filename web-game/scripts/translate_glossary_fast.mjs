/**
 * Fast Glossary Translation - Resumes from where it stopped
 * Uses google-translate-api-x with sequential processing to avoid rate limits
 * 
 * Usage: node scripts/translate_glossary_fast.mjs
 */

import translate from 'google-translate-api-x';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_LANGUAGES = ['es', 'fr', 'de', 'zh-CN', 'ja', 'pt'];
const PROGRESS_FILE = path.join(__dirname, 'glossary_translation_progress.json');
const TERMS_PER_BATCH = 2;
const DELAY_BETWEEN_LANGS = 800;  // ms between language translations
const DELAY_BETWEEN_BATCHES = 2500; // ms between batches

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function extractGlossaryTerms() {
    const content = fs.readFileSync(path.join(__dirname, '../src/features/game/Glossary.tsx'), 'utf-8');
    const terms = [];
    const lines = content.split('\n');
    let inArray = false, buffer = '';

    for (const line of lines) {
        if (line.includes('export const glossaryTerms')) { inArray = true; continue; }
        if (!inArray) continue;
        if (line.trim() === '];') break;
        buffer += line;
        if (line.includes('},') || line.trim() === '}') {
            const id = buffer.match(/id:\s*['"]([^'"]+)['"]/);
            const term = buffer.match(/term:\s*['"]([^'"]+)['"]/);
            const def = buffer.match(/definition:\s*['"](.+?)['"]\s*,\s*category/s);
            const cat = buffer.match(/category:\s*['"]([^'"]+)['"]/);
            if (id && term && def && cat) {
                terms.push({ id: id[1], term: term[1], definition: def[1].replace(/\\'/g, "'"), category: cat[1] });
            }
            buffer = '';
        }
    }
    return terms;
}

async function translateText(text, lang) {
    for (let i = 0; i < 3; i++) {
        try {
            const res = await translate(text, { to: lang, autoCorrect: true });
            return res.text;
        } catch (e) {
            if (i < 2) { await sleep(3000 * (i + 1)); } else { return text; }
        }
    }
    return text;
}

function loadProgress() {
    try {
        if (fs.existsSync(PROGRESS_FILE)) {
            return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
        }
    } catch (e) { }
    return { lastCompletedIndex: -1, translations: {} };
}

function saveProgress(idx, trans) {
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify({ lastCompletedIndex: idx, translations: trans, timestamp: new Date().toISOString() }, null, 2));
}

function generateTs(terms, lang) {
    const names = { 'es': 'Spanish', 'fr': 'French', 'de': 'German', 'zh-CN': 'Chinese', 'ja': 'Japanese', 'pt': 'Portuguese' };
    let c = `// Glossary - ${names[lang]} - Generated ${new Date().toISOString()}\nexport const glossaryTerms_${lang.replace('-', '_')} = [\n`;
    terms.forEach((t, i) => {
        const te = t.term.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
        const de = t.definition.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
        c += `  { id: '${t.id}', term: '${te}', definition: '${de}', category: '${t.category}' }${i < terms.length - 1 ? ',' : ''}\n`;
    });
    return c + '];\n';
}

async function main() {
    console.log('🌍 Glossary Translation (Fast Mode)');
    console.log('=====================================');

    const terms = extractGlossaryTerms();
    console.log(`📚 Total terms: ${terms.length}`);

    const progress = loadProgress();
    const startIdx = progress.lastCompletedIndex + 1;
    console.log(`📍 Resuming from term ${startIdx + 1}`);

    const all = progress.translations || {};
    TARGET_LANGUAGES.forEach(l => { if (!all[l]) all[l] = []; });

    const remaining = terms.length - startIdx;
    console.log(`📊 Remaining: ${remaining} terms\n`);

    for (let i = startIdx; i < terms.length; i += TERMS_PER_BATCH) {
        const batch = terms.slice(i, Math.min(i + TERMS_PER_BATCH, terms.length));
        const pct = ((i + batch.length) / terms.length * 100).toFixed(1);
        console.log(`📦 [${pct}%] Terms ${i + 1}-${i + batch.length}`);

        for (const term of batch) {
            console.log(`  🔄 "${term.term}"`);

            // Translate sequentially through languages
            for (const lang of TARGET_LANGUAGES) {
                const tTerm = await translateText(term.term, lang);
                await sleep(DELAY_BETWEEN_LANGS);
                const tDef = await translateText(term.definition, lang);
                await sleep(DELAY_BETWEEN_LANGS);

                all[lang].push({ id: term.id, term: tTerm, definition: tDef, category: term.category });
            }
            console.log(`  ✅ Done`);
        }

        saveProgress(i + batch.length - 1, all);
        console.log(`  💾 Saved\n`);

        if (i + TERMS_PER_BATCH < terms.length) await sleep(DELAY_BETWEEN_BATCHES);
    }

    // Write output files
    const outDir = path.join(__dirname, '../src/features/game/data/locales/glossary');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    console.log('💾 Writing files...');
    for (const lang of TARGET_LANGUAGES) {
        const file = path.join(outDir, `${lang.replace('-', '_')}.ts`);
        fs.writeFileSync(file, generateTs(all[lang], lang));
        console.log(`  ✅ ${lang}.ts (${all[lang].length} terms)`);
    }

    fs.unlinkSync(PROGRESS_FILE);
    console.log('\n🎉 Complete!');
}

main().catch(e => { console.error('❌', e); process.exit(1); });
