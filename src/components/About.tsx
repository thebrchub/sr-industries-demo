import { motion } from 'framer-motion';
import { trustData, aboutData } from '../data/content';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    
    <section className="bg-[#020617] py-12 md:py-32 border-b border-white/5 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E293B]/30 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Trust Strip */}
        {/* FIX: Reduced mobile bottom margin (mb-16) and top padding (pt-2) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-8 mb-16 md:mb-32 pt-2 md:pt-8">
          {trustData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center md:text-left border-l border-white/10 pl-4 md:pl-6"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                {item.value}
              </h3>
              <p className="text-white/60 font-bold text-xs md:text-sm uppercase tracking-wider">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Industrial Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group border border-white/10 shadow-2xl"
          >
            <img 
              src="/about.webp" 
              alt="SR Industries Manufacturing Facility" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            
            {/* Cinematic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-80 pointer-events-none"></div>
            
            {/* Decorative bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#F59E0B]"></div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-12 bg-[#F59E0B]"></span>
              <span className="text-[#F59E0B] font-bold uppercase tracking-widest text-xs">About The Company</span>
            </div>
            
            {/* FIX: Adjusted heading size for mobile */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {aboutData.heading}
            </h2>
            
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-10">
              {aboutData.description}
            </p>
            
            <button className="group flex items-center gap-3 text-white border-b border-[#F59E0B] pb-1 hover:text-[#F59E0B] transition-colors duration-300 font-bold uppercase tracking-wider text-sm">
              Read Our History 
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}