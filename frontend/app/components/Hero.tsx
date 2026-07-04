"use client";
import { FileText, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="hero" className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center px-6 md:px-24 pt-30 md:pt-40 pb-12 ">
      
      {/* LEFT SIDE: Content */}
      <motion.div
        className="md:col-span-7 flex flex-col items-center text-center md:items-start md:text-left space-y-2 md:space-y-4 z-20 md:mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-indigo-400/80 text-xs md:text-sm font-semibold tracking-[0.3em]">
          Hi, I&apos;m
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-[52px] lg:text-[62px] xl:text-[72px] font-extrabold tracking-tight leading-[1.2] md:leading-[1.15]">
          <span className="text-white/85">Shahbaz</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500">
            Alam
          </span>
          <br />
          <span className="text-white/85 block min-h-[32px] md:min-h-[50px] overflow-hidden text-2xl sm:text-4xl md:text-[36px] lg:text-[44px] xl:text-[50px]">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'MERN Stack Developer',
                  'Frontend Developer',
                  'Backend Developer',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 40,
                }}
            />
          </span>
        </h1>

        {/* Upgraded Premium Paragraph Font Styling */}
        <p className="text-sm md:text-[17px] text-zinc-400/85 font-sans font-normal tracking-wide leading-relaxed max-w-xl px-2 md:px-0 mt-2 md:mt-3 antialiased">
          Based in India, I&apos;m a Full Stack Developer specializing in MERN Stack, and building scalable web applications.
        </p>

        {/* Buttons + Social Icons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto px-4 md:px-0">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 glass rounded-full font-medium hover:bg-white/10 transition-all text-base border border-white/10 bg-[#030303] backdrop-blur-md flex items-center justify-center gap-2 group text-center"
          >
            View My Work
            <ArrowUpRight size={18} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </a>
          
          <a
            href="https://drive.google.com/file/d/1aTGWlFF5-BQF5DDtj4cenCgVVb3j4beX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 glass rounded-full font-medium hover:bg-white/10 transition-all text-base border border-white/10 bg-[#030303] backdrop-blur-md flex items-center justify-center gap-2 group"
          >
            <FileText size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            View Resume
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shahbazal0m"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <SiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/iamshahbaz-alam/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#0077B5] hover:bg-[#0077B5]/10 hover:border-[#0077B5]/30 transition-all duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://x.com/shahbaz_al0m"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/30 transition-all duration-300"
            >
              <FaXTwitter size={17} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Image */}
      <motion.div
        className="md:col-span-5 flex justify-center md:justify-end items-center relative mt-6 md:mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] overflow-hidden shadow-2xl shadow-indigo-500/10 rounded-[1rem] border-2 border-white/20">
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