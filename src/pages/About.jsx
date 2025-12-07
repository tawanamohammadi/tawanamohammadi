import React, { useEffect } from 'react';

const About = () => {
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
    <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16 fade-in-section">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-[#8b949e] italic">
            "True progress in AI lies not in power, but in empathy, accessibility, and accountability."
          </p>
        </section>

        {/* Biography */}
        <section className="mb-16 fade-in-section">
          <div className="prose prose-invert max-w-none">
            <div className="bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg p-8">
              <h2 className="text-3xl font-heading font-semibold mb-6">Biography</h2>
              <p className="text-[#c9d1d9] leading-relaxed mb-4">
                I'm an <strong>AI Researcher</strong>, <strong>Data Strategist</strong>, and <strong>Educator</strong> with over 10 years of experience in AI systems, cybersecurity, and education. Currently pursuing my <strong>B.Sc. in Computer Science (AI Track)</strong> at <strong>University of the People</strong> and collaborating with <strong>Harvard University</strong> on research initiatives.
              </p>
              <p className="text-[#c9d1d9] leading-relaxed mb-4">
                My mission is to design human-centered, transparent, and responsible AI systems that empower individuals through ethical innovation and data literacy. With extensive experience in AI systems and cybersecurity, I explore how algorithms and human values can coexist in ethical digital ecosystems.
              </p>
              <p className="text-[#c9d1d9] leading-relaxed">
                I believe that AI should remain transparent, inclusive, and grounded in empathy. Through responsible design, I aim to make AI a bridge, not a barrier, between humans and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16 fade-in-section">
          <h2 className="text-3xl font-heading font-semibold mb-8">Education & Affiliations</h2>
          <div className="space-y-6">
            <div className="bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg p-6 border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science (AI Track)</h3>
              <p className="text-primary font-medium mb-2">University of the People, Pasadena, CA, USA</p>
              <p className="text-[#8b949e] mb-3">2025 - Present</p>
              <ul className="list-disc list-inside text-[#8b949e] space-y-1">
                <li>Orientation Completed (Office of Student Advising, Nov 2025)</li>
                <li>Focus: AI Ethics, Machine Learning, Data Science, Cybersecurity</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">University of the People</h3>
                <p className="text-[#8b949e]">B.Sc. Computer Science Student</p>
              </div>
              <div className="bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Harvard University</h3>
                <p className="text-[#8b949e]">Research Collaborator</p>
              </div>
              <div className="bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Tawana Network</h3>
                <p className="text-[#8b949e]">Founder & Director (Ethical AI Research Hub)</p>
              </div>
              <div className="bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Independent Researcher</h3>
                <p className="text-[#8b949e]">Tehran, Iran</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16 fade-in-section">
          <h2 className="text-3xl font-heading font-semibold mb-8">Key Achievements</h2>
          <div className="space-y-4">
            {[
              {
                icon: '📄',
                title: 'Published Research',
                description: 'Multiple peer-reviewed publications on AI ethics, digital governance, and data transparency.',
              },
              {
                icon: '🏛️',
                title: 'Academic Profiles',
                description: 'ORCID: 0009-0005-6825-6728, Google Scholar, Web of Science: ORI-6601-2025.',
              },
              {
                icon: '🌐',
                title: 'Tawana Network',
                description: 'Founded ethical AI research hub focusing on transparency and human-centered systems.',
              },
              {
                icon: '💻',
                title: 'Open Source Contributions',
                description: 'Developed ethical frameworks and tools for transparent AI data analysis.',
              },
              {
                icon: '🎓',
                title: 'Education & Mentoring',
                description: 'Over 10 years of experience in AI education and promoting digital literacy.',
              },
              {
                icon: '🔍',
                title: 'Research Impact',
                description: 'Work on internet censorship, AI ethics, and prompt engineering widely recognized.',
              },
            ].map((achievement, index) => (
              <div key={index} className="flex gap-4 bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg p-6 hover:border-primary transition-colors">
                <div className="text-3xl flex-shrink-0">{achievement.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-[#8b949e]">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Philosophy */}
        <section className="mb-16 fade-in-section">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-heading font-semibold mb-6">Research Philosophy</h2>
            <blockquote className="text-xl italic text-[#c9d1d9] mb-4">
              "AI should remain transparent, inclusive, and grounded in empathy."
            </blockquote>
            <p className="text-[#8b949e] leading-relaxed">
              With over a decade of experience, I explore how algorithms and human values can coexist in transparent, ethical digital ecosystems. True progress lies in <strong className="text-primary">empathy, accessibility, and accountability</strong>.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mb-16 fade-in-section">
          <div className="bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-heading font-semibold mb-4">Location & Availability</h2>
            <div className="space-y-2 text-[#8b949e]">
              <p>🌍 <strong className="text-[#f0f6fc]">Based in:</strong> Tehran, Iran</p>
              <p>💼 <strong className="text-[#f0f6fc]">Working:</strong> Remote / Global</p>
              <p>🕐 <strong className="text-[#f0f6fc]">Timezone:</strong> IRST (UTC+3:30)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
