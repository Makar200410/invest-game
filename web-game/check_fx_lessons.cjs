const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Count parts and characters for each lesson
const lessons = ['fx_1', 'fx_2', 'fx_3', 'fx_4', 'fx_5', 'fx_6', 'fx_7', 'fx_8', 'fx_9', 'fx_10', 'fx_11', 'fx_12', 'fx_13'];

console.log('Module 6 (Forex) Lesson Analysis:');
console.log('='.repeat(60));

lessons.forEach(lessonId => {
    // Find ALL occurrences of this lesson (to detect duplicates)
    let searchStart = 0;
    let occurrences = 0;
    while (true) {
        const idx = content.indexOf(`"${lessonId}": {`, searchStart);
        if (idx === -1) break;
        occurrences++;
        searchStart = idx + 1;
    }

    const startIdx = content.indexOf(`"${lessonId}": {`);
    if (startIdx === -1) {
        console.log(`${lessonId}: NOT FOUND!`);
        return;
    }

    const endIdx = content.indexOf('keyTakeaways:', startIdx);
    if (endIdx === -1) {
        console.log(`${lessonId}: No keyTakeaways found`);
        return;
    }

    const lessonContent = content.substring(startIdx, endIdx);

    // Count parts (## Part X pattern)
    const parts = (lessonContent.match(/## Part \d+/g) || []).length;

    // Get content between content: ` and `
    const contentStart = lessonContent.indexOf('content: `');
    const contentEnd = lessonContent.lastIndexOf('`');
    let charCount = 0;
    if (contentStart !== -1 && contentEnd > contentStart) {
        const textContent = lessonContent.substring(contentStart + 10, contentEnd);
        charCount = textContent.length;
    }

    // Status indicators
    const partStatus = parts >= 5 && parts <= 9 ? '✓' : '✗';
    const charStatus = charCount >= 6500 ? '✓' : '✗';
    const dupWarning = occurrences > 1 ? ` ⚠️ DUPLICATE (${occurrences}x)` : '';

    console.log(`${lessonId}: ${parts} parts [${partStatus}] | ${charCount} chars [${charStatus}]${dupWarning}`);
});

console.log('='.repeat(60));
console.log('Requirements: 5-9 parts, >6500 characters');
