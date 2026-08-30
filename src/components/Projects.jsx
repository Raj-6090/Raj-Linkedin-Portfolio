import React, { useState } from 'react';
import { ExternalLink, Layers, Sparkles, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projectList = [
    {
      id: 1,
      title: 'Enterprise React Analytics Dashboard',
      category: 'React.js',
      description:
        'High-performance real-time analytics dashboard featuring dark mode glassmorphism UI, interactive chart widgets, Redux Toolkit state management, and responsive grid layouts.',
      image: '/images/project1.png',
      tags: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'REST API'],
      demoUrl: 'https://github.com/raj-kaneriya22',
      githubUrl: 'https://github.com/raj-kaneriya22',
    },
    {
      id: 2,
      title: 'Modern E-Commerce Storefront',
      category: 'React.js',
      description:
        'Feature-rich e-commerce web application with product search & category filtering, interactive cart management, checkout form validation, and optimized mobile experience.',
      image: '/images/project2.png',
      tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Context API'],
      demoUrl: 'https://github.com/raj-kaneriya22',
      githubUrl: 'https://github.com/raj-kaneriya22',
    },
    {
      id: 3,
      title: 'Next.js Real-time Social Feed Dashboard',
      category: 'Next.js',
      description:
        'Sleek web application built with Next.js App Router, featuring real-time activity feeds, user engagement analytics, server components, and modern responsive design.',
      image: '/images/project3.png',
      tags: ['Next.js 14', 'React.js', 'TypeScript', 'Shadcn UI', 'REST API'],
      demoUrl: 'https://github.com/raj-kaneriya22',
      githubUrl: 'https://github.com/raj-kaneriya22',
    },
  ];

  const categories = ['All', 'React.js', 'Next.js'];

  const filteredProjects =
    filter === 'All' ? projectList : projectList.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="subheading-badge">Featured Portfolio Work</div>
          <h2 className="section-title">
            Crafted with Precision & <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="section-description">
            Explore a collection of key web projects showcasing clean React component architecture, state management, and responsive UI design.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '10px 22px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                border: filter === cat ? 'none' : '1px solid var(--border-glass)',
                background: filter === cat ? 'var(--gradient-brand)' : 'var(--bg-glass)',
                color: filter === cat ? '#ffffff' : 'var(--text-secondary)',
                boxShadow: filter === cat ? 'var(--shadow-glow)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              {/* Project Visual Image Preview */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(9, 13, 22, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-glass)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--accent-cyan)',
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Project Card Content */}
              <div
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    flexGrow: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '24px',
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.78rem',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-glass)',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border-glass)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginTop: 'auto',
                  }}
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ flex: 1, padding: '10px 16px', fontSize: '0.85rem' }}
                  >
                    <Eye size={15} />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ padding: '10px 16px', fontSize: '0.85rem' }}
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
