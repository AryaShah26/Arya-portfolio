import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Github,
  Briefcase,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  Moon,
  Sun,
  Heart,
  X,
  Server,
  Cpu,
  GitBranch,
  Zap,
  ShieldCheck,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useReveal, useScrollProgress } from '@/hooks/useScroll';

const projects = [
  {
    number: '01',
    category: 'Enterprise systems',
    title: 'Cheque Printing System',
    description:
      'A secure financial operations platform for generating, managing, and processing cheque transactions with structured workflows and reliable backend services.',
    tags: ['ASP.NET MVC', 'C#', 'SQL Server', 'Azure DevOps'],
    href: '#contact',
    featured: true,
    github: undefined,
  },
  {
    number: '02',
    category: 'Applied machine learning',
    title: 'Fraud Transaction Detection',
    description:
      'A prediction workflow that uses a trained Random Forest model to identify suspicious transaction patterns, exposed through a focused Flask interface.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'Random Forest'],
    href: '#contact',
    featured: false,
    github: undefined,
  },
  {
    number: '03',
    category: 'Digital experience',
    title: 'Feed Forward ARC',
    description:
      'A live digital platform designed to make a complex offering feel clear, useful, and approachable through thoughtful information architecture and responsive design.',
    tags: ['Product design', 'Frontend', 'Responsive UI'],
    href: 'https://feedforwardarc.com/',
    featured: false,
    github: 'https://github.com/AryaShah26/Feedforward-Eigen',
  },
  {
    number: '04',
    category: 'Data & intelligence',
    title: 'Eigen by Feed Forward ARC',
    description:
      'An interactive web experience built around turning data and ideas into a more understandable, actionable digital journey.',
    tags: ['Web experience', 'Data storytelling', 'UX'],
    href: 'https://eigen.feedforwardarc.com/',
    featured: true,
    github: 'https://github.com/AryaShah26/Feedforward-Eigen',
  },
  {
    number: '05',
    category: 'Workflow automation',
    title: 'Cheque Truncation System',
    description:
      'A backend-focused financial workflow for moving cheque processing into a more efficient digital lifecycle with dependable APIs, validations, and operational visibility.',
    tags: ['REST APIs', 'PostgreSQL', 'React', 'System design'],
    href: '#contact',
    featured: true,
    github: 'https://github.com/AryaShah26/feedforward',
  },
  {
    number: '06',
    category: 'Business platform',
    title: 'Shakti Infotech',
    description:
      'A professional web presence created to communicate a technology company\u2019s capabilities with clarity, trust, and a polished digital-first experience.',
    tags: ['Web development', 'UI design', 'Deployment'],
    href: 'https://shakti-infotech-self.vercel.app/',
    featured: false,
    github: 'https://github.com/AryaShah26/shakti.infotech',
  },
];

const capabilities = [
  {
    icon: 'server',
    title: 'Backend Engineering',
    description: 'Enterprise-grade REST APIs, workflow automation, and backend systems built with .NET, C#, and SQL Server for production reliability.',
    tags: ['.NET Web API', 'C#', 'SQL Server', 'PostgreSQL'],
  },
  {
    icon: 'code',
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive interfaces with React and TypeScript. Component-driven architecture that scales and stays maintainable.',
    tags: ['React', 'TypeScript', 'JavaScript', 'CSS'],
  },
  {
    icon: 'cpu',
    title: 'Applied Machine Learning',
    description: 'Practical ML workflows that turn data into decisions \u2014 from model training to deployment through lightweight web interfaces.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'Random Forest'],
  },
  {
    icon: 'git',
    title: 'DevOps & CI/CD',
    description: 'Azure DevOps pipelines, automated deployments, and infrastructure management that keep code moving safely from commit to production.',
    tags: ['Azure DevOps', 'CI/CD', 'GitHub', 'Deployments'],
  },
];

const heroStats = [
  { value: '2+', label: 'Years building' },
  { value: '6', label: 'Projects shipped' },
  { value: '3', label: 'Engineering roles' },
];

const expertise = ['C#', '.NET Web API', 'ASP.NET MVC', 'React', 'TypeScript', 'SQL Server', 'PostgreSQL', 'Python', 'Flask', 'Azure DevOps', 'CI/CD', 'REST APIs'];

const journey = [
  {
    date: 'May 2026 \u2014 Present',
    company: 'MRI Software \u00b7 Vadodara, India',
    role: 'Software Development Engineer 1',
    description: 'Building enterprise financial and workflow automation systems using C#, .NET Web API, SQL Server, and React. Optimizing SQL queries and backend workflows to improve performance, building REST APIs for production-ready applications, and contributing through code reviews, deployments, and Agile delivery.',
  },
  {
    date: 'Jan 2026 \u2014 May 2026',
    company: 'MRI Software \u00b7 Vadodara, India',
    role: 'Software Engineering Intern',
    description: 'Built CRM workflow automation modules with React, JavaScript, .NET, and PostgreSQL. Improved reusable frontend components, SQL migration scripts, backend optimizations, debugging, deployments, and production support.',
  },
  {
    date: 'Oct 2024 \u2014 Apr 2025',
    company: 'Shakti Infotech \u00b7 Vadodara, India',
    role: 'Software Development & DevOps Intern',
    description: 'Contributed to enterprise cheque printing systems using ASP.NET MVC, SQL Server, and Azure DevOps. Managed CI/CD workflows, deployments, debugging, database operations, backend modules, SQL procedures, and production support activities.',
  },
];

const iconMap: Record<string, typeof Server> = {
  server: Server,
  code: Code2,
  cpu: Cpu,
  git: GitBranch,
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [scrolled, setScrolled] = useState(false);
  const scrollProgress = useScrollProgress();

  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    const { error } = await supabase.from('contact_messages').insert(form);
    setStatus(error ? 'error' : 'sent');
    if (!error) setForm({ name: '', email: '', message: '' });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`site-shell ${darkMode ? 'dark' : ''}`}>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-avatar"><img src="/assets/images/Arya.Picturee.JPG" alt="Arya Shah" /></span>
          <span>Arya Shah</span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#what-i-do" onClick={closeMenu}>What I Do</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span>{darkMode ? 'Light' : 'Dark'}</span>
          </button>
          <a className="header-cta" href="/assets/resume/Arya_Shah_Resume.pdf" download>
            R\u00e9sum\u00e9 <ArrowDown size={15} />
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero section-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> Software engineer \u00b7 systems thinker</p>
            <h1>Systems that work.<br />Code that <em>lasts.</em></h1>
            <p className="hero-intro">I\u2019m Arya Shah \u2014 a software engineer at MRI Software building enterprise financial systems, applied ML workflows, and digital experiences. This is a collection of what I\u2019ve built and what I\u2019ve learned along the way.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">See my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#contact">Get in touch <span>\u2197</span></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15} /> Vadodara, India</span><span className="meta-divider" /><span>Currently at MRI Software</span></div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="portrait-frame"><img src="/assets/images/Arya.Picturee.JPG" alt="Arya Shah" /></div>
            <div className="orbit-note"><Sparkles size={18} /><span>Currently exploring<br /><strong>better digital systems</strong></span></div>
            <div className="hero-index">01 <span>/ 05</span></div>
          </div>
          <div className="scroll-hint" aria-hidden="true">
            <span>Scroll</span>
            <span className="scroll-line" />
          </div>
        </section>

        {/* Stats bar */}
        <section className="stats-bar" data-reveal>
          {heroStats.map((stat) => (
            <div className="stat-cell" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        {/* About */}
        <section id="about" className="about section-space">
          <div className="section-header" data-reveal>
            <div className="section-label"><Sparkles size={14} /> About me</div>
            <h2>The space between a <span>complex problem</span><br />and a simple answer.</h2>
          </div>
          <div className="about-body" data-reveal data-reveal-delay="1">
            <p>My work sits at the intersection of engineering, product thinking, and practical impact. I enjoy understanding how a system works end to end \u2014 then making it more reliable, more intuitive, and easier for people to use.</p>
            <p>From financial workflows to machine learning experiments and live digital experiences, I\u2019m at my best when I\u2019m learning quickly, collaborating openly, and shipping work that earns its place.</p>
            <div className="expertise-tags">
              {expertise.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a className="text-link" href="https://www.linkedin.com/in/arya-26-shah/" target="_blank" rel="noreferrer">More on LinkedIn <Linkedin size={16} /></a>
          </div>
        </section>

        {/* What I Do */}
        <section id="what-i-do" className="what-i-do section-space">
          <div className="section-header" data-reveal>
            <div className="section-label"><Zap size={14} /> What I do</div>
            <h2>Capabilities that drive<br /><em>real results.</em></h2>
            <p className="section-subtitle">Specialized expertise combining enterprise backend engineering, modern frontend development, and applied machine learning.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((cap, index) => {
              const Icon = iconMap[cap.icon];
              return (
                <article className="cap-card" key={cap.title} data-reveal data-reveal-delay={index % 2 ? '2' : '1'}>
                  <div className="cap-icon"><Icon size={24} /></div>
                  <h3>{cap.title}</h3>
                  <p>{cap.description}</p>
                  <div className="cap-tags">{cap.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="journey section-space">
          <div className="section-header" data-reveal>
            <div className="section-label"><Briefcase size={14} /> Career journey</div>
            <h2>Growing through<br /><em>real responsibility.</em></h2>
            <p className="section-subtitle">My path has moved from building and deploying practical systems to owning enterprise-grade financial workflows.</p>
          </div>
          <div className="timeline" data-reveal data-reveal-delay="1">
            {journey.map((item) => (
              <div className="timeline-item" key={item.role}>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-marker"><Briefcase size={16} /></div>
                <div className="timeline-content">
                  <p className="timeline-company">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="work section-space">
          <div className="section-header" data-reveal>
            <div className="section-label"><Code2 size={14} /> Featured work</div>
            <h2>Things I\u2019ve made<br /><em>and learned from.</em></h2>
            <p className="section-subtitle">A selection of projects across enterprise software, digital products, and applied intelligence.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.number} data-reveal data-reveal-delay={index % 2 ? '2' : '1'}>
                <div className="project-top">
                  <span className="project-category">{project.category}</span>
                  <ArrowUpRight className="project-arrow" size={20} />
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined}>
                    {project.href.startsWith('http') ? 'View live project' : 'Discuss this project'} <ArrowUpRight size={14} />
                  </a>
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={14} /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact section-space">
          <div className="contact-card" data-reveal>
            <div className="contact-copy">
              <div className="section-label light"><Mail size={14} /> Get in touch</div>
              <h2>Want to talk shop?<br /><em>Let\u2019s connect.</em></h2>
              <p>I\u2019m always open to interesting conversations about engineering, systems design, or what I\u2019m working on. Feel free to reach out.</p>
              <div className="contact-links">
                <a href="mailto:aryapshah2005@gmail.com"><Mail size={17} /> aryapshah2005@gmail.com</a>
                <a href="https://www.linkedin.com/in/arya-26-shah/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn profile</a>
                <a href="https://github.com/AryaShah26" target="_blank" rel="noreferrer"><Github size={17} /> GitHub profile</a>
              </div>
              <div className="contact-info-note"><ShieldCheck size={15} /> Your information is safe and never shared.</div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>Your name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Jane Smith" /></label>
              <label>Email address<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="jane@company.com" /></label>
              <label>Message<textarea required rows={4} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="What's on your mind?" /></label>
              <button className="button button-light" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending\u2026' : status === 'sent' ? <>Message sent <Check size={16} /></> : <>Send message <Send size={15} /></>}
              </button>
              {status === 'error' && <p className="form-message error">Something went wrong. Please email me directly.</p>}
              {status === 'sent' && <p className="form-message success">Thanks \u2014 your message is on its way.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>\u00a9 {new Date().getFullYear()} Arya Shah</span>
        <span className="footer-love">Made with <Heart size={13} fill="currentColor" className="footer-heart" /> by Arya Shah</span>
        <div className="footer-links">
          <a href="https://github.com/AryaShah26" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/arya-26-shah/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href="mailto:aryapshah2005@gmail.com" aria-label="Email"><Mail size={17} /></a>
          <a href="/assets/resume/Arya_Shah_Resume.pdf" target="_blank" rel="noreferrer" aria-label="R\u00e9sum\u00e9"><ExternalLink size={17} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
