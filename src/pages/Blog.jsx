import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  // Sample blog posts - in production, these would come from markdown files
  const blogPosts = [
    {
      slug: 'ai-ethics-framework',
      title: 'Building an Ethical AI Framework',
      excerpt: 'Exploring the key principles and practices for developing ethical AI systems that prioritize transparency and accountability.',
      category: 'ai-ethics',
      date: '2025-12-01',
      readTime: '8 min read',
    },
    {
      slug: 'data-transparency-importance',
      title: 'The Importance of Data Transparency',
      excerpt: 'Why transparent data practices are essential for building trust in AI and ML systems.',
      category: 'data-transparency',
      date: '2025-11-28',
      readTime: '6 min read',
    },
    {
      slug: 'personal-journey-ai',
      title: 'My Journey in AI Research',
      excerpt: 'Reflections on over a decade of working in AI, from education to independent research.',
      category: 'personal',
      date: '2025-11-25',
      readTime: '5 min read',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Posts', icon: '📚' },
    { id: 'ai-ethics', label: 'AI Ethics', icon: '🤖' },
    { id: 'data-transparency', label: 'Data Transparency', icon: '📊' },
    { id: 'personal', label: 'Personal', icon: '✍️' },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="text-center mb-12 fade-in-section">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            Insights on AI ethics, data transparency, and the intersection of technology and humanity.
          </p>
        </section>

        {/* Search and Filter */}
        <div className="mb-12 fade-in-section">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-[#161b22] border border-[#30363d] rounded-lg text-[#c9d1d9] placeholder-[#8b949e] focus:border-primary focus:outline-none transition-colors"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8b949e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-[#161b22] border border-[#30363d] text-[#8b949e] hover:border-primary hover:text-primary'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <section className="fade-in-section">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block bg-[#161b22]/50 backdrop-blur border border-[#30363d] rounded-lg overflow-hidden hover:border-primary transition-all hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#8b949e] mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                        {categories.find(c => c.id === post.category)?.label}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#8b949e] text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      Read More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-[#8b949e]">No posts found matching your criteria.</p>
            </div>
          )}
        </section>

        {/* Coming Soon Notice */}
        <section className="mt-16 mb-12 fade-in-section">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-heading font-semibold mb-4">More Content Coming Soon</h2>
            <p className="text-[#8b949e]">
              I'm actively working on more articles covering AI ethics, data transparency, and personal insights. 
              Check back regularly or follow me on <a href="https://tawanamohammadi.medium.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">Medium</a> for updates.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
