"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Locale = 'pt-BR' | 'pt-PT';

const translations = {
  'pt-BR': {
    nav: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      portfolio: 'Portfólio',
      contact: 'Contato'
    },
    hero: {
      title: 'Transformamos ideias em',
      highlight: 'experiências digitais',
      subtitle: 'Desenvolvemos sites e sistemas web modernos que impulsionam o seu negócio para o próximo nível.',
      cta: 'Fale Conosco'
    },
    about: {
      title: 'Sobre a Get Globe Bridge',
      description: 'Somos uma empresa especializada em desenvolvimento web, conectando negócios ao mundo digital através de soluções inovadoras e personalizadas.',
      mission: 'Nossa Missão',
      missionText: 'Criar pontes digitais que conectam empresas aos seus clientes, oferecendo experiências web excepcionais que geram resultados reais.',
      vision: 'Nossa Visão',
      visionText: 'Ser referência em desenvolvimento web na América Latina, reconhecidos pela qualidade, inovação e compromisso com o sucesso dos nossos clientes.',
      values: 'Nossos Valores',
      valuesText: 'Inovação, transparência, qualidade e foco no cliente são os pilares que guiam cada projeto que desenvolvemos.'
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções completas para sua presença digital',
      items: [
        { title: 'Sites Institucionais', desc: 'Sites profissionais que representam sua marca com elegância e funcionalidade.' },
        { title: 'E-commerce', desc: 'Lojas virtuais completas com gestão de produtos, pagamentos e logística.' },
        { title: 'Landing Pages', desc: 'Páginas de alta conversão para campanhas de marketing e lançamentos.' },
        { title: 'Sistemas Web', desc: 'Aplicações web personalizadas para automatizar e otimizar processos.' },
        { title: 'Manutenção', desc: 'Suporte contínuo e atualizações para manter seu site sempre performático.' },
        { title: 'SEO & Performance', desc: 'Otimização para buscadores e velocidade de carregamento.' }
      ]
    },
    portfolio: {
      title: 'Portfólio',
      subtitle: 'Alguns dos projetos que desenvolvemos',
      viewProject: 'Ver Projeto'
    },
    footer: {
      description: 'Transformando ideias em experiências digitais memoráveis.',
      quickLinks: 'Links Rápidos',
      contact: 'Contato',
      followUs: 'Siga-nos',
      rights: 'Todos os direitos reservados.'
    },
    whatsapp: {
      tooltip: 'Fale conosco pelo WhatsApp'
    }
  },
  'pt-PT': {
    nav: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      portfolio: 'Portfólio',
      contact: 'Contacto'
    },
    hero: {
      title: 'Transformamos ideias em',
      highlight: 'experiências digitais',
      subtitle: 'Desenvolvemos sites e sistemas web modernos que impulsionam o seu negócio para o próximo nível.',
      cta: 'Fale Connosco'
    },
    about: {
      title: 'Sobre a Get Globe Bridge',
      description: 'Somos uma empresa especializada em desenvolvimento web, conectando negócios ao mundo digital através de soluções inovadoras e personalizadas.',
      mission: 'A Nossa Missão',
      missionText: 'Criar pontes digitais que conectam empresas aos seus clientes, oferecendo experiências web excecionais que geram resultados reais.',
      vision: 'A Nossa Visão',
      visionText: 'Ser referência em desenvolvimento web na Europa, reconhecidos pela qualidade, inovação e compromisso com o sucesso dos nossos clientes.',
      values: 'Os Nossos Valores',
      valuesText: 'Inovação, transparência, qualidade e foco no cliente são os pilares que guiam cada projeto que desenvolvemos.'
    },
    services: {
      title: 'Os Nossos Serviços',
      subtitle: 'Soluções completas para a sua presença digital',
      items: [
        { title: 'Sites Institucionais', desc: 'Sites profissionais que representam a sua marca com elegância e funcionalidade.' },
        { title: 'E-commerce', desc: 'Lojas virtuais completas com gestão de produtos, pagamentos e logística.' },
        { title: 'Landing Pages', desc: 'Páginas de alta conversão para campanhas de marketing e lançamentos.' },
        { title: 'Sistemas Web', desc: 'Aplicações web personalizadas para automatizar e otimizar processos.' },
        { title: 'Manutenção', desc: 'Suporte contínuo e atualizações para manter o seu site sempre performático.' },
        { title: 'SEO & Performance', desc: 'Otimização para motores de busca e velocidade de carregamento.' }
      ]
    },
    portfolio: {
      title: 'Portfólio',
      subtitle: 'Alguns dos projetos que desenvolvemos',
      viewProject: 'Ver Projeto'
    },
    footer: {
      description: 'Transformando ideias em experiências digitais memoráveis.',
      quickLinks: 'Links Rápidos',
      contact: 'Contacto',
      followUs: 'Siga-nos',
      rights: 'Todos os direitos reservados.'
    },
    whatsapp: {
      tooltip: 'Fale connosco pelo WhatsApp'
    }
  }
};

const whatsappNumbers: Record<Locale, string> = {
  'pt-BR': '+5511999999999',
  'pt-PT': '+351912345678'
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations['pt-BR'];
  whatsappNumber: string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('pt-BR');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage?.getItem?.('locale') as Locale | null;
    if (saved && (saved === 'pt-BR' || saved === 'pt-PT')) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage?.setItem?.('locale', newLocale);
  };

  const value: I18nContextType = {
    locale,
    setLocale,
    t: translations[locale],
    whatsappNumber: whatsappNumbers[locale]
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    return {
      locale: 'pt-BR' as Locale,
      setLocale: () => {},
      t: translations['pt-BR'],
      whatsappNumber: whatsappNumbers['pt-BR']
    };
  }
  return context;
}
