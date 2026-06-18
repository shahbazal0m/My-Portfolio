"use client";
import React from "react";
import { MdDevices } from "react-icons/md";
import { FaAws } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
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
  SiMinutemailer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiDocker,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  // Languages
  { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <SiCss className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },

  // Frontend
  { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
  { name: "SCSS", icon: <SiSass className="text-[#CC6699]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Responsive Design", icon: <MdDevices className="text-[#00BCD4]" /> },

  // Backend
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Mongoose", icon: <SiMongoose className="text-[#880000]" /> },

  // DevOps & Cloud
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },

  // Tools
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "EmailJS", icon: <SiMinutemailer className="text-[#FFCA28]" /> },
];

const SkillsMarquee = () => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="w-full relative py-6 bg-black/20 border-y border-white/7 overflow-hidden z-30">
      
      {/* Side Gradients */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />

      <div 
        className="flex w-max items-center animate-marquee will-change-transform"
        style={{ animationDuration: '35s' }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 md:gap-4 group px-6 md:px-10 cursor-default select-none cursor-pointer"
          >
            <div className="text-lg md:text-xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out">
              {skill.icon}
            </div>
            <span className="text-[9px] md:text-[10px] font-bold text-zinc-400/85 group-hover:text-zinc-200 transition-all duration-500 uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;