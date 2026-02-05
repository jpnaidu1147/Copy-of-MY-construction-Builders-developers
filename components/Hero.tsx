
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Background with Darker Overlay for better readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/d/18iD7RN-QhX4BSxIVfHT8JoHUr7xpnn0E"
          className="w-full h-full object-cover"
          alt="Construction site background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 md:pt-48 lg:pt-64 pb-12 md:pb-20">
        {/* Left Content */}
        <div className="max-w-4xl space-y-8 md:space-y-10">
          <div className="flex items-center gap-4 text-construction-safety">
            <div className="w-12 h-1.5 bg-construction-safety"></div>
            <span className="uppercase tracking-[0.4em] font-black text-xs md:text-sm">What we do</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black text-white/80 leading-[1.1]">
            Building <br />
            <span className="text-construction-safety">Trust</span> <br />
            Shaping <br />
            Tomorrow.
          </h1>

          <p className="text-gray-200 text-base md:text-lg lg:text-xl max-w-lg leading-relaxed shadow-sm">
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
      </div>

      {/* Hero Bottom Diagonal Cut */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white clip-path-hero"></div>
    </section>
  );
};

export default Hero;
