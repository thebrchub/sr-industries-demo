import { motion } from 'framer-motion';
import { Factory, ArrowRight } from 'lucide-react';
import { whyChooseUsData, industriesData } from '../data/content';

// Premium industrial images mapped to your existing industries data
const industryImages = [
  "industries/1.webp", // Automotive
  "industries/2.webp", // Packaging
  "industries/3.webp", // Printing
  "industries/4.webp", // Steel
  "industries/5.webp", // Heavy Mfg
  "industries/6.webp"  // Industrial Equip
];

export default function Industries() {
  return (
    <section className="bg-[#020617] py-32 border-t border-white/5 relative overflow-hidden">
      
      {/* Cinematic Background Flares */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F59E0B]/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1E293B]/50 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* =========================================
            PART 1: WHY CHOOSE US (Premium Cards)
            ========================================= */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            {/* <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
            >
              <Target className="w-10 h-10 text-[#F59E0B]" strokeWidth={1.5} />
            </motion.div> */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Clients Choose Us</h2>
            <p className="text-white/60 text-lg">Beyond just machining, we deliver absolute reliability. Here is why procurement teams trust SR Industries.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500"
              >
                {/* Massive Watermark Number */}
                <div className="absolute -top-6 -right-4 text-[120px] font-bold text-white/[0.03] group-hover:text-[#F59E0B]/5 transition-colors duration-500 pointer-events-none" style={{ fontFamily: 'var(--font-mono)' }}>
                  0{index + 1}
                </div>
                
                <div className="relative z-10">
                  <div className="text-[#F59E0B] font-bold text-xl mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                    0{index + 1}.
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-24"></div>

        {/* =========================================
            PART 2: INDUSTRIES WE SERVE (Image Cards)
            ========================================= */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#F59E0B] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                Sectors We Power
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h2>
              <p className="text-white/60 text-lg">Delivering specialized components and precision grinding for diverse manufacturing sectors.</p>
            </div>
            <motion.div 
              initial={{ opacity: 0, rotate: -45 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Factory className="text-white/5 w-24 h-24 hidden md:block" strokeWidth={1} />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-[320px] rounded-2xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                  style={{ backgroundImage: `url(${industryImages[index]})` }}
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                
                {/* Card Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-end justify-between w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                    <h3 className="text-white font-bold text-2xl tracking-wide group-hover:text-[#F59E0B] transition-colors duration-300 w-3/4">
                      {industry}
                    </h3>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-[#F59E0B] group-hover:text-[#020617] transition-all duration-300 shrink-0">
                      <ArrowRight size={20} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}