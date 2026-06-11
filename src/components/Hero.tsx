import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Phone, 
  ChevronRight,
  Settings,
  Layers,
  Scissors,
  Wrench,
  Cpu,
  Clock,
  ShieldCheck,
  Target
} from 'lucide-react';
import Navbar from '../layout/Navbar';

const rightCards = [
  { title: "SURFACE GRINDING", subtitle: "High precision surface finishing", icon: Layers },
  { title: "MOULD BASE GRINDING", subtitle: "Accurate mould & die solutions", icon: Settings },
  { title: "SHEARING CUTTERS", subtitle: "Sharp. Strong. Reliable.", icon: Scissors },
  { title: "INDUSTRIAL TOOLING", subtitle: "Custom tooling for every need", icon: Wrench },
];

const bottomStrip = [
  { title: "High Precision", subtitle: "Micron Level Accuracy", icon: Target },
  { title: "Advanced Machinery", subtitle: "Modern & Reliable", icon: Cpu },
  { title: "On-Time Delivery", subtitle: "Committed to You", icon: Clock },
  { title: "Quality Assured", subtitle: "100% Inspection", icon: ShieldCheck },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#020617] pt-32 pb-48 md:pb-56">
      
      {/* Modular Navbar */}
      <Navbar />

      {/* Cinematic Background Image & Dark Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero.webp")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 to-[#020617]/40 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-0"></div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-6 relative z-10 my-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 max-w-2xl"
          >
            <p className="text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase mb-5">
              Precision Engineering. Superior Results.
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white mb-6 leading-[1.15]">
              Precision Grinding & <br/> Tooling Solutions <br/>
              <span className="text-[#F59E0B]">Built For Industry</span>
            </h1>
            
            <p className="text-base md:text-lg text-[var(--color-support)]/80 mb-8 md:mb-10 leading-relaxed max-w-xl">
              High-accuracy grinding, tooling and industrial machining services for steel plates, moulds, cutting tools and more. Trusted by manufacturers across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button className="flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-sm font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5">
                GET A QUOTE <ArrowRight size={18} />
              </button>
              <button className="flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-sm font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5">
                <Phone size={18} className="text-[#F59E0B]" /> CALL NOW
              </button>
            </div>
          </motion.div>

          {/* Right Column: Premium Stacked Cards - Updated to true glassmorphism */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full max-w-md lg:max-w-none mx-auto">
            {rightCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
                  // Reduced bg opacity to /30, increased blur to lg, changed radius to 2xl, added shadow
                  className="group bg-[#0B1221]/30 backdrop-blur-lg border border-white/10 p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] transition-all duration-300 shadow-2xl"
                >
                  <div className="flex items-center gap-5">
                    {/* Rounded the icon container to match the outer card */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 group-hover:border-[#F59E0B]/40 group-hover:bg-[#F59E0B]/10 transition-all duration-300">
                      <IconComponent className="text-[#F59E0B]" size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-wider mb-1 group-hover:text-[#F59E0B] transition-colors duration-300">{card.title}</h4>
                      <p className="text-white/60 text-xs">{card.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-white/30 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all duration-300" />
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>

      {/* 4. Bottom Trust Strip (Frosted Glass Panel) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-0 right-0 px-6 z-20 hidden md:block"
      >
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto bg-[#0F172A]/60 backdrop-blur-xl border border-white/10 rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 shadow-2xl overflow-hidden">
            {bottomStrip.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="p-6 flex items-center gap-4 group cursor-default transition-colors duration-300 hover:bg-white/[0.02]">
                  <IconComponent className="text-[#F59E0B] opacity-80 group-hover:opacity-100 transition-opacity" size={26} strokeWidth={1.5} />
                  <div>
                    <h5 className="text-white font-bold text-sm mb-0.5 tracking-wide">{item.title}</h5>
                    <p className="text-white/40 text-xs">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

    </section>
  );
}