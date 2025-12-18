import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { PROFILE, TRANSLATIONS } from '../constants';

interface HeroProps {
  onNavigate: (id: string) => void;
  lang: 'fr' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, lang }) => {
  const t = TRANSLATIONS[lang].hero;
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            <div className="w-44 h-44 md:w-64 md:h-64 relative rounded-full border-4 border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
                <img 
                  src={PROFILE.profileImage} 
                  alt={PROFILE.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=500";
                  }}
                />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6"
          >
            {t.greeting} <span className="gradient-text">{PROFILE.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-8 font-light"
          >
            {t.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 max-w-xl mb-10 leading-relaxed"
          >
            {t.description}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button 
              onClick={() => onNavigate('projects')}
              className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/25 active:scale-95"
            >
              {t.cta_projects}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-full font-bold border border-slate-600 hover:border-indigo-400 hover:text-indigo-400 text-slate-300 transition-all active:scale-95 bg-slate-900/50 backdrop-blur-sm"
            >
              {t.cta_contact}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex gap-8 text-slate-400"
          >
             <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:scale-125 transform"><Github size={28} /></a>
             <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all hover:scale-125 transform"><Linkedin size={28} /></a>
             <a href="#" className="hover:text-sky-400 transition-all hover:scale-125 transform"><Twitter size={28} /></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};