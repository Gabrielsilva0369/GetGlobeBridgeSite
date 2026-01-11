"use client";

import { useI18n } from "@/lib/i18n";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const { whatsappNumber, t, locale } = useI18n();

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
    window?.open?.(url, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-800 dark:bg-slate-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {t?.whatsapp?.tooltip ?? "Fale conosco pelo WhatsApp"}
        <br />
        <span className="text-green-400 font-medium">{whatsappNumber}</span>
      </div>

      {/* Botão */}
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label={t?.whatsapp?.tooltip ?? "WhatsApp"}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </motion.div>
  );
}
