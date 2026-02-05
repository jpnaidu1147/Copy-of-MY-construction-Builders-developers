
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-construction-deep overflow-hidden">
      {/* Background with Darker Overlay for better readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-20"
          alt="Construction site background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-construction-deep via-construction-deep/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-32 md:pt-48 lg:pt-64 pb-12 md:pb-20">
        {/* Left Content */}
        <div className="space-y-8 md:space-y-10">
          <div className="flex items-center gap-4 text-construction-safety">
            <div className="w-12 h-1.5 bg-construction-safety"></div>
            <span className="uppercase tracking-[0.4em] font-black text-xs md:text-sm">What we do</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.1]">
            Building <br />
            <span className="text-construction-safety">Trust</span> <br />
            Shaping <br />
            Tomorrow.
          </h1>

          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-lg leading-relaxed">
            From Concept to Keys. Our team delivers reliable solutions tailored to your specific needs.
            We prioritize <span className="text-white font-bold">Quality Assurance</span> and Timely Delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#about" className="bg-construction-safety text-white px-8 py-4 md:px-10 md:py-5 rounded-sm font-black uppercase text-xs md:text-sm tracking-widest hover:bg-orange-600 transition-all flex items-center justify-center gap-3 group shadow-[0_10px_30px_rgba(249,115,22,0.3)]">
              LEARN MORE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="border-2 border-white/20 text-white hover:bg-white/5 px-8 py-4 md:px-10 md:py-5 rounded-sm font-black uppercase text-xs md:text-sm tracking-widest transition-all text-center">
              VIEW PROJECTS
            </a>
          </div>
        </div>

        {/* Right Visual Overlay */}
        <div className="relative hidden md:block">
          <div className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-sm shadow-2xl border-l-[12px] border-construction-safety/30 group">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
              alt="Architecture"
              className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Corner Slant Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-construction-deep translate-x-1/2 -translate-y-1/2 rotate-45 z-20"></div>
          </div>

          {/* Floating Card - Fixed Overlap Issue by using left-0 */}
          <div className="absolute bottom-10 left-0 bg-white p-6 lg:p-8 shadow-2xl max-w-[280px] lg:max-w-[320px] z-30 border-b-8 border-construction-safety">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-construction-safety px-4 py-3 rounded-sm shadow-lg">
                <span className="text-white font-black text-2xl">20+</span>
              </div>
              <span className="text-construction-deep font-display font-black uppercase text-sm tracking-widest leading-tight">
                Professional <br /> Engineers
              </span>
            </div>
            <p className="text-sm text-construction-steel leading-relaxed">
              Specialized in <span className="font-bold text-construction-deep underline decoration-construction-safety/30">Reinforced RCC</span> and complex structural engineering projects across the region.
            </p>
          </div>
          
          {/* Background Decorative Grid */}
          <div className="absolute -top-12 -right-12 bg-dots w-48 h-48 opacity-20 -z-10"></div>
        </div>
      </div>

      {/* Hero Bottom Diagonal Cut */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white clip-path-hero"></div>
    </section>
  );
};

export default Hero;
