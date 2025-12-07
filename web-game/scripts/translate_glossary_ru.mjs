/**
 * Translate Glossary to Russian
 * Uses google-translate-api-x with proper import
 */

import { translate } from 'google-translate-api-x';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DELAY_MS = 600;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function translateText(text, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const result = await translate(text, { to: 'ru', forceBatch: false });
            return result.text;
        } catch (error) {
            if (attempt === retries) return text;
            await sleep(2000 * attempt);
        }
    }
    return text;
}

async function main() {
    console.log('╔═══════════════════════════════════════════╗');
    console.log('║   Glossary Translation to Russian         ║');
    console.log('╚═══════════════════════════════════════════╝\n');

    // Read glossary file
    const glossaryPath = path.join(__dirname, '..', 'src', 'features', 'game', 'Glossary.tsx');
    const content = fs.readFileSync(glossaryPath, 'utf8');

    // Extract glossary terms - improved pattern
    const termPattern = /\{\s*id:\s*'([^']+)',\s*term:\s*'([^']+)',\s*definition:\s*'((?:[^'\\]|\\.)*)'\s*,\s*category:\s*'([^']+)'\s*\}/g;
    const terms = [];
    let match;

    while ((match = termPattern.exec(content)) !== null) {
        terms.push({
            id: match[1],
            term: match[2],
            definition: match[3].replace(/\\'/g, "'"),
            category: match[4]
        });
    }

    console.log(`Found ${terms.length} glossary terms\n`);

    if (terms.length === 0) {
        console.log('No terms found! Check the pattern.');
        return;
    }

    // Pre-translate category names (they repeat)
    const categories = [...new Set(terms.map(t => t.category))];
    const categoryTranslations = {};

    console.log('Translating categories...');
    for (const cat of categories) {
        categoryTranslations[cat] = await translateText(cat);
        await sleep(DELAY_MS);
    }
    console.log('Categories done!\n');

    // Translate terms and definitions
    const translatedTerms = [];

    for (let i = 0; i < terms.length; i++) {
        const term = terms[i];
        const percent = Math.round(((i + 1) / terms.length) * 100);

        process.stdout.write(`[${i + 1}/${terms.length}] ${term.term.substring(0, 25).padEnd(25)} `);

        try {
            // Translate term name
            const translatedTerm = await translateText(term.term);
            await sleep(DELAY_MS);

            // Translate definition (may be long)
            let translatedDef = term.definition;
            if (term.definition.length < 500) {
                translatedDef = await translateText(term.definition);
                await sleep(DELAY_MS);
            } else {
                // Split long definitions
                const parts = term.definition.split('. ');
                const translatedParts = [];
                for (const part of parts) {
                    if (part.trim()) {
                        translatedParts.push(await translateText(part.trim()));
                        await sleep(DELAY_MS / 2);
                    }
                }
                translatedDef = translatedParts.join('. ');
            }

            translatedTerms.push({
                id: term.id,
                term: translatedTerm,
                definition: translatedDef.replace(/'/g, "\\'"),
                category: categoryTranslations[term.category] || term.category
            });

            console.log(`✓ (${percent}%)`);
        } catch (error) {
            console.log(`✗`);
            translatedTerms.push({
                ...term,
                definition: term.definition.replace(/'/g, "\\'")
            });
        }
    }

    // Generate Russian glossary file
    console.log('\n📝 Generating Russian glossary...');

    let output = `// Auto-generated Russian Glossary
// Generated on: ${new Date().toISOString()}

export interface GlossaryTerm {
    id: string;
    term: string;
    definition: string;
    category: string;
}

export const glossaryTermsRu: GlossaryTerm[] = [
`;

    for (const term of translatedTerms) {
        output += `    { id: '${term.id}', term: '${term.term}', definition: '${term.definition}', category: '${term.category}' },\n`;
    }

    output += `];\n`;

    // Save to file
    const outputPath = path.join(__dirname, '..', 'src', 'features', 'game', 'data', 'locales', 'glossary_ru.ts');
    fs.writeFileSync(outputPath, output, 'utf8');

    console.log(`\n✅ Russian glossary saved to:`);
    console.log(`   ${outputPath}`);
    console.log(`   Total terms: ${translatedTerms.length}`);
}

main().catch(console.error);
