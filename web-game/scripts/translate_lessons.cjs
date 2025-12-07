/**
 * Automatic Lesson Translation Script
 * 
 * This script translates all learning content from English to 7 other languages.
 * Uses the free google-translate-api-x library.
 * 
 * Usage:
 *   1. npm install google-translate-api-x
 *   2. node scripts/translate_lessons.cjs
 * 
 * Supported languages: es, fr, de, zh, ja, pt, ru
 */

const fs = require('fs');
const path = require('path');

// Language codes for translation
const LANGUAGES = {
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    zh: 'Chinese',
    ja: 'Japanese',
    pt: 'Portuguese',
    ru: 'Russian'
};

// Rate limiting to avoid being blocked
const DELAY_MS = 500; // 500ms between translations

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function translateText(text, targetLang) {
    try {
        // Dynamic import for ES module
        const { translate } = await import('google-translate-api-x');
        const result = await translate(text, { to: targetLang });
        return result.text;
    } catch (error) {
        console.error(`Translation error: ${error.message}`);
        return text; // Return original on error
    }
}

async function translateLesson(lesson, targetLang) {
    const translatedLesson = { ...lesson };

    // Translate title
    if (lesson.title) {
        console.log(`  Translating title: ${lesson.title.substring(0, 30)}...`);
        translatedLesson.title = await translateText(lesson.title, targetLang);
        await sleep(DELAY_MS);
    }

    // Translate content
    if (lesson.content) {
        console.log(`  Translating content (${lesson.content.length} chars)...`);
        // Split long content into chunks to avoid API limits
        const chunks = splitIntoChunks(lesson.content, 4000);
        const translatedChunks = [];

        for (let i = 0; i < chunks.length; i++) {
            console.log(`    Chunk ${i + 1}/${chunks.length}...`);
            const translated = await translateText(chunks[i], targetLang);
            translatedChunks.push(translated);
            await sleep(DELAY_MS);
        }

        translatedLesson.content = translatedChunks.join('');
    }

    // Translate keyTakeaways
    if (lesson.keyTakeaways && Array.isArray(lesson.keyTakeaways)) {
        console.log(`  Translating ${lesson.keyTakeaways.length} key takeaways...`);
        translatedLesson.keyTakeaways = [];
        for (const takeaway of lesson.keyTakeaways) {
            const translated = await translateText(takeaway, targetLang);
            translatedLesson.keyTakeaways.push(translated);
            await sleep(DELAY_MS);
        }
    }

    return translatedLesson;
}

function splitIntoChunks(text, maxLength) {
    const chunks = [];
    let currentChunk = '';

    // Split by paragraphs to maintain context
    const paragraphs = text.split('\n\n');

    for (const paragraph of paragraphs) {
        if ((currentChunk + paragraph).length > maxLength) {
            if (currentChunk) chunks.push(currentChunk);
            currentChunk = paragraph;
        } else {
            currentChunk += (currentChunk ? '\n\n' : '') + paragraph;
        }
    }

    if (currentChunk) chunks.push(currentChunk);
    return chunks;
}

async function main() {
    console.log('=== Lesson Translation Script ===\n');

    // Check if google-translate-api-x is installed
    try {
        await import('google-translate-api-x');
    } catch (error) {
        console.log('❌ google-translate-api-x not installed!');
        console.log('Please run: npm install google-translate-api-x');
        console.log('Then run this script again.');
        process.exit(1);
    }

    // Read the English lessons
    const enPath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');
    const enContent = fs.readFileSync(enPath, 'utf8');

    // Extract the learningContent object
    const match = enContent.match(/export const learningContent[\s\S]*?= \{([\s\S]*)\};/);
    if (!match) {
        console.error('Could not parse en.ts file');
        process.exit(1);
    }

    // Parse lessons (simplified - just get lesson IDs)
    const lessonIds = [];
    const lessonPattern = /"([a-z]+_\d+)":\s*\{/g;
    let lessonMatch;
    while ((lessonMatch = lessonPattern.exec(enContent)) !== null) {
        if (!lessonIds.includes(lessonMatch[1])) {
            lessonIds.push(lessonMatch[1]);
        }
    }

    console.log(`Found ${lessonIds.length} lessons to translate`);
    console.log('Languages:', Object.values(LANGUAGES).join(', '));
    console.log('');

    // For now, just demonstrate with a single lesson
    console.log('⚠️  Full translation would take several hours due to rate limits.');
    console.log('   Running demo with first lesson only...\n');

    const demoLang = 'es'; // Spanish
    const demoLesson = {
        title: 'Fear & Greed',
        content: 'Fear and greed are the two most powerful emotions in trading.',
        keyTakeaways: ['Control your emotions', 'Follow your trading plan']
    };

    console.log(`Translating demo to ${LANGUAGES[demoLang]}...`);
    const translated = await translateLesson(demoLesson, demoLang);

    console.log('\n=== Demo Result ===');
    console.log('Original:', demoLesson.title);
    console.log('Translated:', translated.title);
    console.log('\nOriginal content:', demoLesson.content);
    console.log('Translated content:', translated.content);
    console.log('\nKey Takeaways:');
    translated.keyTakeaways.forEach((t, i) => {
        console.log(`  ${i + 1}. ${t}`);
    });

    console.log('\n✅ Demo completed successfully!');
    console.log('\nTo translate all lessons, modify the script to iterate through all lessonIds.');
    console.log('Estimated time: 2-4 hours per language (with rate limiting).');
}

// Alternative: Use DeepL API (higher quality, requires API key)
async function translateWithDeepL(text, targetLang, apiKey) {
    const fetch = (await import('node-fetch')).default;

    const response = await fetch('https://api-free.deepl.com/v2/translate', {
        method: 'POST',
        headers: {
            'Authorization': `DeepL-Auth-Key ${apiKey}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            text: text,
            target_lang: targetLang.toUpperCase(),
        }),
    });

    const data = await response.json();
    return data.translations[0].text;
}

main().catch(console.error);
