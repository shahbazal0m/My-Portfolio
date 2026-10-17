"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import {
  SiHtml5, 
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const stats = [
  { value: "2", label: "INTERNSHIPS" },
  { value: "6+", label: "PROJECTS" },
  { value: "5+", label: "CERTIFICATIONS" },
  { value: "20+", label: "TECHNOLOGIES" },
  { value: "∞", label: "CUPS OF COFFEE" },
];

const working = [
  { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <SiCss className="text-[#1572B6]" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
];

const learning = [
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Express", icon: <SiExpress className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
];

const tile =
  "relative overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-7 hover:border-[#E8A33D]/30 transition-colors duration-500 group";

const label =
  "text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4";

const chip =
  "inline-flex items-center gap-2 px-3 py-1.5 text-[11px] md:text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-zinc-200 [&>svg]:text-sm";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.08 },
});

const AboutMe = () => {
  return (
    <section id="about" className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <p className="text-[#E8A33D] text-xs font-mono font-bold uppercase tracking-[0.3em] mb-2">
            // Get to know me
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest text-white/85">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Intro */}
          <motion.div {...fade(0)} className={`${tile} md:col-span-4`}>
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8A33D] via-[#E8A33D]/40 to-transparent" />
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#E8A33D]/[0.07] blur-[90px] rounded-full pointer-events-none" />
            <p className="relative text-2xl md:text-3xl font-bold text-white leading-tight mb-5">
              I turn ideas into clean, fast interfaces that feel{" "}
              <span className="text-[#E8A33D]">right on every screen.</span>
            </p>
            <div className="relative space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base">
              <p>
                I&apos;m <span className="text-white font-medium">Shahbaz Alam</span>, a developer with a
                B.Tech in <span className="text-white font-medium">Computer Science &amp; Engineering</span> from{" "}
                <span className="text-white font-medium">PIMR, Bhopal</span>, affiliated to{" "}
                <span className="text-white font-medium">RGPV University, Bhopal, M.P.</span> I care about the
                small details: smooth animations, good spacing and code that stays easy to read.
              </p>
              <p>
                I&apos;ve interned as a Frontend Developer at{" "}
                <span className="text-white font-medium">Xubru Technologies</span> and{" "}
                <span className="text-white font-medium">Cognifyz Technologies</span>, where I learned to
                ship real UI work with a team.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div {...fade(1)} className={`${tile} md:col-span-2 flex flex-col justify-between`}>
            <p className={label}>By the numbers</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={i === stats.length - 1 ? "col-span-2" : ""}
                >
                  <p className="text-3xl md:text-4xl font-bold font-mono text-[#E8A33D] leading-none mb-1.5">
                    {s.value}
                  </p>
                  <p className="text-xs md:text-sm text-zinc-400">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Working with */}
          <motion.div {...fade(2)} className={`${tile} md:col-span-3`}>
            <p className={label}>What I work with</p>
            <div className="flex flex-wrap gap-2">
              {working.map((t) => (
                <span key={t.name} className={chip}>
                  {t.icon}
                  {t.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Learning */}
          <motion.div {...fade(3)} className={`${tile} md:col-span-3`}>
            <p className={label}>Currently learning</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {learning.map((t) => (
                <span key={t.name} className={chip}>
                  {t.icon}
                  {t.name}
                </span>
              ))}
            </div>
            <p className="text-xs text-zinc-500">
              Picking up the backend so I can build complete products end to end.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div {...fade(4)} className={`${tile} md:col-span-2 flex items-center gap-4`}>
            <div className="w-11 h-11 rounded-xl bg-[#E8A33D]/10 border border-[#E8A33D]/20 flex items-center justify-center text-[#E8A33D] shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1">
                Based in
              </p>
              <p className="text-white font-semibold">Nwe Delhi, India</p>
              <p className="text-xs text-zinc-500">From Darbhanga, Bihar</p>
            </div>
          </motion.div>

          {/* Status */}
          <motion.div
            {...fade(5)}
            className={`${tile} md:col-span-4 !border-[#E8A33D]/20 !bg-[#E8A33D]/[0.04]`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E8A33D]">
                Open to opportunities
              </p>
            </div>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              Looking for a Frontend Developer role where I can keep learning and contribute from day one.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;