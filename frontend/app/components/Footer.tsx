"use client";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-6 md:px-24 border-t border-white/8 bg-[#0a0a0a] relative z-10">
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="text-zinc-500 text-xs md:text-sm font-medium tracking-wide">
          © {currentYear} <span className="text-zinc-400 font-semibold hover:text-indigo-400 [0cursor-default">
              Shahbaz Alam
            </span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;