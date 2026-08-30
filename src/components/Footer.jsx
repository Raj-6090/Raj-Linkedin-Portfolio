import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

export default function Footer({ openLinkedInModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-glass)',
        background: 'var(--bg-primary)',
        padding: '40px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700 }}>
              Raj<span style={{ color: 'var(--accent-cyan)' }}>.dev</span>
            </span>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              React.js Frontend Developer | Building High Performance Web Apps
            </p>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={openLinkedInModal}
              aria-label="LinkedIn Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
              }}
            >
              <LinkedinIcon size={18} />
            </button>

            <a
              href="https://github.com/raj-kaneriya22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                textDecoration: 'none',
              }}
            >
              <GithubIcon size={18} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--gradient-brand)',
                border: 'none',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--border-glass)',
            width: '100%',
            paddingTop: '20px',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          <span>© {new Date().getFullYear()} Raj Kaneriya. Built with React.js & Vite.</span>
        </div>
      </div>
    </footer>
  );
}
