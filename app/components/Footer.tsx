"use client";
import { motion } from "framer-motion";
import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/shahbazal0m", icon: <SiGithub size={16} /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/iamshahbaz-alam/", icon: <FaLinkedinIn size={16} /> },
  { name: "Twitter", href: "https://x.com/shahbaz_al0m", icon: <FaXTwitter size={15} /> },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-10 bg-[#0d0d0d] border-t border-white/10 relative overflow-hidden z-10">
      {/* Full-width amber line + glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8A33D] via-[#E8A33D]/40 to-transparent" />
      <div className="absolute -top-16 left-0 w-72 h-56 bg-[#E8A33D]/[0.07] blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* Main grid */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-24 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#hero" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#E8A33D] flex items-center justify-center shrink-0">
                <span className="text-[#0a0a0a] text-sm font-black tracking-tight">SA</span>
              </div>
              <span className="text-lg font-semibold text-white tracking-tight">Shahbaz Alam</span>
            </a>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-5">
              Frontend Developer building clean, fast and responsive web interfaces.
            </p>

            <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[#E8A33D] bg-[#E8A33D]/10 border border-[#E8A33D]/20 rounded-full px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              Open to opportunities
            </span>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link, i) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-sm text-zinc-400 hover:text-[#E8A33D] transition-colors duration-300"
                  >
                    <span className="font-mono text-[10px] text-zinc-600 group-hover:text-[#E8A33D]/70 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">
              Connect
            </p>

            <a
              href="mailto:shahbazalam4842@gmail.com"
              className="group inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-[#E8A33D] transition-colors duration-300 mb-5 break-all"
            >
              <Mail size={15} className="text-[#E8A33D] shrink-0" />
              shahbazalam4842@gmail.com
              <ArrowUpRight
                size={13}
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0"
              />
            </a>

            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#0a0a0a] hover:bg-[#E8A33D] hover:border-[#E8A33D] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}

              <a
                href="https://drive.google.com/file/d/1aTGWlFF5-BQF5DDtj4cenCgVVb3j4beX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-[#E8A33D]/10 border border-[#E8A33D]/30 text-[#E8A33D] text-xs font-bold uppercase tracking-wider hover:bg-[#E8A33D] hover:text-[#0a0a0a] transition-all duration-300"
              >
                <FileText size={14} />
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Big faded name (full width) */}
        <div className="relative overflow-hidden select-none pointer-events-none text-center">
  <p className="text-[12vw] font-black leading-[0.9] tracking-tighter text-white/[0.03] whitespace-nowrap pb-2">
    SHAHBAZ ALAM
  </p>
</div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 md:px-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <p className="text-[11px] font-mono text-zinc-500">
              © {currentYear} Shahbaz Alam. All rights reserved.
            </p>
            <p className="text-[11px] font-mono text-zinc-600">
              Built with Next.js, TypeScript &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;