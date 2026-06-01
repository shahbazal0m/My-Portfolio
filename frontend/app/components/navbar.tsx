'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/iamshahbaz-alam/",
      icon: <FaLinkedinIn size={16} />,
      hoverClass: "hover:text-[#0077B5]",
    },
    {
      name: "GitHub",
      href: "https://github.com/shahbazal0m",
      icon: <SiGithub size={16} />,
      hoverClass: "hover:text-white",
    },
    {
      name: "Twitter",
      href: "https://x.com/shahbaz_al0m",
      icon: <FaTwitter size={16} />,
      hoverClass: "hover:text-[#1DA1F2]",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-8 pointer-events-none">
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-24 relative">
        
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass border border-white/20 rounded-full px-6 md:px-8 py-3 md:py-4 flex justify-between items-center backdrop-blur-xl bg-[#030303]/50 shadow-2xl pointer-events-auto"
        >
          {/* Logo */}
          <a href="#hero" className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 cursor-pointer tracking-tighter whitespace-nowrap">
            SHAHBAZ.
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-9 text-base font-bold text-zinc-400">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-white transition-all cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>



          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-1 flex items-center justify-center"
            >
              {isOpen ? (
                <HiX className="text-2xl text-indigo-400" />
              ) : (
                <div className="flex flex-col gap-[5px] items-end">
                  <span className="block w-5 h-[2px] bg-white rounded-full"></span>
                  <span className="block w-5 h-[2px] bg-white rounded-full"></span>
                  <span className="block w-5 h-[2px] bg-white rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-[75px] left-6 right-6 p-8 glass border border-white/10 rounded-[2.5rem] bg-[#030303]/80 backdrop-blur-2xl md:hidden z-[99] shadow-2xl pointer-events-auto"
            >
              <motion.div 
                variants={{
                  open: { transition: { staggerChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
                initial="closed"
                animate="open"
                className="flex flex-col gap-3 items-center" 
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    variants={{
                      open: { opacity: 1, y: 0, scale: 1 },
                      closed: { opacity: 0, y: 10, scale: 0.95 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full max-w-[200px] py-3 glass border border-white/10 rounded-full text-[11px] font-bold text-zinc-400 text-center uppercase tracking-[0.2em] hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white transition-all duration-300"
                  >
                    {link.name}
                  </motion.a>
                ))}

                {/* Mobile Social Icons */}
                <div className="flex items-center gap-5 mt-2 pt-4 border-t border-white/10 w-full justify-center">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className={`w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 ${social.hoverClass} hover:bg-white/10 transition-all duration-300`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}