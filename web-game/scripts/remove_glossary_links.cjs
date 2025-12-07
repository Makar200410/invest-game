const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'learning', 'en.ts');

console.log('Reading file...');
let content = fs.readFileSync(filePath, 'utf8');

// Count occurrences before
const beforeCount = (content.match(/\[([^\]]+)\]\(\/glossary#[^)]+\)/g) || []).length;
console.log('Glossary links found:', beforeCount);

// Replace all [word](/glossary#term) patterns with just the word
// Pattern: [any text](glossary#any-term)
const newContent = content.replace(/\[([^\]]+)\]\(\/glossary#[^)]+\)/g, '$1');

// Count occurrences after
const afterCount = (newContent.match(/\[([^\]]+)\]\(\/glossary#[^)]+\)/g) || []).length;
console.log('Glossary links remaining:', afterCount);
console.log('Links removed:', beforeCount - afterCount);

// Backup the original
fs.writeFileSync(filePath + '.backup2', content, 'utf8');
console.log('Backup created at:', filePath + '.backup2');

// Write the cleaned content
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('✓ Successfully removed glossary links!');

// Show some examples of what was changed
console.log('\nExample replacements:');
const examples = [
    '[risk](/glossary#risk) → risk',
    '[stop-loss](/glossary#stop-loss) → stop-loss',
    '[stocks](/glossary#stock) → stocks',
    '[ETFs](/glossary#etf) → ETFs'
];
examples.forEach(ex => console.log('  ' + ex));
