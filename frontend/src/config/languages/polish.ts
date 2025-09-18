import type { LanguageConfig } from '../types';

export const polishConfig: LanguageConfig = {
  meta: {
    code: 'pl',
    name: 'Polish', 
    nativeName: 'Polski',
    flag: '🇵🇱',
    direction: 'ltr'
  },
  app: {
    title: '🚀 DashkaBot Germany 2.1',
    subtitle: 'Galaxy S24 - Russian ⇄ Germany Voice Translator 2.1'
  },
  buttons: {
    translate: 'Перевести',
    clear: 'Очистить всё',
    record: 'Записываю... Нажмите когда закончите'
  },
  placeholders: {
    inputText: 'Привет',
    outputLabel: 'Перевод:',
    sourceText: 'Исходный текст:'  // ← ДОБАВЛЕНО
  },
  languageSelector: {               // ← ДОБАВЛЕНО
    sourceLabel: 'Russian Speaker',
    targetLabel: 'Germany Speaker'
  },
  translationLanguages: {
    source: { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    target: { code: 'de', name: 'Germany', flag: '🇵🇱' }
  }
};
