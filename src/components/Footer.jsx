import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-[#f0f6fc] font-heading text-lg mb-4">Tawana Mohammadi</h3>
            <p className="text-[#8b949e] text-sm">
              Independent AI Researcher, Data Strategist, and Educator focused on ethical AI systems and data transparency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#f0f6fc] font-heading text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://orcid.org/0009-0005-6825-6728" target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-primary transition-colors text-sm">
                  ORCID
                </a>
              </li>
              <li>
                <a href="https://scholar.google.com/citations?user=VP8O0a4AAAAJ" target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-primary transition-colors text-sm">
                  Google Scholar
                </a>
              </li>
              <li>
                <a href="https://github.com/tawanamohammadi" target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-primary transition-colors text-sm">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#f0f6fc] font-heading text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@tawana.online" className="text-[#8b949e] hover:text-primary transition-colors text-sm">
                  info@tawana.online
                </a>
              </li>
              <li>
                <a href="mailto:tawanamohammadi@gmail.com" className="text-[#8b949e] hover:text-primary transition-colors text-sm">
                  tawanamohammadi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#30363d]">
          <p className="text-center text-[#8b949e] text-sm">
            © {currentYear} Tawana Mohammadi. Building transparent, ethical, and educational AI systems.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
