import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Terminal, ArrowRight } from 'lucide-react';
import { PROFILE, TRANSLATIONS } from '../constants';

interface AboutProps {
  lang: 'fr' | 'en';
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].about;
  const content = PROFILE.about[lang].split('\n\n');
  
  return (
    <section id="about" className="py-24 bg-slate-900/50 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="w-full md:w-1/2 relative">
             <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50 backdrop-blur-sm p-6 group">
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                    <div className="grid grid-cols-4 gap-4 w-full h-full p-4 font-mono text-xs text-green-800">
                        {Array.from({length: 40}).map((_, i) => (
                            <div key={i}>{Math.floor(Math.random() * 10000).toFixed(2)}</div>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 bg-slate-700 rounded-xl flex items-center justify-center border border-slate-600">
                                <Calculator className="text-slate-400" size={32} />
                            </div>
                            <span className="text-xs font-mono text-slate-500 uppercase">Finance</span>
                        </div>
                        <ArrowRight className="text-indigo-500 animate-pulse" size={32} />
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 bg-indigo-900/30 rounded-xl flex items-center justify-center border border-indigo-500 shadow-lg shadow-indigo-500/20">
                                <Terminal className="text-indigo-400" size={32} />
                            </div>
                            <span className="text-xs font-mono text-indigo-400 uppercase">Dev</span>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {t.title.split('mon')[0]} <span className="text-indigo-400">{lang === 'fr' ? 'mon pivot' : 'my pivot'}</span>
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                <p>{content[0]}</p>
                <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent my-4"></div>
                <p>{content[1]}</p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-emerald-500">
                    <h3 className="font-bold text-white mb-1">{t.rigor_title}</h3>
                    <p className="text-sm text-slate-400">{t.rigor_desc}</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                    <h3 className="font-bold text-white mb-1">{t.innovation_title}</h3>
                    <p className="text-sm text-slate-400">{t.innovation_desc}</p>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};