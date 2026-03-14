import { useEffect, useRef, useState } from 'react';
import './App.css';
import { getProjects, getAbout } from './sanityClient';

// ── GALLERY DATA ──────────────────────────────────────────────
// HOW TO ADD YOUR WORK:
// Each project has a `media` array — up to 5 items per project
// For a photo:  { type: 'image', src: '/work/filename.png' }
// For a video:  { type: 'video', src: '/work/filename.mp4', thumb: '/work/thumb.png' }
// The FIRST item in the array is used as the card thumbnail
const PROJECTS = [
  {
    id: 1, category: 'branding', visual: 'visual-branding', shape: 'FLUX',
    label: 'Branding & Identity', name: 'PROJECT ONE',
    desc: 'Add your project description here.',
    media: [
      // { type: 'image', src: '/work/project1-a.png' },
      // { type: 'image', src: '/work/project1-b.png' },
      // { type: 'video', src: '/work/project1.mp4', thumb: '/work/project1-thumb.png' },
    ],
  },
  {
    id: 2, category: 'motion', visual: 'visual-motion', shape: '▶',
    label: 'Motion Design', name: 'PROJECT TWO',
    desc: 'Add your project description here.',
    media: [],
  },
  {
    id: 3, category: 'ui', visual: 'visual-ui', shape: 'UI',
    label: 'UI/UX Design', name: 'PROJECT THREE',
    desc: 'Add your project description here.',
    media: [],
  },
  {
    id: 4, category: 'branding', visual: 'visual-branding-2', shape: 'ORB',
    label: 'Branding & Identity', name: 'PROJECT FOUR',
    desc: 'Add your project description here.',
    media: [],
  },
  {
    id: 5, category: 'motion', visual: 'visual-motion-2', shape: '◆',
    label: 'Motion Design', name: 'PROJECT FIVE',
    desc: 'Add your project description here.',
    media: [],
  },
  {
    id: 6, category: 'ui', visual: 'visual-ui-2', shape: 'UX',
    label: 'UI/UX Design', name: 'PROJECT SIX',
    desc: 'Add your project description here.',
    media: [],
  },
];

const SKILLS = [
  { name: 'Brand Identity',    pct: 0.95 },
  { name: 'Motion Design',     pct: 0.88 },
  { name: 'UI/UX Design',      pct: 0.90 },
  { name: 'Art Direction',     pct: 0.85 },
  { name: 'Typography',        pct: 0.92 },
  { name: 'Print & Editorial', pct: 0.80 },
];

// ── AMBIENT ORBS ──────────────────────────────────────────────
const ORBS = [
  { size: 520, color: 'rgba(107,45,139,0.22)',  top: '15%', left: '10%', duration: 18 },
  { size: 380, color: 'rgba(155,77,202,0.15)',  top: '60%', left: '70%', duration: 24 },
  { size: 460, color: 'rgba(240,208,144,0.07)', top: '80%', left: '25%', duration: 20 },
  { size: 300, color: 'rgba(107,45,139,0.18)',  top: '30%', left: '80%', duration: 15 },
  { size: 340, color: 'rgba(200,168,75,0.08)',  top: '5%',  left: '55%', duration: 28 },
];

// ── DESIGN APP ICONS (SVG — blended with site palette) ────────
// Each icon floats around the hero image
const APP_ICONS = [
  {
    id: 'photoshop',
    label: 'Ps',
    color: '#31A8FF',
    bg: 'rgba(49,168,255,0.15)',
    style: { top: '18%', left: '4%', animationDelay: '1.9s', animationDuration: '6s' },
  },
  {
    id: 'illustrator',
    label: 'Ai',
    color: '#FF9A00',
    bg: 'rgba(255,154,0,0.15)',
    style: { top: '28%', right: '4%', animationDelay: '2.05s', animationDuration: '7s' },
  },
  {
    id: 'figma',
    label: 'Fig',
    color: '#F24E1E',
    bg: 'rgba(242,78,30,0.12)',
    style: { top: '42%', left: '2%', animationDelay: '2.2s', animationDuration: '7.5s' },
  },
  {
    id: 'premiere',
    label: 'Pr',
    color: '#9999FF',
    bg: 'rgba(153,153,255,0.15)',
    style: { top: '55%', right: '3%', animationDelay: '2.35s', animationDuration: '8s' },
  },
  {
    id: 'canva',
    label: 'Cv',
    color: '#00C4CC',
    bg: 'rgba(0,196,204,0.12)',
    style: { top: '67%', left: '5%', animationDelay: '2.5s', animationDuration: '6.5s' },
  },
  {
    id: 'aftereffects',
    label: 'Ae',
    color: '#D291FF',
    bg: 'rgba(153,99,255,0.15)',
    style: { top: '76%', right: '5%', animationDelay: '2.65s', animationDuration: '9s' },
  },
];

// SVG icon renderers — styled to match site palette
function AppIcon({ icon }) {
  const renderInner = () => {
    switch(icon.id) {
      case 'photoshop':
        return (
          <svg viewBox="0 0 50 50" width="28" height="28">
            <text x="4" y="36" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="26" fill={icon.color}>Ps</text>
          </svg>
        );
      case 'illustrator':
        return (
          <svg viewBox="0 0 50 50" width="28" height="28">
            <text x="2" y="36" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="26" fill={icon.color}>Ai</text>
          </svg>
        );
      case 'premiere':
        return (
          <svg viewBox="0 0 50 50" width="28" height="28">
            <text x="2" y="36" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="26" fill={icon.color}>Pr</text>
          </svg>
        );
      case 'aftereffects':
        return (
          <svg viewBox="0 0 50 50" width="28" height="28">
            <text x="2" y="36" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="24" fill="#D291FF">Ae</text>
          </svg>
        );
      case 'figma':
        return (
          <svg viewBox="0 0 38 56" width="22" height="30">
            <rect x="0"  y="0"  width="18" height="18" rx="9" fill="#F24E1E"/>
            <rect x="20" y="0"  width="18" height="18" rx="9" fill="#FF7262"/>
            <rect x="0"  y="19" width="18" height="18" rx="9" fill="#A259FF"/>
            <rect x="0"  y="38" width="18" height="18" rx="9" fill="#0ACF83"/>
            <circle cx="29" cy="28" r="9" fill="#1ABCFE"/>
          </svg>
        );
      case 'canva':
        return (
          <svg viewBox="0 0 50 50" width="28" height="28">
            <text x="4" y="36" fontFamily="'Inter',sans-serif" fontWeight="700" fontSize="24" fill={icon.color}>Cv</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-icon" style={icon.style}>
      <div className="app-icon-inner" style={{ background: icon.bg, borderColor: `${icon.color}30` }}>
        {renderInner()}
        <span className="app-icon-label" style={{ color: icon.color }}>{icon.id === 'figma' ? 'Figma' : icon.id === 'canva' ? 'Canva' : icon.id === 'aftereffects' ? 'After Effects' : icon.id === 'premiere' ? 'Premiere' : icon.id === 'illustrator' ? 'Illustrator' : 'Photoshop'}</span>
      </div>
    </div>
  );
}

// ── CONTACT ICONS ─────────────────────────────────────────────
function IconEmail() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>;
}
function IconLinkedIn() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="4"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8.5"/><path d="M12 16v-5M16 16v-3a2 2 0 0 0-4 0"/></svg>;
}
function IconPhone() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}
function IconInstagram() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>;
}

// ── CURSOR ────────────────────────────────────────────────────
function Cursor() {
  const cursorRef   = useRef(null);
  const followerRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos   = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) { cursorRef.current.style.left = e.clientX + 'px'; cursorRef.current.style.top = e.clientY + 'px'; }
    };
    window.addEventListener('mousemove', onMove);
    let raf;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;
      if (followerRef.current) { followerRef.current.style.left = pos.current.x + 'px'; followerRef.current.style.top = pos.current.y + 'px'; }
      raf = requestAnimationFrame(animate);
    };
    animate();
    const expand   = () => cursorRef.current?.classList.add('expanded');
    const collapse = () => cursorRef.current?.classList.remove('expanded');
    document.querySelectorAll('a, button, .project-card').forEach(el => { el.addEventListener('mouseenter', expand); el.addEventListener('mouseleave', collapse); });
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
    </>
  );
}

// ── HOOKS ─────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useSkillBars() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('animated'); }),
      { threshold: 0.5 }
    );
    document.querySelectorAll('.skill-bar-fill').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }

// ── LIGHTBOX ──────────────────────────────────────────────────
function Lightbox({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);
  const media = project.media || [];
  const hasMedia = media.length > 0;
  const current = media[activeIndex];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setActiveIndex(i => Math.min(i + 1, media.length - 1));
      if (e.key === 'ArrowLeft')  setActiveIndex(i => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [onClose, media.length]);

  // Auto-play/pause video on slide change
  useEffect(() => {
    if (videoRef.current) { videoRef.current.load(); videoRef.current.play(); }
  }, [activeIndex]);

  const goTo = (i) => setActiveIndex(i);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-box" onClick={e => e.stopPropagation()}>

        <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>

        {/* Main media viewer */}
        <div className="lightbox-media">
          {!hasMedia ? (
            <div className={`lightbox-placeholder ${project.visual}`}>
              <span className="placeholder-label">{project.shape}</span>
              <span className="placeholder-tag">Work coming soon</span>
            </div>
          ) : current.type === 'video' ? (
            <video ref={videoRef} src={current.src} className="lightbox-video" controls autoPlay loop playsInline />
          ) : (
            <img src={current.src} alt={`${project.name} ${activeIndex + 1}`} className="lightbox-img" />
          )}

          {/* Prev / Next arrows */}
          {media.length > 1 && (
            <>
              <button className="lb-arrow lb-arrow-left"  onClick={() => goTo(Math.max(activeIndex - 1, 0))} disabled={activeIndex === 0}>‹</button>
              <button className="lb-arrow lb-arrow-right" onClick={() => goTo(Math.min(activeIndex + 1, media.length - 1))} disabled={activeIndex === media.length - 1}>›</button>
            </>
          )}
        </div>

        {/* Right panel */}
        <div className="lightbox-info">
          <span className="lightbox-category">{project.label}</span>
          <h3 className="lightbox-title">{project.name}</h3>
          <p className="lightbox-desc">{project.desc}</p>

          {/* Thumbnail strip */}
          {media.length > 1 && (
            <div className="lb-thumbs">
              {media.map((m, i) => (
                <button
                  key={i}
                  className={`lb-thumb${i === activeIndex ? ' active' : ''}`}
                  onClick={() => goTo(i)}
                >
                  {m.type === 'video' ? (
                    m.thumb
                      ? <img src={m.thumb} alt={`thumb ${i}`} />
                      : <span className="lb-thumb-play">▶</span>
                  ) : (
                    <img src={m.src} alt={`thumb ${i}`} />
                  )}
                </button>
              ))}
            </div>
          )}

          <div className="lightbox-divider" />
          {media.length > 0 && <span className="lb-counter">{activeIndex + 1} / {media.length}</span>}
          <span className="lightbox-hint">ESC to close · ← → to navigate</span>
        </div>

      </div>
    </div>
  );
}

// ── PROJECT CARD ──────────────────────────────────────────────
function ProjectCard({ project, filtered, onOpen }) {
  const videoRef = useRef(null);
  const media = project.media || [];
  const firstMedia = media[0];
  const thumb = firstMedia
    ? firstMedia.type === 'video' ? firstMedia.thumb : firstMedia.src
    : null;
  const hasVideo = firstMedia?.type === 'video';

  const handleMouseEnter = () => { if (videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play(); } };
  const handleMouseLeave = () => { if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } };

  return (
    <div
      className={`project-card reveal${filtered ? ' hidden' : ''}`}
      data-category={project.category}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => { if (project.media && project.media.length > 0) onOpen(project); }}
    >
      <div className="project-card-inner">
        {thumb ? (
          <div className="project-color-bg">
            <img src={thumb} alt={project.name} className="project-real-img project-thumb" />
            {hasVideo && <video ref={videoRef} src={firstMedia.src} className="project-video" muted loop playsInline />}
          </div>
        ) : (
          <div className={`project-color-bg ${project.visual}`}>
            <div className="placeholder-grid" aria-hidden="true">
              <div className="placeholder-lines" />
              <span className="placeholder-label">{project.shape}</span>
              <span className="placeholder-tag">Add your work here</span>
            </div>
          </div>
        )}

        <div className="project-overlay">
          <span className="project-category">{project.label}</span>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-desc">{project.desc}</p>
          <span className="project-link">
            {media.length > 1 ? `View ${media.length} Items →` : media.length === 1 ? 'View Project →' : 'Coming Soon'}
          </span>
        </div>
      </div>
    </div>
  );
}


// Returns: { line1, line2, showPortfolio, showRest }
function useTypewriter() {
  const [line1, setLine1]               = useState('');
  const [line2, setLine2]               = useState('');
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showRest, setShowRest]         = useState(false);

  useEffect(() => {
    const WORD1 = 'LUKE';
    const WORD2 = "OTURI'S";
    const CHAR_SPEED = 95;   // ms per character
    const PAUSE      = 180;  // pause between words
    const SETTLE     = 420;  // pause after OTURI before Portfolio appears
    const REST_DELAY = 480;  // pause after Portfolio before rest fades in

    let cancelled = false;
    const timers = [];

    const type = (word, setter, startDelay, onDone) => {
      word.split('').forEach((ch, i) => {
        const t = setTimeout(() => {
          if (!cancelled) setter(prev => prev + ch);
          if (!cancelled && i === word.length - 1 && onDone) {
            const t2 = setTimeout(onDone, SETTLE);
            timers.push(t2);
          }
        }, startDelay + i * CHAR_SPEED);
        timers.push(t);
      });
    };

    // 0.3s initial delay → type LUKE → pause → type OTURI → settle → Portfolio → rest
    const t0 = setTimeout(() => {
      type(WORD1, setLine1, 0, () => {
        const t1 = setTimeout(() => {
          type(WORD2, setLine2, 0, () => {
            if (!cancelled) setShowPortfolio(true);
            const t3 = setTimeout(() => {
              if (!cancelled) setShowRest(true);
            }, REST_DELAY);
            timers.push(t3);
          });
        }, PAUSE);
        timers.push(t1);
      });
    }, 300);
    timers.push(t0);

    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, []);

  return { line1, line2, showPortfolio, showRest };
}

// ── APP ───────────────────────────────────────────────────────
export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxProject, setLightboxProject] = useState(null);
  const [projects, setProjects] = useState(PROJECTS);
  const [loading, setLoading] = useState(true);
  const [aboutData, setAboutData] = useState(null);
  const { line1, line2, showPortfolio, showRest } = useTypewriter();
  useReveal();
  useSkillBars();

  // Fetch projects from Sanity
  useEffect(() => {
    getProjects().then(data => {
      if (data && data.length > 0) {
        const mapped = data.map((p, i) => ({
          id: p._id,
          category: p.category || 'branding',
          visual: PROJECTS[i % PROJECTS.length]?.visual || 'visual-branding',
          shape: PROJECTS[i % PROJECTS.length]?.shape || '✦',
          label: p.category === 'motion' ? 'Motion Design' : p.category === 'ui' ? 'UI/UX Design' : 'Branding & Identity',
          name: p.name,
          desc: p.description || '',
          media: (p.media || []).map(m => ({
            type: m.mediaType,
            src: m.mediaType === 'video' ? m.videoUrl : m.imageUrl,
            thumb: m.thumbUrl || null,
          })).filter(m => m.src),
        }));
        setProjects(mapped);
      }
      setLoading(false);
    }).catch(() => setLoading(false));

    // Fetch about data
    getAbout().then(data => { if (data) setAboutData(data); }).catch(() => {});
  }, []);

  useEffect(() => {
    const el = document.querySelector('.hero-bg-text');
    const onScroll = () => { if (el) el.style.transform = `translate(-50%, calc(-50% + ${window.scrollY * 0.3}px))`; };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Cursor />

      {/* AMBIENT ORBS */}
      <div className="orbs-container" aria-hidden="true">
        {ORBS.map((orb, i) => (
          <div key={i} className="orb" style={{ width: orb.size + 'px', height: orb.size + 'px', background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`, top: orb.top, left: orb.left, animationDuration: orb.duration + 's', animationDelay: (i * -3.5) + 's' }} />
        ))}
      </div>

      {/* NAV */}
      <nav>
        <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('hero'); }}>Luke Oturi<sup>®</sup></a>
        <ul className="nav-links">
          {[{ id: 'hero', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'gallery', label: 'Gallery' }, { id: 'contact', label: 'Contact' }].map(s => (
            <li key={s.id}><a href={`#${s.id}`} onClick={e => { e.preventDefault(); scrollTo(s.id); }}>{s.label}</a></li>
          ))}
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-bg-text" aria-hidden="true">DESIGN</div>

        {/* LEFT: text content */}
        <div className="hero-content">
          {/* Eyebrow fades in immediately */}
          <span className="hero-eyebrow">✦ Open for Projects — 2026</span>

          <h1 className="hero-title">
            {/* LUKE — outlined stroke style */}
            <span className="line-2" style={{ marginLeft: 0 }}>
              {line1}
              {line1.length < 4 && <span className="type-cursor">|</span>}
            </span>

            {/* OTURI'S — solid champagne */}
            <span className="line-1" style={{ marginLeft: 'clamp(16px, 4vw, 80px)' }}>
              {line2}
              {line1.length === 4 && line2.length < 7 && <span className="type-cursor">|</span>}
            </span>

            {/* Portfolio — fades in after OTURI'S settles */}
            <span className={`line-3 fade-item${showPortfolio ? ' visible' : ''}`}>
              Portfolio
            </span>
          </h1>

          {/* Subtitle + descriptor + buttons — all fade in after Portfolio */}
          <p className={`hero-subtitle fade-item${showRest ? ' visible' : ''}`}>
            UI/UX &nbsp;·&nbsp; Motion &nbsp;·&nbsp; Graphic Design
          </p>
          <p className={`hero-descriptor fade-item${showRest ? ' visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            Bold visuals. Sharp concepts. Work that stops people mid-scroll and makes them feel something.
          </p>
          <div className={`hero-cta fade-item${showRest ? ' visible' : ''}`} style={{ transitionDelay: '0.22s' }}>
            <a href="#gallery" className="btn-primary" onClick={e => { e.preventDefault(); scrollTo('gallery'); }}>View Gallery</a>
            <a href="#contact" className="btn-secondary" onClick={e => { e.preventDefault(); scrollTo('contact'); }}>Get in Touch →</a>
          </div>
        </div>

        {/* RIGHT: designer + floating app icons */}
        <div className="hero-visual" aria-hidden="true">
          {/* Glow behind image */}
          <div className="hero-img-glow" />

          {/* The designer image — blended via CSS mix-blend-mode + gradient mask */}
          <div className="hero-img-wrap">
            <img
              src="/designer-boy.png"
              alt="Designer at work"
              className="hero-img"
            />
            {/* Bottom fade into background */}
            <div className="hero-img-fade" />
          </div>

          {/* Floating app icons */}
          {APP_ICONS.map(icon => <AppIcon key={icon.id} icon={icon} />)}
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <div className="scroll-line" />
          <span className="scroll-label">Scroll</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section" aria-hidden="true">
        <div className="marquee-track">
          {['BRANDING','MOTION DESIGN','UI/UX','VISUAL IDENTITY','ART DIRECTION','TYPOGRAPHY','CREATIVE DIRECTION',
            'BRANDING','MOTION DESIGN','UI/UX','VISUAL IDENTITY','ART DIRECTION','TYPOGRAPHY','CREATIVE DIRECTION'].map((t, i) => (
            <span className="marquee-item" key={i}><span className="marquee-dot" />{t}</span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="about-left reveal">
          <div className="about-photo-wrap">
            {aboutData?.photoUrl ? (
              <img src={aboutData.photoUrl} alt="Luke Oturi" className="about-photo-img" />
            ) : (
              <div className="about-photo-placeholder"><span className="photo-hint">Your Photo</span></div>
            )}
            <div className="about-photo-glow" />
          </div>
        </div>
        <div className="about-right reveal">
          <span className="about-rotated-label">Who I Am</span>
          <span className="section-label">About Me</span>
          <div className="about-big-text">
            <span className="word-1">BUILT</span>
            <span className="word-2">TO</span>
            <span className="word-3">Create.</span>
          </div>
          <p className="about-intro">A <strong>passionate visual storyteller</strong> with a drive for work that communicates, captivates, and converts.</p>
          <p className="about-body">
            {aboutData?.bio || 'Proficient across industry-standard design tools on both Mac and Windows — with 4 years of hands-on experience turning ideas into visuals that mean something.\n\nFrom brand identities that define companies to motion pieces that move people — I craft visual systems with intention. My process blends strategic thinking with instinctive design, finding the tension between concept and execution that makes work truly memorable.'}
            <span className="about-philosophy">{aboutData?.philosophy || 'Deadlines are a promise. Quality is non-negotiable. Every pixel delivered with purpose.'}</span>
          </p>
          <div className="skills-grid">
            {(aboutData?.skills || SKILLS.map(s => ({ name: s.name, percent: s.pct * 100 }))).map(s => (
              <div className="skill-item" key={s.name}>
                <div className="skill-name">{s.name}</div>
                <div className="skill-bar-bg"><div className="skill-bar-fill" style={{ width: `${s.percent}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery">
        <div className="section-header reveal">
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="section-title">THE<br /><span className="outline">GALLERY.</span></h2>
          </div>
          <div className="filter-tabs">
            {['all','branding','motion','ui'].map(f => (
              <button key={f} className={`filter-btn${activeFilter === f ? ' active' : ''}`} onClick={() => setActiveFilter(f)}>
                {f === 'all' ? 'All' : f === 'ui' ? 'UI/UX' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {loading ? (
            <div className="gallery-loading">
              <span className="gallery-loading-dot" /><span className="gallery-loading-dot" /><span className="gallery-loading-dot" />
            </div>
          ) : (
            projects.map(p => (
              <ProjectCard
                key={p.id}
                project={p}
                filtered={activeFilter !== 'all' && p.category !== activeFilter}
                onOpen={setLightboxProject}
              />
            ))
          )}
        </div>
        <p className="gallery-hint">✦ Add your work via the <a href="http://localhost:3333" target="_blank" rel="noreferrer">Sanity Studio</a> — no code needed</p>
      </section>

      {/* LIGHTBOX */}
      {lightboxProject && (
        <Lightbox project={lightboxProject} onClose={() => setLightboxProject(null)} />
      )}

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="contact-bg-number" aria-hidden="true">HI</div>
        <div className="contact-inner">
          <span className="contact-label reveal">✦ Let's Work Together</span>
          <h2 className="contact-title reveal">GET IN<br /><span className="italic-line">touch.</span></h2>
          <p className="contact-subtitle reveal">Have a project in mind? Looking for a collaborator? Or just want to talk design? I'd love to hear from you.</p>
          <div className="contact-info-grid reveal">

            <a href="mailto:chiaji.luke@gmail.com" className="contact-item">
              <div className="contact-item-icon"><IconEmail /></div>
              <div className="contact-item-text">
                <div className="contact-info-type">Email</div>
                <div className="contact-info-value">chiaji.luke@gmail.com</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/luke-oturi-68a53518a/" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-item-icon"><IconLinkedIn /></div>
              <div className="contact-item-text">
                <div className="contact-info-type">LinkedIn</div>
                <div className="contact-info-value">luke-oturi</div>
              </div>
            </a>

            <a href="tel:+254512203796" className="contact-item">
              <div className="contact-item-icon"><IconPhone /></div>
              <div className="contact-item-text">
                <div className="contact-info-type">Phone</div>
                <div className="contact-info-value">+254 51 203796</div>
              </div>
            </a>

            <a href="https://instagram.com/Oturi_l" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-item-icon"><IconInstagram /></div>
              <div className="contact-item-text">
                <div className="contact-info-type">Instagram</div>
                <div className="contact-info-value">@Oturi_l</div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">Luke Oturi<sup>®</sup></span>
        <span className="footer-copy">© 2026 — All Rights Reserved</span>
      </footer>
    </>
  );
}