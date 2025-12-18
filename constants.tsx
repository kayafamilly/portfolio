
import { Project, Skill } from './types';
import { Code, Smartphone, Rocket, Palette } from 'lucide-react';
import React from 'react';

export const TRANSLATIONS = {
  fr: {
    nav: { home: "Accueil", about: "À propos", projects: "Projets", contact: "Contact" },
    hero: {
      greeting: "Je suis",
      tagline: "De la Finance d'Entreprise à l'Intelligence Artificielle.",
      description: "Développeur Spécialisé en IA Agents / Intégrations & Low-code; Transformer tous vos projets en solutions déployées de A à Z.",
      cta_projects: "Voir mes projets",
      cta_contact: "Me contacter"
    },
    about: {
      title: "L'histoire de mon pivot",
      rigor_title: "Rigueur",
      rigor_desc: "Héritée de la finance, appliquée au code.",
      innovation_title: "Innovation",
      innovation_desc: "Créer des outils qui n'existent pas encore."
    },
    skills: {
      title: "Mon Arsenal Technique",
      subtitle: "La convergence entre la vision produit, le design et l'ingénierie.",
      expertise: "Expertise"
    },
    projects: {
      title: "Mes Projets",
      subtitle: "Une sélection de travaux récents et d'expérimentations.",
      filter_all: "Tous"
    },

    contact: {
      title: "Prêt à collaborer ?",
      description: "Que vous ayez besoin d'un agent IA complexe, d'une plateforme SaaS financière ou d'une application mobile, discutons de la manière dont je peux apporter de la valeur à votre projet.",
      email_btn: "Envoyer un Email",
      call_btn: "Réserver un appel",
      rights: "Tous droits réservés.",
      tech_stack: "Développé avec Next.js, Tailwind et Framer Motion."
    },
    modals: {
      contact_title: "Me Contacter",
      contact_desc: "Choisissez votre plateforme préférée pour m'envoyer un message.",
      gmail: "Ouvrir dans Gmail",
      outlook: "Ouvrir dans Outlook",
      default_mail: "Utiliser l'application par défaut",
      copy: "OU COPIER",
      booking_title: "Réserver un créneau",
      booking_subtitle: "Discutons de votre prochain projet",
      calendar_loading: "Chargement du calendrier...",
      sync_info: "Synchronisation automatique avec Google Calendar & Outlook après confirmation"
    }
  },
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
    hero: {
      greeting: "I am",
      tagline: "From Corporate Finance to Artificial Intelligence.",
      description: "Developer Specialized in AI Agents / Intégrations & Low-code; Transforming all your projects into fully deployed solutions.",
      cta_projects: "View my projects",
      cta_contact: "Contact me"
    },
    about: {
      title: "The story of my pivot",
      rigor_title: "Rigor",
      rigor_desc: "Inherited from finance, applied to code.",
      innovation_title: "Innovation",
      innovation_desc: "Creating tools that don't exist yet."
    },
    skills: {
      title: "My Technical Arsenal",
      subtitle: "The convergence of product vision, design, and engineering.",
      expertise: "Expertise"
    },
    projects: {
      title: "My Projects",
      subtitle: "A selection of recent works and experiments.",
      filter_all: "All"
    },

    contact: {
      title: "Ready to collaborate?",
      description: "Whether you need a complex AI agent, a financial SaaS platform, or a mobile app, let's discuss how I can bring value to your project.",
      email_btn: "Send Email",
      call_btn: "Book a call",
      rights: "All rights reserved.",
      tech_stack: "Built with Next.js, Tailwind, and Framer Motion."
    },
    modals: {
      contact_title: "Contact Me",
      contact_desc: "Choose your preferred platform to send me a message.",
      gmail: "Open in Gmail",
      outlook: "Open in Outlook",
      default_mail: "Use default mail app",
      copy: "OR COPY",
      booking_title: "Book a meeting",
      booking_subtitle: "Let's discuss your next project",
      calendar_loading: "Loading calendar...",
      sync_info: "Automatic synchronization with Google Calendar & Outlook after confirmation"
    }
  }
};

export const PROFILE = {
  name: "Chris-Loic Kaya-Kaya",
  profileImage: "/profil_pic_pro.png",
  koalendarUrl: "https://koalendar.com/e/rdv-en-visio-avec-chris-loic",
  email: "chrislo.kaya@outlook.com",
  social: {
    github: "https://github.com/kayafamilly",
    linkedin: "https://www.linkedin.com/in/chris-lo%C3%AFc-kaya-Kaya-859233a9/"
  },
  about: {
    fr: `Mon parcours est atypique, et c'est ma plus grande force. Diplômé d'un Master en Finance d'Entreprise, j'ai débuté ma carrière en tant que comptable. La rigueur, l'analyse de données et la logique financière font partie de mon ADN.\n\nCependant, ma soif de construire m'a poussé à devenir développeur autodidacte. Je me suis formé de manière autonome, en réalisant et en lançant mes propres projets de A à Z. Je ne me contente pas de coder ; je maîtrise la création complète d'un produit, du design au déploiement, en passant par le développement d'Agents IA et d'outils No-code.`,
    en: `My background is atypical, and that's my greatest strength. With a Master's degree in Corporate Finance, I started my career as an accountant. Rigor, data analysis, and financial logic are part of my DNA.\n\nHowever, my thirst for building pushed me to become a self-taught developer. I trained independently, creating and launching my own projects from A to Z. I don't just code; I master the complete creation of a product, from design to deployment, including the development of AI Agents and No-code tools.`
  }
};

export const PROJECTS: Record<'fr' | 'en', Project[]> = {
  fr: [
    { id: '1', title: 'Nice-to-meet-u', description: 'Site d\'échange linguistique pour pratiquer avec des natifs.', tags: ['React', 'WebRTC', 'Next.js'], imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000', link: 'https://www.nice-to-meet-u.com/', category: 'Web' },
    { id: '2', title: 'Rideshare', description: 'Application mobile de partage de trajet pour voyageurs en Asie.', tags: ['Flutter', 'Mobile', 'Travel'], imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000', link: 'https://www.my-rideshare.com/', category: 'Mobile' },
    { id: '3', title: 'VibeMobile', description: 'Plateforme IA pour transformer des idées en prototypes mobiles en 20min.', tags: ['AI', 'No-code', 'Prototyping'], imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000', category: 'AI' },
    { id: '4', title: 'Vocalia', description: 'Agent IA spécialisé dans la traduction vocale en temps réel via Bluetooth.', tags: ['AI Audio', 'Real-time', 'Translation'], imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000', category: 'AI' }
  ],
  en: [
    { id: '1', title: 'Nice-to-meet-u', description: 'Language exchange platform to practice with native speakers.', tags: ['React', 'WebRTC', 'Next.js'], imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000', link: 'https://www.nice-to-meet-u.com/', category: 'Web' },
    { id: '2', title: 'Rideshare', description: 'Mobile ridesharing app for travelers in Asia.', tags: ['Flutter', 'Mobile', 'Travel'], imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000', link: 'https://www.my-rideshare.com/', category: 'Mobile' },
    { id: '3', title: 'VibeMobile', description: 'AI platform to transform ideas into mobile prototypes in 20min.', tags: ['AI', 'No-code', 'Prototyping'], imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000', category: 'AI' },
    { id: '4', title: 'Vocalia', description: 'AI Agent specialized in real-time voice translation via Bluetooth.', tags: ['AI Audio', 'Real-time', 'Translation'], imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000', category: 'AI' }
  ]
};

export const SKILLS: Record<'fr' | 'en', Skill[]> = {
  fr: [
    { name: 'Web App & Software (AI & No-code)', level: 95, category: 'Tech', icon: <Code size={20} /> },
    { name: 'Mobile App (Flutter)', level: 90, category: 'Tech', icon: <Smartphone size={20} /> },
    { name: 'Design (Google Stitch)', level: 85, category: 'Design', icon: <Palette size={20} /> },
    { name: 'Entrepreunariat (Gestion & Déploiements)', level: 100, category: 'Entrepreneurship', icon: <Rocket size={20} /> },
  ],
  en: [
    { name: 'Web App & Software (AI & No-code)', level: 95, category: 'Tech', icon: <Code size={20} /> },
    { name: 'Mobile App (Flutter)', level: 90, category: 'Tech', icon: <Smartphone size={20} /> },
    { name: 'Design (Google Stitch)', level: 85, category: 'Design', icon: <Palette size={20} /> },
    { name: 'Entrepreneurship (Management & Deployments)', level: 100, category: 'Entrepreneurship', icon: <Rocket size={20} /> },
  ]
};


