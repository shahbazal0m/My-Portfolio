"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eye, TrendingUp } from "lucide-react";

const Visitorcounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    fetch("/api/visitor")
      .then((res) => res.json())
      .then((data: { count: number }) => setCount(data.count))
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
        <div className="bg-[#0d0d0d] p-5 md:p-6 rounded-[1rem] border border-white/10 hover:border-indigo-500/20 transition-all duration-500 relative overflow-hidden">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Eye size={16} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold mb-0.5">Analytics</p>
                <h3 className="text-sm sm:text-base font-semibold text-white/85">Visitor Counter</h3>
              </div>
            </div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20 shrink-0">
              <TrendingUp size={12} className="inline mr-1 -mt-0.5" />
              Live
            </span>
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-5" />

          <div className="flex items-center justify-center gap-2 py-4">
            <p className="text-zinc-400 text-sm font-medium">
              You are the{" "}
              <span className="text-lg sm:text-xl font-semibold font-mono text-white tabular-nums">
                {count ?? (
                  <span className="text-zinc-600 animate-pulse">—</span>
                )}
              </span>
              <sup className="text-xs sm:text-sm text-zinc-500 font-mono ml-0.5">
                {count === 1 ? "st" : count === 2 ? "nd" : count === 3 ? "rd" : "th"}
              </sup>{" "}
              visitor
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Visitorcounter;
