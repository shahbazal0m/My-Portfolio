"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Personal Portfolio Website",
    image: "/portfolio-img.png", 
    tech: ["React", "Node.js", "Google Sheets", "AWS"],
    github: "https://github.com/shahbaz-alam",
    live: "https://your-demo-link.com",
  },
  {
    title: "Food Delivery Websites",
    image: "/image.png", 
    tech: ["React", "Node.js", "Google Sheets", "AWS"],
    github: "https://github.com/shahbaz-alam",
    live: "https://your-demo-link.com",
  },
  {
    title: "GitHub User Profile Explorer",
    image: "/qr-project.png", 
    tech: ["React", "Node.js", "Google Sheets", "AWS"],
    github: "https://github.com/shahbaz-alam",
    live: "https://your-demo-link.com",
  },
  {
    title: "Event Management Website",
    image: "/qr-project.png", 
    tech: ["React", "Node.js", "Google Sheets", "AWS"],
    github: "https://github.com/shahbaz-alam",
    live: "https://your-demo-link.com",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10">
      {/* Updated Header Section for Perfect Centering */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest text-white/85">
          My Projects
        </h2>
        {/* Line ko center mein rakhne ke liye w-24 aur mx-auto use kiya hai */}
        <div className="h-1 w-35 md:w-47 bg-indigo-500 mt-2 rounded-full mx-auto" /> 
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }} 
            viewport={{ once: true }}
            className="glass rounded-[2rem] border border-white/10 overflow-hidden flex flex-col group transition-all duration-500"
          >
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[280px] overflow-hidden border-b border-white/10 bg-zinc-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                priority={index < 2}
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow space-y-6 bg-[#030303]/50 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-indigo-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 md:gap-8 pt-4 mt-auto relative z-20">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-indigo-400 transition-all duration-300 cursor-pointer hover:translate-x-1 select-none"
                >
                  GitHub
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-purple-400 transition-all duration-300 cursor-pointer hover:translate-x-1 select-none"
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