import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  category: 'AI' | 'Web' | 'Mobile';
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon?: React.ReactNode;
  category: 'Tech' | 'Finance' | 'Soft' | 'Entrepreneurship' | 'Design';
}
