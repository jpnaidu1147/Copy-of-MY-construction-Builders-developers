
import React, { useEffect, useState, useCallback } from 'react';
import { ArrowUp, X, ShieldAlert, FileText } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import InteriorSpecialisation from './components/InteriorSpecialisation';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { TESTIMONIALS } from './constants';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    // 1. Handle Smooth Scrolling with Offset
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          const targetId = href.slice(1);
          const section = document.getElementById(targetId);
          
          if (section) {
            e.preventDefault();
            const headerOffset = 100;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
            
            window.history.pushState(null, '', href);
          }
        }
      }
    };

    // 2. Active Section Highlighting
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'services', 'interiors', 'packages', 'projects', 'contact', 'testimonials'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    document.addEventListener('click', handleNavClick);
    return () => {
      document.removeEventListener('click', handleNavClick);
      observer.disconnect();
    };
  }, []);

  const openLegalModal = useCallback((type: 'privacy' | 'terms') => {
    setLegalModal(type);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLegalModal = useCallback(() => {
    setLegalModal(null);
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="bg-construction-safety py-12 relative z-20 shadow-2xl">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Completed Projects', value: '250+' },
              { label: 'Happy Clients', value: '180+' },
              { label: 'Years Experience', value: '15+' },
              { label: 'Professional Engineers', value: '20+' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2 font-display">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/80 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-white">
          <About />
        </div>
        
        <section className="py-20 bg-zinc-900 text-white slant-left relative z-10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-8 leading-tight">
              Transforming <span className="text-construction-safety">Visions</span> Into <br /> 
              Structural Realities.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Our multidisciplinary team specializes in high-stakes civil engineering where precision is the only standard.
            </p>
          </div>
        </section>

        <div className="bg-zinc-50">
          <Services />
        </div>

        <InteriorSpecialisation />

        <Packages />
        
        <div className="bg-white">
          <Portfolio />
        </div>
        
        <section id="testimonials" className="py-24 bg-zinc-100 border-y border-gray-200 overflow-hidden">
          <div className="container mx-auto px-6 text-center mb-16">
            <h4 className="text-construction-safety uppercase tracking-widest font-bold text-sm mb-4">Clients</h4>
            <h2 className="text-4xl font-display font-black text-construction-deep">Testimonials</h2>
          </div>
          <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
             {TESTIMONIALS.map((testimonial, idx) => (
               <div key={testimonial.id} className={`bg-white p-10 shadow-xl border-t-8 ${idx % 2 === 0 ? 'border-construction-safety' : 'border-construction-deep'}`}>
                 <div className="flex text-construction-safety mb-6">
                   {[...Array(5)].map((_, i) => (
                     <span key={i} className="text-xl">⭐</span>
                   ))}
                 </div>
                 <p className="text-construction-steel italic text-base leading-relaxed mb-8">
                   "{testimonial.content}"
                 </p>
                 <div className="flex items-center gap-4">
                   <img src={testimonial.avatar} className="w-12 h-12 rounded-full grayscale" alt={testimonial.name} />
                   <div>
                     <h5 className="font-bold text-construction-deep">{testimonial.name}</h5>
                     <p className="text-[10px] text-construction-steel uppercase tracking-widest font-bold">{testimonial.role}</p>
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </section>

        <Contact />
      </main>

      <Footer onOpenLegal={openLegalModal} />
      
      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-construction-safety text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* Legal Modal Overlay */}
      {legalModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-construction-deep/95 backdrop-blur-sm animate-fade-in"
            onClick={closeLegalModal}
          ></div>
          <div className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl rounded-sm p-8 md:p-12 animate-scale-up border-t-8 border-construction-safety">
            <button 
              onClick={closeLegalModal}
              className="absolute top-6 right-6 text-construction-steel hover:text-construction-safety transition-all"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-zinc-50 rounded-sm text-construction-safety">
                {legalModal === 'privacy' ? <ShieldAlert size={24} /> : <FileText size={24} />}
              </div>
              <h2 className="text-2xl font-display font-black text-construction-deep uppercase tracking-tighter italic">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h2>
            </div>

            <div className="prose prose-sm text-construction-steel leading-relaxed space-y-6">
              {legalModal === 'privacy' ? (
                <>
                  <p className="font-bold">Your privacy is important to us. It is MY Constructions' policy to respect your privacy regarding any information we may collect from you across our website.</p>
                  <h4 className="text-construction-deep font-black uppercase text-xs tracking-widest">1. Data Collection</h4>
                  <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
                  <h4 className="text-construction-deep font-black uppercase text-xs tracking-widest">2. Usage</h4>
                  <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft.</p>
                  <h4 className="text-construction-deep font-black uppercase text-xs tracking-widest">3. Sharing</h4>
                  <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                </>
              ) : (
                <>
                  <p className="font-bold">By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations.</p>
                  <h4 className="text-construction-deep font-black uppercase text-xs tracking-widest">1. Use License</h4>
                  <p>Permission is granted to temporarily download one copy of the materials on MY Constructions' website for personal, non-commercial transitory viewing only.</p>
                  <h4 className="text-construction-deep font-black uppercase text-xs tracking-widest">2. Accuracy of Materials</h4>
                  <p>The materials appearing on MY Constructions' website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete or current.</p>
                  <h4 className="text-construction-deep font-black uppercase text-xs tracking-widest">3. Limitations</h4>
                  <p>In no event shall MY Constructions or its suppliers be liable for any damages arising out of the use or inability to use the materials on MY Constructions' website.</p>
                </>
              )}
            </div>

            <button 
              onClick={closeLegalModal}
              className="mt-12 w-full bg-construction-deep text-white py-4 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-construction-safety transition-all"
            >
              Close Document
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
