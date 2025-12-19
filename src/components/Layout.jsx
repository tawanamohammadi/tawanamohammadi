import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Search, Command } from 'lucide-react';
import { tawanaData } from '../data/tawanaData';

const Navbar = ({ lang, setLang }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: lang === 'en' ? 'Home' : 'خانه', path: '/' },
        { name: lang === 'en' ? 'Research' : 'پژوهش', path: '/portfolio' },
        { name: lang === 'en' ? 'About' : 'درباره من', path: '/about' },
        { name: lang === 'en' ? 'Blog' : 'وبلاگ', path: '/blog' },
        { name: lang === 'en' ? 'Contact' : 'تماس', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full border border-tech-cyan flex items-center justify-center group-hover:bg-tech-cyan transition-all duration-300">
                        <span className="text-tech-cyan group-hover:text-space-black font-bold text-xl">T</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-bold tracking-tight text-lg leading-none">TAWANA</span>
                        <span className="text-tech-cyan text-[10px] uppercase tracking-widest font-mono">Neural Network</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-tech-cyan ${location.pathname === link.path ? 'text-tech-cyan' : 'text-gray-400'}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 pl-4 border-l border-white/10">
                        <button
                            onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
                            className="flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-white transition-colors"
                        >
                            <Globe size={14} />
                            {lang === 'en' ? 'FA' : 'EN'}
                        </button>
                        <button className="p-2 text-gray-400 hover:text-tech-cyan transition-colors">
                            <Command size={18} />
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full glass p-6 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-lg font-bold">
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Footer = ({ lang }) => {
    return (
        <footer className="w-full border-t border-white/10 py-12 mt-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-xl font-bold mb-4 gradient-text">Tawana Mohammadi</h3>
                    <p className="text-gray-400 text-sm max-w-xs">{tawanaData.bio[lang]}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-mono uppercase text-tech-cyan tracking-widest mb-2">Connect</h4>
                    {tawanaData.socials.slice(0, 4).map(s => (
                        <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                            {s.name}
                        </a>
                    ))}
                </div>
                <div>
                    <h4 className="text-xs font-mono uppercase text-tech-cyan tracking-widest mb-2">Location</h4>
                    <p className="text-gray-400 text-sm">{tawanaData.contact.location}</p>
                    <p className="text-gray-400 text-sm mt-1">{tawanaData.contact.email}</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                <span>© 2025 ALL RIGHTS RESERVED - TAWANA MOHAMMADI</span>
                <span>ETHICS IN INTELLIGENCE • TRANSPARENCY IN DATA</span>
            </div>
        </footer>
    );
};

export default function Layout({ children, lang, setLang }) {
    return (
        <div className="min-h-screen flex flex-col" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
            <div className="neural-bg">
                <div className="neural-grid"></div>
            </div>
            <Navbar lang={lang} setLang={setLang} />
            <main className="flex-grow pt-24">
                {children}
            </main>
            <Footer lang={lang} />
        </div>
    );
}
