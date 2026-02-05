
import React from 'react';
import { ChefHat, DoorOpen, Tv, Briefcase, Maximize, CheckCircle2, Ruler } from 'lucide-react';

const InteriorSpecialisation: React.FC = () => {
  const interiorServices = [
    {
      title: 'Custom Wardrobes',
      desc: 'Expertly crafted sliding, hinged, and walk-in wardrobes tailored to your space.',
      icon: <DoorOpen className="w-8 h-8" />
    },
    {
      title: 'Modular Kitchens',
      desc: 'High-functionality modular kitchen design with premium finishes and ergonomics.',
      icon: <ChefHat className="w-8 h-8" />
    },
    {
      title: 'Living & Dining',
      desc: 'Embedded TV units, partition walls, and custom dining storage solutions.',
      icon: <Tv className="w-8 h-8" />
    },
    {
      title: 'Commercial Fit-outs',
      desc: 'Complete office interiors designed for productivity and corporate brand identity.',
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  const glassWorks = [
    'Toughened Glass Partitions',
    'Glass Railings & Balustrades',
    'Modern Shower Enclosures',
    'Facades & Decorative Glass'
  ];

  return (
    <section id="interiors" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 text-construction-safety mb-6">
              <div className="w-12 h-1 bg-construction-safety"></div>
              <h4 className="uppercase tracking-[0.4em] font-black text-xs italic">Interior Specialisation</h4>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-construction-deep leading-tight mb-8">
              Design & Build <br />
              <span className="text-construction-safety">Excellence</span> Inside.
            </h2>
            <p className="text-construction-steel text-lg leading-relaxed mb-8">
              Beyond structural engineering, MY Constructions specialises in the art of interior finishing. We deliver high-end design and execution for residential and commercial spaces, ensuring every square foot reflects quality and style.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 px-4 py-2 bg-zinc-50 border border-gray-100 rounded-full">
                 <Ruler className="w-4 h-4 text-construction-safety" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-construction-deep">Precision Execution</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-zinc-50 border border-gray-100 rounded-full">
                 <CheckCircle2 className="w-4 h-4 text-construction-safety" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-construction-deep">Premium Materials</span>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interiorServices.map((service, idx) => (
              <div key={idx} className="p-8 bg-zinc-50 border-b-4 border-transparent hover:border-construction-safety hover:shadow-xl transition-all group">
                <div className="text-construction-safety mb-6 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="text-lg font-display font-black text-construction-deep mb-3 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-construction-steel leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Glass Works Highlight Section */}
        <div className="bg-construction-deep p-6 md:p-10 lg:p-16 rounded-sm relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-construction-safety/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
          <div className="relative z-10 grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 text-construction-safety mb-4">
                <Maximize className="w-8 h-8" />
                <h3 className="text-2xl font-display font-black text-white uppercase tracking-tighter italic">Glass Works</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Specialised architectural glass solutions for modern aesthetics and durability.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {glassWorks.map((work, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white/90 group/item">
                  <div className="w-2 h-2 bg-construction-safety rounded-full group-hover/item:scale-150 transition-transform"></div>
                  <span className="text-sm font-bold tracking-wide uppercase">{work}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorSpecialisation;
