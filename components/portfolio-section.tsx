"use client";

import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    image: 'https://10web.io/blog/wp-content/uploads/sites/2/2024/10/Squarespace.jpg',
    titleBR: 'TechStore E-commerce',
    titlePT: 'TechStore E-commerce',
    titleEN: 'TechStore E-commerce',
    descBR: 'Loja virtual completa com integração de pagamentos e gestão de estoque.',
    descPT: 'Loja virtual completa com integração de pagamentos e gestão de stock.',
    descEN: 'Complete e-commerce store with payment integration and stock management.',
  },
  {
    image: 'https://s3.envato.com/files/614988930/1.__large_preview.png',
    titleBR: 'Consultoria Optivise',
    titlePT: 'Consultoria Optivise',
    titleEN: 'Consultoria Optivise',
    descBR: 'Site institucional para empresa de consultoria empresarial.',
    descPT: 'Site institucional para empresa de consultoria empresarial.',
    descEN: 'Institutional site for business consulting company.',
  },
  {
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/29/a6/7a/bandeja-paisa.jpg?w=900&h=500&s=1',
    titleBR: 'Sabor & Arte Restaurante',
    titlePT: 'Sabor & Arte Restaurante',
    titleEN: 'Sabor & Arte Restaurante',
    descBR: 'Site com cardápio digital e sistema de reservas online.',
    descPT: 'Site com ementa digital e sistema de reservas online.',
    descEN: 'Digital menu site with online reservation system.',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/17045246/file/original-bf0a94150c9caed0cc6ad1be9db31274.jpg?resize=1600x1200',
    titleBR: 'MedCare Saúde',
    titlePT: 'MedCare Saúde',
    titleEN: 'MedCare Saúde',
    descBR: 'Plataforma de agendamento médico com área do paciente.',
    descPT: 'Plataforma de marcação médica com área do paciente.',
    descEN: 'Medical appointment platform with patient area.',
  },
  {
    image: 'https://www.ubertor.com/assets/img/themes/templates/Amico.jpg',
    titleBR: 'ImobPrime Imóveis',
    titlePT: 'ImobPrime Imóveis',
    titleEN: 'ImobPrime Imóveis',
    descBR: 'Portal imobiliário com busca avançada e tour virtual.',
    descPT: 'Portal imobiliário com pesquisa avançada e tour virtual.',
    descEN: 'Real estate portal with advanced search and virtual tour.',
  },
  {
    image: 'https://cdn.dribbble.com/userupload/4559379/file/original-91f903b4a5b3c31fd27cb0228c92616c.jpg',
    titleBR: 'EduLearn Plataforma',
    titlePT: 'EduLearn Plataforma',
    titleEN: 'EduLearn Plataforma',
    descBR: 'Sistema de ensino online com cursos e certificados.',
    descPT: 'Sistema de ensino online com cursos e certificados.',
    descEN: 'Online education platform with courses and certificates.',
  },
  {
    image: 'https://www.adminuiux.com/wp-content/uploads/2025/10/Screenshot-2025-09-30-at-4.04.07-PM.png',
    titleBR: 'SalesHub Dashboard',
    titlePT: 'SalesHub Dashboard',
    titleEN: 'SalesHub Dashboard',
    descBR: 'Dashboard SaaS para gestão de vendas e relatórios.',
    descPT: 'Dashboard SaaS para gestão de vendas e relatórios.',
    descEN: 'SaaS dashboard for sales management and reporting.',
  },
  {
    image: 'https://i.ytimg.com/vi/qMZF-FFcL7o/maxresdefault.jpg',
    titleBR: 'ModaStyle Fashion',
    titlePT: 'ModaStyle Fashion',
    titleEN: 'ModaStyle Fashion',
    descBR: 'E-commerce de moda com lookbook e provador virtual.',
    descPT: 'E-commerce de moda com lookbook e provador virtual.',
    descEN: 'E-commerce for fashion with lookbook and virtual try-on.',
  }
];

export default function PortfolioSection() {
  const { t, locale } = useI18n();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t?.portfolio?.title ?? 'Portfólio'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {t?.portfolio?.subtitle ?? ''}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects?.map?.((project, index) => (
            <motion.div
              key={project?.titleBR ?? index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-video bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <Image
                  src={project?.image ?? ''}
                  alt={
                    locale === 'pt-BR'
                      ? project?.titleBR ?? ''
                      : locale === 'pt-PT'
                        ? project?.titlePT ?? ''
                        : project?.titleEN ?? ''
                  }
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="inline-flex items-center gap-1 text-white text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    {t?.portfolio?.viewProject ?? 'Ver Projeto'}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                  {locale === 'pt-BR'
                      ? project?.titleBR ?? ''
                      : locale === 'pt-PT'
                        ? project?.titlePT ?? ''
                        : project?.titleEN ?? ''}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {locale === 'pt-BR'
                      ? project?.descBR ?? ''
                      : locale === 'pt-PT'
                        ? project?.descPT ?? ''
                        : project?.descEN ?? ''}
                </p>
              </div>
            </motion.div>
          )) ?? null}
        </div>
      </div>
    </section>
  );
}
