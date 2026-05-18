"use client";
import { FileText } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center px-6 md:px-24 pt-32 md:pt-40 pb-12">
      
      {/* LEFT SIDE: Content */}
      <motion.div
        // space-y-3 (mobile) aur md:space-y-4 (laptop) kiya hai gap control ke liye
        className="md:col-span-7 flex flex-col items-center text-center md:items-start md:text-left space-y-3 md:space-y-4 z-20 md:mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] md:text-sm font-medium border rounded-full glass border-white/20 text-zinc-400 bg-[#030303]/80 backdrop-blur-md mb-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[75px] font-extrabold tracking-tight leading-[1.2] md:leading-[1.1]">
          <span className="text-white/85">Shahbaz</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500">
            Alam
          </span>
          <br />
          {/* Mobile par min-h-auto aur laptop par whitespace-nowrap rakha hai */}
          <span className="text-white/85 block min-h-[30px] md:min-h-auto md:whitespace-nowrap md:w-max">
            <Typewriter
              options={{
                strings: ['Frontend Developer',
                  // 'Backend Developer', 
                  // 'MERN Stack Expert'
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>

        {/* Mobile par mt-[-4px] kiya hai gap kam karne ke liye */}
        <p className="text-sm md:text-lg text-zinc-400 max-w-xl leading-relaxed px-2 md:px-0 mt-[-4px] md:mt-0">
          Based in India, I specialize in crafting high-performance digital
          products and scalable web solutions using React, Node.js, and the MERN stack.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto px-4 md:px-0">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-white/85 text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-base text-center"
          >
            View My Work
          </a>  
          <a
            href="https://drive.google.com/file/d/19hcC9y2IK68eeuzaK8IqdEQG4c7W31Uf/view?usp=sharing"
            download="Shahbaz_Alam_Resume"
            className="w-full sm:w-auto px-8 py-3 glass rounded-full font-medium hover:bg-white/10 transition-all text-base border border-white/10 bg-[#030303] backdrop-blur-md flex items-center justify-center gap-2 group"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Image */}
      <motion.div
        className="md:col-span-5 flex justify-center md:justify-end items-center relative mt-8 md:mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] overflow-hidden shadow-2xl shadow-indigo-500/10 rounded-[2rem] border-2 border-white/20">
          <Image
            src="/profile-image/my-profile-image.jpeg"
            alt="Shahbaz Alam"
            fill
            className="object-cover object-top hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;