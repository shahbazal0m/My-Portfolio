"use client";
import { motion } from "framer-motion";

const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "RGPV University, Bhopal - MP",
    duration: "2022 — 2026",
    details: "Currently pursuing engineering with a focus on full-stack systems."
  },
  {
    title: "Full Stack Web Development",
    institution: "Sheryians Coding School - Bhopal",
    duration: "Professional Training",
    details: "Mastered MERN Stack (MongoDB, Express, React, Node.js) and modern UI/UX."
  },
  {
    title: "Higher Secondary Education (12th)",
    institution: "BSEB, Patna - Bihar",
    duration: "2020 — 2022",
    details: "Strong foundation in Science and Mathematics."
  },
  {
    title: "Secondary Education (10th)",
    institution: "CBSE, New Delhi",
    duration: "2019 — 2020",
    details: "Focused on core science subjects."
  }
];

const About = () => {
  return (
    <section id="about" className="py-10 px-10 md:px-24 max-w-[1400px] mx-auto relative z-10">
      
      {/* Container ab single column hai (Space-y-20 se dono sections mein gap aayega) */}
      <div className="flex flex-col gap-20">
        
        {/* --- SECTION 1: ABOUT ME (Full Width) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h2 className="text-4xl font-semibold uppercase tracking-widest">About Me</h2>
          <div className="h-1 w-33 bg-indigo-500 mt-2 rounded-full mb-10" /> 

          <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-6 text-zinc-300 leading-relaxed text-lg max-w-4xl">
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

        {/* --- SECTION 2: EDUCATION (Grid Layout) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <h2 className="text-4xl font-semibold uppercase tracking-widest">Education</h2>
          <div className="h-1 w-55 bg-indigo-500 mt-2 rounded-full mb-10" /> 

          {/* Grid: Desktop par 2 cards ek line mein, Mobile par 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{edu.title}</h4>
                    <p className="text-zinc-400 mt-2 font-medium">{edu.institution}</p>
                  </div>
                  <span className="shrink-0 text-xs text-indigo-400 font-mono bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-zinc-500 text-sm mt-6 leading-relaxed border-t border-white/5 pt-4">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;