"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { ExternalLink, Star, GitFork } from "lucide-react";

type RepoStats = {
  stars: number;
  forks: number;
};

const GitHubActivity = () => {
  const [repoStats, setRepoStats] = useState<RepoStats>({ stars: 0, forks: 0 });

  useEffect(() => {
    fetch("https://api.github.com/users/shahbazal0m/repos?per_page=100")
      .then((res) => res.json())
      .then((repos: { stargazers_count: number; forks_count: number }[]) => {
        if (Array.isArray(repos)) {
          const stars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
          const forks = repos.reduce((sum, r) => sum + r.forks_count, 0);
          setRepoStats({ stars, forks });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="education" className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        {/* Header Section */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-1">Open Source</p>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white/85">GitHub Activity</h2>
          </div>
          <a
            href="https://github.com/shahbazal0m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0"
          >
            <SiGithub size={14} className="text-indigo-400" />
            <span>@shahbazal0m</span>
            <ExternalLink size={12} className="text-zinc-500" />
          </a>
        </div>

        {/* Graph Card Container */}
        <div className="bg-[#0d0d0d] p-4 sm:p-5 md:p-6 rounded-[1rem] border border-white/10 hover:border-indigo-500/20 transition-all duration-500 relative">
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <p className="text-sm font-medium tracking-wide text-zinc-200">Contribution Analytics</p>
            </div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-300 bg-indigo-500/10 px-1.5 py-1 rounded-md border border-indigo-500/20">
              Last 30 Days
            </span>
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-6" />

          <div className="w-full overflow-hidden rounded-xl bg-[#09090b]/40 border border-white/5 p-1 sm:p-2">
            <a href="https://github.com/ashutosh00710/github-readme-activity-graph" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://github-readme-activity-graph.vercel.app/graph?username=shahbazal0m&theme=tokyo-night&hide_border=true&area=true&custom_title=Shahbaz%20Alam's%20Contribution%20Graph&title_font_size=10" 
                alt="Shahbaz Alam's GitHub Activity Graph" 
                className="w-full h-auto object-cover select-none"
              />
            </a>
          </div>
        </div>

        {/* Repository Footnote Box - Ultra Responsive Fix */}
        <div className="mt-4">
          <a
            href="https://github.com/shahbazal0m"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0d0d0d] p-4 sm:p-5 rounded-[1rem] border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            {/* Left/Top Section: Icon + Title & Description */}
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 transition-all duration-500 shrink-0">
                <SiGithub size={18} className="text-zinc-400 group-hover:text-indigo-400 transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm group-hover:text-indigo-400 transition-colors duration-300 truncate">
                  See all my repositories
                </p>
                <p className="text-zinc-400/90 font-normal text-xs leading-relaxed tracking-wide antialiased transition-colors duration-300 group-hover:text-zinc-200/90 break-words sm:truncate">
                  Projects, contributions & open source work
                </p>
              </div>
            </div>
            
            {/* Bottom/Right Section: Stars, Forks & Redirect Button */}
            <div className="flex items-center justify-between md:justify-end gap-3 border-t border-white/5 pt-3 md:border-0 md:pt-0 w-full md:w-auto">
              <div className="flex items-center gap-3 w-full md:w-auto">
                <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-300 bg-indigo-500/10 px-1.5 py-1 rounded-md border border-indigo-500/20 flex items-center gap-1.5">
                  <Star size={10} className="text-yellow-500 fill-yellow-500/20 shrink-0" />
                  <span>{repoStats.stars} Stars</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-300 bg-indigo-500/10 px-1.5 py-1 rounded-md border border-indigo-500/20 flex items-center gap-1.5">
                  <GitFork size={10} className="text-indigo-400 shrink-0" />
                  <span>{repoStats.forks} Forks</span>
                </span>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all duration-500 shrink-0">
                <ExternalLink size={14} className="text-zinc-500 group-hover:text-indigo-400 transition-colors" />
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default GitHubActivity;