import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function Contact({ openLinkedInModal }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'rajkaneriya22@gmail.com';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="subheading-badge">Get In Touch</div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-description">
            Whether you have a job opportunity, a project proposal, or just want to connect, feel free to reach out directly!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '40px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Contact Details Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email Card */}
            <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>Email Me</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Direct Contact</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <a
                  href={`mailto:${emailAddress}`}
                  style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', textDecoration: 'none', fontWeight: 500 }}
                >
                  {emailAddress}
                </a>
                <button
                  onClick={copyEmail}
                  className="btn btn-outline"
                  style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                >
                  {copiedEmail ? <CheckCircle2 size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(0, 119, 181, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0077b5',
                  }}
                >
                  <LinkedinIcon size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>LinkedIn Profile</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Connect & Message</p>
                </div>
              </div>
              <button onClick={openLinkedInModal} className="btn btn-linkedin" style={{ width: '100%', padding: '10px' }}>
                <LinkedinIcon size={16} />
                <span>Open LinkedIn Connector</span>
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-emerald)',
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>Location</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Gujarat, India (Available for Remote / Hybrid Work)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="glass-card" style={{ padding: '36px', borderRadius: 'var(--radius-lg)' }}>
            {submitted ? (
              <div
                style={{
                  padding: '40px 20px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <CheckCircle2 size={54} color="var(--accent-emerald)" />
                <h3 style={{ fontSize: '1.5rem' }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out, Raj will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Send a Direct Message</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '6px', color: 'var(--text-secondary)' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-glass)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '6px', color: 'var(--text-secondary)' }}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-glass)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '6px', color: 'var(--text-secondary)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', marginBottom: '6px', color: 'var(--text-secondary)' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
