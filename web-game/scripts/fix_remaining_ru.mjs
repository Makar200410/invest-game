/**
 * Translate remaining lessons: ff_1, ff_2, ff_3, ib_1
 * Uses very small chunks to avoid rate limiting
 */

import { translate } from 'google-translate-api-x';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DELAY_MS = 800;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Translate small chunks
async function translateSmallChunk(text, retries = 5) {
    if (!text || text.trim().length === 0) return text;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const result = await translate(text, { to: 'ru', forceBatch: false });
            return result.text;
        } catch (error) {
            console.log(`    ⚠️ Retry ${attempt}/${retries}`);
            if (attempt === retries) return text;
            await sleep(4000 * attempt);
        }
    }
    return text;
}

// Split into very small chunks (1000 chars max for these problematic lessons)
function splitContent(text) {
    const chunks = [];
    const lines = text.split('\n');
    let current = '';

    for (const line of lines) {
        if ((current + '\n' + line).length > 800 && current) {
            chunks.push(current.trim());
            current = line;
        } else {
            current = current ? current + '\n' + line : line;
        }
    }
    if (current) chunks.push(current.trim());

    return chunks;
}

// Lessons that still need translation
const LESSONS_TO_FIX = ['ff_1', 'ff_2', 'ff_3', 'ib_1'];

async function main() {
    console.log('╔═══════════════════════════════════════════════════╗');
    console.log('║   Fix ff_1, ff_2, ff_3, ib_1 (Small Chunks)       ║');
    console.log('╚═══════════════════════════════════════════════════╝\n');

    // Read the current ru.ts
    const ruPath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'ru.ts');
    let ruContent = fs.readFileSync(ruPath, 'utf8');

    // Read original en.ts to get the English content
    const enPath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
    const enContent = fs.readFileSync(enPath, 'utf8');

    console.log(`Processing ${LESSONS_TO_FIX.length} lessons...\n`);

    for (let i = 0; i < LESSONS_TO_FIX.length; i++) {
        const lessonId = LESSONS_TO_FIX[i];
        console.log(`\n[${i + 1}/${LESSONS_TO_FIX.length}] Translating ${lessonId}...`);

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

        // Break content into very small chunks
        const chunks = splitContent(enContentText);
        console.log(`  Chunks: ${chunks.length}`);

        // Translate title
        console.log(`  → Translating title...`);
        const ruTitle = await translateSmallChunk(enTitle);
        await sleep(DELAY_MS);

        // Translate each chunk one by one
        const translatedChunks = [];
        for (let j = 0; j < chunks.length; j++) {
            process.stdout.write(`  → Chunk ${j + 1}/${chunks.length}... `);
            const translated = await translateSmallChunk(chunks[j]);
            translatedChunks.push(translated);
            console.log('✓');
            await sleep(DELAY_MS);
        }

        const ruContentText = translatedChunks.join('\n');

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
