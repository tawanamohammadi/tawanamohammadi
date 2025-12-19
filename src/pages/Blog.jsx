import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const SectionHeader = ({ title, subtitle, lang }) => (
  <div className={`mb-12 ${lang === 'fa' ? 'text-right' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-extrabold gradient-text mb-4 uppercase tracking-tight">{title}</h2>
    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">{subtitle}</p>
  </div>
);

const Blog = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const posts = [
    {
      slug: 'ai-ethics-framework',
      title: lang === 'en' ? 'Building an Ethical AI Framework' : 'ساخت چارچوب اخلاقی برای هوش مصنوعی',
      excerpt: lang === 'en'
        ? 'Exploring the key principles and practices for developing ethical AI systems.'
        : 'بررسی اصول کلیدی و شیوه‌های توسعه سیستم‌های هوش مصنوعی اخلاقی.',
      category: 'AI Ethics',
      date: '2025-12-01',
      readTime: '8 min'
    },
    {
      slug: 'data-transparency-importance',
      title: lang === 'en' ? 'The Importance of Data Transparency' : 'اهمیت شفافیت داده‌ها',
      excerpt: lang === 'en'
        ? 'Why transparent data practices are essential for building trust in AI systems.'
        : 'چرا شیوه‌های شفاف داده برای ایجاد اعتماد در سیستم‌های هوش مصنوعی ضروری هستند.',
      category: 'Data Strategy',
      date: '2025-11-28',
      readTime: '6 min'
    },
    {
      slug: 'personal-journey-ai',
      title: lang === 'en' ? 'My Journey in AI Research' : 'سفر من در پژوهش هوش مصنوعی',
      excerpt: lang === 'en'
        ? 'Reflections on over a decade of working in AI research and education.'
        : 'تاملاتی در بیش از یک دهه فعالیت در پژوهش و آموزش هوش مصنوعی.',
      category: 'Personal',
      date: '2025-11-25',
      readTime: '5 min'
    }
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <SectionHeader
        title={lang === 'en' ? 'Intelligence Stream' : 'جریان هوشمندی'}
        subtitle={lang === 'en' ? 'THOUGHTS, ARTICLES & INSIGHTS' : 'اندیشه‌ها، مقالات و دیدگاه‌ها'}
        lang={lang}
      />

      {/* Search Bar */}
      <div className="max-w-xl mb-16">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-tech-cyan transition-colors" size={20} />
          <input
            type="text"
            placeholder={lang === 'en' ? "Search articles..." : "جستجوی مقالات..."}
            className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 font-mono text-sm focus:border-tech-cyan focus:outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass overflow-hidden flex flex-col group h-full bg-white/[0.01]"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-tech-cyan bg-tech-cyan/10 px-2 py-1 uppercase tracking-widest">{post.category}</span>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500 uppercase">
                    <Calendar size={12} /> {post.date}
                  </div>
                </div>

                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-tech-cyan transition-colors leading-tight">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-400 font-light text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500 uppercase">
                    <Clock size={12} /> {post.readTime}
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-[10px] font-mono text-tech-cyan uppercase tracking-widest group"
                  >
                    Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* External Platforms */}
      <div className="mt-32 p-12 glass text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-tech-magenta/5 blur-3xl rounded-full"></div>
        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight italic">
          {lang === 'en' ? 'Extended Scientific Discourse' : 'ادامه گفتگوهای علمی'}
        </h3>
        <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">
          {lang === 'en'
            ? "I actively publish detailed research papers and technical insights on Medium and Substack. Join the community for regular updates."
            : "من به طور فعال مقالات پژوهشی دقیق و دیدگاه‌های فنی را در مدیوم و ساب‌استک منتشر می‌کنم. برای به‌روزرسانی‌های منظم به انجمن بپیوندید."}
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://tawanamohammadi.medium.com" target="_blank" rel="noopener noreferrer" className="tech-btn text-[10px]">Medium</a>
          <a href="https://tawanamohammadi.substack.com" target="_blank" rel="noopener noreferrer" className="tech-btn text-[10px]">Substack</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
