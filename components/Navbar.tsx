
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-6 md:py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Refined 3D Logo Container */}
        <div className="flex items-center">
          <a href="#home" className="block relative group">
            <div className={`
              transition-all duration-500 transform overflow-hidden 
              rounded-xl p-2 bg-white
              ${isScrolled 
                ? 'h-14 md:h-16 shadow-md border-b-2 border-gray-200' 
                : 'h-20 md:h-24 shadow-[0_15px_30px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,1)] border-b-4 border-r-4 border-gray-100'
              }
              flex items-center justify-center
            `}>
              <img 
                src="https://lh3.googleusercontent.com/d/1WWQnv1BJuNpxBwq3NYM6XDXd3eaVWGGq" 
                alt="MY Constructions Logo" 
                className="h-full w-auto object-contain transition-all duration-500"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-black uppercase tracking-[0.2em] transition-all relative group/link 
                  ${isScrolled ? 'text-construction-deep' : 'text-white'}
                  ${activeSection === link.id ? 'text-construction-safety' : 'hover:text-construction-safety'}
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
            className="bg-construction-safety text-white px-8 py-3.5 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-construction-deep' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 animate-fade-in-down">
          <div className="flex flex-col p-8 gap-6">
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
            <button className="bg-construction-safety text-white px-6 py-5 rounded-sm font-black uppercase text-sm mt-4">
              Get Started Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
