const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/game/data/locales/learning/en.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Count parts for each lesson
const lessons = ['ff_4', 'ff_5', 'ff_6', 'ff_7', 'ff_8', 'ff_9', 'ff_10', 'ff_11', 'ff_12'];

lessons.forEach(lessonId => {
    const startIdx = content.indexOf(`"${lessonId}": {`);
    if (startIdx === -1) {
        console.log(`${lessonId}: Not found`);
        return;
    }

    const endIdx = content.indexOf('keyTakeaways:', startIdx);
    if (endIdx === -1) {
        console.log(`${lessonId}: No keyTakeaways found`);
        return;
    }

    const lessonContent = content.substring(startIdx, endIdx);
    const parts = (lessonContent.match(/## Part \d+/g) || []).length;
    console.log(`${lessonId}: ${parts} parts`);
});
