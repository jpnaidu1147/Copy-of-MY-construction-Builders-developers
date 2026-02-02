import React from 'react';
import { ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const headerOffset = 100;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', '#projects');
    }
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative z-10 overflow-hidden shadow-2xl rounded-sm">
              <img 
                src="https://lh3.googleusercontent.com/d/1mI123jGYc_3zJxMUO7NBNmSq7TEDkBBY" 
                alt="Engineers discussing blueprints"
                className="w-full h-auto"
              />
            </div>
            {/* Background Accent Grid */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-construction-safety/10 -z-0"></div>
            <div className="absolute -top-10 -right-10 bg-dots w-40 h-40 opacity-20 -z-10"></div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="flex items-center gap-4 text-construction-safety">
              <span className="uppercase tracking-[0.4em] font-bold text-xs italic">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-construction-deep leading-tight">
              We Help Your <br />
              <span className="text-construction-safety underline decoration-2 underline-offset-8">Business Grow</span>
            </h2>

            <p className="text-construction-steel leading-relaxed text-lg">
              At <span className="font-bold text-construction-deep">MY Constructions</span>, we pride ourselves on offering personalized support that helps you reach your goals. Every project is approached with dedication and attention to detail, ensuring the best possible outcome.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4 p-4 border border-gray-100 bg-zinc-50 hover:border-construction-safety transition-colors">
                <div className="text-construction-safety shrink-0">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-construction-deep uppercase text-sm mb-1">Exceptional Care</h4>
                  <p className="text-xs text-construction-steel">Professional consulting tailored to meet your unique business challenges.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border border-gray-100 bg-zinc-50 hover:border-construction-safety transition-colors">
                <div className="text-construction-safety shrink-0">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-construction-deep uppercase text-sm mb-1">Reliable Service</h4>
                  <p className="text-xs text-construction-steel">Reliable customer support designed to provide fast and effective solutions.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button 
                onClick={scrollToProjects}
                className="bg-construction-deep text-white px-10 py-4 rounded-sm font-bold uppercase text-xs tracking-[0.2em] hover:bg-construction-safety transition-all shadow-lg active:scale-95"
              >
                Discover More About Our Work
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;