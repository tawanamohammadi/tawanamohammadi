import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Aurora Background Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <img
            src="https://avatars.githubusercontent.com/u/141659359?v=4"
            alt="Tawana Mohammadi"
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-primary/30 shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Tawana Mohammadi
          </h1>
          <p className="text-xl md:text-2xl text-[#8b949e] mb-4">
            AI Researcher • Data Strategist • Educator
          </p>
          <p className="text-lg text-[#8b949e] mb-8 italic">
            "Where ethics and intelligence meet."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/portfolio"
              className="px-8 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-medium transition-all hover:scale-105"
            >
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg font-medium transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://orcid.org/0009-0005-6825-6728" target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-primary transition-colors">
              <span className="sr-only">ORCID</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.553 0 .999.447.999.999s-.446.999-.999.999a.999.999 0 1 1 0-1.998zm0 3.996h-2v11.248h2V8.374zM12 19.622c-2.384 0-3.92-1.565-3.92-3.92 0-2.354 1.536-3.92 3.92-3.92s3.92 1.566 3.92 3.92c0 2.355-1.536 3.92-3.92 3.92z"/>
              </svg>
            </a>
            <a href="https://scholar.google.com/citations?user=VP8O0a4AAAAJ" target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-primary transition-colors">
              <span className="sr-only">Google Scholar</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 24l-12-6v-6.914l12 6.094 12-6.094v6.914zM12 0L0 6l12 6 10.156-5.078L12 0z"/>
              </svg>
            </a>
            <a href="https://github.com/tawanamohammadi" target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="fade-in-section py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI and Human Pain: From Pixels to Perception',
                description: 'Human-AI collaboration case study using ChatGPT-5 for lumbar spine MRI interpretation.',
                link: 'https://doi.org/10.5281/ZENODO.17451336',
              },
              {
                title: 'Internet Censorship in Iran',
                description: 'Comprehensive analysis of internet censorship mechanisms in Iran (2005-2025).',
                link: 'https://doi.org/10.5281/zenodo.17411924',
              },
              {
                title: 'X-Analyzer: Ethical Data Parser',
                description: 'Open-source CLI framework for transparent and ethical analysis of public X/Twitter data.',
                link: 'https://doi.org/10.5281/zenodo.17513863',
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg hover:border-primary transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#8b949e] text-sm mb-4">{project.description}</p>
                <span className="text-primary text-sm font-medium">View Publication →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="fade-in-section py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Research Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '🤖',
                title: 'AI Ethics & Governance',
                description: 'Ethical frameworks for AI systems, algorithmic accountability, and responsible AI deployment.',
              },
              {
                icon: '📊',
                title: 'Data Transparency & Strategy',
                description: 'Open data initiatives, privacy-preserving analytics, and transparency reporting standards.',
              },
              {
                icon: '🧠',
                title: 'Prompt Engineering & AI Literacy',
                description: 'Educational frameworks, ChatGPT system analysis, and human-AI interaction design.',
              },
              {
                icon: '🔒',
                title: 'Cybersecurity & Digital Rights',
                description: 'Internet censorship research, digital freedom advocacy, and privacy protection.',
              },
            ].map((focus, index) => (
              <div key={index} className="p-6 bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg">
                <div className="text-4xl mb-4">{focus.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-3">{focus.title}</h3>
                <p className="text-[#8b949e]">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fade-in-section py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Collaborate</h2>
          <p className="text-xl text-[#8b949e] mb-8">
            Open to collaboration on AI ethics research, data governance, educational content, and open source projects.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-medium transition-all hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
