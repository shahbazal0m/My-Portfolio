'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 pointer-events-none">
      
      {/* Container matching your 1400px layout */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-24 relative">
        
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass border border-white/20 rounded-full px-6 md:px-8 py-3 md:py-4 flex justify-between items-center backdrop-blur-xl bg-[#030303]/50 shadow-2xl pointer-events-auto"
        >
          {/* Logo Section */}
          <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 cursor-pointer tracking-tighter whitespace-nowrap">
            Shahbaz Alam
          </div>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-10 text-base font-bold text-zinc-400">
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

          {/* Hamburger Button (Visible only on Mobile) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl focus:outline-none p-1"
            >
              {isOpen ? <HiX className="text-indigo-400" /> : <HiMenuAlt3 />}
            </button>
          </div>
        </motion.div>

{/* Mobile Menu Overlay */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.3 }}
      // Maine 'top-24' ko 'top-[75px]' kar diya hai gap kam karne ke liye
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
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </nav>
  );
}