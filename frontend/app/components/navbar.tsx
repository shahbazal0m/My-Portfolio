'use client';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    // Outer container: Full width aur side padding match ki gayi hai (px-10 md:px-24)
    <nav className="fixed top-6 left-0 right-0 z-[100] px-10 md:px-24 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // Max-width 1400px aur pointer-events-auto taaki clicks kaam karein
        className="max-w-[1400px] mx-auto glass border border-white/10 rounded-full px-8 py-4 flex justify-between items-center backdrop-blur-xl bg-black/40 shadow-2xl pointer-events-auto"
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
    </nav>
  );
}