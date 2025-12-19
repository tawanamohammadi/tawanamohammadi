import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Building, Calendar, MapPin } from 'lucide-react';
import { tawanaData } from '../data/tawanaData';

const SectionHeader = ({ title, subtitle, lang }) => (
  <div className={`mb-12 ${lang === 'fa' ? 'text-right' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-extrabold gradient-text mb-4 uppercase tracking-tight">{title}</h2>
    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">{subtitle}</p>
  </div>
);

const About = ({ lang }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Biography */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <SectionHeader
            title={lang === 'en' ? 'The Visionary' : 'داستان من'}
            subtitle={lang === 'en' ? 'BIOGRAPHY & MISSION' : 'زندگی‌نامه و مأموریت'}
            lang={lang}
          />
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
            <p>{tawanaData.bio[lang]}</p>
            <p>
              {lang === 'en'
                ? "With over 10 years of experience in AI systems, cybersecurity, and education, I explore how algorithms and human values can coexist in transparent and ethical digital ecosystems."
                : "با بیش از ۱۰ سال تجربه در سیستم‌های هوش مصنوعی، امنیت سایبری و آموزش، من در حال بررسی این هستم که چگونه الگوریتم‌ها و ارزش‌های انسانی می‌توانند در اکوسیستم‌های دیجیتال شفاف و اخلاقی در کنار هم قرار گیرند."}
            </p>
            <p>
              {lang === 'en'
                ? "I believe that true progress in AI lies not in power, but in empathy, accessibility, and accountability. Through responsible design and education, I aim to make AI a bridge, not a barrier."
                : "من معتقدم پیشرفت واقعی در هوش مصنوعی نه در قدرت، بلکه در همدلی، دسترسی و پاسخگویی نهفته است. از طریق طراحی مسئولانه و آموزش، هدف من این است که هوش مصنوعی را به یک پل تبدیل کنم، نه یک مانع."}
            </p>
          </div>
        </motion.div>

        {/* Profile Stats / Data Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-12 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-tech-cyan/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-2xl glass border border-tech-cyan flex items-center justify-center">
                <span className="text-4xl font-bold text-tech-cyan">TM</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">{tawanaData.name[lang]}</h3>
                <p className="text-tech-cyan font-mono text-xs uppercase tracking-widest">{tawanaData.contact.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="glass p-4 border-l border-tech-cyan bg-white/[0.02]">
                <p className="text-[10px] uppercase font-mono text-gray-500 mb-1">Education</p>
                <p className="text-sm font-semibold">{tawanaData.education[0].institution}</p>
              </div>
              <div className="glass p-4 border-l border-tech-magenta bg-white/[0.02]">
                <p className="text-[10px] uppercase font-mono text-gray-500 mb-1">Focus</p>
                <p className="text-sm font-semibold">{tawanaData.education[0].focus}</p>
              </div>
              <div className="glass p-4 border-l border-white/20 bg-white/[0.02]">
                <p className="text-[10px] uppercase font-mono text-gray-500 mb-1">Affiliation</p>
                <p className="text-sm font-semibold">{tawanaData.affiliations[0].name}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="mt-40">
        <SectionHeader
          title={lang === 'en' ? 'Academic Odyssey' : 'سفر آکادمیک'}
          subtitle={lang === 'en' ? 'TIMELINE & MILESTONES' : 'خط زمانی و دستاوردها'}
          lang={lang}
        />

        <div className="space-y-12">
          {/* Education Timeline */}
          <div className="relative border-l border-white/10 pl-8 ml-4">
            <div className="absolute top-0 -left-[5px] w-2 h-2 bg-tech-cyan rounded-full"></div>
            <div className="mb-2 flex items-center gap-2 text-tech-cyan font-mono text-xs">
              <Calendar size={14} />
              <span>{tawanaData.education[0].period}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
              <GraduationCap size={20} className="text-gray-400" />
              {tawanaData.education[0].degree}
            </h3>
            <p className="text-gray-400 font-light mb-1">{tawanaData.education[0].institution}</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest flex items-center gap-1">
              <MapPin size={10} /> {tawanaData.education[0].location}
            </p>
          </div>

          {/* Affiliations Timeline */}
          {tawanaData.affiliations.map((aff, i) => (
            <div key={i} className="relative border-l border-white/10 pl-8 ml-4">
              <div className="absolute top-0 -left-[5px] w-2 h-2 bg-tech-magenta rounded-full"></div>
              <div className="mb-2 flex items-center gap-2 text-tech-magenta font-mono text-xs">
                <Building size={14} />
                <span>{aff.period || 'COLLABORATION'}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{aff.name}</h3>
              <p className="text-gray-400 font-light">{aff.role}</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{aff.focus || aff.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
