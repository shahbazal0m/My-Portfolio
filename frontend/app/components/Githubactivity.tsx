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
    <section className="py-5 px-4 md:px-24 max-w-[1400px] mx-auto relative z-10">
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
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-300 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0"
          >
            <SiGithub size={14} />
            @shahbazal0m
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Graph Card Container */}
        <div className="bg-[#0d0d0d] p-3 sm:p-4 md:p-5 rounded-[1rem] border border-white/8 hover:border-indigo-500/20 transition-all duration-500 relative">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2">
              {/* Ping Indicator */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <p className="text-sm font-medium text-white">Contribution Graph</p>
            </div>
            <span className="text-xs text-zinc-500 bg-white/5 px-3 py-1 rounded-lg border border-white/5 whitespace-nowrap">
              Last 30 days
            </span>
          </div>

          {/* Full-width Divider Line */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          {/* Activity Graph Image */}
          <div className="w-full overflow-hidden rounded-xl border border-white/5">
            <a href="https://github.com/ashutosh00710/github-readme-activity-graph" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://github-readme-activity-graph.vercel.app/graph?username=shahbazal0m&theme=tokyo-night&hide_border=true&area=true&custom_title=Shahbaz%20Alam's%20Contribution%20Activity&title_font_size=12" 
                alt="Shahbaz Alam's GitHub Activity Graph" 
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>

        {/* Repository Footnote Box */}
        <div className="mt-4">
          <a
            href="https://github.com/shahbazal0m"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0d0d0d] p-5 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all duration-300 group flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <SiGithub size={18} className="text-zinc-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">See all my repositories</p>
                <p className="text-zinc-500 text-xs">Projects, contributions & open source work</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Star size={13} className="text-yellow-400" />
                  {repoStats.stars} Stars
                </span>
                <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <GitFork size={13} className="text-indigo-400" />
                  {repoStats.forks} Forks
                </span>
              </div>
              <ExternalLink size={16} className="text-zinc-500 group-hover:text-indigo-400 transition-colors" />
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default GitHubActivity;