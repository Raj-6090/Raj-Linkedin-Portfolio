import React from 'react';
import { Code2, Layers, Cpu, Wrench, Zap, Layout, Component, Award } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: 'Frontend Core',
      icon: <Code2 size={22} color="var(--accent-cyan)" />,
      skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 / SASS'],
    },
    {
      title: 'State & Data Fetching',
      icon: <Layers size={22} color="var(--accent-purple)" />,
      skills: ['Redux Toolkit', 'Context API', 'REST APIs', 'RTK Query', 'Axios', 'Async/Await'],
    },
    {
      title: 'UI & Styling',
      icon: <Layout size={22} color="var(--accent-pink)" />,
      skills: ['Tailwind CSS', 'Material UI', 'Shadcn UI', 'Styled Components', 'CSS Modules', 'Responsive Design'],
    },
    {
      title: 'Tools & Ecosystem',
      icon: <Wrench size={22} color="var(--accent-emerald)" />,
      skills: ['Git & GitHub', 'Vite', 'npm / pnpm', 'Chrome DevTools', 'Postman', 'VS Code'],
    },
  ];

  const coreValues = [
    {
      icon: <Zap size={24} color="var(--accent-cyan)" />,
      title: 'Performance & Speed',
      description: 'Focused on optimizing Core Web Vitals, code-splitting, lazy loading, and ensuring smooth 60fps renders.',
    },
    {
      icon: <Component size={24} color="var(--accent-purple)" />,
      title: 'Reusable Architecture',
      description: 'Crafting clean, modular React component hierarchies that scale easily across large applications.',
    },
    {
      icon: <Layout size={24} color="var(--accent-emerald)" />,
      title: 'Pixel-Perfect UI/UX',
      description: 'Converting wireframes and Figma designs into mobile-first, fully accessible, responsive interfaces.',
    },
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="subheading-badge">About Me & Expertise</div>
          <h2 className="section-title">
            Passionate About Building <span className="gradient-text">Exceptional Web Experiences</span>
          </h2>
          <p className="section-description">
            I am a dedicated React.js Frontend Developer with a strong foundation in modern JavaScript ecosystems, UI state management, and responsive CSS frameworks.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '60px',
          }}
        >
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '30px',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-glass)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                {value.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{value.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div id="skills">
          <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '36px' }}>
            My Technical <span className="gradient-text">Skillset</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '28px',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  {category.icon}
                  <h4 style={{ fontSize: '1.15rem' }}>{category.title}</h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-glass)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}
                    >
                      <span>{skill}</span>
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--accent-cyan)',
                        }}
                      ></span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
