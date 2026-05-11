"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: "/social-icons/github.png", 
      link: "https://github.com/shahbazal0m",
      hoverClass: "hover:bg-zinc-800 hover:border-zinc-700",
      imgClass: "filter invert"
    },
    { 
      name: "LinkedIn", 
      icon: "/social-icons/linkedin.png", 
      link: "https://www.linkedin.com/in/iamshahbaz-alam/",
      hoverClass: "hover:bg-[#0077B5] hover:border-[#0077B5]/50",
      imgClass: "group-hover:filter group-hover:invert transition-all duration-300" 
    },
    { 
      name: "X (Twitter)", 
      icon: "/social-icons/twitter.png", 
      link: "https://x.com/shahbaz_al0m",
      hoverClass: "hover:bg-zinc-900 hover:border-zinc-800",
      imgClass: "filter invert"
    }
  ];

  return (
    // Padding update: px-6 for mobile to keep items aligned with your navbar
    <footer className="w-full pt-16 pb-8 px-6 md:px-24 border-t border-white/5 bg-[#0a0a0a] relative z-10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Content: Stacked on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tighter text-white">
              SHAHBAZ<span className="text-indigo-500">.</span>
            </h2>
            <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium">
              Full Stack Developer
            </p>
          </div>

          {/* Social Icons - Balanced spacing for touch targets on mobile */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className={`w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group shadow-lg ${social.hoverClass}`}
              >
                <Image 
                  src={social.icon} 
                  alt={social.name} 
                  width={24}
                  height={24}
                  className={`w-5 h-5 md:w-6 md:h-6 object-contain opacity-50 group-hover:opacity-100 transition-opacity ${social.imgClass}`} 
                />
              </motion.a>
            ))}
          </div>

          {/* Credits Section */}
          <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
            <p className="text-zinc-500 text-xs md:text-sm font-light uppercase tracking-wider">
                Designed & Developed by
            </p>
            <p className="text-white font-semibold text-base tracking-tight">
              Shahbaz Alam
            </p>
          </div>

        </div>

        {/* Divider Line with Motion */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" 
        />

        {/* Copyright - Slightly more compact on mobile */}
        <div className="mt-6 text-center">
            <p className="text-zinc-600 text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-medium leading-relaxed">
                © {currentYear} ALL RIGHTS RESERVED.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;