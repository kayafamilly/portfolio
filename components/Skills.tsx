import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, TRANSLATIONS } from '../constants';
import { Skill } from '../types';

interface SkillsProps {
  lang: 'fr' | 'en';
}

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].skills;
  const skillsList = SKILLS[lang];

  return (
    <section id="skills" className="py-20 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{t.title}</h2>
        <p className="text-slate-400">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {skillsList.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} expertiseLabel={t.expertise} />
        ))}
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ skill: Skill; index: number; expertiseLabel: string }> = ({ skill, index, expertiseLabel }) => {
  const isGreen = skill.category === 'Entrepreneurship' || skill.category === 'Finance';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`bg-slate-800/50 border border-slate-700 p-6 rounded-xl hover:border-opacity-100 transition-colors group flex flex-col justify-between ${
        isGreen ? 'hover:border-emerald-500/50' : 'hover:border-indigo-500/50'
      }`}
    >
      <div>
        <div className="flex items-start gap-4 mb-6 min-h-[64px]">
          <div className={`p-3 rounded-lg flex-shrink-0 ${isGreen ? 'bg-emerald-900/30 text-emerald-400' : 'bg-indigo-900/30 text-indigo-400'}`}>
              {skill.icon}
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-white text-lg leading-snug">{skill.name}</h3>
            <span className="text-xs text-slate-500 uppercase tracking-wider mt-1">{skill.category}</span>
          </div>
        </div>
        
        <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono mb-1">
                <span className="text-slate-500">{expertiseLabel}</span>
                <span className={isGreen ? 'text-emerald-400' : 'text-indigo-400'}>{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-full rounded-full ${isGreen ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                />
            </div>
        </div>
      </div>
    </motion.div>
  );
};