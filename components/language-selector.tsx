"use client";

import { useI18n, Locale } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const { locale, setLocale } = useI18n();

  const toggleLocale = () => {
    const newLocale: Locale = locale === 'pt-BR' ? 'pt-PT' : 'pt-BR';
    setLocale(newLocale);
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 transition-all duration-300 text-sm font-medium"
      aria-label="Trocar idioma"
    >
      <Globe className="w-4 h-4" />
      <span>{locale === 'pt-BR' ? '🇧🇷 BR' : '🇵🇹 PT'}</span>
    </button>
  );
}
