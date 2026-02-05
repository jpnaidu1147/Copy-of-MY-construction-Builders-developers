
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Packages', href: '#packages', id: 'packages' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-2 md:py-3' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Left Side: Logo & 3D Text */}
        <div className="flex items-center gap-3 lg:gap-4 xl:gap-6">
          <a href="#home" className="block relative group z-50">
            <div className={`
              transition-all duration-500 transform overflow-hidden 
              rounded-xl p-2 bg-white
              ${isScrolled 
                ? 'h-16 md:h-20 shadow-md border-b-2 border-gray-200' 
                : 'h-16 md:h-24 lg:h-28 shadow-[0_15px_30px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,1)] border-b-4 border-r-4 border-gray-100'
              }
              flex items-center justify-center
            `}>
              <img 
                src="https://lh3.googleusercontent.com/d/1WWQnv1BJuNpxBwq3NYM6XDXd3eaVWGGq" 
                alt="MY Constructions Logo" 
                className="h-full w-auto object-contain transition-all duration-500"
              />
            </div>
          </a>

          {/* 3D Company Name - Visible only on XL screens to prevent crowding */}
          <div className={`hidden xl:flex flex-col transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-2'}`}>
            <h1 
              className={`font-display font-black italic tracking-tighter leading-none transition-colors duration-300 
                ${isScrolled ? 'text-construction-deep' : 'text-white'}
                text-2xl xl:text-3xl
              `}
              style={{ 
                textShadow: isScrolled 
                  ? '2px 2px 0px #cbd5e1' 
                  : '2px 2px 0px #f97316, 4px 4px 0px rgba(0,0,0,0.2)' 
              }}
            >
              M&Y CONSTRUCTIONS
            </h1>
            <span className={`font-bold tracking-[0.3em] uppercase mt-1 transition-colors duration-300 
              ${isScrolled ? 'text-construction-safety' : 'text-white/90'}
              text-xs
            `}>
              Builders & Developers
            </span>
          </div>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <div className="flex items-center gap-4 xl:gap-8 bg-black/20 backdrop-blur-md px-4 xl:px-6 py-2 rounded-full border border-white/10 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] xl:text-xs font-bold uppercase tracking-[0.15em] transition-all relative group/link 
                  ${activeSection === link.id ? 'text-construction-safety' : 'text-white hover:text-construction-safety'}
                `}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-construction-safety transition-all duration-300 
                  ${activeSection === link.id ? 'w-full' : 'w-0 group-hover/link:w-full'}
                `}></span>
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-construction-safety text-white px-5 xl:px-6 py-3 rounded-sm font-black uppercase text-[10px] xl:text-xs tracking-widest hover:bg-orange-600 transition-all shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:-translate-y-0.5 active:translate-y-0 transform hover:scale-105 whitespace-nowrap"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-construction-deep' : 'text-white bg-black/20 backdrop-blur-sm'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 animate-fade-in-down z-40">
          <div className="flex flex-col p-8 gap-6">
            <div className="mb-4 pb-4 border-b border-gray-100">
               <h2 className="text-2xl font-display font-black text-construction-deep italic tracking-tighter" style={{ textShadow: '2px 2px 0px #cbd5e1' }}>
                  M&Y CONSTRUCTIONS
               </h2>
               <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-construction-safety mt-1">Builders & Developers</p>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-construction-deep font-black uppercase text-lg border-b border-gray-50 pb-4 tracking-widest 
                  ${activeSection === link.id ? 'text-construction-safety' : ''}
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-construction-safety text-white px-6 py-5 rounded-sm font-black uppercase text-sm mt-4 shadow-lg">
              Get Started Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
