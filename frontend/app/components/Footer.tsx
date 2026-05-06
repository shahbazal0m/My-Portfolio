"use client";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png", 
      link: "https://github.com/shahbazal0m",
      hoverClass: "hover:bg-zinc-800 hover:border-zinc-700",
      imgClass: "filter invert"
    },
    { 
      name: "LinkedIn", 
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png", 
      link: "https://linkedin.com/in/shahbaz-alam-developer",
      hoverClass: "hover:bg-[#0077B5] hover:border-[#0077B5]/50",
      imgClass: "group-hover:filter group-hover:invert transition-all duration-300" 
    },
    { 
      name: "Twitter", 
      icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png", 
      link: "#",
      hoverClass: "hover:bg-zinc-900 hover:border-zinc-800",
      imgClass: "filter invert"
    }
  ];

  return (
    // pb-6 kar diya hai taaki bottom se gap kam ho jaye
    <footer className="w-full pt-16 pb-6 px-10 md:px-24 border-t border-white/5 bg-[#0a0a0a] relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          <div className="flex flex-col items-center md:items-start gap-3">
            <h2 className="text-2xl font-bold tracking-tighter text-white">
              SHAHBAZ<span className="text-indigo-500">.</span>
            </h2>
            <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] font-medium">
              Full Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group shadow-lg ${social.hoverClass}`}
              >
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  className={`w-6 h-6 object-contain opacity-50 group-hover:opacity-100 transition-opacity ${social.imgClass}`} 
                />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
            <p className="text-zinc-500 text-sm font-light">
                Designed & Developed by
            </p>
            <p className="text-white font-semibold text-base tracking-tight">
              Shahbaz Alam
            </p>
          </div>

        </div>

        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" 
        />

        <div className="mt-6 text-center">
            <p className="text-zinc-600 text-[11px] uppercase tracking-[0.4em] font-medium">
                © {currentYear} All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;