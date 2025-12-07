import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPost = () => {
  const { slug } = useParams();

  // Sample posts data - in production, this would be loaded from markdown files
  const samplePosts = {
      'ai-ethics-framework': {
        title: 'Building an Ethical AI Framework',
        date: '2025-12-01',
        category: 'AI Ethics',
        readTime: '8 min read',
        content: `# Building an Ethical AI Framework

## Introduction

As artificial intelligence continues to transform our world, the need for robust ethical frameworks has never been more critical. In this post, I'll explore the key principles and practices for developing AI systems that prioritize transparency, accountability, and human welfare.

## Core Principles

### 1. Transparency

AI systems should be transparent in their operation, allowing stakeholders to understand how decisions are made. This includes:

- Clear documentation of algorithms and models
- Explainable AI (XAI) techniques
- Open communication about limitations and biases

### 2. Accountability

Developers and organizations must take responsibility for their AI systems:

- Regular audits and assessments
- Clear lines of responsibility
- Mechanisms for addressing harm

### 3. Fairness

AI systems should be designed to minimize bias and promote equity:

- Diverse training data
- Regular bias testing
- Inclusive design practices

## Practical Implementation

Implementing these principles requires:

1. **Ethical Review Boards**: Establish dedicated teams to review AI projects
2. **Impact Assessments**: Conduct thorough evaluations before deployment
3. **Continuous Monitoring**: Track system performance and societal impact
4. **Stakeholder Engagement**: Involve affected communities in the design process

## Conclusion

Building ethical AI is not a one-time effort but an ongoing commitment. By prioritizing these principles, we can create AI systems that serve humanity while respecting fundamental rights and values.`,
      },
      'data-transparency-importance': {
        title: 'The Importance of Data Transparency',
        date: '2025-11-28',
        category: 'Data Transparency',
        readTime: '6 min read',
        content: `# The Importance of Data Transparency

## Why Data Transparency Matters

In the age of big data and AI, transparency in how data is collected, used, and shared has become paramount. This post explores why data transparency is essential for building trust and ensuring ethical practices.

## Key Benefits

### Trust Building

Transparent data practices help organizations build trust with users and stakeholders by demonstrating commitment to ethical data handling.

### Regulatory Compliance

Many jurisdictions now require transparency in data practices through regulations like GDPR and CCPA.

### Better Decision Making

When data practices are transparent, it's easier to identify and correct issues, leading to better outcomes.

## Best Practices

1. Clear privacy policies
2. User-friendly data access controls
3. Regular transparency reports
4. Open documentation of data practices

## Conclusion

Data transparency is not just a compliance requirement—it's a fundamental aspect of ethical data stewardship.`,
      },
      'personal-journey-ai': {
        title: 'My Journey in AI Research',
        date: '2025-11-25',
        category: 'Personal',
        readTime: '5 min read',
        content: `# My Journey in AI Research

## Beginning the Journey

Over a decade ago, I began exploring the fascinating world of artificial intelligence. What started as curiosity has evolved into a passionate commitment to ethical AI research and education.

## Key Milestones

- **Early Years**: Education in computer science and cybersecurity
- **Research Focus**: Developing interest in AI ethics and transparency
- **Founding Tawana Network**: Creating a platform for ethical AI research
- **Academic Collaboration**: Working with Harvard University and University of the People

## Lessons Learned

Throughout this journey, I've learned that:

1. AI is a tool that reflects our values
2. Ethics must be prioritized from the start
3. Transparency builds trust
4. Education is key to responsible AI adoption

## Looking Forward

As I continue this journey, my focus remains on creating AI systems that serve humanity while respecting fundamental rights and values.`,
      },
    };

  const post = samplePosts[slug] || null;

  if (!post) {
    return (
      <div className="pt-24 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-[#8b949e] mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-medium transition-all inline-block">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-[#8b949e] hover:text-primary transition-colors mb-8">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#8b949e] mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded">{post.category}</span>
            <span>•</span>
            <time>{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
        </header>

        {/* Post Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="markdown-content text-[#c9d1d9]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </div>

        {/* Post Footer */}
        <footer className="mt-16 pt-8 border-t border-[#30363d]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[#8b949e]">
              <p>Written by <span className="text-primary font-medium">Tawana Mohammadi</span></p>
            </div>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#161b22] border border-[#30363d] rounded-lg text-[#8b949e] hover:border-primary hover:text-primary transition-colors"
              >
                Share on Twitter
              </a>
            </div>
          </div>
        </footer>

        {/* More Posts */}
        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-heading font-semibold mb-6">More Posts</h2>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-medium transition-all"
          >
            View All Posts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </article>

      <style jsx>{`
        .markdown-content h1 {
          @apply text-3xl font-bold mt-8 mb-4;
        }
        .markdown-content h2 {
          @apply text-2xl font-semibold mt-6 mb-3;
        }
        .markdown-content h3 {
          @apply text-xl font-semibold mt-4 mb-2;
        }
        .markdown-content p {
          @apply mb-4 leading-relaxed;
        }
        .markdown-content ul, .markdown-content ol {
          @apply mb-4 ml-6;
        }
        .markdown-content li {
          @apply mb-2;
        }
        .markdown-content code {
          @apply bg-[#161b22] px-2 py-1 rounded text-primary;
        }
        .markdown-content pre {
          @apply bg-[#161b22] p-4 rounded-lg overflow-x-auto mb-4;
        }
        .markdown-content blockquote {
          @apply border-l-4 border-primary pl-4 italic text-[#8b949e] my-4;
        }
        .markdown-content a {
          @apply text-primary hover:text-secondary underline;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
