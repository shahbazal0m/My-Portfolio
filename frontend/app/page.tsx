'use client'; // Required because we are using React state and effects

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Standard, lightweight particles

export default function Home() {
  const [init, setInit] = useState(false);

  // This should only run once to initialize the particle engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-[#030303] text-zinc-100 overflow-hidden">
      {/* 1. Particle Background */}
      {init && (
        <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
            events: {
                onHover: {
                enable: true,
                mode: "repulse", // Isse cursor aane par particles door bhagenge
                },
            },
            modes: {
                repulse: {
                distance: 120, // Kitni door bhagenge
                duration: 0.4,
                },
            },
            },
            particles: {
            color: {
                value: ["#ffffff", "#4f46e5", "#c084fc"],
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2, // Visibility kam karne ke liye opacity 0.5 se 0.2 kar di
                width: 1,
            },
            move: {
                enable: true,
                speed: 1, // Speed thodi kam ki taaki distraction na ho
            },
            number: {
                density: { enable: true, area: 800 },
                value: 80, // Quantity thodi kam ki taaki clean lage
            },
            opacity: {
                value: 0.4, // Isse particles thode subtle (soft) dikhenge
            },
            size: {
                value: { min: 1, max: 3 },
            },
            },
            detectRetina: true,
        }}
        />
      )}

      {/* 2. Hero Section: Content Grid */}
      <section className="relative z-10 w-full min-h-screen grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-6 md:px-20 pt-24 pb-16 max-w-[1400px] mx-auto">
        
        {/* LEFT SIDE: Content */}
        <motion.div 
          className="md:col-span-7 flex flex-col items-start text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Availability Tag */}
          <div className="inline-block px-3 py-1 text-sm font-medium border rounded-full glass border-white/20 text-zinc-400">
            Available for new opportunities
          </div>

          {/* Heading with New Gradient */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-[1.1]">
            <span className="text-white">Shahbaz</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500">
              Alam
            </span>
            <br />
            Full Stack Developer.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Based in India, I specialize in crafting high-performance digital products, 
            interactive interfaces, and scalable web solutions using React, Node.js, 
            and the MERN stack.
          </p>

         {/* Buttons */}
            <div className="flex gap-4 pt-4">
            {/* View My Work - Ismein Projects section ki ID daal dein (#projects) */}
            <a 
                href="#projects" 
                className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-base cursor-pointer flex items-center justify-center"
            >
                View My Work
            </a>

            {/* Download Resume - Ismein apna Google Drive link paste karein */}
            <a 
                href="YAHAN_APNA_GOOGLE_DRIVE_LINK_DAALEIN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 glass rounded-full font-medium hover:bg-white/10 transition-all text-base border border-white/10 cursor-pointer flex items-center justify-center"
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
            y: [0, -30, 0] // Yahan se image upar-neeche hogi
        }}
        transition={{ 
            duration: 4, // 4 seconds ka loop
            repeat: Infinity, // Hamesha chalta rahega
            ease: "easeInOut",
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 }
        }}
        >
        {/* Subtle glow behind the image */}
        <div className="absolute -inset-4 rounded-full bg-indigo-500/5 blur-[60px] -z-10" />

        {/* Image Container */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full p-[2px] glass overflow-hidden border border-white/10 shadow-2xl shadow-indigo-900/20">
            <div className="w-full h-full rounded-full bg-[#050505] overflow-hidden relative">
            <Image 
                src="/portfolio_image.png" 
                alt="Shahbaz Alam"
                fill
                className="object-cover object-top scale-100" // 'object-top' se head cut nahi hoga
                priority
            />
            </div>
        </div>
        </motion.div>
      </section>

      {/* 3. Featured Projects: Keeping your original position below */}
      <section className="relative z-10 w-full py-16 px-6 md:px-20 max-w-[1400px] mx-auto border-t border-white/5">
        <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-64 glass rounded-3xl p-6 border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity"/>
            <p className="text-zinc-500">Project Card Placement</p>
          </div>
          <div className="h-64 glass rounded-3xl animate-pulse"></div>
        </div>
      </section>
    </main>
  );
}