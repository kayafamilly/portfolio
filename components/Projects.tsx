import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, TRANSLATIONS } from '../constants';
import { ExternalLink, Tag } from 'lucide-react';

interface ProjectsProps {
  lang: 'fr' | 'en';
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].projects;
  const projectList = PROJECTS[lang];
  const [filter, setFilter] = useState<'All' | 'AI' | 'Web' | 'Mobile'>('All');

  const filteredProjects = filter === 'All' 
    ? projectList 
    : projectList.filter(p => p.category === filter);

  const categories = [
    { id: 'All', label: t.filter_all },
    { id: 'AI', label: 'AI' },
    { id: 'Web', label: 'Web' },
    { id: 'Mobile', label: 'Mobile' }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">{t.title}</h2>
                <p className="text-slate-400">{t.subtitle}</p>
            </div>
            
            <div className="flex gap-2 bg-slate-800 p-1 rounded-lg">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id as any)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                            filter === cat.id 
                            ? 'bg-indigo-600 text-white shadow-lg' 
                            : 'text-slate-400 hover:text-white hover:bg-slate-700'
                        }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={project.id}
                        className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:shadow-indigo-500/10"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-indigo-400 text-xs font-bold tracking-wider uppercase border border-indigo-500/30 px-2 py-1 rounded bg-indigo-500/10">
                                    {project.category}
                                </span>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-slate-300 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs text-slate-400 flex items-center gap-1">
                                        <Tag size={10} /> {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};