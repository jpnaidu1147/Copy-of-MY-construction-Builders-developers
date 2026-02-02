
import React from 'react';
import { PACKAGES } from '../constants';
import { Check, Info } from 'lucide-react';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-construction-safety mb-4">
            <div className="w-8 h-1 bg-construction-safety"></div>
            <h4 className="uppercase tracking-widest font-black text-sm">Pricing Strategy</h4>
            <div className="w-8 h-1 bg-construction-safety"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-construction-deep leading-tight mb-6">
            Our Construction <span className="text-construction-safety">Packages</span>
          </h2>
          <p className="text-construction-steel text-lg">
            Transparent pricing models designed to suit different requirements and budget ranges, from foundational homes to ultra-luxury villas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className="group relative flex flex-col bg-white border border-gray-200 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:-translate-y-2"
            >
              {/* Header */}
              <div className={`p-8 ${pkg.accent} text-white`}>
                <h3 className="text-xl font-display font-black mb-2 tracking-tight uppercase">{pkg.name}</h3>
                <div className="text-3xl font-black mb-1">{pkg.price}</div>
                <p className="text-white/80 text-xs font-bold uppercase tracking-wider">{pkg.description}</p>
              </div>

              {/* Inclusions */}
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-construction-steel mb-6">Inclusions:</h4>
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-construction-deep leading-snug group-hover:translate-x-1 transition-transform">
                      <Check className="w-4 h-4 text-construction-safety shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal For */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-2 text-construction-safety">
                    <Info className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Ideal For</span>
                  </div>
                  <p className="text-xs text-construction-steel font-bold leading-relaxed italic">
                    {pkg.idealFor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notes Section */}
        <div className="mt-16 bg-zinc-50 border-l-4 border-construction-safety p-8 md:p-10 shadow-sm rounded-sm max-w-5xl mx-auto animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <h5 className="font-display font-black text-xl text-construction-deep uppercase tracking-tighter">📝 Important Notes</h5>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-8 h-1 bg-construction-safety/30 mb-4"></div>
              <p className="text-sm text-construction-steel leading-relaxed font-bold">
                Prices are indicative and may vary based on design and site conditions
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-1 bg-construction-safety/30 mb-4"></div>
              <p className="text-sm text-construction-steel leading-relaxed font-bold">
                Customization available for all packages to meet your specific vision
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-1 bg-construction-safety/30 mb-4"></div>
              <p className="text-sm text-construction-steel leading-relaxed font-bold">
                Applicable mainly for Bangalore and surrounding areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
