import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, BookOpen, Shield, Cpu, Database, Search, Filter } from 'lucide-react';
import { tawanaData } from '../data/tawanaData';

const SectionHeader = ({ title, subtitle, lang }) => (
  <div className={`mb-12 ${lang === 'fa' ? 'text-right' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-extrabold gradient-text mb-4 uppercase tracking-tight">{title}</h2>
    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">{subtitle}</p>
  </div>
);

const Portfolio = ({ lang }) => {
  const [filter, setFilter] = useState('all');

  const filteredPubs = filter === 'all'
    ? tawanaData.publications
    : tawanaData.publications.filter(p => p.type.toLowerCase().includes(filter));

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <SectionHeader
        title={lang === 'en' ? 'Knowledge Hub' : 'مرکز دانش'}
        subtitle={lang === 'en' ? 'RESEARCH & TECHNICAL REPOSITORIES' : 'پژوهش‌ها و مخازن فنی'}
        lang={lang}
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-16 border-b border-white/10 pb-4">
        {['all', 'article', 'software', 'report'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${filter === f ? 'bg-tech-cyan text-space-black' : 'hover:bg-white/5 text-gray-400'}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Research Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredPubs.map((pub, i) => (
            <motion.div
              key={pub.doi}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass p-10 flex flex-col justify-between group relative h-full bg-white/[0.02]"
            >
              <div className="absolute top-0 right-0 w-2 h-0 bg-tech-cyan transition-all duration-500 group-hover:h-full"></div>

              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-3">
                    <span className="text-[10px] font-mono text-tech-cyan bg-tech-cyan/10 px-2 py-1 uppercase">{pub.year}</span>
                    <span className="text-[10px] font-mono text-gray-500 border border-white/10 px-2 py-1 uppercase">{pub.type}</span>
                  </div>
                  {pub.url.includes('github') ? <Github size={18} className="text-gray-600" /> : <BookOpen size={18} className="text-gray-600" />}
                </div>

                <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight group-hover:text-tech-cyan transition-colors">
                  {pub.title}
                </h3>
                <p className="text-gray-400 font-light mb-8 leading-relaxed">
                  {pub.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Identifier</span>
                  <span className="text-xs font-mono text-gray-400">{pub.doi}</span>
                </div>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-tech-cyan hover:underline uppercase tracking-widest"
                >
                  {lang === 'en' ? 'Access' : 'دسترسی'} <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Skills / Tech Stack Section */}
      <div className="mt-40">
        <SectionHeader
          title={lang === 'en' ? 'Tech Matrix' : 'ماتریس فناوری'}
          subtitle={lang === 'en' ? 'TOOLS & METHODOLOGIES' : 'ابزارها و روش‌شناسی‌ها'}
          lang={lang}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {["Python", "PyTorch", "TensorFlow", "LangChain", "FastAPI", "OpenAI API", "Git", "Pandas", "Cybersecurity", "Data Analysis", "AI Ethics", "Prompt Engineering"].map((skill, i) => (
            <div key={i} className="glass p-4 text-center hover:bg-white/[0.05] transition-all cursor-default">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
