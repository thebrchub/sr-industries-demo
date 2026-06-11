import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to trigger the shrink/blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-[#020617]/85 backdrop-blur-md border-white/10 shadow-2xl py-2' 
            : 'bg-[#020617]/40 backdrop-blur-sm border-white/5 py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between transition-all duration-500">
          
          {/* Logo Area
          <div className="flex flex-col cursor-pointer group">
            <span className="text-[#F59E0B] font-bold text-3xl leading-none group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>SR</span>
            <span className="text-white font-bold text-xl tracking-wide leading-none mt-1">INDUSTRIES</span>
            <span className="text-white/50 text-[10px] tracking-widest uppercase mt-1">Precision. Performance. Reliability.</span>
          </div> */}

{/* Logo Area */}
<div className="flex items-center cursor-pointer">
  <img 
    src="/logo.svg" 
    alt="SR Industries Logo" 
    className="h-12 md:h-16 w-auto transition-transform duration-300 hover:scale-[1.02]" 
  />
</div>
          {/* Desktop Right Nav Actions */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="bg-[#F59E0B]/10 p-2 rounded-full text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-[#020617] transition-all duration-300">
                <Phone size={20} fill="currentColor" className="group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-white/60 text-xs font-medium group-hover:text-white/80 transition-colors">Call Us Now</p>
                <p className="text-white font-bold tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>+91 99991 70850</p>
              </div>
            </div>
            
            <button className="border border-[#F59E0B]/30 hover:bg-[#F59E0B] hover:text-[#020617] text-white px-6 py-3 rounded-sm text-sm font-bold tracking-wider flex items-center gap-2 transition-all duration-300 group">
              GET A QUOTE 
              <ArrowRight size={16} className="text-[#F59E0B] group-hover:text-[#020617] group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white hover:text-[#F59E0B] transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#020617] flex flex-col px-6 py-8 md:hidden"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between mb-12">
              <div className="flex flex-col">
                <span className="text-[#F59E0B] font-bold text-3xl leading-none" style={{ fontFamily: 'var(--font-heading)' }}>SR</span>
                <span className="text-white font-bold text-xl tracking-wide leading-none mt-1">INDUSTRIES</span>
              </div>
              <button 
                className="text-white/50 hover:text-white bg-white/5 p-2 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-6 mt-auto mb-10">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex items-center gap-4">
                <div className="bg-[#F59E0B]/10 p-3 rounded-full text-[#F59E0B]">
                  <Phone size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-white/50 text-sm font-medium mb-1">Direct Line</p>
                  <p className="text-white font-bold text-lg tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>+91 99991 70850</p>
                </div>
              </div>

              <button className="w-full bg-[#F59E0B] text-[#020617] py-4 rounded-sm font-bold tracking-widest flex items-center justify-center gap-2 transition-transform active:scale-95">
                REQUEST QUOTATION <ArrowRight size={20} />
              </button>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}