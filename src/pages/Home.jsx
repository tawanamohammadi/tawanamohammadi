import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Cpu, Globe, Mail, Code, ExternalLink, Shield, Database } from 'lucide-react';
import { tawanaData } from '../data/tawanaData';

const SectionHeader = ({ title, subtitle, lang }) => (
  <div className={`mb-12 ${lang === 'fa' ? 'text-right' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-extrabold gradient-text mb-4 uppercase tracking-tight">{title}</h2>
    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">{subtitle}</p>
  </div>
);

const Home = ({ lang }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center py-20 relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-3 py-1 mb-6 glass border border-tech-cyan/30">
            <span className="text-tech-cyan text-[10px] font-mono tracking-widest uppercase">
              {lang === 'en' ? 'Intelligence Systems • 2025' : 'سیستم‌های هوشمند • ۲۰۲۵'}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter">
            {tawanaData.name[lang]}
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">
            {tawanaData.titles[lang].map((title, i) => (
              <span key={i} className="text-xl md:text-2xl text-gray-400 font-light italic">
                {title} {i < tawanaData.titles[lang].length - 1 ? '•' : ''}
              </span>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-2xl leading-relaxed">
            {tawanaData.bio[lang]}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="tech-btn group flex items-center gap-2">
              {lang === 'en' ? 'Explore Research' : 'کاوش در پژوهش'}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-3 rounded-none glass border-white/10 hover:border-white/20 transition-all font-mono text-xs uppercase tracking-widest">
              {lang === 'en' ? 'Contact Terminal' : 'ترمینال تماس'}
            </button>
          </div>
        </motion.div>

        {/* Floating Abstract Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="w-[500px] h-[500px] glass rounded-full opacity-10 blur-3xl bg-tech-cyan"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="w-80 h-80 border border-tech-cyan/20 rounded-full flex items-center justify-center"
            >
              <div className="w-60 h-60 border border-tech-magenta/20 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-tech-cyan rounded-full shadow-[0_0_30px_#00d9ff]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-20">
        <div className="glass p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tech-cyan to-transparent"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight italic">
              "{tawanaData.philosophy[lang]}"
            </h3>
            <div className="h-[2px] w-20 bg-tech-cyan mx-auto mb-6"></div>
            <p className="font-mono text-tech-cyan uppercase tracking-[0.3em] text-xs">
              {tawanaData.motto[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Research - SpaceX Style Grid */}
      <section className="py-20">
        <SectionHeader
          title={lang === 'en' ? 'Scientific Matrix' : 'ماتریس علمی'}
          subtitle={lang === 'en' ? 'PUBLICATIONS & PEER-REVIEWED WORKS' : 'انتشارات و آثار داوری شده'}
          lang={lang}
        />

        <div className="research-grid">
          {tawanaData.publications.map((pub, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-8 research-card flex flex-col justify-between h-full bg-white/[0.02]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono text-tech-cyan border border-tech-cyan/30 px-2 py-1 uppercase">
                    {pub.year}
                  </span>
                  <BookOpen size={20} className="text-gray-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 leading-snug">{pub.title}</h3>
                <p className="text-sm text-gray-400 mb-6 font-light">{pub.description}</p>
              </div>

              <div className="border-t border-white/5 pt-6 mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500">DOI: {pub.doi}</span>
                  <a href={pub.url} target="_blank" rel="noopener noreferrer" className="p-2 glass hover:bg-tech-cyan hover:text-space-black transition-all rounded-full">
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research Interests Matrix */}
      <section className="py-20">
        <SectionHeader
          title={lang === 'en' ? 'Neural Domains' : 'دامنه‌های عصبی'}
          subtitle={lang === 'en' ? 'CORE RESEARCH AREAS' : 'حوزه‌های اصلی پژوهش'}
          lang={lang}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tawanaData.researchInterests.map((interest, i) => (
            <div key={i} className="glass p-8 border-l-2 border-l-tech-cyan hover:bg-tech-cyan/5 transition-all cursor-default">
              <Cpu className="text-tech-cyan mb-4" size={24} />
              <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">{interest[lang]}</h3>
              <div className="w-12 h-[1px] bg-white/10"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Intelligence Hub (Data Grid) */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={lang === 'fa' ? 'order-2' : ''}>
            <SectionHeader
              title={lang === 'en' ? 'The Hub' : 'مرکز فرادهی'}
              subtitle={lang === 'en' ? 'GLOBAL CONNECTIVITY' : 'اتصال جهانی'}
              lang={lang}
            />
            <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
              {lang === 'en'
                ? "Connecting research across global platforms. My goal is to make AI systems transparent and accessible to everyone."
                : "پیوند پژوهش‌ها در بسترهای جهانی. هدف من شفاف‌سازی سیستم‌های هوش مصنوعی و دسترسی‌پذیر کردن آن‌ها برای همگان است."}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tawanaData.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-4 text-center hover:border-tech-cyan transition-all group"
                >
                  <span className="text-[10px] font-mono text-gray-500 group-hover:text-tech-cyan uppercase">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="glass p-1 aspect-square md:aspect-auto h-[400px] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-tech-cyan/10 to-transparent"></div>
            <div className="text-center">
              <Globe className="mx-auto text-tech-cyan mb-6" size={80} />
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Live Network Status: Online</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
