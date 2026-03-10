import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Mail, Linkedin, Github } from 'lucide-react';

export default function PortfolioApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Project One",
      category: "Motion Graphics",
      description: "A seamless blend of design and animation. This project showcases dynamic visual storytelling through carefully crafted motion sequences.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video
      year: "2024"
    },
    {
      id: 2,
      title: "Project Two",
      category: "Brand Identity",
      description: "Complete branding system from concept to execution. Includes typography, color palette, and animated brand guidelines.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video
      year: "2024"
    },
    {
      id: 3,
      title: "Project Three",
      category: "Digital Design",
      description: "Interactive design experience combining user experience with sophisticated motion design principles.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video
      year: "2023"
    },
    {
      id: 4,
      title: "Project Four",
      category: "Motion Graphics",
      description: "Experimental motion study exploring the boundaries between graphic design and animation.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video
      year: "2023"
    }
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-tight">YOUR NAME</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-sm font-light hover:text-slate-600 transition">Home</a>
            <a href="#work" className="text-sm font-light hover:text-slate-600 transition">Work</a>
            <a href="#about" className="text-sm font-light hover:text-slate-600 transition">About</a>
            <a href="#contact" className="text-sm font-light hover:text-slate-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-4">
            <a href="#home" className="block text-sm font-light">Home</a>
            <a href="#work" className="block text-sm font-light">Work</a>
            <a href="#about" className="block text-sm font-light">About</a>
            <a href="#contact" className="block text-sm font-light">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 animate-fadeIn">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-light tracking-tight leading-tight">
              Graphic Designer & Motion Artist
            </h1>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              Crafting elegant visual experiences through thoughtful design and seamless motion. Based in Nairobi.
            </p>
          </div>
          
          <div className="pt-8">
            <a 
              href="#work" 
              className="inline-block px-8 py-3 border border-slate-900 text-sm font-light hover:bg-slate-900 hover:text-white transition duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-20 text-slate-900">Selected Work</h2>
          
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
              >
                {/* Video Player */}
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="bg-slate-900 aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <video 
                      controls
                      className="w-full h-full object-cover"
                      poster={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23374151' width='400' height='300'/%3E%3C/svg%3E`}
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex gap-4 items-center">
                      <span className="text-xs font-light tracking-widest text-slate-500 uppercase">{project.category}</span>
                      <span className="text-xs font-light text-slate-400">—</span>
                      <span className="text-xs font-light text-slate-500">{project.year}</span>
                    </div>
                    <h3 className="text-4xl font-light text-slate-900">{project.title}</h3>
                  </div>
                  
                  <p className="text-lg text-slate-600 font-light leading-relaxed">
                    {project.description}
                  </p>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-sm font-light text-slate-900 hover:text-slate-600 transition group"
                  >
                    View Case Study
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <h2 className="text-5xl font-light text-slate-900">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-sm font-light tracking-widest text-slate-500 uppercase">Background</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                With 5+ years of experience in graphic design and motion graphics, I specialize in creating visual narratives that resonate with audiences and elevate brands.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-light tracking-widest text-slate-500 uppercase">Skills</h3>
              <div className="space-y-2 text-slate-600 font-light text-sm leading-relaxed">
                <p>• Motion Graphics & Animation</p>
                <p>• Brand Identity Design</p>
                <p>• Digital Design & UI/UX</p>
                <p>• Adobe Creative Suite</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-light tracking-widest text-slate-500 uppercase">Approach</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                I believe great design is invisible—it communicates clearly and moves people. Every project is an opportunity to solve problems beautifully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl font-light text-slate-900">Let's Work Together</h2>
            <p className="text-xl text-slate-600 font-light">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <a 
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 px-8 py-3 border border-slate-900 text-sm font-light hover:bg-slate-900 hover:text-white transition duration-300"
            >
              <Mail size={18} />
              Send Email
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-sm font-light text-slate-600 hover:text-slate-900 transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-sm font-light text-slate-600 hover:text-slate-900 transition"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-500 font-light">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Source+Sans+Pro:wght@400;500;600&display=swap');
        
        * {
          font-family: 'Source Sans Pro', sans-serif;
        }
        
        h1, h2, h3 {
          font-family: 'Lora', serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        a {
          text-decoration: none;
        }

        video::-webkit-media-controls {
          filter: invert(1);
        }
      `}</style>
    </div>
  );
}