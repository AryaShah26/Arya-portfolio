import { FormEvent, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Database,
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
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

const projects = [
  {
    number: '01',
    type: 'Enterprise systems',
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
    type: 'Applied machine learning',
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
    type: 'Digital experience',
    title: 'Feed Forward ARC',
    description:
      'A live digital platform designed to make a complex offering feel clear, useful, and approachable through thoughtful information architecture and responsive design.',
    tags: ['Product design', 'Frontend', 'Responsive UI'],
    href: 'https://feedforwardarc.com/',
    featured: true,
    github: 'https://github.com/AryaShah26/Feedforward-Eigen',
  },
  {
    number: '04',
    type: 'Data & intelligence',
    title: 'Eigen by Feed Forward ARC',
    description:
      'An interactive web experience built around turning data and ideas into a more understandable, actionable digital journey.',
    tags: ['Web experience', 'Data storytelling', 'UX'],
    href: 'https://eigen.feedforwardarc.com/',
    featured: false,
    github: 'https://github.com/AryaShah26/Feedforward-Eigen',
  },
  {
    number: '05',
    type: 'Workflow automation',
    title: 'Cheque Truncation System',
    description:
      'A backend-focused financial workflow for moving cheque processing into a more efficient digital lifecycle with dependable APIs, validations, and operational visibility.',
    tags: ['REST APIs', 'PostgreSQL', 'React', 'System design'],
    href: '#contact',
    featured: false,
    github: 'https://github.com/AryaShah26/feedforward',
  },
  {
    number: '06',
    type: 'Business platform',
    title: 'Shakti Infotech',
    description:
      'A professional web presence created to communicate a technology company’s capabilities with clarity, trust, and a polished digital-first experience.',
    tags: ['Web development', 'UI design', 'Deployment'],
    href: 'https://shakti-infotech-self.vercel.app/',
    featured: true,
    github: 'https://github.com/AryaShah26/shakti.infotech',
  },
];

const skills = [
  { label: 'Languages', value: 'C, C++, C#, Java, Python, JavaScript, TypeScript, SQL' },
  { label: 'Frameworks', value: '.NET Framework, ASP.NET MVC, React, REST APIs, Flask' },
  { label: 'Data', value: 'SQL Server, PostgreSQL, MySQL, Machine Learning' },
  { label: 'Developer tools', value: 'Azure DevOps, Git, GitHub, CI/CD, Power BI' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

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
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-avatar"><img src="/assets/images/Arya.Picturee.JPG" alt="Arya Shah" /></span>
          <span>Arya Shah</span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#trajectory" onClick={closeMenu}>Journey</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span>{darkMode ? 'Light' : 'Dark'}</span>
          </button>
          <a className="header-cta" href="/assets/resume/Arya_Shah_Resume.pdf" download>
            Download résumé <ArrowDown size={15} />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> Software engineer · systems thinker</p>
            <h1>Building <em>useful</em><br />systems for the real world.</h1>
            <p className="hero-intro">I’m Arya Shah — a software engineer who brings together thoughtful interfaces, reliable backend systems, and data-informed problem solving.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#contact">Let’s connect <span>↗</span></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15} /> Vadodara, India</span><span className="meta-divider" /><span>Open to meaningful work</span></div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="portrait-frame"><img src="/assets/images/Arya.Picturee.JPG" alt="Arya Shah" /><span className="portrait-label">Curious by default<br /><strong>Precise by practice.</strong></span></div>
            <div className="orbit-note"><Sparkles size={18} /><span>Currently exploring<br /><strong>better digital systems</strong></span></div>
            <div className="hero-index">01 <span>/ 04</span></div>
          </div>
        </section>

        <section id="about" className="about section-grid section-space">
          <div className="section-kicker">01 <span>About me</span></div>
          <div className="about-content">
            <h2>I like the space between a <span>complex problem</span> and a simple answer.</h2>
            <div className="about-columns"><p>My work sits at the intersection of engineering, product thinking, and practical impact. I enjoy understanding how a system works end to end — then making it more reliable, more intuitive, and easier for people to use.</p><p>From financial workflows to machine learning experiments and live digital experiences, I’m at my best when I’m learning quickly, collaborating openly, and shipping work that earns its place.</p></div>
            <a className="text-link" href="https://www.linkedin.com/in/arya-26-shah/" target="_blank" rel="noreferrer">More on LinkedIn <Linkedin size={16} /></a>
          </div>
        </section>

        <section id="trajectory" className="trajectory section-space">
          <div className="section-kicker">02 <span>Career trajectory</span></div>
          <div className="trajectory-layout">
            <div><h2>Growing through<br /><em>real responsibility.</em></h2><p className="trajectory-intro">My path has moved from building and deploying practical systems to owning enterprise-grade financial workflows. Each role has sharpened how I think about reliability, collaboration, and the details that make software dependable.</p></div>
            <div className="timeline">
              <div className="timeline-item"><div className="timeline-date">May 2026 — Present</div><div className="timeline-marker"><Briefcase size={16} /></div><div><p className="timeline-company">MRI Software · Vadodara, India</p><h3>Software Development Engineer 1</h3><p>Building enterprise financial and workflow automation systems using C#, .NET Web API, SQL Server, and React. Optimizing SQL queries and backend workflows to improve performance, building REST APIs for production-ready applications, and contributing through code reviews, deployments, and Agile delivery.</p></div></div>
              <div className="timeline-item"><div className="timeline-date">Jan 2026 — May 2026</div><div className="timeline-marker"><Briefcase size={16} /></div><div><p className="timeline-company">MRI Software · Vadodara, India</p><h3>Software Engineering Intern</h3><p>Built CRM workflow automation modules with React, JavaScript, .NET, and PostgreSQL. Improved reusable frontend components, SQL migration scripts, backend optimizations, debugging, deployments, and production support.</p></div></div>
              <div className="timeline-item"><div className="timeline-date">Oct 2024 — Apr 2025</div><div className="timeline-marker"><Briefcase size={16} /></div><div><p className="timeline-company">Shakti Infotech · Vadodara, India</p><h3>Software Development & DevOps Intern</h3><p>Contributed to enterprise cheque printing systems using ASP.NET MVC, SQL Server, and Azure DevOps. Managed CI/CD workflows, deployments, debugging, database operations, backend modules, SQL procedures, and production support activities.</p></div></div>
            </div>
          </div>
        </section>

        <section id="work" className="work section-space">
          <div className="section-heading"><div><div className="section-kicker">03 <span>Selected work</span></div><h2>Things I’ve made<br /><em>and learned from.</em></h2></div><p className="heading-aside">A selection of projects across enterprise software, digital products, and applied intelligence.</p></div>
          <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.number}><div className="project-top"><span className="project-number">{project.number}</span><ArrowUpRight className="project-arrow" size={20} /></div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined}>{project.href.startsWith('http') ? 'View live project' : 'Discuss this project'} <ArrowUpRight size={14} /></a>{project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={14} /></a>}</div></article>)}</div>
        </section>

        <section id="capabilities" className="capabilities section-space">
          <div className="section-kicker">04 <span>Capabilities</span></div>
          <div className="capabilities-layout"><div><h2>From first thought<br />to <em>finished system.</em></h2><p className="capability-intro">I bring a builder’s mindset to every stage — asking better questions early, sweating the details, and keeping the end user in view.</p></div><div className="capability-list"><div className="capability-item"><span>01</span><div><Code2 size={22} /><h3>Product-minded engineering</h3><p>Interfaces and APIs that feel considered, not merely complete.</p></div></div><div className="capability-item"><span>02</span><div><Database size={22} /><h3>Systems & data</h3><p>Structured thinking for workflows, databases, and operational reliability.</p></div></div><div className="capability-item"><span>03</span><div><Sparkles size={22} /><h3>Learning in public</h3><p>Curiosity, documentation, and collaboration as part of the craft.</p></div></div></div></div>
          <div className="skills-grid">{skills.map((skill) => <div className="skill-row" key={skill.label}><strong>{skill.label}</strong><span>{skill.value}</span></div>)}</div>
        </section>

        <section id="contact" className="contact section-space"><div className="contact-card"><div className="contact-copy"><div className="section-kicker light">05 <span>Start a conversation</span></div><h2>Have a problem<br /><em>worth solving?</em></h2><p>Tell me a little about what you’re building, exploring, or figuring out. I’d love to hear the thinking behind it.</p><div className="contact-links"><a href="mailto:aryapshah2005@gmail.com"><Mail size={17} /> aryapshah2005@gmail.com</a><a href="https://www.linkedin.com/in/arya-26-shah/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn profile</a></div></div><form className="contact-form" onSubmit={handleSubmit}><label>Your name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Jane Smith" /></label><label>Email address<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="jane@company.com" /></label><label>What’s on your mind?<textarea required rows={4} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Tell me a little about your idea..." /></label><button className="button button-light" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : status === 'sent' ? <>Message sent <Check size={16} /></> : <>Send message <Send size={15} /> </>}</button>{status === 'error' && <p className="form-message error">Something went wrong. Please email me directly.</p>}{status === 'sent' && <p className="form-message success">Thanks — your message is on its way.</p>}</form></div></section>
      </main>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Arya Shah</span><span className="footer-love">Made with <Heart size={13} fill="currentColor" className="footer-heart" /> by Arya Shah</span><div className="footer-links"><a href="https://github.com/AryaShah26" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://www.linkedin.com/in/arya-26-shah/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:aryapshah2005@gmail.com" aria-label="Email"><Mail size={17} /></a><a href="/assets/resume/Arya_Shah_Resume.pdf" target="_blank" rel="noreferrer" aria-label="Résumé"><ExternalLink size={17} /></a></div></footer>
    </div>
  );
}

export default App;
