"use client";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-5 px-10 md:px-24 max-w-[1400px] mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-4xl font-semibold uppercase tracking-widest text-white">About Me</h2>
        <div className="h-1 w-32 bg-indigo-500 mt-2 rounded-full mb-10" /> 

        <div className="glass p-8 md:p-14 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
          {/* Background Glow Effect */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full -mr-20 -mt-20 pointer-events-none" />
          
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 space-y-8 text-zinc-300 leading-relaxed text-xl max-w-5xl">
            <p>
              I am <span className="text-white font-semibold">Shahbaz Alam</span>, a passionate Full Stack Developer based in <span className="text-white">Bhopal, India</span>. 
              I specialize in building modern, responsive, and scalable web applications using the 
              <span className="text-indigo-400 font-medium"> MERN stack</span>.
            </p>
            <p>
              I have a strong interest in <span className="text-purple-400 font-medium">Frontend Development</span>, where I focus on creating clean UI, 
              smooth user experiences, and performance-driven applications.
            </p>
            <p>
              Currently, I am continuously improving my skills in <span className="text-indigo-400 font-medium">React, Next.js</span>, and modern web technologies, 
              working on real-world projects to solve practical problems.
            </p>
            <p>
              I am a firm believer in writing 
              <span className="text-indigo-400"> clean, maintainable code</span> and following industry best practices to create reliable applications.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;