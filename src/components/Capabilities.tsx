import { motion } from 'framer-motion';
import { CheckCircle2, Download } from 'lucide-react';
import { machineryData } from '../data/content';

// High-end industrial imagery mapped to the cards
const machineImages = [
  "/Infrastructure/1.png", // Heavy Surface Grinder
  "/Infrastructure/2.png", // Precision Tooling
  "/Infrastructure/4.png", // Cutting Systems
  "/Infrastructure/3.png"  // Heavy Operations
];

export default function Capabilities() {
  return (
    <section className="bg-[#020617] py-32 relative overflow-hidden border-t border-white/5">
      
      {/* Premium Background Flares */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1E293B]/30 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#F59E0B] font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              Infrastructure
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Machinery & <br className="hidden md:block" /> Capabilities
            </motion.h2>
          </div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white hover:text-[#020617] transition-all duration-300 font-bold tracking-wide group"
          >
            <Download size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
            Download Equipment List
          </motion.button>
        </div>

        {/* Floating Architectural Cards */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {machineryData.map((machine, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden bg-[#050505] border border-white/5"
            >
              {/* Image Header Block */}
              <div className="h-80 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${machineImages[index]})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10"></div>
              </div>

              {/* Floating Content Box overlapping the image */}
              <div className="relative z-20 -mt-24 mx-4 md:mx-8 mb-8 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-[0_0_40px_rgba(245,158,11,0.05)]">
                
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{machine.title}</h3>
                <p className="text-white/60 mb-8 leading-relaxed text-sm">
                  {machine.desc}
                </p>
                
                {/* Feature List */}
                <ul className="space-y-4 pt-6 border-t border-white/10">
                  {machine.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-4 text-white/80 text-sm font-bold tracking-wide">
                      <div className="w-8 h-8 rounded-full bg-[#F59E0B]/10 flex items-center justify-center shrink-0 text-[#F59E0B]">
                        <CheckCircle2 size={16} strokeWidth={2.5} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Button */}
        <button className="md:hidden w-full mt-10 flex justify-center items-center gap-3 px-8 py-5 border border-white/20 text-white rounded-xl hover:bg-white hover:text-[#020617] transition-all duration-300 font-bold tracking-wide">
          <Download size={18} />
          Download Equipment List
        </button>

      </div>
    </section>
  );
}