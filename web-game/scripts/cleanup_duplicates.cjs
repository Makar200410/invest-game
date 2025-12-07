const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');

console.log('Reading file...');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

console.log('Total lines before cleanup:', lines.length);

// Find the line where duplicates start (the second "// Module 13: Trading Psychology" comment)
// Based on analysis, the duplicate content starts at line 20228 (index 20227)
// The proper ending should be just before that - where pm_12 ends

// Find the first occurrence of "// Module 13: Trading Psychology"
const firstTpModuleIndex = lines.findIndex(line => line.includes('// Module 13: Trading Psychology'));
console.log('First Trading Psychology module at line:', firstTpModuleIndex + 1);

// Find the second occurrence
const secondTpModuleIndex = lines.findIndex((line, idx) =>
    idx > firstTpModuleIndex && line.includes('// Module 13: Trading Psychology')
);
console.log('Second (duplicate) Trading Psychology module at line:', secondTpModuleIndex + 1);

if (secondTpModuleIndex === -1) {
    console.log('No duplicate Trading Psychology module found. File is already clean.');
    process.exit(0);
}

// Everything from the second occurrence onwards should be removed
// But we need to preserve the closing }; of the file

// Find where we need to cut - just before the duplicate starts
// The line before the duplicate comment should be like "    }," closing pm_12
const cutStartIndex = secondTpModuleIndex - 1; // Start cutting from the empty line before the duplicate comment
console.log('Cutting from line:', cutStartIndex + 1);

// Keep only lines up to but not including the duplicate
const cleanedLines = lines.slice(0, cutStartIndex);

// Add proper closing
cleanedLines.push('};');
cleanedLines.push('');

const cleanedContent = cleanedLines.join('\n');

console.log('Total lines after cleanup:', cleanedLines.length);

// Backup the original
fs.writeFileSync(filePath + '.backup', content, 'utf8');
console.log('Backup created at:', filePath + '.backup');

// Write the cleaned content
fs.writeFileSync(filePath, cleanedContent, 'utf8');
console.log('File cleaned successfully!');

// Verify the cleanup
const verifyContent = fs.readFileSync(filePath, 'utf8');
const tpCount = (verifyContent.match(/"tp_1":/g) || []).length;
const cfCount = (verifyContent.match(/"cf_1":/g) || []).length;
console.log('\nVerification:');
console.log('tp_1 occurrences:', tpCount, tpCount === 1 ? '✓' : '✗ ISSUE');
console.log('cf_1 occurrences:', cfCount, cfCount === 1 ? '✓' : '✗ ISSUE');
