"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-5 px-10 md:px-24 max-w-[1400px] mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        {/* Section Title */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl font-semibold uppercase tracking-widest text-white">Contact Us</h2>
          <div className="h-1 w-40 bg-indigo-500 mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: CONTACT DETAILS */}
          <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                Reach out to me directly
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              </p>
            </div>

            <div className="space-y-8">
              {/* Email Detail */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-white font-medium text-lg tracking-tight">shahbazalam4842@gmail.com</p>
                </div>
              </div>

              {/* Mobile Detail */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Call Me</p>
                  <p className="text-white font-medium text-lg tracking-tight">+91 9507034643</p>
                </div>
              </div>

              {/* Location Detail */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">My Location</p>
                  <p className="text-white font-medium text-lg tracking-tight">Bhopal, Madhya Pradesh India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-[#0a0a0a]/40 backdrop-blur-xl relative overflow-hidden group order-1 lg:order-2">
            {/* Subtle Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-700" />
            
            <form className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all duration-300 placeholder:text-zinc-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="enter your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all duration-300 placeholder:text-zinc-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Let's talk about your next big project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all duration-300 placeholder:text-zinc-700 resize-none"
                />
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-lg shadow-indigo-500/20">
                SEND MESSAGE
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;