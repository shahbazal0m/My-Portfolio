"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "Prestige Institute of Management and Research, Bhopal",
    university: "RGPV University, Bhopal Madhya Pradesh",
    duration: "2022 — 2026",
    // cgpa: "7.56",
    details: "Focusing on full-stack development and core computer science subjects.",
    certificateLink: null
  },
  {
    title: "Full Stack Development",
    institution: "Sheryians Coding School",
    university: "Job Ready Cohort",
    duration: "Jan - Sep 2025",
    details: "Mastered MERN Stack (MongoDB, Express.js, React.js, Node.js), Data Structures & Algorithms, and DevOps practices including CI / CD, Docker & Kubernetes. It also focused on Aptitude & Reasoning.",
    cgpa: null,
    certificateLink: "https://drive.google.com/file/d/1m7dLbmEnVu_8KDc1nbMb65C3QAjnfwhy/view?usp=sharing"
  },
  {
    title: "Higher Education",
    institution: "Islamia College, Darbhanga",
    university: "BSEB - Patna, Bihar",
    duration: "2020 — 2022",
    details: "Completed with a focus on Physics, Chemistry, and Mathematics.",
    cgpa: null,
    certificateLink: null
  },
  {
    title: "Secondary Education",
    institution: "M G Shikshan Sansthan Bahadurpur, Darbhanga",
    university: "CBSE, New Delhi",
    duration: "2019 — 2020",
    details: "Achieved strong academic performance in core subjects.",
    cgpa: null,
    certificateLink: null
  }
];

const Education = () => {
  return (
    <section id="education" className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest text-white/85">
            Education
          </h2>
          <div className="h-1 w-30 md:w-40 bg-indigo-500 mt-2 rounded-full mx-auto" /> 
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 md:p-8 rounded-[2rem] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                  <div className="space-y-2">
                    <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300 leading-tight text-left">
                      {edu.title}
                    </h4>
                    <div className="space-y-1 text-left">
                      <p className="text-indigo-400/90 font-medium tracking-wide text-sm uppercase">
                        {edu.institution}
                      </p>
                      <p className="text-zinc-500 text-[10px] md:text-xs font-medium italic">
                        {edu.university}
                      </p>
                    </div>
                  </div>
                  <span className="w-fit shrink-0 text-[10px] md:text-xs font-mono font-bold tracking-tighter text-indigo-300 bg-indigo-500/10 px-4 py-1.5 rounded-xl border border-indigo-500/20 backdrop-blur-md">
                    {edu.duration}
                  </span>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-6" />

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-4 flex-grow text-center">
                  {edu.details}
                </p>

                {edu.cgpa && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                      CGPA: {edu.cgpa} / 10
                    </span>
                  </div>
                )}

                {edu.certificateLink && (
                  <a 
                    href={edu.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors group/btn mt-auto"
                  >
                    View Certificate 
                    <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>

              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-500/5 blur-[80px] group-hover:bg-indigo-500/10 transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;