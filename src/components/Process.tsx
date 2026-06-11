import { motion } from 'framer-motion';
import { processData } from '../data/content';

export default function Process() {
  return (
    <section className="bg-[#020617] py-32 border-t border-white/5 relative overflow-hidden">
      
      {/* Subtle Background Grid & Flares */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#F59E0B]/5 blur-[150px] pointer-events-none rounded-[100%]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cinematic Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#F59E0B] font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Workflow
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Our Manufacturing Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto"
          >
            A standardized workflow engineered to ensure absolute precision and quality control from initial inspection to final delivery.
          </motion.p>
        </div>

        {/* The Industrial Pipeline Layout */}
        <div className="relative mt-20">
          
          {/* Glowing Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-white/10 z-0 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-full bg-[#F59E0B] shadow-[0_0_15px_rgba(245,158,11,0.5)] relative"
            >
              {/* Traveling energy dot on the line */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[2px] shadow-[0_0_10px_#fff]"></div>
            </motion.div>
          </div>

          {/* Grid Layout for Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {processData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col items-center group"
              >
                
                {/* 1. Engineered Diamond Node 
                    FIX: Removed the transparent bg hover. Kept it solidly bg-[#020617] so it blocks the line behind it permanently. 
                */}
                <div className="w-16 h-16 bg-[#020617] border border-white/20 rounded-xl transform rotate-45 flex items-center justify-center mb-10 shadow-2xl group-hover:border-[#F59E0B] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all duration-500 shrink-0 z-20 relative">
                  <span className="text-xl font-bold text-[#F59E0B] -rotate-45" style={{ fontFamily: 'var(--font-mono)' }}>
                    {item.step}
                  </span>
                </div>
                
                {/* 2. Glassmorphic Content Card */}
                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl w-full text-center relative overflow-hidden group-hover:bg-white/[0.04] group-hover:border-white/20 transition-all duration-500 h-full flex flex-col items-center">
                  
                  {/* Massive Watermark Step Number inside Card */}
                  <div className="absolute -bottom-6 right-0 text-[100px] font-bold text-white/[0.03] group-hover:text-[#F59E0B]/5 transition-colors duration-500 pointer-events-none select-none leading-none" style={{ fontFamily: 'var(--font-mono)' }}>
                    {item.step}
                  </div>

                  {/* Card Content */}
                  <h3 className="text-xl font-bold text-white mb-4 tracking-wide group-hover:text-[#F59E0B] transition-colors duration-300 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                  
                </div>

              </motion.div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}