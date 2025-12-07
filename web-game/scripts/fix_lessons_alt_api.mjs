/**
 * Fix remaining untranslated lessons using alternative Google Translate API
 * Uses @vitalets/google-translate-api
 */

import { translate } from 'google-translate-api-x';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DELAY_MS = 1000;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Translate small chunks to avoid rate limits
async function translateSmallChunk(text, retries = 4) {
    if (!text || text.trim().length === 0) return text;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const result = await translate(text, { to: 'ru' });
            return result.text;
        } catch (error) {
            console.log(`    ⚠️ Retry ${attempt}/${retries}`);
            if (attempt === retries) return text;
            await sleep(3000 * attempt);
        }
    }
    return text;
}

// Split into very small chunks (1500 chars max)
function splitContent(text) {
    const chunks = [];
    const paragraphs = text.split(/\n\n/);
    let current = '';

    for (const para of paragraphs) {
        if ((current + '\n\n' + para).length > 1500 && current) {
            chunks.push(current.trim());
            current = para;
        } else {
            current = current ? current + '\n\n' + para : para;
        }
    }
    if (current) chunks.push(current.trim());

    return chunks;
}

// Lessons that need translation (from earlier check)
const UNTRANSLATED_LESSONS = [
    'ff_1', 'ff_2', 'ff_3', 'ib_1',
    'fx_2', 'fx_4', 'fx_8',
    'cb_2', 'cb_3', 'cb_7', 'cb_8',
    'cf_1'
];

async function main() {
    console.log('╔═══════════════════════════════════════════════════╗');
    console.log('║   Fix Untranslated Lessons (Alternative API)      ║');
    console.log('╚═══════════════════════════════════════════════════╝\n');

    // Read the current ru.ts
    const ruPath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'ru.ts');
    let ruContent = fs.readFileSync(ruPath, 'utf8');

    // Read original en.ts to get the English content
    const enPath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
    const enContent = fs.readFileSync(enPath, 'utf8');

    console.log(`Processing ${UNTRANSLATED_LESSONS.length} lessons...\n`);

    for (let i = 0; i < UNTRANSLATED_LESSONS.length; i++) {
        const lessonId = UNTRANSLATED_LESSONS[i];
        console.log(`\n[${i + 1}/${UNTRANSLATED_LESSONS.length}] Translating ${lessonId}...`);

        // Find the English content for this lesson
        const enPattern = new RegExp(`"${lessonId}":\\s*\\{\\s*title:\\s*"([^"]+)",\\s*content:\\s*\`([^\`]+)\``, 's');
        const enMatch = enContent.match(enPattern);

        if (!enMatch) {
            console.log(`  ❌ Could not find English content for ${lessonId}`);
            continue;
        }

        const [, enTitle, enContentText] = enMatch;
        console.log(`  Title: ${enTitle.substring(0, 40)}...`);
        console.log(`  Content: ${enContentText.length} chars`);

        // Break content into chunks
        const chunks = splitContent(enContentText);
        console.log(`  Chunks: ${chunks.length}`);

        // Translate title
        console.log(`  → Translating title...`);
        const ruTitle = await translateSmallChunk(enTitle);
        await sleep(DELAY_MS);

        // Translate each chunk
        const translatedChunks = [];
        for (let j = 0; j < chunks.length; j++) {
            process.stdout.write(`  → Chunk ${j + 1}/${chunks.length}... `);
            const translated = await translateSmallChunk(chunks[j]);
            translatedChunks.push(translated);
            console.log('✓');
            await sleep(DELAY_MS);
        }

        const ruContentText = translatedChunks.join('\n\n');

        // Replace in ru.ts
        const ruPattern = new RegExp(`"${lessonId}":\\s*\\{\\s*title:\\s*"[^"]+",\\s*content:\\s*\`[^\`]+\``, 's');
        const replacement = `"${lessonId}": {\n        title: "${ruTitle}",\n        content: \`\n${ruContentText}\n\``;

        if (ruContent.match(ruPattern)) {
            ruContent = ruContent.replace(ruPattern, replacement);
            console.log(`  ✅ Updated ${lessonId}`);
        } else {
            console.log(`  ⚠️ Pattern not found for ${lessonId}`);
        }
    }

    // Save updated ru.ts
    console.log('\n📝 Saving updated ru.ts...');
    fs.writeFileSync(ruPath, ruContent, 'utf8');

    console.log('\n✅ All translations complete!');
}

main().catch(console.error);
