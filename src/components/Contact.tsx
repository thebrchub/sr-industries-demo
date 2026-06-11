import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-[#020617] py-32 relative overflow-hidden border-t border-white/5">
      
      {/* Premium Background Flares */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1E293B]/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Offset Grid Layout for a more editorial, high-end feel */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Contact Details (Takes up 5 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-[#F59E0B] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Direct Contact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Build <br /> Something <span className="text-[#F59E0B]">Real.</span>
            </h2>
            <p className="text-white/60 mb-12 text-lg leading-relaxed max-w-md">
              Send us your tooling and grinding requirements. Our engineering team will review your specifications and get back to you promptly.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#F59E0B] shrink-0 group-hover:bg-[#F59E0B] group-hover:text-[#020617] transition-all duration-300 shadow-lg">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div className="mt-1">
                  <h4 className="text-white font-bold mb-1 tracking-wide">Manufacturing Facility</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Kadipur Industrial Area,<br />
                    Gurugram, Haryana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#F59E0B] shrink-0 group-hover:bg-[#F59E0B] group-hover:text-[#020617] transition-all duration-300 shadow-lg">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div className="mt-1">
                  <h4 className="text-white font-bold mb-1 tracking-wide">Direct Lines</h4>
                  <p className="text-white/50 text-sm mb-1 group-hover:text-white transition-colors duration-300">+91 99991 70850</p>
                  <p className="text-white/50 text-sm group-hover:text-white transition-colors duration-300">+91 95990 31886</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#F59E0B] shrink-0 group-hover:bg-[#F59E0B] group-hover:text-[#020617] transition-all duration-300 shadow-lg">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div className="mt-1">
                  <h4 className="text-white font-bold mb-1 tracking-wide">Email Inquiries</h4>
                  <p className="text-white/50 text-sm group-hover:text-white transition-colors duration-300">sales@srindustries.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Glassmorphic Form (Takes up 7 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0B1221]/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
              
              {/* Internal form flare */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-2 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#F59E0B] focus:bg-white/10 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-2 ml-1">Company</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#F59E0B] focus:bg-white/10 transition-all duration-300"
                      placeholder="SR Industries Pvt. Ltd."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-2 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#F59E0B] focus:bg-white/10 transition-all duration-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-2 ml-1">Requirement Details</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#F59E0B] focus:bg-white/10 transition-all duration-300 resize-none"
                    placeholder="Describe your machining, tooling, or material specifications..."
                  ></textarea>
                </div>

                <button className="w-full flex items-center justify-center gap-3 bg-[#F59E0B] hover:bg-amber-400 text-[#020617] px-8 py-5 rounded-xl font-bold tracking-wide transition-all duration-300 group mt-4">
                  <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                  Submit Requirement
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}