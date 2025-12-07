const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Count parts and characters for each lesson
const lessons = ['ta_1', 'ta_2', 'ta_3', 'ta_4', 'ta_5', 'ta_6', 'ta_7', 'ta_8', 'ta_9', 'ta_10', 'ta_11', 'ta_12', 'ta_13'];

console.log('Module 7 (Technical Analysis) Lesson Analysis:');
console.log('='.repeat(60));

lessons.forEach(lessonId => {
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
    const charStatus = charCount >= 8000 && charCount <= 13000 ? '✓' : '✗';

    console.log(`${lessonId}: ${parts} parts [${partStatus}] | ${charCount} chars [${charStatus}]`);
});

console.log('='.repeat(60));
console.log('Requirements: 5-9 parts, 8000-13000 characters');
