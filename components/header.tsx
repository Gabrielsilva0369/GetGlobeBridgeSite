"use client";

import { useI18n } from '@/lib/i18n';
import LanguageSelector from './language-selector';
import ThemeToggle from './theme-toggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: t?.nav?.home ?? 'Início' },
    { href: '#about', label: t?.nav?.about ?? 'Sobre' },
    { href: '#services', label: t?.nav?.services ?? 'Serviços' },
    { href: '#portfolio', label: t?.nav?.portfolio ?? 'Portfólio' }
  ];

  const scrollTo = (href: string) => {
    const el = document?.querySelector?.(href);
    el?.scrollIntoView?.({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Get Globe Bridge
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems?.map?.((item) => (
              <button
                key={item?.href}
                onClick={() => scrollTo(item?.href ?? '')}
                className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
              >
                {item?.label}
              </button>
            )) ?? null}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSelector />
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700"
          >
            <nav className="flex flex-col px-4 py-4 gap-2">
              {navItems?.map?.((item) => (
                <button
                  key={item?.href}
                  onClick={() => scrollTo(item?.href ?? '')}
                  className="text-left px-4 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium"
                >
                  {item?.label}
                </button>
              )) ?? null}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
