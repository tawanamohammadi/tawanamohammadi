import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Tag } from 'lucide-react';

const BlogPost = ({ lang }) => {
  const { slug } = useParams();

  // In a real app, you'd fetch this based on slug
  const post = {
    title: lang === 'en' ? 'Building an Ethical AI Framework' : 'ساخت چارچوب اخلاقی برای هوش مصنوعی',
    date: '2025-12-01',
    readTime: '8 min',
    category: 'AI Ethics',
    content: lang === 'en'
      ? "Artificial intelligence is no longer a futuristic concept; it is an integral part of our daily lives. From the algorithms that curate our social media feeds to the systems used in medical diagnosis, AI is everywhere. However, as these systems become more autonomous and influential, the need for a robust ethical framework becomes paramount..."
      : "هوش مصنوعی دیگر یک مفهوم آینده‌نگر نیست؛ بلکه بخش جدایی‌ناپذیری از زندگی روزمره ما است. از الگوریتم‌هایی که فیدهای شبکه‌های اجتماعی ما را مدیریت می‌کنند تا سیستم‌هایی که در تشخیص پزشکی استفاده می‌شوند، هوش مصنوعی همه جا هست. با این حال، با خودمختارتر و تأثیرگذارتر شدن این سیستم‌ها، نیاز به یک چارچوب اخلاقی قوی اهمیت حیاتی پیدا می‌کند..."
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-tech-cyan transition-colors uppercase tracking-widest mb-12"
      >
        <ArrowLeft size={14} /> {lang === 'en' ? 'Back to intelligence stream' : 'بازگشت به جریان هوشمندی'}
      </Link>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-mono text-tech-cyan bg-tech-cyan/10 px-2 py-1 uppercase tracking-widest">{post.category}</span>
            <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500 uppercase">
              <Calendar size={12} /> {post.date}
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500 uppercase">
              <Clock size={12} /> {post.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tighter">
            {post.title}
          </h1>

          <div className="h-[1px] w-full bg-white/10"></div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed font-light">
          <p className="mb-6">{post.content}</p>
          <div className="glass p-10 my-12 italic border-l-4 border-l-tech-cyan bg-white/[0.01]">
            {lang === 'en'
              ? "The challenge of AI ethics is not just technical, but deeply philosophical and human-centric."
              : "چالش اخلاق در هوش مصنوعی نه تنها فنی، بلکه عمیقاً فلسفی و انسان‌محور است."}
          </div>
          <p>...</p>
        </div>

        <footer className="mt-20 pt-12 border-t border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full glass border border-tech-cyan flex items-center justify-center font-bold text-tech-cyan">T</div>
            <div>
              <p className="text-xs font-bold uppercase tracking-tight">Tawana Mohammadi</p>
              <p className="text-[10px] font-mono text-gray-500 uppercase">AI Researcher</p>
            </div>
          </div>
          <button className="p-3 glass hover:bg-white/5 transition-all text-gray-400">
            <Share2 size={18} />
          </button>
        </footer>
      </motion.article>
    </div>
  );
};

export default BlogPost;
