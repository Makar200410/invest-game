const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/features/game/data/locales/learning/en.ts');

let content = fs.readFileSync(filePath, 'utf8');

// Find all fx_9 occurrences and keep only the first one
// Then remove all duplicates

// First, find the first fx_9 and its end
const firstFx9Start = content.indexOf('"fx_9": {');
if (firstFx9Start === -1) {
    console.log('fx_9 not found!');
    process.exit(1);
}

// Find the end of the first fx_9 (look for keyTakeaways and closing brace)
let searchStart = firstFx9Start;
let braceCount = 0;
let inFirstFx9 = false;
let firstFx9End = -1;

for (let i = firstFx9Start; i < content.length; i++) {
    if (content[i] === '{') {
        braceCount++;
        inFirstFx9 = true;
    } else if (content[i] === '}') {
        braceCount--;
        if (inFirstFx9 && braceCount === 0) {
            // Look for the trailing comma
            if (content[i + 1] === ',') {
                firstFx9End = i + 2;
            } else {
                firstFx9End = i + 1;
            }
            break;
        }
    }
}

if (firstFx9End === -1) {
    console.log('Could not find end of first fx_9!');
    process.exit(1);
}

console.log(`First fx_9: position ${firstFx9Start} to ${firstFx9End}`);

// Now find and remove all duplicate fx_9 entries
let duplicatesRemoved = 0;
let searchPos = firstFx9End;

while (true) {
    const nextFx9 = content.indexOf('"fx_9": {', searchPos);
    if (nextFx9 === -1) break;

    // Find the end of this duplicate
    let bCount = 0;
    let inDup = false;
    let dupEnd = -1;

    for (let i = nextFx9; i < content.length; i++) {
        if (content[i] === '{') {
            bCount++;
            inDup = true;
        } else if (content[i] === '}') {
            bCount--;
            if (inDup && bCount === 0) {
                if (content[i + 1] === ',') {
                    dupEnd = i + 2;
                } else {
                    dupEnd = i + 1;
                }
                break;
            }
        }
    }

    if (dupEnd === -1) break;

    // Remove this duplicate (including any leading whitespace)
    let removalStart = nextFx9;
    // Go back to find leading whitespace
    while (removalStart > 0 && (content[removalStart - 1] === ' ' || content[removalStart - 1] === '\n' || content[removalStart - 1] === '\r')) {
        removalStart--;
    }

    const before = content.substring(0, removalStart);
    const after = content.substring(dupEnd);
    content = before + '\n    ' + after;

    duplicatesRemoved++;
    searchPos = removalStart + 10; // Keep searching from roughly the same position
}

console.log(`Removed ${duplicatesRemoved} duplicate fx_9 entries`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Duplicates removed successfully!');
