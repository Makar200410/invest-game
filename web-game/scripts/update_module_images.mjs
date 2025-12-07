/**
 * Update learningData.ts to use local images from public/images/modules/
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const learningDataPath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'learningData.ts');

// Map of module ID to filename (based on list_dir output)
const IMAGE_MAP = {
    'financial_foundations': 'financial_foundations.jpg',
    'investment_basics': 'investment_basics.jpg',
    'stock_market_mastery': 'stock_market_mastery.jpg',
    'bonds_fixed_income': 'bonds_fixed_income.png', // Note: PNG
    'funds_etfs': 'funds_etfs.jpg',
    'forex_currencies': 'forex_currencies.jpg',
    'crypto_blockchain': 'crypto_blockchain.jpg',
    'economics_101': 'economics_101.jpg',
    'technical_analysis': 'technical_analysis.jpg',
    'commodities_futures': 'commodities_futures.png', // Note: PNG
    'advanced_strategies': 'advanced_strategies.jpg',
    'portfolio_management': 'portfolio_management.jpg',
    'trading_psychology': 'trading_psychology.jpg'
};

let content = fs.readFileSync(learningDataPath, 'utf8');

for (const [moduleId, filename] of Object.entries(IMAGE_MAP)) {
    // Regex to find the image property within the specific module block
    // We look for id: 'moduleId' ... image: '...'
    // This is a bit complex with regex, so let's try a safer approach:
    // We'll split by module ID and then replace the *next* image property.

    const moduleMarker = `id: '${moduleId}'`;
    const imageMarker = `image: '`;

    const moduleIndex = content.indexOf(moduleMarker);
    if (moduleIndex === -1) {
        console.log(`⚠️ Module ${moduleId} not found`);
        continue;
    }

    // Find the image property *after* this module ID
    const imageIndex = content.indexOf(imageMarker, moduleIndex);
    if (imageIndex === -1) {
        console.log(`⚠️ Image property for ${moduleId} not found`);
        continue;
    }

    // Find the end of the string
    const imageEndIndex = content.indexOf("',", imageIndex);

    // Construct the new line
    const newImageLine = `image: '/images/modules/${filename}'`;

    // We need to be careful not to replace the wrong thing if the structure is weird.
    // Let's verify the distance isn't too huge (e.g. we skipped to next module)
    if (imageIndex - moduleIndex > 500) {
        console.log(`⚠️ Image property for ${moduleId} seems too far away, skipping safety check`);
        continue;
    }

    // Replace
    // We can't just use replace() because it might replace the first occurrence in the file
    // We need to splice the string

    // Actually, let's use a specific regex for each replacement to be safe and simple
    // We match: id: 'moduleId', (anything until) image: 'old_url',

    const regex = new RegExp(`(id:\\s*'${moduleId}',[\\s\\S]*?image:\\s*')([^']+)(')`, 'm');

    if (regex.test(content)) {
        content = content.replace(regex, `$1/images/modules/${filename}$3`);
        console.log(`✅ Updated ${moduleId} -> /images/modules/${filename}`);
    } else {
        console.log(`❌ Regex failed for ${moduleId}`);
    }
}

fs.writeFileSync(learningDataPath, content, 'utf8');
console.log('\n🎉 learningData.ts updated successfully!');
