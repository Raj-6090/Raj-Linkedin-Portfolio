import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Sparkles, UserCheck } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function LinkedInModal({ isOpen, onClose }) {
  const [copiedHeadline, setCopiedHeadline] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const linkedinUrl = 'https://www.linkedin.com/in/raj-kaneriya22/';
  const recommendedHeadline =
    'Frontend Developer | React.js | Next.js | TypeScript | Redux Toolkit | Tailwind CSS | Building High-Performance Web Applications';

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'headline') {
      setCopiedHeadline(true);
      setTimeout(() => setCopiedHeadline(false), 2000);
    } else {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        background: 'rgba(9, 13, 22, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '560px',
          padding: '36px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-glow)',
          boxShadow: 'var(--shadow-glow)',
          background: 'var(--bg-secondary)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: '#0077b5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <LinkedinIcon size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem' }}>LinkedIn Integration</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>raj-kaneriya22 Profile</p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Direct Link Action */}
        <div
          style={{
            padding: '16px 20px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-glass)',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <div style={{ wordBreak: 'break-all', fontSize: '0.9rem', color: 'var(--accent-cyan)' }}>
            {linkedinUrl}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => copyToClipboard(linkedinUrl, 'link')}
              className="btn btn-outline"
              style={{ padding: '8px 12px', fontSize: '0.82rem' }}
            >
              {copiedLink ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
              <span>{copiedLink ? 'Copied' : 'Copy'}</span>
            </button>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-linkedin"
              style={{ padding: '8px 14px', fontSize: '0.82rem' }}
            >
              <ExternalLink size={14} />
              <span>Visit</span>
            </a>
          </div>
        </div>

        {/* Copyable Recommended Profile Headline */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>
            <Sparkles size={16} color="var(--accent-cyan)" />
            <span>Recommended Recruiter-Optimized Headline:</span>
          </div>

          <div
            style={{
              padding: '14px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-glass)',
              fontSize: '0.88rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              marginBottom: '10px',
            }}
          >
            "{recommendedHeadline}"
          </div>

          <button
            onClick={() => copyToClipboard(recommendedHeadline, 'headline')}
            className="btn btn-outline"
            style={{ width: '100%', padding: '10px', fontSize: '0.88rem' }}
          >
            {copiedHeadline ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
            <span>{copiedHeadline ? 'Headline Copied to Clipboard!' : 'Copy Headline for LinkedIn Profile'}</span>
          </button>
        </div>

        {/* Footer info */}
        <div style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          Tip: Add this portfolio link into your LinkedIn profile's <b>Featured</b> and <b>Contact Info</b> sections!
        </div>
      </div>
    </div>
  );
}
