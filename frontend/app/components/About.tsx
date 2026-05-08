"use client";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        {/* Title aur Line ko center karne ke liye classes add ki hain */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest text-white/85">
            About Me
          </h2>
          {/* mx-auto se line center ho jayegi */}
          <div className="h-1 w-30 md:w-38 bg-indigo-500 mt-2 rounded-full mx-auto" />
        </div>

        {/* Glass container */}
        <div className="glass p-6 sm:p-8 md:p-16 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 relative overflow-hidden group shadow-2xl">
          
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-indigo-500/10 blur-[80px] md:blur-[120px] rounded-full -mr-20 -mt-20 pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700" />
          
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Content ko bhi center align kiya hai (mx-auto aur text-center) */}
          <div className="relative z-10 space-y-5 md:space-y-6 text-zinc-300 leading-relaxed text-base md:text-xl max-w-5xl mx-auto ">
            <p>
              I am <span className="text-white font-bold tracking-tight">Shahbaz Alam</span>, a dedicated <span className="text-white">Full Stack Developer</span> currently pursuing my B.Tech in Computer Science from <span className="text-white/90">PIMR, Bhopal</span>. 
              I thrive at the intersection of logic and design, specializing in the 
              <span className="text-indigo-400 font-semibold italic"> MERN stack</span>.
            </p>
            
            <p>
              My journey is fueled by a passion for <span className="text-purple-400 font-medium">Cloud Infrastructure</span> and <span className="text-purple-400 font-medium">DevOps</span>, using tools like AWS and Docker to ensure seamless application deployment.
            </p>

            <p className="hidden sm:block">
              Whether it&apos;s architecting a complex <span className="text-indigo-400 font-medium">Next.js</span> application or fine-tuning responsive UI with <span className="text-indigo-400 font-medium">Tailwind CSS</span>, I am committed to delivering high-performance products.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;