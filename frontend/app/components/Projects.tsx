"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Event Management System",
    image: "/event-project.png", 
    tech: ["MongoDB", "Express", "React", "Node", "AWS"],
    github: "https://github.com/shahbaz-alam", 
    live: "https://your-demo-link.com",
  },
  {
    title: "QR Attendance System",
    image: "/qr-project.png", 
    tech: ["React", "Node.js", "Google Sheets", "AWS"],
    github: "https://github.com/shahbaz-alam",
    live: "https://your-demo-link.com",
  },
  {
    title: "QR Attendance System",
    image: "/qr-project.png", 
    tech: ["React", "Node.js", "Google Sheets", "AWS"],
    github: "https://github.com/shahbaz-alam",
    live: "https://your-demo-link.com",
  },
  {
    title: "QR Attendance System",
    image: "/qr-project.png", 
    tech: ["React", "Node.js", "Google Sheets", "AWS"],
    github: "https://github.com/shahbaz-alam",
    live: "https://your-demo-link.com",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10 md:px-24 max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-white tracking-tight">My Projects</h2>
        <div className="h-1 w-12 bg-indigo-500 mt-2 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            className="glass rounded-[2rem] border border-white/10 overflow-hidden flex flex-col group transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative w-full h-[250px] overflow-hidden border-b border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Info */}
            <div className="p-8 flex flex-col flex-grow space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-1.5 text-xs font-bold bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-indigo-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

                {/* 4. Action Buttons - Ultra Stable Cursor & Click */}
                <div className="flex items-center gap-8 pt-4 mt-auto relative z-20">
                <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-indigo-400 transition-all duration-300 cursor-pointer hover:translate-x-1 select-none"
                    style={{ cursor: 'pointer' }} // Force cursor style
                >
                    GitHub
                </a>
                <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-purple-400 transition-all duration-300 cursor-pointer hover:translate-x-1 select-none"
                    style={{ cursor: 'pointer' }} // Force cursor style
                >
                    Live Demo 
                </a>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;