import { useEffect, useState } from "react";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import "./App.css";
import portrait from "./images/owner-logo.png";
import gameLogo from "./images/gameLogo.png";
import deenAllah from "./images/deen_aalah.png";
import chatAi from "./images/chat-ai.png";

const projects = [
  {
    title: "Hamidos Gaming",
    type: "Real-time multiplayer hub",
    image: gameLogo,
    alt: "Hamidos Gaming logo",
    description:
      "A social game hub for Ludo and Tic-Tac-Toe, built around real-time rooms, invitations, and a smooth multiplayer experience.",
    stack: ["React", "Socket.IO", "Node.js", "CSS"],
    demo: "https://hamidos-gaming.vercel.app/",
    featured: true,
  },
  {
    title: "Deen Allah",
    type: "Faith and daily-practice companion",
    image: deenAllah,
    alt: "Deen Allah application logo",
    description:
      "An all-in-one Islamic guide for prayer times, Quran reading, authentic Hadiths, and thoughtful daily reminders.",
    stack: ["React", "Express", "Node.js", "FCM"],
    demo: "https://myislam-steel.vercel.app",
    featured: true,
  },
  {
    title: "Modern Chat App",
    type: "AI-ready messaging experience",
    image: chatAi,
    alt: "Modern Chat App preview",
    description:
      "A polished MERN messaging interface designed for fast, dependable, real-time conversations and future AI workflows.",
    stack: ["MongoDB", "Express", "React", "Socket.IO"],
    demo: "https://hamidos-chat-frontend.onrender.com",
    featured: true,
  },
  {
    title: "Majlis",
    type: "Offline & online board-game hub",
    art: "majlis",
    description:
      "A bilingual game hub that brings Ludo, Tic-Tac-Toe, Memory, Dots & Boxes, and Mahjong into one polished experience. Play locally or invite friends to a private room.",
    stack: ["HTML", "JavaScript", "PWA", "Multiplayer"],
    demo: "https://hamid-tlailia.github.io/Majlis/index.html",
    github: "https://github.com/hamid-tlailia/Majlis",
  },
  {
    title: "Mishkat",
    type: "Arabic AI faith companion",
    art: "mishkat",
    description:
      "An Arabic-first companion for exploring questions with Quran and Hadith references, clear context, and transparent source checks.",
    stack: ["HTML", "JavaScript", "PWA", "APIs"],
    demo: "https://hamid-tlailia.github.io/Mishkat",
    github: "https://github.com/hamid-tlailia/Mishkat",
  },
  {
    title: "E-commerce Website",
    type: "Full-stack commerce experience",
    image: "https://hamid-tlailia.github.io/Portfolio/images/e-commerce2.PNG",
    alt: "E-commerce website preview",
    description:
      "A complete commerce experience that balances straightforward browsing with practical, user-friendly design.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/hamid-tlailia/Shop.git",
  },
  {
    title: "University Website",
    type: "Administrative web platform",
    image: "https://hamid-tlailia.github.io/Portfolio/images/fsjegj.PNG",
    alt: "University website preview",
    description:
      "A university system focused on administrative workflows, student engagement, and clearer communication.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/hamid-tlailia/Portfolio",
  },
  {
    title: "Science Portal",
    type: "Interactive learning website",
    image: "https://hamid-tlailia.github.io/Portfolio/images/science.PNG",
    alt: "Science portal preview",
    description:
      "An interactive portal using approachable visual design to make complex scientific concepts easier to explore.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/hamid-tlailia/Portfolio/tree/main/projects/4Science",
    demo: "https://hamid-tlailia.github.io/Portfolio/projects/4Science/4s.html",
  },
];

const services = [
  {
    number: "01",
    title: "Web development",
    text: "Responsive, reliable websites built around the needs of your users and your business.",
  },
  {
    number: "02",
    title: "Interface design",
    text: "Clear, modern user interfaces that make every next step feel natural and purposeful.",
  },
  {
    number: "03",
    title: "Documents & data",
    text: "Practical support for document editing, Excel work, and polished client-ready files.",
  },
  {
    number: "04",
    title: "Media conversion",
    text: "Efficient media editing and conversion for files that work cleanly across your devices.",
  },
  {
    number: "05",
    title: "Translation",
    text: "Careful multilingual text translation that respects context, clarity, and audience.",
  },
];

const skills = [
  ["Frontend engineering", "HTML, CSS, JavaScript, React"],
  ["Backend foundations", "Node.js, Express, MongoDB, PHP, MySQL"],
  ["Product delivery", "Responsive UI, API integration, deployment"],
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem("portfolio-theme") || "light"
  );

  useEffect(() => {
    document.title = "Hamid Tlailia — Full-stack Developer";
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);

  const openMail = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.trim();
    const email = form.get("email")?.trim();
    const message = form.get("message")?.trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:tlhamid18@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Hamid Tlailia — home" onClick={closeMenu}>
          <span className="brand-mark">H.</span>
          <span>Hamid Tlailia</span>
        </a>
        <button
          className={`theme-toggle ${theme === "dark" ? "is-dark" : ""}`}
          type="button"
          onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          <span className="theme-icons" aria-hidden="true">
            <LightModeRoundedIcon className="theme-icon theme-sun" />
            <DarkModeRoundedIcon className="theme-icon theme-moon" />
          </span>
        </button>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowIcon /></a>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero section-wrap">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Full-stack developer · Doha, Qatar</p>
            <h1>Digital products that feel <em>clear</em> from the first click.</h1>
            <p className="hero-intro">
              I&apos;m Hamid Tlailia, a full-stack developer with 5+ years of experience building responsive websites and practical web applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowIcon /></a>
              <a className="text-link" href="#contact">Start a project <span>→</span></a>
            </div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="portrait-frame">
              <div className="portrait-glow" />
              <img src={portrait} alt="Hamid Tlailia" />
              <div className="portrait-note">
                <span className="status-dot" />
                Available for selected projects
              </div>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
          <a className="scroll-cue" href="#work"><span /> Scroll to explore</a>
        </section>

        <section id="work" className="work-section section-wrap">
          <div className="section-heading reveal">
            <p className="eyebrow"><span /> Selected work</p>
            <div>
              <h2>Ideas turned into useful experiences.</h2>
              <p>From real-time games to service platforms, these projects combine practical technology with a thoughtful interface.</p>
            </div>
          </div>

          <div className="project-feature reveal">
            <div className="featured-visual">
              <img src={projects[activeProject].image} alt={projects[activeProject].alt} />
            </div>
            <div className="featured-content">
              <p className="project-type">{projects[activeProject].type}</p>
              <h3>{projects[activeProject].title}</h3>
              <p>{projects[activeProject].description}</p>
              <div className="tag-list">
                {projects[activeProject].stack.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="project-links">
                {projects[activeProject].demo && <a className="button button-light" href={projects[activeProject].demo} target="_blank" rel="noreferrer">Live preview <ArrowIcon /></a>}
                {projects[activeProject].github && <a className="text-link light-link" href={projects[activeProject].github} target="_blank" rel="noreferrer">View source <span>→</span></a>}
              </div>
            </div>
          </div>

          <div className="project-rail" role="tablist" aria-label="Featured projects">
            {projects.slice(0, 3).map((project, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeProject === index}
                className={activeProject === index ? "is-active" : ""}
                key={project.title}
                onClick={() => setActiveProject(index)}
              >
                <span>0{index + 1}</span>{project.title}
              </button>
            ))}
          </div>

          <div className="work-grid">
            {projects.slice(3).map((project) => (
              <article className="work-card reveal" key={project.title}>
                <div className={`work-image ${project.art ? `art-${project.art}` : ""}`}>
                  {project.art ? (
                    <div className="project-art" aria-hidden="true">
                      <span>{project.art === "majlis" ? "المجلس" : "مشكاة"}</span>
                      <strong>{project.art === "majlis" ? "Play together" : "A clearer path to answers"}</strong>
                      <i>{project.art === "majlis" ? "5 games · online & offline" : "Quran · Hadith · context"}</i>
                    </div>
                  ) : (
                    <img src={project.image} alt={project.alt} loading="lazy" />
                  )}
                </div>
                <div className="work-card-content">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <div className="compact-links">
                    {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live site <ArrowIcon /></a>}
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="section-wrap">
            <div className="section-heading light-heading reveal">
              <p className="eyebrow"><span /> How I can help</p>
              <div>
                <h2>Focused support from concept to launch.</h2>
                <p>Choose a focused service or combine them for a more complete digital project.</p>
              </div>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <article className="service-item reveal" key={service.number}>
                  <p>{service.number}</p>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contact" aria-label={`Contact Hamid about ${service.title}`}>Discuss this service <ArrowIcon /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-wrap">
          <div className="about-intro reveal">
            <p className="eyebrow"><span /> A little more</p>
            <h2>Technical craft, practical business thinking.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy reveal">
              <p>
                I&apos;m a Tunisian full-stack developer based in Doha. My background combines web development with marketing, helping me turn requirements into digital experiences that are both useful and approachable.
              </p>
              <p>
                Whether you need a responsive website, a product interface, or a dependable feature for an existing system, I focus on a clean process, clear communication, and thoughtful execution.
              </p>
              <a className="text-link" href="https://www.linkedin.com/in/hamid-tlailia-5a944a261" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowIcon /></a>
            </div>
            <div className="credentials reveal reveal-delay">
              <p className="credentials-label">Capabilities</p>
              {skills.map(([title, detail], index) => (
                <div className="credential" key={title}>
                  <span>0{index + 1}</span>
                  <div><h3>{title}</h3><p>{detail}</p></div>
                </div>
              ))}
              <div className="education-note"><strong>Background</strong><span>Bachelor&apos;s degree in Marketing · Training in web development, IT, and soft skills</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <div className="contact-intro reveal">
            <p className="eyebrow"><span /> Get in touch</p>
            <h2>Let&apos;s make your next idea work beautifully.</h2>
            <p>Tell me about your project, timeline, or problem to solve. I&apos;ll get back to you as soon as possible.</p>
            <div className="direct-links">
              <a href="mailto:tlhamid18@gmail.com">tlhamid18@gmail.com <ArrowIcon /></a>
              <a href="https://wa.me/97471009494" target="_blank" rel="noreferrer">WhatsApp <ArrowIcon /></a>
              <a href="https://github.com/hamid-tlailia" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
            </div>
          </div>
          <form className="contact-form reveal reveal-delay" onSubmit={openMail}>
            <label>
              Your name
              <input name="name" type="text" autoComplete="name" placeholder="How should I call you?" required />
            </label>
            <label>
              Email address
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </label>
            <label>
              What can I help with?
              <textarea name="message" rows="5" placeholder="A short description of your idea, goal, or project…" required />
            </label>
            <button className="button button-primary" type="submit">Write an email <ArrowIcon /></button>
            <p className="form-note">This opens your email application with your message ready to send.</p>
          </form>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#top"><span className="brand-mark">H.</span><span>Hamid Tlailia</span></a>
        <p>© {new Date().getFullYear()} Hamid Tlailia. Built with purpose.</p>
        <a href="#top" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
