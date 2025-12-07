const fs = require('fs');
const path = require('path');

// Path to the en.ts file
const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');

function getLessonCharCount(lessonId) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');

        // Find the lesson object
        const lessonStart = content.indexOf(`"${lessonId}": {`);
        if (lessonStart === -1) return null;

        // Find the content property
        const contentStart = content.indexOf('content: `', lessonStart);
        if (contentStart === -1) return null;

        // Find the end of the content (backtick)
        // We need to be careful about nested backticks if any, but usually content ends before keyTakeaways
        const keyTakeawaysStart = content.indexOf('keyTakeaways: [', contentStart);
        if (keyTakeawaysStart === -1) return null;

        // The content ends at the last backtick before keyTakeaways
        const contentEnd = content.lastIndexOf('`,', keyTakeawaysStart);
        if (contentEnd === -1) return null;

        // Extract content (skip `content: ` and the first backtick)
        const lessonContent = content.substring(contentStart + 10, contentEnd);

        return lessonContent.length;
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}

const lessons = [
    'ff_1', 'ff_2', 'ff_3', 'ff_4', 'ff_5', 'ff_6', 'ff_7', 'ff_8', 'ff_9', 'ff_10', 'ff_11', 'ff_12',
    'ib_1', 'ib_2', 'ib_3', 'ib_4', 'ib_5', 'ib_6', 'ib_7', 'ib_8', 'ib_9', 'ib_10', 'ib_11', 'ib_12'
];

console.log('Character counts for Module 1 & 2 lessons:');
lessons.forEach(lessonId => {
    const charCount = getLessonCharCount(lessonId);
    if (charCount !== null) {
        console.log(`${lessonId}: ${charCount} characters`);
    } else {
        console.log(`${lessonId}: Not found`);
    }
});
