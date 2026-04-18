// src/i18n/index.ts
import pt from './pt.json';
import en from './en.json';

export type Lang = 'pt' | 'en';

const translations: Record<Lang, Record<string, string>> = { pt, en };

export function t(key: string, lang: Lang): string {
  return translations[lang][key] ?? key;
}

export const defaultLang: Lang = 'pt';
