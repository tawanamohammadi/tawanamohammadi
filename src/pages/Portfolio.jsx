import React, { useEffect } from 'react';

const LinkCard = ({ title, url, description }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block p-6 bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg hover:border-primary transition-all hover:-translate-y-1"
  >
    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
      {title}
      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </h3>
    <p className="text-[#8b949e] text-sm">{description}</p>
  </a>
);

const CategorySection = ({ title, links, icon }) => (
  <section className="mb-12 fade-in-section">
    <h2 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-3">
      <span className="text-3xl">{icon}</span>
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {links.map((link, index) => (
        <LinkCard key={index} {...link} />
      ))}
    </div>
  </section>
);

const Portfolio = () => {
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

  const personalLinks = [
    { title: 'Tawana Online', url: 'https://tawana.online/', description: 'Official website and research hub' },
    { title: 'About.me', url: 'https://about.me/tawanamohammadi', description: 'Personal profile and links' },
  ];

  const academicLinks = [
    { title: 'ORCID', url: 'https://orcid.org/0009-0005-6825-6728', description: 'Academic identifier and publications' },
    { title: 'Google Scholar', url: 'https://scholar.google.com/citations?hl=en&user=VP8O0a4AAAAJ', description: 'Research citations and publications' },
    { title: 'Wikidata', url: 'https://www.wikidata.org/wiki/Q127608409', description: 'Structured knowledge base entry' },
    { title: 'Wikipedia', url: 'https://fa.wikipedia.org/wiki/توانا_محمدی', description: 'Persian Wikipedia article' },
  ];

  const githubProjects = [
    { title: 'Main Profile', url: 'https://github.com/tawanamohammadi', description: 'Primary GitHub account and repositories' },
    { title: 'TawanaX-Agent', url: 'https://github.com/tawanamohammadi/TawanaX-Agent', description: 'AI agent framework project' },
    { title: 'AI Ethics and Digital Governance Telegram', url: 'https://github.com/tawanamohammadi/ai-ethics-and-digital-governance-iran-telegram', description: 'Research and analysis on Telegram platform' },
  ];

  const huggingFaceProfiles = [
    { title: 'Hugging Face Profile', url: 'https://huggingface.co/tawanamohammadi', description: 'ML models and datasets' },
    { title: 'Ethical AI Framework', url: 'https://huggingface.co/tawanamohammadi/Ethical-AI-Framework', description: 'Framework for ethical AI development' },
  ];

  const otherPlatforms = [
    { title: 'Kaggle Profile', url: 'https://www.kaggle.com/tawanamohammadi', description: 'Data science competitions and notebooks' },
  ];

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16 fade-in-section">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            Explore my work across various platforms, from academic publications to open-source projects and research initiatives.
          </p>
        </section>

        {/* Personal Links */}
        <CategorySection title="Personal Links" links={personalLinks} icon="🌐" />

        {/* Academic Links */}
        <CategorySection title="Academic Links" links={academicLinks} icon="🎓" />

        {/* GitHub Projects */}
        <CategorySection title="GitHub Projects" links={githubProjects} icon="💻" />

        {/* Hugging Face */}
        <CategorySection title="Hugging Face" links={huggingFaceProfiles} icon="🤗" />

        {/* Other Platforms */}
        <CategorySection title="Other Platforms" links={otherPlatforms} icon="📊" />

        {/* Featured Publications */}
        <section className="mb-16 fade-in-section">
          <h2 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-3">
            <span className="text-3xl">📚</span>
            Featured Publications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg">
              <div className="text-xs text-primary font-semibold mb-2">JOURNAL ARTICLE • 2025</div>
              <h3 className="text-xl font-semibold mb-3">AI and Human Pain: From Pixels to Perception</h3>
              <p className="text-[#8b949e] text-sm mb-4">
                Human-AI collaboration case study using ChatGPT-5 for lumbar spine MRI interpretation, demonstrating AI diagnostic capabilities in radiology and pain management.
              </p>
              <a href="https://doi.org/10.5281/ZENODO.17451336" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium">
                View Publication
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="p-6 bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg">
              <div className="text-xs text-primary font-semibold mb-2">REPORT • 2025</div>
              <h3 className="text-xl font-semibold mb-3">Internet Censorship in Iran</h3>
              <p className="text-[#8b949e] text-sm mb-4">
                Comprehensive analysis of internet censorship mechanisms in Iran (2005-2025), covering historical roots, key actors, and societal impacts. Available in English and Persian.
              </p>
              <a href="https://doi.org/10.5281/zenodo.17411924" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium">
                View Publication
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="p-6 bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg">
              <div className="text-xs text-primary font-semibold mb-2">SOFTWARE • 2025</div>
              <h3 className="text-xl font-semibold mb-3">X-Analyzer: Ethical Twitter/X Data Parser</h3>
              <p className="text-[#8b949e] text-sm mb-4">
                Open-source CLI framework for transparent and ethical analysis of public X/Twitter data.
              </p>
              <a href="https://doi.org/10.5281/zenodo.17513863" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium">
                View on Zenodo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
