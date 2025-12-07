/**
 * Fix untranslated content in ru.ts
 * This script finds lessons where content is still in English and translates them
 */

import { translate } from 'google-translate-api-x';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DELAY_MS = 500;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Shorter chunks to avoid API limits
async function translateChunk(text, retries = 5) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            // Break into even smaller pieces (2000 chars max)
            if (text.length > 2000) {
                const parts = [];
                let remaining = text;
                while (remaining.length > 0) {
                    let cutPoint = Math.min(2000, remaining.length);
                    // Try to cut at a paragraph break
                    const lastBreak = remaining.lastIndexOf('\n\n', cutPoint);
                    if (lastBreak > cutPoint / 2) cutPoint = lastBreak;
                    parts.push(remaining.substring(0, cutPoint));
                    remaining = remaining.substring(cutPoint);
                }

                const translatedParts = [];
                for (const part of parts) {
                    const result = await translate(part, { to: 'ru', forceBatch: false });
                    translatedParts.push(result.text);
                    await sleep(DELAY_MS);
                }
                return translatedParts.join('\n\n');
            } else {
                const result = await translate(text, { to: 'ru', forceBatch: false });
                return result.text;
            }
        } catch (error) {
            console.log(`  ⚠️ Attempt ${attempt}/${retries}: ${error.message.substring(0, 50)}`);
            if (attempt === retries) return text;
            await sleep(2000 * attempt);
        }
    }
    return text;
}

async function main() {
    console.log('🔧 Fix Untranslated Content in ru.ts\n');

    const ruPath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'ru.ts');
    let content = fs.readFileSync(ruPath, 'utf8');

    // Find all lessons with English content markers
    const englishMarkers = [
        '# From Barter to Bitcoin',
        '# The Silent Thief',
        '# Interest Rates Explained',
        '# Why Invest?',
        // Add more English titles/headings to detect
    ];

    // Pattern to find untranslated lessons
    const lessonPattern = /"([a-z]+_\d+)":\s*\{\s*title:\s*"([^"]+)",\s*content:\s*`\s*\n([^`]+)`/g;

    let untranslated = [];
    let match;

    while ((match = lessonPattern.exec(content)) !== null) {
        const [fullMatch, id, title, lessonContent] = match;

        // Check if content contains obvious English patterns
        const hasEnglish = lessonContent.includes('## Part ') ||
            lessonContent.includes('The ') ||
            lessonContent.includes(' is ') ||
            lessonContent.includes(' are ') ||
            lessonContent.includes(' the ');

        // Check if title is Russian (Cyrillic characters)
        const titleIsRussian = /[а-яА-Я]/.test(title);

        if (titleIsRussian && hasEnglish) {
            untranslated.push({
                id,
                title,
                content: lessonContent,
                startIndex: match.index,
                fullMatch
            });
        }
    }

    console.log(`Found ${untranslated.length} lessons with untranslated content\n`);

    if (untranslated.length === 0) {
        console.log('✅ All content is translated!');
        return;
    }

    // Show which lessons need fixing
    console.log('Lessons to fix:');
    untranslated.forEach(l => console.log(`  - ${l.id}: ${l.title}`));
    console.log('');

    // Translate each one
    for (let i = 0; i < untranslated.length; i++) {
        const lesson = untranslated[i];
        console.log(`\n[${i + 1}/${untranslated.length}] Translating ${lesson.id}...`);
        console.log(`  Content length: ${lesson.content.length} chars`);

        const translatedContent = await translateChunk(lesson.content);

        // Replace in the main content
        const newLessonBlock = `"${lesson.id}": {\n        title: "${lesson.title}",\n        content: \`\n${translatedContent}\``;
        content = content.replace(lesson.fullMatch.substring(0, lesson.fullMatch.indexOf('`', lesson.fullMatch.indexOf('content:')) + 1) + lesson.content + '`',
            newLessonBlock.substring(0, newLessonBlock.lastIndexOf('`') + 1));

        console.log(`  ✅ Done`);
        await sleep(1000);
    }

    // Save
    fs.writeFileSync(ruPath, content, 'utf8');
    console.log('\n✅ File updated successfully!');
}

main().catch(console.error);
