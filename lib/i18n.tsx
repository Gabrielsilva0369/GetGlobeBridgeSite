"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Globe } from "lucide-react";

/** 1️⃣ Tipo de idiomas suportados */
export type Locale = "pt-BR" | "pt-PT" | "en-US";

/** 2️⃣ Traduções */
const translations = {
  "pt-BR": {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      portfolio: "Portfólio",
      contact: "Contato",
    },
    hero: {
      title: "Transformamos ideias em",
      highlight: "experiências digitais",
      subtitle:
        "Desenvolvemos sites e sistemas web modernos que impulsionam o seu negócio para o próximo nível.",
      cta: "Fale Conosco",
    },
    about: {
      title: "Sobre a Get Globe Bridge",
      description:
        "Somos uma empresa especializada em desenvolvimento web, conectando negócios ao mundo digital através de soluções inovadoras e personalizadas.",
      mission: "Nossa Missão",
      missionText:
        "Criar pontes digitais que conectam empresas aos seus clientes, oferecendo experiências web excepcionais que geram resultados reais.",
      vision: "Nossa Visão",
      visionText:
        "Ser referência em desenvolvimento web na América Latina, reconhecidos pela qualidade, inovação e compromisso com o sucesso dos nossos clientes.",
      values: "Nossos Valores",
      valuesText:
        "Inovação, transparência, qualidade e foco no cliente são os pilares que guiam cada projeto que desenvolvemos.",
    },
    services: {
      title: "Nossos Serviços",
      subtitle: "Soluções completas para sua presença digital",
      items: [
        { title: "Sites Institucionais", desc: "Sites profissionais que representam sua marca com elegância e funcionalidade." },
        { title: "E-commerce", desc: "Lojas virtuais completas com gestão de produtos, pagamentos e logística." },
        { title: "Landing Pages", desc: "Páginas de alta conversão para campanhas de marketing e lançamentos." },
        { title: "Sistemas Web", desc: "Aplicações web personalizadas para automatizar e otimizar processos." },
        { title: "Manutenção", desc: "Suporte contínuo e atualizações para manter seu site sempre performático." },
        { title: "SEO & Performance", desc: "Otimização para buscadores e velocidade de carregamento." },
      ],
    },
    portfolio: {
      title: "Portfólio",
      subtitle: "Alguns dos projetos que desenvolvemos",
      viewProject: "Ver Projeto",
    },
    footer: {
      description: "Transformando ideias em experiências digitais memoráveis.",
      quickLinks: "Links Rápidos",
      contact: "Contato",
      followUs: "Siga-nos",
      rights: "Todos os direitos reservados.",
    },
    whatsapp: {
      tooltip: "Fale conosco pelo WhatsApp",
    },
  },

  "pt-PT": {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      portfolio: "Portfólio",
      contact: "Contacto",
    },
    hero: {
      title: "Transformamos ideias em",
      highlight: "experiências digitais",
      subtitle:
        "Desenvolvemos sites e sistemas web modernos que impulsionam o seu negócio para o próximo nível.",
      cta: "Fale Connosco",
    },
    about: {
      title: "Sobre a Get Globe Bridge",
      description:
        "Somos uma empresa especializada em desenvolvimento web, conectando negócios ao mundo digital através de soluções inovadoras e personalizadas.",
      mission: "A Nossa Missão",
      missionText:
        "Criar pontes digitais que conectam empresas aos seus clientes, oferecendo experiências web excecionais que geram resultados reais.",
      vision: "A Nossa Visão",
      visionText:
        "Ser referência em desenvolvimento web na Europa, reconhecidos pela qualidade, inovação e compromisso com o sucesso dos nossos clientes.",
      values: "Os Nossos Valores",
      valuesText:
        "Inovação, transparência, qualidade e foco no cliente são os pilares que guiam cada projeto que desenvolvemos.",
    },
    services: {
      title: "Os Nossos Serviços",
      subtitle: "Soluções completas para a sua presença digital",
      items: [
        { title: "Sites Institucionais", desc: "Sites profissionais que representam a sua marca com elegância e funcionalidade." },
        { title: "E-commerce", desc: "Lojas virtuais completas com gestão de produtos, pagamentos e logística." },
        { title: "Landing Pages", desc: "Páginas de alta conversão para campanhas de marketing e lançamentos." },
        { title: "Sistemas Web", desc: "Aplicações web personalizadas para automatizar e otimizar processos." },
        { title: "Manutenção", desc: "Suporte contínuo e atualizações para manter o seu site sempre performático." },
        { title: "SEO & Performance", desc: "Otimização para motores de busca e velocidade de carregamento." },
      ],
    },
    portfolio: {
      title: "Portfólio",
      subtitle: "Alguns dos projetos que desenvolvemos",
      viewProject: "Ver Projeto",
    },
    footer: {
      description: "Transformando ideias em experiências digitais memoráveis.",
      quickLinks: "Links Rápidos",
      contact: "Contacto",
      followUs: "Siga-nos",
      rights: "Todos os direitos reservados.",
    },
    whatsapp: {
      tooltip: "Fale connosco pelo WhatsApp",
    },
  },

  "en-US": {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      title: "We turn ideas into",
      highlight: "digital experiences",
      subtitle: "We develop modern websites and web systems that take your business to the next level.",
      cta: "Contact Us",
    },
    about: {
      title: "About Get Globe Bridge",
      description:
        "We are a web development company connecting businesses to the digital world through innovative and customized solutions.",
      mission: "Our Mission",
      missionText:
        "Creating digital bridges that connect companies to their clients, providing exceptional web experiences that deliver real results.",
      vision: "Our Vision",
      visionText:
        "To be a reference in web development globally, recognized for quality, innovation and commitment to client success.",
      values: "Our Values",
      valuesText:
        "Innovation, transparency, quality, and customer focus are the pillars that guide every project we develop.",
    },
    services: {
      title: "Our Services",
      subtitle: "Complete solutions for your digital presence",
      items: [
        { title: "Corporate Websites", desc: "Professional websites representing your brand with elegance and functionality." },
        { title: "E-commerce", desc: "Complete online stores with product, payment and logistics management." },
        { title: "Landing Pages", desc: "High-conversion pages for marketing campaigns and launches." },
        { title: "Web Systems", desc: "Custom web applications to automate and optimize processes." },
        { title: "Maintenance", desc: "Continuous support and updates to keep your site performing." },
        { title: "SEO & Performance", desc: "Optimization for search engines and loading speed." },
      ],
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Some of the projects we developed",
      viewProject: "View Project",
    },
    footer: {
      description: "Turning ideas into memorable digital experiences.",
      quickLinks: "Quick Links",
      contact: "Contact",
      followUs: "Follow Us",
      rights: "All rights reserved.",
    },
    whatsapp: {
      tooltip: "Chat with us on WhatsApp",
    },
  },
};

/** 3️⃣ WhatsApp por idioma */
const whatsappNumbers: Record<Locale, string> = {
  "pt-BR": "+351966939673",
  "pt-PT": "+351966939673",
  "en-US": "+351966939673",
};
const mails: Record<Locale, string> = {
  "pt-BR": "contato@getglobe.com.br",
  "pt-PT": "contato@getglobe.com.br",
  "en-US": "contato@getglobe.com.br",
};

/** 4️⃣ Contexto e Provider */
interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations["pt-BR"];
  whatsappNumber: string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt-BR");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage?.getItem?.("locale") as Locale | null;
    if (saved && ["pt-BR", "pt-PT", "en-US"].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage?.setItem?.("locale", newLocale);
  };

  const value: I18nContextType = {
    locale,
    setLocale,
    t: translations[locale],
    whatsappNumber: whatsappNumbers[locale],
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/** 5️⃣ Hook para usar em qualquer componente */
export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    return {
      locale: "pt-BR" as Locale,
      setLocale: () => {},
      t: translations["pt-BR"],
      whatsappNumber: whatsappNumbers["pt-BR"],
    };
  }
  return context;
}

/** 6️⃣ LanguageSelector */
export function LanguageSelector() {
  const { locale, setLocale } = useI18n();

  const toggleLocale = () => {
    let newLocale: Locale;
    switch (locale) {
      case "pt-BR":
        newLocale = "pt-PT";
        break;
      case "pt-PT":
        newLocale = "en-US";
        break;
      default:
        newLocale = "pt-BR";
        break;
    }
    setLocale(newLocale);
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 transition-all duration-300 text-sm font-medium"
      aria-label="Trocar idioma"
    >
      <Globe className="w-4 h-4" />
      <span>
        {locale === "pt-BR" ? "🇧🇷 BR" : locale === "pt-PT" ? "🇵🇹 PT" : "🇺🇸 EN"}
      </span>
    </button>
  );
}
