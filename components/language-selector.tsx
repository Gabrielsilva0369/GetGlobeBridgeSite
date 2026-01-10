"use client";

import { useState } from "react";
import { useI18n, Locale } from "@/lib/i18n";
import { Globe, ChevronDown } from "lucide-react";

const locales: { code: Locale; label: string; flag: string }[] = [
  { code: "pt-BR", label: "BR", flag: "🇧🇷" },
  { code: "pt-PT", label: "PT", flag: "🇵🇹" },
  { code: "en-US", label: "EN", flag: "🇺🇸" },
];

export default function LanguageSelector() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  const handleSelect = (newLocale: Locale) => {
    setLocale(newLocale);
    setOpen(false);
  };

  const current = locales.find((l) => l.code === locale)!;

  return (
    <div className="relative inline-block text-left">
      {/* Botão principal */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 transition-all duration-300 text-sm font-medium focus:outline-none"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <Globe className="w-4 h-4" />
        <span>{`${current.flag} ${current.label}`}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Menu dropdown */}
      {open && (
        <ul className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
          {locales.map((l) => (
            <li key={l.code}>
              <button
                onClick={() => handleSelect(l.code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 ${
                  l.code === locale ? "font-semibold" : ""
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
