"use client";
import { toast } from 'react-hot-toast';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from_name: formData.get("from_name"),
          from_email: formData.get("from_email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send");
      }

      toast.success("Success! I'll get back to you soon.", {
        duration: 4000,
        style: {
          background: '#18181b',
          color: '#fff',
          border: '1px solid #6366f1',
        },
      });

      form.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      toast.error(message, {
        duration: 4000,
        style: {
          background: '#18181b',
          color: '#fff',
          border: '1px solid #ef4444',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-10 px-6 md:px-24 mb-5 max-w-[1400px] mx-auto relative z-10">
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
            Get In Touch
          </h2>
          <div className="h-1 w-30 md:w-45 bg-indigo-500 mt-2 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* RIGHT SIDE (Form) */}
          <div className="glass p-6 md:p-10 rounded-[1rem] border border-white/5 bg-[#0a0a0a]/40 backdrop-blur-xl relative overflow-hidden group order-1 lg:order-2">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-700" />
            
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
              
              <div className="space-y-2">
                <label htmlFor="name-input" className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                <input 
                  id="name-input"
                  name="from_name"
                  type="text" 
                  required
                  autoComplete="name"
                  enterKeyHint="next"
                  placeholder="enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-[1rem] px-6 py-2 text-[16px] md:text-base text-white focus:outline-none focus:border-indigo-500/50 transition-all duration-300 placeholder:text-zinc-700"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email-input" className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">
                  Email Address
                </label>
                <input 
                  id="email-input"
                  name="from_email"
                  type="email" 
                  required
                  autoComplete="email"
                  enterKeyHint="next"
                  placeholder="example@gmail.com"
                  className="w-full bg-white/5 border border-white/10 rounded-[1rem] px-6 py-2 text-[16px] md:text-base text-white focus:outline-none focus:border-indigo-500/50 transition-all duration-300 placeholder:text-zinc-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Your Message</label>
                <textarea 
                  name="message" 
                  rows={4}
                  required
                  placeholder="Let's talk about your next big project..."
                  className="w-full bg-white/5 border border-white/10 rounded-[1rem] px-6 py-2 text-[16px] md:text-base text-white focus:outline-none focus:border-indigo-500/50 transition-all duration-300 placeholder:text-zinc-700 resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-zinc-800 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-lg shadow-indigo-500/20 cursor-pointer text-sm md:text-base"
              >
                {loading ? (
                  <>
                    SENDING...
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  </>
                ) : (
                  <>
                    SEND MESSAGE
                    <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* LEFT SIDE (Details) */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                Reach out to me directly
              </h3>
              
              <div className="pl-4 border-l-2 border-indigo-500/40">
                <p className="text-zinc-400 text-sm md:text-[17px] font-sans font-normal tracking-wide leading-relaxed max-w-xl antialiased">
                  I&apos;m always open to discussing <span className="text-zinc-100/85 font-medium">new projects</span>, <span className="text-zinc-100/85 font-medium">creative ideas</span>, or opportunities to be part of <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold">your vision</span>.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-xl shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Call Me</p>
                  <p className="text-zinc-300 font-small text-sm md:text-lg">+91-9507034643</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-xl shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Email Me</p>
                  <p className="text-zinc-300 font-small text-sm md:text-lg truncate">shahbazalam4842@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-xl shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-widest mb-0.5">My Location</p>
                  <p className="text-zinc-300 font-small text-sm md:text-lg">Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>

              <div className="p-5 rounded-[1rem] bg-indigo-500/5 border border-indigo-500/10 relative overflow-hidden group/status">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse "/>
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