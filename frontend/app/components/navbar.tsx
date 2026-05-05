'use client';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    // Outer Wrapper: full width aur top-0 taaki alignment control mein rahe
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 pointer-events-none">
      
      {/* Container: Ye niche ke Hero/Projects section ki width (1400px) se match karega */}
      <div className="w-full max-w-[1400px] mx-auto px-10 md:px-24">
        
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Pointer-events-auto taaki links par click ho sake
          // glass aur border styling aapke layout ke hisaab se
          className="glass border border-white/20 rounded-full px-8 py-4 flex justify-between items-center backdrop-blur-xl bg-[#030303]/50 shadow-2xl pointer-events-auto"
        >
          {/* Logo Section */}
          <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 cursor-pointer tracking-tighter whitespace-nowrap">
            Shahbaz Alam
          </div>

          {/* Links Section */}
          <div className="hidden md:flex items-center gap-10 text-base font-bold text-zinc-400">
            <a href="#" className="hover:text-white transition-all cursor-pointer">Home</a>
            <a href="#about" className="hover:text-white transition-all cursor-pointer">About Me</a>
            <a href="#projects" className="hover:text-white transition-all cursor-pointer">Projects</a>
            <a href="#contact" className="hover:text-white transition-all cursor-pointer">Contact</a>
          </div>

          {/* Mobile View Placeholder */}
          <div className="md:hidden text-xs font-bold text-indigo-400 uppercase tracking-widest">
            Menu
          </div>
        </motion.div>
      </div>
    </nav>
  );
}