/**
 * Apply Translated Descriptions to i18n.ts
 * 
 * This script reads the translated description patch files and inserts them
 * into the appropriate language sections of i18n.ts
 * 
 * Usage: node apply_description_patches.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const I18N_PATH = path.join(__dirname, '..', 'src', 'i18n.ts');
const PATCHES_DIR = path.join(__dirname, 'translated_descriptions');

// Language mappings: patch file language code -> i18n.ts language key
const LANG_MAPPINGS = {
    'es': 'es',
    'fr': 'fr',
    'de': 'de',
    'zh_CN': 'zh', // Note: patch file uses underscore
    'ja': 'ja',
    'pt': 'pt',
    'ru': 'ru'
};

function log(message, type = 'info') {
    const now = new Date().toLocaleTimeString();
    const prefix = { info: '📘', success: '✅', warning: '⚠️', error: '❌' }[type] || '📘';
    console.log(`[${now}] ${prefix} ${message}`);
}

function findLanguageSectionEnd(content, langKey) {
    // Find the start of the language section
    // Pattern: langKey: { translation: { ... } }
    const langPattern = new RegExp(`${langKey}:\\s*\\{\\s*translation:\\s*\\{`);
    const match = content.match(langPattern);

    if (!match) {
        return null;
    }

    const startIndex = match.index + match[0].length;

    // Find where we should insert the descriptions
    // We want to insert them after the last existing "desc_" entry in this section
    // Or before the closing of the translation object

    // Find the end of this translation object by counting braces
    let braceCount = 1;
    let insertPoint = startIndex;
    let lastDescEnd = -1;

    for (let i = startIndex; i < content.length; i++) {
        const char = content[i];

        if (char === '{') {
            braceCount++;
        } else if (char === '}') {
            braceCount--;
            if (braceCount === 0) {
                // This is the end of the translation object
                insertPoint = i;
                break;
            }
        }

        // Check if we're at a desc_ entry
        if (content.substring(i, i + 6) === '"desc_') {
            // Find the end of this entry
            let j = i + 6;
            while (j < content.length && content[j] !== '\n') j++;
            lastDescEnd = j + 1;
        }
    }

    // If we found existing descriptions, insert after the last one
    // Otherwise, insert before the closing brace
    return {
        insertPoint: lastDescEnd > 0 ? lastDescEnd : insertPoint,
        hasDescriptions: lastDescEnd > 0
    };
}

function applyPatch(content, langKey, patchContent) {
    const result = findLanguageSectionEnd(content, langKey);

    if (!result) {
        log(`Could not find ${langKey} section in i18n.ts`, 'error');
        return null;
    }

    // Insert the patch content
    const before = content.substring(0, result.insertPoint);
    const after = content.substring(result.insertPoint);

    // Add a comment header for the descriptions
    const header = result.hasDescriptions
        ? ''
        : '\n                    // Asset Descriptions (Auto-translated)\n';

    return before + header + patchContent + after;
}

function main() {
    console.log('\n╔═══════════════════════════════════════════════════════════════╗');
    console.log('║   APPLY DESCRIPTION PATCHES TO i18n.ts                       ║');
    console.log('╚═══════════════════════════════════════════════════════════════╝\n');

    // Check if patches directory exists
    if (!fs.existsSync(PATCHES_DIR)) {
        log(`Patches directory not found: ${PATCHES_DIR}`, 'error');
        log('Run translate_descriptions.mjs first to generate translations.', 'warning');
        process.exit(1);
    }

    // Read the current i18n.ts content
    let content = fs.readFileSync(I18N_PATH, 'utf8');
    log(`Read i18n.ts (${content.length} bytes)`);

    // Find all patch files
    const patchFiles = fs.readdirSync(PATCHES_DIR).filter(f => f.startsWith('patch_') && f.endsWith('.txt'));

    if (patchFiles.length === 0) {
        log('No patch files found!', 'error');
        process.exit(1);
    }

    log(`Found ${patchFiles.length} patch files`);

    let applied = 0;

    for (const patchFile of patchFiles) {
        // Extract language code from filename (e.g., patch_es.txt -> es)
        const langCode = patchFile.replace('patch_', '').replace('.txt', '');
        const i18nLangKey = LANG_MAPPINGS[langCode] || langCode;

        log(`Processing ${patchFile} -> ${i18nLangKey} section...`);

        const patchPath = path.join(PATCHES_DIR, patchFile);
        const patchContent = fs.readFileSync(patchPath, 'utf8');

        if (!patchContent.trim()) {
            log(`  Empty patch file, skipping`, 'warning');
            continue;
        }

        // Check if descriptions already exist for this language
        const descPattern = new RegExp(`${i18nLangKey}:[\\s\\S]*?"desc_`);
        if (descPattern.test(content)) {
            log(`  Descriptions already exist for ${i18nLangKey}, skipping to avoid duplicates`, 'warning');
            continue;
        }

        const newContent = applyPatch(content, i18nLangKey, patchContent);

        if (newContent) {
            content = newContent;
            applied++;
            log(`  Applied ${patchContent.split('\n').length} lines`, 'success');
        }
    }

    if (applied > 0) {
        // Backup original file
        const backupPath = I18N_PATH + '.backup';
        fs.writeFileSync(backupPath, fs.readFileSync(I18N_PATH, 'utf8'));
        log(`Backup saved to ${backupPath}`);

        // Write updated content
        fs.writeFileSync(I18N_PATH, content, 'utf8');
        log(`Updated i18n.ts with ${applied} language patches`, 'success');
    } else {
        log('No patches were applied', 'warning');
    }

    console.log('\n' + '═'.repeat(70));
    log('PATCH APPLICATION COMPLETE!', 'success');
    console.log('═'.repeat(70) + '\n');
}

main();
