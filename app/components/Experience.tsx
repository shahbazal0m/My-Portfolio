"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss, SiSass} from "react-icons/si";
import { MdDevices } from "react-icons/md";

const experience = [
  {
    company: "Xubru Technologies Pvt Ltd",
    status: "Completed",
    role: "Frontend Developer",
    type: "Internship",
    mode: "Remote",
    duration: "Apr 2026 — Jul 2026",
    location: "Gurugram, India (Remote)",
    stack: [
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Responsive Design", icon: <MdDevices className="text-[#00BCD4]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    ],
    points: [
      "Worked as a Frontend Developer, building and shipping UI components with a focus on clean, responsive design.",
      "Demonstrated strong technical skills and a proactive approach to tasks and challenges during the internship period.",
      "Collaborated with the team, showing commitment to learning and consistently improving code quality.",
    ],
  },
  {
    company: "Cognifyz Technologies Pvt Ltd",
    status: "Completed",
    role: "Frontend Developer",
    type: "Internship",
    mode: "Remote",
    duration: "Nov 2024 — Jan 2025",
    location: "Nagpur, India (Remote)",
    stack: [
      { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <SiCss className="text-[#1572B6]" /> },
      { name: "SCSS", icon: <SiSass className="text-[#CC6699]" /> },
      { name: "Responsive Design", icon: <MdDevices className="text-[#00BCD4]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    ],
    points: [
      "Served as a Frontend Development Intern, showing dedication, sincerity, and a strong desire to learn.",
      "Displayed exceptional coordination skills and effective communication while handling assigned tasks.",
      "Consistently approached new assignments and challenges with enthusiasm and attention to detail.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <p className="text-[#E8A33D] text-xs font-mono font-bold uppercase tracking-[0.3em] mb-2">
            // Where I&apos;ve worked
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest text-white/85">
            Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-[1rem] border border-white/10 hover:border-[#E8A33D]/30 transition-all duration-500 relative overflow-hidden p-6 md:p-8"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8A33D] via-[#E8A33D]/40 to-transparent" />

              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h3>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#E8A33D] bg-[#E8A33D]/10 border border-[#E8A33D]/20 rounded-full px-2.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]" />
                      {exp.status}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    {exp.role} <span className="text-zinc-600">·</span>{" "}
                    <span className="italic">{exp.type}</span> <span className="text-zinc-600">·</span>{" "}
                    <span className="italic">{exp.mode}</span>
                  </p>
                </div>

                <div className="text-left md:text-right shrink-0">
                  <p className="flex items-center md:justify-end gap-2 text-sm text-zinc-300 font-mono">
                    <Calendar size={14} className="text-[#E8A33D]" />
                    {exp.duration}
                  </p>
                  <p className="flex items-center md:justify-end gap-2 text-xs text-zinc-500 mt-1">
                    <MapPin size={12} />
                    {exp.location}
                  </p>
                </div>
              </div>

              {/* Stack */}
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                Stack
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {exp.stack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-zinc-200"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5 mb-6">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D] mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;