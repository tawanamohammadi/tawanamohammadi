import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Globe, Phone, ExternalLink, Github, MessageSquare } from 'lucide-react';
import { tawanaData } from '../data/tawanaData';

const SectionHeader = ({ title, subtitle, lang }) => (
  <div className={`mb-12 ${lang === 'fa' ? 'text-right' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-extrabold gradient-text mb-4 uppercase tracking-tight">{title}</h2>
    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">{subtitle}</p>
  </div>
);

const Contact = ({ lang }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <SectionHeader
        title={lang === 'en' ? 'Contact Terminal' : 'ترمینال تماس'}
        subtitle={lang === 'en' ? 'DIRECT COMMUNICATION CHANNELS' : 'راه‌های ارتباط مستقیم'}
        lang={lang}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact info */}
        <div>
          <div className="space-y-8">
            <div className="glass p-8 flex items-start gap-6 group hover:bg-white/[0.03] transition-all">
              <div className="p-4 glass bg-tech-cyan/10 text-tech-cyan transition-transform group-hover:scale-110">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Official Inquiry</p>
                <a href={`mailto:${tawanaData.contact.email}`} className="text-xl font-bold hover:text-tech-cyan transition-colors">{tawanaData.contact.email}</a>
              </div>
            </div>

            <div className="glass p-8 flex items-start gap-6 group hover:bg-white/[0.03] transition-all">
              <div className="p-4 glass bg-tech-magenta/10 text-tech-magenta transition-transform group-hover:scale-110">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Telegram Communities</p>
                <div className="flex flex-col gap-2">
                  <a href="https://t.me/panbehnet" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-tech-magenta transition-colors flex items-center justify-between">
                    PanbehNet Channel <ExternalLink size={14} />
                  </a>
                  <a href="https://t.me/tawanaclub" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-tech-magenta transition-colors flex items-center justify-between">
                    Tawana Club <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-8 flex items-start gap-6 group hover:bg-white/[0.03] transition-all">
              <div className="p-4 glass bg-white/5 text-gray-400 transition-transform group-hover:scale-110">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Global Location</p>
                <p className="text-xl font-bold">{tawanaData.contact.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestion / AI Chat UI Mockup */}
        <div className="glass p-10 relative overflow-hidden bg-white/[0.01]">
          <div className="absolute top-0 left-0 w-full h-1 bg-tech-cyan shadow-[0_0_10px_#00d9ff]"></div>

          <div className="mb-8">
            <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Initialize Contact</h3>
            <p className="text-xs font-mono text-gray-500">SYSTEM: STANDBY FOR INPUT</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[10px] font-mono text-gray-500 uppercase mb-2">Protocol: Identification</label>
              <input
                type="text"
                placeholder={lang === 'en' ? "Your Name" : "نام شما"}
                className="w-full bg-white/[0.03] border border-white/10 p-4 font-mono text-sm focus:border-tech-cyan focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono text-gray-500 uppercase mb-2">Protocol: Destination</label>
              <input
                type="email"
                placeholder={lang === 'en' ? "Your Email" : "ایمیل شما"}
                className="w-full bg-white/[0.03] border border-white/10 p-4 font-mono text-sm focus:border-tech-cyan focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono text-gray-500 uppercase mb-2">Protocol: Transmission</label>
              <textarea
                rows="4"
                placeholder={lang === 'en' ? "Your Message..." : "پیام شما..."}
                className="w-full bg-white/[0.03] border border-white/10 p-4 font-mono text-sm focus:border-tech-cyan focus:outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button className="tech-btn w-full group flex items-center justify-center gap-2">
              {lang === 'en' ? 'Execute Broadcast' : 'اجرای فرستادن'}
              <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-gray-600 uppercase tracking-widest">
            <span>Encrypted Connection Enabled</span>
            <span>Ref: TA-COMM-001</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
