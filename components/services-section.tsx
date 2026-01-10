"use client";

import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, ShoppingCart, Rocket, Code, Wrench, Search } from 'lucide-react';

const icons = [Globe, ShoppingCart, Rocket, Code, Wrench, Search];

export default function ServicesSection() {
  const { t } = useI18n();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = t?.services?.items ?? [];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t?.services?.title ?? 'Nossos Serviços'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {t?.services?.subtitle ?? ''}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map?.((service, index) => {
            const Icon = icons?.[index] ?? Globe;
            return (
              <motion.div
                key={service?.title ?? index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-gradient-to-br hover:from-violet-500 hover:to-indigo-600 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 group-hover:bg-white/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-white mb-2 transition-colors">
                  {service?.title ?? ''}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 group-hover:text-white/80 transition-colors text-sm">
                  {service?.desc ?? ''}
                </p>
              </motion.div>
            );
          }) ?? null}
        </div>
      </div>
    </section>
  );
}
