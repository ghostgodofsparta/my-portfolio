import React, { useState } from 'react';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const containerStyle = {
    backgroundColor: '#0f172a',
    color: '#f1f5f9',
    minHeight: '100vh',
    fontFamily: "'Poppins', sans-serif",
    overflow: 'hidden'
  };

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '1rem 2rem',
    zIndex: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(100, 116, 139, 0.2)'
  };

  const heroStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    textAlign: 'center'
  };

  const h1Style = {
    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
    fontWeight: 900,
    marginBottom: '1.5rem',
    lineHeight: 1.2
  };

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 2rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 600,
    textDecoration: 'none',
    marginTop: '2rem'
  };

  const sectionStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '6rem 2rem'
  };

  return (
    <div style={containerStyle}>
      {/* Navigation */}
      <nav style={navStyle}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60a5fa' }}>YOUR NAME</div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#home" style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Home</a>
          <a href="#work" style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Work</a>
          <a href="#about" style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>About</a>
          <a href="#contact" style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={heroStyle} id="home">
        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#60a5fa', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Welcome to my portfolio
          </div>
          <h1 style={h1Style}>
            Creative Vision in Motion
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '42rem', margin: '0 auto 2rem', fontWeight: 300, lineHeight: 1.6 }}>
            Crafting elegant visual experiences through thoughtful design and seamless motion. Specializing in brand identity and motion graphics.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#work" style={buttonStyle}>
              View My Work
              <ArrowRight size={18} />
            </a>
            <button style={{ ...buttonStyle, backgroundColor: 'transparent', border: '1px solid #64748b', color: '#f1f5f9' }}>
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section style={sectionStyle} id="work">
        <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 900, marginBottom: '3rem', color: '#60a5fa' }}>
          Featured Work
        </h2>
        
        <div style={{ display: 'grid', gap: '4rem' }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div style={{ backgroundColor: '#1e293b', aspectRatio: '16/9', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(148, 163, 184, 0.2)' }}>
                <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  Motion Graphics
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>
                  Project {i}
                </h3>
                <p style={{ color: '#cbd5e1', marginBottom: '1.5rem', fontWeight: 300, lineHeight: 1.6 }}>
                  A seamless blend of design and animation. This project showcases dynamic visual storytelling through carefully crafted motion sequences.
                </p>
                <button style={{ backgroundColor: 'transparent', border: 'none', color: '#60a5fa', cursor: 'pointer', fontWeight: 600, padding: 0, fontSize: '0.9rem' }}>
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section style={sectionStyle} id="about">
        <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 900, marginBottom: '3rem', color: '#60a5fa' }}>
          About Me
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(148, 163, 184, 0.2)', backgroundColor: 'rgba(30, 41, 59, 0.3)' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Background
            </h3>
            <p style={{ color: '#cbd5e1', fontWeight: 300, lineHeight: 1.6 }}>
              With 5+ years of experience in graphic design and motion graphics, I specialize in creating visual narratives.
            </p>
          </div>
          
          <div style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(148, 163, 184, 0.2)', backgroundColor: 'rgba(30, 41, 59, 0.3)' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Skills
            </h3>
            <div style={{ color: '#cbd5e1', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.8 }}>
              <p>Motion Graphics &amp; Animation</p>
              <p>Brand Identity Design</p>
              <p>Digital Design &amp; UI/UX</p>
            </div>
          </div>
          
          <div style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(148, 163, 184, 0.2)', backgroundColor: 'rgba(30, 41, 59, 0.3)' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Philosophy
            </h3>
            <p style={{ color: '#cbd5e1', fontWeight: 300, lineHeight: 1.6 }}>
              Great design communicates clearly and moves people emotionally. Every project is an opportunity to solve problems beautifully.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ ...sectionStyle, textAlign: 'center', maxWidth: '56rem' }} id="contact">
        <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 900, marginBottom: '1.5rem', color: '#60a5fa' }}>
          Let&apos;s Create Together
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#cbd5e1', marginBottom: '3rem', fontWeight: 300 }}>
          I&apos;m always interested in hearing about new projects.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:your.email@example.com" style={buttonStyle}>
            <Mail size={18} />
            Send Email
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" style={{ ...buttonStyle, backgroundColor: 'transparent', border: '1px solid #64748b', color: '#f1f5f9' }}>
            LinkedIn
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer" style={{ ...buttonStyle, backgroundColor: 'transparent', border: '1px solid #64748b', color: '#f1f5f9' }}>
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(100, 116, 139, 0.2)', padding: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
        © 2024 Your Name. All rights reserved.
      </footer>
    </div>
  );
}