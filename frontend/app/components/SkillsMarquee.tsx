"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, 
  SiCss,
  SiSass, 
  SiTailwindcss, 
  SiJavascript, 
  SiReact, 
  SiTypescript, 
  SiFramer, 
  SiNextdotjs, 
  SiGit, 
  SiGithub, 
  SiVercel, 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <SiCss className="text-[#1572B6]" /> },
  { name: "SCSS", icon: <SiSass className="text-[#CC6699]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
];

const SkillsMarquee = () => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    /* Wapas 'relative' kar diya aur bottom-0 hata diya */
    <div className="w-full relative py-6 bg-black/20 border-y border-white/5 overflow-hidden z-30">
      
      {/* Responsive Side Gradients (Mobile: w-16, Laptop: w-40) */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />

      {/* Marquee Wrapper with 20s speed */}
      <div 
        className="flex w-max items-center animate-marquee will-change-transform"
        style={{ animationDuration: '20s' }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 md:gap-4 group px-6 md:px-10 cursor-default select-none"
          >
            <div className="text-lg md:text-xl opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out">
              {skill.icon}
            </div>
            <span className="text-[9px] md:text-[10px] font-bold text-zinc-600 group-hover:text-zinc-200 transition-all duration-500 uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;