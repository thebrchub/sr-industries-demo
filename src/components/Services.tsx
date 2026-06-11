import { motion } from 'framer-motion';
import { Layers, Box, Scissors, Wrench, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/content';

const IconMap: Record<string, any> = {
  Layers,
  Box,
  Scissors,
  Wrench
};

export default function Services() {
  return (
    <section className="bg-[var(--color-primary)] py-32 relative overflow-hidden">
      {/* Premium subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#F59E0B] font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" 
            >
              Capabilities & Services
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-md md:text-right"
          >
            Specialized manufacturing and tooling operations ensuring micron-level accuracy for industrial applications.
          </motion.p>
        </div>

        {/* Cinematic Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = IconMap[service.icon];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl h-[460px] cursor-pointer bg-[#020617] border border-white/10 shadow-2xl"
              >
                {/* Background Image with Zoom Effect (Kept at a static opacity to prevent flashing) */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-50"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* 1. Base Gradient Overlay (Always Visible) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
                
                {/* 2. Hover Darkening Overlay (Fades in smoothly over 500ms without snapping) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/95 to-[#020617]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content Layer */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  
                  {/* Icon Badge */}
                  <div className="w-16 h-16 bg-[#F59E0B] text-[#020617] flex items-center justify-center rounded-[1rem] mb-4 shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-lg relative z-10">
                    <IconComponent size={28} strokeWidth={2} />
                  </div>
                  
                  {/* Title Wrapper: Fixed height locks baseline */}
                  <div className="h-[4.5rem] flex items-end relative z-10">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#F59E0B] tracking-wide leading-tight whitespace-pre-line transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Expandable Content Layer */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out relative z-10">
                    <div className="overflow-hidden min-h-0">
                      <div className="pt-4 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pb-1">
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                          {service.desc}
                        </p>
                        
                        <div className="flex items-center gap-3 text-[#F59E0B] text-sm font-bold tracking-widest uppercase">
                          Explore Details 
                          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}