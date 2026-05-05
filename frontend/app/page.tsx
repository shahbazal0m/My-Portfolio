'use client';

import Background from "./components/Background";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About"; // Naya component import kiya

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden">
      {/* 1. Background fixed rahega */}
      <Background />
      
      {/* 2. Navigation fixed rahega */}
      <Navbar />

      {/* 3. Hero Section */}
      <Hero />

      {/* Divider: Hero aur About ke beech */}
      <div className="px-10 md:px-24 max-w-[1400px] mx-auto py-10">
        <div className="h-[1px] w-full bg-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>
      </div>

      {/* 4. About Me Section (B.Tech & Sheryians Education cards ke saath) */}
      <Projects />
      {/* <About /> */}

      {/* Divider: About aur Projects ke beech */}
      <div className="px-10 md:px-24 max-w-[1400px] mx-auto py-10">
        <div className="h-[1px] w-full bg-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>
      </div>

      {/* 5. Featured Projects Section */}
      <About />
      {/* <Projects /> */}

      {/* Divider: Projects aur Future Sections ke beech */}
      <div className="px-10 md:px-24 max-w-[1400px] mx-auto py-10">
        <div className="h-[1px] w-full bg-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>
      </div>

      {/* Yahan aap apna agla section (Technical Skills) add kar sakte hain */}
      
    </main>
  );
}