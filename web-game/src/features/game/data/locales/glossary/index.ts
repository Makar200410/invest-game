// Glossary terms exports for all languages
import { glossaryTerms } from '../../../Glossary';
import { glossaryTerms_es } from './es';
import { glossaryTerms_fr } from './fr';
import { glossaryTerms_de } from './de';
import { glossaryTerms_zh_CN } from './zh_CN';
import { glossaryTerms_ja } from './ja';
import { glossaryTerms_pt } from './pt';
import { glossaryTermsRu } from '../glossary_ru';

export interface GlossaryTermEntry {
    id: string;
    term: string;
    definition: string;
    category: string;
}

// Map of language code to glossary terms
export const glossaryTermsByLanguage: Record<string, GlossaryTermEntry[]> = {
    en: glossaryTerms,
    es: glossaryTerms_es,
    fr: glossaryTerms_fr,
    de: glossaryTerms_de,
    zh: glossaryTerms_zh_CN,
    zh_CN: glossaryTerms_zh_CN,
    ja: glossaryTerms_ja,
    pt: glossaryTerms_pt,
    ru: glossaryTermsRu,
};

/**
 * Get glossary terms for a specific language
 * Falls back to English if the language is not available
 */
export const getGlossaryTermsForLanguage = (languageCode: string): GlossaryTermEntry[] => {
    // Handle locale variants (e.g., 'zh-CN' or 'pt-BR')
    const baseLanguage = languageCode.split('-')[0].split('_')[0];

    return glossaryTermsByLanguage[languageCode]
        || glossaryTermsByLanguage[baseLanguage]
        || glossaryTerms;
};
