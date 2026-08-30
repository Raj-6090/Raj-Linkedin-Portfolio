import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Frontend Developer (React.js)',
      company: 'Web Application & Client Projects',
      period: '2023 - Present',
      location: 'Gujarat, India (Open to Remote)',
      highlights: [
        'Architected and deployed 15+ responsive React.js and Next.js applications with custom CSS glassmorphism themes.',
        'Integrated RESTful APIs and implemented centralized state management using Redux Toolkit and React Query.',
        'Improved application load speed and Web Vitals score by 35% through image optimization and dynamic imports.',
        'Created modular, reusable component libraries with Tailwind CSS and Material UI for consistent design language.',
      ],
    },
    {
      role: 'React Frontend Engineering Specialist',
      company: 'Continuous Project & Skill Development',
      period: '2022 - 2023',
      location: 'India',
      highlights: [
        'Mastered modern JavaScript ES6+, TypeScript type safety, and React Hooks lifecycle management.',
        'Built full-scale e-commerce storefronts and interactive real-time dashboard user interfaces.',
        'Configured Git/GitHub team collaboration workflows and automated CI/CD deployments via Vercel.',
      ],
    },
  ];

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="subheading-badge">Experience & Impact</div>
          <h2 className="section-title">
            My Journey as a <span className="gradient-text">Frontend Developer</span>
          </h2>
          <p className="section-description">
            A breakdown of my professional development, hands-on React project achievements, and technical contributions.
          </p>
        </div>

        {/* Timeline List */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px',
                borderRadius: 'var(--radius-md)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '16px',
                  borderBottom: '1px solid var(--border-glass)',
                  paddingBottom: '16px',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    {exp.company}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      background: 'var(--bg-glass)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-glass)',
                    }}
                  >
                    <Calendar size={14} color="var(--accent-purple)" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle2
                      size={18}
                      color="var(--accent-cyan)"
                      style={{ flexShrink: 0, marginTop: '3px' }}
                    />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
