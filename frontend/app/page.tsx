'use client';
import Background from "./components/Background";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import SkillsMarquee from "./components/SkillsMarquee"
import Projects from "./components/Projects";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Certifications from "./components/certificates";
import Footer from "./components/Footer";

export default function Home() {
  return (
    // min-h-screen ensure karta hai ki page pura stretch ho, overflow-x-hidden extra horizontal scroll rokta hai
    <main className="relative w-full min-h-screen bg-[#030303] text-zinc-100">
      <Background />
      <Navbar />
      <Hero />
      <SkillsMarquee />
      
      {/* Hero aur Projects ke beech divider */}
      <div className="px-10 md:px-24 max-w-[1400px] mx-auto py-10">
        <div className="h-[1px] w-full bg-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>
      </div>

      <About />

      {/* About aur Education ke beech divider */}
      <div className="px-10 md:px-24 max-w-[1400px] mx-auto py-10">
        <div className="h-[1px] w-full bg-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>
      </div>

      <Projects />

      {/* Projects aur About ke beech divider */}
      <div className="px-10 md:px-24 max-w-[1400px] mx-auto py-10">
        <div className="h-[1px] w-full bg-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>
      </div>

      <Education />

      <div className="px-10 md:px-24 max-w-[1400px] mx-auto py-10">
        <div className="h-[1px] w-full bg-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>
      </div>

        <Certifications />

      <div className="px-10 md:px-24 max-w-[1400px] mx-auto py-10">
        <div className="h-[1px] w-full bg-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>
      </div>

      <Contact />

      <div className="px-10 md:px-24 max-w-[1400px] mx-auto py-10">
        <div className="h-[1px] w-full bg-white/10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>
      </div>

      <Footer />
    </main>
  );
}