import { pt } from './pt';
import { en } from './en';
import { es } from './es';
import type { Lang, Translation } from './types';

export * from './types';

export const languages = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang: Lang = 'pt';

const dictionaries: Record<Lang, Translation> = {
  pt,
  en,
  es,
};

export function getTranslations(lang: Lang = defaultLang): Translation {
  return dictionaries[lang] || dictionaries[defaultLang];
}

export function getLocaleUrl(lang: Lang, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) {
    return cleanPath === '/' ? '/' : cleanPath;
  }
  return cleanPath === '/' ? `/${lang}` : `/${lang}${cleanPath}`;
}
