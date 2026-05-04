'use client';

import Background from "./components/Background";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden">
      {/* Background fixed rahega */}
      <Background />
      
      {/* Navigation fixed rahega */}
      <Navbar />

      {/* Main Content Sections */}
      <Hero />

      {/* Improved Section Divider (Hero aur Projects ke beech) */}
      <div className="px-10 md:px-24 max-w-[1400px] mx-auto py-10">
        <div className="h-[1px] w-full bg-white/10 relative">
          {/* Center Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>
      </div>

      {/* 3. Featured Projects section */}
      <Projects />

      {/* Improved Section Divider (Projects aur agle section ke beech) */}
      <div className="px-10 md:px-24 max-w-[1400px] mx-auto py-10">
        <div className="h-[1px] w-full bg-white/10 relative">
          {/* Center Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>
      </div>

      {/* Yahan aap apna agla section (About ya Skills) add kar sakte hain */}
      
    </main>
  );
}