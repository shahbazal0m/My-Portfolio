"use client";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/shahbazal0m", icon: <SiGithub size={16} /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/iamshahbaz-alam/", icon: <FaLinkedinIn size={16} /> },
    { name: "Twitter", href: "https://x.com/shahbaz_al0m", icon: <FaXTwitter size={15} /> },
  ];

  return (
    <footer className="w-full py-10 px-6 md:px-24 border-t border-white/10 relative z-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#E8A33D] flex items-center justify-center shrink-0">
            <span className="text-[#0a0a0a] text-xs font-black tracking-tight">SA</span>
          </div>
          <span className="text-sm text-zinc-400">
            © {currentYear} <span className="text-white font-medium">Shahbaz Alam</span>
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#E8A33D] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#E8A33D]/40 hover:bg-[#E8A33D]/10 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;