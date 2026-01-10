"use client";

import { useI18n } from '@/lib/i18n';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const { t, locale } = useI18n();

  const phone = locale === 'pt-BR' ? '+55 11 99999-9999' : '+351 912 345 678';
  const location = locale === 'pt-BR' ? 'São Paulo, Brasil' : 'Lisboa, Portugal';

  const scrollTo = (href: string) => {
    const el = document?.querySelector?.(href);
    el?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Get Globe Bridge
            </h3>
            <p className="text-slate-400 mb-6 max-w-md">
              {t?.footer?.description ?? 'Transformando ideias em experiências digitais memoráveis.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t?.footer?.quickLinks ?? 'Links Rápidos'}</h4>
            <ul className="space-y-2">
              {[
                { href: '#home', label: t?.nav?.home ?? 'Início' },
                { href: '#about', label: t?.nav?.about ?? 'Sobre' },
                { href: '#services', label: t?.nav?.services ?? 'Serviços' },
                { href: '#portfolio', label: t?.nav?.portfolio ?? 'Portfólio' }
              ]?.map?.((link) => (
                <li key={link?.href}>
                  <button
                    onClick={() => scrollTo(link?.href ?? '')}
                    className="text-slate-400 hover:text-violet-400 transition-colors"
                  >
                    {link?.label}
                  </button>
                </li>
              )) ?? null}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t?.footer?.contact ?? 'Contato'}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-violet-400" />
                {phone}
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-violet-400" />
                contato@getglobebridge.com
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-violet-400" />
                {location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Get Globe Bridge. {t?.footer?.rights ?? 'Todos os direitos reservados.'}
        </div>
      </div>
    </footer>
  );
}
