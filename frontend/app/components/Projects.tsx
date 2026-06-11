"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "Personal Portfolio Website",
    image: "/project-image/portfolio.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "EmailJS", "React Hot Toast"],
    github: "https://github.com/shahbazal0m",
    live: "",
  },
  {
    title: "FocusFlow - Productivity Dashboard",
    image: "/project-image/Pro-dashboar.png",
    tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Swiper.js", "Remix Icons", "WeatherAPI"],
    github: "https://github.com/shahbazal0m/productivity-dashboard",
    live: "https://productivity-dashboard-kappa-ebon.vercel.app/",
  },
  {
    title: "Food Ordering Web App",
    image: "/project-image/food-website.png",
    tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "JSON", "Swiper.js", "Font Awesome", "Google Fonts"],
    github: "https://github.com/shahbazal0m/foodie-website",
    live: "https://foodie-website-eta-one.vercel.app/",
  },
  {
    title: "Event Management Website",
    image: "/project-image/Event-website.png",
    tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Unsplash REST API", "Font Awesome"],
    github: "https://github.com/shahbazal0m/event-management-website",
    live: "https://event-management-website-henna.vercel.app/",
  },
  {
    title: "E-commerce Website",
    image: "/project-image/E-commerce.png",
    tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST APIs", "JSON", "Font Awesome"],
    github: "https://github.com/shahbazal0m/frontend-ecommerce-website",
    live: "https://frontend-ecommerce-website-two.vercel.app/",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest text-white/85">
          My Projects
        </h2>
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
            className="glass rounded-[1rem] border border-white/10 overflow-hidden flex flex-col group transition-all duration-500"
          >
            <div className="w-full overflow-hidden border-b border-white/10 bg-zinc-900">
              <Image
                src={project.image}
                alt={project.title}
                width={1900}
                height={910}
                className="w-full h-auto"
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
              <div className="grid grid-cols-2 gap-4 pt-4 mt-auto relative z-20">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-[0.15em] text-zinc-300 bg-white/5 hover:bg-indigo-500/10 border border-white/10 hover:border-indigo-500/30 rounded-xl transition-all duration-300 ${!project.live ? "col-span-2" : ""}`}
                  >
                    <SiGithub size={14} />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-[0.15em] text-zinc-300 bg-white/5 hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/30 rounded-xl transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* More Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center md:center mt-12"
      >
        <a
          href="https://github.com/shahbazal0m?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3 glass rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-300 group text-sm font-medium"
        >
          See All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform duration-300 text-indigo-400"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;