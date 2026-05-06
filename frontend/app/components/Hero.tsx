"use client";
import { FileText } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="relative z-10 w-full min-h-[90vh] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-10 md:px-24 pt-32 pb-10">
      
      {/* LEFT SIDE: Content */}
      <motion.div
        className="md:col-span-8 flex flex-col items-start text-left space-y-6 z-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium border rounded-full glass border-white/20 text-zinc-400 bg-[#030303] backdrop-blur-md relative z-10">
        {/* Green Dot Wrapper */}
        <span className="relative flex h-2 w-2">
          {/* Blinking Animation Layer */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          {/* Static Solid Dot Layer */}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Available for new opportunities
      </div>

        <h1 className="text-5xl md:text-6xl lg:text-[75px] font-extrabold tracking-tight mb-4 leading-[1.1]">
          <span className="text-white">Shahbaz</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500">
            Alam
          </span>
          <br />
          <span className="text-white/85 whitespace-nowrap block w-max">
            <Typewriter
              options={{
                strings: [
                  'Frontend Developer',
                  'Backend Developer',
                  'MERN Stack Expert'
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
          Based in India, I specialize in crafting high-performance digital
          products, interactive interfaces, and scalable web solutions using
          React, Node.js, and the MERN stack.
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-base cursor-pointer"
          >
            View My Work
          </a>  
          <a
            href="/shahbaz-resume.pdf" // Yahan apna actual resume path daalein
            download="Shahbaz_Alam_Resume"
            className="px-8 py-3 glass rounded-full font-medium hover:bg-white/10 transition-all text-base border border-white/10 cursor-pointer bg-[#030303] backdrop-blur-md relative z-10 flex items-center gap-2 group"
          >
            Download Resume
            <FileText 
              size={18} 
              className="text-indigo-400 group-hover:scale-110 transition-transform duration-300" 
            />
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Static Square Image with Visible Tight Border */}
      <motion.div
        className="md:col-span-4 flex justify-end items-center relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          // Outer container se border aur padding hata di hai gap khatam karne ke liye
          className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] ml-auto overflow-hidden shadow-2xl shadow-black/60"
        >
          <div 
            // Border ko border-2 aur white/30 kiya hai taaki wo pop kare aur image ke edge par rahe
            className="w-full h-full bg-[#050505] relative rounded-[2.5rem] border-2 border-white/30 overflow-hidden"
          >
            <Image
              src="/portfolio_image.png"
              alt="Shahbaz Alam"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-500"
              priority
            />
            
            {/* Subtle bottom shadow overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;