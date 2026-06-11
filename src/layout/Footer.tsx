import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Infrastructure", href: "#infrastructure" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-[var(--color-background)] px-4 md:px-6 pb-6 pt-10">
      <div className="container mx-auto max-w-[1400px]">
        
        {/* The Master Dark Card Container */}
        <div className="bg-[#050505] rounded-[2.5rem] border border-white/10 relative overflow-hidden px-4 py-16 md:px-16 md:py-24 shadow-2xl">
          
          {/* Low Opacity Background Image */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80 pointer-events-none mix-blend-luminosity"
            style={{ backgroundImage: ("url('/footer.webp')") }}
          ></div>
          
          {/* Subtle Background Flare & Gradient Fades to blend the image seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent z-0 pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F59E0B]/5 blur-[150px] pointer-events-none rounded-full z-0"></div>

          {/* 1. Centered Top Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center mb-16 md:mb-20 relative z-10"
          >
            <img 
              src="/logo.svg" 
              alt="SR Industries Logo" 
              className="h-16 md:h-24 w-auto transition-transform duration-300 hover:scale-[1.02]" 
            />
          </motion.div>

          {/* 2. Main CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-6xl mx-auto mb-20 md:mb-24 relative z-10 px-2 md:px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-10 leading-tight md:leading-[1.15]" style={{ fontFamily: 'var(--font-heading)' }}>
              Looking For Precision Tooling <br className="hidden md:block" /> & Grinding Solutions?
            </h2>
            
            <button className="bg-white text-[#050505] hover:bg-[#F59E0B] hover:text-white w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 rounded-xl font-bold text-base md:text-lg tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Discuss Your Requirement
            </button>
          </motion.div>

          {/* 3. Bottom Footer Strip */}
          <div className="pt-10 border-t border-white/10 flex flex-col relative z-10 flex-grow">
            
            {/* Top Row: Copyright, Nav, Socials */}
            {/* Increased bottom margin on desktop (md:mb-14) to space out the separator line */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 mb-10">
              
              {/* Copyright (Takes up equal width on desktop to keep Nav perfectly centered) */}
              <div className="text-white/30 text-xs tracking-wide order-3 md:order-1 text-center md:text-left flex-1">
                &copy; {currentYear} SR Industries – All rights reserved.
              </div>

              {/* Navigation */}
              <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 order-1 md:order-2">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white/50 hover:text-[#F59E0B] text-xs font-bold tracking-wider uppercase transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Social Icons */}
              <div className="flex items-center justify-center md:justify-end gap-6 order-2 md:order-3 flex-1">
                <a href="#" className="text-white/30 hover:text-[#F59E0B] transition-colors duration-300">
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="text-white/30 hover:text-[#F59E0B] transition-colors duration-300">
                  <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="text-white/30 hover:text-[#F59E0B] transition-colors duration-300">
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>

            {/* Bottom Centered Attribution Link */}
            {/* Added md:pt-12 to push the text further down from the border on large screens */}
            <div className="text-center pt-6 mt-auto border-t border-white/5">
    <div className="text-white/40 text-sm tracking-wide">
      Demo created by <a href="https://www.brchub.tech" target="_blank" rel="noopener noreferrer" className="text-white/80 font-bold hover:text-[#F59E0B] transition-colors duration-300 underline underline-offset-4">BRC HUB LLP</a>
    </div>
  </div>

          </div>
        </div>
      </div>
    </footer>
  );
}