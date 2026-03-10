import React from 'react';
import { Menu, X, ExternalLink, Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

const PortfolioApp = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const projects = [
    {
      id: 1,
      title: "Kinetic Brand Evolution",
      category: "Motion Graphics",
      description: "A seamless blend of design and animation. This project showcases dynamic visual storytelling through carefully crafted motion sequences.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      year: "2024"
    },
    {
      id: 2,
      title: "Identity System Design",
      category: "Brand Identity",
      description: "Complete branding system from concept to execution. Includes typography, color palette, and animated brand guidelines.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      year: "2024"
    },
    {
      id: 3,
      title: "Digital Experience Design",
      category: "Digital Design",
      description: "Interactive design experience combining user experience with sophisticated motion design principles.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      year: "2023"
    },
    {
      id: 4,
      title: "Motion Study Series",
      category: "Motion Graphics",
      description: "Experimental motion study exploring the boundaries between graphic design and animation.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      year: "2023"
    }
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body, html {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #0f172a;
          color: #f1f5f9;
          line-height: 1.6;
        }

        body {
          background: linear-gradient(135deg, #0f172a 0%, #0f172a 100%);
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(100, 116, 139, 0.2);
          padding: 1rem 1.5rem;
        }

        .nav-container {
          max-width: 80rem;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.25rem;
          font-weight: 900;
          background: linear-gradient(to right, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #f1f5f9;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 5rem;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          text-align: center;
        }

        .hero-subtitle {
          font-size: 0.875rem;
          font-weight: 600;
          background: linear-gradient(to right, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .hero h1 {
          font-size: clamp(3rem, 10vw, 5rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-bottom: 2rem;
          background: linear-gradient(to right, #f1f5f9, #cbd5e1, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero h1 span {
          display: block;
          background: linear-gradient(to right, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-desc {
          font-size: 1.125rem;
          color: #cbd5e1;
          max-width: 42rem;
          margin: 0 auto 2rem;
          font-weight: 300;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .btn {
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
        }

        .btn-primary {
          background: linear-gradient(to right, #2563eb, #a855f7);
          color: white;
          box-shadow: 0 20px 25px -5px rgba(168, 85, 247, 0.2);
        }

        .btn-primary:hover {
          background: linear-gradient(to right, #1d4ed8, #9333ea);
          box-shadow: 0 25px 50px -12px rgba(168, 85, 247, 0.3);
        }

        .btn-secondary {
          border: 1px solid rgba(100, 116, 139, 0.3);
          color: white;
          background: transparent;
        }

        .btn-secondary:hover {
          background: rgba(30, 41, 59, 0.5);
          border-color: rgba(100, 116, 139, 0.5);
        }

        /* Work Section */
        .work-section {
          padding: 8rem 1.5rem;
          max-width: 80rem;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(2.25rem, 8vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-divider {
          width: 5rem;
          height: 0.25rem;
          background: linear-gradient(to right, #60a5fa, #a855f7);
          margin-bottom: 5rem;
        }

        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        .project {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .project {
            grid-template-columns: 1fr;
          }
        }

        .project-video {
          position: relative;
          background: #1e293b;
          aspect-ratio: 16/9;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.2);
          transition: all 0.3s;
        }

        .project-video:hover {
          border-color: rgba(148, 163, 184, 0.4);
          box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.1);
        }

        .project-video video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-details h3 {
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .project-details p {
          color: #cbd5e1;
          font-weight: 300;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .project-category {
          font-size: 0.75rem;
          font-weight: 700;
          background: linear-gradient(to right, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .project-year {
          font-size: 0.875rem;
          font-weight: 500;
          color: #94a3b8;
        }

        .case-study-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          font-weight: 600;
          background: linear-gradient(to right, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          border: none;
          background-color: transparent;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s;
        }

        .case-study-btn:hover {
          background: linear-gradient(to right, #93c5fd, #d8b4fe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* About Section */
        .about-section {
          padding: 8rem 1.5rem;
          max-width: 80rem;
          margin: 0 auto;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .about-card {
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(148, 163, 184, 0.2);
          background: rgba(15, 23, 42, 0.5);
          transition: all 0.3s;
        }

        .about-card:hover {
          border-color: rgba(148, 163, 184, 0.3);
          background: rgba(30, 41, 59, 0.3);
          box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.05);
        }

        .about-card h3 {
          font-size: 0.875rem;
          font-weight: 700;
          background: linear-gradient(to right, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .about-card p {
          color: #cbd5e1;
          line-height: 1.6;
          font-weight: 300;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          color: #cbd5e1;
          font-weight: 300;
          font-size: 0.875rem;
        }

        /* Contact Section */
        .contact-section {
          padding: 8rem 1.5rem;
          max-width: 56rem;
          margin: 0 auto;
          text-align: center;
        }

        .contact-section h2 {
          font-size: clamp(2.25rem, 8vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-desc {
          font-size: 1.25rem;
          color: #cbd5e1;
          font-weight: 300;
          margin-bottom: 3rem;
        }

        .contact-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Footer */
        footer {
          border-top: 1px solid rgba(100, 116, 139, 0.2);
          padding: 3rem 1.5rem;
          text-align: center;
        }

        footer p {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo">YOUR NAME</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#home" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Home</a>
            <a href="#work" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Work</a>
            <a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>About</a>
            <a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-subtitle">Welcome to my portfolio</div>
          <h1>Creative Vision<span>In Motion</span></h1>
          <p className="hero-desc">Crafting elegant visual experiences through thoughtful design and seamless motion. Specializing in brand identity and motion graphics.</p>
          <div className="hero-buttons">
            <a href="#work" className="btn btn-primary">
              View My Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="work-section" id="work">
        <h2 className="section-title">Featured Work</h2>
        <div className="section-divider"></div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <div className="project-video">
                <video controls poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%231e293b' width='400' height='300'/%3E%3C/svg%3E">
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
              </div>
              <div className="project-details">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="case-study-btn">
                  View Case Study
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="about-section" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Background</h3>
            <p>With 5+ years of experience in graphic design and motion graphics, I specialize in creating visual narratives that resonate with audiences and elevate brands.</p>
          </div>
          <div className="about-card">
            <h3>Skills</h3>
            <div className="skills-list">
              <p>Motion Graphics &amp; Animation</p>
              <p>Brand Identity Design</p>
              <p>Digital Design &amp; UI/UX</p>
              <p>Adobe Creative Suite</p>
            </div>
          </div>
          <div className="about-card">
            <h3>Philosophy</h3>
            <p>I believe great design is invisible—it communicates clearly and moves people. Every project is an opportunity to solve problems beautifully.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <h2>Let&apos;s Create Together</h2>
        <p className="contact-desc">I&apos;m always interested in hearing about new projects and opportunities.</p>
        <div className="contact-buttons">
          <a href="mailto:your.email@example.com" className="btn btn-primary">
            <Mail size={18} />
            Send Email
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Github size={18} />
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </>
  );
};

export default PortfolioApp;