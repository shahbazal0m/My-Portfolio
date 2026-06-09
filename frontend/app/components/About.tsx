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
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest text-white/85">
            About Me
          </h2>
          <div className="h-1 w-30 md:w-38 bg-indigo-500 mt-2 rounded-full mx-auto" />
        </div>

        {/* Glass container */}
        <div className="glass p-6 sm:p-8 md:p-16 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 relative overflow-hidden group shadow-2xl">
          
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-indigo-500/10 blur-[80px] md:blur-[120px] rounded-full -mr-20 -mt-20 pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700" />
          
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* text-center hata diya — left aligned paragraphs readable hote hain */}
          <div className="relative z-10 space-y-5 md:space-y-6 text-zinc-300 leading-relaxed text-base md:text-xl max-w-5xl mx-auto text-center md:text-left">
            <p>
              I&apos;m <span className="text-white font-bold tracking-tight">Shahbaz Alam</span>, a{" "}
              <span className="text-white">Full Stack Developer</span> with a B.Tech in Computer Science
              & Engineering from <span className="text-white/90">PIMR, Bhopal</span>{" "}
              <span className="text-zinc-500 text-sm">(RGPV University, Madhya Pradesh)</span>. I build
              fast, scalable, and user-focused web applications — from clean frontends to robust backends.
            </p>

            <p>
              I completed an intensive{" "}
              <span className="text-indigo-400 font-medium">Full Stack Web Development</span> training at{" "}
              <span className="text-white/90">Sheryians Coding School, Bhopal</span> under the{" "}
              <span className="text-white/90">Job Ready Cohort</span> program, where I mastered the{" "}
              <span className="text-indigo-400 font-semibold italic">MERN Stack</span> — MongoDB,
              Express.js, React.js, and Node.js — alongside DSA, DevOps practices, Docker, Kubernetes,
              and CI/CD pipelines. I also participated in a{" "}
              <span className="text-amber-400 font-medium">Frontend Hackathon</span> organized by
              Sheryians in July 2025.
            </p>

            <p>
              Beyond development, I work with{" "}
              <span className="text-purple-400 font-medium">Cloud Infrastructure</span> — holding an{" "}
              <span className="text-white/80">AWS Academy Graduate</span> certification and an{" "}
              <span className="text-white/80">NPTEL Cloud Computing</span> certification from IIT
              Kharagpur — ensuring my applications are built for production and scale.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;