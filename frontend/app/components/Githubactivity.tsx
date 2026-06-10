"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { ExternalLink, Star, GitFork } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type ContributionDay = {
  date: string;
  count: number;
};

type RepoStats = {
  stars: number;
  forks: number;
};

const GitHubActivity = () => {
  const [data, setData] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);
  const [repoStats, setRepoStats] = useState<RepoStats>({ stars: 0, forks: 0 });

  useEffect(() => {
    // Contributions
    fetch("https://github-contributions-api.jogruber.de/v4/shahbazal0m?y=last")
      .then((res) => res.json())
      .then((json) => {
        const contributions: ContributionDay[] = json.contributions || [];
        const last30 = contributions.slice(-30).map((d) => ({
          date: new Date(d.date).getDate().toString(),
          count: d.count,
        }));
        const total = contributions.reduce((sum, d) => sum + d.count, 0);
        setData(last30);
        setTotalContributions(total);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    // Repo stats
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
    <section className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-1">Open Source</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white/85">
              GitHub Activity
            </h2>
          </div>
          <a
            href="https://github.com/shahbazal0m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-300 text-sm font-medium w-fit"
          >
            <SiGithub size={15} />
            @shahbazal0m
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Graph Card */}
        <div className="bg-[#0d0d0d] p-4 md:p-8 rounded-[1rem] border border-white/8 hover:border-indigo-500/20 transition-all duration-500 relative overflow-hidden">
          
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
              <p className="text-sm font-semibold text-white">Contribution Graph</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-zinc-500">
                <span className="text-indigo-400 font-bold">{totalContributions}</span> contributions this year
              </span>
              <span className="text-xs text-zinc-500 bg-white/5 px-3 py-1 rounded-lg border border-white/5 shrink-0">
                Last 30 days
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

          {/* Inner chart container */}
          <div className="bg-[#060608] rounded-2xl p-4 border border-white/5">

            {/* Chart title */}
            <p className="text-center text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Shahbaz Alam&apos;s Contribution Activity
            </p>

            {loading ? (
              <div className="h-[180px] flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={data} margin={{ top: 5, right: 5, left: 10, bottom: 15 }}>
                  <defs>
                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.08)"
                    vertical={true}
                  />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#52525b", fontSize: 9 }}
                    axisLine={false}
                    tickLine={false}
                    label={{ value: "Days", position: "insideBottom", offset: -8, fill: "#52525b", fontSize: 10 }}
                    interval={2}
                  />
                  <YAxis
                    tick={{ fill: "#52525b", fontSize: 9 }}
                    axisLine={false}
                    tickLine={false}
                    width={25}
                    label={{ value: "Contributions", angle: -90, position: "insideLeft", offset: -5, fill: "#52525b", fontSize: 9 }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#18181b",
                      border: "1px solid rgba(99,102,241,0.3)",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                    formatter={(value: number) => [`${value} contributions`, ""]}
                    labelFormatter={(label) => `Day ${label}`}
                  />
                  <Area
                    type="monotone"
                    dataKey="count"
                    stroke="#6366f1"
                    strokeWidth={2}
                    fill="url(#colorCount)"
                    dot={{ fill: "#fff", r: 2, strokeWidth: 0 }}
                    activeDot={{ r: 4, fill: "#6366f1", stroke: "#fff", strokeWidth: 1 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* See all repositories */}
        <div className="mt-4">
          <a
            href="https://github.com/shahbazal0m?tab=repositories"
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