import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

export default function PortfolioApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Kinetic Brand Evolution",
      category: "Motion Graphics",
      description: "A seamless blend of design and animation. This project showcases dynamic visual storytelling through carefully crafted motion sequences that elevate brand identity.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      year: "2024",
      color: "from-blue-600 to-cyan-500"
    },
    {
      id: 2,
      title: "Identity System Design",
      category: "Brand Identity",
      description: "Complete branding system from concept to execution. Includes typography, color palette, and animated brand guidelines with meticulous attention to detail.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      year: "2024",
      color: "from-purple-600 to-pink-500"
    },
    {
      id: 3,
      title: "Digital Experience Design",
      category: "Digital Design",
      description: "Interactive design experience combining user experience with sophisticated motion design principles. Created to engage and inspire.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      year: "2023",
      color: "from-orange-600 to-red-500"
    },
    {
      id: 4,
      title: "Motion Study Series",
      category: "Motion Graphics",
      description: "Experimental motion study exploring the boundaries between graphic design and animation. Pushing creative limits.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      year: "2023",
      color: "from-green-600 to-emerald-500"
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-50 overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            YOUR NAME
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {['Home', 'Work', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white transition"
            type="button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-6 py-6 space-y-4 animate-slideDown">
            {['Home', 'Work', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-medium text-slate-300 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-6 animate-fadeInUp">
            <div className="inline-block">
              <span className="text-sm font-medium text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text tracking-widest uppercase">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Creative Vision
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                In Motion
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Crafting elegant visual experiences through thoughtful design and seamless motion. Specializing in brand identity and motion graphics.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fadeInUp animation-delay-300">
            <a 
              href="#work" 
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white hover:bg-slate-800/50 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          </div>
          
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative"
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:auto-cols-fr md:grid-flow-dense' : ''}`}>
                  {/* Video Player */}
                  <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <div className="relative bg-slate-900 aspect-video rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-colors group-hover:shadow-2xl group-hover:shadow-blue-500/10 duration-300">
                      <video 
                        controls
                        className="w-full h-full object-cover"
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%231e293b' width='400' height='300'/%3E%3C/svg%3E"
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className={`h-1 w-12 bg-gradient-to-r ${project.color}`}></span>
                        <span className="text-xs font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text tracking-widest uppercase">{project.category}</span>
                      </div>
                      <h3 className="text-5xl font-black tracking-tight leading-tight">{project.title}</h3>
                      <p className="text-sm font-medium text-slate-400">{project.year}</p>
                    </div>
                    
                    <p className="text-lg text-slate-300 leading-relaxed font-light">
                      {project.description}
                    </p>
                    
                    <button 
                      type="button"
                      className="group/btn inline-flex items-center gap-3 text-sm font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text hover:from-blue-300 hover:to-purple-300 transition-all"
                    >
                      View Case Study
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group p-8 rounded-2xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
              <h3 className="text-sm font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text tracking-widest uppercase mb-4">Background</h3>
              <p className="text-slate-300 leading-relaxed font-light">
                With 5+ years of experience in graphic design and motion graphics, I specialize in creating visual narratives that resonate with audiences and elevate brands to new heights.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5">
              <h3 className="text-sm font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text tracking-widest uppercase mb-4">Skills</h3>
              <div className="space-y-3 text-slate-300 font-light text-sm">
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>Motion Graphics &amp; Animation</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>Brand Identity Design</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>Digital Design &amp; UI/UX</p>
                <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>Adobe Creative Suite</p>
              </div>
            </div>
            
            <div className="group p-8 rounded-2xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/30 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5">
              <h3 className="text-sm font-bold text-transparent bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text tracking-widest uppercase mb-4">Philosophy</h3>
              <p className="text-slate-300 leading-relaxed font-light">
                I believe great design is invisible—it communicates clearly and moves people emotionally. Every project is an opportunity to solve problems beautifully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let&apos;s Create Together
              </span>
            </h2>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. Let&apos;s bring your vision to life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <a 
              href="mailto:your.email@example.com"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile"
              rel="noreferrer"
              target="_blank"
              className="group px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white hover:bg-slate-800/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a 
              href="https://github.com/yourprofile"
              rel="noreferrer"
              target="_blank"
              className="group px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white hover:bg-slate-800/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500 font-light">© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Lora:wght@400;500;600&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        a {
          text-decoration: none;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(100, 116, 139, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.8);
        }
      `}</style>
    </div>
  );
}