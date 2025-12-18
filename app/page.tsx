
'use client';

import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { ContactModal } from '../components/ContactModal';
import { BookingModal } from '../components/BookingModal';
import { TRANSLATIONS } from '../constants';
import { motion } from 'framer-motion';

export default function Home() {
  const [lang, setLang] = useState<'fr' | 'en' | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  if (!lang) {
    return (
      <div className="bg-slate-950 min-h-screen flex items-center justify-center relative overflow-hidden text-slate-100">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center z-10 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">
            Chris-Loic<span className="text-indigo-500">.</span>dev
          </h1>
          <p className="text-slate-400 mb-12 text-lg font-light tracking-wide uppercase">Choisissez votre langue / Choose your language</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setLang('fr')}
              className="group relative px-12 py-5 bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all hover:border-indigo-500/50 shadow-2xl active:scale-95"
            >
              <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors"></div>
              <span className="relative text-xl font-bold tracking-tight uppercase">Français</span>
            </button>
            
            <button 
              onClick={() => setLang('en')}
              className="group relative px-12 py-5 bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition-all hover:border-indigo-500/50 shadow-2xl active:scale-95"
            >
              <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors"></div>
              <span className="relative text-xl font-bold tracking-tight uppercase">English</span>
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-indigo-500/30">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')} 
            className="font-display font-bold text-xl tracking-tight flex items-center gap-1 group"
          >
            <span className="text-white group-hover:text-indigo-400 transition-colors">CL</span>
            <span className="text-indigo-500">.</span>
            <span className="text-white group-hover:text-indigo-400 transition-colors">dev</span>
          </button>
          
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-400 items-center">
            <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">{t.nav.home}</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">{t.nav.about}</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">{t.nav.projects}</button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 hover:bg-indigo-500 hover:text-white transition-all active:scale-95"
            >
              {t.nav.contact}
            </button>
            <button 
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="ml-4 text-[10px] font-bold border border-slate-700 rounded px-2 py-1 hover:border-indigo-500 transition-all text-indigo-400 hover:bg-indigo-500/10 active:scale-90"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero lang={lang} onNavigate={scrollToSection} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Contact 
          lang={lang}
          onContactClick={() => setIsContactOpen(true)} 
          onBookingClick={() => setIsBookingOpen(true)} 
        />
      </main>

      <ContactModal lang={lang} isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <BookingModal lang={lang} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
