"use client";
import { motion } from "framer-motion";

const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "PIMR, Bhopal - MP",
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
    title: "Higher Secondary (12th)",
    institution: "BSEB, Patna - Bihar",
    duration: "2020 — 2022",
    details: "Strong foundation in Science and Mathematics."
  },
  {
    title: "Secondary (10th)",
    institution: "CBSE, New Delhi",
    duration: "2019 — 2020",
    details: "Focused on core science subjects."
  }
];

const About = () => {
  return (
    <section id="about" className="py-5 px-10 md:px-24 max-w-[1400px] mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Story wrapped in a Glass Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white tracking-tight">About Me</h2>
          
          {/* Updated Line: Width ko w-44 kiya hai About Me ko cover karne ke liye */}
          <div className="h-1 w-25 bg-indigo-500 mt-2 rounded-full mb-10" /> 

          {/* Main Content Card */}
          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-6 text-zinc-300 leading-relaxed text-lg">
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

        {/* Right Side: Education Cards */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-indigo-400 uppercase tracking-widest mb-6 px-2">Education</h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-bold group-hover:text-indigo-300 transition-colors">{edu.title}</h4>
                  <p className="text-zinc-400 text-sm mt-1">{edu.institution}</p>
                </div>
                <span className="text-[10px] text-indigo-400 font-mono bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20">
                  {edu.duration}
                </span>
              </div>
              <p className="text-zinc-500 text-xs mt-4 leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;