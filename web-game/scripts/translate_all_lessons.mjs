/**
 * Full Learning Content Translation Script
 * Translates en.ts into 7 other languages: es, fr, de, zh, ja, pt, ru
 * 
 * Usage: node scripts/translate_all_lessons.mjs
 */

import { translate } from 'google-translate-api-x';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target languages
const LANGUAGES = {
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    zh: 'Chinese (Simplified)',
    ja: 'Japanese',
    pt: 'Portuguese',
    ru: 'Russian'
};

// Delay between API calls to avoid rate limiting
const DELAY_MS = 300;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Translate text with retry logic
async function translateText(text, targetLang, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const result = await translate(text, { to: targetLang });
            return result.text;
        } catch (error) {
            console.log(`  ⚠️ Attempt ${attempt}/${retries} failed: ${error.message}`);
            if (attempt === retries) {
                console.log(`  ❌ Keeping original text`);
                return text;
            }
            await sleep(2000 * attempt); // Exponential backoff
        }
    }
    return text;
}

// Split long text into chunks (Google has ~5000 char limit)
function splitIntoChunks(text, maxLength = 4500) {
    if (text.length <= maxLength) return [text];

    const chunks = [];
    const paragraphs = text.split(/\n\n/);
    let currentChunk = '';

    for (const paragraph of paragraphs) {
        if ((currentChunk + '\n\n' + paragraph).length > maxLength && currentChunk) {
            chunks.push(currentChunk);
            currentChunk = paragraph;
        } else {
            currentChunk = currentChunk ? currentChunk + '\n\n' + paragraph : paragraph;
        }
    }

    if (currentChunk) chunks.push(currentChunk);
    return chunks;
}

// Parse the en.ts file to extract lessons
function parseLearningContent(content) {
    const lessons = {};

    // Match lesson patterns like "ff_1": { title: "...", content: `...`, keyTakeaways: [...] }
    const lessonRegex = /"([a-z]+_\d+)":\s*\{\s*title:\s*"([^"]+)",\s*content:\s*`([\s\S]*?)`,\s*keyTakeaways:\s*\[([\s\S]*?)\]\s*\}/g;

    let match;
    while ((match = lessonRegex.exec(content)) !== null) {
        const [, id, title, contentText, takeawaysText] = match;

        // Parse keyTakeaways array
        const takeaways = [];
        const takeawayRegex = /"([^"]+)"/g;
        let takeawayMatch;
        while ((takeawayMatch = takeawayRegex.exec(takeawaysText)) !== null) {
            takeaways.push(takeawayMatch[1]);
        }

        lessons[id] = {
            title,
            content: contentText.trim(),
            keyTakeaways: takeaways
        };
    }

    return lessons;
}

// Translate a single lesson
async function translateLesson(lessonId, lesson, targetLang, langName) {
    console.log(`\n  📝 ${lessonId}: "${lesson.title}"`);

    const translated = {
        title: '',
        content: '',
        keyTakeaways: []
    };

    // Translate title
    console.log(`    → Translating title...`);
    translated.title = await translateText(lesson.title, targetLang);
    await sleep(DELAY_MS);

    // Translate content in chunks
    const chunks = splitIntoChunks(lesson.content);
    console.log(`    → Translating content (${chunks.length} chunks, ${lesson.content.length} chars)...`);

    const translatedChunks = [];
    for (let i = 0; i < chunks.length; i++) {
        process.stdout.write(`      Chunk ${i + 1}/${chunks.length}... `);
        const translatedChunk = await translateText(chunks[i], targetLang);
        translatedChunks.push(translatedChunk);
        console.log('✓');
        await sleep(DELAY_MS);
    }
    translated.content = translatedChunks.join('\n\n');

    // Translate key takeaways
    console.log(`    → Translating ${lesson.keyTakeaways.length} key takeaways...`);
    for (const takeaway of lesson.keyTakeaways) {
        const translatedTakeaway = await translateText(takeaway, targetLang);
        translated.keyTakeaways.push(translatedTakeaway);
        await sleep(DELAY_MS);
    }

    return translated;
}

// Generate the output TypeScript file content
function generateOutputFile(lessons, langCode) {
    let output = `// Auto-generated translation - ${LANGUAGES[langCode]}\n`;
    output += `// Generated on: ${new Date().toISOString()}\n\n`;
    output += `export const learningContent = {\n`;

    for (const [id, lesson] of Object.entries(lessons)) {
        const escapedTitle = lesson.title.replace(/"/g, '\\"');
        const escapedContent = lesson.content.replace(/`/g, '\\`').replace(/\$/g, '\\$');
        const escapedTakeaways = lesson.keyTakeaways.map(t => `"${t.replace(/"/g, '\\"')}"`).join(',\n            ');

        output += `    "${id}": {\n`;
        output += `        title: "${escapedTitle}",\n`;
        output += `        content: \`\n${escapedContent}\n\`,\n`;
        output += `        keyTakeaways: [\n            ${escapedTakeaways}\n        ]\n`;
        output += `    },\n`;
    }

    output += `};\n`;
    return output;
}

// Main function
async function main() {
    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║     Learning Content Translation Script                      ║');
    console.log('║     Translating to 7 languages: ES, FR, DE, ZH, JA, PT, RU  ║');
    console.log('╚══════════════════════════════════════════════════════════════╝\n');

    // Read English source file
    const enPath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
    console.log('📂 Reading source file:', enPath);
    const enContent = fs.readFileSync(enPath, 'utf8');

    // Parse lessons
    console.log('🔍 Parsing lessons...');
    const lessons = parseLearningContent(enContent);
    const lessonIds = Object.keys(lessons);
    console.log(`✅ Found ${lessonIds.length} lessons\n`);

    if (lessonIds.length === 0) {
        console.log('❌ No lessons found! Check the file format.');
        process.exit(1);
    }

    // Show sample
    console.log('📋 Sample lessons:', lessonIds.slice(0, 5).join(', '), '...\n');

    // Ask which language to translate
    const targetLang = process.argv[2];
    if (!targetLang || !LANGUAGES[targetLang]) {
        console.log('Usage: node scripts/translate_all_lessons.mjs <language_code>');
        console.log('\nAvailable languages:');
        for (const [code, name] of Object.entries(LANGUAGES)) {
            console.log(`  ${code} - ${name}`);
        }
        console.log('\nExample: node scripts/translate_all_lessons.mjs es');
        process.exit(0);
    }

    console.log(`🌍 Translating to: ${LANGUAGES[targetLang]} (${targetLang})`);
    console.log(`📊 Total lessons: ${lessonIds.length}`);
    console.log(`⏱️  Estimated time: ${Math.ceil(lessonIds.length * 2)} minutes\n`);

    // Translate all lessons
    const translatedLessons = {};
    let completed = 0;

    for (const lessonId of lessonIds) {
        completed++;
        console.log(`\n[${completed}/${lessonIds.length}] Processing ${lessonId}...`);

        try {
            translatedLessons[lessonId] = await translateLesson(
                lessonId,
                lessons[lessonId],
                targetLang,
                LANGUAGES[targetLang]
            );
        } catch (error) {
            console.log(`  ❌ Error: ${error.message}`);
            translatedLessons[lessonId] = lessons[lessonId]; // Keep original on error
        }

        // Progress
        const percent = Math.round((completed / lessonIds.length) * 100);
        console.log(`  ✅ Progress: ${percent}%`);
    }

    // Generate output file
    console.log('\n📝 Generating output file...');
    const outputContent = generateOutputFile(translatedLessons, targetLang);

    const outputPath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', `${targetLang}.ts`);
    fs.writeFileSync(outputPath, outputContent, 'utf8');

    console.log(`\n✅ Translation complete!`);
    console.log(`📁 Output saved to: ${outputPath}`);
    console.log(`📊 Translated ${Object.keys(translatedLessons).length} lessons`);
}

main().catch(console.error);
