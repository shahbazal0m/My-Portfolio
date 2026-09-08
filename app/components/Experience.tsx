"use client";
import { motion } from "framer-motion";
import { ExternalLink, Briefcase } from "lucide-react";

const experience = [
  {
    role: "Frontend Developer Intern",
    company: "Xubru Technologies Pvt Ltd",
    location: "Gurugram, Haryana",
    duration: "Apr 2026 — Jul 2026",
    details: "Worked as a Frontend Developer, demonstrating strong technical skills, commitment to learning, and a proactive approach to tasks and challenges.",
    certificateLink: "/experience-images/xubru-certificate.jpeg",
  },
  {
    role: "Front-End Development Intern",
    company: "Cognifyz Technologies",
    location: "Nagpur, India",
    duration: "Nov 2024 — Jan 2025",
    details: "Displayed remarkable dedication, exceptional coordination skills, and effective communication abilities while consistently approaching new assignments with enthusiasm.",
    certificateLink: "/experience-images/cognifyz-certificate.png",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 md:p-8 rounded-[1rem] border border-white/5 hover:border-[#E8A33D]/30 transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-[#E8A33D]/10 border border-[#E8A33D]/20 flex items-center justify-center mb-2">
                      <Briefcase size={18} className="text-[#E8A33D]" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#E8A33D] transition-all duration-300 leading-tight text-left">
                      {exp.role}
                    </h4>
                    <div className="space-y-1 text-left">
                      <p className="text-[#E8A33D]/90 font-medium tracking-wide text-sm uppercase">
                        {exp.company}
                      </p>
                      <p className="text-zinc-500 text-[10px] md:text-xs font-medium italic">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <span className="w-fit shrink-0 text-[10px] md:text-xs font-mono font-bold tracking-tighter text-[#E8A33D] bg-[#E8A33D]/10 px-4 py-1.5 rounded-lg border border-[#E8A33D]/20 backdrop-blur-md">
                    {exp.duration}
                  </span>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-5" />

                <p className="text-slate-300 font-medium text-xs md:text-sm leading-relaxed tracking-wide antialiased text-left mb-6 flex-grow transition-colors duration-300 group-hover:text-zinc-100">
                  {exp.details}
                </p>

                <div className="pt-2 mt-auto text-left">
                  <a
                    href={exp.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-[#E8A33D] hover:text-amber-300 transition-colors group/btn"
                  >
                    View Certificate
                    <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#E8A33D]/5 blur-[80px] group-hover:bg-[#E8A33D]/10 transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;