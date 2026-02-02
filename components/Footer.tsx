
import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLegal?: (type: 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const companyLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Recent Projects', href: '#projects' },
    { name: 'Client Testimonials', href: '#testimonials' },
  ];

  const serviceLinks = [
    { name: 'Reinforced RCC', href: '#services' },
    { name: 'Interior Finishing', href: '#interiors' },
    { name: 'Structural Engineering', href: '#services' },
    { name: 'Project Execution', href: '#services' },
    { name: 'Quality Assurance', href: '#services' },
  ];

  return (
    <footer className="bg-zinc-900 pt-24 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] inline-block group hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://lh3.googleusercontent.com/d/1WWQnv1BJuNpxBwq3NYM6XDXd3eaVWGGq" 
                  alt="MY Constructions Logo" 
                  className="h-28 md:h-32 w-auto object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Leading the way in structural engineering and architectural excellence. We build durable landmarks with precision and integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.3em] border-l-4 border-construction-safety pl-4">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 text-sm hover:text-construction-safety transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-construction-safety opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.3em] border-l-4 border-construction-safety pl-4">Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 text-sm hover:text-construction-safety transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-construction-safety opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.3em] border-l-4 border-construction-safety pl-4">Newsletter</h4>
            <p className="text-gray-500 text-sm">Stay updated with our latest architectural breakthroughs and news.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm text-white focus:outline-none focus:border-construction-safety transition-all"
              />
              <button className="absolute right-1.5 top-1.5 bg-construction-safety text-white p-2.5 rounded-sm hover:bg-orange-600 transition-colors shadow-lg">
                <ArrowUp className="w-4 h-4 rotate-45" />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} <span className="text-gray-400 font-black">MY CONSTRUCTIONS BUILDERS & DEVELOPERS</span>. Engineering Excellence.
          </p>
          <div className="flex gap-8">
            <button 
              onClick={() => onOpenLegal?.('privacy')}
              className="text-gray-600 text-[10px] uppercase tracking-widest hover:text-white transition-colors outline-none"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenLegal?.('terms')}
              className="text-gray-600 text-[10px] uppercase tracking-widest hover:text-white transition-colors outline-none"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
