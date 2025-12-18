import React from 'react';
import { Mail, Calendar } from 'lucide-react';
import { PROFILE, TRANSLATIONS } from '../constants';

interface ContactProps {
  onContactClick: () => void;
  onBookingClick: () => void;
  lang: 'fr' | 'en';
}

export const Contact: React.FC<ContactProps> = ({ onContactClick, onBookingClick, lang }) => {
  const t = TRANSLATIONS[lang].contact;
  return (
    <section id="contact" className="py-20 border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold font-display mb-6">{t.title}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          {t.description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onContactClick}
            className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full transition-colors border border-slate-700"
          >
            <Mail size={18} />
            {t.email_btn}
          </button>
          <button 
            onClick={onBookingClick}
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-colors shadow-lg shadow-indigo-500/20"
          >
            <Calendar size={18} />
            {t.call_btn}
          </button>
        </div>

        <div className="mt-20 text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name}. {t.rights}</p>
          <p className="mt-2">{t.tech_stack}</p>
        </div>
      </div>
    </section>
  );
};