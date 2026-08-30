import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUp, AtSign, Braces, Code2, Coffee, Database, Download, GitBranch, Keyboard, Laptop2, Layers3, Mail, MapPin, Menu, Monitor, Package, Phone, Send, Sparkles, Trash2, X, Zap } from 'lucide-react';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const CodeCard = ({ profile, skills, coder, softSkills = [] }) => {
  const skillLines = Array.from({ length: Math.ceil(skills.length / 4) }, (_, index) => skills.slice(index * 4, index * 4 + 4));
  return <div className="terminal-card hero-terminal">
    <div className="terminal-line" /><div className="terminal-bar"><i /><i /><i /></div>
    <pre><span className="pink">const</span> <span className="white">coder</span> <span className="pink">=</span> {'{'}
      <br />  <span className="white">name:</span> <span className="amber">'{profile.name}'</span>,
      <br />  <span className="white">skills:</span> [<span className="amber">'{skillLines.map((line) => line.join("', '")).join("',\n    '")}'</span>],
      <br />  <span className="white">hardWorker:</span> <span className="orange">{String(coder.hardWorker)}</span>,
      <br />  <span className="white">quickLearner:</span> <span className="orange">{String(coder.quickLearner)}</span>,
      <br />  <span className="white">problemSolver:</span> <span className="orange">{String(coder.problemSolver)}</span>,
      <br />  <span className="green">hireable:</span> <span className="orange">function</span>() {'{'}
      <br />    <span className="orange">return</span> (
      <br />      <span className="white">this.hardWorker</span> &amp;&amp;
      <br />      <span className="white">this.problemSolver</span> &amp;&amp;
      <br />      <span className="white">this.skills.length</span> &gt;= <span className="orange">{coder.minimumSkills}</span>
      <br />    );
      <br />  {'}'}
      <br />{'}'};</pre>
  </div>;
}

export default function Portfolio() {
  const [data, setData] = useState(null); const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [emailError, setEmailError] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAdminMessages, setShowAdminMessages] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    fetch('/db.json')
      .then(r => {
        if (!r.ok) throw new Error('Network error loading db.json');
        return r.json();
      })
      .then(json => {
        let stored = [];
        try {
          const item = localStorage.getItem('portfolio_messages');
          if (item) stored = JSON.parse(item);
        } catch (e) {
          console.error(e);
        }
        const allMsgs = [...(json.messages || []), ...(Array.isArray(stored) ? stored : [])];
        const uniqueMsgs = Array.from(new Map(allMsgs.map(m => [m.id || `${m.name}-${m.submittedAt}`, m])).values());
        json.messages = uniqueMsgs;
        setData(json);
      })
      .catch(err => {
        console.error('Fetch error:', err);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!data) return undefined;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    }), { threshold: 0.14 });
    document.querySelectorAll('.reveal-on-scroll').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [data]);

  useEffect(() => {
    const scroller = skillsRef.current;
    if (!scroller) return undefined;
    const timer = setInterval(() => {
      const max = scroller.scrollWidth - scroller.clientWidth;
      if (max <= 0) return;
      if (scroller.scrollLeft >= max - 2) {
        scroller.scrollLeft = 0;
      } else {
        scroller.scrollLeft += 1.2;
      }
    }, 30);
    return () => clearInterval(timer);
  }, [data]);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formState.email.includes('@') || !formState.email.includes('.')) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    const newMsg = {
      id: Date.now(),
      name: formState.name,
      email: formState.email,
      message: formState.message,
      submittedAt: new Date().toLocaleString()
    };

    try {
      const res = await fetch('/api/save-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMsg)
      });
      const resData = await res.json();
      if (resData.success && resData.messages) {
        setData(prev => ({ ...prev, messages: resData.messages }));
      } else {
        const updatedMessages = [...(data.messages || []), newMsg];
        setData(prev => ({ ...prev, messages: updatedMessages }));
      }
    } catch (err) {
      console.error('API save error:', err);
      const updatedMessages = [...(data.messages || []), newMsg];
      setData(prev => ({ ...prev, messages: updatedMessages }));
    }

    try {
      const stored = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
      localStorage.setItem('portfolio_messages', JSON.stringify([...stored, newMsg]));
    } catch (err) {
      console.error('LocalStorage save error', err);
    }

    // Send background email directly to rajkaneriya22@gmail.com via Web3Forms (100% Free & Silent)
    try {
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b4578b87-73d8-4f81-9b16-56be259461df',
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Message from ${formState.name} (${formState.email})`,
          from_name: 'Raj Kaneriya Portfolio'
        })
      }).catch(err => console.error('Web3Forms email error:', err));
    } catch (e) {
      console.error(e);
    }

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleClearMessages = async () => {
    try {
      await fetch('/api/clear-messages', { method: 'POST' });
    } catch (err) {
      console.error('Clear API error:', err);
    }
    try {
      localStorage.removeItem('portfolio_messages');
    } catch (e) {
      console.error(e);
    }
    setData(prev => ({ ...prev, messages: [] }));
    setShowAdminMessages(false);
  };

  if (!data) return <main className="loading">Loading portfolio…</main>;
  const { profile, coder, summary, about, skills, softSkills, projects, experience, education, certificates } = data;
  const links = ['About', 'Experience', 'Skills', 'Education', 'Projects', 'Contact'];

  return <main className="ashik-style"><header className="ref-nav"><a className="ref-logo" href="#home">{profile.name.toUpperCase()}</a><button className="menu-trigger" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav className={open ? 'show' : ''}>{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}</nav></header>
    <section id="home" className="ref-hero"><div className="hero-copy reveal"><h1>Hello, This is <span className="pink">{profile.name.toUpperCase()}</span>, I'm a Professional <span className="mint">{profile.title}</span>.</h1><div className="socials"><a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" data-tooltip="Connect on LinkedIn" aria-label="LinkedIn"><LinkedinIcon /></a><a href={`mailto:${profile.email}`} data-tooltip="Send Email to Raj" aria-label="Email Raj"><Mail /></a></div><div className="hero-actions"><a href="#contact" className="outline-cta" data-tooltip="Jump to Contact Form">Contact me <ArrowRight size={16} /></a><a href="#projects" className="fill-cta" data-tooltip="View Featured Projects">View projects <Download size={16} /></a></div></div><CodeCard profile={profile} skills={skills} coder={coder} softSkills={softSkills} /></section>
    <section id="about" className="about-section reveal-on-scroll"><div className="side-title">ABOUT ME</div><div className="about-copy"><p className="mint kicker">WHO I AM?</p><p>{about}</p></div><div className="profile-orb" data-tooltip="Raj Kaneriya - Frontend Developer"><img src={profile.photo} alt={profile.name} /><em>{profile.title}</em></div></section>
    <section id="experience" className="experience-section reveal-on-scroll"><SectionTitle title="Experiences" /><div className="experience-layout"><div className="experience-art"><img className="experience-visual" src="/images/experience-workspace.png" alt="Developer workstation" data-tooltip="Frontend Workstation" /></div><div className="experience-grid">{experience.map((item, index) => <article className="glow-card" style={{ '--delay': `${index * 100}ms` }} key={`${item.company}-${item.role}`} data-tooltip={`${item.role} at ${item.company}`}><div className="experience-card-body"><div className="experience-icon"><Laptop2 size={30} /></div><div><p className="mint experience-period">{item.period}</p><h3>{item.role}</h3><p className="experience-company">{item.company}</p></div></div><ul>{item.highlights.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div></div></section>
    <section id="skills" className="skills-section reveal-on-scroll"><SectionTitle title="Skills" /><div className="skills-swiper" ref={skillsRef}><div className="skills-track">{skills.map((skill) => <div className="skill-card" key={skill} data-tooltip={`Skill: ${skill}`}><SkillIcon skill={skill} /><strong>{skill}</strong></div>)}</div></div></section>
    <section id="education" className="education-section reveal-on-scroll"><SectionTitle title="Education" /><div className="education-grid">{education.map((item, index) => <article className="glow-card education-card" style={{ '--delay': `${index * 100}ms` }} key={item.degree} data-tooltip={`${item.degree} - ${item.institution}`}><p className="mint center">{item.year}</p><h3>{item.degree}</h3><p className="muted">{item.institution}</p><p className="muted">{item.location}</p></article>)}</div></section>
    <section id="projects" className="projects-section reveal-on-scroll">
      <SectionTitle title="Projects" />
      <div className="projects-terminal-grid">
        {projects.map((project, index) => (
          <article className="project-terminal-card" style={{ '--delay': `${index * 120}ms` }} key={project.id} data-tooltip={`Project: ${project.title}`}>
            <div className="gradient-line-top-1"></div>
            <div className="gradient-line-top-2"></div>
            <div className="project-terminal-head">
              <span className="traffic"><i /><i /><i /></span>
              <h3>{project.title}</h3>
            </div>
            <div className="project-code-body">
              <code className="font-mono">
                <div className="blink">
                  <span className="pink">const</span> <span className="white">project</span> <span className="pink">=</span> <span className="gray"> {'{'}</span>
                </div>
                <div className="code-line">
                  <span className="white">name:</span> <span className="gray">'</span><span className="amber">{project.title}</span><span className="gray">',</span>
                </div>
                <div className="code-line">
                  <span className="white">tools:</span> <span className="gray">[</span>
                  {project.technologies.map((tech, i) => (
                    <span key={tech}>
                      <span className="gray">'</span><span className="amber">{tech}</span><span className="gray">'</span>
                      {i < project.technologies.length - 1 ? <span className="gray">, </span> : null}
                    </span>
                  ))}
                  <span className="gray">],</span>
                </div>
                <div className="code-line">
                  <span className="white">myRole:</span> <span className="orange">{project.myRole || 'Frontend Developer'}</span><span className="gray">,</span>
                </div>
                <div className="code-line">
                  <span className="white">description:</span> <span className="cyan">{project.description}</span><span className="gray">,</span>
                </div>
                <div>
                  <span className="gray">{'};'}</span>
                </div>
              </code>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section id="contact" className="contact-section reveal-on-scroll">
      <div className="contact-side-title">CONTACT</div>
      <p className="contact-kicker">CONTACT WITH ME</p>

      <div className="contact-grid">
        <div className="contact-form-card">
          <p className="contact-description">
            If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
          </p>
          <form onSubmit={handleContactSubmit}>
            <div className="form-field-group">
              <input
                id="name_input"
                type="text"
                required
                placeholder="Your Name *"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>

            <div className="form-field-group">
              <input
                id="email_input"
                type="email"
                required
                placeholder="Your Email *"
                value={formState.email}
                onChange={(e) => {
                  setFormState({ ...formState, email: e.target.value });
                  setEmailError(false);
                }}
              />
              {emailError && <p className="error-text">Please provide a valid email!</p>}
            </div>

            <div className="form-field-group">
              <textarea
                id="message_input"
                rows={4}
                required
                placeholder="Your Message *"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              ></textarea>
            </div>

            {submittedSuccess && (
              <p className="success-text">
                Message sent successfully! Thank you for reaching out.
              </p>
            )}

            <button type="submit" className="contact-submit-btn" data-tooltip="Click to Send Message">
              <span>SEND MESSAGE</span>
              <Send size={16} />
            </button>
          </form>
        </div>

        <div className="contact-info-col">
          <div className="contact-info-row" data-tooltip="Send Email to Raj">
            <div className="info-icon-badge">
              <AtSign size={22} />
            </div>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>

          <div className="contact-info-row" data-tooltip="Call Raj's Phone">
            <div className="info-icon-badge">
              <Phone size={22} />
            </div>
            <a href={`tel:${profile.phone}`}>+91 {profile.phone}</a>
          </div>

          <div className="contact-info-row" data-tooltip="Chat Directly with Raj on WhatsApp">
            <div className="info-icon-badge whatsapp-badge">
              <WhatsappIcon />
            </div>
            <a href="https://wa.me/918160309964" target="_blank" rel="noreferrer" className="whatsapp-link">
              +91 8160309964 (WhatsApp Chat)
            </a>
          </div>

          <div className="contact-info-row" data-tooltip="Location: Ahmedabad, Gujarat, India">
            <div className="info-icon-badge">
              <MapPin size={22} />
            </div>
            <span>{profile.location}, Gujarat, India</span>
          </div>
        </div>
      </div>
    </section>

    <footer>© {new Date().getFullYear()} {profile.name}. Built from resume data.</footer>

    {showScrollTop && (
      <button
        className="scroll-to-top-btn"
        data-tooltip="Scroll Back to Top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </button>
    )}
  </main>;
}

function SectionTitle({ title }) {
  return (
    <div className="section-title-ref">
      <div className="header-blur-glow"></div>
      <span className="line" />
      <b className="badge">{title.toUpperCase()}</b>
      <span className="line" />
    </div>
  );
}

function SkillIcon({ skill }) {
  const name = skill.toLowerCase();

  if (name.includes('html')) {
    return <span className="brand-skill-icon html5-icon" style={{ background: '#e34f26', color: '#fff' }}>5</span>;
  }
  if (name.includes('css3') || name === 'css') {
    return <Code2 style={{ color: '#1572b6' }} />;
  }
  if (name.includes('javascript') || name === 'js') {
    return <Braces style={{ color: '#f7df1e' }} />;
  }
  if (name.includes('typescript') || name === 'ts') {
    return <Braces style={{ color: '#3178c6' }} />;
  }
  if (name.includes('react query')) {
    return <Braces style={{ color: '#ff4154' }} />;
  }
  if (name.includes('react')) {
    return <Braces style={{ color: '#61dafb' }} />;
  }
  if (name.includes('node')) {
    return <Braces style={{ color: '#339933' }} />;
  }
  if (name.includes('redux')) {
    return <Layers3 style={{ color: '#764abc' }} />;
  }
  if (name.includes('context')) {
    return <Layers3 style={{ color: '#8b5cf6' }} />;
  }
  if (name.includes('tailwind')) {
    return <Code2 style={{ color: '#06b6d4' }} />;
  }
  if (name.includes('scss') || name.includes('sass')) {
    return <Code2 style={{ color: '#cc6699' }} />;
  }
  if (name.includes('material')) {
    return <Package style={{ color: '#007fff' }} />;
  }
  if (name.includes('bootstrap')) {
    return <Package style={{ color: '#7952b3' }} />;
  }
  if (name.includes('mysql')) {
    return <Database style={{ color: '#4479a1' }} />;
  }
  if (name.includes('git')) {
    return <GitBranch style={{ color: '#f05032' }} />;
  }
  if (name.includes('ai')) {
    return <Sparkles style={{ color: '#a855f7' }} />;
  }
  if (name.includes('api') || name.includes('axios') || name.includes('socket')) {
    return <Zap style={{ color: '#16f2b3' }} />;
  }
  return <Package style={{ color: '#38bdf8' }} />;
}
