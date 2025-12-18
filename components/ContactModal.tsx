import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { PROFILE, TRANSLATIONS } from '../constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'fr' | 'en';
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const t = TRANSLATIONS[lang].modals;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMailTo = () => { window.location.href = `mailto:${PROFILE.email}`; };
  const handleGmail = () => { window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`, '_blank'); };
  const handleOutlook = () => { window.open(`https://outlook.live.com/owa/?path=/mail/action/compose&to=${PROFILE.email}`, '_blank'); };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-md bg-slate-900 border border-indigo-500/30 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"><X size={20} /></button>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/20"><Mail className="text-indigo-400" size={32} /></div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.contact_title}</h3>
                <p className="text-slate-400 mb-8 text-sm">{t.contact_desc}</p>
                <div className="w-full space-y-3">
                  <button onClick={handleGmail} className="w-full flex items-center justify-between gap-3 bg-white hover:bg-slate-100 text-slate-900 px-6 py-4 rounded-2xl font-semibold transition-all group">
                    <div className="flex items-center gap-3"><img src="https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png" alt="Gmail" className="w-6 h-6" /><span>{t.gmail}</span></div>
                    <ExternalLink size={16} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
                  </button>
                  <button onClick={handleOutlook} className="w-full flex items-center justify-between gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-2xl font-semibold transition-all group">
                    <div className="flex items-center gap-3"><img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" alt="Outlook" className="w-6 h-6" /><span>{t.outlook}</span></div>
                    <ExternalLink size={16} className="text-indigo-300 group-hover:text-white transition-colors" />
                  </button>
                  <button onClick={handleMailTo} className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-white py-2 text-sm transition-colors"><Mail size={14} /><span>{t.default_mail}</span></button>
                  <div className="pt-4 flex items-center gap-4"><div className="h-px flex-1 bg-slate-800"></div><span className="text-xs font-mono text-slate-600 uppercase tracking-widest">{t.copy}</span><div className="h-px flex-1 bg-slate-800"></div></div>
                  <div className="relative group mt-2">
                    <input type="text" readOnly value={PROFILE.email} className="w-full bg-slate-800/50 border border-slate-700 text-slate-400 pl-4 pr-12 py-3 rounded-xl text-sm focus:outline-none font-mono" />
                    <button onClick={handleCopy} className="absolute inset-y-1 right-1 px-3 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition-colors">
                      {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};