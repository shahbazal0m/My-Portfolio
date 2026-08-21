"use client";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <p className="text-[#E8A33D] text-xs font-mono font-bold uppercase tracking-[0.3em] mb-2">
            // Get to know me
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest text-white/85">
            About Me
          </h2>
        </div>

        {/* Container */}
        <div className="glass p-6 sm:p-8 md:p-16 rounded-[1rem] md:rounded-[1.5rem] border border-white/10 relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#E8A33D]/[0.06] blur-[100px] md:blur-[140px] rounded-full -mr-20 -mt-20 pointer-events-none group-hover:bg-[#E8A33D]/[0.1] transition-colors duration-700" />
          
          <div className="relative z-10 space-y-5 md:space-y-6 text-zinc-300 leading-relaxed text-base md:text-xl max-w-5xl mx-auto text-center md:text-left">
            <p>
              I&apos;m <span className="text-white font-bold tracking-tight">Shahbaz Alam</span>, a{" "}
              <span className="text-white">Full Stack Developer</span> holding a <span className="text-white font-medium">B.Tech degree in Computer Science & Engineering</span> from <span className="text-white/90">PIMR, Bhopal</span>{" "}
              <span className="text-zinc-400 text-sm md:text-base">(RGPV University, Bhopal, Madhya Pradesh)</span>. I build
              fast, scalable, and user-focused web applications — from clean frontends to robust backends.
            </p>

            <p>
              I completed an intensive{" "}
              <span className="text-[#E8A33D] font-medium">Full Stack Web Development</span> training at{" "}
              <span className="text-white/90">Sheryians Coding School, Bhopal</span> under the{" "}
              <span className="text-white/90">Job Ready Cohort</span> program, where I mastered the{" "}
              <span className="text-[#E8A33D] font-semibold italic">MERN Stack</span> — MongoDB,
              Express.js, React.js, and Node.js — alongside DSA, DevOps practices, Docker, Kubernetes,
              and CI/CD pipelines. I also participated in a{" "}
              <span className="text-amber-300 font-medium">Frontend Hackathon</span> organized by
              Sheryians in July 2025.
            </p>

            <p>
              Beyond development, I work with{" "}
              <span className="text-zinc-200 font-medium">Cloud Infrastructure</span> — holding an{" "}
              <span className="text-white/80">AWS Academy Graduate</span> certification and an{" "}
              <span className="text-white/80">NPTEL Cloud Computing</span> certification from IIT
              Kharagpur — ensuring my applications are built for production and scale.
            </p>
          </div>

          {/* Bottom mono stats strip */}
          <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3 justify-center md:justify-start font-mono text-xs text-zinc-500">
            <span><span className="text-[#E8A33D]">01</span> B.Tech CSE — 2026</span>
            <span><span className="text-[#E8A33D]">02</span> MERN Stack Trained</span>
            <span><span className="text-[#E8A33D]">03</span> AWS Certified</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;