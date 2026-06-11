import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { galleryData } from '../data/content';

export default function Gallery() {
  return (
    <section className="bg-[var(--color-primary)] py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#F59E0B] font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Project Gallery
          </motion.h2>
        </div>

        {/* Flawless Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-6">
          {galleryData.map((item, index) => {
            
            // Dynamic Grid Span Logic (Mobile-Optimized)
            let spanClass = "col-span-1 md:col-span-1 row-span-1 md:row-span-1";
            if (item.size === "large") spanClass = "col-span-1 md:col-span-2 row-span-1 md:row-span-2";
            if (item.size === "medium") spanClass = "col-span-1 md:col-span-2 row-span-1 md:row-span-1";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-2xl bg-[#020617] cursor-pointer border border-white/10 shadow-xl ${spanClass}`}
              >
                {/* High-Res Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Content Reveal Layer */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-end justify-between w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    
                    <div>
                      <span className="text-[#F59E0B] text-xs font-bold tracking-widest uppercase mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.category}
                      </span>
                      <h3 className="text-white text-2xl font-bold tracking-wide">
                        {item.title}
                      </h3>
                    </div>

                    {/* Hover Icon Button */}
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-[#F59E0B] group-hover:text-[#020617] transition-all duration-300 shrink-0">
                      <ArrowUpRight size={20} strokeWidth={2} />
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