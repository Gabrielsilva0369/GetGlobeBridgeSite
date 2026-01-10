"use client";

import { I18nProvider } from '@/lib/i18n';
import Header from './header';
import HeroSection from './hero-section';
import AboutSection from './about-section';
import ServicesSection from './services-section';
import PortfolioSection from './portfolio-section';
import Footer from './footer';
import WhatsAppButton from './whatsapp-button';

export default function MainContent() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </I18nProvider>
  );
}
