"use client";
import { toast } from 'react-hot-toast';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
      formRef.current!, 
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
        toast.success("Success! I'll get back to you soon.", {
          duration: 4000,
          style: {
            background: '#18181b', 
            color: '#fff',
            border: '1px solid #6366f1',
          },
        });
        
        setLoading(false);
        formRef.current?.reset(); 
    }, (error) => {
        console.error(error.text);
        toast.error("Oops! Something went wrong. Please try again.");
        setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full"
      >
        {/* Section Title */}
        <div className="mb-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest text-white/85">
            Contact Us
          </h2>
          <div className="h-1 w-30 md:w-45 bg-indigo-500 mt-2 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* RIGHT SIDE (Form) */}
          <div className="glass p-6 md:p-10 rounded-[2rem] border border-white/5 bg-[#0a0a0a]/40 backdrop-blur-xl relative overflow-hidden group order-1 lg:order-2">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-700" />
            
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
              
              {/* Full Name Input */}
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                <input 
                  name="name" // Matches {{name}} in EmailJS dashboard
                  type="text" 
                  required
                  placeholder="enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm md:text-base text-white focus:outline-none focus:border-indigo-500/50 transition-all duration-300 placeholder:text-zinc-700"
                />
              </div>

              {/* Email Address Input */}
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                <input 
                  name="email" // Matches {{email}} in EmailJS dashboard
                  type="email" 
                  required
                  placeholder="example@gmail.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm md:text-base text-white focus:outline-none focus:border-indigo-500/50 transition-all duration-300 placeholder:text-zinc-700"
                />
              </div>

              {/* Your Message */}
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Your Message</label>
                <textarea 
                  name="message" // Matches {{message}} in EmailJS dashboard
                  rows={4}
                  required
                  placeholder="Let's talk about your next big project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm md:text-base text-white focus:outline-none focus:border-indigo-500/50 transition-all duration-300 placeholder:text-zinc-700 resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-zinc-800 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-lg shadow-indigo-500/20 cursor-pointer text-sm md:text-base"
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* LEFT SIDE (Details) */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                Reach out to me directly
              </h3>
              <p className="text-zinc-400 text-sm md:text-lg leading-relaxed font-light">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-xl shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-0.5">Email Me</p>
                  <p className="text-white font-medium text-sm md:text-lg truncate">shahbazalam4842@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-xl shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-0.5">Call Me</p>
                  <p className="text-white font-medium text-sm md:text-lg">+91 9507034643</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-xl shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-0.5">My Location</p>
                  <p className="text-white font-medium text-sm md:text-lg">Bhopal, Madhya Pradesh India</p>
                </div>
              </div>

              <div className="p-5 rounded-[1.5rem] bg-indigo-500/5 border border-indigo-500/10 relative overflow-hidden group/status">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Current Status</p>
                </div>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Available for <span className="text-zinc-200">Full Stack Developer</span> roles and internships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;