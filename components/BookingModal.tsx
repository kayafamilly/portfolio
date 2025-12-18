import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Loader2 } from 'lucide-react';
import { PROFILE, TRANSLATIONS } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'fr' | 'en';
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, lang }) => {
  const t = TRANSLATIONS[lang].modals;
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full h-full sm:h-[90vh] max-w-5xl bg-slate-900 sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-indigo-500/20">
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg"><Calendar className="text-indigo-400" size={20} /></div>
                <div><h3 className="font-bold text-white leading-none">{t.booking_title}</h3><p className="text-xs text-slate-500 mt-1">{t.booking_subtitle}</p></div>
              </div>
              <button onClick={onClose} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"><X size={24} /></button>
            </div>
            <div className="flex-1 bg-white relative">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-0">
                <div className="flex flex-col items-center gap-3"><Loader2 className="animate-spin text-indigo-500" size={32} /><p className="text-slate-500 text-sm">{t.calendar_loading}</p></div>
              </div>
              <iframe src={`${PROFILE.koalendarUrl}?embed=true`} width="100%" height="100%" frameBorder="0" className="relative z-10 w-full h-full" title="Koalendar Chris-Loic"></iframe>
            </div>
            <div className="px-6 py-3 bg-slate-950/50 border-t border-slate-800 text-[10px] text-slate-500 text-center uppercase tracking-widest">{t.sync_info}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};