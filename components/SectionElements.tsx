import React from 'react';

export const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = 'mb-2' }) => (
  <h2 className={`text-4xl font-bold text-white text-center ${className}`}>{children}</h2>
);

export const SectionDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-lg text-slate-400 mb-12 text-center max-w-3xl mx-auto">{children}</p>
);
