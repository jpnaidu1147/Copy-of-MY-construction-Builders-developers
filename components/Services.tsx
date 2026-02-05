import React, { useState, useCallback } from 'react';
import { HardHat, Building2, Ruler, Key, ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  HardHat: <HardHat className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
  Ruler: <Ruler className="w-8 h-8" />,
  Key: <Key className="w-8 h-8" />,
};

const serviceDetails: Record<string, { fullDesc: string; features: string[] }> = {
  'civil-structure': {
    fullDesc: "Our structural engineering division specializes in high-durability Reinforced RCC frames. We handle complex foundations for high-rise buildings and industrial plants with a focus on seismic resistance and long-term structural integrity.",
    features: ["Reinforced RCC Frameworks", "High-Rise Foundations", "Seismic Structural Analysis", "Heavy Duty Load Bearing Walls"]
  },
  'civil-interiors': {
    fullDesc: "We provide end-to-end interior finishing works that blend aesthetics with functionality. From corporate offices to luxury residences, our team ensures premium fit-outs and meticulous spatial planning.",
    features: ["Aesthetic Spatial Planning", "Corporate Fit-outs", "High-end Finishing Works", "Acoustic & Lighting Integration"]
  },
  'construction-mgmt': {
    fullDesc: "Our construction management process is built on precision and transparency. We utilize advanced site supervision tools to ensure quality assurance and strict adherence to project timelines.",
    features: ["Project Execution Oversight", "Quality Assurance Protocols", "Timeline & Resource Tracking", "Cost Optimization Strategies"]
  },
  'turnkey-projects': {
    fullDesc: "Our 'From Concept to Keys' approach takes the stress out of building. We manage everything from architectural design and procurement to final construction and hand-over.",
    features: ["Complete Design-Build Solutions", "End-to-End Procurement", "Single Point of Accountability", "Pre-construction Feasibility"]
  }
};

const Services: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const selectedService = SERVICES.find(s => s.id === selectedServiceId);
  const details = selectedServiceId ? serviceDetails[selectedServiceId] : null;

  const handleOpen = useCallback((id: string) => {
    setSelectedServiceId(id);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }, []);

  const handleClose = useCallback(() => {
    setSelectedServiceId(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }, []);

  return (
    <section id="services" className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-white -z-0 hidden md:block"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-construction-deep mb-6 uppercase tracking-tight">
            Construction <br /><span className="text-construction-safety">Solutions</span>
          </h2>
          <div className="w-32 h-2.5 bg-construction-safety"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              onClick={() => handleOpen(service.id)}
              className="group bg-white p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-construction-safety/50 hover:shadow-2xl transition-all duration-500 flex flex-col items-start min-h-[380px] md:min-h-[420px] relative overflow-hidden cursor-pointer rounded-sm"
            >
              <div className="bg-zinc-50 p-6 rounded-sm text-construction-deep group-hover:bg-construction-safety group-hover:text-white transition-all mb-8 relative z-10">
                {iconMap[service.icon]}
              </div>
              
              <h3 className="text-2xl font-display font-black text-construction-deep mb-4 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-construction-steel text-base leading-relaxed mb-10 relative z-10">
                {service.description}
              </p>

              <div className="mt-auto pt-6 w-full border-t border-gray-100 flex justify-between items-center group/btn relative z-20">
                <span className="text-xs uppercase font-black tracking-widest text-construction-deep group-hover/btn:text-construction-safety transition-colors">
                  Read More
                </span>
                <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover/btn:bg-construction-safety group-hover/btn:text-white transition-all transform group-hover/btn:rotate-45 shadow-sm">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-6 md:gap-16 pt-12 border-t border-gray-200">
          {['Reinforced RCC', 'Structural Engineering', 'Finishing Works', 'Project Execution'].map(word => (
            <span key={word} className="text-construction-steel/40 uppercase tracking-[0.2em] md:tracking-[0.3em] font-black text-[10px] hover:text-construction-safety transition-colors cursor-default text-center">
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Explicitly Functional Modal Container */}
      {selectedService && details && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-auto">
          <div 
            className="absolute inset-0 bg-construction-deep/95 backdrop-blur-md animate-fade-in cursor-pointer"
            onClick={handleClose}
          ></div>
          
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-up rounded-sm border-t-[12px] border-construction-safety flex flex-col md:block">
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-construction-steel hover:text-construction-safety hover:rotate-90 transition-all z-20"
              aria-label="Close modal"
            >
              <X className="w-7 h-7 md:w-8 md:h-8" />
            </button>

            <div className="grid md:grid-cols-5 min-h-0 md:min-h-[500px]">
              <div className="bg-zinc-50 p-8 md:col-span-2 hidden md:flex flex-col items-center justify-center text-center border-r border-gray-100">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-construction-safety shadow-xl mb-6 ring-4 ring-zinc-50">
                  {iconMap[selectedService.icon]}
                </div>
                <h4 className="text-xs uppercase tracking-[0.3em] font-black text-construction-steel/60">Construction Unit</h4>
                <p className="font-display font-black text-construction-deep text-lg uppercase mt-2 tracking-tighter">{selectedService.title}</p>
              </div>

              <div className="p-6 md:p-14 md:col-span-3 overflow-y-auto">
                {/* Mobile Icon View */}
                <div className="md:hidden flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                   <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center text-construction-safety">
                      {iconMap[selectedService.icon]}
                   </div>
                   <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-black text-construction-steel/60">Construction Unit</h4>
                      <p className="font-display font-black text-construction-deep text-lg uppercase leading-none">{selectedService.title}</p>
                   </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl md:text-5xl font-display font-black text-construction-deep mb-4 uppercase tracking-tighter leading-none">
                    {selectedService.title}
                  </h3>
                  <div className="w-16 md:w-20 h-1.5 bg-construction-safety mb-6 md:mb-10"></div>
                  <p className="text-construction-steel text-base md:text-lg leading-relaxed italic mb-8 border-l-4 border-zinc-100 pl-6">
                    {details.fullDesc}
                  </p>
                </div>

                <div className="space-y-4 mb-12">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-construction-deep opacity-60">Technical Specifications:</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {details.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4 bg-zinc-50 p-4 rounded-sm border-l-2 border-transparent hover:border-construction-safety transition-all group/feat">
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-construction-safety shrink-0" />
                        <span className="text-sm font-black text-construction-deep/80 group-hover/feat:text-construction-deep">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      const offset = 100;
                      const elementPosition = contactSection.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                      window.history.pushState(null, '', '#contact');
                    }
                  }}
                  className="w-full bg-construction-deep text-white py-4 md:py-6 px-8 rounded-sm font-black uppercase text-xs tracking-[0.3em] hover:bg-construction-safety transition-all shadow-xl flex items-center justify-center gap-4 group"
                >
                  REQUEST CONSULTATION
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;