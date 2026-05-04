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
    institution: "Sheryians Coding School",
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
    <section id="about" className="py-20 px-10 md:px-24 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Story with highlights */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white tracking-tight mb-8">About Me</h2>
        <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
                I am <span className="text-white font-semibold">Shahbaz Alam</span>, a passionate Full Stack Developer based in <span className="text-white">Bhopal, India</span>. 
                I specialize in building modern, responsive, and scalable web applications using the 
                <span className="text-indigo-400 font-medium"> MERN stack</span>.
            </p>
            <p>
                I have a strong interest in <span className="text-purple-400 font-medium">Frontend Development</span>, where I focus on creating clean UI, 
                smooth user experiences, and performance-driven applications. I love bringing designs to life with a focus on precision and speed.
            </p>
            <p>
                Currently, I am continuously improving my skills in <span className="text-indigo-400 font-medium">React, Next.js</span>, and modern web technologies, 
                while working on real-world projects to solve practical problems and deliver high-quality digital solutions.
            </p>
            <p>
                I thrive on solving real-world problems through code and continuously challenge myself by building 
                <span className="text-white"> practical, impact-driven projects</span>. I am a firm believer in writing 
                <span className="text-indigo-400"> clean, maintainable code</span> and following industry best practices to create reliable and efficient applications.
            </p>
        </div>
        </motion.div>

        {/* Right Side: Education Cards (More compact) */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-indigo-400 uppercase tracking-widest mb-6">Education</h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-bold group-hover:text-indigo-300 transition-colors">{edu.title}</h4>
                  <p className="text-zinc-300 text-sm mt-1">{edu.institution}</p>
                </div>
                <span className="text-[10px] text-indigo-400 font-mono bg-indigo-500/10 px-2 py-1 rounded-md">
                  {edu.duration}
                </span>
              </div>
              <p className="text-zinc-500 text-xs mt-3 leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;