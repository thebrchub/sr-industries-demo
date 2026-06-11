import { motion } from 'framer-motion';
import { trustData, aboutData } from '../data/content';

export default function About() {
  return (
    <section className="bg-[var(--color-background)] py-20 border-b border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Trust Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 pt-8">
          {trustData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center md:text-left border-l border-white/10 pl-6"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                {item.value}
              </h3>
              <p className="text-[var(--color-support)] font-medium text-sm md:text-base uppercase tracking-wider">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Industrial Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-sm overflow-hidden bg-[var(--color-secondary)] group"
          >
            {/* Note: Swap this div out for an actual <img /> tag when you add your Google images */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A] to-[#1E293B] opacity-80 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60"></div>
           <div className="absolute inset-0 m-4 overflow-hidden rounded-2xl border border-white/10 shadow-2xl group">
  <img 
    src="/about.webp" 
    alt="SR Industries Manufacturing Facility" 
    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
  />
  
  {/* Subtle cinematic gradient overlay so it blends beautifully with your dark theme */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80 pointer-events-none"></div>
</div>
            
            {/* Decorative element to make it look premium */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#F59E0B]"></div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-[#F59E0B]"></span>
              <span className="text-[#F59E0B] font-semibold uppercase tracking-widest text-sm">About The Company</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {aboutData.heading}
            </h2>
            <p className="text-lg text-[var(--color-support)] leading-relaxed mb-8">
              {aboutData.description}
            </p>
            <button className="text-white border-b border-[#F59E0B] pb-1 hover:text-[#F59E0B] transition-colors duration-300">
              Read Our History &rarr;
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}