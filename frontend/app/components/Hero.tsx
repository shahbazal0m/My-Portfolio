"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="relative z-10 w-full min-h-screen grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-6 md:px-20 pt-32 pb-16 max-w-[1400px] mx-auto">
      {/* LEFT SIDE: Content */}
      <motion.div
        className="md:col-span-7 flex flex-col items-start text-left space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-block px-3 py-1 text-sm font-medium border rounded-full glass border-white/20 text-zinc-400">
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-[1.1]">
          <span className="text-white">Shahbaz</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500">
            Alam
          </span>
          <br />
          {/* Typewriter Effect yahan add kiya hai */}
          <span className="text-white/90">
            <Typewriter
              options={{
                strings: [
                  'MERN Stack Expert.'
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
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
            href="#"
            className="px-8 py-3 glass rounded-full font-medium hover:bg-white/10 transition-all text-base border border-white/10 cursor-pointer"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Image */}
      <motion.div
        className="md:col-span-5 flex justify-center items-center relative aspect-square md:aspect-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -inset-4 rounded-full bg-indigo-500/5 blur-[60px] -z-10" />

        {/* Upar-Niche wala animation sirf is inner div par taaki blink na ho */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full p-[2px] glass overflow-hidden border border-white/10 shadow-2xl shadow-indigo-900/20"
        >
          <div className="w-full h-full rounded-full bg-[#050505] overflow-hidden relative">
            <Image
              src="/portfolio_image.png"
              alt="Shahbaz Alam"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-top scale-100"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;