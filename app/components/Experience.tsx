"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Monitor,
  ClipboardList,
  CalendarCheck,
  FileText,
  Calculator,
} from "lucide-react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss } from "react-icons/si";
import { PiMicrosoftExcelLogoFill, PiMicrosoftOutlookLogoFill } from "react-icons/pi";

type Tech = { name: string; icon: ReactNode };

type ExperienceItem = {
  company: string;
  status: string;
  ongoing?: boolean;
  role: string;
  type: string;
  mode: string;
  duration: string;
  location: string;
  stack: Tech[];
  points: string[];
  certificateLink?: string;
};

const experience: ExperienceItem[] = [
  // {
  //   company: "Almahmal Facilities Services Company",
  //   status: "Ongoing",
  //   ongoing: true,
  //   role: "CAFM Operator",
  //   type: "Full-time",
  //   mode: "On-site",
  //   duration: "MMM 2026 — Present",
  //   location: "Saudi Arabia",
  //   stack: [
  //     { name: "CAFM Software", icon: <Monitor size={14} className="text-[#38BDF8]" /> },
  //     { name: "Work Orders", icon: <ClipboardList size={14} className="text-[#E8A33D]" /> },
  //     { name: "Maintenance Scheduling", icon: <CalendarCheck size={14} className="text-[#4ADE80]" /> },
  //     { name: "Reporting", icon: <FileText size={14} className="text-[#A78BFA]" /> },
  //     { name: "MS Excel", icon: <PiMicrosoftExcelLogoFill className="text-[#217346]" /> },
  //     { name: "MS Outlook", icon: <PiMicrosoftOutlookLogoFill className="text-[#0078D4]" /> },
  //   ],
  //   points: [
  //     "Operate the CAFM system to log, track and close maintenance work orders across the facility.",
  //     "Coordinate with technicians and supervisors to keep service requests and maintenance schedules up to date.",
  //     "Maintain accurate records and prepare routine reports in the system.",
  //   ],
  // },
{
  company: "Jods Mobile Battery Company",
  status: "Ongoing",
  ongoing: true,
  role: "Accounts Executive (Data Entry)",
  type: "Full-time",
  mode: "On-site",
  duration: "Oct 2026 — Present",
  location: "Karol Bagh, New Delhi",
  stack: [
    { name: "Tally", icon: <Calculator size={14} className="text-[#E8A33D]" /> },
    { name: "Data Entry", icon: <FileText size={14} className="text-[#A78BFA]" /> },
    { name: "MS Excel", icon: <PiMicrosoftExcelLogoFill className="text-[#217346]" /> },
  ],
  points: [
    "Enter day-to-day accounting data into Tally accurately and on time.",
    "Maintain organised records and support the accounts team with routine entries.",
  ],
},
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
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    ],
    points: [
      "Worked as a Frontend Developer, building and shipping UI components with a focus on clean, responsive design.",
      "Demonstrated strong technical skills and a proactive approach to tasks and challenges during the internship period.",
      "Collaborated with the team, showing commitment to learning and consistently improving code quality.",
    ],
    // certificateLink: "/experience-images/xubru-certificate.jpeg",
  },
  {
    company: "Cognifyz Technologies",
    status: "Completed",
    role: "Front-End Development Intern",
    type: "Internship",
    mode: "Remote",
    duration: "Nov 2024 — Jan 2025",
    location: "Nagpur, India (Remote)",
    stack: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    ],
    points: [
      "Served as a Front-End Development Intern, showing dedication, sincerity, and a strong desire to learn.",
      "Displayed exceptional coordination skills and effective communication while handling assigned tasks.",
      "Consistently approached new assignments and challenges with enthusiasm and attention to detail.",
    ],
    // certificateLink: "/experience-images/cognifyz-certificate.png",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

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
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <p className="text-[#E8A33D] text-xs font-mono font-bold uppercase tracking-[0.3em] mb-2">
            // Where I&apos;ve worked
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest text-white/85">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative w-full">
          {/* Vertical line */}
          <div className="absolute left-[6px] md:left-[8px] top-8 bottom-8 w-px bg-gradient-to-b from-[#E8A33D]/70 via-white/10 to-transparent" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <span className="absolute left-0 top-9 flex h-3 w-3 md:h-4 md:w-4 items-center justify-center">
                  {exp.ongoing ? (
                    <>
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#E8A33D] opacity-60 animate-ping" />
                      <span className="relative inline-flex h-full w-full rounded-full bg-[#E8A33D]" />
                    </>
                  ) : (
                    <span className="inline-flex h-full w-full rounded-full border-2 border-[#E8A33D]/70 bg-[#0a0a0a]" />
                  )}
                </span>

                {/* Card */}
                <div
                  className={`glass rounded-[1rem] border transition-all duration-500 relative overflow-hidden p-6 md:p-8 hover:border-[#E8A33D]/40 ${
                    exp.ongoing
                      ? "border-[#E8A33D]/30 bg-[#E8A33D]/[0.03]"
                      : "border-white/10"
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8A33D] via-[#E8A33D]/40 to-transparent" />
                  {exp.ongoing && (
                    <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#E8A33D]/[0.08] blur-[80px] rounded-full pointer-events-none" />
                  )}

                  {/* Header */}
                  <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-5 mb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-mono font-bold text-sm border ${
                          exp.ongoing
                            ? "bg-[#E8A33D] text-[#0a0a0a] border-[#E8A33D]"
                            : "bg-[#E8A33D]/10 text-[#E8A33D] border-[#E8A33D]/20"
                        }`}
                      >
                        {initials(exp.company)}
                      </div>

                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                            {exp.company}
                          </h3>
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#E8A33D] bg-[#E8A33D]/10 border border-[#E8A33D]/20 rounded-full px-2.5 py-1">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                exp.ongoing ? "bg-green-500 animate-pulse" : "bg-[#E8A33D]"
                              }`}
                            />
                            {exp.status}
                          </span>
                        </div>
                        <p className="text-[#E8A33D] text-sm md:text-base font-semibold mb-2.5">
                          {exp.role}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-300 bg-white/5 border border-white/10 rounded-md">
                            {exp.type}
                          </span>
                          <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-300 bg-white/5 border border-white/10 rounded-md">
                            {exp.mode}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-left md:text-right shrink-0 space-y-1.5 pl-16 md:pl-0">
                      <p className="flex items-center md:justify-end gap-2 text-sm text-zinc-200 font-mono">
                        <Calendar size={14} className="text-[#E8A33D]" />
                        {exp.duration}
                      </p>
                      <p className="flex items-center md:justify-end gap-2 text-xs text-zinc-500">
                        <MapPin size={12} />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-6" />

                  {/* Stack */}
                  {exp.stack.length > 0 && (
                    <div className="mb-6">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">
                        Skills &amp; Tools
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech.name}
                            className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] md:text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-zinc-200 [&>svg]:text-sm"
                          >
                            {tech.icon}
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights */}
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">
                    What I do
                  </p>
                  <ul className="space-y-2.5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D] mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Certificate */}
                  {exp.certificateLink && (
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#E8A33D] bg-[#E8A33D]/10 border border-[#E8A33D]/30 rounded-full hover:bg-[#E8A33D] hover:text-[#0a0a0a] transition-all duration-300 group/btn"
                    >
                      View Certificate
                      <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;