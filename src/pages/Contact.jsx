import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:info@tawana.online?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setStatus('Opening your email client...');
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('');
    }, 3000);
  };

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16 fade-in-section">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            Have a question or want to collaborate? I'd love to hear from you.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <section className="fade-in-section">
            <h2 className="text-3xl font-heading font-semibold mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Email Addresses */}
              <div className="bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <div className="space-y-2">
                      <a
                        href="mailto:info@tawana.online"
                        className="block text-primary hover:text-secondary transition-colors"
                      >
                        info@tawana.online
                      </a>
                      <a
                        href="mailto:tawanamohammadi@gmail.com"
                        className="block text-primary hover:text-secondary transition-colors"
                      >
                        tawanamohammadi@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🌍</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p className="text-[#8b949e]">Tehran, Iran</p>
                    <p className="text-[#8b949e] text-sm mt-1">Working Remotely / Global</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🔗</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">Connect</h3>
                    <div className="space-y-3">
                      <a
                        href="https://orcid.org/0009-0005-6825-6728"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#8b949e] hover:text-primary transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.553 0 .999.447.999.999s-.446.999-.999.999a.999.999 0 1 1 0-1.998zm0 3.996h-2v11.248h2V8.374zM12 19.622c-2.384 0-3.92-1.565-3.92-3.92 0-2.354 1.536-3.92 3.92-3.92s3.92 1.566 3.92 3.92c0 2.355-1.536 3.92-3.92 3.92z"/>
                        </svg>
                        ORCID
                      </a>
                      <a
                        href="https://scholar.google.com/citations?user=VP8O0a4AAAAJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#8b949e] hover:text-primary transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 24l-12-6v-6.914l12 6.094 12-6.094v6.914zM12 0L0 6l12 6 10.156-5.078L12 0z"/>
                        </svg>
                        Google Scholar
                      </a>
                      <a
                        href="https://github.com/tawanamohammadi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#8b949e] hover:text-primary transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                      <a
                        href="https://tawana.online"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#8b949e] hover:text-primary transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collaboration Areas */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Open to Collaborate On</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'AI Ethics Research',
                    'Data Governance',
                    'Educational Content',
                    'Open Source Projects',
                    'Digital Rights',
                  ].map((area) => (
                    <span key={area} className="px-3 py-1 bg-[#161b22] border border-[#30363d] rounded-full text-sm text-[#c9d1d9]">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="fade-in-section">
            <h2 className="text-3xl font-heading font-semibold mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#161b22] border border-[#30363d] rounded-lg text-[#c9d1d9] placeholder-[#8b949e] focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#161b22] border border-[#30363d] rounded-lg text-[#c9d1d9] placeholder-[#8b949e] focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#161b22] border border-[#30363d] rounded-lg text-[#c9d1d9] placeholder-[#8b949e] focus:border-primary focus:outline-none transition-colors"
                  placeholder="Collaboration Opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#161b22] border border-[#30363d] rounded-lg text-[#c9d1d9] placeholder-[#8b949e] focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {status && (
                <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg text-center">
                  <p className="text-primary">{status}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary hover:bg-primary/80 text-white rounded-lg font-medium transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <p className="text-sm text-[#8b949e] text-center">
                This form will open your default email client with the message pre-filled.
              </p>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
