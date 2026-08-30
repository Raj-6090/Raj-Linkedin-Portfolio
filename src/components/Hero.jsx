import React from 'react';
import { ArrowRight, FileText, Code, Sparkles, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

export default function Hero({ openLinkedInModal }) {
  const techPills = ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs'];

  return (
    <section className="section" style={{ paddingTop: '160px', paddingBottom: '100px', overflow: 'hidden' }}>
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-cyan"></div>
      <div className="ambient-glow glow-purple"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Hero Left Content */}
          <div>
            <div className="subheading-badge" style={{ marginBottom: '20px' }}>
              <Sparkles size={14} />
              <span>Available for Frontend & React.js Roles</span>
            </div>

            <h1
              style={{
                fontSize: '3.5rem',
                lineHeight: 1.1,
                marginBottom: '20px',
              }}
              className="hero-title"
            >
              Hi, I'm <span className="gradient-text">Raj Kaneriya</span>
              <br />
              React.js Developer
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                marginBottom: '32px',
                maxWidth: '580px',
                lineHeight: 1.6,
              }}
            >
              Passionate Frontend Developer specializing in building high-performance, pixel-perfect, and responsive web applications. Expert in modern React.js ecosystem, state management, and modern CSS frameworks.
            </p>

            {/* Tech Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '36px',
              }}
            >
              {techPills.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Code size={13} color="var(--accent-cyan)" />
                  {tech}
                </span>
              ))}
            </div>

            {/* Call To Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '48px',
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={openLinkedInModal} className="btn btn-linkedin">
                <LinkedinIcon size={18} />
                <span>LinkedIn Profile</span>
              </button>

              <a
                href="https://github.com/raj-kaneriya22"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
            </div>

            {/* Highlighted Stat Banner */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                padding: '20px 24px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-glass)',
                backdropFilter: 'blur(12px)',
              }}
              className="hero-stats"
            >
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-heading)' }}>
                  15+
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Projects Built</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-purple)', fontFamily: 'var(--font-heading)' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Responsive Design</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-heading)' }}>
                  React.js
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Core Expertise</div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Card */}
          <div style={{ position: 'relative' }} className="hero-visual">
            <div
              className="glass-card animate-float"
              style={{
                padding: '32px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-glow)',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              {/* Profile Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--gradient-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    boxShadow: 'var(--shadow-glow)',
                  }}
                >
                  RK
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '4px' }}>Raj Kaneriya</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)' }}>Frontend React Developer</p>
                </div>
              </div>

              {/* Code Snippet Card */}
              <div
                style={{
                  background: 'var(--bg-primary)',
                  padding: '20px',
                  borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                  border: '1px solid var(--border-glass)',
                  marginBottom: '20px',
                }}
              >
                <div style={{ color: '#ec4899' }}>const <span style={{ color: '#38bdf8' }}>developer</span> = &#123;</div>
                <div style={{ paddingLeft: '16px', color: '#94a3b8' }}>
                  name: <span style={{ color: '#a855f7' }}>'Raj Kaneriya'</span>,<br />
                  role: <span style={{ color: '#a855f7' }}>'React.js Developer'</span>,<br />
                  coreSkills: [<span style={{ color: '#10b981' }}>'React'</span>, <span style={{ color: '#10b981' }}>'Next.js'</span>, <span style={{ color: '#10b981' }}>'Redux'</span>],<br />
                  passionateAbout: <span style={{ color: '#a855f7' }}>'Clean Code & UI'</span><br />
                </div>
                <div style={{ color: '#ec4899' }}>&#125;;</div>
              </div>

              {/* Quick Status Checks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span>Available for Full-time & Remote Roles</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                  <span>LinkedIn Profile Ready for Recruiters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-title {
            font-size: 2.6rem !important;
          }
          .hero-visual {
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
}
