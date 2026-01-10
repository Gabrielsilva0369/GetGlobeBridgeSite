"use client";

import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Heart } from 'lucide-react';

export default function AboutSection() {
  const { t } = useI18n();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const cards = [
    { icon: Target, title: t?.about?.mission ?? 'Missão', text: t?.about?.missionText ?? '' },
    { icon: Eye, title: t?.about?.vision ?? 'Visão', text: t?.about?.visionText ?? '' },
    { icon: Heart, title: t?.about?.values ?? 'Valores', text: t?.about?.valuesText ?? '' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t?.about?.title ?? 'Sobre a Get Globe Bridge'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t?.about?.description ?? ''}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards?.map?.((card, index) => {
            const Icon = card?.icon;
            return (
              <motion.div
                key={card?.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  {Icon ? <Icon className="w-7 h-7 text-white" /> : null}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {card?.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {card?.text}
                </p>
              </motion.div>
            );
          }) ?? null}
        </div>
      </div>
    </section>
  );
}
