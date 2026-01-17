"use client";

import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Coins, Calendar, FileText } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white py-20 px-6 min-h-[85vh] flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto z-10"
      >
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          המדריך המלא לשנת שבתון:
          <br />
          <span className="text-blue-100">צאי לצמוח, אנחנו נדאג לבירוקרטיה.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-2xl mx-auto font-light">
          הזכות לשבתון היא ההזדמנות שלך למילוי מצברים ומניעת שחיקה. ריכזנו עבורך את כל המידע במקום אחד.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => scrollToSection('financial')}
            className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 hover:scale-105 transition-all"
          >
            <Coins size={20} />
            פיננסי
          </button>
          
          <button 
            onClick={() => scrollToSection('bureaucracy')}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/40 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-white/30 hover:scale-105 transition-all"
          >
            <FileText size={20} />
            בירוקרטיה
          </button>
          
          <button 
            onClick={() => scrollToSection('studies')}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/40 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-white/30 hover:scale-105 transition-all"
          >
            <BookOpen size={20} />
            לימודים
          </button>
          
          <button 
            onClick={() => scrollToSection('timeline')}
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/40 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-white/30 hover:scale-105 transition-all"
          >
            <Calendar size={20} />
            לו"ז
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={32} className="text-white/70" />
      </motion.div>
    </section>
  );
};
