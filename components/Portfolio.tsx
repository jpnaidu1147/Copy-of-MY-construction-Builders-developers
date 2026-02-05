import React, { useState, useCallback, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Eye, X, LayoutGrid, Building, Home, Factory } from 'lucide-react';

type ProjectCategory = 'All' | 'Commercial' | 'Residential' | 'Industrial';

const Portfolio: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = useCallback((image: string) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  const filterButtons: { label: ProjectCategory; icon: React.ReactNode }[] = [
    { label: 'All', icon: <LayoutGrid className="w-4 h-4" /> },
    { label: 'Commercial', icon: <Building className="w-4 h-4" /> },
    { label: 'Residential', icon: <Home className="w-4 h-4" /> },
    { label: 'Industrial', icon: <Factory className="w-4 h-4" /> },
  ];

  return (
    <section id="projects" className="py-24 bg-white overflow-hidden relative">
      {/* Background Decorative Text matching screenshot */}
      <div className="absolute top-10 left-4 md:left-10 text-[5rem] md:text-[12rem] lg:text-[18rem] font-display font-black text-zinc-50 opacity-10 pointer-events-none select-none leading-none break-all">
        Excellence
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8 md:gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-construction-safety mb-6">
              <div className="w-12 h-1 bg-construction-safety"></div>
              <h4 className="uppercase tracking-[0.4em] font-black text-xs">Portfolio</h4>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-black text-construction-deep leading-[1.1]">
              Across <span className="text-construction-safety">Diverse</span> <br /> 
              Sectors
            </h2>
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1 bg-zinc-100 p-1 rounded-sm border border-gray-100 shadow-sm w-full md:w-auto">
            {filterButtons.map((btn) => (
              <button
                key={btn.label}
                onClick={() => setActiveCategory(btn.label)}
                className={`flex items-center gap-2 md:gap-3 px-4 md:px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-sm flex-grow md:flex-grow-0 justify-center
                  ${activeCategory === btn.label 
                    ? 'bg-construction-safety text-white shadow-xl scale-105' 
                    : 'text-construction-steel hover:bg-white hover:text-construction-deep'
                  }
                `}
              >
                {btn.icon}
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px] md:min-h-[600px]">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden bg-construction-deep aspect-[4/5] rounded-sm animate-fade-in shadow-2xl border border-gray-100"
            >
              {/* Image with overlay gradient */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-40"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-construction-deep via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className={`px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border backdrop-blur-md
                  ${project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border-green-500/40' 
                    : 'bg-construction-safety/20 text-construction-safety border-construction-safety/40'
                  }
                `}>
                  {project.status}
                </span>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                <div className="md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-construction-safety text-[10px] font-black uppercase tracking-[0.4em] mb-3 block opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-100">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-display font-black mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <div className="h-1 w-20 bg-construction-safety transition-all duration-500 mb-6 hidden md:block md:w-0 md:group-hover:w-20"></div>
                  <p className="text-gray-300 text-sm mb-8 line-clamp-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-200 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  <div className="flex gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-300">
                    <button 
                      onClick={() => openLightbox(project.image)}
                      className="p-4 md:p-5 bg-white text-construction-deep rounded-sm hover:bg-construction-safety hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl"
                      aria-label="View Image"
                    >
                      <Eye className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State if no projects match */}
        {filteredProjects.length === 0 && (
          <div className="py-40 text-center border-2 border-dashed border-gray-100 rounded-sm bg-zinc-50">
            <p className="text-construction-steel font-bold italic tracking-wider">NO PROJECTS IN THIS CATEGORY YET.</p>
          </div>
        )}
      </div>

      {/* Full-screen Image Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
          <div 
            className="absolute inset-0 bg-construction-deep/98 backdrop-blur-2xl cursor-pointer" 
            onClick={closeLightbox}
          ></div>
          
          <div className="relative z-10 max-w-6xl w-full max-h-full flex flex-col items-center animate-scale-up">
            <button 
              onClick={closeLightbox}
              className="absolute -top-12 md:-top-16 right-0 text-white hover:text-construction-safety transition-all p-3 hover:rotate-90"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />
            </button>
            
            <div className="bg-zinc-900 p-1.5 shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden">
              <img 
                src={lightboxImage} 
                alt="Expanded view" 
                className="max-w-full max-h-[80vh] object-contain block"
                onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.src = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200';
                }}
              />
            </div>
            
            <div className="mt-8 flex items-center gap-6">
              <div className="h-px w-24 bg-white/20"></div>
              <p className="text-white/60 text-[10px] uppercase tracking-[0.5em] font-black">Architecture & Structural Insight</p>
              <div className="h-px w-24 bg-white/20"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;