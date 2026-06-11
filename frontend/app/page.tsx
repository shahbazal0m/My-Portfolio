'use client';
import Background from "./components/Background";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import SkillsMarquee from "./components/SkillsMarquee";
import About from "./components/About";
import Projects from "./components/Projects";
import GitHubActivity from "./components/Githubactivity";
import Education from "./components/Education";
import Certifications from "./components/certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import ScrollToTop from "./components/Scrolltotop";
import VisitorCounter from "./components/Visitorcounter";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#030303] text-zinc-100">
      <Background />
      <Navbar />
      <Hero />
      <SkillsMarquee />

      <Divider />
      <About />

      <Divider />
      <Education />

      <Divider />
      <Projects />

      <Divider />
      <GitHubActivity />

      <Divider />
      <Certifications />

      <Divider />
      <Contact />

      {/* <div className="w-full flex justify-center py-6">
        <VisitorCounter />
      </div> */}

      {/* <Divider /> */}
      <Footer />

      <ScrollToTop />
    </main>
  );
}